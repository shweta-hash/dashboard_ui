"use client";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from "chart.js";

import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
);

export default function AreaChart() {
  const data = {
    labels: ["2007", "2008", "2009", "2010", "2011", "2012", "2013"],

    datasets: [
      {
        label: "Series A",
        data: [0, 150, 70, 180, 90, 80, 30],
        backgroundColor: "rgba(84, 202, 219, 0.6)",
        borderColor: "#54CADB",
        fill: true,
        tension: 0.4,
        pointRadius: 0,
      },

      {
        label: "Series B",
        data: [0, 40, 200, 20, 360, 110, 30],
        backgroundColor: "rgba(247, 112, 143, 0.6)",
        borderColor: "#F7708F",
        fill: true,
        tension: 0.4,
        pointRadius: 0,
      },

      {
        label: "Series C",
        data: [0, 20, 80, 30, 40, 240, 20],
        backgroundColor: "rgba(255, 218, 138, 0.6)",
        borderColor: "#FFDA8A",
        fill: true,
        tension: 0.4,
        pointRadius: 0,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,

    plugins: {
      legend: {
        display: false,
      },
    },

    scales: {
      x: {
        grid: {
          display: false,
        },
      },

      y: {
        beginAtZero: true,

        grid: {
          display: false,
        },
      },
    },

    elements: {
      line: {
        borderWidth: 0,
      },
    },
  };

  return (
    <div className="h-64 w-full min-w-0">
      <Line data={data} options={options} />
    </div>
  );
}
