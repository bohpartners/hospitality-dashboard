export default function StaffTable({ staff }) {
  return (
    <div className="bg-gray-100 rounded-2xl shadow-xl p-4">
      <h2 className="text-lg font-bold mb-4">Staff Table</h2>
      <ul>
        {staff.map((member) => (
          <li key={member.id}>
            {member.name} - {member.role} ({member.hours} hours)
          </li>
        ))}
      </ul>
    </div>
  );
}