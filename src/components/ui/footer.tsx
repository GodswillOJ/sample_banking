'use client'

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import {
  faFacebook,
  faInstagram,
  faTwitter,
  faLinkedin,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { useMediaQuery } from "@mui/material";
import {Logo} from "./logo";

const Footer = () => {
  const isSmallScreen = useMediaQuery('(max-width: 1219px)');

  return (
    <div
      style={{
        position: "relative",
        padding: "2rem",
        display: "flex",
        flexDirection: "column",
        bottom: "0",
        backgroundColor: "#224396", // Deep blue background
        color: "white",
      }}
    >
      {/* Logo Container */}
      <div
        className="logo_carrier"
        style={{ margin: "0", padding: "0", color: "#fff" }}
      >
        <Logo  />
      </div>

      {/* Main Content */}
      <div
        style={{
          display: "flex",
          flexDirection: isSmallScreen ? "column" : "row",
          justifyContent: isSmallScreen? "start" : "space-between",
          alignItems: "start",
          width: "100%",
          marginBottom: "0",
        }}
      >
        {/* First Container: Navigation Links */}
        <div style={{ display: "block" }}>
          <div className="footer_ul_container" style={{ display: isSmallScreen? "block" : "flex" }}>
            <ul style={{ listStyle: "none", margin: "0", padding: "10px 0 0 0" }}>
              <li><Link style={{ textDecoration: "none", padding:"10px", color: "#fff"}} href="#">Accessibility</Link></li>
              <li><Link style={{ textDecoration: "none", padding:"10px", color: "#fff"}} href="#">Cookie Policy</Link></li>
              <li><Link style={{ textDecoration: "none", padding:"10px", color: "#fff"}} href="#">Terms of Use</Link></li>
              <li><Link style={{ textDecoration: "none", padding:"10px", color: "#fff"}} href="#">Privacy Policy</Link></li>
              <li><Link style={{ textDecoration: "none", padding:"10px", color: "#fff"}} href="#">Modern Slavery Statement</Link></li>
              <li><Link style={{ textDecoration: "none", padding:"10px", color: "#fff"}} href="#">Regulatory Disclosure</Link></li>
              <li><Link style={{ textDecoration: "none", padding:"10px", color: "#fff"}} href="#">Straight2Bank Onboarding Portal</Link></li>
              <li><Link style={{ textDecoration: "none", padding:"10px", color: "#fff"}} href="#">Our Code of Conduct and Ethics</Link></li>
            </ul>
            <ul style={{ listStyle: "none", margin: "0", padding: "10px 0 0 0" }}>
              <li><Link style={{ textDecoration: "none", padding:"10px", color: "#fff"}} href="#">Online Security</Link></li>
              <li><Link style={{ textDecoration: "none", padding:"10px", color: "#fff"}} href="#">Fighting Financial Crime</Link></li>
              <li><Link style={{ textDecoration: "none", padding:"10px", color: "#fff"}} href="#">Our Suppliers</Link></li>
              <li><Link style={{ textDecoration: "none", padding:"10px", color: "#fff"}} href="#">FAQs</Link></li>
              <li><Link style={{ textDecoration: "none", padding:"10px", color: "#fff"}} href="#">Our Locations</Link></li>
              <li><Link style={{ textDecoration: "none", padding:"10px", color: "#fff"}} href="#">Contact Us</Link></li>
              <li><Link style={{ textDecoration: "none", padding:"10px", color: "#fff"}} href="#">Sitemap</Link></li>
              <li><Link style={{ textDecoration: "none", padding:"10px", color: "#fff"}} href="#">Manage Cookies</Link></li>
            </ul>
          </div>
        </div>

        {/* Second Container: Social Media Links and Footer Text */}
        <div
        style={{
            position: "relative",
            display: "block",
            alignItems: "center",
            textAlign: "center", // Center the content
            width: isSmallScreen ? "100%" : "auto", // Full width for small screens
            margin: isSmallScreen ? "0 auto" : "0", // Centered for small screens
        }}
        >
        {/* Social Media Links */}
        <div>
            <ul
            style={{
                listStyle: "none",
                padding: "0",
                paddingTop: "20px",
                margin: "0 auto", // Center align the list
                display: "flex",
                justifyContent: isSmallScreen ? "center" : "start", // Adjust alignment
                gap: "10px",
            }}
            >
            <li>
                <Link href="#" style={{ color: "white" }}>
                <FontAwesomeIcon icon={faFacebook} />
                </Link>
            </li>
            <li>
                <Link href="#" style={{ color: "white" }}>
                <FontAwesomeIcon icon={faInstagram} />
                </Link>
            </li>
            <li>
                <Link href="#" style={{ color: "white" }}>
                <FontAwesomeIcon icon={faTwitter} />
                </Link>
            </li>
            <li>
                <Link href="#" style={{ color: "white" }}>
                <FontAwesomeIcon icon={faLinkedin} />
                </Link>
            </li>
            <li>
                <Link href="#" style={{ color: "white" }}>
                <FontAwesomeIcon icon={faYoutube} />
                </Link>
            </li>
            </ul>
        </div>

        {/* Footer Text */}
        <div>
            <p style={{ margin: "10px 0", textAlign: "center" }}>
            © Standard Chartered 2024. All Rights Reserved.
            </p>
        </div>
        </div>

      </div>
    </div>
  );
};

const Footer2 = () => {
  const isSmallScreen = useMediaQuery('(max-width: 1219px)');

  return (
    <div
      style={{
        position: "relative",
        padding: "2rem",
        display: "flex",
        flexDirection: "column",
        bottom: "0",
        backgroundColor: "none", // Deep blue background
        color: "white",
      }}
    >
      {/* Logo Container */}
      <div
        className="logo_carrier"
        style={{ margin: "0", padding: "0", color: "#fff", paddingLeft: "40px"}}
      >
        <Logo  />
      </div>

      {/* Main Content */}
      <div
        style={{
          display: "flex",
          flexDirection: isSmallScreen ? "column" : "row",
          justifyContent: isSmallScreen? "start" : "space-between",
          alignItems: "start",
          width: "100%",
          marginBottom: "0",
        }}
      >
        {/* First Container: Navigation Links */}
        <div style={{ display: "block" }}>
          <div className="footer_ul_container" style={{ display: isSmallScreen? "block" : "flex" }}>
            <ul style={{ listStyle: "none", margin: "0", padding: "10px 0 0 0" }}>
              <li><Link style={{ textDecoration: "none", padding:"10px", color: "#fff"}} href="#">Accessibility</Link></li>
              <li><Link style={{ textDecoration: "none", padding:"10px", color: "#fff"}} href="#">Cookie Policy</Link></li>
              <li><Link style={{ textDecoration: "none", padding:"10px", color: "#fff"}} href="#">Terms of Use</Link></li>
              <li><Link style={{ textDecoration: "none", padding:"10px", color: "#fff"}} href="#">Privacy Policy</Link></li>
              <li><Link style={{ textDecoration: "none", padding:"10px", color: "#fff"}} href="#">Modern Slavery Statement</Link></li>
              <li><Link style={{ textDecoration: "none", padding:"10px", color: "#fff"}} href="#">Regulatory Disclosure</Link></li>
              <li><Link style={{ textDecoration: "none", padding:"10px", color: "#fff"}} href="#">Straight2Bank Onboarding Portal</Link></li>
              <li><Link style={{ textDecoration: "none", padding:"10px", color: "#fff"}} href="#">Our Code of Conduct and Ethics</Link></li>
            </ul>
            <ul style={{ listStyle: "none", margin: "0", padding: "10px 0 0 0" }}>
              <li><Link style={{ textDecoration: "none", padding:"10px", color: "#fff"}} href="#">Online Security</Link></li>
              <li><Link style={{ textDecoration: "none", padding:"10px", color: "#fff"}} href="#">Fighting Financial Crime</Link></li>
              <li><Link style={{ textDecoration: "none", padding:"10px", color: "#fff"}} href="#">Our Suppliers</Link></li>
              <li><Link style={{ textDecoration: "none", padding:"10px", color: "#fff"}} href="#">FAQs</Link></li>
              <li><Link style={{ textDecoration: "none", padding:"10px", color: "#fff"}} href="#">Our Locations</Link></li>
              <li><Link style={{ textDecoration: "none", padding:"10px", color: "#fff"}} href="#">Contact Us</Link></li>
              <li><Link style={{ textDecoration: "none", padding:"10px", color: "#fff"}} href="#">Sitemap</Link></li>
              <li><Link style={{ textDecoration: "none", padding:"10px", color: "#fff"}} href="#">Manage Cookies</Link></li>
            </ul>
          </div>
        </div>

        {/* Second Container: Social Media Links and Footer Text */}
        <div
        style={{
            position: "relative",
            display: "block",
            alignItems: "center",
            textAlign: "center", // Center the content
            width: isSmallScreen ? "100%" : "auto", // Full width for small screens
            margin: isSmallScreen ? "0 auto" : "0", // Centered for small screens
        }}
        >
        {/* Social Media Links */}
        <div>
            <ul
            style={{
                listStyle: "none",
                padding: "0",
                paddingTop: "20px",
                margin: "0 auto", // Center align the list
                display: "flex",
                justifyContent: isSmallScreen ? "center" : "start", // Adjust alignment
                gap: "10px",
            }}
            >
            <li>
                <Link href="#" style={{ color: "white" }}>
                <FontAwesomeIcon icon={faFacebook} />
                </Link>
            </li>
            <li>
                <Link href="#" style={{ color: "white" }}>
                <FontAwesomeIcon icon={faInstagram} />
                </Link>
            </li>
            <li>
                <Link href="#" style={{ color: "white" }}>
                <FontAwesomeIcon icon={faTwitter} />
                </Link>
            </li>
            <li>
                <Link href="#" style={{ color: "white" }}>
                <FontAwesomeIcon icon={faLinkedin} />
                </Link>
            </li>
            <li>
                <Link href="#" style={{ color: "white" }}>
                <FontAwesomeIcon icon={faYoutube} />
                </Link>
            </li>
            </ul>
        </div>

        {/* Footer Text */}
        <div>
            <p style={{ margin: "10px 0", textAlign: "center" }}>
            © Standard Chartered 2024. All Rights Reserved.
            </p>
        </div>
        </div>

      </div>
    </div>
  );
};

export { Footer, Footer2 };
