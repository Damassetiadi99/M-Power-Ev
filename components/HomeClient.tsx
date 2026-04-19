"use client";

import { FormEvent, useEffect, useRef, useState } from "react";
import Image, { StaticImageData } from "next/image";
import logoImage from "./Icon/WhatsApp Image 2026-04-08 at 01.37.13.jpeg";
import abbImage from "./Abb/WhatsApp Image 2026-04-14 at 12.36.53.jpeg";
import portableImageA from "./Portable/WhatsApp Image 2026-04-11 at 19.49.31.jpeg";
import portableImageB from "./Portable/WhatsApp Image 2026-04-11 at 19.49.29.jpeg";
import teisonImageA from "./Teison/WhatsApp Image 2026-04-11 at 19.49.31.jpeg";
import teisonImageB from "./Teison/WhatsApp Image 2026-04-11 at 19.49.28.jpeg";
import spcImage from "./Spc/WhatsApp Image 2026-04-13 at 22.33.28.jpeg";

const GALLERY_ITEMS: {
  src: StaticImageData;
  title: string;
  description: string;
  alt: string;
}[] = [
  {
    src: abbImage,
    title: "ABB Wallbox - Bandung",
    description: "Instalasi wallbox rumah tinggal dengan jalur kabel tertutup rapi.",
    alt: "Instalasi ABB wallbox di area carport rumah",
  },
  {
    src: portableImageA,
    title: "Portable Charger - Bekasi",
    description: "Setup portable charger lengkap dengan proteksi listrik dan grounding.",
    alt: "Pemasangan portable charger EV di rumah",
  },
  {
    src: teisonImageA,
    title: "Teison Charger - Jakarta",
    description: "Commissioning unit charger dengan validasi arus dan keamanan panel.",
    alt: "Charger Teison terpasang di dinding parkiran",
  },
  {
    src: spcImage,
    title: "SPC Charger - Surabaya",
    description: "Finishing instalasi dengan box MCB dan conduit yang minim bongkar.",
    alt: "Pemasangan charger SPC dengan jalur kabel conduit",
  },
  {
    src: teisonImageB,
    title: "Teison Home Setup - Depok",
    description: "Integrasi charger dengan titik listrik eksisting untuk pemakaian harian.",
    alt: "Setup charger mobil listrik Teison untuk rumah",
  },
  {
    src: portableImageB,
    title: "Portable Point - Tangerang",
    description: "Instalasi socket charging outdoor dengan pelindung waterproof.",
    alt: "Portable charging point di area luar rumah",
  },
];

