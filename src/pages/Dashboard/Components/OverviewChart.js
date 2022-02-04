import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  indexAxis: "x",
  elements: {
    bar: {
      borderWidth: 2,
    },
  },
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
  },
};

const labels = ["Mon", "Tue", "Wed", "Thr", "Fri"];

export const data = {
  labels,
  datasets: [
    {
      label: "Withdraw",
      data: labels.map(() => Math.random() * 100),
      backgroundColor: "#54C5EB",
      borderRadius: 15,
    },
    {
      label: "Deposit",
      data: labels.map(() => Math.random() * 100),
      backgroundColor: "#6160D0",
      borderRadius: 15,
    },
  ],
};

export default function OverviewChart() {
  return <Bar options={options} data={data} className="absolute bottom-4" />;
}
