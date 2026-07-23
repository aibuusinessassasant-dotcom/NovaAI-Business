import {
  ResponsiveContainer,
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip
} from "recharts";

export default function RevenueChart({ sales }) {

  const revenueData =
    sales.length > 0
      ? sales.map((item, index) => ({
          month: `M${index + 1}`,
          revenue: Number(item.amount || 0)
        }))
      : [
          { month: "Jan", revenue: 3200 },
          { month: "Feb", revenue: 5400 },
          { month: "Mar", revenue: 6800 },
          { month: "Apr", revenue: 8900 },
          { month: "May", revenue: 10400 },
          { month: "Jun", revenue: 12800 }
        ];

  return (
    <div className="chart-container">

      <h3>💰 Revenue Growth</h3>

      <ResponsiveContainer width="100%" height={320}>

        <LineChart data={revenueData}>

          <CartesianGrid strokeDasharray="4 4" stroke="#334155" />

          <XAxis dataKey="month" stroke="#94a3b8" />

          <YAxis stroke="#94a3b8" />

          <Tooltip
            contentStyle={{
              background: "#0f172a",
              border: "none",
              borderRadius: "12px",
              color: "#fff"
            }}
          />

          <Line
            type="monotone"
            dataKey="revenue"
            stroke="#8b5cf6"
            strokeWidth={4}
            dot={{
              r: 5,
              fill: "#8b5cf6"
            }}
            activeDot={{
              r: 8
            }}
            animationDuration={2000}
          />

        </LineChart>

      </ResponsiveContainer>

    </div>
  );
}