import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Sora } from "next/font/google";
import logoImage from "../components/Icon/WhatsApp Image 2026-04-08 at 01.37.13.jpeg";
import "./globals.css";
import { BASE_URL, COMPANY_DESCRIPTION, COMPANY_NAME, COMPANY_PHONE, SERVICE_AREAS } from "./seo";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-body",
});

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-heading",
});

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  applicationName: COMPANY_NAME,
  title: {
    default: `${COMPANY_NAME} | Jasa Instalasi Charger Mobil Listrik`,
    template: `%s | ${COMPANY_NAME}`,
  },
  description: COMPANY_DESCRIPTION,
  keywords: [
    "jasa instalasi charger mobil listrik",
    "pasang EV charger rumah",
    "instalasi wallbox Jakarta",
    "grounding EV",
    "charger ABB Teison portable",
    "jasa pasang home charger mobil listrik",
    "instalasi EV charger Jabodetabek",
    COMPANY_NAME,
  ],
  authors: [{ name: "M Power EV" }],
  creator: COMPANY_NAME,
  publisher: COMPANY_NAME,
  category: "Automotive Services",
  referrer: "origin-when-cross-origin",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: BASE_URL,
  },
  icons: {
    icon: [
      {
        url: logoImage.src,
        type: "image/jpeg",
      },
    ],
    shortcut: [logoImage.src],
    apple: [
      {
        url: logoImage.src,
        type: "image/jpeg",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: BASE_URL,
    siteName: COMPANY_NAME,
    title: `${COMPANY_NAME} | Jasa Instalasi Charger Mobil Listrik`,
    description: COMPANY_DESCRIPTION,
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: `${COMPANY_NAME} - Jasa Instalasi Charger Mobil Listrik Profesional`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${COMPANY_NAME} | Jasa Instalasi Charger Mobil Listrik`,
    description: COMPANY_DESCRIPTION,
    images: ["/opengraph-image"],
  },
};

const schemaOrg = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${BASE_URL}/#organization`,
  name: COMPANY_NAME,
  description: COMPANY_DESCRIPTION,
  url: BASE_URL,
  telephone: COMPANY_PHONE,
  areaServed: SERVICE_AREAS,
  serviceType: "EV Charger Installation",
  priceRange: "Rp 1.000.000 - Rp 5.000.000",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "200",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Paket Instalasi EV Charger",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Charger Portable" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Grounding" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Instalasi Wallbox" } },
    ],
  },
  sameAs: [
    "https://www.instagram.com/mpowerevcharging?igsh=MXJsdGhrYzRsN2phNA==",
    "https://www.tiktok.com/@lana.w187?_r=1&_t=ZS-95hBL3Wi642",
    "https://www.facebook.com/share/1CpSLskQPk/",
    "https://wa.me/6285974737106",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrg) }}
        />
      </head>
      <body className={`${plusJakartaSans.variable} ${sora.variable}`}>{children}</body>
    </html>
  );
}
