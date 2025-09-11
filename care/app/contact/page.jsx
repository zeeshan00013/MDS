"use client";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

export default function Contact() {
  return (
    <section className="bg-white py-16 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 border-t border-gray-200 pt-10">
        {/* Left: Contact Form */}
        <div>
          <h2 className="text-2xl md:text-3xl font-bold mb-2">
            Tell us about yourself
          </h2>
          <p className="text-gray-600 mb-8">
            Our mission is to make a difference in healthcare.
          </p>

          <form className="space-y-5">
            {/* Name Row */}
            <div className="grid grid-cols-1  gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  First Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded-md px-4 py-2 outline-0"
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                className="w-full border border-gray-300 rounded-md px-4 py-2 outline-0"
              />
            </div>

            {/* Phone */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Phone <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                className="w-full border border-gray-300 rounded-md px-4 py-2  outline-0 "
              />
            </div>

            {/* Message */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Message <span className="text-red-500">*</span>
              </label>
              <textarea
                rows={4}
                className="w-full border border-gray-300 rounded-md px-4 py-2 outline-0"
              ></textarea>
            </div>

            <button
              type="submit"
              className="bg-[#362d7e] hover:bg-[#3d328e] cursor-pointer text-white px-6 py-3 rounded-full font-semibold  transition"
            >
              Get Started
            </button>
          </form>
        </div>

        {/* Right: Contact Info */}
        <div className="space-y-6">
          <h3 className="text-2xl font-bold">Let's work together</h3>
          <p className="text-gray-600">
            Feel free to share your queries with us
          </p>

          {/* Email */}
          <div className="flex items-center space-x-3 text-gray-700">
            <FaEnvelope className="text-[#362d7e]" />
            <span>info@revenuealignsolutions.com</span>
          </div>

          {/* Phone */}
          <div className="flex items-center space-x-3 text-gray-700">
            <FaPhone className="text-[#362d7e]" />
            <span>+923480114527</span>
          </div>
          <div className="flex items-center space-x-3 text-gray-700">
            <FaPhone className="text-[#362d7e]" />
            <span>+923480114527</span>
          </div>

          {/* Locations */}
          <h4 className="text-lg font-bold">Our Locations</h4>
          <div className="flex items-start space-x-3 text-gray-700">
            <FaMapMarkerAlt className="text-[#362d7e] mt-1" />
            <span>Taxas USA</span>
          </div>
          <div className="flex items-start space-x-3 text-gray-700">
            <FaMapMarkerAlt className="text-[#362d7e] mt-1" />
            <span>Taxas USA</span>
          </div>
        </div>
      </div>
    </section>
  );
}
