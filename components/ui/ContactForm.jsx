"use client";

import { useState } from "react";

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Wire up to your backend / email service
    alert("Thank you! Your message has been sent.");
    setForm({ name: "", email: "", phone: "", message: "" });
  };

  const inputClass =
    "w-full bg-gray-200 border-0 px-3 py-2.5 text-gray-800 text-sm rounded-sm focus:outline-none focus:ring-2 focus:ring-green-600";

  return (
    <div>
      <h3 className="text-green-700 font-semibold text-base mb-4">
        Send us a direct message:
      </h3>

      <div onSubmit={handleSubmit}>
        <label className="block text-gray-800 font-medium text-sm mb-1">
          Name
        </label>
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          className={inputClass}
        />

        <label className="block text-gray-800 font-medium text-sm mb-1 mt-4">
          Email
        </label>
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          className={inputClass}
        />

        <label className="block text-gray-800 font-medium text-sm mb-1 mt-4">
          Phone
        </label>
        <input
          type="tel"
          name="phone"
          value={form.phone}
          onChange={handleChange}
          className={inputClass}
        />

        <label className="block text-gray-800 font-medium text-sm mb-1 mt-4">
          Message
        </label>
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          rows={5}
          className={inputClass + " resize-none"}
        />

        <button
          onClick={handleSubmit}
          className="btn-green mt-6 px-8 py-2.5 rounded text-sm font-semibold"
        >
          Submit
        </button>
      </div>
    </div>
  );
}
