export default function EBITDAChart({ data }) {
  return (
    <div className="bg-gray-100 rounded-2xl shadow-xl p-4">
      <h2 className="text-lg font-bold mb-4">EBITDA Chart</h2>
      <p>EBITDA: ${data.ebitda}</p>
    </div>
  );
}