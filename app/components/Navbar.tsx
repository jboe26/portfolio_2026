"use client";

export default function Navbar() {
  return (
    <div>
      <header className="bg-[#2f333a] p-6 text-lg text-white/70">
        Joshua Boepple — Full Stack Developer
      </header>
      <nav className="bg-[#2f333a] p-6 flex flex-wrap gap-6 text-md text-white/70 uppercase tracking-wider">
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
    </div>
  );
}
