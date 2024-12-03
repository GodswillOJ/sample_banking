"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faBars, faTimes, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import {Logo2} from "./logo";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  // Ensure component is client-side only
  useEffect(() => {
    setIsClient(true);
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleSearch = () => {
    setSearchOpen(!searchOpen);
  };

  if (!isClient) return null; // Prevent rendering on the server

  return (
    <>
      {/* Navbar */}
      <nav className="justify-between items-center bg-black p-4">
        {/* First Box */}
        <div className="first-box relative w-full">
          <p></p>
          <ul className="first_box_menu space-x-6">
            <li>
              <Link href="/online-banking" className="border-r border-white text-white px-4 py-2 hover:bg-gray-800">
                Online Banking
              </Link>
            </li>
            <li>
              <Link href="/private-banking-online" className="border-r border-white text-white px-4 py-2 hover:bg-gray-800">
                Private Banking Online
              </Link>
            </li>
            <li>
              <Link href="/straight2bank" className="border-r border-white text-white px-4 py-2 hover:bg-gray-800">
                Straight2bank
              </Link>
            </li>
            <li>
              <Link href="/local-sites" className="border-r border-white text-white px-4 py-2 hover:bg-gray-800">
                Local Sites
              </Link>
            </li>
            <li>
              <Link href="/contact-us" className="text-white px-4 py-2 hover:bg-gray-800">Contact Us</Link>
            </li>
          </ul>
        </div>

        {/* Second Box */}
        <div className="second-box flex items-center space-x-6">
          {/* Hamburger Menu */}
          <div className="icon-container flex items-center space-x-2">
              {/* Brand Logo Icon */}
            <Logo2/>
          </div>

          <div className="menu_container">
            {/* Navigation Links */}
            <ul id='menu_bar' className="second_nav flex space-x-6">
              <li>
                <Link href="/about-us" className="text-white hover:bg-gray-800 px-4 py-2">About Us</Link>
              </li>
              <li>
                <Link href="/corporate-investment" className="text-white hover:bg-gray-800 px-4 py-2">Corporate & Investment</Link>
              </li>
              <li>
                <Link href="/wealth-retail" className="text-white hover:bg-gray-800 px-4 py-2">Wealth & Retail</Link>
              </li>
              <li>
                <Link href="/ventures" className="text-white hover:bg-gray-800 px-4 py-2">Ventures</Link>
              </li>
              <li>
                <Link href="/investors" className="text-white hover:bg-gray-800 px-4 py-2">Investors</Link>
              </li>
              <li>
                <Link href="/insights" className="text-white hover:bg-gray-800 px-4 py-2">Insights</Link>
              </li>
              <li>
                <Link href="/media" className="text-white hover:bg-gray-800 px-4 py-2">Media</Link>
              </li>
              <li>
                <Link href="/careers" className="text-white hover:bg-gray-800 px-4 py-2">Careers</Link>
              </li>
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
            <li>
              <Link href="/about-us" className="menu_open_links">
                <p>About Us</p>
                <FontAwesomeIcon icon={faArrowRight} />
              </Link>
            </li>
            <li>
              <Link href="/corporate-investment" className="menu_open_links">
                <p>Corporate & Investment</p>
                <FontAwesomeIcon icon={faArrowRight} />
              </Link>
            </li>
            <li>
              <Link href="/wealth-retail" className="menu_open_links">
                <p>Wealth & Retail</p>
                <FontAwesomeIcon icon={faArrowRight} />
              </Link>
            </li>
            <li>
              <Link href="/ventures" className="menu_open_links">
                <p>Ventures</p>
                <FontAwesomeIcon icon={faArrowRight} />
              </Link>
            </li>
            <li>
              <Link href="/investors" className="menu_open_links">
                <p>Investors</p>
                <FontAwesomeIcon icon={faArrowRight} />
              </Link>
            </li>
            <li>
              <Link href="/insights" className="menu_open_links">
                <p>Insights</p>
                <FontAwesomeIcon icon={faArrowRight} />
              </Link>
            </li>
            <li>
              <Link href="/media" className="menu_open_links">
                <p>Media</p>
                <FontAwesomeIcon icon={faArrowRight} />
              </Link>
            </li>
            <li>
              <Link href="/careers" className="menu_open_links">
                <p>Careers</p>
                <FontAwesomeIcon icon={faArrowRight} />
              </Link>
            </li>
          </ul>
        </div>
      )}
    </>
  );
};

export default Navbar;
