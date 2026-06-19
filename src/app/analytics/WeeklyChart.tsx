"use client";

import { Course } from "@/types/course";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

interface Props {
  courses: Course[];
}

const WeeklyChart = ({ courses }: Props) => {
  const today = new Date();
  const dayKeys = Array.from({ length: 7 }, (_, index) => {
    const date = new Date(today);
    date.setDate(today.getDate() - (6 - index));
    const iso = date.toISOString().slice(0, 10);

    return {
      label: date.toLocaleDateString("en-US", { weekday: "short" }),
      iso,
      count: 0,
    };
  });

  const progressByDay = dayKeys.reduce(
    (acc, day) => {
      acc[day.iso] = { ...day };
      return acc;
    },
    {} as Record<string, { label: string; iso: string; count: number }>,
  );

  courses.forEach((course) => {
    const createdAt = new Date(course.created_at).toISOString().slice(0, 10);
    if (progressByDay[createdAt]) {
      progressByDay[createdAt].count += 1;
    }
  });

  const data = Object.values(progressByDay);

  return (
    <div className="rounded-3xl border border-zinc-800 bg-zinc-900 p-6">
      <h2 className="mb-4 text-xl font-bold">Weekly Course Activity</h2>

      {courses.length > 0 ? (
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              data={data}
              margin={{ top: 20, right: 0, left: 0, bottom: 0 }}
            >
              <CartesianGrid strokeDasharray="3 3" stroke="#2a2a2a" />
              <XAxis dataKey="label" stroke="#9ca3af" />
              <YAxis stroke="#9ca3af" allowDecimals={false} />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="count"
                stroke="#60a5fa"
                strokeWidth={3}
                dot
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      ) : (
        <p className="text-sm text-zinc-400">
          No weekly course activity to display yet.
        </p>
      )}
    </div>
  );
};

export default WeeklyChart;
