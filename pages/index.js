import React from "react";

const fallbackData = [
  { name: "Curl Curl", sales: 10000, teamSize: 5 },
  { name: "Bondi", sales: 15000, teamSize: 8 },
  { name: "Wategos", sales: 12000, teamSize: 6 },
  { name: "Tamarama", sales: 9000, teamSize: 4 },
];

export default function HomePage() {
  const performanceData = fallbackData;

  return (
    <div style={{ padding: "2rem", fontFamily: "Arial, sans-serif" }}>
      <h1>Hospitality Dashboard</h1>
      <p>Live overview of your cafés & commissary units.</p>

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
        gap: "1rem",
        marginTop: "2rem"
      }}>
        {performanceData.map((unit) => (
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
