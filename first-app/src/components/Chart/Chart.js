import React from "react";
import ChartBar from "./ChartBar";

import "./Chart.css";
const Chart = (props) => {
  console.log(props.chartDataPoints);
  let values = props.chartDataPoints.map((dataPoint) => dataPoint.value);
  console.log(values);
  const totalMaximum = Math.max(...values);
  console.log(totalMaximum);
  const bars = props.chartDataPoints.map((dataPoint) => (
    <ChartBar
      key={dataPoint.label}
      label={dataPoint.label}
      value={dataPoint.value}
      maxValue={totalMaximum}
    />
  ));
  return <div className="chart">{bars}</div>;
};

export default Chart;
