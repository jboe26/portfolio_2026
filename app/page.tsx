"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Enter") {
        router.push("/dashboard");
      }
    };

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [router]);

  const handleEnter = () => {
    router.push("/dashboard");
  };

  return (
    <div className="min-h-screen bg-[#2f333a] flex flex-col items-center justify-center">
      <p className="text-[#fff] text-xs tracking-[0.3em] mb-12">
        PORTFOLIO 2026
      </p>
      <h1 className="text-white text-7xl font-extrabold text-center leading-tight">
        Joshua
        <br />
        Boepple
      </h1>
      <p className="text-[#3ba7a0] text-lg mt-6">Full Stack Developer</p>
      <div className="w-8 h-px bg-[#333] my-10"></div>
      <div className="flex items-center gap-3 text-[#555] text-ss tracking-[0.15em]">
        <button
          onClick={handleEnter}
          className="text-white border border-[#3ba7a0] px-3 py-1 rounded 
             hover:bg-[#3ba7a0] hover:text-black active:scale-95 transition"
        >
          ENTER
        </button>

        <span className="text-white">to continue</span>
      </div>
    </div>
  );
}
