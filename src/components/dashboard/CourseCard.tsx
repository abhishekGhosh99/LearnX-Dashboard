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
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
      whileHover={{ scale: 1.02, y: -4 }}
      whileTap={{ scale: 0.98 }}
      className="group relative overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900 p-6 hover:border-cyan-500/50"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 0, scale: 0.85 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-cyan-500/10 blur-3xl opacity-0 group-hover:opacity-100"
      />

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 0, scale: 0.9 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="absolute bottom-4 left-4 h-32 w-32 rounded-full bg-purple-500/10 blur-3xl opacity-0 group-hover:opacity-100"
      />

      <div className="mb-4 flex items-center gap-3">
        {Icon && (
          <motion.span
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-zinc-950 text-cyan-400 shadow-[0_0_0_1px_rgba(56,189,248,0.12)]"
          >
            <Icon className="h-6 w-6" />
          </motion.span>
        )}

        <motion.h3
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, ease: "easeOut", delay: 0.08 }}
          className="font-semibold"
        >
          {course.title}
        </motion.h3>
      </div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.35, delay: 0.15 }}
        className="text-sm text-zinc-400"
      >
        {course.progress}% Complete
      </motion.p>

      <div className="mt-4">
        <ProgressBar value={course.progress} />
      </div>

      <motion.button
        whileHover={{ y: -1 }}
        transition={{ type: "spring", stiffness: 260, damping: 18 }}
        className="flex items-center justify-center mt-10 w-28 rounded-lg bg-cyan-500/90 px-4 py-2 text-sm font-medium text-white shadow-lg shadow-cyan-500/10 hover:bg-cyan-600"
      >
        Continue
      </motion.button>
    </motion.article>
  );
};

export default CourseCard;
