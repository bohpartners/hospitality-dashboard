"use client";

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
  const [dateRange, setDateRange] = useState({ start: "2024-01-01", end: "2024-12-31" });
  const [barTimeframeData, setBarTimeframeData] = useState([]);

  const generateTimeframeData = (timeframe) => {
    const labels = {
      Day: Array.from({ length: 24 }, (_, i) => `${i}:00`),
      Week: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      Month: ["Week 1", "Week 2", "Week 3", "Week 4"],
      Quarter: ["Jan-Mar", "Apr-Jun", "Jul-Sep", "Oct-Dec"],
      Year: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    };
    const fallback = ["N/A"];
    const selectedLabels = labels[timeframe] || fallback;
    return selectedLabels.map((label) => ({ label, value: Math.floor(Math.random() * 10000) || 1000 }));
  };

  useEffect(() => {
    const data = generateTimeframeData(timeframe);
    setBarTimeframeData(Array.isArray(data) ? data : [{ label: "N/A", value: 1000 }]);
  }, [timeframe]);

  const filteredData =
    selectedUnit === "All"
      ? performanceData
      : performanceData.filter((unit) => unit.name === selectedUnit);

  const activeUnit = selectedUnit === "All" ? performanceData[0] : filteredData[0];

  const pieData = Object.entries(activeUnit.salesSources).map(([name, value]) => ({ name, value }));

  return (
    <div className="p-6 bg-white text-black min-h-screen space-y-6">
      <DashboardHeader
        selectedUnit={selectedUnit}
        setSelectedUnit={setSelectedUnit}
        timeframe={timeframe}
        setTimeframe={setTimeframe}
        dateRange={dateRange}
        setDateRange={setDateRange}
      />
      <SalesOverview barTimeframeData={barTimeframeData} pieData={pieData} />
      <MapView units={performanceData} />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <EBITDAChart data={activeUnit} />
        <StaffTable staff={activeUnit.staffLog} />
      </div>
      <PnLSummary pnl={activeUnit.pnl} />
    </div>
  );
}