import PageHero from "../component/PageHero";

export const metadata = {
  title: "Terms and Conditions",
  description: "Terms and conditions governing use of the Revenue Align Solutions website.",
  alternates: { canonical: "/terms-and-conditions" },
};

const sections = [
  ["1. Acceptance of these terms", "By accessing or using this website, you agree to these Terms and Conditions. If you do not agree, please do not use the website."],
  ["2. Website information", "The content on this website is provided for general informational purposes. It does not constitute medical, legal, financial, or billing advice and should not be relied upon as a substitute for advice from a qualified professional."],
  ["3. Services and agreements", "Descriptions of our services are general and may change. The specific scope, fees, responsibilities, and terms of any services we provide will be governed by a separate written agreement with the client."],
  ["4. Permitted use", "You may use this website only for lawful purposes. You must not attempt to disrupt the website, gain unauthorized access, introduce malicious code, scrape content through automated means, or use the website in a way that infringes the rights of others."],
  ["5. Intellectual property", "Website content—including text, graphics, branding, layout, and design—is owned by or licensed to Revenue Align Solutions and is protected by applicable intellectual property laws. You may not reproduce or distribute it without prior written permission, except for personal, non-commercial use."],
  ["6. Third-party links", "Our website may contain links to third-party websites. We do not control or endorse those websites and are not responsible for their content, availability, security, or privacy practices."],
  ["7. Disclaimer and limitation of liability", "We work to keep this website accurate and available, but provide it on an “as is” and “as available” basis without warranties of any kind to the extent permitted by law. Revenue Align Solutions will not be liable for indirect, incidental, or consequential losses arising from use of—or inability to use—this website."],
  ["8. Privacy", "Your use of the website is also subject to our Privacy Policy, which explains how we collect, use, and protect information."],
  ["9. Changes to these terms", "We may update these terms from time to time. Changes take effect when posted on this page. Continued use of the website after an update means you accept the revised terms."],
  ["10. Governing law", "These terms are governed by the laws of the State of Texas, without regard to conflict-of-law principles. Any dispute will be handled in a court of competent jurisdiction in Texas, subject to applicable law."],
];

export default function TermsPage() {
  return (
    <main className="bg-white text-gray-800">
      <PageHero eyebrow="Legal" title="Terms and Conditions" description="The terms that apply when you visit and use the Revenue Align Solutions website." />
      <article className="mx-auto max-w-4xl px-6 py-16 md:py-20">
        <p className="mb-10 text-sm font-medium text-gray-500">Effective date: October 20, 2026</p>
        <div className="space-y-10">
          {sections.map(([title, text]) => <section key={title}><h2 className="text-2xl font-semibold text-[#110f3e]">{title}</h2><p className="mt-3 leading-7 text-gray-600">{text}</p></section>)}
          <section><h2 className="text-2xl font-semibold text-[#110f3e]">11. Contact us</h2><p className="mt-3 leading-7 text-gray-600">Questions about these terms may be sent to <a className="font-medium text-[#3d2d7d] hover:underline" href="mailto:info@revenuealignsolutions.com">info@revenuealignsolutions.com</a>.</p></section>
        </div>
      </article>
    </main>
  );
}
