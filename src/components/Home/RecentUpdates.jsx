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
    { id: 3, name: "Vulnerability Z", date: "2024-11-29", severity: "Low" },
    { id: 3, name: "Vulnerability Z", date: "2024-11-29", severity: "High" },
    { id: 3, name: "Vulnerability Z", date: "2024-11-29", severity: "Low" },
    { id: 3, name: "Vulnerability Z", date: "2024-11-29", severity: "Critical" },
    { id: 3, name: "Vulnerability Z", date: "2024-11-29", severity: "High" },
  ];

  const severityColors = {
    Critical: "red",
    High: "yellow",
    Low: "green",
  };

  return (
    <div className="bg-white h-full border-2 border-gray-300 rounded-lg">
      <h3 className="text-lg font-semibold text-gray-800 border-b-2 px-6 py-3">
        Recent Updates
      </h3>
      <ul className="space-y-4 p-6">
        {updates.map((update) => (
          <li
            key={update.id}
            className="flex justify-between items-center last:border-none"
          >
            <div>
              <p className="text-md font-medium text-gray-900">{update.name}</p>
              <p className="text-sm text-gray-500">{update.date}</p>
            </div>
            <Badge color={severityColors[update.severity]}>
              {update.severity}
            </Badge>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecentUpdates;
