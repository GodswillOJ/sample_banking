// RootLayout.js
"use client";

import React from "react";
import Navbar from "@/components/ui/Navbar";
// import Sidebar from "@/components/ui/Sidebar";
import "../../app/globals.css"; // Ensure global styles are imported

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      {/* <Sidebar /> */}

      {/* Main Content Area */}
      <div className="flex flex-col w-full">
        {/* Navbar */}
        <Navbar />
        <main className="flex-1 p-4 bg-gray-100">{children}</main>
      </div>
    </div>
  );
}
