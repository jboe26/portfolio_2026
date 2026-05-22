"use client";
import { useState } from "react";

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
    <main className="min-h-screen bg-[#2f333a] text-white">
      {/* Page Container */}
      <div className="max-w-4xl px-6 mx-auto">
        {/* Page Header */}
        <h2 className="text-xl font-bold mb-4 text-[#3ba7a0]">Contact</h2>
        <p className="text-lg text-white/80 mb-8">
          Feel free to reach out for collaborations, opportunities, or
          questions.
        </p>

        {/* Contact Card */}
        <div className="bg-white/5 border border-white/10 rounded-lg p-6 space-y-4">
          <div>
            <h2 className="text-white/70 text-sm mb-1">Email</h2>
            <a
              href="mailto:joshuarboepple@gmail.com"
              className="text-[#3ba7a0] underline"
            >
              joshuarboepple@gmail.com
            </a>
          </div>

          <div>
            <h2 className="text-white/70 text-sm mb-1">Location</h2>
            <p className="text-white/80">Pineville, NC</p>
          </div>

          <div>
            <h2 className="text-white/70 text-sm mb-1">Availability</h2>
            <p className="text-white/80">
              Open to freelance work, collaborations, and full‑time
              opportunities.
            </p>
          </div>
        </div>

        <div>
          <h2 className="mb-4 mt-6 text-xl font-bold mb-4 text-[#3ba7a0]">
            Send a Message
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-white/30 outline-none"
            />
            <input
              type="email"
              placeholder="Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-white/30 outline-none"
            />
            <textarea
              placeholder="Your Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows={5}
              className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-white/30 outline-none"
            />
            <button
              type="submit"
              className="border border-[#3ba7a0] text-[#3ba7a0] px-8 py-2 mb-4 rounded hover:bg-[#3ba7a0] hover:text-black transition"
            >
              Send Message
            </button>
            {status && <p className="text-white/60 text-sm">{status}</p>}
          </form>
        </div>

        {/* Footer */}
        <footer className="border-t border-white/20 py-8">
          <p className="text-sm text-white/60 text-center">
            {new Date().getFullYear()} Joshua Boepple — Full Stack Developer
          </p>

          <p className="text-sm text-white/60 text-center mt-2">
            <a
              href="mailto:joshuarboepple@gmail.com"
              className="hover:underline hover:text-white transition-colors duration-200"
              target="_blank"
            >
              joshuarboepple@gmail.com
            </a>
          </p>

          <p className="text-sm text-white/60 text-center mt-2">
            <a
              href="https://github.com/jboe26"
              className="hover:underline hover:text-white transition-colors duration-200"
            >
              GitHub
            </a>{" "}
            •{" "}
            <a
              href="https://www.linkedin.com/in/joshrboepple/"
              className="hover:underline hover:text-white transition-colors duration-200"
            >
              LinkedIn
            </a>
          </p>
        </footer>
      </div>
    </main>
  );
}
