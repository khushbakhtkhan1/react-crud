import React from "react";
import Chart from "react-apexcharts";

const LineChart = () => {
  const options = {
    chart: {
      id: "basic-line",
    },
    xaxis: {
      categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997],
    },
    stroke: {
      curve: "smooth",
    },
  };

  const series = [
    {
      name: "series-1",
      data: [30, 40, 35, 50, 49, 60, 70],
    },
  ];

  return (
    <div>
      <Chart options={options} series={series} type="line" width="500" />
    </div>
  );
};

export default LineChart;
