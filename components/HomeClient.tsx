"use client";

import { FormEvent, useEffect, useRef, useState } from "react";
import Image, { StaticImageData } from "next/image";
import logoImage from "./Icon/WhatsApp Image 2026-04-08 at 01.37.13.jpeg";
import abbImage from "./Abb/IMG_0507.JPG.jpeg";
import abbImage3 from "./Abb/IMG_0265.JPG.jpeg";
import abbImage4 from "./Abb/IMG_0434.JPG.jpeg";
import portableImageA from "./Portable/WhatsApp Image 2026-04-20 at 20.55.57.png";
import portableImageB from "./Portable/WhatsApp Image 2026-04-20 at 20.57.01.png";
import teisonImageA from "./Teison/WhatsApp Image 2026-04-20 at 20.30.27.png";
import teisonImageB from "./Teison/WhatsApp Image 2026-04-20 at 20.31.00.png";
import teisonImageC from "./Teison/WhatsApp Image 2026-04-20 at 20.35.09.png";
import teisonImageD from "./Teison/WhatsApp Image 2026-04-20 at 20.39.25.png";

const VIDEO_ITEMS: {
  src: string;
  title: string;
  description: string;
}[] = [
  {
    src: "/videos/video1.mp4",
    title: "Wall Charger",
    description: "Instalasi wall charger 7kW dengan jalur kabel rapi dan sistem proteksi RCBO yang terintegrasi.",
  },
  {
    src: "/videos/video2.mp4",
    title: "Charger Portable",
    description: "Setup portable charger lengkap dengan proteksi listrik dan sistem grounding yang aman untuk pengisian harian",
  },
  {
    src: "/videos/video3.mp4",
    title: "Charger Portable",
    description: "Proses testing lengkap dan aktivasi sistem charging untuk memastikan keamanan dan performa maksimal.",
  },
];

const GALLERY_ITEMS: {
  src: StaticImageData;
  title: string;
  description: string;
  alt: string;
}[] = [
  {
    src: abbImage,
    title: "ABB Wallbox - Jakarta Selatan",
    description: "Instalasi wallbox rumah tinggal dengan jalur kabel tertutup rapi.",
    alt: "Instalasi ABB wallbox di area carport rumah",
  },
  {
    src: abbImage3,
    title: "ABB Charger - Jakarta Barat",
    description: "Unit ABB terpasang rapi dengan jalur kabel conduid dan grounding.",
    alt: "Charger ABB terpasang di dinding rumah",
  },
  {
    src: abbImage4,
    title: "ABB Wall Charger - Tangerang",
    description: "Finishing instalasi ABB dengan box panel dan proteksi RCBO 40A.",
    alt: "ABB wall charger siap pakai di rumah tinggal",
  },
  {
    src: portableImageA,
    title: "Portable Charger - Bekasi",
    description: "Setup portable charger lengkap dengan proteksi listrik dan grounding.",
    alt: "Pemasangan portable charger EV di rumah",
  },
  {
    src: portableImageB,
    title: "Portable Point - Tangerang",
    description: "Instalasi socket charging outdoor dengan pelindung waterproof.",
    alt: "Portable charging point di area luar rumah",
  },
  {
    src: teisonImageA,
    title: "Teison Wall Charger - Jakarta",
    description: "Unit Teison 7kW terpasang dan siap dipakai untuk pengisian harian.",
    alt: "Wall charger Teison terpasang di dinding",
  },
  {
    src: teisonImageB,
    title: "Teison Charger Siap Pakai - Depok",
    description: "Charger Teison dengan jalur kabel rapi dan sistem proteksi terintegrasi.",
    alt: "Charger Teison siap pakai di rumah tinggal",
  },
  {
    src: teisonImageC,
    title: "Teison Home Setup - Bogor",
    description: "Instalasi Teison lengkap dengan box MCB dan grounding, commissioning selesai.",
    alt: "Setup Teison home charger di Bogor",
  },
  {
    src: teisonImageD,
    title: "Teison Charger - Bekasi",
    description: "Unit Teison terpasang pada titik listrik eksisting, siap untuk pengisian EV.",
    alt: "Charger Teison terpasang dan siap pakai",
  },
];

