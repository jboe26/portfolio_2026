"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Home() {
  const router = useRouter();
  const [lines, setLines] = useState<string[]>([]);

  const newDate = new Date();
  const dateString = newDate.toLocaleString("en-US", {
    month: "short",
    day: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });

  const script = [
    `> Booting up... [${dateString}]`,
    "> Boot sequence complete.",
    "> Initializing portfolio...",
    "> Establishing secure connection...",
    "========================================",
    "Joshua Boepple — Full Stack Developer",
    "========================================",
    "Press ENTER to continue",
    "[ Tap here to continue ]",
  ];

  useEffect(() => {
    let i = 0;

    const interval = setInterval(() => {
      setLines((prev) => [...prev, script[i]]);
      i++;
      if (i === script.length) clearInterval(interval);
    }, 450);

    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Enter") router.push("/dashboard");
    };

    window.addEventListener("keydown", handleKey);

    return () => {
      clearInterval(interval);
      window.removeEventListener("keydown", handleKey);
    };
  }, [router]);

  return (
    <div className="min-h-screen bg-[#2f333a] text-[#3ba7a0] font-mono flex items-center justify-center px-6">
      <div className="w-full max-w-2xl text-left text-lg leading-relaxed">
        {lines.map((line, i) => (
          <div
            key={i}
            className={`opacity-0 animate-terminalLine ${
              typeof line === "string" && line.includes("Tap here")
                ? "cursor-pointer underline"
                : ""
            }`}
            onClick={() => {
              if (typeof line === "string" && line.includes("Tap here"))
                router.push("/dashboard");
            }}
          >
            {line}
          </div>
        ))}
      </div>

      <style>{`
        @keyframes terminalLine {
          from { opacity: 0; transform: translateY(4px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-terminalLine {
          animation: terminalLine 0.4s ease forwards;
        }
      `}</style>
    </div>
  );
}
