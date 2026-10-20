import Link from "next/link";
import { BiTargetLock } from "react-icons/bi";
import { FaChartLine, FaHandshake, FaShieldAlt } from "react-icons/fa";
import PageHero from "../component/PageHero";

export const metadata = {
  title: "Our Company",
  description: "Learn about Revenue Align Solutions, our mission, values, and approach to medical billing and revenue cycle management.",
  alternates: { canonical: "/our-company" },
};

const values = [
  { icon: FaShieldAlt, title: "Integrity", text: "We handle every account with care, transparency, and respect for confidential information." },
  { icon: FaChartLine, title: "Performance", text: "Our work is focused on clean claims, healthier cash flow, and measurable practice growth." },
  { icon: FaHandshake, title: "Partnership", text: "We work as an extension of your practice, with responsive support and clear communication." },
];

export default function OurCompanyPage() {
  return (
    <main className="bg-white text-gray-800">
      <PageHero eyebrow="About us" title="Built to keep healthcare revenue moving" description="Revenue Align Solutions helps healthcare organizations simplify billing, strengthen financial performance, and stay focused on patient care." />

      <section className="mx-auto grid max-w-6xl gap-12 px-6 py-20 md:grid-cols-2 md:items-center">
        <div>
          <p className="text-sm font-semibold uppercase tracking-widest text-[#3d2d7d]">Who we are</p>
          <h2 className="mt-3 text-3xl font-bold text-[#110f3e] md:text-4xl">A dependable partner for the business of care</h2>
        </div>
        <div className="space-y-5 leading-7 text-gray-600">
          <p>We provide end-to-end revenue cycle support for physicians, clinics, and healthcare organizations across the United States. Our services include medical billing, coding, credentialing, eligibility verification, prior authorization, denial management, and virtual assistance.</p>
          <p>By combining experienced professionals, disciplined workflows, and practical technology, we help practices reduce administrative pressure and uncover opportunities for stronger revenue performance.</p>
        </div>
      </section>

      <section className="bg-slate-50 px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto max-w-2xl text-center">
            <BiTargetLock className="mx-auto text-5xl text-[#3d2d7d]" />
            <h2 className="mt-4 text-3xl font-bold text-[#110f3e]">Our mission</h2>
            <p className="mt-4 leading-7 text-gray-600">To give healthcare providers reliable, accurate, and efficient revenue cycle support so they can spend more time delivering excellent care.</p>
          </div>
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {values.map(({ icon: Icon, title, text }) => (
              <article key={title} className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
                <Icon className="text-3xl text-[#3d2d7d]" />
                <h3 className="mt-5 text-xl font-semibold text-[#110f3e]">{title}</h3>
                <p className="mt-3 leading-7 text-gray-600">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-20 text-center">
        <h2 className="text-3xl font-bold text-[#110f3e]">Ready to strengthen your revenue cycle?</h2>
        <p className="mx-auto mt-4 max-w-2xl text-gray-600">Tell us about your practice and the challenges you want to solve.</p>
        <Link href="/contact" className="mt-8 inline-flex rounded-lg bg-[#362d7e] px-6 py-3 font-semibold text-white transition hover:bg-[#2e3b8f]">Talk to our team</Link>
      </section>
    </main>
  );
}
