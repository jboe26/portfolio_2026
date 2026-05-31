export default function Dashboard() {
  return (
    <div className="min-h-screen bg-[#2f333a] text-white">
      <main className="max-w-4xl mx-auto p-10 space-y-20">
        {/* ABOUT ME */}
        <section className="max-w-4xl mx-auto py-2 px-4">
          <h1 className="text-xl text-[#3ba7a0] font-bold mb-10">About Me</h1>

          <div className="flex flex-col md:flex-row items-center md:items-start gap-10">
            <div className="flex-shrink-0">
              <img
                src="/JB.jpg"
                alt="Josh Boepple"
                className="w-45 h-45 object-cover rounded-3xl shadow-lg"
              />
            </div>

            <div>
              <p className="text-lg leading-relaxed text-white/80 mb-6">
                Hello! I'm Josh, a passionate full-stack developer based in
                Charlotte, NC. I love building clean, user‑focused web
                experiences and thrive on solving problems with creative
                solutions. My work blends technical skill, design, and a drive
                to help businesses and individuals succeed. When I'm not coding,
                you'll find me exploring new tech, collaborating with others, or
                enjoying the outdoors.
              </p>
            </div>
          </div>
        </section>

        {/* CLIENT WORK */}
        <section>
          <h2 className="text-xl text-[#3ba7a0] font-semibold mb-3">
            Client Work
          </h2>

          <div className="space-y-4 mb-4">
            {/* Speech Innovation */}
            <div className="bg-[#3e424b] p-6 rounded-lg border border-white/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-black/20 hover:border-white/40">
              <h3 className="text-lg font-medium mb-2">Speech Innovation NC</h3>
              <p className="text-sm text-white/90 mb-4">
                Bilingual Speech-Language Pathology Services — Empowering
                Communication, Transforming Lives.
              </p>
              <p className="text-sm text-white/90 mb-4">
                Designed and built a full React website for a bilingual speech
                therapy practice. Delivered a complete brand package including
                logo, business cards, Google Workspace setup, and custom mission
                and vision copy.
              </p>

              <div className="flex gap-4 text-sm">
                <a
                  href="https://speechinnovationnc.org/"
                  target="_blank"
                  className="text-lg px-3 py-1 rounded border border-[#3ba7a0] text-[#3ba7a0] hover:bg-[#3ba7a0] hover:text-black transition"
                >
                  View Project
                </a>
              </div>
            </div>

            {/* Mickey Herring */}
            <div className="bg-[#3e424b] p-6 rounded-lg border border-white/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-black/20 hover:border-white/40">
              <h3 className="text-lg font-medium mb-2">
                Mickey Herring Taxidermy
              </h3>
              <p className="text-sm text-white/90 mb-4">
                Preserving wildlife trophies with precision and passion —
                specializing in deer, turkey, and fish.
              </p>
              <p className="text-sm text-white/90 mb-4">
                Built and rebuilt a full website for my grandfather's taxidermy
                business using React, then migrated to Next.js with Tailwind
                CSS. Includes pricing, photo gallery, mailto contact form, and
                custom domain deployment via Netlify. Designed a new logo and
                business cards from scratch. He's now the #1 ranked taxidermist
                in his area.
              </p>

              <div className="flex gap-4 text-sm">
                <a
                  href="https://www.mickeyherringtaxidermy.org/"
                  target="_blank"
                  className="text-lg px-3 py-1 rounded border border-[#3ba7a0] text-[#3ba7a0] hover:bg-[#3ba7a0] hover:text-black transition"
                >
                  View Project
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* FEATURED PROJECTS */}
        <section>
          <h2 className="text-xl text-[#3ba7a0] font-semibold mb-3">
            Featured Projects
          </h2>
          <p className="text-white/60 text-sm mb-6">
            A selection of my recent work.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-4">
            {/* ZeroOut */}
            <div className="relative group overflow-hidden bg-[#3e424b] p-6 rounded-lg border border-white/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-black/20 hover:border-white/40">
              <div className="relative z-10">
                <h3 className="text-lg font-medium mb-2">
                  <a
                    href="https://zeroout.netlify.app/"
                    target="_blank"
                    className="hover:underline hover:text-white transition-colors duration-200"
                  >
                    ZeroOut — Full Stack Budget & Debt Tracker
                  </a>
                </h3>
                <p className="text-sm text-white/90 mb-8">
                  A full stack personal finance app built with Next.js, MongoDB,
                  and NextAuth. Features user authentication, income and expense
                  tracking, debt management, and a live financial dashboard.
                  Built with a REST API, protected routes, and full CRUD
                  operations.
                </p>

                <a
                  href="https://zeroout.netlify.app/"
                  target="_blank"
                  className="text-lg px-3 py-1 rounded border border-[#3ba7a0] text-[#3ba7a0] hover:bg-[#3ba7a0] hover:text-black transition"
                >
                  View Project
                </a>
              </div>
            </div>

            {/* Charlotte Food Tour */}
            <div className="relative group overflow-hidden bg-[#3e424b] p-6 rounded-lg border border-white/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-black/20 hover:border-white/40">
              <div className="relative z-10">
                <h3 className="text-lg font-medium mb-2">
                  <a
                    href="https://github.com/jboe26/charlotte-food-tour/tree/main"
                    target="_blank"
                    className="hover:underline hover:text-white transition-colors duration-200"
                  >
                    Charlotte Food Tour Game (Python)
                  </a>
                </h3>

                <p className="text-sm text-white/90 mb-4">
                  An interactive Python text adventure exploring Charlotte's
                  neighborhoods and restaurants through branching choices and
                  dynamic storytelling.
                </p>

                <a
                  href="https://github.com/jboe26/charlotte-food-tour/blob/main/CharlotteAdventureGame.py"
                  target="_blank"
                  className="text-lg px-3 py-1 rounded border border-[#3ba7a0] text-[#3ba7a0] hover:bg-[#3ba7a0] hover:text-black transition"
                >
                  View Source Code
                </a>

                <p className="text-xs text-white/80 mt-2">
                  Run with: python3 CharlotteAdventureGame.py
                </p>
              </div>
            </div>

            {/* Coping Skills Toolbox — Mental Health App */}
            <div className="relative group overflow-hidden bg-[#3e424b] p-6 rounded-lg border border-white/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-black/20 hover:border-white/40">
              <div className="relative z-10">
                <h3 className="text-lg font-medium mb-2">
                  <a
                    href="#"
                    className="hover:underline hover:text-white transition-colors duration-200"
                  >
                    Coping Skills Toolbox — Mental Health App
                  </a>
                </h3>

                <p className="text-sm text-white/90 mb-8">
                  A React Native mobile app for mental wellness. Features a
                  coping skills library, four guided exercises (grounding,
                  breathing, body scan, mindfulness), daily mood check-ins, and
                  history tracking with mood charts. Built with Expo,
                  AsyncStorage, and Expo Router.
                </p>

                <a
                  href="https://github.com/jboe26/CopingSkillsToolbox"
                  target="_blank"
                  className="text-lg px-3 py-1 rounded border border-[#3ba7a0] text-[#3ba7a0] hover:bg-[#3ba7a0] hover:text-black transition"
                >
                  View on GitHub
                </a>
              </div>
            </div>

            {/* Digital Declutter Kit */}
            <div className="relative group overflow-hidden bg-[#3e424b] p-6 rounded-lg border border-white/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-black/20 hover:border-white/40">
              <div className="relative z-10">
                <h3 className="text-lg font-medium mb-2">
                  <a
                    href="#"
                    className="hover:underline hover:text-white transition-colors duration-200"
                  >
                    Digital Declutter Kit
                  </a>
                </h3>

                <p className="text-sm text-white/90 mb-8">
                  A self-guided PDF workbook to reclaim your digital life. Seven
                  structured sections: audit your habits, declutter your
                  devices, build clean routines, and track progress. Includes
                  checklists, a 25-question habit audit, and curated tools to
                  maintain focus.
                </p>

                <a
                  href="https://www.etsy.com/listing/4504382402/digital-declutter-kit-clean-up-your"
                  target="_blank"
                  className="text-lg px-3 py-1 rounded border border-[#3ba7a0] text-[#3ba7a0] hover:bg-[#3ba7a0] hover:text-black transition"
                >
                  Buy on Etsy
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* SKILLS */}
        <section>
          <h2 className="text-xl text-[#3ba7a0] font-semibold mb-4">Skills</h2>

          <div className="grid gap-4">
            {/* Core Web */}
            <div className="bg-white/5 border border-white/10 rounded-lg p-4">
              <h3 className="text-white/70 text-sm mb-3">Core Web</h3>
              <ul className="flex flex-wrap gap-2 text-white/80 text-lg">
                <li className="border border-[#3ba7a0] px-3 py-1 rounded w-fit">
                  HTML5
                </li>
                <li className="border border-[#3ba7a0] px-3 py-1 rounded w-fit">
                  CSS3
                </li>
                <li className="border border-[#3ba7a0] px-3 py-1 rounded w-fit">
                  JavaScript
                </li>
                <li className="border border-[#3ba7a0] px-3 py-1 rounded w-fit">
                  TypeScript
                </li>
                <li className="border border-[#3ba7a0] px-3 py-1 rounded w-fit">
                  Python
                </li>
              </ul>
            </div>

            {/* Front-End */}
            <div className="bg-white/5 border border-white/10 rounded-lg p-4">
              <h3 className="text-white/70 text-sm mb-3">Front-End</h3>
              <ul className="flex flex-wrap gap-2 text-white/80 text-lg">
                <li className="border border-[#3ba7a0] px-3 py-1 rounded w-fit">
                  React
                </li>
                <li className="border border-[#3ba7a0] px-3 py-1 rounded w-fit">
                  Next.js
                </li>
                <li className="border border-[#3ba7a0] px-3 py-1 rounded w-fit">
                  Tailwind CSS
                </li>
                <li className="border border-[#3ba7a0] px-3 py-1 rounded w-fit">
                  Bootstrap
                </li>
                <li className="border border-[#3ba7a0] px-3 py-1 rounded w-fit">
                  Responsive Design
                </li>
                <li className="border border-[#3ba7a0] px-3 py-1 rounded w-fit">
                  UI/UX Principles
                </li>
              </ul>
            </div>

            {/* Back-End */}
            <div className="bg-white/5 border border-white/10 rounded-lg p-4">
              <h3 className="text-white/70 text-sm mb-3">Back-End</h3>
              <ul className="flex flex-wrap gap-2 text-white/80 text-lg">
                <li className="border border-[#3ba7a0] px-3 py-1 rounded w-fit">
                  Node.js
                </li>
                <li className="border border-[#3ba7a0] px-3 py-1 rounded w-fit">
                  Express
                </li>
                <li className="border border-[#3ba7a0] px-3 py-1 rounded w-fit">
                  REST APIs
                </li>
                <li className="border border-[#3ba7a0] px-3 py-1 rounded w-fit">
                  Firebase
                </li>
              </ul>
            </div>

            {/* Databases */}
            <div className="bg-white/5 border border-white/10 rounded-lg p-4">
              <h3 className="text-white/70 text-sm mb-3">Databases</h3>
              <ul className="flex flex-wrap gap-2 text-white/80 text-lg">
                <li className="border border-[#3ba7a0] px-3 py-1 rounded w-fit">
                  SQL
                </li>
                <li className="border border-[#3ba7a0] px-3 py-1 rounded w-fit">
                  MySQL
                </li>
                <li className="border border-[#3ba7a0] px-3 py-1 rounded w-fit">
                  MongoDB
                </li>
              </ul>
            </div>

            {/* Tools */}
            <div className="bg-white/5 border border-white/10 rounded-lg p-4">
              <h3 className="text-white/70 text-sm mb-3">Tools & Workflow</h3>
              <ul className="flex flex-wrap gap-2 text-white/80 text-lg">
                <li className="border border-[#3ba7a0] px-3 py-1 rounded w-fit">
                  Git & GitHub
                </li>
                <li className="border border-[#3ba7a0] px-3 py-1 rounded w-fit">
                  Visual Studio Code
                </li>
                <li className="border border-[#3ba7a0] px-3 py-1 rounded w-fit">
                  Chrome DevTools
                </li>
                <li className="border border-[#3ba7a0] px-3 py-1 rounded w-fit">
                  Netlify
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* FOOTER */}
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
