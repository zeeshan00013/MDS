"use client";

import Image from "next/image";
import credentialingImage from "../Images/drhero.png"; // Update if you have a more relevant image
import { FaUserMd, FaFileInvoiceDollar, FaChartLine } from "react-icons/fa";
import { useState } from "react";

const features = [
  {
    title: "Comprehensive Provider Enrollment",
    color: "bg-[#362d7e]",
    textColor: "text-white",
    points: [
      "Credentialing with Medicare, Medicaid, and commercial payers",
      "Accurate and complete application submission",
      "Follow-up with payers to expedite approval",
      "Revalidation and maintenance of credentials",
    ],
  },
  {
    title: "CAQH & NPI Management",
    color: "bg-[#7ec0ee]",
    textColor: "text-[#1d1d1d]",
    points: [
      "Assistance with CAQH profile setup and updates",
      "NPI registration and maintenance",
      "Profile optimization for faster approvals",
      "Regular monitoring to avoid expirations",
    ],
  },
  {
    title: "Hospital Privileging Support",
    color: "bg-[#7ec0ee]",
    textColor: "text-[#1d1d1d]",
    points: [
      "Coordination with facilities for privileging",
      "Accurate document collection",
      "Support through the entire privileging process",
      "Timely renewals to prevent lapses",
    ],
  },
  {
    title: "Credentialing Audit Assistance",
    color: "bg-[#362d7e]",
    textColor: "text-white",
    points: [
      "Support during payer audits",
      "Compliance with credentialing requirements",
      "Gap identification and resolution",
    ],
  },
  {
    title: "Licensure & Certification Tracking",
    color: "bg-[#362d7e]",
    textColor: "text-white",
    points: [
      "Real-time tracking of license expirations",
      "Renewal alerts and reminders",
      "State and DEA license application support",
      "Maintenance of required certifications",
    ],
  },
  {
    title: "Specialty-Focused Credentialing",
    color: "bg-[#7ec0ee]",
    textColor: "text-[#1d1d1d]",
    points: [
      "Credentialing for all specialties and provider types",
      "Tailored workflows based on specialty needs",
      "Understanding payer-specific requirements",
      "Minimizing delays through proactive management",
    ],
  },
];

export default function MedicalCredentialingPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
  });

  return (
    <>
      <main className="bg-[#F8F8F8] text-[#333] py-12">
        {/* Hero Section */}
        <section className="relative bg-[#110f3e] text-white mb-20">
          <div className="max-w-7xl mx-auto px-6 py-16 flex flex-col md:flex-row items-center gap-10">
            <div className="flex-1 z-10">
              <h1 className="text-3xl md:text-4xl font-medium leading-tight mb-6 max-w-3xl">
                CareBridge MDs – Medical Credentialing Services Tailored for
                Provider Success
              </h1>
              <p className="text-lg mb-6 max-w-lg">
                Partner with CareBridge MDs to streamline credentialing, improve
                payer relationships, and reduce enrollment delays.
              </p>
              <button className="bg-[#ffffff] text-[#362d7e] px-6 py-3 rounded-full font-semibold hover:bg-[#cad1f6] transition cursor-pointer">
                Get Credentialing Consultation
              </button>
            </div>
          </div>

          {/* Floating Form */}
          <div className="absolute w-full bottom-[-3rem] px-4">
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
            End-to-End Medical Credentialing by CareBridge MDs
          </h2>
          <p className="mb-4">
            <strong>CareBridge MDs</strong> handles credentialing from start to
            finish, helping providers join networks and maintain compliance
            effortlessly.
          </p>
          <p className="mb-4">
            We manage CAQH, NPI, licensing, and payer enrollment across all
            specialties, reducing paperwork and payer delays.
          </p>
          <p className="mb-6">
            Let us take care of credentialing while you focus on patient care.
          </p>
        </section>

        {/* Why Us Section */}
        <section className="max-w-7xl mx-auto mb-20">
          <h2 className="text-3xl font-medium text-[#362d7e] mb-6 text-center">
            Why Choose CareBridge MDs for Credentialing?
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
                    Experienced Specialists
                  </h3>
                  <p className="text-gray-700 group-hover:text-white transition-all duration-300">
                    Our credentialing experts understand payer rules and
                    navigate complex enrollment processes efficiently.
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
                    Transparent Process
                  </h3>
                  <p className="text-gray-700 group-hover:text-white transition-all duration-300">
                    Track credentialing status in real-time with our reporting
                    and audit-ready documentation.
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
                    Faster Network Participation
                  </h3>
                  <p className="text-gray-700 group-hover:text-white transition-all duration-300">
                    We reduce turnaround times and help you join payer networks
                    quickly and efficiently.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="max-w-7xl mx-auto px-4 mb-10 flex flex-col items-center">
          <p className="text-sm font-medium text-center text-[#362d7e] mb-2 uppercase tracking-wide">
            Our Credentialing Solutions
          </p>
          <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-[#362d7e] w-4/6 text-center">
            Why Healthcare Providers Trust CareBridge MDs for Credentialing
          </h2>
          <p className="text-center max-w-3xl mx-auto mb-12 text-gray-700">
            We provide complete, hassle-free credentialing services with
            continuous tracking and compliance, ensuring you’re always ready for
            payer participation.
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
            Ready to Simplify Your Credentialing Process?
          </h2>
          <p className="mb-6 max-w-2xl mx-auto">
            Book a free consultation with CareBridge MDs to ensure fast,
            accurate, and hassle-free credentialing for your practice.
          </p>
          <a
            href="/book-appointment"
            className="inline-block bg-white text-[#362d7e] font-semibold px-6 py-3 rounded-md hover:bg-gray-200 transition duration-300"
          >
            Book Your Free Credentialing Consultation →
          </a>
        </section>
      </main>
    </>
  );
}
