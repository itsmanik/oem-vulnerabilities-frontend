import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Register components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const data = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
  datasets: [
    {
      label: "Critical",
      data: [30, 40, 45, 50, 55, 60],
      borderColor: "#ff4d4f",
      tension: 0.4,
    },
    {
      label: "High",
      data: [50, 60, 70, 80, 85, 90],
      borderColor: "#faad14",
      tension: 0.4,
    },
  ],
};

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
  },
};

const SeverityTrend = () => {
  return (
    <div className="bg-white h-full shadow rounded-lg p-6">
      <h3 className="text-lg font-semibold text-gray-800 mb-4">
        Vulnerability Severity Trend
      </h3>
      <Line data={data} options={options} />
    </div>
  );
};

export default SeverityTrend;
