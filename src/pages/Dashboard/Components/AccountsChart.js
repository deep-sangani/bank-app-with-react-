import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "right",
    },
  },
};
export const data = {
  labels: ["Saving Acc", "Salary Acc", "Minor Acc", "Pansion Acc", "Loan Acc"],
  datasets: [
    {
      label: "# of Votes",
      data: [12, 19, 3, 5, 2],
      backgroundColor: ["#6160D0", "black", "#FF4A55", "#FFB74A", "#54C5EB"],
    },
  ],
};

export default function AccountsChart() {
  return <Doughnut data={data} options={options} className="scale-75 -mt-20" />;
}
