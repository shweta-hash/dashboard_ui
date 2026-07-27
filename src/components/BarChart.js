"use client";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
} from "chart.js";

import { Bar } from "react-chartjs-2";

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

export default function BarChart() {
  const data = {
    labels: ["2009", "2010", "2011", "2012", "2013", "2014", "2015"],

    datasets: [
      {
        label: "Series A",
        data: [100, 75, 50, 75, 50, 75, 100],
        backgroundColor: "#4F80FF",
        barPercentage: 0.70,
        categoryPercentage: 0.6,
      },
      {
        label: "Series B",
        data: [90, 65, 40, 65, 40, 65, 90],
        backgroundColor: "#67D67A",
        barPercentage: 0.70,
        categoryPercentage: 0.6,
      },
      {
        label: "Series C",
        data: [40, 20, 50, 95, 22, 56, 60],
        backgroundColor: "#FF4D8D",
        barPercentage: 0.70,
        categoryPercentage:0.6,
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
        max: 100,

        ticks: {
          stepSize: 25,
        },

        grid: {
          color: "#f1f1f1",
        },
      },
    },
  };

  return (
    <div className="h-66 mt-3 w-full min-w-0">
      <Bar data={data} options={options} />
    </div>
  );
}
