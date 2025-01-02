"use client";

import React from "react";
import Link from "next/link";
import { Logo3 } from "@/components/ui/logo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faHistory,
  faDashboard,
  faMoneyCheckAlt,
  faLifeRing,
  faTools,
  faLock,
  faTimes,
  faPhone,
  faSignOutAlt,
} from "@fortawesome/free-solid-svg-icons";

  // Mock user data
  const user = {
    username: "George",
    lastName: "Allan",
    email: "george@gmail.com",
    phone: "+1 234 567 890",
    address: "1234 Elm Street, Springfield, USA",
    joinedDate: "2023-06-15",
    profileImage: "/icons/old_j.jpg", // Replace with the actual image path
  };

  
const Sidebar = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => (
  <div
    className={`fixed top-0 left-0 h-full w-3/4 max-w-sm bg-gray-800 z-50 transition-transform duration-300 ease-in-out ${
      isOpen ? "translate-x-0" : "-translate-x-full"
    } lg:hidden`} // Hidden for large screens
  >
    <div className="p-4 text-right">
      <button onClick={onClose} className="text-yellow-400 text-xl font-bold">
        &times;
      </button>
    </div>
    <ul className="text-dull-yellow text-lg p-4 space-y-4">
      <li className="hover:text-yellow-300">
        <Link href="/sign-in">Online Banking</Link>
      </li>
      <li className="hover:text-yellow-300">
        <Link href="/sign-in">Private Banking Online</Link>
      </li>
      <li className="hover:text-yellow-300">
        <Link href="/sign-in">Straight2bank</Link>
      </li>
      <li className="hover:text-yellow-300">
        <Link href="/sign-in">Local Sites</Link>
      </li>
      <li className="hover:text-yellow-300">
        <Link href="/sign-in">Contact Us</Link>
      </li>
    </ul>
  </div>
);

const Sidebar2 = ({
  isOpen,
  toggleSidebar,
  setActiveComponent,
  handleLogout,
}: {
  isOpen: boolean;
  toggleSidebar: () => void;
  setActiveComponent: (component: string) => void;
  handleLogout: () => void;
}) => {
  return (
    <div
      className={`fixed top-0 left-0 h-full w-64 bg-gray-800 z-50 transform transition-transform duration-300 ease-in-out ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <div className="side-icon_container flex justify-between items-center bg-gray-900 text-white">
        <h1 className="logo-container">
          <Logo3 />
        </h1>
        <button onClick={toggleSidebar} className="text-white">
          {/* Hamburger icon */}
          <FontAwesomeIcon icon={faTimes} />
        </button>
      </div>
      <ul className="text-white text-lg p-4 space-y-4">
      <li className="hover:text-yellow-300 flex items-center cursor-pointer" onClick={() => setActiveComponent("dashboard")}>
        <FontAwesomeIcon icon={faDashboard} className="mr-3" />
        Dashboard
      </li>
      <li className="hover:text-yellow-300 flex items-center cursor-pointer" onClick={() => setActiveComponent("profile")}>
        <FontAwesomeIcon icon={faUser} className="mr-3" />
        My Account
      </li>
      <li className="hover:text-yellow-300 flex items-center cursor-pointer" onClick={() => setActiveComponent("paymentHistory")}>
        <FontAwesomeIcon icon={faHistory} className="mr-3" />
        Payment History
      </li>
      <li className="hover:text-yellow-300 flex items-center cursor-pointer" onClick={() => setActiveComponent("transferFunds")}>
        <FontAwesomeIcon icon={faMoneyCheckAlt} className="mr-3" />
        Transfer Funds
      </li>
      <li className="hover:text-yellow-300 flex items-center cursor-pointer" onClick={() => setActiveComponent("lifeStyle")}>
        <FontAwesomeIcon icon={faLifeRing} className="mr-3" />
        Lifestyle
      </li>
      <li className="hover:text-yellow-300 flex items-center cursor-pointer" onClick={() => setActiveComponent("services")}>
        <FontAwesomeIcon icon={faTools} className="mr-3" />
        Services
      </li>
      <li className="hover:text-yellow-300 flex items-center cursor-pointer" onClick={() => setActiveComponent("contactUs")}>
        <FontAwesomeIcon icon={faPhone} className="mr-3" />
        Contact Us
      </li>
      <li className="hover:text-yellow-300 flex items-center">
        <FontAwesomeIcon icon={faSignOutAlt} className="mr-3" />
        <Link href={"/sign-in"} onClick={handleLogout}>
          Logout
        </Link>
      </li>
    </ul>
    <div
      style={{
        position: "absolute",
        bottom: "0",
        justifyContent: "start",
        display: "flex",
        paddingBottom: "20px",
        paddingLeft: "30px",
        width: "100%",
      }}
    >
      <FontAwesomeIcon icon={faLock} className="mr-2 text-white" />
      <p
        style={{
          color: "#fff"
        }}
      >{user.username}</p>
    </div>
    </div>
  );
};


export { Sidebar, Sidebar2 };
