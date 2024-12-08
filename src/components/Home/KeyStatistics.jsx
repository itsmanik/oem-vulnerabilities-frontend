import React from "react";

const KeyStatistics = () => {
  return (
    <div className="bg-white shadow h-full rounded-lg">
      <h3 className="text-lg font-semibold text-gray-800 px-6 py-3 border-b-2 mb-4">
        Key Statistics
      </h3>
      <table className="w-[85%] m-auto text-left border-collapse">
        <tbody className="text-md">
          <tr>
            <td className="py-1 p-1 text-gray-600">Total Vulnerabilities</td>
            <td className="py-1 p-1 font-bold text-gray-800 text-right">650</td>
          </tr>
          <tr className="bg-gray-100">
            <td className="py-1 p-1 text-gray-600">Critical</td>
            <td className="py-1 p-1 font-bold text-red-500 text-right">50</td>
          </tr>
          <tr>
            <td className="py-1 p-1 text-gray-600">High</td>
            <td className="py-1 p-1 font-bold text-yellow-500 text-right">120</td>
          </tr>
          <tr className="bg-gray-100">
            <td className="py-1 p-1 text-gray-600">Monitored OEMs</td>
            <td className="py-1 p-1 font-bold text-gray-800 text-right">45</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default KeyStatistics;
