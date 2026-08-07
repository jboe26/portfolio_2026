import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";

export const metadata: Metadata = {
  title: "Joshua Boepple — Full Stack Developer",
  description: "Portfolio of Joshua Boepple",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-full flex flex-col">
        {/* Header & Nav */}
        <Navbar />
        {children}
        {/* Footer */}
      </body>
    </html>
  );
}
