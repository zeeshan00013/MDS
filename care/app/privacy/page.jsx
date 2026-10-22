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

        <p className="text-base md:text-lg text-gray-700 mb-8">
          At <strong>Revenue Align Solutions</strong>, your privacy is important
          to us. This Privacy Policy outlines how we collect, use, store, and
          protect your personal and health-related data in accordance with
          industry standards, including HIPAA compliance guidelines.
        </p>

        <h2 className="text-2xl font-semibold text-[#21204A] mt-10 mb-4">
          1. Information We Collect
        </h2>
        <ul className="list-disc pl-5 text-gray-700 space-y-2">
          <li>Personal identification information (Name, Email, Phone Number)</li>
          <li>
            Protected Health Information (PHI) necessary for billing services
          </li>
          <li>Insurance and provider information</li>
          <li>Usage data from our website (analytics, cookies, etc.)</li>
        </ul>

        <h2 className="text-2xl font-semibold text-[#21204A] mt-10 mb-4">
          2. How We Use Your Information
        </h2>
        <ul className="list-disc pl-5 text-gray-700 space-y-2">
          <li>To provide accurate medical billing and RCM services</li>
          <li>To contact you for administrative and support purposes</li>
          <li>To ensure compliance with federal and state regulations</li>
          <li>To enhance the functionality and security of our website</li>
        </ul>

        <h2 className="text-2xl font-semibold text-[#21204A] mt-10 mb-4">
          3. Data Protection & Security
        </h2>
        <p className="text-gray-700 mb-4">
          We implement robust physical, technical, and administrative safeguards
          to protect your data from unauthorized access, disclosure, or misuse.
          All electronic PHI is encrypted and stored securely.
        </p>

        <h2 className="text-2xl font-semibold text-[#21204A] mt-10 mb-4">
          4. Sharing Your Information
        </h2>
        <p className="text-gray-700 mb-4">
          We never sell or rent your personal or health information. Data may be
          shared with:
        </p>
        <ul className="list-disc pl-5 text-gray-700 space-y-2">
          <li>Authorized healthcare providers</li>
          <li>Insurance companies (for claims processing)</li>
          <li>Government or legal authorities when required by law</li>
          <li>Our trusted third-party vendors under strict confidentiality</li>
        </ul>

        <h2 className="text-2xl font-semibold text-[#21204A] mt-10 mb-4">
          5. Your Rights
        </h2>
        <ul className="list-disc pl-5 text-gray-700 space-y-2">
          <li>Right to access and request a copy of your data</li>
          <li>Right to correct inaccurate or outdated information</li>
          <li>Right to request data deletion under certain conditions</li>
        </ul>

        <h2 className="text-2xl font-semibold text-[#21204A] mt-10 mb-4">
          6. Cookies & Analytics
        </h2>
        <p className="text-gray-700 mb-4">
          Our site uses cookies and analytics tools (like Google Analytics) to
          understand visitor behavior and improve performance. You may disable
          cookies in your browser settings.
        </p>

        <h2 className="text-2xl font-semibold text-[#21204A] mt-10 mb-4">
          7. Updates to This Policy
        </h2>
        <p className="text-gray-700 mb-4">
          We may update this policy from time to time. Updates will be posted
          here with a revised effective date. We encourage you to review this
          page regularly.
        </p>

        <h2 className="text-2xl font-semibold text-[#21204A] mt-10 mb-4">
          8. Contact Us
        </h2>
        <p className="text-gray-700">
          If you have any questions regarding this Privacy Policy or how we
          handle your information, please contact us at:
        </p>
        <p className="mt-2 text-gray-700 font-medium">
          Email: info@revenuealignsolutions.com
        </p>
        <p className="text-gray-700 font-medium">Phone: (512) 520-2375
</p>
      </section>
    </main>
  );
}