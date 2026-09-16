"use client";
import { useState } from "react";
import Footer from "../components/Footer";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("Sending...");

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, message }),
    });

    const data = await res.json();
    if (data.success) {
      setStatus("Message sent!");
    } else {
      setStatus("Something went wrong. Please try again.");
    }
  };

  return (
    <main className="min-h-screen bg-[#F2F2F2] text-[#0F1113]">
      {/* Page Container */}
      <div className="max-w-4xl px-6 py-10 mx-auto">
        {/* Page Header */}
        <h2 className="text-xl font-bold mb-4 text-[#245F94]">Contact</h2>
        <p className="text-lg text-black/70 mb-8">
          Feel free to reach out for collaborations, opportunities, or
          questions.
        </p>

        {/* Contact Card */}
        <div className="bg-black/5 border border-black/10 rounded-lg p-6 space-y-4">
          <div>
            <h2 className="text-black/60 text-sm mb-1">Email</h2>
            <a
              href="mailto:joshuarboepple@gmail.com"
              className="text-[#945C34] underline"
            >
              joshuarboepple@gmail.com
            </a>
          </div>

          <div>
            <h2 className="text-black/60 text-sm mb-1">Location</h2>
            <p className="text-black/70">Pineville, NC</p>
          </div>

          <div>
            <h2 className="text-black/60 text-sm mb-1">Availability</h2>
            <p className="text-black/70">
              Open to freelance work, collaborations, and full‑time
              opportunities.
            </p>
          </div>
        </div>

        <div>
          <h2 className="mb-4 mt-6 text-xl font-bold mb-4 text-[#245F94]">
            Send a Message
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full bg-black/5 border border-black/10 rounded-lg px-4 py-3 text-[#0F1113] placeholder:text-black/40 outline-none"
            />
            <input
              type="email"
              placeholder="Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-black/5 border border-black/10 rounded-lg px-4 py-3 text-[#0F1113] placeholder:text-black/40 outline-none"
            />
            <textarea
              placeholder="Your Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows={5}
              className="w-full bg-black/5 border border-black/10 rounded-lg px-4 py-3 text-[#0F1113] placeholder:text-black/40 outline-none"
            />
            <button
              type="submit"
              className="border border-[#C57B45] text-[#945C34] px-8 py-2 mb-4 rounded hover:bg-[#C57B45] hover:text-white transition"
            >
              Send Message
            </button>
            {status && <p className="text-[#5F6D79] text-sm">{status}</p>}
          </form>
        </div>

        <Footer />
      </div>
    </main>
  );
}
