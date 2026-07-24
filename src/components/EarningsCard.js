"use client";

export default function EarningsCard({ title, stats, children }) {
  return (
    <div className="bg-white rounded-lg shadow p-4">
      <h2 className="font-semibold text-gray-800">{title}</h2>

      <div className="grid grid-cols-3 text-center mt-4">
        {stats.map((item, index) => (
          <div key={index}>
            <h3 className="text-lg font-bold text-gray-800">{item.value}</h3>

            <p className="text-[10px] text-gray-500 mt-1">{item.label}</p>
          </div>
        ))}
      </div>

      <div className="mt-6">{children}</div>
    </div>
  );
}
