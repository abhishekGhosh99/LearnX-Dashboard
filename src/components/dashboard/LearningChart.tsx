"use client";

import { ResponsiveContainer, AreaChart, Area, XAxis, Tooltip } from "recharts";

const data = [
  { day: "Mon", hours: 2 },
  { day: "Tue", hours: 3 },
  { day: "Wed", hours: 1 },
  { day: "Thu", hours: 5 },
  { day: "Fri", hours: 4 },
  { day: "Sat", hours: 6 },
  { day: "Sun", hours: 3 },
];

const LearningChart = () => {
  return (
    <article className="h-full rounded-3xl border border-zinc-800 bg-zinc-900 p-6">
      <h2 className="mb-4 text-lg font-semibold">Weekly Learning Hours</h2>

      <ResponsiveContainer width="100%" height={250}>
        <AreaChart
          data={data}
          margin={{ top: 0, right: 20, left: 20, bottom: 0 }}
        >
          <defs>
            <linearGradient id="learning" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#22d3ee" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#22d3ee" stopOpacity={0} />
            </linearGradient>
          </defs>

          <XAxis dataKey="day" />

          <Tooltip
            contentStyle={{
              padding: 6,
              fontSize: 12,
              minWidth: 0,
              backgroundColor: "#0f1724",
              color: "#ffffff",
              border: "none",
              borderRadius: 6,
            }}
            itemStyle={{ padding: 0, color: "#ffffff" }}
            labelStyle={{ color: "#9ca3af" }}
          />

          <Area
            type="monotone"
            dataKey="hours"
            stroke="#22d3ee"
            fill="url(#learning)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </article>
  );
};

export default LearningChart;
