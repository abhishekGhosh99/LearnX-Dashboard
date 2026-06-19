"use client";
import { RadialBarChart, RadialBar, ResponsiveContainer, Tooltip } from "recharts";
import { Course } from "@/types/course";

interface Props {
  courses: Course[];
}

const CompletionRate = ({ courses }: Props) => {
  const completed = courses.filter((course) => course.progress >= 100).length;
  const percentage = courses.length
    ? Math.round((completed / courses.length) * 100)
    : 0;
  const data = [{ name: "Completion", value: percentage }];

  return (
    <div className="rounded-3xl border border-zinc-800 bg-zinc-900 p-6">
      <h2 className="mb-4 text-xl font-bold">Completion Rate</h2>

      {courses.length > 0 ? (
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <RadialBarChart data={data} innerRadius="70%" outerRadius="100%" startAngle={180} endAngle={-180}>
              <RadialBar dataKey="value" cornerRadius={10} background />
              <Tooltip />
            </RadialBarChart>
          </ResponsiveContainer>
        </div>
      ) : (
        <p className="text-sm text-zinc-400">No completed course data available yet.</p>
      )}

      <p className="text-center text-3xl font-bold">{percentage}%</p>
    </div>
  );
};

export default CompletionRate;
