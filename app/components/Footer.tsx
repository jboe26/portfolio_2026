export default function Footer() {
  return (
    <footer className="border-t border-white/20 py-6">
      <p className="text-sm text-white/60 text-center">
        {new Date().getFullYear()} Joshua Boepple - Full Stack Developer
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
  );
}
