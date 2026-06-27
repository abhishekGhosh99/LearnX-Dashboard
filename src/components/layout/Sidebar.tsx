"use client";

import { useEffect, useState } from "react";
import { Home, BookOpen, BarChart3, Settings, LucideIcon } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import SidebarSkeleton from "@/components/layout/SidebarSkeleton";

const items: {
  label: string;
  href: string;
  icon: LucideIcon;
}[] = [
  { label: "Dashboard", href: "/", icon: Home },
  { label: "Courses", href: "/courses", icon: BookOpen },
  { label: "Analytics", href: "/analytics", icon: BarChart3 },
  { label: "Settings", href: "/settings", icon: Settings },
];

const Sidebar = () => {
  const [isLoading, setIsLoading] = useState(true);
  const pathname = usePathname();

  useEffect(() => {
    const timeout = window.setTimeout(() => setIsLoading(false), 100);
    return () => window.clearTimeout(timeout);
  }, []);

  if (isLoading) {
    return <SidebarSkeleton />;
  }

  return (
    <aside className="hidden lg:flex flex-col p-6 border-r border-zinc-800 lg:sticky lg:top-0 lg:h-screen lg:min-h-0 lg:overflow-hidden">
      <h2 className="mb-8 text-xl font-bold">LearnX Dash</h2>

      <nav className="flex-1 min-h-0 overflow-y-auto space-y-2">
        {items.map((item) => {
          const Icon = item.icon;

          const isActive = pathname === item.href;

          return (
            <Link
              key={item.label}
              href={item.href}
              className="relative flex w-full items-center gap-3 overflow-hidden rounded-xl px-4 py-3 cursor-pointer"
            >
              {isActive && (
                <motion.div
                  layoutId="active-tab"
                  className="absolute inset-0 rounded-xl bg-cyan-500/10 border border-cyan-500/20"
                />
              )}

              <Icon size={18} className="relative z-10" />

              <span className="relative z-10">{item.label}</span>
            </Link>
          );
        })}
      </nav>
    </aside>
  );
};

export default Sidebar;
