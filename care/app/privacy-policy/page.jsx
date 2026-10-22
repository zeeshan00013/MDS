import PageHero from "../component/PageHero";

export const metadata = {
  title: "Privacy Policy",
  description:
    "Learn how Revenue Align Solutions collects, uses, stores, and protects your personal and health-related data.",
  alternates: { canonical: "/privacy-policy" },
};

const sections = [
<<<<<<< HEAD
  ["1. Information we collect", "We may collect information you provide directly, such as your name, email address, phone number, organization, and the content of messages or forms you submit. We may also collect technical information such as browser type, device information, IP address, referring pages, and website activity through cookies or similar technologies."],
  ["2. How we use information", "We use information to respond to inquiries, provide and improve our services, operate and secure the website, communicate with clients and prospective clients, comply with legal obligations, and analyze website performance."],
  ["3. Sensitive health information", "Please do not submit protected health information or other sensitive patient information through general website forms or email unless we have directed you to an approved secure channel. When we process protected health information on behalf of a client, that processing is governed by the applicable service agreement and business associate agreement."],
  ["4. Cookies and analytics", "We may use necessary cookies and analytics technologies to understand website use and improve performance. You can control cookies through your browser settings, although disabling some cookies may affect website functionality."],
  ["5. How we share information", "We do not sell personal information. We may share information with service providers that support our website and business operations, with professional advisers, when required by law, to protect rights or safety, or in connection with a business transaction. Providers are permitted to use information only for the services they perform for us."],
  ["6. Mobile information and SMS consent", "No mobile information will be shared with third parties or affiliates for marketing or promotional purposes. All categories described in this Privacy Policy exclude text messaging originator opt-in data and consent; this information will not be shared with any third parties."],
  ["7. Data security and retention", "We use reasonable administrative, technical, and physical safeguards designed to protect information. No method of transmission or storage is completely secure. We retain information only as long as reasonably necessary for the purposes described here, contractual requirements, and applicable law."],
  ["8. Your choices and rights", "Depending on where you live, you may have rights to request access to, correction of, or deletion of certain personal information, or to object to or restrict certain processing. You may also opt out of marketing communications using the unsubscribe method provided or by contacting us."],
  ["9. Children’s privacy", "This website is intended for business audiences and is not directed to children under 13. We do not knowingly collect personal information from children through the website."],
  ["10. External links", "Links to third-party websites are provided for convenience. Their privacy practices are governed by their own policies, not this Privacy Policy."],
  ["11. Policy updates", "We may revise this Privacy Policy periodically. The effective date above will be updated when changes are posted."],
=======
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
>>>>>>> d302beb35b88906e9acf36822bd21512d92ae744
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
<<<<<<< HEAD
        <p className="mb-4 text-sm font-medium text-gray-500">Effective date: October 22, 2026</p>
        <p className="mb-10 leading-7 text-gray-600">Revenue Align Solutions USA LLC respects your privacy. This policy applies to information collected through this website and our related business communications.</p>
        <div className="space-y-10">
          {sections.map(([title, text]) => <section key={title}><h2 className="text-2xl font-semibold text-[#110f3e]">{title}</h2><p className="mt-3 leading-7 text-gray-600">{text}</p></section>)}
          <section><h2 className="text-2xl font-semibold text-[#110f3e]">12. Contact us</h2><p className="mt-3 leading-7 text-gray-600">For privacy questions or requests, call <a className="font-medium text-[#3d2d7d] hover:underline" href="tel:+15125202375">(512) 520-2375</a>, email <a className="font-medium text-[#3d2d7d] hover:underline" href="mailto:info@revenuealignsolutions.com">info@revenuealignsolutions.com</a>, or write to Revenue Align Solutions USA LLC, 13740 N Highway 183 Ste L2 #456, Austin, TX 78750, USA.</p></section>
=======
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
>>>>>>> d302beb35b88906e9acf36822bd21512d92ae744
        </div>
      </article>
    </main>
  );
}