"use client";
import { useState } from "react";
import { Home, BookOpen, BarChart3, Settings, LucideIcon } from "lucide-react";
import { motion } from "framer-motion";

const items: {
  label: string;
  icon: LucideIcon;
}[] = [
  { label: "Dashboard", icon: Home },
  { label: "Courses", icon: BookOpen },
  { label: "Analytics", icon: BarChart3 },
  { label: "Settings", icon: Settings },
];

const Sidebar = () => {
  const [active, setActive] = useState("Dashboard");

  return (
    <aside className="hidden lg:flex flex-col p-6 border-r border-zinc-800 lg:sticky lg:top-0 lg:h-screen lg:min-h-0 lg:overflow-hidden">
      <h2 className="mb-8 text-xl font-bold">LearnX Dash</h2>

      <nav className="flex-1 min-h-0 overflow-y-auto space-y-2">
        {items.map((item) => {
          const Icon = item.icon;

          return (
            <button
              key={item.label}
              onClick={() => setActive(item.label)}
              className="relative flex w-full items-center gap-3 overflow-hidden rounded-xl px-4 py-3 cursor-pointer"
            >
              {active === item.label && (
                <motion.div className="absolute inset-0 rounded-xl bg-cyan-500/10 border border-cyan-500/20" />
              )}

              <Icon size={18} className="relative z-10" />

              <span className="relative z-10">{item.label}</span>
            </button>
          );
        })}
      </nav>
    </aside>
  );
};

export default Sidebar;
