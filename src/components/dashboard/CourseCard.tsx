"use client";
import { motion } from "framer-motion";
import { iconMap } from "@/utils/iconMap";
import ProgressBar from "./ProgressBar";

interface CourseCardProps {
  course: {
    id: string;
    title: string;
    progress: number;
    icon_name: string;
  };
}

const CourseCard = ({ course }: CourseCardProps) => {
  const Icon = iconMap[course.icon_name as keyof typeof iconMap];

  return (
    <motion.article
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="rounded-3xl border border-zinc-800 bg-zinc-900 p-6 hover:border-cyan-500/50"
    >
      <div className="mb-4 flex items-center gap-3">
        {Icon && <Icon className="text-cyan-400" />}
        <h3 className="font-semibold">{course.title}</h3>
      </div>

      <p className="text-sm text-zinc-400">{course.progress}% Complete</p>

      <ProgressBar value={course.progress} />

      <button className="flex items-center justify-center mt-10 w-20 rounded-lg bg-cyan-500/90 px-4 py-2 text-sm font-medium text-white cursor-pointer hover:bg-cyan-600">
        Continue
      </button>
    </motion.article>
  );
};

export default CourseCard;
