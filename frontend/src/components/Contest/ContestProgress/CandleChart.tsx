import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import { format } from "d3-format";
import { timeFormat } from "d3-time-format";
import {
  elderRay,
  ema,
  discontinuousTimeScaleProviderBuilder,
  Chart,
  ChartCanvas,
  CurrentCoordinate,
  BarSeries,
  CandlestickSeries,
  ElderRaySeries,
  LineSeries,
  MovingAverageTooltip,
  OHLCTooltip,
  SingleValueTooltip,
  lastVisibleItemBasedZoomAnchor,
  XAxis,
  YAxis,
  CrossHairCursor,
  EdgeIndicator,
  MouseCoordinateX,
  MouseCoordinateY,
  ZoomButtons,
  withDeviceRatio,
  withSize,
  CircleMarker,
  Label,
  Annotate,
  LabelAnnotation,
  HoverTooltip,
} from "react-financial-charts";

const dateTimeFormat = "%d %b";
const timeDisplayFormat = timeFormat(dateTimeFormat);


const CandleChart = (props) => {
  const ScaleProvider = discontinuousTimeScaleProviderBuilder().inputDateAccessor(
    (d) =>
      new Date(
        (d.date + d.time).replace(/(\d{4})(\d{2})(\d{2})(\d{2})(\d{2})(\d{2})/, "$1-$2-$3 $4:$5:$6")
      )
  );
  const height = props.curheight - 100 > 0 ? props.curheight - 100 : 0;
  const width = props.curwidth > 0 ? props.curwidth : 0;
  const margin = { left: 0, right: 100, top: 0, bottom: 24 };
  
  useEffect(()=>{
    console.log("props.chartInfos")
    console.log(props.chartInfos)
  }, [])

  // const ema12 = ema()
  //   .id(1)
  //   .options({ windowSize: 12 })
  //   .merge((d, c) => {
  //     d.ema12 = c;
  //   })
  //   .accessor((d) => d.ema12);

  // const ema26 = ema()
  //   .id(2)
  //   .options({ windowSize: 26 })
  //   .merge((d, c) => {
  //     d.ema26 = c;
  //   })
  //   .accessor((d) => d.ema26);
  // const elder = elderRay();
  

  const { data, xScale, xAccessor, displayXAccessor } = ScaleProvider(props.chartInfos);
  const pricesDisplayFormat = format(",");
  const max = xAccessor(data[data.length - 1]);
  const min = xAccessor(data[Math.max(0, data.length - 100)]);
  const xExtents = [min, max + 5];

  const gridHeight = height - margin.top - margin.bottom;

  const barChartHeight = 100;
  const barChartOrigin = (_, h) => [0, h - barChartHeight];
  const chartHeight = gridHeight - barChartHeight;
  // const elderRayHeight = 100;
  // const elderRayOrigin = (_, h) => [0, h - elderRayHeight];
  // const barChartHeight = gridHeight / 4;
  // const barChartOrigin = (_, h) => [0, h - barChartHeight - elderRayHeight];
  // const chartHeight = gridHeight - elderRayHeight;
  const yExtents = (data) => {
    return [data.high, data.low];
  };
  // // const dateTimeFormat = "%d %b";
  // const timeDisplayFormat = timeFormat(dateTimeFormat);

  const barChartExtents = (data) => {
    return data.volume;
  };

  const candleChartExtents = (data) => {
    const gap = data.high - data.low
    return [data.high + gap, data.low - gap];
  };

  const yEdgeIndicator = (data) => {
    return data.close;
  };

  const volumeColor = (data) => {
    // console.log(data);
    // console.log(initialData);
    return data.close > data.open ? "rgba(38, 166, 154, 0.3)" : "rgba(239, 83, 80, 0.3)";
  };

  const volumeSeries = (data) => {
    return data.volume;
  };

  const openCloseColor = (data) => {
    return data.close > data.open ? "#26a69a" : "#ef5350";
  };

  // function content(d) {
  //   return ({ currentItem, xAccessor }: any) => {
  //     return {
  //       x: timeFormat(xAccessor(currentItem)),
  //       y: [
  //         { label: "open", value: currentItem.open && pricesDisplayFormat(currentItem.open) },
  //         { label: "high", value: currentItem.high && pricesDisplayFormat(currentItem.high) },
  //         { label: "low", value: currentItem.low && pricesDisplayFormat(currentItem.low) },
  //         { label: "close", value: currentItem.close && pricesDisplayFormat(currentItem.close) },
  //       ]
  //         .filter((line) => line.value)
  //     };
  //   };
  // }


  const returnNum = (d) => {
    // console.log(xAccessor)
    let cur = d.datum.open > d.datum.close ? d.datum.low : d.datum.high
    let curMax = d.yScale.domain()[1]
    let curMin = d.yScale.domain()[0]
    let plus = d.datum.open > d.datum.close ? (24) : (-10)
    // console.log(tmp/chartHeight*(d.datum.open/(d.yScale.domain()[1]-d.yScale.domain()[0])))
    return chartHeight - (chartHeight * ((cur - curMin) / (curMax - curMin))) + plus
  }
  const returnPos = (d) => {
    // console.log(xAccessor)
    let cur = d.datum.open > d.datum.close ? d.datum.low : d.datum.high
    let curMax = d.yScale.domain()[1]
    let curMin = d.yScale.domain()[0]
    // let plus = d.datum.open > d.datum.close ? (48) : (-28)
    return chartHeight - (chartHeight * ((cur - curMin) / (curMax - curMin)))
  }

  // const annotationBuyProps = (d) => {
  //   // let ySize = 
  //   console.log(d)
  //   let annotationProps = {
  //     fontFamily: "Glyphicons Halflings",
  //     fontSize: 20,
  //     fill: "#060f8f",
  //     opacity: 0.8,
  //     text: "buy",
  //     y: chartHeight/2,
  //     onClick: console.log.bind(console),
  //     // tooltip: d => timeFormat("%b")((d.date + d.time).replace(/(\d{4})(\d{2})(\d{2})(\d{2})(\d{2})/, "$1-$2-$3 $4:$5:00")),
  //     // onMouseOver: console.log.bind(console),
  //   }
  //   return annotationProps
  // };
  const annotationBuyProps = {
    fontFamily: "Glyphicons Halflings",
    fontSize: 14,
    fill: "#060f8f",
    opacity: 0.8,
    text: "매수",
    y: d => returnNum(d),
    onClick: console.log.bind(console),
  };
  const annotationBuyPropsPos = {
    fontFamily: "Glyphicons Halflings",
    fontSize: 14,
    fill: "#000000",
    opacity: 0.8,
    text: "―",
    y: d => returnPos(d)+5,
  };

  const annotationSellProps = {
    fontFamily: "Glyphicons Halflings",
    fontSize: 14,
    fill: "#8f0606",
    opacity: 0.8,
    text: "매도",
    y: d => returnNum(d),
    onClick: console.log.bind(console),
  };
  const annotationSellPropsPos = {
    fontFamily: "Glyphicons Halflings",
    fontSize: 14,
    fill: "#000000",
    opacity: 0.8,
    text: "―",
    y: d => returnPos(d)+5,
  };

  const checkHistoryType = (date: string, time: string, type: string) => {
    // console.log(date + " " + time)
    let flag = false;
    props.optionHistory.forEach(element => {
      if (element.date === date && element.time === time && element.type === type) {
        // console.log(element.date + " " + element.time)
        flag = true;
        return false;
      }
    });
    return flag;
  }


  return (
    <ChartCanvas
      height={height}
      ratio={3}
      width={width}
      margin={margin}
      data={data}
      displayXAccessor={displayXAccessor}
      seriesName="Data"
      xScale={xScale}
      xAccessor={xAccessor}
      xExtents={xExtents}
      zoomAnchor={lastVisibleItemBasedZoomAnchor}
    >

      <Chart id={3} height={chartHeight} yExtents={candleChartExtents}>
        <XAxis showGridLines showTickLabel={false} />
        {/* <XAxis showGridLines gridLinesStrokeStyle="#e0e3eb" /> */}

        <MouseCoordinateX displayFormat={timeDisplayFormat} />
        <MouseCoordinateY rectWidth={margin.right} displayFormat={pricesDisplayFormat} />
        <YAxis showGridLines tickFormat={pricesDisplayFormat} />
        <CandlestickSeries />
        {/* <LineSeries yAccessor={ema26.accessor()} strokeStyle={ema26.stroke()} />
        <CurrentCoordinate yAccessor={ema26.accessor()} fillStyle={ema26.stroke()} />
        <LineSeries yAccessor={ema12.accessor()} strokeStyle={ema12.stroke()} />
        <CurrentCoordinate yAccessor={ema12.accessor()} fillStyle={ema12.stroke()} /> */}
        {/* <MouseCoordinateY rectWidth={margin.right} displayFormat={pricesDisplayFormat} /> */}
        <EdgeIndicator
          itemType="last"
          rectWidth={margin.right}
          fill={openCloseColor}
          lineStroke={openCloseColor}
          displayFormat={pricesDisplayFormat}
          yAccessor={yEdgeIndicator}
        />
        <Annotate with={LabelAnnotation}
          when={d => (checkHistoryType(d.date, d.time, "buy"))}
          usingProps={(annotationBuyProps)}
        />
        <Annotate with={LabelAnnotation}
          when={d => (checkHistoryType(d.date, d.time, "buy"))}
          usingProps={(annotationBuyPropsPos)}
        />
        <Annotate with={LabelAnnotation}
          when={d => (checkHistoryType(d.date, d.time, "sell"))}
          usingProps={(annotationSellProps)} />
        <Annotate with={LabelAnnotation}
          when={d => (checkHistoryType(d.date, d.time, "sell"))}
          usingProps={(annotationSellPropsPos)} />

        {/* <MovingAverageTooltip
          origin={[8, 24]}
          options={[
            {
              yAccessor: ema26.accessor(),
              type: "EMA",
              stroke: ema26.stroke(),
              windowSize: ema26.options().windowSize,
            },
            {
              yAccessor: ema12.accessor(),
              type: "EMA",
              stroke: ema12.stroke(),
              windowSize: ema12.options().windowSize,
            },
          ]}
        /> */}
        
        <OHLCTooltip origin={[8, 16]} />
      </Chart>

      {/* <Chart id={2} height={barChartHeight} origin={barChartOrigin} yExtents={barChartExtents}>
        <BarSeries fillStyle={volumeColor} yAccessor={volumeSeries} />
      </Chart> */}

      <Chart
        id={4}
        height={barChartHeight}
        yExtents={barChartExtents}
        origin={barChartOrigin}
        padding={{ top: 8, bottom: 8 }}
      >
        <BarSeries fillStyle={volumeColor} yAccessor={volumeSeries} />
        {/* <ElderRaySeries yAccessor={elder.accessor()} /> */}

        <XAxis showGridLines gridLinesStrokeStyle="#e0e3eb" />
        <YAxis ticks={4} tickFormat={pricesDisplayFormat} />
        

        {/* <SingleValueTooltip
          yAccessor={elder.accessor()}
          yLabel="Elder Ray"
          yDisplayFormat={(d) =>
            `${pricesDisplayFormat(d.bullPower)}, ${pricesDisplayFormat(d.bearPower)}`
          }
          origin={[8, 16]}
        /> */}
      </Chart>
      <CrossHairCursor />
    </ChartCanvas>
  );
};

export default CandleChart;
