import { ChevronDown } from "lucide-react";

export default function DashboardHeader({
  selectedUnit,
  setSelectedUnit,
  timeframe,
  setTimeframe,
  dateRange,
  setDateRange,
}) {
  return (
    <div className="flex flex-wrap gap-4 justify-between items-center">
      <div className="flex gap-2">
        <div className="flex items-center gap-2 border rounded px-3 py-1">
          Unit: {selectedUnit} <ChevronDown className="w-4 h-4" />
        </div>
        <div className="flex items-center gap-2 border rounded px-3 py-1">
          Timeframe: {timeframe} <ChevronDown className="w-4 h-4" />
        </div>
        <div className="flex items-center gap-2 border rounded px-3 py-1">
          Custom <ChevronDown className="w-4 h-4" />
        </div>
      </div>
    </div>
  );
}