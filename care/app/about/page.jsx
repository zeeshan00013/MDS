"use client";

import Image from "next/image";
import { FaUserMd, FaHeartbeat, FaLaptopMedical } from "react-icons/fa";
import { MdOutlinePeopleAlt } from "react-icons/md";
import { BiTargetLock } from "react-icons/bi";
import img from "../Images/caremds.webp";

export default function AboutPage() {
  return (
    <div className="bg-white text-gray-800 px-6 py-16">
      {/* Header Section */}
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-3xl md:text-4xl font-medium leading-tight mb-6 ">
          About CareBridge MDS
        </h1>
        <p className="text-lg text-gray-600">
          Your Trusted Partner in Medical Billing & Revenue Cycle Management
        </p>
      </div>

      {/* Mission, Vision & Values */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10 mt-16">
        {/* Mission */}
        <div className="text-center">
          <Image
            src={img}
            alt="Mission"
            width={300}
            height={200}
            className="mx-auto rounded-md"
          />
          <BiTargetLock className="text-5xl text-[#3d2d7d] mx-auto mt-4" />
          <h2 className="text-xl font-semibold mt-2">Our Mission</h2>
          <p className="text-sm text-gray-600 mt-2">
            To optimize healthcare revenue through reliable, efficient, and
            accurate medical billing services.
          </p>
        </div>

        {/* Vision */}
        <div className="text-center">
          <Image
            src={img}
            alt="Vision"
            width={300}
            height={200}
            className="mx-auto rounded-md"
          />
          <FaHeartbeat className="text-5xl text-[#3d2d7d] mx-auto mt-4" />
          <h2 className="text-xl font-semibold mt-2">Our Vision</h2>
          <p className="text-sm text-gray-600 mt-2">
            To be the leading medical billing solution that bridges providers
            with financial success.
          </p>
        </div>

        {/* Teamwork */}
        <div className="text-center">
          <Image
            src={img}
            alt="Team"
            width={300}
            height={200}
            className="mx-auto rounded-md"
          />
          <MdOutlinePeopleAlt className="text-5xl text-[#3d2d7d] mx-auto mt-4" />
          <h2 className="text-xl font-semibold mt-2">Our Team</h2>
          <p className="text-sm text-gray-600 mt-2">
            A team of certified billers, coders, and account managers with a
            passion for healthcare success.
          </p>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="max-w-5xl mx-auto mt-20">
        <h2 className="text-3xl font-bold text-center text-[#3d2d7d] mb-10">
          Why Choose CareBridge MDS?
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
