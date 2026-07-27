"use client";

export default function EarningsCard({ title, stats, children, theme}) {
  return (
    <div
      className={`${theme === "light" ? "bg-white" : "bg-gray-700"} rounded-lg shadow p-4`}
    >
      <h2
        className={`font-semibold ${theme === "light" ? "text-gray-700" : "text-gray-200"}`}
      >
        {title}
      </h2>

      <div className="grid grid-cols-3 text-center mt-4">
        {stats.map((item, index) => (
          <div key={index}>
            <h3
              className={`text-lg font-bold ${theme === "light" ? "text-gray-700" : "text-gray-200"}`}
            >
              {item.value}
            </h3>

            <p
              className={`text-[10px] ${theme === "light" ? "text-gray-700" : "text-gray-200"} mt-1`}
            >
              {item.label}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-6">{children}</div>
    </div>
  );
}
