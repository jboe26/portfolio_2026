"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  if (pathname === "/") return null;

  return (
    <div>
      <header className="bg-[#2f333a] p-6 text-lg text-white/70">
        Joshua Boepple — Full Stack Developer
      </header>
      <nav className="bg-[#2f333a] p-6 flex flex-wrap gap-6 text-md text-white/70 uppercase tracking-wider">
        <Link
          href="/dashboard"
          className="hover:text-white transition-colors duration-200"
        >
          Home
        </Link>
        <Link
          href="/resume"
          className="hover:text-white transition-colors duration-200"
        >
          Resume
        </Link>
        <Link
          href="/projects"
          className="hover:text-white transition-colors duration-200"
        >
          Projects
        </Link>
        <Link
          href="/contact"
          className="hover:text-white transition-colors duration-200"
        >
          Contact
        </Link>
      </nav>
    </div>
  );
}
