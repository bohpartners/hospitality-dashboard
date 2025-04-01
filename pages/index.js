import { useState, useEffect } from "react";
import DashboardHeader from "../components/DashboardHeader";
import SalesOverview from "../components/SalesOverview";
import MapView from "../components/MapView";
import EBITDAChart from "../components/EBITDAChart";
import StaffTable from "../components/StaffTable";
import PnLSummary from "../components/PnLSummary";
import { performanceData } from "../mockData";

export default function DashboardPage() {
  const [selectedUnit, setSelectedUnit] = useState("All");
  const [timeframe, setTimeframe] = useState("Week");
  const [barTimeframeData, setBarTimeframeData] = useState([]);
  const [dateRange, setDateRange] = useState({ start: "2024-01-01", end: "2024-12-31" });

  useEffect(() => {
    const labels = {
      Day: Array.from({ length: 24 }, (_, i) => `${i}:00`),
      Week: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      Month: ["Week 1", "Week 2", "Week 3", "Week 4"],
      Quarter: ["Q1", "Q2", "Q3", "Q4"],
      Year: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    };
    const selectedLabels = labels[timeframe] || ["N/A"];
    const newData = selectedLabels.map((label) => ({
      label,
      value: Math.floor(Math.random() * 10000) + 500,
    }));
    setBarTimeframeData(newData);
  }, [timeframe]);

  const filteredData =
    selectedUnit === "All"
      ? performanceData
      : performanceData.filter((unit) => unit.name === selectedUnit);

  return (
    <div className="p-6 space-y-6 bg-white text-black min-h-screen">
      <DashboardHeader
        selectedUnit={selectedUnit}
        setSelectedUnit={setSelectedUnit}
        timeframe={timeframe}
        setTimeframe={setTimeframe}
        dateRange={dateRange}
        setDateRange={setDateRange}
      />

      <SalesOverview barTimeframeData={barTimeframeData} pieData={filteredData} />
      <MapView data={filteredData} />
      <EBITDAChart data={filteredData} />
      <StaffTable data={filteredData} />
      <PnLSummary data={filteredData} />
    </div>
  );
}
