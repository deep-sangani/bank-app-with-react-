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

export default function AccountsChart({ result }) {
  if (result) {
    const keys = Object.keys(result);
    const values = Object.values(result);
    const data = {
      labels: keys,
      datasets: [
        {
          label: "# of Votes",
          data: values,
          backgroundColor: [
            "#6160D0",
            "black",
            "#FF4A55",
            "#FFB74A",
            "#54C5EB",
          ],
        },
      ],
    };
    return (
      <Doughnut
        data={data || {}}
        options={options}
        className="scale-75 -mt-[100px]"
      />
    );
  }
  return <div>Loading...</div>;
}
