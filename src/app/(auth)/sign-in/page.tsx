"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Logo3 } from "@/components/ui/logo";
import {Sidebar} from "@/components/ui/Sidebar";
import { useRouter } from "next/navigation";


interface Credentials {
  username?: string;
  email?: string;
  address?: string;
  phone?: string;
  password?: string;
}

const SignInPage = () => {
  const [activeTab, setActiveTab] = useState<"Login" | "SignUp">("Login");
  const [showMore, setShowMore] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [credentials, setCredentials] = useState<Credentials>({});
  const router = useRouter(); // App Router useRouter
  const [isLoggingIn, setIsLoggingIn] = useState(false); // New state

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCredentials((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoggingIn(true); // Set to true on form submission
    const action = activeTab === "Login" ? "login" : "register";

    try {
      const response = await fetch("/api/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ action, data: credentials }),
      });
      const result = await response.json();

      if (result.success && action === "login") {
        localStorage.setItem("user", JSON.stringify(result.user));
        router.push("/dashboard"); // Use App Router's push
      } else if (result.success) {
        alert("Registration successful. Please log in.");
      } else {
        alert(result.message || "An error occurred.");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      alert("An error occurred while submitting the form.");
    }
  };

  return (
    <div className="page-container">
      {/* Navbar */}
      <nav className="navbar flex items-center justify-between p-2 bg-gray-800 text-white">
        <div className="logo-container">
          <Link href={"/"}>
            <Logo3 />
          </Link>
        </div>
        {/* Hamburger */}
        <div className="lg:hidden">
          <button
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className={`p-2 rounded ${isSidebarOpen ? "bg-yellow-600" : "bg-gray-800"}`}
          >
            <div className="space-y-1">
              <div className="w-6 h-1 bg-white rounded"></div>
              <div className="w-6 h-1 bg-white rounded"></div>
              <div className="w-6 h-1 bg-white rounded"></div>
            </div>
          </button>
        </div>
        {/* Desktop Menu */}
        <div className="hidden lg:flex">
          <ul className="sign-in-menu space-x-4">
            <li>
              <Link href="/sign-in">Online Banking</Link>
            </li>
            <li>
              <Link href="/sign-in">Private Banking Online</Link>
            </li>
            <li>
              <Link href="/sign-in">Straight2bank</Link>
            </li>
            <li>
              <Link href="/sign-in">Local Sites</Link>
            </li>
            <li>
              <Link href="/sign-in">Contact Us</Link>
            </li>
          </ul>
        </div>
      </nav>

      {/* Sidebar */}
      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
    

      {/* Main Content */}
      {/* Main Content */}
      <div className="main-container">
        {/* Insights Section */}
        <div className="insights-section">
          <h1 className="title">Market Insights</h1>
          <p className="subtitle">Another year of US exceptionalism?</p>
          <ul className="insights-list">
            <li>
              US exceptionalism has scaled new heights this year. US equities
              have gained 29% year to date, following 26% returns in 2023,
              widening the performance gap with other markets.
            </li>
            <li>
              President-elect Trump’s policies are likely to lead to another
              year of US equity outperformance in 2025. However, prudence
              dictates investors stay diversified and nimble to hedge against
              risks.
            </li>
          </ul>
          <button className="explore-button">Explore</button>
        </div>

        {/* Login Form */}
        <div className="login-section">
          <h2>Welcome to Standard Chartered Private Bank</h2>
          <ul className="tab-menu">
            <li
              className={`tab-item ${activeTab === "Login" ? "active-tab" : ""}`}
              onClick={() => setActiveTab("Login")}
            >
              Login
            </li>
            <li
              className={`tab-item ${activeTab === "SignUp" ? "active-tab" : ""}`}
              onClick={() => setActiveTab("SignUp")}
            >
              Sign Up
            </li>
          </ul>
          <form
            className="form"
            style={{ display: activeTab === "Login" ? "grid" : "none" }}
            onSubmit={handleFormSubmit}
          >
            <input
              type="text"
              name="username"
              placeholder="Case-sensitive username*"
              required
              onChange={handleInputChange}
            />
            <input
              type="password"
              name="password"
              placeholder="Case-sensitive password*"
              required
              onChange={handleInputChange}
            />
            <button type="submit" className="login-button" disabled={isLoggingIn}>
              {isLoggingIn ? "Logging in..." : "Login"}
            </button>
            <div id="login-links">
              <Link href="/forgot-username">Forgot Username</Link>
              <Link href="/forgot-password">Forgot Password</Link>
            </div>
          </form>
          <form
            className="form space-y-4"
            style={{ display: activeTab === "SignUp" ? "grid" : "none" }}
            onSubmit={handleFormSubmit}
          >
            <input
              name="username"
              type="text"
              placeholder="Username*"
              onChange={handleInputChange}
              required
              className="input"
            />
            {activeTab === "SignUp" && (
              <>
                <input
                  name="email"
                  type="email"
                  placeholder="Email*"
                  onChange={handleInputChange}
                  required
                  className="input"
                />
                <input
                  name="address"
                  type="text"
                  placeholder="Address*"
                  onChange={handleInputChange}
                  required
                  className="input"
                />
                <input
                  name="phone"
                  type="tel"
                  placeholder="Phone Number*"
                  onChange={handleInputChange}
                  required
                  className="input"
                />
              </>
            )}
            <input
              name="password"
              type="password"
              placeholder="Password*"
              onChange={handleInputChange}
              required
              className="input"
            />
            <button
              type="submit"
              className="submit-button bg-blue-500 text-white p-2 rounded"
            >
              Sign Up
            </button>
          </form>
        </div>
      </div>

      {/* Footer */}
      <footer className="footer">
        <div className="notice-container">
          <p className="notice-text">
            @ <b>Important Notice:</b> Protect your Personal Digital Keys; Beware of
            Fraudulent Links. Please be aware that there have been multiple reports
            of scammers, at times impersonating as...
          </p>
        </div>
        <button
          className="read-more-button"
          onClick={() => setShowMore(!showMore)}
        >
          Read More
        </button>
      </footer>


      {/* Overlay Box */}
      {showMore && (
        <div className="overlay">
          <div className="overlay-content">
            <p>
            Beware of Fraudulent Links: Protect yourself against online fraud. Reports of scammers impersonating reputable organizations to steal personal or financial information have increased. These fraudsters often send fake emails, texts, or links that lead to phishing websites designed to capture your login credentials or sensitive data. Always verify the authenticity of links before clicking. Avoid sharing confidential details unless you’re sure of the source. Be vigilant when contacted by unknown numbers or emails that create urgency, such as warnings about account security. If in doubt, contact the company directly through their official website or customer service channels. Stay safe online!
            </p>
            <button
              className="close-button text-dull-yellow hover:text-yellow-300"
              onClick={() => setShowMore(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SignInPage

