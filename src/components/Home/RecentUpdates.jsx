import React from "react";
import { Badge, Flex } from "@radix-ui/themes";

const RecentUpdates = () => {
  const updates = [
    {
      id: 1,
      name: "Vulnerability X",
      date: "2024-12-01",
      severity: "Critical",
    },
    { id: 2, name: "Vulnerability Y", date: "2024-11-30", severity: "High" },
    { id: 3, name: "Vulnerability Z", date: "2024-11-29", severity: "Low" },
  ];

  return (
    <div className="bg-white shadow rounded-lg p-6">
      <h3 className="text-lg font-semibold text-gray-800 mb-4">
        Recent Updates
      </h3>
      <ul>
        {updates.map((update) => (
          <li key={update.id} className="mb-2">
            <span className="text-gray-800 font-bold">{update.name}</span> - 
            <span className="text-sm text-gray-500"> {update.date}</span> &nbsp;&nbsp; 
            <span>
              {update.severity === "Critical" && <Badge color="red">Critical</Badge> }
              {update.severity === "High" && <Badge color="yellow">High</Badge> }
              {update.severity === "Low" && <Badge color="green">Low</Badge> }
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecentUpdates;
