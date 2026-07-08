"use client";
import { motion } from "framer-motion";

const AccountSettings = () => {
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
      <h2 className="mb-6 text-2xl font-semibold">Account</h2>

      <div className="flex gap-4">
        <button className="rounded-xl border border-zinc-700 px-5 py-3">
          Change Password
        </button>

        <button className="rounded-xl bg-red-700 px-5 py-3">Logout</button>
      </div>
    </motion.section>
  );
};

export default AccountSettings;
