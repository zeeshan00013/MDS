"use client";
import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

const faqs = [
  {
    question:
      "What makes ClaimAlign Solutions different from other medical billing companies?",
    answer:
      "At ClaimAlign Solutions, we provide end-to-end revenue cycle management solutions tailored to your specialty. Our team focuses on maximizing reimbursements and reducing claim denials.",
  },
  {
    question: "How does ClaimAlign Solutions help reduce claim denials?",
    answer:
      "We use advanced coding, thorough claim scrubbing, and follow-up processes to minimize errors. Our experts track every claim until payment is received.",
  },
  {
    question: "Does ClaimAlign Solutions work with all medical specialties?",
    answer:
      "Yes. We support a wide range of specialties including cardiology, orthopedics, neurology, primary care, and more.",
  },
  {
    question:
      "Can ClaimAlign Solutions integrate with our existing EHR/EMR system?",
    answer:
      "Absolutely. Our billing solutions are designed to seamlessly integrate with most major EHR/EMR systems to streamline workflows.",
  },
  {
    question: "Is patient data safe with ClaimAlign Solutions?",
    answer:
      "Yes, data security is our top priority. We comply with HIPAA regulations and implement advanced data protection measures to safeguard patient information.",
  },
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-gray-50 py-16 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Heading */}
        <h2 className="text-2xl md:text-3xl font-medium text-center text-[#362d7e] mb-10">
          Claims Align Solutions – Frequently Asked Questions
        </h2>

        {/* FAQ List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition cursor-pointer"
              onClick={() => toggleFaq(index)}
            >
              {/* Question */}
              <div className="flex justify-between items-center p-5">
                <h3 className="text-lg font-semibold text-gray-800">
                  {faq.question}
                </h3>
                <FaChevronDown
                  className={`text-[#362d7e] transform transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </div>

              {/* Answer */}
              <div
                className={`px-5 overflow-hidden transition-all duration-500 ease-in-out ${
                  openIndex === index ? "max-h-40 py-3" : "max-h-0"
                }`}
              >
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
