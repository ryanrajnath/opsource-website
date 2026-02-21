import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Locations",
  description: "10 branches across SC, NC, and TN. Find your nearest OpSource Staffing office and connect with a local recruiter today.",
};

export default function LocationsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
