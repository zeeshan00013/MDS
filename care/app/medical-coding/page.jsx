"use client";

import Image from "next/image";
import codingImage from "../Images/drhero.png"; // You can update this to a relevant coding image
import { FaUserMd, FaFileInvoiceDollar, FaChartLine } from "react-icons/fa";
import { useState } from "react";

const features = [
  {
    title: "Accurate Code Assignment",
    color: "bg-[#362d7e]",
    textColor: "text-white",
    points: [
      "Precise CPT, ICD-10, and HCPCS coding",
      "Minimizing claim denials through clean coding",
      "On-demand coding audits for quality control",
      "Ensuring complete documentation compliance",
    ],
  },
  {
    title: "Certified Coding Specialists",
    color: "bg-[#7ec0ee]",
    textColor: "text-[#1d1d1d]",
    points: [
      "AHIMA and AAPC certified coders",
      "Expertise across all medical specialties",
      "Ongoing training on payer updates",
      "In-depth knowledge of billing guidelines",
    ],
  },
  {
    title: "Code Audits & Quality Checks",
    color: "bg-[#7ec0ee]",
    textColor: "text-[#1d1d1d]",
    points: [
      "Regular internal audits",
      "Audit trails for every code",
      "Benchmarking with national standards",
      "Documentation improvement suggestions",
    ],
  },
  {
    title: "Seamless EHR Integration",
    color: "bg-[#362d7e]",
    textColor: "text-white",
    points: [
      "Support for top EHR systems",
      "Real-time communication with providers",
      "Error-free code submission via integrated tools",
    ],
  },
  {
    title: "Maximizing Reimbursement",
    color: "bg-[#362d7e]",
    textColor: "text-white",
    points: [
      "Upcoding and downcoding prevention",
      "Identifying underused reimbursable codes",
      "Appealing coding-related denials",
      "Documentation improvement consulting",
    ],
  },
  {
    title: "Specialty-Focused Coding",
    color: "bg-[#7ec0ee]",
    textColor: "text-[#1d1d1d]",
    points: [
      "Tailored coding for specialties like cardiology, orthopedics, etc.",
      "Accurate procedural coding",
      "Up-to-date with coding trends and revisions",
      "Helping practices adapt to regulatory changes",
    ],
  },
];

export default function MedicalCodingPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
  });

  return (
    <>
      <main className=" text-[#333] py-12">
        {/* Hero Section */}
        <section className="relative bg-[#110f3e] text-white mb-20 bg-[url('./images/coding.jpg')] bg-cover bg-center bg-no-repeat">
          {/* Overlay */}
          <div className="absolute inset-0 bg-[#110f3e]/85 z-0" />

          {/* Main Content */}
          <div className="relative z-10 max-w-7xl mx-auto px-6 py-16 flex flex-col md:flex-row items-center gap-10">
            <div className="flex-1">
              <h1 className="text-3xl md:text-4xl font-medium leading-tight mb-6 max-w-3xl">
                CareBridge MDs – Certified Medical Coding Services Tailored to
                Perfection
              </h1>
              <p className="text-lg mb-6 max-w-lg">
                Partner with CareBridge MDs to ensure accurate medical coding
                that drives revenue and compliance across all specialties.
              </p>
              <button className="bg-white text-[#362d7e] px-6 py-3 rounded-full font-semibold hover:bg-[#cad1f6] transition cursor-pointer">
                Get Coding Consultation
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
            Professional Medical Coding Services by CareBridge MDs
          </h2>
          <p className="mb-4">
            <strong>CareBridge MDs</strong> provides expert coding services to
            ensure providers meet payer and legal documentation requirements
            while optimizing revenue capture.
          </p>
          <p className="mb-4">
            Our coders work across all EHRs and are trained to handle complex
            specialties with precision, eliminating coding errors and reducing
            denials.
          </p>
          <p className="mb-6">
            Let us handle your coding so you can focus on patient care.
          </p>
        </section>

        {/* Why Us Section */}
        <section className="max-w-7xl mx-auto mb-20">
          <h2 className="text-3xl font-medium text-[#362d7e] mb-6 text-center">
            Why Choose CareBridge MDs for Medical Coding?
          </h2>
          <div className="flex justify-center">
            <div className="grid md:grid-cols-3 gap-8 text-gray-800 w-full max-w-6xl mt-5 px-2">
              {/* Example Features */}
              <div className="flex flex-col p-4 items-start gap-4 border-2 border-[#362d7e] rounded-2xl hover:bg-[#362d7e] group transition-all duration-300">
                <FaUserMd
                  className="text-[#362d7e] group-hover:text-white transition-all duration-300"
                  size={24}
                />
                <div>
                  <h3 className="text-xl font-semibold mb-1 group-hover:text-white transition-all duration-300">
                    Certified Coders
                  </h3>
                  <p className="text-gray-700 group-hover:text-white transition-all duration-300">
                    All our coders are AAPC or AHIMA certified and undergo
                    constant training to stay updated on coding regulations.
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
                    Audit Ready Processes
                  </h3>
                  <p className="text-gray-700 group-hover:text-white transition-all duration-300">
                    Our coding ensures compliance and audit readiness with full
                    documentation support and clean reporting.
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
                    Improved Reimbursements
                  </h3>
                  <p className="text-gray-700 group-hover:text-white transition-all duration-300">
                    Our accurate coding minimizes denials and improves your
                    revenue cycle performance.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="max-w-7xl mx-auto px-4 mb-10 flex flex-col items-center">
          <p className="text-sm font-medium text-center text-[#362d7e] mb-2 uppercase tracking-wide">
            Our Coding Solutions
          </p>
          <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-[#362d7e] w-4/6 text-center">
            Why Healthcare Providers Trust CareBridge MDs for Medical Coding
          </h2>
          <p className="text-center max-w-3xl mx-auto mb-12 text-gray-700">
            We go beyond standard coding services. Our team works closely with
            physicians to understand documentation patterns and translate them
            into clean, claim-worthy codes.
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
            Ready to Streamline Your Medical Coding?
          </h2>
          <p className="mb-6 max-w-2xl mx-auto">
            Book a free consultation with CareBridge MDs’ coding experts to get
            cleaner claims, faster payments, and reduced audit risks.
          </p>
          <a
            href="/book-appointment"
            className="inline-block bg-white text-[#362d7e] font-semibold px-6 py-3 rounded-md hover:bg-gray-200 transition duration-300"
          >
            Book Your Free Coding Consultation →
          </a>
        </section>
      </main>
    </>
  );
}
