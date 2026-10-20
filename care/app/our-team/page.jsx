import Link from "next/link";
import { FaHeadset, FaLaptopMedical, FaUserCheck, FaUserShield } from "react-icons/fa";
import PageHero from "../component/PageHero";

export const metadata = {
  title: "Our Team",
  description: "Meet the billing, coding, credentialing, and client support professionals behind Revenue Align Solutions.",
  alternates: { canonical: "/our-team" },
};

const teams = [
  { icon: FaLaptopMedical, title: "Billing & RCM specialists", text: "Focused on accurate claim submission, payment posting, account follow-up, and revenue visibility." },
  { icon: FaUserCheck, title: "Coding & credentialing experts", text: "Supporting accurate coding and efficient enrollment with commercial and government payers." },
  { icon: FaUserShield, title: "Compliance-minded professionals", text: "Trained to follow secure workflows and protect the sensitive information entrusted to us." },
  { icon: FaHeadset, title: "Dedicated client support", text: "Keeping your team informed with responsive communication, practical guidance, and regular reporting." },
];

export default function OurTeamPage() {
  return (
    <main className="bg-white text-gray-800">
      <PageHero eyebrow="Our people" title="Expertise you can rely on" description="Our team brings together revenue cycle knowledge, careful execution, and a shared commitment to helping healthcare practices thrive." />
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold text-[#110f3e] md:text-4xl">One team, aligned around your success</h2>
          <p className="mt-5 text-lg leading-8 text-gray-600">Every client relationship is supported by professionals who understand the details of healthcare administration. We collaborate across specialties to resolve issues quickly, communicate clearly, and keep work moving.</p>
        </div>
        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {teams.map(({ icon: Icon, title, text }) => (
            <article key={title} className="flex gap-5 rounded-2xl border border-slate-200 p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-indigo-50"><Icon className="text-2xl text-[#3d2d7d]" /></div>
              <div><h3 className="text-xl font-semibold text-[#110f3e]">{title}</h3><p className="mt-2 leading-7 text-gray-600">{text}</p></div>
            </article>
          ))}
        </div>
      </section>
      <section className="bg-slate-50 px-6 py-20">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold text-[#110f3e]">How we work</h2>
          <p className="mt-5 text-lg leading-8 text-gray-600">We value accountability, continuous learning, and proactive communication. That means clear ownership, documented processes, thoughtful quality checks, and a team that treats your goals as its own.</p>
          <Link href="/contact" className="mt-8 inline-flex rounded-lg bg-[#362d7e] px-6 py-3 font-semibold text-white transition hover:bg-[#2e3b8f]">Meet your RCM partner</Link>
        </div>
      </section>
    </main>
  );
}
