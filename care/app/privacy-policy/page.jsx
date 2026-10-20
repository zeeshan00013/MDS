import PageHero from "../component/PageHero";

export const metadata = {
  title: "Privacy Policy",
  description: "Learn how Revenue Align Solutions collects, uses, and protects information submitted through its website.",
  alternates: { canonical: "/privacy-policy" },
};

const sections = [
  ["1. Information we collect", "We may collect information you provide directly, such as your name, email address, phone number, organization, and the content of messages or forms you submit. We may also collect technical information such as browser type, device information, IP address, referring pages, and website activity through cookies or similar technologies."],
  ["2. How we use information", "We use information to respond to inquiries, provide and improve our services, operate and secure the website, communicate with clients and prospective clients, comply with legal obligations, and analyze website performance."],
  ["3. Sensitive health information", "Please do not submit protected health information or other sensitive patient information through general website forms or email unless we have directed you to an approved secure channel. When we process protected health information on behalf of a client, that processing is governed by the applicable service agreement and business associate agreement."],
  ["4. Cookies and analytics", "We may use necessary cookies and analytics technologies to understand website use and improve performance. You can control cookies through your browser settings, although disabling some cookies may affect website functionality."],
  ["5. How we share information", "We do not sell personal information. We may share information with service providers that support our website and business operations, with professional advisers, when required by law, to protect rights or safety, or in connection with a business transaction. Providers are permitted to use information only for the services they perform for us."],
  ["6. Data security and retention", "We use reasonable administrative, technical, and physical safeguards designed to protect information. No method of transmission or storage is completely secure. We retain information only as long as reasonably necessary for the purposes described here, contractual requirements, and applicable law."],
  ["7. Your choices and rights", "Depending on where you live, you may have rights to request access to, correction of, or deletion of certain personal information, or to object to or restrict certain processing. You may also opt out of marketing communications using the unsubscribe method provided or by contacting us."],
  ["8. Children’s privacy", "This website is intended for business audiences and is not directed to children under 13. We do not knowingly collect personal information from children through the website."],
  ["9. External links", "Links to third-party websites are provided for convenience. Their privacy practices are governed by their own policies, not this Privacy Policy."],
  ["10. Policy updates", "We may revise this Privacy Policy periodically. The effective date above will be updated when changes are posted."],
];

export default function PrivacyPolicyPage() {
  return (
    <main className="bg-white text-gray-800">
      <PageHero eyebrow="Your privacy" title="Privacy Policy" description="How we collect, use, disclose, and safeguard information when you use our website." />
      <article className="mx-auto max-w-4xl px-6 py-16 md:py-20">
        <p className="mb-4 text-sm font-medium text-gray-500">Effective date: October 20, 2026</p>
        <p className="mb-10 leading-7 text-gray-600">Revenue Align Solutions USA LLC respects your privacy. This policy applies to information collected through this website and our related business communications.</p>
        <div className="space-y-10">
          {sections.map(([title, text]) => <section key={title}><h2 className="text-2xl font-semibold text-[#110f3e]">{title}</h2><p className="mt-3 leading-7 text-gray-600">{text}</p></section>)}
          <section><h2 className="text-2xl font-semibold text-[#110f3e]">11. Contact us</h2><p className="mt-3 leading-7 text-gray-600">For privacy questions or requests, email <a className="font-medium text-[#3d2d7d] hover:underline" href="mailto:info@revenuealignsolutions.com">info@revenuealignsolutions.com</a> or write to Revenue Align Solutions USA LLC, 13740 N Highway 183 Ste L2 #456, Austin, TX 78750, USA.</p></section>
        </div>
      </article>
    </main>
  );
}
