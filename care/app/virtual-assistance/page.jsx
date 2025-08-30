"use client";

import Image from "next/image";
import virtualAssistImage from "../Images/drhero.png"; // Replace with actual VA-related image if needed
import { FaUserMd, FaFileInvoiceDollar, FaChartLine } from "react-icons/fa";
import { useState } from "react";

const features = [
  {
    title: "Administrative Task Management",
    color: "bg-[#362d7e]",
    textColor: "text-white",
    points: [
      "Calendar & appointment scheduling",
      "Email and inbox management",
      "Patient intake and coordination",
      "Transcription and documentation support",
    ],
  },
  {
    title: "EHR & Medical Software Support",
    color: "bg-[#7ec0ee]",
    textColor: "text-[#1d1d1d]",
    points: [
      "Experience with leading EHR systems",
      "Chart updates and documentation entry",
      "Assistance with patient portals",
      "Data entry and record organization",
    ],
  },
  {
    title: "Insurance & Claims Assistance",
    color: "bg-[#7ec0ee]",
    textColor: "text-[#1d1d1d]",
    points: [
      "Eligibility checks and pre-authorizations",
      "Claim follow-ups and status checks",
      "Support with billing inquiries",
      "Improved claims tracking workflows",
    ],
  },
  {
    title: "Virtual Receptionist Services",
    color: "bg-[#362d7e]",
    textColor: "text-white",
    points: [
      "Phone call handling and voicemail",
      "Appointment reminders & confirmations",
      "Professional patient communication",
    ],
  },
  {
    title: "Back Office Support",
    color: "bg-[#362d7e]",
    textColor: "text-white",
    points: [
      "Document scanning and uploads",
      "Handling faxes and forms",
      "Custom admin tasks as per your workflow",
      "Reliable remote team availability",
    ],
  },
  {
    title: "Specialty-Specific Assistance",
    color: "bg-[#7ec0ee]",
    textColor: "text-[#1d1d1d]",
    points: [
      "Tailored virtual support for each specialty",
      "Familiarity with specialty-specific workflows",
      "HIPAA-compliant communication",
      "Flexible availability across time zones",
    ],
  },
];

export default function VirtualAssistancePage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
  });

  return (
    <>
      <main className="bg-[#F8F8F8] text-[#333] py-12">
        {/* Hero Section */}
        <section className="relative bg-[#110f3e] text-white mb-20 bg-[url('./images/assistance.jpg')] bg-cover bg-center bg-no-repeat">
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-[#110f3e]/85 z-0" />

          {/* Main Content */}
          <div className="relative z-10 max-w-7xl mx-auto px-6 py-16 flex flex-col md:flex-row items-center gap-10">
            <div className="flex-1">
              <h1 className="text-3xl md:text-4xl font-medium leading-tight mb-6 max-w-3xl">
                CareBridge MDs – Trusted Virtual Assistance for Healthcare
                Providers
              </h1>
              <p className="text-lg mb-6 max-w-lg">
                Partner with CareBridge MDs for reliable, HIPAA-compliant
                virtual assistants who improve efficiency while reducing
                administrative burden.
              </p>
              <button className="bg-white text-[#362d7e] px-6 py-3 rounded-full font-semibold hover:bg-[#cad1f6] transition cursor-pointer">
                Get Virtual Assistant Support
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
            End-to-End Virtual Assistant Support by CareBridge MDs
          </h2>
          <p className="mb-4">
            <strong>CareBridge MDs</strong> provides professional virtual
            assistant services tailored to your medical practice’s
            administrative needs.
          </p>
          <p className="mb-4">
            Our assistants are HIPAA-trained and experienced in handling daily
            back-office tasks, ensuring efficiency and compliance.
          </p>
          <p className="mb-6">
            Focus on patient care while we handle the rest virtually.
          </p>
        </section>

        {/* Why Us Section */}
        <section className="max-w-7xl mx-auto mb-20">
          <h2 className="text-3xl font-medium text-[#362d7e] mb-6 text-center">
            Why Choose CareBridge MDs for Virtual Assistance?
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
                    Trained Healthcare VAs
                  </h3>
                  <p className="text-gray-700 group-hover:text-white transition-all duration-300">
                    Our virtual assistants are trained in medical workflows,
                    ensuring smooth integration into your team.
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
                    Efficient Operations
                  </h3>
                  <p className="text-gray-700 group-hover:text-white transition-all duration-300">
                    Reduce admin workload and boost productivity with seamless
                    VA support.
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
                    Cost-Effective Solutions
                  </h3>
                  <p className="text-gray-700 group-hover:text-white transition-all duration-300">
                    Our virtual assistant plans are scalable, affordable, and
                    deliver measurable ROI.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="max-w-7xl mx-auto px-4 mb-10 flex flex-col items-center">
          <p className="text-sm font-medium text-center text-[#362d7e] mb-2 uppercase tracking-wide">
            Our Virtual Assistant Services
          </p>
          <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-[#362d7e] w-4/6 text-center">
            Why Healthcare Providers Trust CareBridge MDs for Virtual Support
          </h2>
          <p className="text-center max-w-3xl mx-auto mb-12 text-gray-700">
            We deliver expert virtual assistant services that reduce your admin
            workload and help you scale your practice with ease and efficiency.
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
            Ready to Add a Virtual Assistant to Your Team?
          </h2>
          <p className="mb-6 max-w-2xl mx-auto">
            Book a free consultation to explore how our virtual assistants can
            improve your practice’s efficiency and reduce operational costs.
          </p>
          <a
            href="/book-appointment"
            className="inline-block bg-white text-[#362d7e] font-semibold px-6 py-3 rounded-md hover:bg-gray-200 transition duration-300"
          >
            Book Your Free VA Consultation →
          </a>
        </section>
      </main>
    </>
  );
}
