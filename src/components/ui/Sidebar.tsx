// Sidebar.js
"use client";

import React from "react";
import Link from "next/link";

const Sidebar = () => {
  return (
    <aside className="w-64 bg-gray-800 text-white h-screen p-4">
      <ul className="space-y-4">
        {[
          { name: "Dashboard", href: "#" },
          { name: "Transactions", href: "#" },
          { name: "Reports", href: "#" },
          { name: "Settings", href: "#" },
        ].map((item, index) => (
          <li key={index}>
            <Link
              href={item.href}
              className="block p-2 rounded hover:bg-gray-700"
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
