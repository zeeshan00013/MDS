"use client";

import Image from "next/image";
import { FaUserMd, FaHeartbeat, FaLaptopMedical } from "react-icons/fa";
import { MdOutlinePeopleAlt } from "react-icons/md";
import { BiTargetLock } from "react-icons/bi";

export default function AboutPage() {
  return (
    <div className="bg-white text-gray-800  py-16">
      <div className=" bg-[#110f3e] mx-auto text-center px-6 py-4">
        <h1 className="text-3xl md:text-4xl font-medium text-white leading-tight mb-6 ">
          About Revenue ALign Solutions
        </h1>
        <p className="text-lg text-gray-100">
          Revenue Align Solutions is a trusted healthcare service provider
          offering end-to-end solutions for medical billing, revenue cycle
          management, credentialing, coding, and practice optimization. Our
          services are designed to help healthcare providers operate more
          efficiently, reduce revenue loss, and improve financial performance.
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10 mt-16 px-6">
        <div className="text-center">
          <BiTargetLock className="text-5xl text-[#3d2d7d] mx-auto mt-4" />
          <h2 className="text-xl font-semibold mt-2">Our Mission</h2>
          <p className="text-sm text-gray-600 mt-2">
            To optimize healthcare revenue through reliable, efficient, and
            accurate medical billing services.
          </p>
        </div>

        <div className="text-center">
          <FaHeartbeat className="text-5xl text-[#3d2d7d] mx-auto mt-4" />
          <h2 className="text-xl font-semibold mt-2">Our Vision</h2>
          <p className="text-sm text-gray-600 mt-2">
            To be the leading medical billing solution that bridges providers
            with financial success.
          </p>
        </div>

        <div className="text-center">
          <MdOutlinePeopleAlt className="text-5xl text-[#3d2d7d] mx-auto mt-4" />
          <h2 className="text-xl font-semibold mt-2">Our Team</h2>
          <p className="text-sm text-gray-600 mt-2">
            A team of certified billers, coders, and account managers with a
            passion for healthcare success.
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto mt-20 px-6">
        <h2 className="text-3xl font-bold text-center text-[#3d2d7d] mb-10">
          Why Choose Revenue Align Solutions ?
        </h2>
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div className="p-6 border rounded-lg shadow hover:shadow-md transition">
            <FaUserMd className="text-4xl text-indigo-500 mx-auto mb-4" />
            <h3 className="font-semibold text-lg">Expert Billing Services</h3>
            <p className="text-sm mt-2 text-gray-600">
              We understand the complex needs of medical billing and deliver
              with precision and speed.
            </p>
          </div>
          <div className="p-6 border rounded-lg shadow hover:shadow-md transition">
            <FaLaptopMedical className="text-4xl text-indigo-500 mx-auto mb-4" />
            <h3 className="font-semibold text-lg">Latest Technology</h3>
            <p className="text-sm mt-2 text-gray-600">
              We use advanced billing tools and secure platforms to streamline
              the process.
            </p>
          </div>
          <div className="p-6 border rounded-lg shadow hover:shadow-md transition">
            <MdOutlinePeopleAlt className="text-4xl text-indigo-500 mx-auto mb-4" />
            <h3 className="font-semibold text-lg">Client-Focused Team</h3>
            <p className="text-sm mt-2 text-gray-600">
              Our team builds strong relationships and provides unmatched
              support to our clients.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
