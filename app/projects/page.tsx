export default function ProjectsPage() {
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

      {/* Main Content Container */}
      <main className="max-w-4xl mx-auto p-10 space-y-20">
        {/* Client Work */}
        <section>
          <h2 className="text-xl text-[#3ba7a0] font-semibold mb-3">
            Client Work
          </h2>

          <div className="space-y-4 mb-4">
            {/* Speech Innovation */}
            <div
              className="bg-[#3e424b] p-6 rounded-lg border border-white/20
      transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-black/20
      hover:border-white/40"
            >
              <h3 className="text-lg font-medium mb-2">Speech Innovation NC</h3>
              <p className="text-sm text-white/90 mb-4">
                Bilingual Speech-Language Pathology Services — Empowering
                Communication, Transforming Lives.
              </p>

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
              <p className="text-sm text-white/90 mb-4">
                Preserving wildlife trophies with precision and passion —
                specializing in deer, turkey, and fish.
              </p>

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

        {/* SCHOOL PROJECTS */}
        <section>
          <h2 className="text-xl text-[#3ba7a0] font-semibold mb-3">
            School Projects
          </h2>
          <p className="text-white/60 text-sm mb-6">
            Coursework and hands‑on projects demonstrating full‑stack
            fundamentals.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-4">
            {/* Pacific Trails Resort */}
            <div
              className="relative group overflow-hidden bg-[#3e424b] p-6 rounded-lg border border-white/20
      transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-black/20
      hover:border-white/40"
            >
              <div className="relative z-10">
                <h3 className="text-lg font-medium mb-2">
                  Pacific Trails Resort
                </h3>
                <p className="text-sm text-white/90 mb-8">
                  A structured HTML/CSS project demonstrating layout, responsive
                  design, and semantic markup.
                </p>
                <a
                  href="https://inf250-pacifictrailsresort.netlify.app/"
                  target="_blank"
                  className="text-lg px-3 py-1 rounded border border-[#3ba7a0] text-[#3ba7a0]
          hover:bg-[#3ba7a0] hover:text-black transition"
                >
                  View Project
                </a>
              </div>
            </div>

            {/* Usability Testing Website */}
            <div
              className="relative group overflow-hidden bg-[#3e424b] p-6 rounded-lg border border-white/20
      transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-black/20
      hover:border-white/40"
            >
              <div className="relative z-10">
                <h3 className="text-lg font-medium mb-2">
                  Usability Testing Website
                </h3>
                <p className="text-sm text-white/90 mb-8">
                  A full usability analysis of HomeDepot.com including heuristic
                  evaluation, personas, test plan, findings, and
                  recommendations.
                </p>
                <a
                  href="https://usabilitywebsite.netlify.app/"
                  target="_blank"
                  className="text-lg px-3 py-1 rounded border border-[#3ba7a0] text-[#3ba7a0]
          hover:bg-[#3ba7a0] hover:text-black transition"
                >
                  View Project
                </a>
              </div>
            </div>

            {/* Charlotte Food Tour Game */}
            <div
              className="relative group overflow-hidden bg-[#3e424b] p-6 rounded-lg border border-white/20
  transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-black/20
  hover:border-white/40"
            >
              <div className="relative z-10">
                <h3 className="text-lg font-medium mb-2">
                  Charlotte Food Tour Game (Python)
                </h3>
                <p className="text-sm text-white/90 mb-4">
                  An interactive Python text adventure exploring Charlotte’s
                  neighborhoods and restaurants through branching choices and
                  dynamic storytelling.
                </p>
                <a
                  href="https://github.com/jboe26/charlotte-food-tour/blob/main/CharlotteAdventureGame.py"
                  target="_blank"
                  className="text-lg px-3 py-1 rounded border border-[#3ba7a0] text-[#3ba7a0]
      hover:bg-[#3ba7a0] hover:text-black transition"
                >
                  View Source Code
                </a>
                <p className="text-xs text-white/80 mt-2">
                  Run with: python3 CharlotteAdventureGame.py
                </p>
              </div>
            </div>

            {/* Psychic Game */}
            <div
              className="relative group overflow-hidden bg-[#3e424b] p-6 rounded-lg border border-white/20
      transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-black/20
      hover:border-white/40"
            >
              <div className="relative z-10">
                <h3 className="text-lg font-medium mb-2">Psychic Game</h3>
                <p className="text-sm text-white/90 mb-4">
                  A simple JavaScript guessing game where the computer picks a
                  random letter and the user tries to guess it.
                </p>
                <a
                  href="https://psychicguessinggame.netlify.app/"
                  target="_blank"
                  className="text-lg px-3 py-1 rounded border border-[#3ba7a0] text-[#3ba7a0]
          hover:bg-[#3ba7a0] hover:text-black transition"
                >
                  View Project
                </a>
              </div>
            </div>

            {/* Train Scheduler */}
            <div
              className="relative group overflow-hidden bg-[#3e424b] p-6 rounded-lg border border-white/20
      transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-black/20
      hover:border-white/40"
            >
              <div className="relative z-10">
                <h3 className="text-lg font-medium mb-2">Train Scheduler</h3>
                <p className="text-sm text-white/90 mb-4">
                  A real-time train schedule app using LocalStorage to store and
                  update arrival times dynamically.
                </p>
                <a
                  href="https://trainscheduler.netlify.app/"
                  target="_blank"
                  className="text-lg px-3 py-1 rounded border border-[#3ba7a0] text-[#3ba7a0]
          hover:bg-[#3ba7a0] hover:text-black transition"
                >
                  View Project
                </a>
              </div>
            </div>

            {/* Crystal Game */}
            <div
              className="relative group overflow-hidden bg-[#3e424b] p-6 rounded-lg border border-white/20
      transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-black/20
      hover:border-white/40"
            >
              <div className="relative z-10">
                <h3 className="text-lg font-medium mb-2">Crystal Game</h3>
                <p className="text-sm text-white/90 mb-4">
                  A number-matching game where each crystal has a hidden value
                  and players try to hit the target score.
                </p>
                <a
                  href="https://crystalcollectorgame.netlify.app/"
                  target="_blank"
                  className="text-lg px-3 py-1 rounded border border-[#3ba7a0] text-[#3ba7a0]
          hover:bg-[#3ba7a0] hover:text-black transition"
                >
                  View Project
                </a>
              </div>
            </div>

            {/* Trivia Game */}
            <div
              className="relative group overflow-hidden bg-[#3e424b] p-6 rounded-lg border border-white/20
      transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-black/20
      hover:border-white/40"
            >
              <div className="relative z-10">
                <h3 className="text-lg font-medium mb-2">Trivia Game</h3>
                <p className="text-sm text-white/90 mb-4">
                  A timed trivia quiz built with JavaScript, tracking correct,
                  incorrect, and unanswered questions.
                </p>
                <a
                  href="https://triviagame0.netlify.app/"
                  target="_blank"
                  className="text-lg px-3 py-1 rounded border border-[#3ba7a0] text-[#3ba7a0]
          hover:bg-[#3ba7a0] hover:text-black transition"
                >
                  View Project
                </a>
              </div>
            </div>

            {/* Giphy Search App */}
            <div
              className="relative group overflow-hidden bg-[#3e424b] p-6 rounded-lg border border-white/20
      transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-black/20
      hover:border-white/40"
            >
              <div className="relative z-10">
                <h3 className="text-lg font-medium mb-2">Giphy Search App</h3>
                <p className="text-sm text-white/90 mb-4">
                  A dynamic GIF search tool using the Giphy API to fetch and
                  display animated GIFs based on user input.
                </p>
                <a
                  href="https://giphygame.netlify.app/"
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
