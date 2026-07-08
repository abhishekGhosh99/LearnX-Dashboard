"use client";
import { useState } from "react";
import Toggle from "./Toggle";
import { motion } from "framer-motion";

const PreferencesSettings = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [notifications, setNotifications] = useState(false);
  const [autoSave, setAutoSave] = useState(true);

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
      <h2 className="mb-6 text-2xl font-semibold">Preferences</h2>

      <div className="space-y-5">
        <PreferenceRow
          label="Dark Mode"
          toggle={
            <Toggle
              enabled={darkMode}
              onChange={() => setDarkMode(!darkMode)}
            />
          }
        />

        <PreferenceRow
          label="Notifications"
          toggle={
            <Toggle
              enabled={notifications}
              onChange={() => setNotifications(!notifications)}
            />
          }
        />

        <PreferenceRow
          label="Auto Save"
          toggle={
            <Toggle
              enabled={autoSave}
              onChange={() => setAutoSave(!autoSave)}
            />
          }
        />
      </div>
    </motion.section>
  );
};

function PreferenceRow({
  label,
  toggle,
}: {
  label: string;
  toggle: React.ReactNode;
}) {
  return (
    <div className="flex items-center justify-between">
      <p>{label}</p>

      {toggle}
    </div>
  );
}

export default PreferencesSettings;
