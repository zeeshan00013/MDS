"use client";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { MdEmail, MdPhone, MdLocationOn } from "react-icons/md";
import { CiMail } from "react-icons/ci";

const Footer = () => {
  return (
    <footer className="bg-[#16163f] text-white py-10 px-6 md:px-16 lg:px-24">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Company Info */}
        <div>
          <h2 className="text-3xl font-bold mb-2">Claims Align Solutions </h2>
          <p className="text-sm leading-6 mt-4">
            Claims Align Solutions (CAS) USA LLC is a leading healthcare
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
            <li>Medical Billing Services</li>
            <li>Medical Coding Services</li>
            <li>Medical Credentialing Services</li>
            <li>Patient Billing Services</li>
            <li>Front Office Management</li>
            <li>Providers Quality Payment Program</li>
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
              <MdPhone className="mt-1 text-lg" /> +923480114527
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
          © Claims Align Solutions USA LLC. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
