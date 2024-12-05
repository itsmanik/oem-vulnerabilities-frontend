import React from "react";

const KeyStatistics = () => {
  return (
    <div className="bg-white shadow rounded-lg p-6">
      <h3 className="text-lg font-semibold text-gray-800 mb-4">Key Statistics</h3>
      <table className="w-full text-left border-collapse">
        <tbody className="text-md">
          <tr>
            <td className="py-1 text-gray-600">Total Vulnerabilities</td>
            <td className="py-1 font-bold text-gray-800">650</td>
          </tr>
          <tr className="bg-gray-100">
            <td className="py-1 text-gray-600">Critical</td>
            <td className="py-1 font-bold text-red-500">50</td>
          </tr>
          <tr>
            <td className="py-1 text-gray-600">High</td>
            <td className="py-1 font-bold text-yellow-500">120</td>
          </tr>
          <tr className="bg-gray-100">
            <td className="py-1 text-gray-600">Monitored OEMs</td>
            <td className="py-1 font-bold text-gray-800">45</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default KeyStatistics;
