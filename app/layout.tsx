import type { Metadata } from "next";
import { inter, plusJakartaSans, jetbrainsMono } from "@/lib/fonts";
import { LanguageProvider } from "@/context/LanguageContext";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ScrollProgress } from "@/components/layout/ScrollProgress";
import { ScrollToTop } from "@/components/layout/ScrollToTop";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "OpSource Staffing — Your Source of Opportunity",
    template: "%s — OpSource Staffing",
  },
  description:
    "Connecting businesses with exceptional talent across the Southeast. Whether you're looking for your next career move or need reliable workforce solutions, OpSource is your trusted partner.",
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "OpSource Staffing",
    title: "OpSource Staffing — Your Source of Opportunity",
    description:
      "Connecting businesses with exceptional talent across the Southeast.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${plusJakartaSans.variable} ${jetbrainsMono.variable} scroll-smooth`}
    >
      <body className="bg-white antialiased">
        <LanguageProvider>
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[200] focus:bg-navy-deep focus:text-white focus:px-4 focus:py-2 focus:rounded-lg"
          >
            Skip to content
          </a>
          <ScrollProgress />
          <Navbar />
          <main id="main-content" className="pb-20 lg:pb-0">{children}</main>
          <Footer />
          <ScrollToTop />
        </LanguageProvider>
      </body>
    </html>
  );
}
