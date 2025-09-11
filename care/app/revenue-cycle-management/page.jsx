"use client";

import Image from "next/image";
import rcmImage from "../Images/drhero.png"; // Replace with relevant image if needed
import { FaUserMd, FaFileInvoiceDollar, FaChartLine } from "react-icons/fa";
import { useState } from "react";

const features = [
  {
    title: "End-to-End Revenue Cycle Support",
    color: "bg-[#362d7e]",
    textColor: "text-white",
    points: [
      "Complete revenue management from patient registration to payment",
      "Streamlined workflows for faster reimbursements",
      "Reduction in claim denials and payment delays",
      "Real-time performance tracking",
    ],
  },
  {
    title: "Claims Management & Scrubbing",
    color: "bg-[#7ec0ee]",
    textColor: "text-[#1d1d1d]",
    points: [
      "Clean claim submission to avoid rejections",
      "Accurate charge entry and coding validation",
      "Automatic error detection and correction",
      "Claim status tracking across all payers",
    ],
  },
  {
    title: "Payment Posting & Reconciliation",
    color: "bg-[#7ec0ee]",
    textColor: "text-[#1d1d1d]",
    points: [
      "ERA/EOB reconciliation and payment entry",
      "Unposted payment identification",
      "Posting adjustments and denials",
      "Reporting for cash flow visibility",
    ],
  },
  {
    title: "Accounts Receivable (A/R) Follow-Up",
    color: "bg-[#362d7e]",
    textColor: "text-white",
    points: [
      "Active follow-up on unpaid claims",
      "Reduction in aging A/R balances",
      "Appeals for denied and underpaid claims",
    ],
  },
  {
    title: "Patient Billing & Support",
    color: "bg-[#362d7e]",
    textColor: "text-white",
    points: [
      "Timely patient statements and invoicing",
      "Clear, understandable billing communication",
      "Support for patient queries and payment plans",
      "Improved patient experience with billing transparency",
    ],
  },
  {
    title: "Reporting & Analytics",
    color: "bg-[#7ec0ee]",
    textColor: "text-[#1d1d1d]",
    points: [
      "Custom KPI dashboards and analytics",
      "Detailed reports on collections and denials",
      "Insights for revenue optimization",
      "Monthly and quarterly performance reviews",
    ],
  },
];

export default function RevenueCycleManagementPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
  });

  return (
    <>
      <main className="bg-[#F8F8F8] text-[#333] py-12">
        {/* Hero Section */}
        <section className="relative bg-[#110f3e] text-white mb-20 bg-[url('/rcm.jpg')] bg-cover bg-center bg-no-repeat">
          {/* Overlay */}
          <div className="absolute inset-0 bg-[#110f3e]/85 z-0" />

          {/* Main Content */}
          <div className="relative z-10 max-w-7xl mx-auto px-6 py-16 flex flex-col md:flex-row items-center gap-10">
            <div className="flex-1">
              <h1 className="text-3xl md:text-4xl font-medium leading-tight mb-6 max-w-3xl">
                Revenue Align Solutions – Revenue Cycle Management Solutions for
                Maximum Reimbursement
              </h1>
              <p className="text-lg mb-6 max-w-lg">
                Optimize your practice’s cash flow with our full-service RCM
                solutions—from claims to collections.
              </p>
              <button className="bg-white text-[#362d7e] px-6 py-3 rounded-full font-semibold hover:bg-[#cad1f6] transition cursor-pointer">
                Get RCM Consultation
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
            Complete Revenue Cycle Management by Revenue Align Solutions
          </h2>
          <p className="mb-4">
            <strong>Revenue Align Solutions</strong> handles the entire revenue
            cycle—from patient registration to payment posting—ensuring faster
            collections and cleaner claims.
          </p>
          <p className="mb-4">
            Our goal is to help you improve profitability and compliance while
            freeing your team from billing complexities.
          </p>
          <p className="mb-6">
            Focus on patient care. Let us handle the revenue.
          </p>
        </section>

        {/* Why Us Section */}
        <section className="max-w-7xl mx-auto mb-20">
          <h2 className="text-3xl font-medium text-[#362d7e] mb-6 text-center">
            Why Choose Claims Align Solutions for RCM?
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
                    Expert Billing Teams
                  </h3>
                  <p className="text-gray-700 group-hover:text-white transition-all duration-300">
                    Our experienced professionals ensure billing accuracy,
                    timely claims, and better collections.
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
                    Higher Collections
                  </h3>
                  <p className="text-gray-700 group-hover:text-white transition-all duration-300">
                    Reduce denials and boost revenue with a proven strategy
                    customized for your specialty.
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
                    Transparent Reporting
                  </h3>
                  <p className="text-gray-700 group-hover:text-white transition-all duration-300">
                    Gain visibility into every dollar with detailed reports, KPI
                    dashboards, and performance metrics.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="max-w-7xl mx-auto px-4 mb-10 flex flex-col items-center">
          <p className="text-sm font-medium text-center text-[#362d7e] mb-2 uppercase tracking-wide">
            Our RCM Solutions
          </p>
          <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-[#362d7e] w-4/6 text-center">
            Why Practices Trust Revenue Align Solutions with Their Revenue Cycle
          </h2>
          <p className="text-center max-w-3xl mx-auto mb-12 text-gray-700">
            We bring expertise, transparency, and efficiency to every part of
            your revenue cycle to maximize your income and reduce administrative
            burden.
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
            Want to Improve Collections and Cash Flow?
          </h2>
          <p className="mb-6 max-w-2xl mx-auto">
            Book a free consultation with Claims Align Solutions to unlock the
            full revenue potential of your medical practice.
          </p>
          <a
            href="/book-appointment"
            className="inline-block bg-white text-[#362d7e] font-semibold px-6 py-3 rounded-md hover:bg-gray-200 transition duration-300"
          >
            Book Your Free RCM Consultation →
          </a>
        </section>
      </main>
    </>
  );
}
