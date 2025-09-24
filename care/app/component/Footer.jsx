"use client";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { MdEmail, MdPhone, MdLocationOn } from "react-icons/md";
import { CiMail } from "react-icons/ci";
import Link from "next/link";
import Image from "next/image";
import logo from "../Images/logofooter.png";

const Footer = () => {
  return (
    <footer className="bg-[#16163f] text-white py-10 px-6 md:px-16 lg:px-24">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Company Info */}
        <div>
          <div className="flex items-center  gap-1">
            <Image src={logo} alt="revenuw align solutions " />
            <div className="hidden md:block">
              <p>REVENUW ALIGN</p>
              <p>SOLUTIONS</p>
            </div>
          </div>
          <p className="text-sm leading-6 mt-4">
            Revenue Align Solutions (CAS) USA LLC is a leading healthcare
            services provider, managing numerous medical practices with
            compassionate, skilled professionals utilizing the latest tools and
            techniques. Our goal is to maintain the highest standards by
            providing our clients with complete RCM solutions.
          </p>
          <div className="flex gap-3 mt-6">
            <FaFacebookF className="w-6 h-6 hover:text-blue-500 cursor-pointer" />
            <FaXTwitter className="w-6 h-6 hover:text-black cursor-pointer" />
            <FaInstagram className="w-6 h-6 hover:text-pink-500 cursor-pointer" />
            <FaLinkedinIn className="w-6 h-6 hover:text-blue-300 cursor-pointer" />
          </div>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Our Services</h3>
          <ul className="space-y-2 text-lg">
            <li>
              <Link href={"/medical-billing"}>Medical Billing Services</Link>
            </li>
            <li>
              <Link href={"/medical-coding"}>Medical Coding Services</Link>
            </li>{" "}
            <li>
              <Link href={"/Medical Credentialing"}>
                Medical Credentialing Services
              </Link>
            </li>{" "}
            <li>
              <Link href={"/virtual-assistance"}>Virtual Assistance</Link>
            </li>{" "}
          </ul>
        </div>

        {/* About Us */}
        <div>
          <h3 className="text-xl font-semibold mb-4">About Us</h3>
          <ul className="space-y-2 text-lg">
            <li>Our Company</li>
            <li>Our Team</li>
            <li>Terms and Conditions</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        {/* Contact Us */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
          <ul className="space-y-3 text-lg">
            <li className="flex items-start gap-2">
              <CiMail className="mt-1 text-lg" /> info@revenuealignsolutions.com
            </li>

            <li className="flex items-start gap-2">
              <MdLocationOn className="mt-1 text-lg" />
              Texas USA
            </li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-10 border-t border-white/30 pt-4 text-center text-sm flex flex-col items-center md:flex-row md:justify-between">
        <p className="mt-2 md:mt-0">
          © Revenue Align Solutions USA LLC. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
