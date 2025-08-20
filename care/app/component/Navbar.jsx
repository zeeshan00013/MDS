"use client";
import { useState } from "react";
import {
  FaPhoneAlt,
  FaChevronDown,
  FaSearch,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import Link from "next/link";

const services = [
  "Medical Billing and Coding",
  "Medical Credentialing",
  "Virtual Assistance",
  "Digital Marketing",
  "Eligibility Verification",
  "Prior Authorization",
  "Revenue Cycle Management (RCM)",
  "Accounts Receivable (AR) Management",
  "Denial management",
];

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header>
      {/* Top Bar */}
      <div className="bg-[#110f3e] text-white">
        <div className="px-6 py-4 flex md:flex-row flex-col justify-between items-center  max-w-7xl mx-auto">
          <div className="flex items-center gap-2">
            <FaPhoneAlt className="text-white" />
            <span>+923480114527</span>
          </div>
          <div className="flex items-center gap-4 ">
            <span>carebridgemd580@gmail.com</span>
            <span>|</span>
            <span className="flex ">Taxas USA</span>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="bg-white shadow-md">
        <nav className="px-6 py-6 flex justify-between items-center flex-wrap max-w-7xl mx-auto">
          {/* Logo */}
          <div className="flex items-center gap-2 text-xl font-semibold text-[#14124B]">
            Care<span className="text-[#3F50B5]">Bridge</span>
          </div>

          {/* Hamburger for mobile */}
          <div className="lg:hidden">
            <button
              className="text-black"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
            </button>
          </div>

          {/* Desktop Navigation */}
          <ul className="hidden lg:flex items-center gap-6 text-gray-800 font-medium">
            <li>
              <Link href="/" className="hover:text-[#3F50B5] cursor-pointer">
                Home
              </Link>
            </li>

            <li className="relative group">
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="flex items-center gap-1 hover:text-[#3F50B5] cursor-pointer"
              >
                Services <FaChevronDown className="text-xs mt-1" />
              </button>
              {dropdownOpen && (
                <ul className="absolute top-full left-0 bg-white text-black shadow-md rounded-md mt-2 w-72 z-50">
                  {services.map((item, idx) => (
                    <li
                      key={idx}
                      className="hover:bg-gray-100 px-4 py-2 cursor-pointer"
                    >
                      <Link
                        href={`/services/${item
                          .toLowerCase()
                          .replace(/\s+/g, "-")}`}
                        className="block"
                      >
                        {item}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
            <li>
              <Link
                href="/contact"
                className="hover:text-[#3F50B5] cursor-pointer"
              >
                Contact
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="hover:text-[#3F50B5] cursor-pointer"
              >
                About
              </Link>
            </li>
          </ul>
          <div>
            <Link href="/book-appointment">
              <button className="bg-[#362d7e] text-white px-5 py-2 rounded-lg hover:bg-[#2e3b8f] transition-all cursor-pointer shadow-md">
                Book An Appointment
              </button>
            </Link>
          </div>
        </nav>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white px-6 py-4 space-y-4">
            <Link
              href="/"
              className="block hover:text-[#3F50B5] cursor-pointer"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="block hover:text-[#3F50B5] cursor-pointer"
            >
              About
            </Link>
            {/* Services Dropdown */}
            <div>
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="flex items-center gap-1 hover:text-[#3F50B5] cursor-pointer"
              >
                Services <FaChevronDown className="text-xs mt-1" />
              </button>
              {dropdownOpen && (
                <ul className="mt-2 pl-4 text-sm">
                  {services.map((item, idx) => (
                    <li
                      key={idx}
                      className="hover:text-[#3F50B5] py-1 cursor-pointer"
                    >
                      <Link
                        href={`/services/${item
                          .toLowerCase()
                          .replace(/\s+/g, "-")}`}
                        className="block"
                      >
                        {item}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>
            <Link
              href="/contact"
              className="block hover:text-[#3F50B5] cursor-pointer"
            >
              Contact
            </Link>
            <Link href="/book-appointment">
              <button className="mt-3 w-full bg-[#3F50B5] text-white px-5 py-2 rounded-lg hover:bg-[#2e3b8f] transition-all cursor-pointer shadow-md">
                Talk To An Expert →
              </button>
            </Link>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
