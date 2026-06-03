"use client";
import { motion } from "framer-motion";

interface ProgressBarProps {
  value: number;
}

const ProgressBar = ({ value }: ProgressBarProps) => {
  return (
    <div className="mt-4 h-2 w-full overflow-hidden rounded-full bg-zinc-800">
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: `${value}%` }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-purple-500"
      />
    </div>
  );
};

export default ProgressBar;
