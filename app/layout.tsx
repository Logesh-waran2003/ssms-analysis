import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-heading",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "SSMS — Srimathi Sundaravalli Memorial School | CBSE School Chennai",
  description:
    "Srimathi Sundaravalli Memorial School — CBSE affiliated school in New Perungalathur, Chennai. Merit-based admissions, no donation fee. Admissions open for 2026–27.",
  keywords:
    "CBSE school Chennai, school admission Perungalathur, SSMS school, New Perungalathur school",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${cormorant.variable} ${dmSans.variable}`}>
      <body>{children}</body>
    </html>
  );
}
