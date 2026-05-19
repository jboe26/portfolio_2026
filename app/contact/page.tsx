export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#2f333a] text-white">
      {/* Identity Header */}
      <header className="p-6 text-lg text-white/70">
        Joshua Boepple — Full Stack Developer
      </header>

      {/* Global Navigation */}
      <nav className="p-6 flex gap-6 text-md text-white/70 uppercase tracking-wider">
        <a
          href="/dashboard"
          className="hover:text-white transition-colors duration-200"
        >
          Home
        </a>
        <a
          href="/resume"
          className="hover:text-white transition-colors duration-200"
        >
          Resume
        </a>
        <a
          href="/projects"
          className="hover:text-white transition-colors duration-200"
        >
          Projects
        </a>
        <a
          href="/contact"
          className="hover:text-white transition-colors duration-200"
        >
          Contact
        </a>
      </nav>

      {/* Page Container */}
      <div className="max-w-4xl mx-auto">
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

        {/* Footer */}
        <footer className="border-t border-white/20 py-6">
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
