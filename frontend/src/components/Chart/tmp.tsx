import React, { useMemo } from "react";
import PropTypes from "prop-types";
import {
  format,
  timeFormat,
  ChartCanvas,
  Chart,
  CandlestickSeries,
  LineSeries,
  BarSeries,
  XAxis,
  YAxis,
  EdgeIndicator,
  HoverTooltip,
} from "react-stockcharts";
import {
  discontinuousTimeScaleProvider,
  ema,
  fitWidth,
  last,
} from "react-stockcharts/lib/helper";

const dateFormat = timeFormat("%Y-%m-%d");
const numberFormat = format(".2f");

function tooltipContent(ys: any[]) {
  return ({ currentItem, xAccessor }: any) => {
    return {
      x: dateFormat(xAccessor(currentItem)),
      y: [
        { label: "open", value: currentItem.open && numberFormat(currentItem.open) },
        { label: "high", value: currentItem.high && numberFormat(currentItem.high) },
        { label: "low", value: currentItem.low && numberFormat(currentItem.low) },
        { label: "close", value: currentItem.close && numberFormat(currentItem.close) },
      ].concat(
        ys.map((each) => ({
          label: each.label,
          value: each.value(currentItem),
          stroke: each.stroke,
        })).filter((line) => line.value)
      ),
    };
  };
}

const keyValues = ["high", "low"];

interface CandleStickChartProps {
  data: any[];
  width: number;
  ratio: number;
  type?: "svg" | "hybrid";
}

const CandleStickChartWithHoverTooltip: React.FC<CandleStickChartProps> = ({
  data,
  width,
  ratio,
  type = "svg",
}) => {
  const removeRandomValues = (data: any[]) => {
    return data.map((item) => {
      const newItem = { ...item };
      const numberOfDeletion = Math.floor(Math.random() * keyValues.length) + 1;
      for (let i = 0; i < numberOfDeletion; i += 1) {
        const randomKey = keyValues[Math.floor(Math.random() * keyValues.length)];
        newItem[randomKey] = undefined;
      }
      return newItem;
    });
  };

  let initialData = removeRandomValues(data);
  initialData = useMemo(() => removeRandomValues(data), [data]);

  const ema20 = ema()
    .id(0)
    .options({ windowSize: 20 })
    .merge((d, c) => {
      d.ema20 = c;
    })
    .accessor((d) => d.ema20);

  const ema50 = ema()
    .id(2)
    .options({ windowSize: 50 })
    .merge((d, c) => {
      d.ema50 = c;
    })
    .accessor((d) => d.ema50);

  const margin = { left: 80, right: 80, top: 30, bottom: 50 };

  const calculatedData = ema50(ema20(initialData));
  const xScaleProvider = discontinuousTimeScaleProvider.inputDateAccessor((d) => d.date);
  const { data: chartData, xScale, xAccessor, displayXAccessor } = xScaleProvider(
    calculatedData
  );

  const start = xAccessor(last(chartData));
  const end = xAccessor(chartData[Math.max(0, chartData.length - 150)]);
  const xExtents = [start, end];

  return (
    <ChartCanvas
      height={400}
      width={width}
      ratio={ratio}
      margin={margin}
      type={type}
      seriesName="MSFT"
      data={chartData}
      xScale={xScale}
      xAccessor={xAccessor}
      displayXAccessor={displayXAccessor}
      xExtents={xExtents}
    >
      <Chart
        id={1}
        yExtents={[d => [d.high, d.low], ema20.accessor(), ema50.accessor()]}
        padding={{ top: 10, bottom: 20 }}
      >
        <XAxis axisAt="bottom" orient="bottom" />
        <YAxis axisAt="right" orient="right" ticks={5} />
        <CandlestickSeries />
        <LineSeries yAccessor={ema20.accessor()} stroke={ema20.stroke()} />
        <LineSeries yAccessor={ema50.accessor()} stroke={ema50.stroke()} />
        <EdgeIndicator
          itemType="last"
          orient="right"
          edgeAt="right"
          yAccessor={d => d.close}
          fill={d => (d.close > d.open ? "#6BA583" : "#FF0000")}
        />
        <HoverTooltip
          yAccessor={ema50.accessor()}
          tooltipContent={tooltipContent([
            {
              label: `${ema20.type()}(${ema20.options().windowSize})`,
              value: d => numberFormat(ema20.accessor()(d)),
              stroke: ema20.stroke(),
            },
            {
              label: `${ema50.type()}(${ema50.options().windowSize})`,
              value: d => numberFormat(ema50.accessor()(d)),
              stroke: ema50.stroke(),
            },
          ])}
          fontSize={15}
        />
      </Chart>
      <Chart id={2} yExtents={[d => d.volume]} height={150} origin={(w, h) => [0, h - 150]}>
        <YAxis axisAt="left" orient="left" ticks={5} tickFormat={format(".2s")} />
        <BarSeries yAccessor={d => d.volume} fill={d => (d.close > d.open ? "#6BA583" : "#FF0000")} />
      </Chart>
    </ChartCanvas>
  );
};

CandleStickChartWithHoverTooltip.propTypes = {
  data: PropTypes.array.isRequired,
  width: PropTypes.number.isRequired,
  ratio: PropTypes.number.isRequired,
  type: PropTypes.oneOf(["svg", "hybrid"]).isRequired,
};

export default fitWidth(CandleStickChartWithHoverTooltip);
