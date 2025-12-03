import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

export default function About() {
  const { t } = useTranslation();

  return (
    <div className="pt-20 bg-secondary dark:bg-[#0d0f0e] transition-colors duration-300">
      {/* ================= HEADER ABOUT ================= */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h1 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              {t("about.title")}
            </h1>

            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              {t("about.description")}
            </p>
          </motion.div>

          <motion.img
            src="https://images.unsplash.com/photo-1501004318641-b39e6451bec6?q=80&w=1200"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-xl shadow-lg"
          />
        </div>
      </section>

      {/* ================= VISION & MISSION ================= */}
      <section className="py-16 border-t border-gray-200 dark:border-gray-800">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-8 rounded-xl dark:bg-[#121412] bg-white shadow-lg border dark:border-gray-700"
          >
            <h2 className="text-xl font-bold text-primary mb-3">
              {t("about.visionTitle")}
            </h2>

            <p className="text-gray-700 dark:text-gray-300">
              {t("about.visionText")}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-8 rounded-xl dark:bg-[#121412] bg-white shadow-lg border dark:border-gray-700"
          >
            <h2 className="text-xl font-bold text-primary mb-3">
              {t("about.missionTitle")}
            </h2>

            <ul className="text-gray-700 dark:text-gray-300 space-y-2">
              {t("about.missionList", { returnObjects: true }).map(
                (item, i) => (
                  <li key={i}>• {item}</li>
                )
              )}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* ================= OUR STORY (TIMELINE) ================= */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-primary mb-10"
          >
            {t("about.ourJourneyTitle")}
          </motion.h2>

          <div className="relative space-y-12 pl-10">
            {/* Vertical Line */}
            <div className="absolute left-4 top-0 w-1 h-full bg-primary rounded-full"></div>

            {t("about.timeline", { returnObjects: true }).map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative"
              >
                {/* Bullet */}
                <div className="absolute -left-8 top-1.5 w-5 h-5 bg-primary rounded-full border-2 border-white dark:border-gray-900"></div>

                {/* Year */}
                <h3 className="font-bold text-lg text-gray-900 dark:text-gray-100">
                  {item.year}
                </h3>

                {/* Description */}
                <p className="text-gray-700 dark:text-gray-300 mt-1">
                  {item.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= R&D HIGHLIGHT ================= */}
      <section className="py-16 bg-secondary dark:bg-[#111] border-t border-gray-200 dark:border-gray-800">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
          <motion.img
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            src="https://images.unsplash.com/photo-1501004318641-b39e6451bec6?q=80&w=1200"
            className="rounded-xl shadow-lg"
          />

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-primary mb-4">
              {t("about.rndTitle")}
            </h2>

            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              {t("about.rndText")}
            </p>

            <button className="mt-6 px-6 py-3 bg-primary text-white rounded-xl hover:bg-primary-dark transition">
              {t("about.learnMore")}
            </button>
          </motion.div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-20 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-primary"
        >
          {t("about.ctaTitle")}
        </motion.h2>

        <motion.button
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-6 px-8 py-3 bg-primary text-white rounded-lg hover:bg-primary-dark transition"
        >
          {t("about.ctaButton")}
        </motion.button>
      </section>
    </div>
  );
}
