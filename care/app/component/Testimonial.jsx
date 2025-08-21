"use client";
import { useState } from "react";
import { FaQuoteLeft, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import img from "../Images/service dr.webp";
import Image from "next/image";

const testimonials = [
  {
    name: "Dr. Sarah Johnson",
    role: "Cardiologist",
    feedback:
      "Transcure has transformed our billing process. We’re seeing faster reimbursements and much less stress managing claims.",
    image: img,
  },
  {
    name: "Dr. Michael Lee",
    role: "Orthopedic Surgeon",
    feedback:
      "The professionalism and attention to detail from the team are unmatched. I highly recommend their services.",
    image: img,
  },
  {
    name: "Dr. Emily Davis",
    role: "Family Physician",
    feedback:
      "Their RCM expertise has helped us maximize revenue while minimizing claim denials. A trusted partner!",
    image: img,
  },
];

export default function Testimonial() {
  const [current, setCurrent] = useState(0);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="bg-gray-50 py-16 px-6">
      <div className="max-w-5xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-3xl font-medium  text-center text-[#362d7e] mb-4">
          What Our Clients Say
        </h2>
        <p className="text-gray-600 mb-12">
          Hear from healthcare professionals who trust us with their medical
          billing and revenue cycle management.
        </p>

        {/* Testimonial Card */}
        <div className="relative bg-white shadow-lg rounded-2xl p-8 md:p-12 max-w-3xl mx-auto">
          <FaQuoteLeft className="text-purple-300 text-3xl mb-4 mx-auto" />
          <p className="text-gray-700 italic mb-6">
            "{testimonials[current].feedback}"
          </p>
          <div className="flex items-center justify-center space-x-4">
            <Image
              src={testimonials[current].image}
              alt={testimonials[current].name}
              className="w-16 h-16 rounded-full object-cover border-2 border-[#362d7e]"
            />
            <div className="text-left">
              <h4 className="text-lg font-bold text-[#362d7e]">
                {testimonials[current].name}
              </h4>
              <p className="text-gray-600 text-sm">
                {testimonials[current].role}
              </p>
            </div>
          </div>

          {/* Navigation Arrows */}
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center mt-6 space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`w-3 h-3 rounded-full cursor-pointer ${
                current === index ? "bg-[#60b6e3]" : "bg-gray-300"
              }`}
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
}
