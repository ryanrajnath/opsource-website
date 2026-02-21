import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services",
  description: "Comprehensive staffing and workforce solutions — traditional staffing, skilled trades, direct hire, and payroll services across the Southeast.",
};

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return children;
}
