import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact — Joshua Boepple",
  description:
    "Get in touch with Joshua Boepple for freelance work, collaborations, or full-time opportunities.",
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
