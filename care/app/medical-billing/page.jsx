"use client";

import Image from "next/image";
import billingImage from "../Images/drhero.png"; // Adjust path if needed
import Head from "next/head";
import {
  FaUserMd,
  FaFileInvoiceDollar,
  FaChartLine,
  FaExpandArrowsAlt,
} from "react-icons/fa";
import { useState } from "react";

const features = [
  {
    title: "Detailed Analysis and Bill Reporting",
    color: "bg-[#362d7e]",
    textColor: "text-white",
    points: [
      "Reporting on RVU to calculate the value of medical services",
      "Clearing up hidden glitches for better revenue collection",
      "Ensuring on-demand availability of latest billing reports",
      "Providing detailed billing reports",
    ],
  },
  {
    title: "Proper Service Level Agreements",
    color: "bg-[#7ec0ee]",
    textColor: "text-[#1d1d1d]",
    points: [
      "Dealing with payment posting for healthy cash flow",
      "Doing charge entry for service payments",
      "Reviewing denials with quick clear-ups",
      "Creating specialty-specific SLA reports",
      "Tracking accounts receivable aging",
    ],
  },
  {
    title: "Revenue Leakage Fix",
    color: "bg-[#7ec0ee]",
    textColor: "text-[#1d1d1d]",
    points: [
      "Identifying and resolving errors",
      "Coding medical records",
      "Benchmarking the coding",
      "Auditing medical records",
    ],
  },
  {
    title: "Best Billing Associates",
    color: "bg-[#362d7e]",
    textColor: "text-white",
    points: [
      "Modern technology for fast claim processing",
      "Medical billing with 24/7 physician support",
      "Ensuring correct patient billing",
    ],
  },
  {
    title: "Maximizing Clean Billing Claims %",
    color: "bg-[#362d7e]",
    textColor: "text-white",
    points: [
      "Identifying trends and patterns in claims data",
      "Tracking all aspects of the claims process",
      "Using advanced data analysis tools",
      "Appealing on denied claims",
      "Keeping the provider in loop",
    ],
  },
  {
    title: "Specialty Specific Specialization",
    color: "bg-[#7ec0ee]",
    textColor: "text-[#1d1d1d]",
    points: [
      "Staying updated on the latest changes in healthcare regulations",
      "Offering tailor-made solutions to small and medium practices",
      "Providing comprehensive services for improved bottom line",
      "Resolving RCM-related challenges for every specialty",
      "Supporting medical practitioners of all specialties",
    ],
  },
];

