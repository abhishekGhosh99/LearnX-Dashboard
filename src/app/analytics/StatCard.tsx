"use client";

import { motion } from "framer-motion";

interface Props {
  title: String;
  value: String;
}

const StatCard = ({ title, value }: Props) => {
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
      <p className="text-zinc-400">{title}</p>
      <h2 className="mt-2 text-3xl font-bold">{value}</h2>
    </motion.div>
  );
};

export default StatCard;
