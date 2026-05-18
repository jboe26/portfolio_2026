export default function Dashboard() {
  return (
    <div className="min-h-screen bg-[#2f333a] text-white">
      {/* Identity Header */}
      <header className="p-6 text-lg text-white/70">
        Joshua Boepple — Full Stack Developer
      </header>

      {/* Global Navigation */}
      {/* <nav className="p-6 flex gap-6 text-md text-white/70 uppercase tracking-wider">
        <a
          href="/dashboard"
          className="hover:text-white transition-colors duration-200"
        >
          Home
        </a>
        <a
          href="/projects"
          className="hover:text-white transition-colors duration-200"
        >
          Projects
        </a>
        <a
          href="/skills"
          className="hover:text-white transition-colors duration-200"
        >
          Skills
        </a>
        <a
          href="/contact"
          className="hover:text-white transition-colors duration-200"
        >
          Contact
        </a>
      </nav> */}

      {/* Main Content Container */}
      <main className="max-w-4xl mx-auto p-10 space-y-20">
        {/* Client Work */}
        <section>
          <h2 className="text-xl text-[#3ba7a0] font-semibold mb-3">
            Client Work
          </h2>

          <div className="space-y-4 mb-4">
            {/* Client Card 1 */}
            <div
              className="bg-[#3e424b] p-6 rounded-lg border border-white/20
              transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-black/20
              hover:border-white/40"
            >
              <h3 className="text-lg font-medium mb-2">
                <a
                  href="https://speechinnovationnc.org/"
                  target="_blank"
                  className="hover:underline hover:text-white transition-colors duration-200"
                >
                  Speech Innovation NC
                </a>
              </h3>
              <p className="text-sm text-white/90">
                Bilingual Speech-Language Pathology Services — Empowering
                Communication, Transforming Lives.
              </p>
            </div>

            {/* Client Card 2 */}
            <div
              className="bg-[#3e424b] p-6 rounded-lg border border-white/20
              transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-black/20
              hover:border-white/40"
            >
              <h3 className="text-lg font-medium mb-2">
                <a
                  href="https://www.mickeyherringtaxidermy.org/"
                  target="_blank"
                  className="hover:underline hover:text-white transition-colors duration-200"
                >
                  Mickey Herring Taxidermy
                </a>
              </h3>
              <p className="text-sm text-white/90">
                Preserving wildlife trophies with precision and passion —
                specializing in deer, turkey, and fish.
              </p>
            </div>
          </div>
        </section>

        {/* Featured Projects */}
        <section>
          <h2 className="text-xl text-[#3ba7a0] font-semibold mb-3">
            Featured Projects
          </h2>
          <p className="text-white/60 text-sm mb-6">
            A selection of my recent work.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-4">
            {/* Card 1 */}
            <div
              className="relative group overflow-hidden bg-[#3e424b] p-6 rounded-lg border border-white/20
      transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-black/20
      hover:border-white/40"
            >
              {/* Content */}
              <div className="relative z-10">
                <h3 className="text-lg font-medium mb-2">
                  <a
                    href="https://inf250-pacifictrailsresort.netlify.app/"
                    target="_blank"
                    className="hover:underline hover:text-white transition-colors duration-200"
                  >
                    Pacific Trails Resort
                  </a>
                </h3>
                <p className="text-sm text-white/90">
                  A structured HTML/CSS project demonstrating layout, responsive
                  design, and semantic markup.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div
              className="relative group overflow-hidden bg-[#3e424b] p-6 rounded-lg border border-white/20
      transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-black/20
      hover:border-white/40"
            >
              {/* Content */}
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
                  An interactive Python text adventure exploring Charlotte’s
                  neighborhoods and restaurants through branching choices and
                  dynamic storytelling.
                </p>

                <a
                  href="https://github.com/jboe26/charlotte-food-tour/blob/main/CharlotteAdventureGame.py"
                  target="_blank"
                  className="text-sm text-white/90 hover:underline hover:text-white transition-colors duration-200"
                >
                  View Source Code
                </a>

                <p className="text-xs text-white/80 mt-2">
                  Run with: python3 CharlotteAdventureGame.py
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Skills */}
        <section>
          <h2 className="text-xl text-[#3ba7a0] font-semibold mb-3">Skills</h2>
          <ul className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-white/80 mb-4">
            <li>JavaScript</li>
            <li>React</li>
            <li>Next.js</li>
            <li>Node.js</li>
            <li>Tailwind CSS</li>
            <li>TypeScript</li>
          </ul>
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
