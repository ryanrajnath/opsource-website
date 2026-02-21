import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with OpSource Staffing. Call, email, or visit us — we're here to help with all your staffing needs.",
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
