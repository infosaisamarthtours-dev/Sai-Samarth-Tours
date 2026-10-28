import React, { useState } from "react";
import { sendLeadToTeleCRM } from "../api/telecrm.js";

export default function EnquiryForm() {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    setMessage("");

    const form = event.currentTarget;
    const data = new FormData(form);

    try {
      await sendLeadToTeleCRM({
        name: data.get("name")?.toString() || "",
        phone: data.get("phone")?.toString() || "",
        email: data.get("email")?.toString() || "",
        message: data.get("message")?.toString() || ""
      });

      setMessage("Thank you! Your enquiry was submitted.");
      form.reset();
    } catch (error: any) {
      setMessage(error.message || "Failed to submit enquiry.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-md mx-auto p-6 bg-white rounded-xl shadow-md border border-gray-100">
      <div>
        <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1">
          Full Name *
        </label>
        <input
          name="name"
          placeholder="Your name"
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#114088] text-sm"
        />
      </div>

      <div>
        <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1">
          Phone Number *
        </label>
        <input
          name="phone"
          type="tel"
          placeholder="Phone number"
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#114088] text-sm"
        />
      </div>

      <div>
        <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1">
          Email Address
        </label>
        <input
          name="email"
          type="email"
          placeholder="Email address"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#114088] text-sm"
        />
      </div>

      <div>
        <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1">
          Your Enquiry
        </label>
        <textarea
          name="message"
          placeholder="Tell us about your travel plans..."
          rows={3}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#114088] text-sm resize-none"
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full py-2.5 px-4 bg-[#114088] hover:bg-[#0c2f66] text-white font-medium rounded-lg transition-colors disabled:opacity-50 text-sm cursor-pointer"
      >
        {loading ? "Submitting..." : "Submit Enquiry"}
      </button>

      {message && (
        <p
          role="status"
          className={`text-sm text-center font-medium ${
            message.includes("Thank you") ? "text-green-600" : "text-red-500"
          }`}
        >
          {message}
        </p>
      )}
    </form>
  );
}
