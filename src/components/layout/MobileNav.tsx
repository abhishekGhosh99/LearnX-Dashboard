"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, BookOpen, BarChart3, Settings, LucideIcon } from "lucide-react";

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

const MobileNav = () => {
  const pathname = usePathname();

  return (
    <div className="fixed bottom-4 left-1/2 z-50 flex -translate-x-1/2 gap-4 rounded-full border border-zinc-800 bg-zinc-900/90 px-4 py-3 backdrop-blur lg:hidden">
      {items.map((item) => {
        const Icon = item.icon;
        const isActive = pathname === item.href;

        return (
          <Link
            key={item.label}
            href={item.href}
            className={`flex h-10 w-10 items-center justify-center rounded-full transition ${
              isActive
                ? "bg-cyan-500/15 text-cyan-400"
                : "text-zinc-400 hover:text-white"
            }`}
            aria-label={item.label}
            aria-current={isActive ? "page" : undefined}
          >
            <Icon size={20} />
          </Link>
        );
      })}
    </div>
  );
};

export default MobileNav;
