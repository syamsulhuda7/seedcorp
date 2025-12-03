// src/pages/RnD.jsx
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { useTranslation } from "react-i18next";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

/**
 * RnD Page
 * - Hero
 * - Lab gallery (Swiper)
 * - Workflow (steps)
 * - Our Experts (cards)
 * - Field Trials (gallery with modal slider)
 * - CTA
 *
 * Text content is read from i18n keys under `rnd.*`
 */
export default function RnD() {
  const { t } = useTranslation();
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  // Lab / facility images (Unsplash)
  const labImages = [
    "https://images.unsplash.com/photo-1581091215367-59ab6b901a91?q=80&w=1200",
    "https://images.unsplash.com/photo-1559757175-5700dde67548?q=80&w=1200",
    "https://images.unsplash.com/photo-1581591524425-c7e0978865a0?q=80&w=1200",
  ];

  // Field trials images (click to open lightbox)
  const trialImages = [
    "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?q=80&w=1200",
    "https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1200",
    "https://images.unsplash.com/photo-1496307042754-b4aa456c4a2d?q=80&w=1200",
    "https://images.unsplash.com/photo-1524594081293-190a2fe0baae?q=80&w=1200",
  ];

  // Experts (static, but labels pulled from i18n)
  const experts = [
    {
      name: t("rnd.experts.0.name") || "Dr. Ani Saputra",
      role: t("rnd.experts.0.role") || "Head of Genetics",
      bio:
        t("rnd.experts.0.bio") ||
        "Expert in plant breeding and molecular genetics.",
      img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=800",
    },
    {
      name: t("rnd.experts.1.name") || "Ir. Budi Santoso",
      role: t("rnd.experts.1.role") || "Field Trials Lead",
      bio:
        t("rnd.experts.1.bio") ||
        "Leads multi-site field trials and agronomy protocols.",
      img: "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=800",
    },
    {
      name: t("rnd.experts.2.name") || "Dr. Siti Rahma",
      role: t("rnd.experts.2.role") || "Quality Assurance",
      bio:
        t("rnd.experts.2.bio") ||
        "Quality control and seed certification specialist.",
      img: "https://images.unsplash.com/photo-1544006659-f0b21884ce1d?q=80&w=800",
    },
  ];

  // Workflow steps pulled from i18n (fallback if not defined)
  const workflow = t("rnd.workflow", { returnObjects: true }) || [
    {
      step: "01",
      title: "Germplasm Collection",
      desc: "Collecting superior parent material from trusted sources.",
    },
    {
      step: "02",
      title: "Hybridization",
      desc: "Crossing selected lines to combine best traits.",
    },
    {
      step: "03",
      title: "Field Trials",
      desc: "Multi-location trials to validate performance.",
    },
    {
      step: "04",
      title: "Quality Assurance",
      desc: "Seed testing, certification and scaling production.",
    },
  ];

  // open lightbox with starting index
  function openLightbox(idx = 0) {
    setLightboxIndex(idx);
    setLightboxOpen(true);
    document.documentElement.style.overflow = "hidden";
  }
  function closeLightbox() {
    setLightboxOpen(false);
    document.documentElement.style.overflow = "";
  }

  return (
    <div className="pt-16 bg-secondary dark:bg-[#0d0f0e] transition-colors duration-300">
      {/* HERO */}
      <section className="relative h-[48vh] md:h-[56vh] text-white flex items-center">
        {/* BACKGROUND */}
        <div className="absolute inset-0 bg-primary-dark" />

        {/* OVERLAY AGAR TEKS TERLIHAT DI LIGHT MODE */}
        <div className="absolute inset-0 bg-primary dark:bg-primary dark:opacity-70" />

        {/* DARK MODE GRADIENT */}
        <div className="absolute inset-0 hidden dark:block bg-linear-to-br from-primary to-primary-dark opacity-90" />

        {/* CONTENT */}
        <div className="relative max-w-6xl mx-auto px-6">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl md:text-4xl font-bold leading-tight text-white"
          >
            {t("rnd.hero.title") || "Research & Development"}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-3 max-w-2xl text-white/90"
          >
            {t("rnd.hero.subtitle") ||
              "We develop superior seed varieties by combining modern science with real-world trials."}
          </motion.p>

          <div className="mt-6 flex gap-3">
            {/* CTA 1 */}
            <a
              href="#labs"
              className="px-4 py-2 bg-white text-primary rounded-lg font-medium 
                  hover:bg-gray-100 hover:scale-[1.02] transition dark:hover:scale-[1.02] dark:bg-gray-100 dark:text-primary"
            >
              {t("rnd.cta.viewLabs") || "View Labs"}
            </a>

            {/* CTA 2 */}
            <a
              href="#workflow"
              className="px-4 py-2 border border-white/40 text-white rounded-lg 
                  hover:bg-white/10 hover:scale-[1.02] transition dark:border-gray-300 
                  dark:text-gray-100 dark:hover:scale-[1.02] dark:hover:text-primary"
            >
              {t("rnd.cta.workflow") || "Our Workflow"}
            </a>
          </div>
        </div>
      </section>

      {/* LAB GALLERY */}
      <section id="labs" className="py-10 scroll-mt-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl font-semibold text-primary mb-6">
            {t("rnd.labs.title") || "Laboratory & Facilities"}
          </h2>

          <Swiper
            modules={[Autoplay, Pagination]}
            autoplay={{ delay: 3500 }}
            pagination={{ clickable: true }}
            spaceBetween={16}
            slidesPerView={1}
            className="rounded-xl"
          >
            {labImages.map((src, i) => (
              <SwiperSlide key={i}>
                <div className="rounded-xl overflow-hidden shadow-lg">
                  <img
                    src={src}
                    alt={`lab-${i}`}
                    className="w-full h-72 object-cover"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* WORKFLOW */}
      <section
        id="workflow"
        className="py-12 bg-white dark:bg-[#111] transition-colors scroll-mt-16"
      >
        <div className="max-w-6xl mx-auto px-6">
          <h3 className="text-2xl font-semibold text-primary mb-6">
            {t("rnd.workflowTitle") || "Research Workflow"}
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {workflow.map((w, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="p-6 rounded-xl bg-card dark:bg-[#111] border border-gray-100 dark:border-gray-800 shadow-sm"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary text-white flex items-center justify-center font-semibold">
                    {w.step || String(idx + 1).padStart(2, "0")}
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg text-gray-900 dark:text-gray-100">
                      {w.title}
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">
                      {w.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* OUR EXPERTS */}
      <section className="py-12">
        <div className="max-w-6xl mx-auto px-6">
          <h3 className="text-2xl font-semibold text-primary mb-6">
            {t("rnd.expertsTitle") || "Our Experts"}
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {experts.map((ex, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="p-4 rounded-xl bg-card dark:bg-[#0f1112] border border-gray-100 dark:border-gray-800 shadow-sm"
              >
                <div className="flex items-center gap-4">
                  <img
                    src={ex.img}
                    alt={ex.name}
                    className="w-16 h-16 object-cover rounded-lg"
                  />
                  <div>
                    <div className="font-semibold text-gray-900 dark:text-gray-100">
                      {ex.name}
                    </div>
                    <div className="text-sm text-primary/90">{ex.role}</div>
                  </div>
                </div>

                <p className="mt-3 text-sm text-gray-600 dark:text-gray-300">
                  {ex.bio}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FIELD TRIALS (gallery grid + lightbox modal) */}
      <section className="py-12 bg-white dark:bg-[#111] transition-colors">
        <div className="max-w-6xl mx-auto px-6">
          <h3 className="text-2xl font-semibold text-primary mb-6">
            {t("rnd.trialsTitle") || "Field Trials"}
          </h3>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {trialImages.map((src, i) => (
              <motion.button
                key={i}
                onClick={() => openLightbox(i)}
                whileHover={{ scale: 1.02 }}
                className="rounded-lg overflow-hidden block"
                aria-label={`Open trial image ${i + 1}`}
              >
                <img
                  src={src}
                  alt={`trial-${i}`}
                  className="w-full h-40 object-cover"
                />
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <motion.h3
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-2xl font-bold text-primary"
          >
            {t("rnd.ctaTitle") || "Partner with our R&D team"}
          </motion.h3>
          <p className="mt-3 text-gray-600 dark:text-gray-300">
            {t("rnd.ctaText") ||
              "Interested in trials, licensing, or collaboration? Reach out to our R&D team."}
          </p>

          <div className="mt-6 flex justify-center gap-3">
            <a
              href="mailto:research@seedco.example"
              className="px-5 py-2 bg-primary text-white rounded-lg"
            >
              {t("rnd.ctaContact") || "Contact Research"}
            </a>
            <a
              href="/rnd/report.pdf"
              className="px-5 py-2 border border-primary text-primary rounded-lg"
            >
              {t("rnd.ctaReport") || "Download Report"}
            </a>
          </div>
        </div>
      </section>

      {/* ===== LIGHTBOX MODAL (FIELD TRIALS) ===== */}
      <AnimatePresence>
        {lightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
          >
            <div
              className="absolute inset-0 bg-black/60"
              onClick={closeLightbox}
            />
            <motion.div
              initial={{ y: 20, scale: 0.98 }}
              animate={{ y: 0, scale: 1 }}
              exit={{ y: 20, scale: 0.98 }}
              className="relative w-full max-w-4xl bg-modal rounded-2xl shadow-xl overflow-hidden"
            >
              <button
                onClick={closeLightbox}
                className="absolute top-3 right-3 z-20 w-9 h-9 rounded-full bg-black/10 dark:bg-white/10 flex items-center justify-center"
                aria-label="Close"
              >
                ✕
              </button>

              <Swiper
                initialSlide={lightboxIndex}
                modules={[Navigation, Pagination, Autoplay]}
                navigation
                pagination={{ clickable: true }}
                autoplay={{ delay: 4000 }}
                className="h-96"
              >
                {trialImages.map((src, i) => (
                  <SwiperSlide key={i}>
                    <img
                      src={src}
                      alt={`trial-full-${i}`}
                      className="w-full h-96 object-cover"
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
