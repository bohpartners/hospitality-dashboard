export default function PnLSummary({ pnl }) {
  return (
    <div className="bg-gray-100 rounded-2xl shadow-xl p-4">
      <h2 className="text-lg font-bold mb-4">P&L Summary</h2>
      <p>Revenue: ${pnl.revenue}</p>
      <p>Expenses: ${pnl.expenses}</p>
      <p>Profit: ${pnl.profit}</p>
    </div>
  );
}