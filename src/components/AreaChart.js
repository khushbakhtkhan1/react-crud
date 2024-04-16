import React from "react";
import Chart from "react-apexcharts";

const AreaChart = () => {
  const options = {
    chart: {
      id: "animated-area",
      animations: {
        enabled: true,
        easing: "easeinout",
        speed: 1000,
        animateGradually: {
          enabled: true,
          delay: 300,
        },
        dynamicAnimation: {
          enabled: true,
          speed: 500,
        },
      },
    },
    xaxis: {
      categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    },
    dataLabels: {
      enabled: false,
    },
    fill: {
      type: "gradient",
      gradient: {
        shadeIntensity: 1,
        opacityFrom: 0.7,
        opacityTo: 0.9,
        stops: [0, 90, 100],
      },
    },
  };

  const series = [
    {
      name: "Net Profit",
      data: [34, 44, 54, 21, 12, 43],
    },
  ];

  return (
    <div>
      <Chart
        options={options}
        series={series}
        type="area"
        height={300}
        width={500}
      />
    </div>
  );
};

export default AreaChart;
