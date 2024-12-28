"use client";

import React from "react";
import Navbar from "@/components/ui/Navbar";
import "../../app/globals.css";
import {Footer} from "@/components/ui/footer";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <div id="__next">
      {/* Navbar */}
      <Navbar />
      
      {/* Main Content */}
      <main className="myApp">{children}</main>
      
      {/* Footer */}
      <Footer />
    </div>
  );
}
