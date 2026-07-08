"use client";

import { Course } from "@/types/course";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";
import { motion } from "framer-motion";

interface Props {
  courses: Course[];
}

const ProgressDistribution = ({ courses }: Props) => {
  const data = [
    {
      name: "0-25%",
      value: courses.filter((course) => course.progress < 25).length,
    },
    {
      name: "25-50%",
      value: courses.filter(
        (course) => course.progress >= 25 && course.progress < 50,
      ).length,
    },
    {
      name: "50-75%",
      value: courses.filter(
        (course) => course.progress >= 50 && course.progress < 75,
      ).length,
    },
    {
      name: "75-100%",
      value: courses.filter((course) => course.progress >= 75).length,
    },
  ];

  const colors = ["#0EA5E9", "#06B6D4", "#8B5CF6", "#A855F7"];
  const hasData = courses.length > 0;

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 20,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      className="rounded-3xl border border-zinc-800 bg-zinc-900 p-6"
    >
      <h2 className="mb-4 text-xl font-bold">Progress Distribution</h2>

      {hasData ? (
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                dataKey="value"
                outerRadius={100}
                innerRadius={40}
              >
                {data.map((_, index) => (
                  <Cell key={index} fill={colors[index]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      ) : (
        <p className="text-sm text-zinc-400">
          No course progress data available yet.
        </p>
      )}
    </motion.div>
  );
};

export default ProgressDistribution;
