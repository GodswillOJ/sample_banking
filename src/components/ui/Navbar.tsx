
"use client";

import React, { useState } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faBars, faTimes, faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Toggle the menu
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

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
              <svg className="site-branding__logo--full" viewBox="0 0 157 62" role="img" aria-labelledby="sc-logo" fill="none" xmlns="http://www.w3.org/2000/svg">
              <title id="sc-logo">Standard Chartered</title>
              <path fillRule="evenodd" clipRule="evenodd" className="icon-part-green" d="M28.9647 13.5687C29.8849 12.9703 30.8283 12.553 32.1542 12.5527C35.1952 12.5521 37.6604 15.0148 37.6604 18.052C37.6604 21.0891 35.1952 23.5511 32.1542 23.5511C30.8691 23.5511 29.894 23.1327 28.9647 22.5351L22.0721 18.052L28.9647 13.5687ZM4.21638 43.8988L30.0411 60.6903C32.5584 62.3193 36.0669 61.7306 37.7741 59.0631C39.4362 56.4661 38.7301 53.0234 36.1448 51.34L2.62803 29.5401C2.62803 29.5401 -0.805552 33.7103 0.23567 38.5748C0.977282 42.0396 4.21638 43.8988 4.21638 43.8988Z" fill="#38D200"></path>
              <path fillRule="evenodd" clipRule="evenodd" className="icon-part-blue" d="M1.62342 18.0384C1.62342 23.556 5.57937 25.9416 5.57937 25.9416L36.1454 45.8223C36.1454 45.8223 39.5348 41.7708 38.5313 36.8528C37.8121 33.328 34.1628 31.2393 34.1628 31.2393L13.888 18.0521L25.7872 10.3133C28.3749 8.63344 29.109 5.17668 27.4269 2.59245C25.7449 0.00822502 22.2839 -0.725041 19.6961 0.954835L5.57779 10.184C5.57779 10.184 1.62342 12.5393 1.62342 18.0384ZM8.69567 60.5642C7.77544 61.1626 6.8321 61.5799 5.50624 61.5802C2.46521 61.5809 0 59.1182 0 56.081C0 53.0439 2.46521 50.5818 5.50624 50.5818C6.79141 50.5818 7.76651 51.0003 8.69567 51.5978L15.5883 56.0809L8.69567 60.5642Z" fill="#0473EA"></path>
              <text
                className="logo-lettering"
                x="45"
                y="15"
                fontFamily="SC Prosper Sans', sans-serif"
                fontSize="16"
                fill="#000000"
              >
                <tspan x="55" dy="16">standard</tspan>
                <tspan x="55" dy="18">chartered</tspan>
              </text>

              </svg>

              {/* Brand Name Title */}
              {/* <span id="sc-logo" className="text-white text-xl">Standard Chartered</span> */}
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
            <div className="search-icon bg-blue-600 text-white rounded-full p-2 cursor-pointer">
              <FontAwesomeIcon icon={faSearch} className="h-6 w-6" />
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

    {/* Second Nav - Appears when menu is open */}
    {menuOpen && (
      <div className={`second_nav ${menuOpen ? 'active' : ''}`}>
        <ul className="drop_dwn space-y-4 px-6 py-4">
          <li>
            <Link href="/about-us" className="menu_open_links">
              <p>About Us</p>
              <FontAwesomeIcon icon={faArrowRight} className="arrow_right" />
            </Link>
          </li>
          <li>
            <Link href="/corporate-investment" className="menu_open_links">
              <p>Corporate & Investment</p>
              <FontAwesomeIcon icon={faArrowRight} className="arrow_right" />
            </Link>
          </li>
          <li>
            <Link href="/wealth-retail" className="menu_open_links">
              <p>Wealth & Retail</p>
              <FontAwesomeIcon icon={faArrowRight} className="arrow_right" />
            </Link>
          </li>
          <li>
            <Link href="/ventures" className="menu_open_links">
              <p>Ventures</p>
              <FontAwesomeIcon icon={faArrowRight} className="arrow_right" />
            </Link>
          </li>
          <li>
            <Link href="/investors" className="menu_open_links">
              <p>Investors</p>
              <FontAwesomeIcon icon={faArrowRight} className="arrow_right" />
            </Link>
          </li>
          <li>
            <Link href="/insights" className="menu_open_links">
              <p>Insights</p>
              <FontAwesomeIcon icon={faArrowRight} className="arrow_right" />
            </Link>
          </li>
          <li>
            <Link href="/media" className="menu_open_links">
              <p>Media</p>
              <FontAwesomeIcon icon={faArrowRight} className="arrow_right" />
            </Link>
          </li>
          <li>
            <Link href="/careers" className="menu_open_links">
              <p>Careers</p>
              <FontAwesomeIcon icon={faArrowRight} className="arrow_right" />
            </Link>
          </li>
        </ul>
      </div>
    )}

    </>
  );
};

export default Navbar;
 