import React from "react";
import Chart from "react-apexcharts";

const BarChart = () => {
  const options = {
    chart: {
      id: "animated-bar",
      animations: {
        enabled: true,
        easing: "easeinout",
        speed: 800,
        animateGradually: {
          enabled: true,
          delay: 150,
        },
        dynamicAnimation: {
          enabled: true,
          speed: 350,
        },
      },
    },
    colors: ["#FF4560", "#00E396", "#008FFB"],
    xaxis: {
      categories: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    },
  };

  const series = [
    {
      name: "Visitors",
      data: [456, 479, 324, 569, 702, 600, 767],
    },
  ];

  return (
    <div>
      <Chart
        options={options}
        series={series}
        type="bar"
        height={400}
        width={500}
      />
    </div>
  );
};

export default BarChart;
