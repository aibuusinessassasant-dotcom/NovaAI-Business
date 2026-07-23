import {
  ResponsiveContainer,
  AreaChart,
  Area,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip
} from "recharts";

export default function SalesChart({ sales }) {

  const chartData =
    sales.length > 0
      ? sales.map((item, index) => ({
          name: `S${index + 1}`,
          sales: Number(item.amount || 0)
        }))
      : [
          { name: "Jan", sales: 4000 },
          { name: "Feb", sales: 6200 },
          { name: "Mar", sales: 5400 },
          { name: "Apr", sales: 7800 },
          { name: "May", sales: 9100 },
          { name: "Jun", sales: 11300 }
        ];

  return (
    <div className="chart-container">

      <h3>🛒 Sales Performance</h3>

      <ResponsiveContainer width="100%" height={320}>

        <AreaChart data={chartData}>

          <defs>

            <linearGradient id="salesGradient" x1="0" y1="0" x2="0" y2="1">

              <stop offset="0%" stopColor="#3b82f6" stopOpacity={0.8} />

              <stop offset="100%" stopColor="#3b82f6" stopOpacity={0} />

            </linearGradient>

          </defs>

          <CartesianGrid strokeDasharray="3 3" stroke="#334155" />

          <XAxis dataKey="name" stroke="#94a3b8" />

          <YAxis stroke="#94a3b8" />

          <Tooltip
            contentStyle={{
              background: "#0f172a",
              border: "none",
              borderRadius: "12px",
              color: "#fff"
            }}
          />

          <Area
            type="monotone"
            dataKey="sales"
            stroke="#3b82f6"
            strokeWidth={4}
            fill="url(#salesGradient)"
            animationDuration={1800}
          />

        </AreaChart>

      </ResponsiveContainer>

    </div>
  );
}