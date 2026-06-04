"use client";
import { Home, BookOpen, BarChart3, Settings } from "lucide-react";

const MobileNav = () => {
  return (
    <div className="fixed bottom-4 left-1/2 z-50 flex -translate-x-1/2 gap-6 rounded-full border border-zinc-800 bg-zinc-900/90 px-6 py-3 backdrop-blur lg:hidden">
      <Home size={20} />
      <BookOpen size={20} />
      <BarChart3 size={20} />
      <Settings size={20} />
    </div>
  );
};

export default MobileNav;
