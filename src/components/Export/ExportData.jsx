import React from "react";
import axiosInstance from "../../axios"; // Adjust the path as needed

const ExportData = () => {
  const handleExport = async (format) => {
    try {
      const response = await axiosInstance.get(`/api/export?format=${format}`, {
        responseType: "blob", // Ensure the response is treated as a binary file
      });
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", `export.${format}`);
      document.body.appendChild(link);
      link.click();
      link.remove();
    } catch (error) {
      console.error("Error exporting data:", error);
    }
  };

  return (
    <div className="p-8 bg-gradient-to-b min-h-screen">
      <h1 className="text-3xl font-extrabold text-gray-900 mb-8 text-center">Export Data</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* CSV Export Section */}
        <div className="bg-white rounded-lg shadow-lg p-6 text-center">
          <h2 className="text-xl font-bold text-gray-800 mb-4">Export as CSV</h2>
          <p className="text-gray-600 mb-6">
            Download your data in CSV format, ideal for spreadsheet applications like Excel and Google Sheets.
          </p>
          <button
            onClick={() => handleExport("csv")}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Download CSV
          </button>
        </div>

        {/* JSON Export Section */}
        <div className="bg-white rounded-lg shadow-lg p-6 text-center">
          <h2 className="text-xl font-bold text-gray-800 mb-4">Export as JSON</h2>
          <p className="text-gray-600 mb-6">
            Get your data in JSON format, perfect for integration with APIs and software development projects.
          </p>
          <button
            onClick={() => handleExport("json")}
            className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
          >
            Download JSON
          </button>
        </div>

        {/* PDF Export Section */}
        <div className="bg-white rounded-lg shadow-lg p-6 text-center">
          <h2 className="text-xl font-bold text-gray-800 mb-4">Export as PDF</h2>
          <p className="text-gray-600 mb-6">
            Save your data in a professional PDF format, suitable for sharing and official documentation.
          </p>
          <button
            onClick={() => handleExport("pdf")}
            className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
          >
            Download PDF
          </button>
        </div>
      </div>
    </div>
  );
};

export default ExportData;
