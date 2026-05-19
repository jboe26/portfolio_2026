export default function ResumePage() {
  return (
    <div className="min-h-screen bg-[#2f333a] text-white">
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

      {/* Main Content */}
      <main className="max-w-4xl mx-auto p-10 space-y-20">
        {/* Objective */}
        <section>
          <h2 className="text-xl text-[#3ba7a0] font-semibold mb-3">
            Objective
          </h2>

          <div className="bg-[#3e424b] p-6 rounded-lg border border-white/20">
            <p className="text-white/90 leading-relaxed">
              Stewardship‑driven Full Stack Developer with experience in
              logistics, technical support, and web application development.
              Skilled in building intuitive, responsive interfaces and solving
              complex problems through clear, collaborative workflows. Completed
              a Bachelor's in Web & Mobile Application Development, including a
              capstone PWA featuring offline‑first architecture and Firebase
              integration. Seeking tech‑forward roles that value adaptability,
              clarity, and impact.
            </p>
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
              <p className="text-white/60 text-sm mb-3">INF 654 — Fall 2025</p>

              <ul className="list-disc list-inside text-white/90 space-y-1 text-sm">
                <li>
                  Designed and deployed a fully functional
                  emergency‑preparedness PWA
                </li>
                <li>
                  Implemented service workers, manifest, and IndexedDB for
                  offline‑first use
                </li>
                <li>
                  Integrated Firebase for cloud sync and per‑user data storage
                </li>
                <li>
                  Built responsive UI and installable experience across devices
                </li>
              </ul>
            </div>

            {/* Project 2 */}
            <div className="bg-[#3e424b] p-6 rounded-lg border border-white/20">
              <h3 className="text-lg font-medium mb-1">
                Speech Innovation NC — Capstone Internship
              </h3>
              <p className="text-white/60 text-sm mb-3">INF 490 — Fall 2025</p>

              <ul className="list-disc list-inside text-white/90 space-y-1 text-sm">
                <li>
                  Collaborated with a real client to support speech therapy
                  innovation
                </li>
                <li>
                  Conducted stakeholder interviews and translated needs into
                  development goals
                </li>
                <li>
                  Designed wireframes and user flows for accessibility and
                  clarity
                </li>
                <li>
                  Implemented front‑end components using React and deployed via
                  Netlify
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Experience */}
        <section>
          <h2 className="text-xl text-[#3ba7a0] font-semibold mb-3">
            Experience
          </h2>

          <div className="space-y-6">
            {/* Amazon */}
            <div className="bg-[#3e424b] p-6 rounded-lg border border-white/20">
              <h3 className="text-lg font-medium">
                Warehouse Associate — Amazon
              </h3>
              <p className="text-white/60 text-sm">
                Charlotte, NC • May 2024 – Current
              </p>

              <ul className="list-disc list-inside text-white/90 space-y-1 text-sm mt-3">
                <li>
                  Maintained productivity targets in order fulfillment and
                  inventory workflows
                </li>
                <li>
                  Executed receiving, scanning, picking, packing, and shipping
                  operations
                </li>
                <li>
                  Ensured compliance with safety standards and contributed to a
                  zero‑injury record
                </li>
                <li>
                  Supported lean initiatives to reduce waste and improve
                  efficiency
                </li>
              </ul>
            </div>

            {/* Roof Above */}
            <div className="bg-[#3e424b] p-6 rounded-lg border border-white/20">
              <h3 className="text-lg font-medium">
                Tenant Support Specialist — Roof Above
              </h3>
              <p className="text-white/60 text-sm">
                Charlotte, NC • June 2023 – Aug 2024
              </p>

              <ul className="list-disc list-inside text-white/90 space-y-1 text-sm mt-3">
                <li>
                  Provided support to residents transitioning out of
                  homelessness
                </li>
                <li>
                  Coordinated services with providers, property teams, and
                  community partners
                </li>
                <li>Maintained accurate documentation and progress notes</li>
                <li>
                  Contributed to a trauma‑informed service model emphasizing
                  trust and safety
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
                B.S. Information Technology & Telecommunications
              </h3>
              <p className="text-white/60 text-sm">
                Fort Hays State University • Completed Dec 2025
              </p>
              <p className="text-white/90 text-sm mt-3">
                Coursework in front‑end development, mobile UX/UI, databases,
                and networking. Built responsive applications, integrated APIs,
                and strengthened debugging and deployment skills.
              </p>
            </div>

            {/* South College */}
            <div className="bg-[#3e424b] p-6 rounded-lg border border-white/20">
              <h3 className="text-lg font-medium">
                A.S. Information Technology
              </h3>
              <p className="text-white/60 text-sm">
                South College • Completed Sept 2022
              </p>
              <p className="text-white/90 text-sm mt-3">
                Focused on systems administration, networking, cybersecurity,
                and troubleshooting. Developed foundational programming skills
                in Python and JavaScript.
              </p>
            </div>

            {/* UNC Charlotte */}
            <div className="bg-[#3e424b] p-6 rounded-lg border border-white/20">
              <h3 className="text-lg font-medium">
                Full Stack Web Development Certificate
              </h3>
              <p className="text-white/60 text-sm">
                UNC Charlotte • Completed Jan 2020
              </p>
              <p className="text-white/90 text-sm mt-3">
                Hands‑on training in JavaScript, Node.js, React, REST APIs,
                MongoDB, and agile development practices.
              </p>
            </div>
          </div>
        </section>

        {/* Certifications */}
        <section>
          <h2 className="text-xl text-[#3ba7a0] font-semibold mb-3">
            Certificates
          </h2>

          <div className="bg-[#3e424b] p-6 rounded-lg border border-white/20">
            <ul className="list-disc list-inside text-white/90 space-y-1 text-sm">
              <li>Mosyle Certified Admin — Business (2022)</li>
              <li>Mosyle Certified Admin — Manager (2022)</li>
              <li>Jamf 100 Certified Associate (2022)</li>
            </ul>
          </div>
        </section>

        {/* Technical Skills */}
        <section>
          <h2 className="text-xl text-[#3ba7a0] font-semibold mb-3">
            Technical Skills
          </h2>

          <div className="bg-[#3e424b] p-6 rounded-lg border border-white/20">
            <ul className="list-disc list-inside text-white/90 space-y-1 text-sm">
              <li>HTML5, CSS3, JavaScript, PHP, Python</li>
              <li>React, Node.js, Express, Bootstrap</li>
              <li>SQL, MySQL, MongoDB</li>
              <li>REST APIs, Git & GitHub</li>
              <li>Responsive Design, VS Code, Chrome DevTools</li>
            </ul>
          </div>
        </section>

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
      </main>
    </div>
  );
}
