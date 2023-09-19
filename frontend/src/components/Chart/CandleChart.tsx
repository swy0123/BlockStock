import React from "react";
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
import { initialData } from "./data copy";

// 데이터 형식형식
// {
//   date: "20210202",
//   time: "1515",
//   open: 134.8585,
//   low: 134.6237,
//   high: 134.9716,
//   close: 134.6608,
//   volume: 62892896
// },

// 차트 적용 방법 - components/Util의 componentRef를 이용해 적용할 div의 크기를
// 구하고 이를 인자로 적용하기, 거래량 나오려면 100 이상이어야 함 아래는 예시
// const [componentRef, size] = useComponentSize();
// useEffect(() => {
//   console.log(componentRef)
// }, [componentRef]);
// <div ref={componentRef}>
//   {/*<div >
//     <p>가로너비: {size.width}px</p>
//     <p>세로너비: {size.height}px</p>
//   </div> */}
//   {/* 차트 */}
//   {size.width > 0 && size.height > 0 ? (
//     <CandleChart curwidth={size.width} curheight={size.height}></CandleChart>
//   ) : (
//     <></>
//   )}
// </div>;


const CandleChart = (props) => {
  const ScaleProvider = discontinuousTimeScaleProviderBuilder().inputDateAccessor(
    (d) =>
      new Date(
        (d.date + d.time).replace(/(\d{4})(\d{2})(\d{2})(\d{2})(\d{2})/, "$1-$2-$3 $4:$5:00")
      )
  );
  const height = props.curheight - 100 > 0 ? props.curheight - 100 : 0;
  const width = props.curwidth > 0 ? props.curwidth : 0;
  const margin = { left: 0, right: 48, top: 10, bottom: 24 };

  const ema12 = ema()
    .id(1)
    .options({ windowSize: 12 })
    .merge((d, c) => {
      d.ema12 = c;
    })
    .accessor((d) => d.ema12);

  const ema26 = ema()
    .id(2)
    .options({ windowSize: 26 })
    .merge((d, c) => {
      d.ema26 = c;
    })
    .accessor((d) => d.ema26);
  const elder = elderRay();

  // var annotationProps = {
  //   fontFamily: "Glyphicons Halflings",
  //   fontSize: 20,
  //   fill: "#060F8F",
  //   opacity: 0.8,
  //   text: "\ue182",
  //   y: ({ yScale }) => yScale.range()[0],
  //   onClick: console.log.bind(console),
  //   tooltip: d => d3.timeFormat("%b")(d.date),
  //   // onMouseOver: console.log.bind(console),
  // };

  const calculatedData = elder(ema26(ema12(initialData)));
  const { data, xScale, xAccessor, displayXAccessor } = ScaleProvider(initialData);
  const pricesDisplayFormat = format(".2f");
  const max = xAccessor(data[data.length - 1]);
  const min = xAccessor(data[Math.max(0, data.length - 100)]);
  const xExtents = [min, max + 5];

  const gridHeight = height - margin.top - margin.bottom;

  const elderRayHeight = 100;
  const elderRayOrigin = (_, h) => [0, h - elderRayHeight];
  const barChartHeight = gridHeight / 4;
  const barChartOrigin = (_, h) => [0, h - barChartHeight - elderRayHeight];
  const chartHeight = gridHeight - elderRayHeight;
  const yExtents = (data) => {
    return [data.high, data.low];
  };
  const dateTimeFormat = "%d %b";
  const timeDisplayFormat = timeFormat(dateTimeFormat);

  const barChartExtents = (data) => {
    return data.volume;
  };

  const candleChartExtents = (data) => {
    const gap = data.high-data.low
    return [data.high+gap, data.low-gap];
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


  const returmNum = (d) => {
    let cur = d.datum.close
    let curMax = d.yScale.domain()[1]
    let curMin = d.yScale.domain()[0]
    // console.log(typeof(d.datum.open))
    // console.log(d.datum.idx.index)
    // console.log(d.yScale.domain()[1])
    // console.log(tmp)
    // console.log(d.yScale.domain()[0])
    // console.log(d.yScale.domain()[1]-d.yScale.domain()[0])
    // console.log(tmp-d.yScale.domain()[0])
    // console.log(chartHeight)
    let plus = d.datum.open > d.datum.close ? (20) : (0)
    console.log(chartHeight * ((cur - curMin) / (curMax - curMin)))
    // console.log(tmp/chartHeight*(d.datum.open/(d.yScale.domain()[1]-d.yScale.domain()[0])))
    d.datum.open > d.datum.close ? d.datum.close : d.datum.open
    return chartHeight - (chartHeight * ((cur - curMin) / (curMax - curMin))) + plus
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
    fontSize: 20,
    fill: "#060f8f",
    opacity: 0.8,
    // text: d => d.open,
    text: "매도",
    y: d => returmNum(d),
    // y: d=>Number(d.close),
    onClick: console.log.bind(console),
  };

  const annotationSellProps = {
    fontFamily: "Glyphicons Halflings",
    fontSize: 20,
    fill: "#8f0606",
    opacity: 0.8,
    text: "매수",
    y: d => returmNum(d),
    onClick: console.log.bind(console),
    // tooltip: d => timeFormat("%b")((d.date + d.time).replace(/(\d{4})(\d{2})(\d{2})(\d{2})(\d{2})/, "$1-$2-$3 $4:$5:00")),
    // onMouseOver: console.log.bind(console),
  };

  const checkHistoryType = (date: string, time: string, type: string) => {
    console.log(date + " " + time)
    let flag = false;
    props.optionHistory.forEach(element => {
      if (data[element.turn].date === date && data[element.turn].time === time && element.type === type) {

        console.log(element.date + " " + element.time)
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

      <Chart id={2} height={barChartHeight} origin={barChartOrigin} yExtents={barChartExtents}>
        <BarSeries fillStyle={volumeColor} yAccessor={volumeSeries} />
      </Chart>

      <Chart id={3} height={chartHeight} yExtents={candleChartExtents}>
        <XAxis showGridLines showTickLabel={false} />
        {/* <XAxis showGridLines gridLinesStrokeStyle="#e0e3eb" /> */}
        <YAxis showGridLines tickFormat={pricesDisplayFormat} />
        <CandlestickSeries />
        <LineSeries yAccessor={ema26.accessor()} strokeStyle={ema26.stroke()} />
        <CurrentCoordinate yAccessor={ema26.accessor()} fillStyle={ema26.stroke()} />
        <LineSeries yAccessor={ema12.accessor()} strokeStyle={ema12.stroke()} />
        <CurrentCoordinate yAccessor={ema12.accessor()} fillStyle={ema12.stroke()} />
        <MouseCoordinateY rectWidth={margin.right} displayFormat={pricesDisplayFormat} />
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
          when={d => (checkHistoryType(d.date, d.time, "sell"))}
          usingProps={(annotationSellProps)} />

        <MovingAverageTooltip
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
        />
        <ZoomButtons />
        <OHLCTooltip origin={[8, 16]} />

        {/* <HoverTooltip
          yAccessor={ema26.accessor()}
          tooltip={content}
          fontSize={15}
        /> */}
      </Chart>
      <Chart
        id={4}
        height={elderRayHeight}
        yExtents={[0, elder.accessor()]}
        origin={elderRayOrigin}
        padding={{ top: 8, bottom: 8 }}
      >
        <ElderRaySeries yAccessor={elder.accessor()} />

        <XAxis showGridLines gridLinesStrokeStyle="#e0e3eb" />
        <YAxis ticks={4} tickFormat={pricesDisplayFormat} />

        <MouseCoordinateX displayFormat={timeDisplayFormat} />
        <MouseCoordinateY rectWidth={margin.right} displayFormat={pricesDisplayFormat} />
        {/* {props.optionHistory.map((item, index) => (
          <></>
        ))} */}

        <SingleValueTooltip
          yAccessor={elder.accessor()}
          yLabel="Elder Ray"
          yDisplayFormat={(d) =>
            `${pricesDisplayFormat(d.bullPower)}, ${pricesDisplayFormat(d.bearPower)}`
          }
          origin={[8, 16]}
        />
      </Chart>
      <CrossHairCursor />
    </ChartCanvas>
  );
};

export default CandleChart;
