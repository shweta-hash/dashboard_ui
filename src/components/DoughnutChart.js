"use client";

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export default function DoughnutChart({ title, value , theme}) {
  const data = {
    datasets: [
      {
        data: [25, 15, 20, 40],
        backgroundColor: ["#5FD47D", "#4C82F7", "#FF4D8D", "#EDF1F5"],
        cutout: "70%",
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  return (
    <div className="relative w-50 h-46 mt-6 mx-auto">
      <Doughnut data={data} options={options} />

      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <h2
          className={`text-xl ${theme === "light" ? "text-gray-700" : "text-gray-200"} font-bold`}
        >
          {title}
        </h2>
        <p
          className={`text-sm ${theme === "light" ? "text-gray-700" : "text-gray-200"}`}
        >
          {value}
        </p>
      </div>
    </div>
  );
}
