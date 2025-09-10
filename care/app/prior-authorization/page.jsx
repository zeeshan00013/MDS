"use client";

import Image from "next/image";
import priorAuthImage from "../Images/drhero.png"; // Replace with relevant image if needed
import { FaUserMd, FaFileInvoiceDollar, FaChartLine } from "react-icons/fa";
import { useState } from "react";

const features = [
  {
    title: "Timely Authorization Submissions",
    color: "bg-[#362d7e]",
    textColor: "text-white",
    points: [
      "Initiate authorizations within 24 hours",
      "Quick turnaround for urgent procedures",
      "Accurate CPT/diagnosis entry to avoid rejections",
      "Direct payer portal access for faster processing",
    ],
  },
  {
    title: "Multi-Payer Authorization Support",
    color: "bg-[#7ec0ee]",
    textColor: "text-[#1d1d1d]",
    points: [
      "Expertise in commercial, Medicare, and Medicaid policies",
      "Stay updated on payer-specific rules",
      "Reduce back-and-forth with documentation prep",
      "Faster approvals across all insurance types",
    ],
  },
  {
    title: "Real-Time Status Tracking",
    color: "bg-[#7ec0ee]",
    textColor: "text-[#1d1d1d]",
    points: [
      "Get instant updates on auth status",
      "Integrated alerts for expiring or pending requests",
      "Communication with payer reps on your behalf",
      "Centralized dashboard access (optional)",
    ],
  },
  {
    title: "Appeals & Denials Management",
    color: "bg-[#362d7e]",
    textColor: "text-white",
    points: [
      "Handle denials with timely appeals",
      "Identify reasons for rejection",
      "Resubmit with corrected info and documents",
    ],
  },
  {
    title: "Document Collection & Validation",
    color: "bg-[#362d7e]",
    textColor: "text-white",
    points: [
      "Pre-fill forms for providers",
      "Gather all supporting clinical notes",
      "Review for completeness before submission",
      "Minimize resubmissions due to missing info",
    ],
  },
  {
    title: "Specialty-Specific Authorization Workflows",
    color: "bg-[#7ec0ee]",
    textColor: "text-[#1d1d1d]",
    points: [
      "Custom process for surgeries, imaging, DME, etc.",
      "Tailored handling for specialties like cardiology, ortho, neuro",
      "Reduce provider burden by offloading tasks",
      "Ensure compliance with payer-specific protocols",
    ],
  },
];

export default function PriorAuthorizationPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
  });

  return (
    <>
      <main className="bg-[#F8F8F8] text-[#333] py-12">
        {/* Hero Section */}
        <section className="relative bg-[#110f3e] text-white mb-20 bg-[url('/prior.jpg')] bg-cover bg-center bg-no-repeat">
          {/* Overlay */}
          <div className="absolute inset-0 bg-[#110f3e]/85 z-0" />

          {/* Main Content */}
          <div className="relative z-10 max-w-7xl mx-auto px-6 py-16 flex flex-col md:flex-row items-center gap-10">
            <div className="flex-1">
              <h1 className="text-3xl md:text-4xl font-medium leading-tight mb-6 max-w-3xl">
                Claims Align Solutions – Hassle-Free Prior Authorization
                Services for Providers
              </h1>
              <p className="text-lg mb-6 max-w-lg">
                Eliminate delays in patient care with our efficient and accurate
                prior authorization services customized for every specialty.
              </p>
              <button className="bg-white text-[#362d7e] px-6 py-3 rounded-full font-semibold hover:bg-[#cad1f6] transition cursor-pointer">
                Get Prior Auth Help
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
            Seamless Prior Authorization by Claims Align Solutions
          </h2>
          <p className="mb-4">
            <strong>Claims Align Solutions</strong> streamlines the
            authorization process so your practice can focus on care, not
            paperwork.
          </p>
          <p className="mb-4">
            We handle document gathering, submission, tracking, and appeal
            management with precision and speed.
          </p>
          <p className="mb-6">
            Free your staff from the burden of complex payer processes.
          </p>
        </section>

        {/* Why Us Section */}
        <section className="max-w-7xl mx-auto mb-20">
          <h2 className="text-3xl font-medium text-[#362d7e] mb-6 text-center">
            Why Choose Claims Align Solutions for Prior Authorization?
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
                    Expert Prior Auth Team
                  </h3>
                  <p className="text-gray-700 group-hover:text-white transition-all duration-300">
                    Trained in all payer rules, our team handles the entire
                    authorization process for every patient and specialty.
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
                    Speed & Accuracy
                  </h3>
                  <p className="text-gray-700 group-hover:text-white transition-all duration-300">
                    We ensure timely submissions with accurate coding and
                    documentation to reduce denials.
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
                    Lower Operational Burden
                  </h3>
                  <p className="text-gray-700 group-hover:text-white transition-all duration-300">
                    Let your staff focus on patients while we handle payer
                    communications and auth workflows.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="max-w-7xl mx-auto px-4 mb-10 flex flex-col items-center">
          <p className="text-sm font-medium text-center text-[#362d7e] mb-2 uppercase tracking-wide">
            Our Authorization Solutions
          </p>
          <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-[#362d7e] w-4/6 text-center">
            Why Providers Rely on Claims Align Solutions for Prior Authorization
          </h2>
          <p className="text-center max-w-3xl mx-auto mb-12 text-gray-700">
            We simplify the most time-consuming part of your revenue cycle—prior
            auth. Our experts ensure speed, accuracy, and payer compliance.
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
            Want Faster Approvals & Fewer Denials?
          </h2>
          <p className="mb-6 max-w-2xl mx-auto">
            Book a free consultation with our prior authorization experts and
            take the stress off your team today.
          </p>
          <a
            href="/book-appointment"
            className="inline-block bg-white text-[#362d7e] font-semibold px-6 py-3 rounded-md hover:bg-gray-200 transition duration-300"
          >
            Book Your Free Authorization Consultation →
          </a>
        </section>
      </main>
    </>
  );
}
