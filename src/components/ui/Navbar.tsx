"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faBars, faTimes, faArrowRight} from "@fortawesome/free-solid-svg-icons";
import {Logo4} from "./logo";
import {MenuDropBox, MenuDropBox2} from "./MenuDropBox";
import { useRouter } from "next/navigation";


type DropBoxData = {
  title: string;
  description: string;
  links: string[];
};

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [searchOpen, setSearchOpen] = useState(false);  
  const [dropBoxData, setDropBoxData] = useState<DropBoxData | null>(null);
  const [dropBoxData2, setDropBoxData2] = useState<DropBoxData | null>(null);
  const dropBoxRef = useRef<HTMLDivElement | null>(null); // Reference to the dropdown container
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const router = useRouter();


  const handleLogout = () => {
    localStorage.removeItem("user");
    setIsLoggedIn(false);
    router.push("/sign-in");
  };

  // Ensure component is client-side only
  useEffect(() => {
    setIsClient(true);

    const user = localStorage.getItem("user");
    if (user) {
      setIsLoggedIn(true);
    }

    // Close MenuDropBox if clicked outside of it
    const handleClickOutside = (event: MouseEvent) => {
      if (dropBoxRef.current && !dropBoxRef.current.contains(event.target as Node)) {
        setDropBoxData(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleSearch = () => {
    setSearchOpen(!searchOpen);
  };

  const handleLinkClick = (title: string) => {
    const descriptions: Record<string, string> = {
      "About Us": "Learn more about our company's mission and values.",
      "Corporate & Investment": "Explore corporate solutions and investment opportunities.",
      "Wealth & Retail": "Manage your wealth and explore retail services tailored for you.",
      Ventures: "Discover innovative ventures we are pursuing.",
      Investors: "Information and resources for our investors.",
      Insights: "Gain insights from our expert research and analysis.",
      Media: "Stay updated with our latest media coverage.",
      Careers: "Join our team and grow your career with us.",
    };
    

    const links = ["Overview", "Details", "FAQs", "Contact Us"];

    setDropBoxData({ title, description: descriptions[title], links });
  };

  const handleLScreenLinkClick = (title: string, index: number) => {
    const descriptions: Record<string, string> = {
      "About Us": "Learn more about our company's mission and values.",
      "Corporate & Investment": "Explore corporate solutions and investment opportunities.",
      "Wealth & Retail": "Manage your wealth and explore retail services tailored for you.",
      Ventures: "Discover innovative ventures we are pursuing.",
      Investors: "Information and resources for our investors.",
      Insights: "Gain insights from our expert research and analysis.",
      Media: "Stay updated with our latest media coverage.",
      Careers: "Join our team and grow your career with us.",
    };
  
    const links = ["Overview", "Details", "FAQs", "Contact Us"];
  
    setActiveIndex(index);
    setDropBoxData2({ title, description: descriptions[title], links });
  };
  


  if (!isClient) return null; // Prevent rendering on the server

  return (
    <>
      {/* Navbar */}
      <nav className="">
        {/* First Box */}
        <div className="first-box">
          <p></p>
          <ul className="first_box_menu">
            <li>
              <Link href="/sign-in" className="">
                Online Banking
              </Link>
            </li>
            <li>
              <Link href="/sign-in" className="">
                Private Banking Online
              </Link>
            </li>
            <li>
              <Link href="/sign-in" className="">
                Straight2bank
              </Link>
            </li>
            {isLoggedIn ? (
              <li>
                <Link href={"/sign-in"} onClick={handleLogout}>
                   Logout
                </Link>
              </li>
            ) : (
              <li>
                <Link href="/sign-in">Log In</Link>
              </li>
            )}
            <li>
              <Link href="/sign-in" className="">Contact Us</Link>
            </li>
          </ul>
        </div>

        {/* Second Box */}
        <div className="second-box ">
          {/* Hamburger Menu */}
          <div className="icon-container">
            {/* Brand Logo Icon */}
              <Logo4 />
            </div>


          <div className="menu_container">
            {/* Navigation Links */}
              <ul id="menu_bar" className="second_nav">
                {[
                  "About Us",
                  "Corporate & Investment",
                  "Wealth & Retail",
                  "Ventures",
                  "Investors",
                  "Insights",
                  "Media",
                  "Careers",
                ].map((item) => (
                  <li key={item}>
                    <a
                      href="/sign-in"
                      className="text-white"
                      onClick={(e) => {
                        e.preventDefault();
                        handleLinkClick(item);
                      }}
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            <div className="hamburger_container">
              {/* Search Icon */}
            <div
              className="search-icon"
              onClick={toggleSearch}
            >
              <FontAwesomeIcon icon={searchOpen ? faTimes : faSearch} className="icon" />
            </div>

              <div
                className="hamburger-menu text-white text-2xl cursor-pointer"
                onClick={toggleMenu}
              >
                <FontAwesomeIcon icon={menuOpen ? faTimes : faBars} />
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* MenuDropBox */}
      {dropBoxData && (
        <MenuDropBox
          ref={dropBoxRef} // Attach the ref to MenuDropBox
          title={dropBoxData.title}
          description={dropBoxData.description}
          links={dropBoxData.links}
          onClose={() => setDropBoxData(null)} // Close on cancel button click
        />
      )}

        {/* Search Container */}
        {searchOpen && (
          <div className="box_search">
            <div className="search-container">
              <div className="search-box">
                <div className="inner-box">
                  <input
                    type="text"
                    placeholder="Search sc.com"
                    className="search-input"
                  />
                  <div className="search-action">
                    <span>Search</span>
                    <FontAwesomeIcon className="search_icon_icon" icon={faSearch} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

      {/* Second Nav - Appears when menu is open */}
      {menuOpen && (
        <div className={`second_nav ${menuOpen ? 'active' : ''}`}>
          <ul className="drop_dwn space-y-4 px-6 py-4">
            {[
              "About Us",
              "Corporate & Investment",
              "Wealth & Retail",
              "Ventures",
              "Investors",
              "Insights",
              "Media",
              "Careers",
            ].map((item, index) => (
              <React.Fragment key={item}>
                <li>
                  <a
                    href="/sign-in"
                    className="menu_open_links"
                    onClick={(e) => {
                      e.preventDefault();
                      handleLScreenLinkClick(item, index);
                    }}
                  >
                    <p>{item}</p>
                    <FontAwesomeIcon icon={faArrowRight} />
                  </a>
                </li>
                {activeIndex === index && dropBoxData2 && (
                  <div className="dropbox_container">
                    <MenuDropBox2
                      ref={dropBoxRef}
                      title={dropBoxData2.title}
                      description={dropBoxData2.description}
                      links={dropBoxData2.links}
                      onClose={() => {
                        setDropBoxData2(null);
                        setActiveIndex(null);
                      }}
                    />
                  </div>
                )}
              </React.Fragment>
            ))}
          </ul>
          <div 
            style={{
              textAlign: "left",
              padding: "20px",
              color: "#0573eb"
            }}
          >
            <Link href={"/sign-in"}>{">"} Sign In</Link>
          </div>
        </div>
        
      )}
        
    </>
  );
};

export default Navbar;
