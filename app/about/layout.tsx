import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "Meet the OpSource Staffing team. Building connections between great people and great companies since day one.",
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return children;
}
