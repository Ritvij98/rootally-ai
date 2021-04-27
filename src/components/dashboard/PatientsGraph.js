import React from "react";
import Chart from "react-apexcharts";
import { useState } from "react";
export default function PatientsGraph() {
  const [chartConfig, setChartConfig] = useState({
    series: [
      {
        name: "Patients 2020",
        data: [31, 40, 28, 51, 42, 109, 80, 100, 120, 99, 121, 109],
      },
      {
        name: "Patients 2019",
        data: [11, 32, 45, 32, 34, 52, 41, 11, 32, 45, 32, 34],
        color: "#d93067",
      },
    ],
    options: {
      chart: {
        height: 350,
        type: "area",
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "smooth",
        width: 1.8,
      },
      xaxis: {
        type: "category",
        categories: [
          "2020-1",
          "2020-2",
          "2020-3",
          "2020-4",
          "2020-5",
          "2020-6",
          "2020-7",
          "2020-8",
          "2020-9",
          "2020-10",
          "2020-11",
          "2020-12",
        ],
      },
      tooltip: {
        x: {
          format: "dd/MM/yy HH:mm",
        },
      },
    },
  });
  return (
    <Chart
      options={chartConfig.options}
      series={chartConfig.series}
      type="area"
      height={350}
    />
  );
}
