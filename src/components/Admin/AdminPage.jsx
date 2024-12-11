import React, { useState } from "react";
import { Line, Pie } from "react-chartjs-2";
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

// Registering necessary chart elements
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const DashboardCard = ({ title, value }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col justify-center items-center space-y-4">
      <h3 className="text-lg font-semibold text-gray-700 mb-2">{title}</h3>
      <p className="text-2xl font-bold text-blue-600">{value}</p>
    </div>
  );
};

const ErrorLogs = ({ logs }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h2 className="text-xl font-semibold text-gray-700 mb-4">Error Logs</h2>
      <ul className="space-y-3">
        {logs.length > 0 ? (
          logs.map((log, index) => (
            <li
              key={index}
              className="bg-gray-50 p-4 rounded-md shadow-sm hover:bg-gray-100 transition"
            >
              <span className="text-gray-600">{log}</span>
            </li>
          ))
        ) : (
          <p className="text-gray-500">No errors found!</p>
        )}
      </ul>
    </div>
  );
};

// Data for the Line and Pie Charts
const lineChartData = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
  datasets: [
    {
      label: "Monthly Scrapes",
      data: [30, 70, 45, 85, 55, 40, 75],
      borderColor: "rgb(75, 192, 192)",
      backgroundColor: "rgba(75, 192, 192, 0.2)",
      fill: true,
      tension: 0.1,
    },
  ],
};

const pieChartData = {
  labels: ["Success", "Failure", "In Progress"],
  datasets: [
    {
      data: [65, 25, 10],
      backgroundColor: ["#36A2EB", "#FF6384", "#FFCE56"],
      hoverBackgroundColor: ["#36A2EB", "#FF6384", "#FFCE56"],
    },
  ],
};

const AdminPage = () => {
  const [currentView, setCurrentView] = useState("dashboard");

  const dashboardData = [
    { title: "Last Scraped", value: "Dec 7, 2024, 10:30 AM" },
    { title: "Next Scraping In", value: "4 Hours 30 Min" },
    { title: "Errors Detected", value: "5" },
  ];

  const errorLogs = [
    "Error 1: Timeout on site A",
    "Error 2: Parsing failure on site B",
    "Error 3: Unknown error on site C",
  ];

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col px-6 py-8">
      <main className="flex-grow container mx-auto">
        {currentView === "dashboard" && (
          <div className="space-y-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {dashboardData.map((data, index) => (
                <DashboardCard key={index} title={data.title} value={data.value} />
              ))}
            </div>

            <div className="lg:flex lg:gap-8">
              {/* Error Logs Container - Slightly Wider */}
              <div className="bg-white rounded-lg shadow-lg p-6 w-full lg:w-2/3">
                <h2 className="text-xl font-semibold text-gray-700 mb-4">Error Logs</h2>
                <ul className="space-y-3">
                  {errorLogs.length > 0 ? (
                    errorLogs.map((log, index) => (
                      <li
                        key={index}
                        className="bg-gray-50 p-4 rounded-md shadow-sm hover:bg-gray-100 transition"
                      >
                        <span className="text-gray-600">{log}</span>
                      </li>
                    ))
                  ) : (
                    <p className="text-gray-500">No errors found!</p>
                  )}
                </ul>
              </div>

              {/* Pie Chart */}
              <div className="bg-white rounded-lg shadow-lg p-6 w-full lg:w-1/3 flex justify-center items-center">
                <h2 className="text-xl font-semibold text-gray-700 mb-4">Scrape Status</h2>
                <div className="w-64 h-64">
                  <Pie data={pieChartData} />
                </div>
              </div>
            </div>

            {/* Monthly Scrapes - Below Error Logs and Pie Chart */}
            <div className="bg-white rounded-lg shadow-lg p-4 w-full lg:w-3/4">
              <h2 className="text-xl font-semibold text-gray-700 mb-4">Monthly Scrapes</h2>
              <div className="h-72">
                <Line data={lineChartData} />
              </div>
            </div>
          </div>
        )}

        {currentView === "profile" && (
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">User Profile</h2>
            <p className="text-gray-600">Welcome to your profile! Add relevant details here.</p>
          </div>
        )}
      </main>
    </div>
  );
};

export default AdminPage;
