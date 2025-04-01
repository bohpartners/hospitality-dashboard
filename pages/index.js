import React from "react";
import performanceData from "../mockData"; // or your actual data source

const fallbackData = [
  {
    name: "Curl Curl",
    sales: 10000,
    teamSize: 5,
  },
  {
    name: "Freshwater",
    sales: 15000,
    teamSize: 6,
  },
];

export default function Home() {
  const data = Array.isArray(performanceData) && performanceData.length > 0
    ? performanceData
    : fallbackData;

  return (
    <div style={{ padding: "2rem", fontFamily: "Arial, sans-serif" }}>
      <h1>📊 Hospitality Dashboard</h1>
      <div style={{ display: "grid", gap: "1rem" }}>
        {data.map((unit) => (
          <div
            key={unit.name}
            style={{
              backgroundColor: "#f4f4f4",
              borderRadius: "12px",
              padding: "1rem",
              boxShadow: "0 1px 4px rgba(0, 0, 0, 0.1)"
            }}
          >
            <h2>{unit.name}</h2>
            <p><strong>Sales:</strong> ${unit.sales.toLocaleString()}</p>
            <p><strong>Team Size:</strong> {unit.teamSize}</p>
            <p><strong>Sales per Staff:</strong> ${(unit.sales / unit.teamSize).toFixed(2)}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
