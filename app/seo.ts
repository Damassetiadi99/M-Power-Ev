export const BASE_URL = "https://www.mpowerev.com";

export const COMPANY_NAME = "M Power EV";

export const COMPANY_DESCRIPTION =
  "Jasa instalasi charger mobil listrik profesional untuk rumah dan bisnis di Jakarta, Bogor, Tangerang, Depok, dan Bekasi. Survey teknis, grounding, pemasangan wallbox, testing, dan garansi instalasi 1 tahun.";

export const COMPANY_PHONE = "+6285974737106";

export const SERVICE_AREAS = ["Jakarta", "Bogor", "Tangerang", "Depok", "Bekasi"];

export type ProductCatalogItem = {
  slug: string;
  title: string;
  brand: string;
  category: string;
  description: string;
  priceLabel: string;
  priceValue: number;
  badge: string;
  stockLabel: string;
  ratingLabel: string;
  soldLabel: string;
  marketplaceNote: string;
  specs: Array<{ label: string; value: string }>;
  features: string[];
};

export const PRODUCT_CATALOG: ProductCatalogItem[] = [
  {
    slug: "abb-wallbox",
    title: "ABB Wallbox",
    brand: "ABB",
    category: "EV Charger",
    description:
      "Wall charger premium untuk rumah dan area komersial ringan dengan finishing instalasi rapi dan sistem proteksi lengkap.",
    priceLabel: "Mulai Rp 11,9 Juta",
    priceValue: 11900000,
    badge: "Best Seller",
    stockLabel: "Ready Stock Terbatas",
    ratingLabel: "4.9/5",
    soldLabel: "120+ pemasangan",
    marketplaceNote: "Harga unit dapat disesuaikan dengan kebutuhan instalasi dan panjang kabel.",
    specs: [
      { label: "Daya", value: "7kW" },
      { label: "Tipe", value: "Wall Mounted" },
      { label: "Connector", value: "Type 2" },
      { label: "Garansi", value: "1 Tahun" },
    ],
    features: [
      "Desain premium untuk rumah modern",
      "Cocok untuk charging harian yang stabil",
      "Bisa dipaketkan dengan RCBO, grounding, dan box panel",
    ],
  },
  {
    slug: "portable-charger",
    title: "Portable Charger",
    brand: COMPANY_NAME,
    category: "EV Charger",
    description:
      "Charger portable untuk kebutuhan harian yang fleksibel, mudah dipindah, dan aman dipakai untuk rumah maupun perjalanan.",
    priceLabel: "Mulai Rp 1,8 Juta",
    priceValue: 1800000,
    badge: "Harga Hemat",
    stockLabel: "Ready Stock",
    ratingLabel: "4.8/5",
    soldLabel: "200+ unit diminati",
    marketplaceNote: "Bisa ditambah grounding, socket khusus, dan paket instalasi sesuai kondisi rumah.",
    specs: [
      { label: "Daya", value: "Portable" },
      { label: "Pemakaian", value: "Rumah & Mobile" },
      { label: "Proteksi", value: "Opsional RCBO" },
      { label: "Garansi", value: "1 Tahun" },
    ],
    features: [
      "Praktis untuk pengguna EV baru",
      "Mudah dibawa dan dipakai di beberapa lokasi",
      "Bisa dipaketkan dengan socket outdoor waterproof",
    ],
  },
  {
    slug: "teison-wall-charger",
    title: "Teison Wall Charger",
    brand: "Teison",
    category: "EV Charger",
    description:
      "Wall charger modern untuk pengguna EV yang menginginkan pengisian stabil, tampilan bersih, dan setup yang siap pakai.",
    priceLabel: "Mulai Rp 15,5 Juta",
    priceValue: 15500000,
    badge: "Premium Choice",
    stockLabel: "Preorder Cepat",
    ratingLabel: "4.9/5",
    soldLabel: "90+ instalasi",
    marketplaceNote: "Ideal untuk paket all-in dengan KWh meter, grounding, dan box panel instalasi.",
    specs: [
      { label: "Daya", value: "7kW" },
      { label: "Tipe", value: "Wall Mounted" },
      { label: "Connector", value: "Type 2" },
      { label: "Garansi", value: "1 Tahun" },
    ],
    features: [
      "Tampilan modern dan rapi di dinding rumah",
      "Cocok untuk home charging intensif",
      "Kompatibel dengan skema instalasi lengkap M Power EV",
    ],
  },
];