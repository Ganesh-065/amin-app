import React, { useState } from "react";
import Chart from "react-apexcharts";

export default function App() {
  const [chartDate] = useState({
    options: {
      xaxis: {
        categories: [100, 200, 300, 400, 500, 600, 700, 800, 900],
        axisBorder: { show: true },
        axisTicks: { show: false },
        labels: { show: true },
      },
      yaxis: { show: false },
      grid: { show: false },
      chart: {
        sparkline: {
          enabled: false,
        },
        toolbar: {
          show: false,
        },
      },
    },
    series: [
      {
        name: "series-1",
        data: [10, 20, 30, 40, 50, 60, 70, 80, 90],
      },
    ],
  });

  return (
    <div>
      <Chart
        options={chartDate.options}
        series={chartDate.series}
        type="bar"
        width="500"
      />
      <Chart
        options={{
          labels: ["A", "B", "C", "D", "E"],
          chart: { sparkline: { enabled: true } },
        }}
        series={[44, 55, 41, 17, 15]}
        type="donut"
        width="380"
      />
    </div>
  );
}
