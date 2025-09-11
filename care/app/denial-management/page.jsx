"use client";

import Image from "next/image";
import denialImage from "../Images/drhero.png"; // Replace with a more relevant image if available
import { FaUserMd, FaFileInvoiceDollar, FaChartLine } from "react-icons/fa";
import { useState } from "react";

const features = [
  {
    title: "Root Cause Analysis",
    color: "bg-[#362d7e]",
    textColor: "text-white",
    points: [
      "In-depth review of denial trends",
      "Identify billing, coding, and documentation issues",
      "Customized denial category reporting",
      "Real-time feedback to prevent recurring errors",
    ],
  },
  {
    title: "Corrective Resubmission",
    color: "bg-[#7ec0ee]",
    textColor: "text-[#1d1d1d]",
    points: [
      "Timely corrections of denied claims",
      "Claim resubmission with proper documentation",
      "Automated tracking of resubmitted claims",
      "Follow-up with payers until resolution",
    ],
  },
  {
    title: "Appeals & Reconsiderations",
    color: "bg-[#7ec0ee]",
    textColor: "text-[#1d1d1d]",
    points: [
      "Strong appeal letters with supporting documentation",
      "Utilizing payer-specific appeal guidelines",
      "Escalating high-value denials effectively",
      "Tracking appeal outcomes and timelines",
    ],
  },
  {
    title: "Denial Prevention Training",
    color: "bg-[#362d7e]",
    textColor: "text-white",
    points: [
      "Training for coding and billing staff",
      "Provider education for documentation improvement",
      "Policy updates to avoid preventable denials",
    ],
  },
  {
    title: "Reporting & Analytics",
    color: "bg-[#362d7e]",
    textColor: "text-white",
    points: [
      "Denial dashboards with drill-down reports",
      "Root cause insights by payer and procedure",
      "Monthly review meetings for performance improvement",
      "KPIs to track resolution rate and timelines",
    ],
  },
  {
    title: "Specialty-Specific Denial Management",
    color: "bg-[#7ec0ee]",
    textColor: "text-[#1d1d1d]",
    points: [
      "Tailored denial handling for your specialty",
      "Understanding of specialty-specific coding rules",
      "Faster denial resolution using proven workflows",
      "Support for complex payer policies",
    ],
  },
];

