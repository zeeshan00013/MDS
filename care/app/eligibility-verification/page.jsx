"use client";

import Image from "next/image";
import verificationImage from "../Images/drhero.png"; // Update with a relevant image if available
import { FaUserMd, FaFileInvoiceDollar, FaChartLine } from "react-icons/fa";
import { useState } from "react";

const features = [
  {
    title: "Real-Time Insurance Verification",
    color: "bg-[#362d7e]",
    textColor: "text-white",
    points: [
      "Verify patient insurance before appointments",
      "Check active coverage and benefit details",
      "Instant eligibility responses via payer portals",
      "Reduced claim rejections and denials",
    ],
  },
  {
    title: "Pre-Authorization Support",
    color: "bg-[#7ec0ee]",
    textColor: "text-[#1d1d1d]",
    points: [
      "Initiate and track pre-authorization requests",
      "Support for procedures, diagnostics, and referrals",
      "Coordination with payers for timely approvals",
      "Minimize delays in patient treatment",
    ],
  },
  {
    title: "Coverage Limit & Deductible Checks",
    color: "bg-[#7ec0ee]",
    textColor: "text-[#1d1d1d]",
    points: [
      "Review patient benefits and limits",
      "Out-of-pocket expense verification",
      "Co-pay and deductible status visibility",
      "Improved patient payment collections",
    ],
  },
  {
    title: "Multi-Payer Portal Expertise",
    color: "bg-[#362d7e]",
    textColor: "text-white",
    points: [
      "Expertise with Medicare, Medicaid, and commercial payers",
      "Faster turnaround with payer-specific workflows",
      "Integrated with leading EHR systems",
    ],
  },
  {
    title: "Patient Eligibility Audits",
    color: "bg-[#362d7e]",
    textColor: "text-white",
    points: [
      "Batch verification for scheduled patients",
      "Eligibility reporting for billing teams",
      "Identification of high-risk cases",
      "Audit-ready documentation support",
    ],
  },
  {
    title: "Specialty-Specific Verification",
    color: "bg-[#7ec0ee]",
    textColor: "text-[#1d1d1d]",
    points: [
      "Custom workflows for each medical specialty",
      "Handling complex benefit structures",
      "Tailored to your practice's verification needs",
      "Ensures compliance and accuracy",
    ],
  },
];

export default function EligibilityVerificationPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
  });

  return (
    <>
      <main className="bg-[#F8F8F8] text-[#333] py-12">
        {/* Hero Section */}
        <section className="relative bg-[#110f3e] text-white mb-20 bg-[url('/eligibil.jpg')] bg-cover bg-center bg-no-repeat">
          {/* Overlay */}
          <div className="absolute inset-0 bg-[#110f3e]/85 z-0" />

          {/* Main Content */}
          <div className="relative z-10 max-w-7xl mx-auto px-6 py-16 flex flex-col md:flex-row items-center gap-10">
            <div className="flex-1">
              <h1 className="text-3xl md:text-4xl font-medium leading-tight mb-6 max-w-3xl">
                Claims Align Solutions – Fast & Reliable Eligibility
                Verification Services
              </h1>
              <p className="text-lg mb-6 max-w-lg">
                Improve your claim success rate and reduce denials with accurate
                real-time eligibility verification from Claims Align Solutions.
              </p>
              <button className="bg-white text-[#362d7e] px-6 py-3 rounded-full font-semibold hover:bg-[#cad1f6] transition cursor-pointer">
                Get Eligibility Verification Help
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
            Simplified Eligibility Verification for Your Practice
          </h2>
          <p className="mb-4">
            <strong>Claims Align Solutions</strong> helps you verify patient
            insurance eligibility before services, avoiding costly denials and
            improving cash flow.
          </p>
          <p className="mb-4">
            Our team ensures all scheduled patients are verified in advance,
            saving staff time and reducing billing errors.
          </p>
          <p className="mb-6">
            Let us handle the backend so you can focus on patient care.
          </p>
        </section>

        {/* Why Us Section */}
        <section className="max-w-7xl mx-auto mb-20">
          <h2 className="text-3xl font-medium text-[#362d7e] mb-6 text-center">
            Why Choose Claims Align Solutions for Eligibility Verification?
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
                    Experienced Verification Team
                  </h3>
                  <p className="text-gray-700 group-hover:text-white transition-all duration-300">
                    Our staff verifies coverage for all major payers with
                    accurate and fast turnaround.
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
                    Real-Time Status Updates
                  </h3>
                  <p className="text-gray-700 group-hover:text-white transition-all duration-300">
                    View patient eligibility and pre-auth statuses instantly
                    through our secure dashboard.
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
                    Reduce Claim Denials
                  </h3>
                  <p className="text-gray-700 group-hover:text-white transition-all duration-300">
                    Properly verified claims are less likely to be denied,
                    improving your revenue cycle.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="max-w-7xl mx-auto px-4 mb-10 flex flex-col items-center">
          <p className="text-sm font-medium text-center text-[#362d7e] mb-2 uppercase tracking-wide">
            Our Eligibility Solutions
          </p>
          <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-[#362d7e] w-4/6 text-center">
            Why Healthcare Providers Trust Claims Align Solutions for
            Verification
          </h2>
          <p className="text-center max-w-3xl mx-auto mb-12 text-gray-700">
            We provide end-to-end eligibility services to help practices confirm
            patient benefits accurately and stay audit-ready.
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
            Want to Improve Eligibility Accuracy?
          </h2>
          <p className="mb-6 max-w-2xl mx-auto">
            Book a free consultation with Claims Align Solutions and learn how
            we can simplify eligibility verification for your practice.
          </p>
          <a
            href="/book-appointment"
            className="inline-block bg-white text-[#362d7e] font-semibold px-6 py-3 rounded-md hover:bg-gray-200 transition duration-300"
          >
            Book Your Free Verification Consultation →
          </a>
        </section>
      </main>
    </>
  );
}
