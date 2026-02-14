"use client";

import { useState } from "react";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";

export default function ContactForm() {
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

    const toastId = toast.loading("Sending message...");

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        {
          name: form.name,
          email: form.email,
          phone: form.phone,
          message: form.message,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
      );

      toast.success("Message sent successfully!", { id: toastId });

      setForm({ name: "", email: "", phone: "", message: "" });
    } catch (error) {
      console.error("EmailJS Error:", error);
      toast.error("Failed to send message. Please try again.", {
        id: toastId,
      });
    }

    setLoading(false);
  };

  const inputClass =
    "w-full bg-gray-200 border-0 px-3 py-2.5 text-gray-800 text-sm rounded-sm focus:outline-none focus:ring-2 focus:ring-green-600";

  return (
    <div>
      <h3 className="text-green-700 font-semibold text-base mb-4">
        Send us a direct message:
      </h3>

      <form onSubmit={handleSubmit}>
        <label className="block text-gray-800 font-medium text-sm mb-1">
          Name
        </label>
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          className={inputClass}
          required
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
          required
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
          required
        />

        <button
          type="submit"
          disabled={loading}
          className="btn-green mt-6 px-8 py-2.5 rounded text-sm font-semibold disabled:opacity-50"
        >
          {loading ? "Sending..." : "Submit"}
        </button>
      </form>
    </div>
  );
}
