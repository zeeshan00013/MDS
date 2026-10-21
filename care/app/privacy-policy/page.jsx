import PageHero from "../component/PageHero";

export const metadata = {
  title: "Privacy Policy",
  description:
    "Learn how Revenue Align Solutions collects, uses, stores, and protects your personal and health-related data.",
  alternates: { canonical: "/privacy-policy" },
};

const sections = [
  {
    title: "1. Information We Collect",
    content: (
      <ul className="mt-3 list-disc space-y-2 pl-5 text-gray-600">
        <li>Personal identification information (Name, Email Address, Phone Number)</li>
        <li>Protected Health Information (PHI) necessary for medical billing and RCM services</li>
        <li>Insurance and healthcare provider information</li>
        <li>Technical and usage data from our website (analytics, IP address, browser type, cookies)</li>
      </ul>
    ),
  },
  {
    title: "2. How We Use Your Information",
    content: (
      <ul className="mt-3 list-disc space-y-2 pl-5 text-gray-600">
        <li>To provide accurate medical billing, coding, and RCM services</li>
        <li>To contact you for administrative, support, and billing inquiries</li>
        <li>To ensure strict compliance with federal and state regulations, including HIPAA</li>
        <li>To enhance, maintain, and secure website functionality and performance</li>
      </ul>
    ),
  },
  {
    title: "3. Data Protection & Security",
    content: (
      <p className="mt-3 leading-7 text-gray-600">
        We implement robust physical, technical, and administrative safeguards designed to protect your data from unauthorized access, disclosure, or misuse. All electronic Protected Health Information (ePHI) is encrypted in transit and at rest, and stored securely in accordance with HIPAA compliance standards.
      </p>
    ),
  },
  {
    title: "4. Sharing Your Information",
    content: (
      <>
        <p className="mt-3 leading-7 text-gray-600">
          We never sell, rent, or trade your personal or health information. Data may only be shared under strict confidentiality with:
        </p>
        <ul className="mt-2 list-disc space-y-2 pl-5 text-gray-600">
          <li>Authorized healthcare providers and practice managers</li>
          <li>Insurance carriers for claims processing and reimbursement</li>
          <li>Trusted third-party vendors operating under signed Business Associate Agreements (BAAs)</li>
          <li>Government or legal entities when required by applicable law</li>
        </ul>
      </>
    ),
  },
  {
    title: "5. Your Rights",
    content: (
      <ul className="mt-3 list-disc space-y-2 pl-5 text-gray-600">
        <li>Right to access and request a copy of your stored data</li>
        <li>Right to request correction of inaccurate or outdated information</li>
        <li>Right to request data deletion under applicable legal conditions</li>
        <li>Right to opt out of non-essential marketing communications</li>
      </ul>
    ),
  },
  {
    title: "6. Cookies & Analytics",
    content: (
      <p className="mt-3 leading-7 text-gray-600">
        Our website uses necessary cookies and analytics tools to understand visitor interactions, track performance, and improve navigation. You can manage or disable cookies via your browser settings, though doing so may affect certain website features.
      </p>
    ),
  },
  {
    title: "7. Policy Updates",
    content: (
      <p className="mt-3 leading-7 text-gray-600">
        We may update this Privacy Policy periodically to reflect changes in legal, regulatory, or operational practices. Updates will be posted on this page with a revised effective date.
      </p>
    ),
  },
];

export default function PrivacyPolicyPage() {
  return (
    <main className="bg-white text-gray-800">
      <PageHero
        eyebrow="Your privacy"
        title="Privacy Policy"
        description="At Revenue Align Solutions, your privacy is important to us. This policy outlines how we collect, use, store, and protect your personal and health-related data."
      />
      <article className="mx-auto max-w-4xl px-6 py-16 md:py-20">
        <p className="mb-4 text-sm font-medium text-gray-500">
          Effective date: October 20, 2026
        </p>
        <p className="mb-10 leading-7 text-gray-600">
          Revenue Align Solutions USA LLC respects your privacy. This Privacy Policy applies to all personal identification and health-related data collected through this website and our related business operations in accordance with industry standards, including HIPAA compliance guidelines.
        </p>

        <div className="space-y-10">
          {sections.map((section) => (
            <section key={section.title}>
              <h2 className="text-2xl font-semibold text-[#110f3e]">
                {section.title}
              </h2>
              {section.content}
            </section>
          ))}

          <section>
            <h2 className="text-2xl font-semibold text-[#110f3e]">
              8. Contact Us
            </h2>
            <p className="mt-3 leading-7 text-gray-600">
              If you have any questions or requests regarding this Privacy Policy or how we handle your data, please contact us:
            </p>
            <div className="mt-3 space-y-1 text-gray-600">
              <p>
                <strong>Email:</strong>{" "}
                <a
                  className="font-medium text-[#3d2d7d] hover:underline"
                  href="mailto:info@revenuealignsolutions.com"
                >
                  info@revenuealignsolutions.com
                </a>
              </p>
              <p>
                <strong>Address:</strong> Revenue Align Solutions USA LLC, 13740 N Highway 183 Ste L2 #456, Austin, TX 78750, USA
              </p>
            </div>
          </section>
        </div>
      </article>
    </main>
  );
}