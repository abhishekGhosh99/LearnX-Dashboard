"use client";
import { motion } from "framer-motion";

const ProfileSettings = () => {
  return (
    <motion.section
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
      <h2 className="mb-6 text-2xl font-semibold">Profile</h2>

      <div className="space-y-4">
        <input
          defaultValue="Abhishek"
          className="w-full rounded-xl border bourder-zinc-800 bg-black px-4 py-3"
        />
        <input
          defaultValue="abhishek@example.com"
          className="w-full rounded-xl border bourder-zinc-800 bg-black px-4 py-3"
        />

        <button className="rounded-xl bg-cyan-500 px-5 py-3 text-black font-medium hover:bg-cyan-700">
          Save Changes
        </button>
      </div>
    </motion.section>
  );
};

export default ProfileSettings;