export default function HomeClient() {
  const [message, setMessage] = useState("");
  const [currentSlide, setCurrentSlide] = useState(0);
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
      title: "Rumah Tinggal - Bandung",
      description: "Wallbox 7kW dengan kabel 15m, selesai dalam 1 hari kerja.",
    },
    {
      title: "Kantor - Jakarta Selatan",
      description: "4 unit charger 22kW dengan load balancing untuk operasional harian.",
    },
    {
      title: "Apartemen - Surabaya",
      description: "Integrasi panel lantai parkir dengan sistem proteksi tambahan.",
    },
  ];

  const testimonials = [
    {
      quote:
        "Timnya responsif, instalasi rapi, dan semua dijelaskan dengan bahasa yang mudah dipahami.",
      name: "Budi Prasetyo",
      role: "Pemilik EV, Jakarta",
    },
    {
      quote:
        "Kami pasang beberapa unit untuk kantor. Prosesnya terstruktur dan minim gangguan operasional.",
      name: "Nina Kartika",
      role: "Facility Manager, Bandung",
    },
    {
      quote:
        "Kualitas pengerjaan profesional dan after-sales support-nya benar-benar membantu.",
      name: "Rian Suryana",
      role: "Pengelola Apartemen, Surabaya",
    },
  ];

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

    const id = window.setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % GALLERY_ITEMS.length);
    }, 4000);

    return () => window.clearInterval(id);
  }, [isHovered, isPageVisible]);

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
    setCurrentSlide((prev) => (prev - 1 + GALLERY_ITEMS.length) % GALLERY_ITEMS.length);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % GALLERY_ITEMS.length);
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
            <span className="logo-mark" aria-hidden="true">
              <Image
                src={logoImage}
                alt="M Power EV Logo"
                width={32}
                height={32}
                style={{ borderRadius: "8px", objectFit: "cover" }}
              />
            </span>
            <span>M Power EV</span>
          </a>
          <nav className="nav-links">
            <a href="#layanan">Layanan</a>
            <a href="#paket">Paket</a>
            <a href="#portfolio">Portofolio</a>
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
                  <h3>500+</h3>
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
              <span className="proof-badge">Teknisi Bersertifikat K3</span>
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
                <p className="price">Mulai 2 Jutaan</p>
                <ul>
                  <li>RCBO</li>
                  <li>Box MCB</li>
                  <li>Kabel grounding 4 mm</li>
                  <li>Ground rod 1,5 meter</li>
                  <li>Stop kontak single socket outbow waterproof</li>
                  <li>Pipa conduit dan aksesoris</li>
                </ul>
              </article>

              <article className="price-card reveal delay-2">
                <h3>Grounding</h3>
                <p className="price">Mulai dari 1 jutaan</p>
                <ul>
                  <li>Kabel</li>
                  <li>Ground rod 1,5 meter</li>
                  <li>Pipa conduit</li>
                </ul>
              </article>

              <article className="price-card reveal delay-3">
                <h3>Instalasi Charger</h3>
                <h3>Paket 1</h3>
                <p className="price">Mulai 2 Jutaan</p>
                <ul>
                  <li>RCBO</li>
                  <li>Box MCB 40A/50A</li>
                  <li>Kabel grounding 4 mm</li>
                  <li>Kabel feeder 3x6</li>
                  <li>Ground rod 1,5 meter</li>
                  <li>Stop kontak single socket outbow waterproof</li>
                  <li>Pipa conduit dan aksesoris</li>
                </ul>
              </article>

              <article className="price-card reveal delay-1">
                <h3>Instalasi Charger</h3>
                <h3>Paket 2</h3>
                <p className="price">Mulai 2,6 Juta</p>
                <ul>
                  <li>RCBO</li>
                  <li>Box MCB 40A/50A</li>
                  <li>Kabel grounding 4 mm</li>
                  <li>Kabel feeder 3x6</li>
                  <li>Ground rod 1,5 meter</li>
                  <li>Stop kontak single socket outbow waterproof</li>
                  <li>Pipa conduit dan aksesoris</li>
                </ul>
              </article>

              <article className="price-card featured reveal delay-2">
                <p className="badge">Paling Populer</p>
                <h3>Instalasi Charger</h3>
                <h3>Paket All in 1</h3>
                <p className="price">Mulai 13 Juta</p>
                <ul>
                  <li>RCBO</li>
                  <li>Box MCB 40A/50A</li>
                  <li>Kabel grounding 4 mm</li>
                  <li>KWh meter 7.700 VA</li>
                  <li>Kabel feeder 3x6</li>
                  <li>Ground rod 1,5 meter</li>
                  <li>Stop kontak single socket outbow waterproof</li>
                  <li>Pipa conduit dan aksesoris</li>
                </ul>
              </article>

              <article className="price-card reveal delay-3">
                <h3>Instalasi Charger</h3>
                <h3>Paket All in 2</h3>
                <p className="price">Mulai 17 Juta</p>
                <ul>
                  <li>RCBO</li>
                  <li>Box MCB 40A/50A</li>
                  <li>Kabel grounding 4 mm</li>
                  <li>KWh meter 7.700 VA</li>
                  <li>Kabel feeder 3x6</li>
                  <li>Ground rod 1,5 meter</li>
                  <li>Stop kontak single socket outbow waterproof</li>
                  <li>Pipa conduif dan aksesoris</li>
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
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
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
                {GALLERY_ITEMS.map((item, index) => (
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
          <a href="#" aria-label="Kembali ke atas">
            Kembali ke atas
          </a>
        </div>
      </footer>
    </>
  );
}
