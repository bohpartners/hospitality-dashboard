interface DataPoint {
  label: string;
  value: number;
}

interface SalesOverviewProps {
  barTimeframeData: DataPoint[];
  pieData: { name: string; value: number }[] | undefined;
}

export default function SalesOverview({ barTimeframeData, pieData }: SalesOverviewProps) {
  return (
    <div className="bg-gray-100 rounded-2xl shadow-xl p-4">
      <h2 className="text-lg font-bold mb-4">Sales Overview</h2>
      <p>Bar Chart and Pie Chart will go here.</p>
    </div>
  );
}