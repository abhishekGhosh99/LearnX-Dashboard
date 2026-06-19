import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Suspense } from "react";
import "./globals.css";

import Sidebar from "@/components/layout/Sidebar";
import SidebarSkeleton from "@/components/layout/SidebarSkeleton";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "LearnX - Your Learning Dashboard",
  description:
    "Track your learning progress, manage courses, and stay motivated with LearnX Dashboard.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <div className="flex min-h-screen">
          <Suspense fallback={<SidebarSkeleton />}>
            <Sidebar />
          </Suspense>

          <main className="flex-1 p-8">{children}</main>
        </div>
      </body>
    </html>
  );
}
