"use client";

import React, { forwardRef } from "react";
import Link from "next/link";

type MenuDropBoxProps = {
  title: string;
  description: string;
  links: string[];
  onClose: () => void; // Callback function to close the MenuDropBox
};

type MenuDropBox2Props = {
  title: string;
  description: string;
  links: string[];
  onClose: () => void; // Callback function to close the MenuDropBox
};

const MenuDropBox = forwardRef<HTMLDivElement, MenuDropBoxProps>(
  ({ title, description, links, onClose }, ref) => {
    return (
      <div
        ref={ref} // Forward the ref to the div
        className="menu_drop_box left-0 w-full bg-white z-40 p-4 shadow-lg"
        style={{ animation: "fadeIn 0.3s ease-in-out" }}
      >
        <button
          onClick={onClose} // Trigger the onClose function when clicked
          className="absolute top-2 right-2 p-1 bg-black text-white text-da rounded-full"
        >
          x
        </button>
        <div className="flex space-x-4">
          {/* First Container */}
          <div className="flex-1 bg-gradient-to-r from-blue-800 to-sky-500 text-white p-4 rounded">
            <h2 className="text-2xl font-bold mb-2">{title}</h2>
            <p className="mb-4">{description}</p>
            <button className="bg-white text-blue-800 py-2 px-4 rounded shadow hover:bg-blue-100">
              <Link href={"/sign-in"}>
               {title}
              </Link>
            </button>
          </div>

          {/* Second Container */}
          <div className="flex-1 bg-gray-200 p-4 rounded">
            <ul className="space-y-2">
              {links.map((link, index) => (
                <li
                  key={index}
                  className="p-2 bg-transparent hover:bg-blue-900 hover:text-white cursor-pointer rounded"
                >
                  {link}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    );
  }
);

const MenuDropBox2 = forwardRef<HTMLDivElement, MenuDropBox2Props>(
  ({ title, description, links, onClose }, ref) => {
    return (
      <div
        ref={ref}
        className="menu_drop_box2 left-0 w-full bg-white z-40 p-4 shadow-lg"
        style={{ animation: "fadeIn 0.3s ease-in-out" }}
      >
        <button
          onClick={onClose} // Trigger the onClose function when clicked
          className="absolute top-2 right-2 p-1 bg-black text-white text-da rounded-full"
        >
          x
        </button>
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
          {/* First Container */}
          <div className="flex-1 bg-gradient-to-r from-blue-800 to-sky-500 text-white p-4 rounded">
            <h2 className="text-2xl font-bold mb-2">{title}</h2>
            <p className="mb-4">{description}</p>
            <button className="bg-white text-blue-800 py-2 px-4 rounded shadow hover:bg-blue-100">
              <Link href={"/sign-in"}>
               {title}
              </Link>
            </button>
          </div>

          {/* Second Container */}
          <div className="flex-1 bg-gray-200 p-4 rounded">
            <ul className="space-y-2">
              {links.map((link, index) => (
                <li
                  key={index}
                  className="p-2 bg-transparent hover:bg-blue-900 hover:text-white cursor-pointer rounded"
                >
                  {link}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    );
  }
);

MenuDropBox.displayName = "MenuDropBox"; // Set a display name for debugging
MenuDropBox2.displayName = "MenuDropBox2"; // Set a display name for debugging

export { MenuDropBox, MenuDropBox2 };
