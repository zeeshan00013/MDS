// app/privacy/page.jsx
"use client";
import React from "react";

export default function PrivacyPolicy() {
  return (
    <main className="bg-white text-[#1A1A1A] px-6 md:px-20 py-16 leading-relaxed tracking-tight">
      <section className="max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-[#21204A]">
          Privacy Policy
        </h1>

        <p className="text-base md:text-lg text-gray-700 mb-6">
          At <strong>Revenue Align Solutions</strong>, we are committed to
          safeguarding your privacy. This policy explains how we collect,
          manage, and protect any personal or medical data you share with us, in
          full compliance with HIPAA and other regulatory standards.
        </p>

        <h2 className="text-2xl font-semibold text-[#21204A] mt-10 mb-4">
          1. Data We Gather
        </h2>
        <ul className="list-disc pl-5 text-gray-700 space-y-2">
          <li>Your contact details (name, email address, phone number)</li>
          <li>
            Medical billing details including Protected Health Information (PHI)
          </li>
          <li>Insurance-related documentation</li>
          <li>Site usage data, cookies, and traffic analytics</li>
        </ul>

        <h2 className="text-2xl font-semibold text-[#21204A] mt-10 mb-4">
          2. Purpose of Data Collection
        </h2>
        <ul className="list-disc pl-5 text-gray-700 space-y-2">
          <li>To deliver effective billing and revenue cycle services</li>
          <li>
            To stay in touch for support and service-related communication
          </li>
          <li>To comply with legal and regulatory obligations</li>
          <li>To improve website performance and security</li>
        </ul>

        <h2 className="text-2xl font-semibold text-[#21204A] mt-10 mb-4">
          3. Keeping Your Data Safe
        </h2>
        <p className="text-gray-700 mb-4">
          We use advanced security systems and strict access protocols to
          protect your personal and health information from unauthorized access
          or misuse. All digital records are encrypted and handled with care.
        </p>

        <h2 className="text-2xl font-semibold text-[#21204A] mt-10 mb-4">
          4. When We Share Information
        </h2>
        <p className="text-gray-700 mb-4">
          We do not sell or rent your personal data. However, we may share
          necessary information with:
        </p>
        <ul className="list-disc pl-5 text-gray-700 space-y-2">
          <li>
            Healthcare professionals directly involved in your billing process
          </li>
          <li>Insurance providers for claims and verification</li>
          <li>Government agencies or courts when legally required</li>
          <li>Third-party service providers under confidentiality contracts</li>
        </ul>

        <h2 className="text-2xl font-semibold text-[#21204A] mt-10 mb-4">
          5. Your Privacy Rights
        </h2>
        <ul className="list-disc pl-5 text-gray-700 space-y-2">
          <li>Request access to your stored information</li>
          <li>Ask for corrections to inaccurate details</li>
          <li>Request data removal under applicable laws</li>
        </ul>

        <h2 className="text-2xl font-semibold text-[#21204A] mt-10 mb-4">
          6. Cookies & Website Analytics
        </h2>
        <p className="text-gray-700 mb-4">
          We use cookies and analytics tools like Google Analytics to better
          understand how visitors interact with our website. You can control
          cookie usage through your browser settings.
        </p>

        <h2 className="text-2xl font-semibold text-[#21204A] mt-10 mb-4">
          7. Policy Updates
        </h2>
        <p className="text-gray-700 mb-4">
          We may revise this policy periodically. Any changes will be posted
          here with a new effective date. Please review this page regularly to
          stay informed.
        </p>

        <h2 className="text-2xl font-semibold text-[#21204A] mt-10 mb-4">
          8. Contact Information
        </h2>
        <p className="text-gray-700">
          If you have questions or concerns regarding this Privacy Policy,
          please reach out:
        </p>
        <p className="mt-2 text-gray-700 font-medium">
          Email: info@revenuealignsolutions.com
        </p>
        <p className="text-gray-700 font-medium">Phone: xxx0202020</p>
      </section>
    </main>
  );
}
