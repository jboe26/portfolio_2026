export default function ResumePage() {
  return (
    <section className="max-w-3xl mx-auto py-16 px-4">
      <h1 className="text-4xl font-bold mb-2">Resume</h1>
      <p className="text-gray-600 mb-8">
        Joshua Boepple — Full Stack Developer
      </p>

      {/* Objective */}
      <div className="mb-10">
        <h2 className="text-2xl font-semibold mb-3">Objective</h2>
        <p className="text-gray-700 leading-relaxed">
          Stewardship‑driven Full Stack Developer with experience in logistics,
          technical support, and web application development. Skilled in
          building intuitive, responsive interfaces and solving complex problems
          through clear, collaborative workflows. Completed a Bachelor's in Web
          & Mobile Application Development, including a capstone PWA featuring
          offline‑first architecture and Firebase integration. Seeking
          tech‑forward roles that value adaptability, clarity, and impact.
        </p>
      </div>

      {/* Projects */}
      <div className="mb-10">
        <h2 className="text-2xl font-semibold mb-3">Projects</h2>

        <div className="mb-6">
          <h3 className="text-xl font-semibold">
            Emergency Prep Progressive Web App
          </h3>
          <p className="text-gray-600">INF 654 — Fall 2025</p>
          <ul className="list-disc list-inside text-gray-700 mt-2 space-y-1">
            <li>
              Designed and deployed a fully functional emergency‑preparedness
              PWA
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

        <div>
          <h3 className="text-xl font-semibold">
            Speech Innovation NC — Capstone Internship
          </h3>
          <p className="text-gray-600">INF 490 — Fall 2025</p>
          <ul className="list-disc list-inside text-gray-700 mt-2 space-y-1">
            <li>
              Collaborated with a real client to support speech therapy
              innovation
            </li>
            <li>
              Conducted stakeholder interviews and translated needs into
              development goals
            </li>
            <li>
              Designed wireframes and user flows for accessibility and clarity
            </li>
            <li>
              Implemented front‑end components using React and deployed via
              Netlify
            </li>
          </ul>
        </div>
      </div>

      {/* Experience */}
      <div className="mb-10">
        <h2 className="text-2xl font-semibold mb-3">Experience</h2>

        <div className="mb-6">
          <h3 className="text-xl font-semibold">
            Warehouse Associate — Amazon
          </h3>
          <p className="text-gray-600">Charlotte, NC • May 2024 – Current</p>
          <ul className="list-disc list-inside text-gray-700 mt-2 space-y-1">
            <li>
              Maintained productivity targets in order fulfillment and inventory
              workflows
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
              Supported lean initiatives to reduce waste and improve efficiency
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold">
            Tenant Support Specialist — Roof Above
          </h3>
          <p className="text-gray-600">Charlotte, NC • June 2023 – Aug 2024</p>
          <ul className="list-disc list-inside text-gray-700 mt-2 space-y-1">
            <li>
              Provided support to residents transitioning out of homelessness
            </li>
            <li>
              Coordinated services with providers, property teams, and community
              partners
            </li>
            <li>Maintained accurate documentation and progress notes</li>
            <li>
              Contributed to a trauma‑informed service model emphasizing trust
              and safety
            </li>
          </ul>
        </div>
      </div>

      {/* Education */}
      <div className="mb-10">
        <h2 className="text-2xl font-semibold mb-3">Education</h2>

        <div className="mb-6">
          <h3 className="text-xl font-semibold">
            B.S. Information Technology & Telecommunications
          </h3>
          <p className="text-gray-600">
            Fort Hays State University • Completed Dec 2025
          </p>
          <p className="text-gray-700 mt-2">
            Coursework in front‑end development, mobile UX/UI, databases, and
            networking. Built responsive applications, integrated APIs, and
            strengthened debugging and deployment skills.
          </p>
        </div>

        <div className="mb-6">
          <h3 className="text-xl font-semibold">A.S. Information Technology</h3>
          <p className="text-gray-600">South College • Completed Sept 2022</p>
          <p className="text-gray-700 mt-2">
            Focused on systems administration, networking, cybersecurity, and
            troubleshooting. Developed foundational programming skills in Python
            and JavaScript.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold">
            Full Stack Web Development Certificate
          </h3>
          <p className="text-gray-600">UNC Charlotte • Completed Jan 2020</p>
          <p className="text-gray-700 mt-2">
            Hands‑on training in JavaScript, Node.js, React, REST APIs, MongoDB,
            and agile development practices.
          </p>
        </div>
      </div>

      {/* Certifications */}
      <div className="mb-10">
        <h2 className="text-2xl font-semibold mb-3">Certificates</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          <li>Mosyle Certified Admin — Business (2022)</li>
          <li>Mosyle Certified Admin — Manager (2022)</li>
          <li>Jamf 100 Certified Associate (2022)</li>
        </ul>
      </div>

      {/* Technical Skills */}
      <div>
        <h2 className="text-2xl font-semibold mb-3">Technical Skills</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          <li>HTML5, CSS3, JavaScript, PHP, Python</li>
          <li>React, Node.js, Express, Bootstrap</li>
          <li>SQL, MySQL, MongoDB</li>
          <li>REST APIs, Git & GitHub</li>
          <li>Responsive Design, VS Code, Chrome DevTools</li>
        </ul>
      </div>
    </section>
  );
}
