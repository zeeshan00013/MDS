"use client";

import Image from "next/image";
import marketingImage from "../Images/drhero.png"; // Replace with a digital marketing image if available
import { FaUserMd, FaFileInvoiceDollar, FaChartLine } from "react-icons/fa";
import { useState } from "react";

const features = [
  {
    title: "Healthcare SEO Services",
    color: "bg-[#362d7e]",
    textColor: "text-white",
    points: [
      "Targeted keyword optimization for medical practices",
      "On-page and off-page SEO strategies",
      "Content creation and blog management",
      "Improve local search visibility for clinics",
    ],
  },
  {
    title: "Social Media Marketing",
    color: "bg-[#7ec0ee]",
    textColor: "text-[#1d1d1d]",
    points: [
      "Facebook, Instagram & LinkedIn campaigns",
      "Targeted ad strategies for healthcare audiences",
      "Content scheduling and engagement tracking",
      "Custom graphics and video promotions",
    ],
  },
  {
    title: "Paid Ad Campaigns (PPC)",
    color: "bg-[#7ec0ee]",
    textColor: "text-[#1d1d1d]",
    points: [
      "Google Ads setup & management",
      "Targeted lead generation campaigns",
      "Landing page optimization",
      "Maximize ROI with precise targeting",
    ],
  },
  {
    title: "Website Design & Optimization",
    color: "bg-[#362d7e]",
    textColor: "text-white",
    points: [
      "Mobile-first, fast-loading healthcare websites",
      "SEO-friendly architecture",
      "Conversion-optimized layouts",
    ],
  },
  {
    title: "Email Marketing & Automation",
    color: "bg-[#362d7e]",
    textColor: "text-white",
    points: [
      "Custom patient newsletters",
      "Lead nurturing with automation",
      "Performance tracking & reporting",
      "HIPAA-compliant campaigns",
    ],
  },
  {
    title: "Reputation & Review Management",
    color: "bg-[#7ec0ee]",
    textColor: "text-[#1d1d1d]",
    points: [
      "Monitor and manage patient reviews",
      "Automated review request systems",
      "Google Business Profile optimization",
      "Boost online trust and visibility",
    ],
  },
];

export default function DigitalMarketingPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
  });

  return (
    <>
      <main className="bg-[#F8F8F8] text-[#333] py-12">
        {/* Hero Section */}
        <section className="relative bg-[#110f3e] text-white mb-20 bg-[url('/digital.jpg')] bg-cover bg-center bg-no-repeat">
          {/* Overlay */}
          <div className="absolute inset-0 bg-[#110f3e]/85 z-0" />

          {/* Main Content */}
          <div className="relative z-10 max-w-7xl mx-auto px-6 py-16 flex flex-col md:flex-row items-center gap-10">
            <div className="flex-1">
              <h1 className="text-3xl md:text-4xl font-medium leading-tight mb-6 max-w-3xl">
                Revenue Align Solutions – Digital Marketing Solutions for
                Medical Practices
              </h1>
              <p className="text-lg mb-6 max-w-lg">
                Grow your practice with Claims Align Solutions'
                healthcare-specific digital marketing services, driving patient
                engagement and online visibility.
              </p>
              <button className="bg-white text-[#362d7e] px-6 py-3 rounded-full font-semibold hover:bg-[#cad1f6] transition cursor-pointer">
                Get Digital Marketing Consultation
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
            Targeted Digital Marketing for Healthcare Professionals
          </h2>
          <p className="mb-4">
            <strong>Revenue Align Solutions</strong> provides comprehensive
            digital marketing services designed to grow your patient base,
            enhance online presence, and boost practice revenue.
          </p>
          <p className="mb-4">
            From SEO to social media and paid ads, we help healthcare providers
            connect with their ideal patients effectively.
          </p>
          <p className="mb-6">
            Let us manage your online strategy while you focus on providing
            care.
          </p>
        </section>

        {/* Why Us Section */}
        <section className="max-w-7xl mx-auto mb-20">
          <h2 className="text-3xl font-medium text-[#362d7e] mb-6 text-center">
            Why Choose Revenue Align Solutions for Digital Marketing?
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
                    Healthcare Industry Focus
                  </h3>
                  <p className="text-gray-700 group-hover:text-white transition-all duration-300">
                    We understand medical marketing deeply, helping practices
                    grow while staying compliant with healthcare regulations.
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
                    Data-Driven Strategy
                  </h3>
                  <p className="text-gray-700 group-hover:text-white transition-all duration-300">
                    Every campaign is backed by analytics and continuous
                    performance tracking to ensure maximum ROI.
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
                    Scalable Growth Solutions
                  </h3>
                  <p className="text-gray-700 group-hover:text-white transition-all duration-300">
                    Whether you're a solo practitioner or multi-location clinic,
                    we tailor our solutions to your goals.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="max-w-7xl mx-auto px-4 mb-10 flex flex-col items-center">
          <p className="text-sm font-medium text-center text-[#362d7e] mb-2 uppercase tracking-wide">
            Our Digital Marketing Services
          </p>
          <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-[#362d7e] w-4/6 text-center">
            Why Healthcare Providers Choose Revenue Align Solutions for Online
            Growth
          </h2>
          <p className="text-center max-w-3xl mx-auto mb-12 text-gray-700">
            We craft customized marketing strategies for every medical practice
            to increase visibility, attract new patients, and build long-term
            trust.
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
            Ready to Grow Your Practice Online?
          </h2>
          <p className="mb-6 max-w-2xl mx-auto">
            Book a free consultation with Claims Align Solutions and discover
            how our digital marketing services can transform your online
            presence.
          </p>
          <a
            href="/book-appointment"
            className="inline-block bg-white text-[#362d7e] font-semibold px-6 py-3 rounded-md hover:bg-gray-200 transition duration-300"
          >
            Book Your Free Marketing Consultation →
          </a>
        </section>
      </main>
    </>
  );
}