export default function DenialManagementPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
  });

  return (
    <>
      <main className="bg-[#F8F8F8] text-[#333] py-12">
        {/* Hero Section */}
        <section className="relative bg-[#110f3e] text-white mb-20 bg-[url('/denial.jpg')] bg-cover bg-center bg-no-repeat">
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-[#110f3e]/85 z-0" />

          {/* Main Content */}
          <div className="relative z-10 max-w-7xl mx-auto px-6 py-16 flex flex-col md:flex-row items-center gap-10">
            <div className="flex-1">
              <h1 className="text-3xl md:text-4xl font-medium leading-tight mb-6 max-w-3xl">
                Revenue Align Solutions – Denial Management Services That
                Recover Lost Revenue
              </h1>
              <p className="text-lg mb-6 max-w-lg">
                Eliminate revenue leakage with expert denial handling, faster
                appeals, and long-term prevention strategies.
              </p>
              <button className="bg-white text-[#362d7e] px-6 py-3 rounded-full font-semibold hover:bg-[#cad1f6] transition cursor-pointer">
                Get Denial Management Help
              </button>
            </div>
          </div>

          {/* Floating Form */}
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

        {/* Intro Section */}
        <section className="max-w-7xl mx-auto text-center items-center gap-10 mb-20 px-6">
          <h2 className="text-3xl font-semibold text-[#362d7e] mb-4">
            Professional Denial Management by Revenue Align Solutions
          </h2>
          <p className="mb-4">
            <strong>Revenue Align Solutions</strong> turns denials into dollars
            with fast action, root cause analysis, and payer-specific appeal
            strategies.
          </p>
          <p className="mb-4">
            We help practices reduce write-offs and prevent recurring denials
            through data-driven workflows and education.
          </p>
          <p className="mb-6">
            Reclaim revenue and stabilize your collections—let us handle your
            denials.
          </p>
        </section>

        {/* Why Us Section */}
        <section className="max-w-7xl mx-auto mb-20">
          <h2 className="text-3xl font-medium text-[#362d7e] mb-6 text-center">
            Why Choose Revenue Align Solutions for Denial Management?
          </h2>
          <div className="flex justify-center">
            <div className="grid md:grid-cols-3 gap-8 text-gray-800 w-full max-w-6xl mt-5 px-2">
              <div className="flex flex-col p-4 items-start gap-4 border-2 border-[#362d7e] rounded-2xl hover:bg-[#362d7e] group transition-all duration-300">
                <FaUserMd
                  className="text-[#362d7e] group-hover:text-white transition-all duration-300"
                  size={24}
                />
                <div>
                  <h3 className="text-xl font-semibold mb-1 group-hover:text-white transition-all duration-300">
                    Experienced Analysts
                  </h3>
                  <p className="text-gray-700 group-hover:text-white transition-all duration-300">
                    Our specialists dig deep into denial causes and apply proven
                    strategies to recover payments fast.
                  </p>
                </div>
              </div>

              <div className="flex flex-col p-4 items-start gap-4 border-2 border-[#362d7e] rounded-2xl hover:bg-[#362d7e] group transition-all duration-300">
                <FaChartLine
                  className="text-[#362d7e] group-hover:text-white transition-all duration-300"
                  size={24}
                />
                <div>
                  <h3 className="text-xl font-semibold mb-1 group-hover:text-white transition-all duration-300">
                    Data-Driven Recovery
                  </h3>
                  <p className="text-gray-700 group-hover:text-white transition-all duration-300">
                    We use denial codes, payer trends, and benchmarking to fix
                    issues and prevent future denials.
                  </p>
                </div>
              </div>

              <div className="flex flex-col p-4 items-start gap-4 border-2 border-[#362d7e] rounded-2xl hover:bg-[#362d7e] group transition-all duration-300">
                <FaFileInvoiceDollar
                  className="text-[#362d7e] group-hover:text-white transition-all duration-300"
                  size={24}
                />
                <div>
                  <h3 className="text-xl font-semibold mb-1 group-hover:text-white transition-all duration-300">
                    Appeals That Work
                  </h3>
                  <p className="text-gray-700 group-hover:text-white transition-all duration-300">
                    Our appeal templates and documentation strategies increase
                    acceptance rates and reduce backlogs.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="max-w-7xl mx-auto px-4 mb-10 flex flex-col items-center">
          <p className="text-sm font-medium text-center text-[#362d7e] mb-2 uppercase tracking-wide">
            Our Denial Management Solutions
          </p>
          <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-[#362d7e] w-4/6 text-center">
            How Revenue Align Solutions Recovers Denied Revenue
          </h2>
          <p className="text-center max-w-3xl mx-auto mb-12 text-gray-700">
            Don’t let denials drain your revenue. Our team identifies, corrects,
            and prevents denials with a tailored plan for your practice.
          </p>

          <div className="grid md:grid-cols-2 gap-6 relative">
            {features.map((feature, idx) => (
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

        {/* CTA */}
        <section className="bg-[#362d7e] text-white py-12 px-6 rounded-lg text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Turn Denials into Revenue?
          </h2>
          <p className="mb-6 max-w-2xl mx-auto">
            Book a free consultation with our denial management experts and get
            your revenue back on track.
          </p>
          <a
            href="/book-appointment"
            className="inline-block bg-white text-[#362d7e] font-semibold px-6 py-3 rounded-md hover:bg-gray-200 transition duration-300"
          >
            Book Your Free Denial Assessment →
          </a>
        </section>
      </main>
    </>
  );
}
