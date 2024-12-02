import React from 'react';

import axiosInstance from '../../axios'; // Adjust the path as needed

const ExportData = () => {
    const handleExport = async (format) => {
        try {
            const response = await axiosInstance.get(`/api/export?format=${format}`, {
                responseType: 'blob', // Ensure the response is treated as a binary file
            });
            const url = window.URL.createObjectURL(new Blob([response.data]));
            const link = document.createElement('a');
            link.href = url;
            link.setAttribute('download', `export.${format}`);
            document.body.appendChild(link);
            link.click();
            link.remove();
        } catch (error) {
            console.error('Error exporting data:', error);
        }
  };

  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <h2 className="text-lg font-bold text-gray-800 mb-4">Export Data</h2>
      <div className="flex space-x-4">
        <button
          onClick={() => handleExport('csv')}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Export as CSV
        </button>
        <button
          onClick={() => handleExport('json')}
          className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
        >
          Export as JSON
        </button>
        <button
          onClick={() => handleExport('pdf')}
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
        >
          Export as PDF
        </button>
      </div>
    </div>
  );
};

export default ExportData;
