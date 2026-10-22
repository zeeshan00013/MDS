import PageHero from "../component/PageHero";

export const metadata = {
  title: "Privacy Policy",
  description:
    "Learn how Revenue Align Solutions collects, uses, stores, and protects personal and health-related data.",
  alternates: { canonical: "/privacy-policy" },
};

const sections = [
  {
    title: "1. Information We Collect",
    content: (
      <ul className="mt-3 list-disc space-y-2 pl-5 text-gray-600">
        <li>Contact information, including your name, email address, and phone number</li>
        <li>Health, insurance, and provider information needed to deliver contracted services</li>
        <li>The content of messages and forms you submit to us</li>
        <li>Technical data such as your IP address, browser type, cookies, and website activity</li>
      </ul>
    ),
  },
  {
    title: "2. How We Use Your Information",
    content: (
      <ul className="mt-3 list-disc space-y-2 pl-5 text-gray-600">
        <li>To provide medical billing, coding, and revenue cycle management services</li>
        <li>To respond to inquiries and provide administrative or client support</li>
        <li>To operate, maintain, improve, and secure our website and services</li>
        <li>To meet contractual, legal, and regulatory obligations</li>
      </ul>
    ),
  },
  {
    title: "3. Sensitive Health Information",
    content: (
      <p className="mt-3 leading-7 text-gray-600">
        Please do not submit protected health information or other sensitive patient
        information through general website forms or email unless we direct you to an
        approved secure channel. When we process protected health information for a
        client, that processing is governed by the applicable service agreement and
        business associate agreement.
      </p>
    ),
  },
  {
    title: "4. How We Share Information",
    content: (
      <p className="mt-3 leading-7 text-gray-600">
        We do not sell personal information. We may share information only as needed
        with service providers supporting our operations, professional advisers,
        authorized healthcare or insurance organizations, or government and legal
        authorities when required by law. Service providers may use information only
        to perform services for us and are subject to appropriate confidentiality
        obligations.
      </p>
    ),
  },
  {
    title: "5. Mobile Information and SMS Consent",
    content: (
      <p className="mt-3 rounded-xl border border-indigo-100 bg-indigo-50 p-5 font-medium leading-7 text-[#110f3e]">
        No mobile information will be shared with third parties or affiliates for
        marketing or promotional purposes. All categories described in this Privacy
        Policy exclude text messaging originator opt-in data and consent; this
        information will not be shared with any third parties.
      </p>
    ),
  },
  {
    title: "6. Data Protection and Retention",
    content: (
      <p className="mt-3 leading-7 text-gray-600">
        We use reasonable administrative, technical, and physical safeguards designed
        to protect information from unauthorized access, disclosure, or misuse. No
        method of transmission or storage is completely secure. We retain information
        only as long as reasonably necessary for the purposes described in this policy,
        our contractual requirements, and applicable law.
      </p>
    ),
  },
  {
    title: "7. Your Choices and Rights",
    content: (
      <p className="mt-3 leading-7 text-gray-600">
        Depending on where you live, you may have rights to request access to,
        correction of, or deletion of certain personal information, or to object to or
        restrict certain processing. You may opt out of non-essential marketing
        communications by using the unsubscribe method provided or contacting us.
      </p>
    ),
  },
  {
    title: "8. Cookies and Analytics",
    content: (
      <p className="mt-3 leading-7 text-gray-600">
        We may use necessary cookies and analytics technologies to understand website
        use and improve performance. You can control cookies through your browser
        settings, although disabling some cookies may affect website functionality.
      </p>
    ),
  },
  {
    title: "9. Children’s Privacy",
    content: (
      <p className="mt-3 leading-7 text-gray-600">
        This website is intended for business audiences and is not directed to children
        under 13. We do not knowingly collect personal information from children through
        this website.
      </p>
    ),
  },
  {
    title: "10. External Links",
    content: (
      <p className="mt-3 leading-7 text-gray-600">
        Links to third-party websites are provided for convenience. Their privacy
        practices are governed by their own policies, not this Privacy Policy.
      </p>
    ),
  },
  {
    title: "11. Policy Updates",
    content: (
      <p className="mt-3 leading-7 text-gray-600">
        We may revise this Privacy Policy periodically. We will update the effective
        date on this page when changes are posted.
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
        description="At Revenue Align Solutions, your privacy is important to us. This policy explains how we collect, use, store, and protect your information."
      />
      <article className="mx-auto max-w-4xl px-6 py-16 md:py-20">
        <p className="mb-4 text-sm font-medium text-gray-500">
          Effective date: October 22, 2026
        </p>
        <p className="mb-10 leading-7 text-gray-600">
          Revenue Align Solutions USA LLC respects your privacy. This policy applies to
          information collected through this website and our related business
          communications.
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
              12. Contact Us
            </h2>
            <p className="mt-3 leading-7 text-gray-600">
              For privacy questions or requests, call{" "}
              <a
                className="font-medium text-[#3d2d7d] hover:underline"
                href="tel:+15125202375"
              >
                (512) 520-2375
              </a>
              , email{" "}
              <a
                className="font-medium text-[#3d2d7d] hover:underline"
                href="mailto:info@revenuealignsolutions.com"
              >
                info@revenuealignsolutions.com
              </a>
              , or write to Revenue Align Solutions USA LLC, 13740 N Highway 183 Ste L2
              #456, Austin, TX 78750, USA.
            </p>
          </section>
        </div>
      </article>
    </main>
  );
}
