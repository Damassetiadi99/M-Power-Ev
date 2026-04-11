import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Sora } from "next/font/google";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-body",
});

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-heading",
});

export const metadata: Metadata = {
  title: "M Power EV | Jasa Instalasi Charger Mobil Listrik",
  description:
    "Jasa instalasi charger mobil listrik profesional untuk rumah dan bisnis: survey, pemasangan, testing, dan after-sales support.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body className={`${plusJakartaSans.variable} ${sora.variable}`}>{children}</body>
    </html>
  );
}
