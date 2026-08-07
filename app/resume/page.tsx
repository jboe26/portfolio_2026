import type { Metadata } from "next";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Resume — Joshua Boepple",
  description:
    "Resume for Joshua Boepple: full stack developer skills, experience, projects, and education.",
};

export default function ResumePage() {
  return (
    <div className="min-h-screen bg-[#2f333a] text-white">
      {/* Main Content */}
      <main className="max-w-4xl mx-auto p-10 space-y-20">
        <div className="flex justify-end">
          <a
            href="/JoshuaBoeppleResume2026.pdf"
            target="_blank"
            className="text-sm px-3 py-1 rounded border border-[#3ba7a0] text-[#3ba7a0]
      hover:bg-[#3ba7a0] hover:text-black transition"
          >
            Download PDF
          </a>
        </div>

        {/* Objective */}
        <section>
          <h2 className="text-xl text-[#3ba7a0] font-semibold mb-3">
            Objective
          </h2>

          <div className="bg-[#3e424b] p-6 rounded-lg border border-white/20">
            <p className="text-white/90 leading-relaxed">
              Full Stack Developer with experience in logistics, technical
              support, and modern web application development. Strong focus on
              building responsive interfaces, writing clear documentation, and
              collaborating effectively across teams. Seeking tech-forward roles
              where adaptability, clear communication, and practical
              problem-solving drive meaningful impact.
            </p>
          </div>
        </section>

        {/* Technical Skills */}
        <section>
          <h2 className="text-xl text-[#3ba7a0] font-semibold mb-3">
            Technical Skills
          </h2>

          <div className="bg-[#3e424b] p-6 rounded-lg border border-white/20">
            <ul className="list-disc list-inside text-white/90 space-y-1 text-sm">
              <li>
                <span className="font-semibold">Languages & Web:</span> HTML5,
                CSS3, JavaScript, PHP, Python, SQL
              </li>
              <li>
                <span className="font-semibold">Frameworks & Libraries:</span>{" "}
                React, Node.js, Express, Bootstrap
              </li>
              <li>
                <span className="font-semibold">Databases:</span> MySQL, MongoDB
              </li>
              <li>
                <span className="font-semibold">Tools & Platforms:</span> Git,
                GitHub, RESTful APIs, VS Code, Chrome DevTools
              </li>
              <li>
                <span className="font-semibold">Core Competencies:</span>{" "}
                Responsive Design, Component-Based UI, API Integration, Schema
                Planning
              </li>
            </ul>
          </div>
        </section>

        {/* Experience */}
        <section>
          <h2 className="text-xl text-[#3ba7a0] font-semibold mb-3">
            Experience
          </h2>

          <div className="space-y-6">
            {/* TW Creative Group */}
            <div className="bg-[#3e424b] p-6 rounded-lg border border-white/20">
              <h3 className="text-lg font-medium mb-1">
                Freelance Web Developer (Subcontractor) | TW Creative Group
              </h3>
              <p className="text-white/60 text-sm mb-3">
                Remote — June 2026 – Present
              </p>

              <ul className="list-disc list-inside text-white/90 space-y-1 text-sm">
                <li>
                  Subcontract ~10 hours/week supporting web development projects
                  under agency lead.
                </li>
                <li>
                  Lead schema planning and structured data implementation for
                  client site rebuilds using WordPress and Beaver Builder.
                </li>
                <li>
                  Support a Drupal-to-WordPress migration for a client site
                  through schema strategy, technical planning, and Kadence/Divi
                  implementation.
                </li>
                <li>
                  Maintain accurate time tracking and deliverable documentation
                  across concurrent client projects.
                </li>
              </ul>
            </div>

            {/* Amazon */}
            <div className="bg-[#3e424b] p-6 rounded-lg border border-white/20">
              <h3 className="text-lg font-medium mb-1">
                Warehouse Associate | Amazon
              </h3>
              <p className="text-white/60 text-sm mb-3">
                Charlotte, NC — May 2024 – Present
              </p>

              <ul className="list-disc list-inside text-white/90 space-y-1 text-sm">
                <li>
                  Achieve consistent rate targets across receiving, scanning,
                  picking, packing, and shipping workflows.
                </li>
                <li>
                  Operate proprietary internal systems and handheld scanners
                  with high accuracy.
                </li>
                <li>
                  Maintain a zero-injury record through strict adherence to
                  safety procedures.
                </li>
                <li>
                  Collaborate with supervisors to meet daily quota goals and
                  streamline workflow efficiency.
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Projects */}
        <section>
          <h2 className="text-xl text-[#3ba7a0] font-semibold mb-3">
            Projects
          </h2>

          <div className="space-y-6">
            {/* Project 1 */}
            <div className="bg-[#3e424b] p-6 rounded-lg border border-white/20">
              <h3 className="text-lg font-medium mb-1">
                Emergency Prep Progressive Web App
              </h3>
              <p className="text-white/60 text-sm mb-3">
                INF 654 Mobile Web Development — Fall 2025
              </p>

              <ul className="list-disc list-inside text-white/90 space-y-1 text-sm">
                <li>
                  Engineered a full PWA using service workers, web app manifest,
                  and IndexedDB for offline-first functionality.
                </li>
                <li>
                  Integrated Firebase for cloud synchronization and per-user
                  data storage.
                </li>
                <li>
                  Built a responsive, installable UI across mobile and desktop
                  environments.
                </li>
                <li>
                  Authored modular architecture documentation in GitHub
                  repository.
                </li>
              </ul>
            </div>

            {/* Project 2 */}
            <div className="bg-[#3e424b] p-6 rounded-lg border border-white/20">
              <h3 className="text-lg font-medium mb-1">
                Speech Innovation NC – Capstone Internship Project
              </h3>
              <p className="text-white/60 text-sm mb-3">
                INF 490 Capstone Seminar in Informatics — Fall 2025
              </p>

              <ul className="list-disc list-inside text-white/90 space-y-1 text-sm">
                <li>
                  Partnered with a local speech pathologist in Pineville, NC to
                  design a web solution supporting therapy service communication
                  and client accessibility.
                </li>
                <li>
                  Converted stakeholder interviews into actionable development
                  requirements.
                </li>
                <li>
                  Produced wireframes and user flows focused on accessibility
                  and intuitive navigation.
                </li>
                <li>
                  Developed React components and deployed final site via
                  Netlify.
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Education */}
        <section>
          <h2 className="text-xl text-[#3ba7a0] font-semibold mb-3">
            Education
          </h2>

          <div className="space-y-6">
            {/* FHSU */}
            <div className="bg-[#3e424b] p-6 rounded-lg border border-white/20">
              <h3 className="text-lg font-medium">
                Bachelor of Science in Information Networking and
                Telecommunications
              </h3>
              <p className="text-white/60 text-sm">
                Fort Hays State University | Hays, KS — Graduated: Dec. 2025
              </p>
              <ul className="list-disc list-inside text-white/90 space-y-1 text-sm mt-3">
                <li>
                  Focused coursework in front-end development, mobile UX/UI,
                  database management, and networking principles.
                </li>
                <li>
                  Gained hands-on experience with HTML, CSS, JavaScript, SQL,
                  and modern web frameworks.
                </li>
                <li>
                  Developed responsive web applications, integrated APIs, and
                  applied Git version control in collaborative environments.
                </li>
              </ul>
            </div>

            {/* South College */}
            <div className="bg-[#3e424b] p-6 rounded-lg border border-white/20">
              <h3 className="text-lg font-medium">
                Associate of Science in Information Technology
              </h3>
              <p className="text-white/60 text-sm">
                South College | Knoxville, TN — Graduated: Sept. 2022
              </p>
              <ul className="list-disc list-inside text-white/90 space-y-1 text-sm mt-3">
                <li>
                  Core curriculum covered systems administration, networking
                  fundamentals, cybersecurity, and hardware/software
                  troubleshooting.
                </li>
                <li>
                  Gained practical experience configuring operating systems,
                  virtual environments, and foundational programming in Python
                  and JavaScript.
                </li>
              </ul>
            </div>

            {/* UNC Charlotte */}
            <div className="bg-[#3e424b] p-6 rounded-lg border border-white/20">
              <h3 className="text-lg font-medium">
                Full Stack Web Development Certificate
              </h3>
              <p className="text-white/60 text-sm">
                University of North Carolina at Charlotte | Charlotte, NC —
                Graduated: Jan. 2020
              </p>
              <ul className="list-disc list-inside text-white/90 space-y-1 text-sm mt-3">
                <li>
                  Completed intensive training in front-end and back-end web
                  development using JavaScript, Node.js, React, Express, and
                  MongoDB.
                </li>
                <li>
                  Emphasized agile development practices, RESTful API
                  architecture, and cross-functional team projects.
                </li>
              </ul>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </div>
  );
}
