"use client";
import { useState } from "react";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    const res = await fetch("/api/sendEmail", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    const data = await res.json();
    setStatus(data.success ? "✅ Email sent!" : "❌ Failed to send email.");
  };

  return (
    <div className="p-6 max-w-md mx-auto">
      <h1 className="text-xl font-bold mb-4">Contact Us</h1>
      <form onSubmit={handleSubmit} className="space-y-3">
        <input
          name="name"
          placeholder="Your name"
          onChange={handleChange}
          required
          className="border p-2 w-full rounded"
        />
        <input
          name="email"
          placeholder="Your email"
          type="email"
          onChange={handleChange}
          required
          className="border p-2 w-full rounded"
        />
        <textarea
          name="message"
          placeholder="Your message"
          onChange={handleChange}
          required
          className="border p-2 w-full rounded"
        ></textarea>
        <button
          type="submit"
          className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
        >
          Send Message
        </button>
      </form>
      {status && <p className="mt-3 text-sm">{status}</p>}
    </div>
  );
}
