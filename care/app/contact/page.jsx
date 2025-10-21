"use client";
import { useState } from "react";
import Swal from "sweetalert2";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/sendEmail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (data.success) {
        Swal.fire({
          title: "🎉 Message Sent!",
          text: "Thank you for contacting us. We'll get back to you soon.",
          icon: "success",
          confirmButtonColor: "#362d7e",
          confirmButtonText: "OK",
          background: "#f8f9ff",
        });

        setForm({ name: "", email: "", phone: "", message: "" });
      } else {
        Swal.fire({
          title: "❌ Failed to Send",
          text: "Something went wrong. Please try again later.",
          icon: "error",
          confirmButtonColor: "#e63946",
        });
      }
    } catch (error) {
      Swal.fire({
        title: "⚠️ Error!",
        text: "Network error or invalid configuration.",
        icon: "warning",
        confirmButtonColor: "#f59e0b",
      });
    } finally {
      setLoading(false);
    }
  };

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

          <form onSubmit={handleSubmit} className="space-y-5">
            {["name", "email", "phone"].map((field) => (
              <div key={field}>
                <label className="block text-sm font-medium text-gray-700 capitalize">
                  {field} <span className="text-red-500">*</span>
                </label>
                <input
                  type={field === "email" ? "email" : "text"}
                  name={field}
                  value={form[field]}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-300 rounded-md px-4 py-2 outline-0"
                />
              </div>
            ))}

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Message <span className="text-red-500">*</span>
              </label>
              <textarea
                rows={4}
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-md px-4 py-2 outline-0"
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={loading}
              className={`${
                loading ? "opacity-70 cursor-not-allowed" : ""
              } bg-[#362d7e] hover:bg-[#3d328e] text-white px-6 py-3 rounded-full font-semibold transition`}
            >
              {loading ? "Sending..." : "Get Started"}
            </button>
          </form>
        </div>

        {/* Right: Contact Info */}
        <div className="space-y-6">
          <h3 className="text-2xl font-bold">Let's work together</h3>
          <p className="text-gray-600">
            Feel free to share your queries with us
          </p>

          <div className="flex items-center space-x-3 text-gray-700">
            <FaEnvelope className="text-[#362d7e]" />
            <span>info@revenuealignsolutions.com</span>
          </div>

          <h4 className="text-lg font-bold">Our Locations</h4>
          <div className="flex items-start space-x-3 text-gray-700">
            <FaMapMarkerAlt className="text-[#362d7e] mt-1" />
            <span>13740 N Highway 183 Ste L2 #456 Austin, TX 78750 USA</span>
          </div>
        </div>
      </div>
    </section>
  );
}