export default function MedicalBillingPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
  });
  return (
    <>
      <main className=" text-[#333]  py-12 ">
        <section className="relative  text-white mb-20 bg-[url('/billing.jpg')] bg-cover bg-center bg-no-repeat">
          <div className="bg-[#110f3e]/85 w-full h-full absolute inset-0 z-0 rounded-none"></div>

          <div className="relative z-10 max-w-7xl mx-auto px-6 py-16 flex flex-col md:flex-row items-center gap-10">
            {/* Left Section */}
            <div className="flex-1 z-10">
              <h1 className="text-3xl md:text-4xl font-medium leading-tight mb-6 max-w-3xl">
                CareBridge MDs – Revolutionizing Medical Billing with Precision
                & Trust
              </h1>
              <p className="text-lg mb-6 max-w-lg">
                Partner with one of the USA’s most reliable medical billing
                companies — where technology meets human expertise to maximize
                your revenue and minimize claim denials.
              </p>
              <button className="bg-[#ffffff] text-[#362d7e] px-6 py-3 rounded-full font-semibold hover:bg-[#cad1f6] transition cursor-pointer">
                Get Consultation
              </button>
            </div>
          </div>

          {/* Bottom Form - Overlapping */}
          <div className="absolute w-full bottom-[-3rem] px-4 z-20">
            <div className="bg-white max-w-5xl mx-auto shadow-xl rounded-2xl p-3 flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6">
              <div className="flex flex-col w-full md:w-1/3">
                <label className="font-medium text-gray-700 mb-1">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter Full Name"
                  className="border border-gray-300 rounded-lg px-4 py-2 text-black"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                />
              </div>

              <div className="flex flex-col w-full md:w-1/3">
                <label className="font-medium text-gray-700 mb-1">
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  placeholder="Enter Email"
                  className="border border-gray-300 rounded-lg px-4 py-2 text-black"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                />
              </div>

              <div className="flex flex-col w-full md:w-1/3">
                <label className="font-medium text-gray-700 mb-1">
                  Phone <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  placeholder="Enter Phone Number"
                  className="border border-gray-300 rounded-lg px-4 py-2 text-black"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                />
              </div>

              <button className="bg-[#362d7e] hover:bg-[#2c2560] text-white font-semibold py-2 rounded-full w-full cursor-pointer">
                Book Now
              </button>
            </div>
          </div>
        </section>

        <section className="max-w-7xl mx-auto   items-center gap-10 mb-20 px-6">
          {/* Text Content */}
          <div className="flex flex-col items-center justify-center text-center">
            <h2 className="text-3xl font-semibold text-[#362d7e] mb-4">
              Medical Billing Services Tailored for Healthcare Providers
            </h2>
            <p className="mb-4">
              At <strong>CareBridge MDs</strong>, we understand the financial
              backbone of any medical practice lies in accurate and timely
              billing. Our team of certified billers and coders streamline your
              entire billing workflow – from claim creation to payment posting.
            </p>
            <p className="mb-4">
              Whether you're a solo practitioner, clinic, or multi-specialty
              group, we customize billing strategies to your unique needs while
              maintaining strict HIPAA compliance.
            </p>
            <p className="mb-6">
              Let us take over the complexities of medical billing while you
              focus on delivering patient care.
            </p>
          </div>
        </section>

        <section className="max-w-7xl mx-auto mb-20">
          <h2 className="text-3xl font-medium text-[#362d7e] mb-6 text-center">
            Why Choose CareBridge MDs for Your Medical Billing?
          </h2>
          <div className="flex justify-center">
            <div className="grid md:grid-cols-3 gap-8 text-gray-800 w-full max-w-6xl mt-5 px-2">
              {/* 1 - Industry Expertise */}
              <div className="flex flex-col p-4 items-start gap-4 border-2 border-[#362d7e] rounded-2xl hover:bg-[#362d7e] group transition-all duration-300">
                <FaUserMd
                  className="text-[#362d7e] group-hover:text-white transition-all duration-300"
                  size={24}
                />
                <div>
                  <h3 className="text-xl font-semibold mb-1 group-hover:text-white transition-all duration-300">
                    Industry Expertise
                  </h3>
                  <p className="text-gray-700 group-hover:text-white transition-all duration-300">
                    With years of experience in the healthcare billing sector,
                    we understand the evolving regulations, payer guidelines,
                    and specialties inside out.
                  </p>
                </div>
              </div>

              {/* 2 - Fast & Accurate Claims */}
              <div className="flex flex-col p-4 items-start gap-4 border-2 border-[#362d7e] rounded-2xl hover:bg-[#362d7e] group transition-all duration-300">
                <FaFileInvoiceDollar
                  className="text-[#362d7e] group-hover:text-white transition-all duration-300"
                  size={24}
                />
                <div>
                  <h3 className="text-xl font-semibold mb-1 group-hover:text-white transition-all duration-300">
                    Fast & Accurate Claims
                  </h3>
                  <p className="text-gray-700 group-hover:text-white transition-all duration-300">
                    Our automated systems combined with human QA ensure your
                    claims are clean, accurate, and submitted on time.
                  </p>
                </div>
              </div>

              {/* 3 - Transparent Reporting */}
              <div className="flex flex-col p-4 items-start gap-4 border-2 border-[#362d7e] rounded-2xl hover:bg-[#362d7e] group transition-all duration-300">
                <FaChartLine
                  className="text-[#362d7e] group-hover:text-white transition-all duration-300"
                  size={24}
                />
                <div>
                  <h3 className="text-xl font-semibold mb-1 group-hover:text-white transition-all duration-300">
                    Transparent Reporting
                  </h3>
                  <p className="text-gray-700 group-hover:text-white transition-all duration-300">
                    Get real-time access to your revenue data, AR follow-ups,
                    and claim status via our client dashboard.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-4 mb-10 flex flex-col items-center">
          <p className="text-sm font-medium text-center text-[#362d7e] mb-2 uppercase tracking-wide">
            What Do We Offer
          </p>
          <h2 className="text-2xl md:text-3xl font-semibold  mb-4 text-[#362d7e] w-4/6 text-center">
            CareBridge MDs' Top Rated Billing Consultancy Group Is Here for
            Medical Billing Help
          </h2>
          <p className="text-center max-w-3xl mx-auto mb-12 text-gray-700">
            Our billing teams are more than just billers. We are every USA
            provider’s best-managed billing partner. Our medical billing
            advocates partner with physicians to improve their practice
            management and achieve sustainable growth. Here is how CareBridge
            MDs' healthcare billing consultancy group is helping practices with
            patient billing:
          </p>

          {/* Grid Section */}
          <div className="grid md:grid-cols-2 gap-6 relative">
            {/* First 2 Cards */}
            {features.slice(0, 2).map((feature, idx) => (
              <div
                key={idx}
                className={`${feature.color} ${feature.textColor} rounded-xl p-6 shadow-md`}
              >
                <h3 className="text-lg md:text-xl font-bold mb-4">
                  {feature.title}
                </h3>
                <ul className="space-y-2 text-sm md:text-base">
                  {feature.points.map((point, i) => (
                    <li key={i}>› {point}</li>
                  ))}
                </ul>
              </div>
            ))}

            {/* Next 2 Cards */}
            {features.slice(2, 4).map((feature, idx) => (
              <div
                key={idx}
                className={`${feature.color} ${feature.textColor} rounded-xl p-6 shadow-md`}
              >
                <h3 className="text-lg md:text-xl font-bold mb-4">
                  {feature.title}
                </h3>
                <ul className="space-y-2 text-sm md:text-base">
                  {feature.points.map((point, i) => (
                    <li key={i}>› {point}</li>
                  ))}
                </ul>
              </div>
            ))}

            {/* Last 2 Cards */}
            {features.slice(4).map((feature, idx) => (
              <div
                key={idx}
                className={`${feature.color} ${feature.textColor} rounded-xl p-6 shadow-md`}
              >
                <h3 className="text-lg md:text-xl font-bold mb-4">
                  {feature.title}
                </h3>
                <ul className="space-y-2 text-sm md:text-base">
                  {feature.points.map((point, i) => (
                    <li key={i}>› {point}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
        {/* CTA Section */}
        <section className="bg-[#362d7e] text-white py-12 px-6 rounded-lg text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Maximize Your Practice Revenue?
          </h2>
          <p className="mb-6 max-w-2xl mx-auto">
            Book a free consultation with our billing experts and see how
            CareBridge MDs can transform your revenue cycle.
          </p>
          <a
            href="/book-appointment"
            className="inline-block bg-white text-[#362d7e] font-semibold px-6 py-3 rounded-md hover:bg-gray-200 transition duration-300"
          >
            Book Your Free Consultation →
          </a>
        </section>
      </main>
    </>
  );
}
