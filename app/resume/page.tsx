export default function ResumePage() {
  return (
    <div className="min-h-screen bg-[#2f333a] text-white">
      {/* Main Content */}
      <main className="max-w-4xl mx-auto p-10 space-y-20">
        {/* Objective */}
        <section>
          <h2 className="text-xl text-[#3ba7a0] font-semibold mb-3">
            Objective
          </h2>

          <div className="bg-[#3e424b] p-6 rounded-lg border border-white/20">
            <p className="text-white/90 leading-relaxed">
              Forward‑thinking Full Stack Developer with experience in
              logistics, technical support, and modern web application
              development. Skilled in building intuitive, responsive interfaces
              and solving complex problems through clear, collaborative
              workflows. Completed a Bachelor's in Web & Mobile Application
              Development, including a capstone internship with Speech
              Innovation NC where I built a full React website, created new
              branding, designed business cards, and set up their professional
              email system. Seeking tech‑forward roles that value adaptability,
              clarity, and meaningful impact.
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
                  Built with HTML, CSS, JavaScript, Firebase, and service
                  workers
                </li>
                <li>
                  Offline-first PWA with service worker caching and manifest for
                  home screen install
                </li>
                <li>Firebase cloud sync for real-time per-user data storage</li>
                <li>Checklist tracking split by vehicle and caregiver role</li>
              </ul>
            </div>

            {/* Project 2 */}
            <div className="bg-[#3e424b] p-6 rounded-lg border border-white/20">
              <h3 className="text-lg font-medium mb-1">
                Speech Innovation NC — Capstone Internship
              </h3>
              <p className="text-white/60 text-sm mb-3">INF 490 — Fall 2025</p>

              <ul className="list-disc list-inside text-white/90 space-y-1 text-sm">
                <li>Built with React, deployed via Netlify</li>
                <li>
                  Designed wireframes, user flows, and front-end components for
                  accessibility
                </li>
                <li>
                  Conducted stakeholder interviews and translated client needs
                  into development goals
                </li>
                <li>
                  Collaborated directly with a real client to support speech
                  therapy innovation
                </li>
                <li>
                  Delivered full brand package including logo, business cards,
                  and Google Workspace setup
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Experience */}
        <section>
          <h2 className="text-xl text-[#3ba7a0] font-semibold mb-3">
            Freelance & Client Work
          </h2>

          <div className="space-y-6">
            {/* Client Work */}
            <section>
              <div className="space-y-4 mb-4">
                {/* Speech Innovation */}
                <div
                  className="bg-[#3e424b] p-6 rounded-lg border border-white/20
      transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-black/20
      hover:border-white/40"
                >
                  <h3 className="text-lg font-medium mb-2">
                    Speech Innovation NC
                  </h3>
                  <ul className="list-disc list-inside text-white/90 space-y-1 text-sm mb-4">
                    <li>Built with React, deployed via Netlify</li>
                    <li>
                      Designed wireframes, user flows, and front-end components
                      for accessibility
                    </li>
                    <li>
                      Delivered full brand package including logo, business
                      cards, and Google Workspace setup
                    </li>
                    <li>
                      Crafted mission and vision copy the founders said "speaks
                      directly to us"
                    </li>
                  </ul>

                  <div className="flex gap-4 text-sm">
                    <a
                      href="https://speechinnovationnc.org/"
                      target="_blank"
                      className="text-lg px-3 py-1 rounded border border-[#3ba7a0] text-[#3ba7a0]
          hover:bg-[#3ba7a0] hover:text-black transition"
                    >
                      View Project
                    </a>
                  </div>
                </div>

                {/* Mickey Herring */}
                <div
                  className="bg-[#3e424b] p-6 rounded-lg border border-white/20
      transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-black/20
      hover:border-white/40"
                >
                  <h3 className="text-lg font-medium mb-2">
                    Mickey Herring Taxidermy
                  </h3>
                  <ul className="list-disc list-inside text-white/90 space-y-1 text-sm mb-4">
                    <li>
                      Built with React, migrated to Next.js and Tailwind CSS
                    </li>
                    <li>
                      Includes pricing, photo gallery, mailto contact form,
                      deployed via Netlify
                    </li>
                    <li>Designed logo and business cards from scratch</li>
                    <li>He's now the #1 ranked taxidermist in his area</li>
                  </ul>

                  <div className="flex gap-4 text-sm">
                    <a
                      href="https://www.mickeyherringtaxidermy.org/"
                      target="_blank"
                      className="text-lg px-3 py-1 rounded border border-[#3ba7a0] text-[#3ba7a0]
          hover:bg-[#3ba7a0] hover:text-black transition"
                    >
                      View Project
                    </a>
                  </div>
                </div>
              </div>
            </section>
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
