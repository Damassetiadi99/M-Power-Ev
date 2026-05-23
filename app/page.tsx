import type { Metadata } from "next";
import HomeClient from "../components/HomeClient";
import { BASE_URL, COMPANY_DESCRIPTION, COMPANY_NAME, COMPANY_PHONE, SERVICE_AREAS } from "./seo";

export const metadata: Metadata = {
  title: "Jasa Instalasi Charger Mobil Listrik untuk Rumah dan Bisnis",
  description:
    "Pasang home charger mobil listrik dengan survey teknis, grounding, proteksi panel, testing, dan garansi instalasi 1 tahun untuk area Jabodetabek.",
  alternates: {
    canonical: BASE_URL,
  },
  openGraph: {
    title: `${COMPANY_NAME} | Instalasi Charger Mobil Listrik Rumah dan Bisnis`,
    description: COMPANY_DESCRIPTION,
    url: BASE_URL,
  },
  twitter: {
    title: `${COMPANY_NAME} | Instalasi Charger Mobil Listrik Rumah dan Bisnis`,
    description: COMPANY_DESCRIPTION,
  },
};

const homeSchemas = [
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${BASE_URL}/#website`,
    url: BASE_URL,
    name: COMPANY_NAME,
    inLanguage: "id-ID",
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${BASE_URL}/#service`,
    serviceType: "Jasa instalasi charger mobil listrik",
    provider: {
      "@type": "LocalBusiness",
      name: COMPANY_NAME,
      telephone: COMPANY_PHONE,
      areaServed: SERVICE_AREAS,
    },
    areaServed: SERVICE_AREAS,
    availableChannel: {
      "@type": "ServiceChannel",
      serviceUrl: BASE_URL,
      servicePhone: COMPANY_PHONE,
    },
    offers: [
      {
        "@type": "Offer",
        name: "Instalasi charger portable",
        priceSpecification: {
          "@type": "PriceSpecification",
          priceCurrency: "IDR",
          minPrice: 1800000,
        },
      },
      {
        "@type": "Offer",
        name: "Instalasi grounding EV charger",
        priceSpecification: {
          "@type": "PriceSpecification",
          priceCurrency: "IDR",
          minPrice: 1000000,
        },
      },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${BASE_URL}/#faq`,
    mainEntity: [
      {
        "@type": "Question",
        name: "Apakah perlu tambah daya listrik?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Tergantung kapasitas charger dan daya saat ini. Semua kebutuhan daya diverifikasi saat survey teknis.",
        },
      },
      {
        "@type": "Question",
        name: "Berapa lama proses instalasi?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Rata-rata 1 sampai 2 hari kerja, tergantung kompleksitas lokasi dan panjang jalur kabel.",
        },
      },
      {
        "@type": "Question",
        name: "Apakah ada garansi instalasi?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Ada. M Power EV memberikan garansi instalasi hingga 1 tahun termasuk pengecekan teknis dasar.",
        },
      },
    ],
  },
];

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homeSchemas) }}
      />
      <HomeClient />
    </>
  );
}