export default function HomeClient() {
  const [message, setMessage] = useState("");
  const [currentSlide, setCurrentSlide] = useState(0);
  const [visibleCols, setVisibleCols] = useState(3);
  const [isHovered, setIsHovered] = useState(false);
  const [isPageVisible, setIsPageVisible] = useState(true);
  const touchStartX = useRef<number | null>(null);

  const services = [
    {
      title: "Home Charger",
      description:
        "Instalasi charger di rumah dengan jalur kabel aman dan estetis untuk pengisian harian.",
    },
    {
      title: "Instalasi Komersial",
      description:
        "Multi-unit charging untuk kantor, apartemen, dan bisnis dengan skema load management.",
    },
    {
      title: "Upgrade Panel Listrik",
      description:
        "Upgrade MCB/RCCB, penyesuaian daya, dan validasi panel agar aman serta andal.",
    },
  ];

  const processSteps = [
    {
      title: "Survey Teknis",
      description: "Audit panel, cek jalur kabel, dan simulasi kebutuhan daya.",
    },
    {
      title: "Rencana & Penawaran",
      description: "Anda menerima proposal kerja dan estimasi biaya transparan.",
    },
    {
      title: "Instalasi & Testing",
      description: "Pemasangan charger, proteksi listrik, lalu commissioning.",
    },
    {
      title: "Serah Terima",
      description: "Dokumentasi, edukasi penggunaan, dan aktivasi garansi layanan.",
    },
  ];

  const portfolios = [
    {
      title: "Rumah Tinggal - Jakarta Selatan",
      description: "Wallbox 7kW dengan kabel 15m, selesai dalam 1 hari kerja.",
    },
    {
      title: "Perumahan Cluster - Tangerang Selatan",
      description: "Instalasi portable charger dengan grounding dan proteksi RCBO di rumah cluster.",
    },
    {
      title: "Komplek Perumahan - Depok",
      description: "Pemasangan charger di 3 unit rumah dalam satu komplek, jalur kabel conduid rapi.",
    },
  ];

  const testimonials = [
    {
      quote:
        "Timnya responsif, instalasi rapi, dan semua dijelaskan dengan bahasa yang mudah dipahami. Charger langsung bisa dipakai di hari yang sama.",
      name: "Budi Prasetyo",
      role: "Pemilik Rumah Tinggal, Jakarta Selatan",
    },
    {
      quote:
        "Pasang di rumah cluster, pengerjaannya cepat dan bersih. Jalur kabelnya rapi banget, tidak merusak tembok.",
      name: "Dewi Rahayu",
      role: "Pemilik Rumah, Perumahan Cluster Tangerang Selatan",
    },
    {
      quote:
        "Awalnya khawatir ribet karena di komplek, ternyata tim M Power EV sudah berpengalaman. Koordinasinya lancar dan hasilnya memuaskan.",
      name: "Hendra Saputra",
      role: "Penghuni Komplek Perumahan, Depok",
    },
  ];

  useEffect(() => {
    const update = () => {
      if (window.innerWidth < 640) setVisibleCols(1);
      else if (window.innerWidth < 980) setVisibleCols(2);
      else setVisibleCols(3);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  useEffect(() => {
    setCurrentSlide((prev) => Math.min(prev, Math.max(0, GALLERY_ITEMS.length - visibleCols)));
  }, [visibleCols]);

  useEffect(() => {
    const onVisibilityChange = () => {
      setIsPageVisible(!document.hidden);
    };

    document.addEventListener("visibilitychange", onVisibilityChange);
    return () => {
      document.removeEventListener("visibilitychange", onVisibilityChange);
    };
  }, []);

  useEffect(() => {
    if (isHovered || !isPageVisible) {
      return;
    }

    const maxSlide = GALLERY_ITEMS.length - visibleCols;
    const id = window.setInterval(() => {
      setCurrentSlide((prev) => (prev >= maxSlide ? 0 : prev + 1));
    }, 4000);

    return () => window.clearInterval(id);
  }, [isHovered, isPageVisible, visibleCols]);

  useEffect(() => {
    const reveals = document.querySelectorAll<HTMLElement>(".reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    reveals.forEach((item) => observer.observe(item));

    return () => {
      reveals.forEach((item) => observer.unobserve(item));
      observer.disconnect();
    };
  }, []);

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const name = String(formData.get("name") ?? "");
    const phone = String(formData.get("phone") ?? "");
    const city = String(formData.get("city") ?? "");
    const vehicle = String(formData.get("vehicle") ?? "");
    const power = String(formData.get("power") ?? "");

    const targetNumber = "6285974737106";
    const text =
      "Halo M Power EV, saya ingin booking survey.\n\n" +
      `Nama: ${name}\n` +
      `No. WhatsApp: ${phone}\n` +
      `Kota: ${city}\n` +
      `Model Kendaraan EV: ${vehicle}\n` +
      `Daya Listrik: ${power}`;

    const waUrl = `https://wa.me/${targetNumber}?text=${encodeURIComponent(text)}`;
    window.location.href = waUrl;

    setMessage(`Terima kasih, ${name || "Pelanggan"}. Mengarahkan ke WhatsApp...`);
    event.currentTarget.reset();
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const prevSlide = () => {
    const maxSlide = GALLERY_ITEMS.length - visibleCols;
    setCurrentSlide((prev) => (prev <= 0 ? maxSlide : prev - 1));
  };

  const nextSlide = () => {
    const maxSlide = GALLERY_ITEMS.length - visibleCols;
    setCurrentSlide((prev) => (prev >= maxSlide ? 0 : prev + 1));
  };

  const onTouchStart = (event: React.TouchEvent<HTMLDivElement>) => {
    touchStartX.current = event.touches[0]?.clientX ?? null;
  };

  const onTouchEnd = (event: React.TouchEvent<HTMLDivElement>) => {
    if (touchStartX.current === null) {
      return;
    }

    const endX = event.changedTouches[0]?.clientX ?? touchStartX.current;
    const deltaX = touchStartX.current - endX;
    touchStartX.current = null;

    if (Math.abs(deltaX) < 45) {
      return;
    }

    if (deltaX > 0) {
      nextSlide();
      return;
    }

    prevSlide();
  };

  return (
    <>
      <div className="bg-grid" aria-hidden="true" />
      <div className="bg-glow bg-glow-left" aria-hidden="true" />
      <div className="bg-glow bg-glow-right" aria-hidden="true" />

      <header className="site-header">
        <div className="container nav-wrap">
          <a href="#" className="logo" aria-label="M Power EV Home">
            <span className="logo-mark">
              <Image
                src={logoImage}
                alt="M Power EV - Jasa Instalasi Charger Mobil Listrik"
                width={140}
                height={52}
                className="logo-image"
                priority
              />
            </span>
          </a>
          <nav className="nav-links">
            <a href="#layanan">Layanan</a>
            <a href="#paket">Paket</a>
            <a href="#portfolio">Portofolio</a>
            <a href="#video">Video</a>
            <a href="#faq">FAQ</a>
            <a href="#kontak">Kontak</a>
          </nav>
          <a className="btn btn-small" href="#kontak">
            Booking Survey
          </a>
        </div>
      </header>

      <main>
        <section className="hero section">
          <div className="container hero-grid">
            <div className="hero-copy reveal">
              <p className="eyebrow">Instalasi EV Charger Profesional</p>
              <h1>Jasa Instalasi Charger Mobil Listrik dan Grounding untuk Rumah dan Bisnis</h1>
              <p className="lead">
                Mulai dari survey lokasi, desain kelistrikan, instalasi charger, hingga testing dan
                commissioning. Seluruh proses mengikuti standar keselamatan dengan dokumentasi
                yang jelas.
              </p>
              <div className="hero-actions">
                <a className="btn" href="#kontak">
                  Konsultasi Gratis
                </a>
                <a className="btn btn-ghost" href="#paket">
                  Lihat Paket
                </a>
              </div>
              <div className="hero-stats">
                <article>
                  <h3>200+</h3>
                  <p>Instalasi selesai</p>
                </article>
                <article>
                  <h3>4.9/5</h3>
                  <p>Rating pelanggan</p>
                </article>
                <article>
                  <h3>1 Tahun</h3>
                  <p>Garansi instalasi</p>
                </article>
              </div>
            </div>

            <aside className="hero-panel reveal delay-1" aria-label="Ringkasan layanan">
              <p className="mini-head">Kenapa M Power EV</p>
              <h2>Lebih dari sekadar pasang charger, kami bangun sistem charging yang aman.</h2>
              <ul>
                <li>Teknisi berpengalaman EV charging</li>
                <li>Audit panel listrik dan proteksi sebelum instalasi</li>
                <li>Instalasi rapi, minim bongkar, siap pakai hari yang sama</li>
                <li>Garansi instalasi selama 1 tahun</li>
              </ul>
              <a href="#kontak" className="link-arrow">
                Ingin pasang cepat? Jadwalkan survey sekarang!
              </a>
            </aside>
          </div>
        </section>

        <section className="trust-strip section-compact">
          <div className="container trust-wrap reveal">
            <p>Dipercaya oleh pelanggan rumah tangga dan bisnis di berbagai kota:</p>
            <div className="trust-chips">
              <span className="trust-chip">Jakarta</span>
              <span className="trust-chip">Bogor</span>
              <span className="trust-chip">Tangerang</span>
              <span className="trust-chip">Depok</span>
              <span className="trust-chip">Bekasi</span>
            </div>
            <div className="trust-proof" aria-label="Keunggulan dan kepatuhan teknis">
              <span className="proof-badge">Teknisi Professional dan handal</span>
              <span className="proof-badge">SOP Instalasi Berstandar</span>
              <span className="proof-badge">Garansi Tertulis 1 Tahun</span>
            </div>
          </div>
        </section>

        <section id="layanan" className="section">
          <div className="container">
            <div className="section-head reveal">
              <p className="eyebrow">Layanan</p>
              <h2>Solusi End-to-End Instalasi Charger</h2>
            </div>
            <div className="cards">
              {services.map((service, index) => (
                <article key={service.title} className={`card reveal delay-${index + 1}`}>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section process-section">
          <div className="container">
            <div className="section-head reveal">
              <p className="eyebrow">Alur Kerja</p>
              <h2>Proses Instalasi yang Jelas dan Terkendali</h2>
            </div>
            <div className="process-grid">
              {processSteps.map((step, index) => (
                <article key={step.title} className="process-card reveal">
                  <p className="step-index">0{index + 1}</p>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="paket" className="section section-alt">
          <div className="container">
            <div className="section-head reveal">
              <p className="eyebrow">Harga Paket</p>
              <h2>Paket Transparan, Siap Disesuaikan</h2>
            </div>
            <div className="pricing-grid">
              <article className="price-card reveal delay-1">
                <h3>Charger Portable</h3>
                <p className="price">Mulai 1,8 Juta</p>
                <ul>
                  <li>RCBO</li>
                  <li>Box MCB</li>
                  <li>Kabel grounding 4 mm (10 meter)</li>
                  <li>Ground rod (1,5 meter)</li>
                  <li>Stop kontak Brocco</li>
                  <li>Pipa Conduid (5 Batang)</li>
                  <li>Free Kleman & shock sambung</li>
                  <li>Fleksible (3 Meter)</li>
                  <li>Gantungan Charger</li>
                </ul>
              </article>

              <article className="price-card reveal delay-2">
                <h3>Grounding</h3>
                <p className="price">Mulai dari 1 jutaan</p>
                <ul>
                  <li>Kabel Grounding 4 mm (10 meter)</li>
                  <li>Ground rod (1,5 meter)</li>
                  <li>Pipa Conduid</li>
                  <li>Free Kleman & shock sambung</li>
                  <li>Fleksible (3 Meter)</li>
                </ul>
              </article>

              <article className="price-card reveal delay-3">
                <h3>Instalasi Charger</h3>
                <h3>Paket 1 Chint</h3>
                <p className="price">Mulai 2 Jutaan</p>
                <ul>
                  <li>RCBO 40A</li>
                  <li>MCB 40A-50A</li>
                  <li>Box MCB (6 Group)</li>
                  <li>Kabel grounding 4 mm (10 Meter)</li>
                  <li>Ground rod (1,5 meter)</li>
                  <li>Kabel Tufur 3x6 (3 Meter)</li>
                  <li>Pipa Conduid</li>
                  <li>Free Kleman & shock sambung</li>
                  <li>Fleksible (3 Meter)</li>
                </ul>
              </article>

              <article className="price-card reveal delay-1">
                <h3>Instalasi Charger</h3>
                <h3>Paket 2 Schneider</h3>
                <p className="price">Mulai 2,6 Juta</p>
                <ul>
                  <li>RCBO 40A</li>
                  <li>MCB 40A</li>
                  <li>Box MCB (6 Group)</li>
                  <li>Kabel grounding 4 mm (10 Meter)</li>
                  <li>Ground rod (1,5 meter)</li>
                  <li>Kabel Tufur 3x6 (3 Meter)</li>
                  <li>Pipa Conduid</li>
                  <li>Free Kleman & shock sambung</li>
                  <li>Fleksible (3 Meter)</li>
                  <li>Stop kontak Brocco</li>

                </ul>
              </article>

              <article className="price-card reveal delay-3">
                <h3>Instalasi Charger</h3>
                <h3>Paket 3 Schneider 3 Phase</h3>
                <p className="price">Mulai 2,6 Juta</p>
                <ul>
                  <li>RCBO 40A</li>
                  <li>MCB 40A</li>
                  <li>Box MCB (6 Group)</li>
                  <li>Kabel grounding 4 mm (10 Meter)</li>
                  <li>Ground rod (1,5 meter)</li>
                  <li>Kabel Tufur 3x6 (3 Meter)</li>
                  <li>Pipa Conduid</li>
                  <li>Free Kleman & shock sambung</li>
                  <li>Fleksible (3 Meter)</li>
                  <li>Stop kontak Brocco</li>
                </ul>
              </article>

              <article className="price-card featured reveal delay-2">
                <p className="badge">Paling Populer</p>
                <h3>Instalasi Charger</h3>
                <h3>Paket All in 1</h3>
                <p className="price">Mulai 13,5 Juta</p>
                <ul>
                  <li>Charger Ecovolt (7kW)</li>
                  <li>KWh meter 7.700 VA (Jalur Udara ) </li>
                  <li>RCBO 40A</li>
                  <li>MCB 40A</li>
                  <li>Box MCB (6 Group)</li>
                  <li>Kabel grounding 4 mm (10 Meter)</li>
                  <li>Ground rod (1,5 meter)</li>
                  <li>Kabel Tufur 3x6 (3 Meter)</li>
                  <li>Pipa Conduid</li>
                  <li>Free Kleman & shock sambung</li>
                  <li>Fleksible (3 Meter)</li>
                </ul>
              </article>
            </div>
            <p className="pricing-note reveal">
              Harga final menyesuaikan hasil survey: jarak kabel, kondisi panel, dan kebutuhan daya
              lokasi.
            </p>
          </div>
        </section>

        <section id="portfolio" className="section">
          <div className="container">
            <div className="section-head reveal">
              <p className="eyebrow">Portofolio</p>
              <h2>Proyek Instalasi Terbaru</h2>
            </div>
            <div
              className="gallery-shell reveal delay-1"
              aria-label="Galeri proyek instalasi EV charger"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              onTouchStart={onTouchStart}
              onTouchEnd={onTouchEnd}
            >
              <div
                className="gallery-track"
                style={{ transform: `translateX(-${currentSlide * (100 / visibleCols)}%)` }}
              >
                {GALLERY_ITEMS.map((item, index) => (
                  <figure key={item.title} className="gallery-slide">
                    <Image
                      src={item.src}
                      alt={item.alt}
                      fill
                      className="gallery-image"
                      sizes="(max-width: 980px) 100vw, 1140px"
                      priority={index === 0}
                      placeholder="blur"
                      quality={100}
                    />
                    <figcaption className="gallery-caption">
                      <h3>{item.title}</h3>
                      <p>{item.description}</p>
                    </figcaption>
                  </figure>
                ))}
              </div>

              <div className="gallery-controls" aria-label="Kontrol carousel">
                <button type="button" className="carousel-btn" onClick={prevSlide} aria-label="Slide sebelumnya">
                  &#8249;
                </button>
                <button type="button" className="carousel-btn" onClick={nextSlide} aria-label="Slide berikutnya">
                  &#8250;
                </button>
              </div>

              <div className="gallery-dots" role="tablist" aria-label="Pilih slide galeri">
                {GALLERY_ITEMS.slice(0, GALLERY_ITEMS.length - visibleCols + 1).map((item, index) => (
                  <button
                    key={item.title}
                    type="button"
                    role="tab"
                    aria-selected={currentSlide === index}
                    aria-label={`Slide ${index + 1}: ${item.title}`}
                    className={`gallery-dot ${currentSlide === index ? "is-active" : ""}`}
                    onClick={() => goToSlide(index)}
                  />
                ))}
              </div>
            </div>
            <div className="project-grid">
              {portfolios.map((project, index) => (
                <article key={project.title} className={`project reveal delay-${index + 1}`}>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="video" className="section">
          <div className="container">
            <div className="section-head reveal">
              <p className="eyebrow">Video</p>
              <h2>Lihat Charger yang Sudah Terpasang</h2>
            </div>
            <div className="video-grid">
              {VIDEO_ITEMS.map((video, index) => (
                <div key={video.src} className={`video-card reveal delay-${index + 1}`}>
                  <div className="video-wrapper">
                    <video
                      controls
                      playsInline
                      preload="metadata"
                      aria-label={video.title}
                    >
                      <source src={video.src} type="video/mp4" />
                      Browser Anda tidak mendukung pemutaran video.
                    </video>
                  </div>
                  <div className="video-caption">
                    <h3>{video.title}</h3>
                    <p>{video.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section section-alt">
          <div className="container">
            <div className="section-head reveal">
              <p className="eyebrow">Testimoni</p>
              <h2>Apa Kata Klien Kami</h2>
            </div>
            <div className="testimonial-grid">
              {testimonials.map((testimonial, index) => (
                <article key={testimonial.name} className={`testimonial reveal delay-${index + 1}`}>
                  <p className="quote">&ldquo;{testimonial.quote}&rdquo;</p>
                  <p className="author">{testimonial.name}</p>
                  <p className="author-role">{testimonial.role}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="faq" className="section section-alt">
          <div className="container">
            <div className="section-head reveal">
              <p className="eyebrow">FAQ</p>
              <h2>Pertanyaan Umum</h2>
            </div>
            <div className="faq-list">
              <details className="reveal delay-1">
                <summary>Apakah perlu tambah daya listrik?</summary>
                <p>Tergantung kapasitas charger dan daya saat ini. Semua diverifikasi saat survey.</p>
              </details>
              <details className="reveal delay-2">
                <summary>Berapa lama proses instalasi?</summary>
                <p>Rata-rata 1-2 hari kerja, tergantung kompleksitas lokasi dan jalur kabel.</p>
              </details>
              <details className="reveal delay-3">
                <summary>Apakah ada garansi instalasi?</summary>
                <p>Ada, garansi instalasi hingga 1 tahun termasuk pengecekan teknis.</p>
              </details>
            </div>
          </div>
        </section>

        <section id="kontak" className="section">
          <div className="container contact-wrap">
            <div className="contact-copy reveal">
              <p className="eyebrow">Booking Survey</p>
              <h2>Konsultasi Gratis Sebelum Instalasi</h2>
              <p>
                Isi formulir berikut untuk mendapatkan estimasi biaya awal dan rekomendasi teknis.
                Tim kami akan menghubungi Anda melalui WhatsApp maksimal 24 jam.
              </p>
            </div>

            <form className="contact-form reveal delay-1" onSubmit={onSubmit}>
              <label htmlFor="name">Nama</label>
              <input id="name" name="name" type="text" placeholder="Nama lengkap" required />

              <label htmlFor="phone">Nomor WhatsApp</label>
              <input id="phone" name="phone" type="tel" placeholder="08xxxxxxxxxx" required />

              <label htmlFor="city">Kota</label>
              <input id="city" name="city" type="text" placeholder="Contoh: Jakarta" required />

              <label htmlFor="vehicle">Model Kendaraan EV</label>
              <input
                id="vehicle"
                name="vehicle"
                type="text"
                placeholder="Contoh: BYD Atto 3"
                required
              />

              <label htmlFor="power">Daya Listrik Saat Ini</label>
              <select id="power" name="power" required defaultValue="">
                <option value="" disabled>
                  Pilih daya
                </option>
                <option>2200 VA</option>
                <option>3500 VA</option>
                <option>4400 VA</option>
                <option>5500 VA</option>
                <option>Lebih dari 5500 VA</option>
              </select>

              <button type="submit" className="btn">
                Kirim Permintaan Survey
              </button>
              <p className="form-note" role="status" aria-live="polite">
                {message}
              </p>
            </form>
          </div>
        </section>

        <section className="section cta-section">
          <div className="container reveal">
            <div className="cta-band">
              <div>
                <p className="eyebrow">Mulai Sekarang</p>
                <h2>Siap Pasang Home Charger dengan Aman dan Cepat?</h2>
                <p className="cta-copy">
                  Ceritakan kebutuhan kendaraan dan lokasi Anda. Dapatkan estimasi biaya awal
                  dalam 24 jam dengan rekomendasi teknis yang sesuai kondisi listrik rumah Anda.
                </p>
              </div>
              <a href="#kontak" className="btn cta-button">
                Dapatkan Estimasi 24 Jam
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-wrap">
          <p>© 2026 M Power EV. Semua hak dilindungi.</p>
          <div className="footer-social">
            <a
              href="https://www.tiktok.com/@lana.w187?_r=1&_t=ZS-95hBL3Wi642"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="TikTok M Power EV"
              className="social-link"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.75a8.26 8.26 0 0 0 4.84 1.55V6.86a4.85 4.85 0 0 1-1.07-.17z"/>
              </svg>
              TikTok
            </a>
            <a
              href="https://www.facebook.com/share/1CpSLskQPk/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook M Power EV"
              className="social-link"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
              </svg>
              Facebook
            </a>
            <a
              href="https://www.instagram.com/mpowerevcharging?igsh=MXJsdGhrYzRsN2phNA=="
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram M Power EV"
              className="social-link"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
              </svg>
              Instagram
            </a>
            <a
              href="https://wa.me/6285974737106"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp M Power EV"
              className="social-link"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.117.554 4.103 1.523 5.824L.057 23.885a.5.5 0 0 0 .611.61l6.098-1.456A11.942 11.942 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.886 0-3.655-.523-5.168-1.432l-.361-.216-3.762.899.925-3.682-.236-.373A9.944 9.944 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
              </svg>
              WhatsApp
            </a>
          </div>
          <a href="#" aria-label="Kembali ke atas">
            Kembali ke atas
          </a>
        </div>
      </footer>
    </>
  );
}
