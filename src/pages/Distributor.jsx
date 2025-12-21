import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import MapComponent from "../components/MapComponent";

export default function Distributor() {
  const { t } = useTranslation();

  const distributors = [
    {
      name: t("distributor.list.0.name"),
      region: t("distributor.list.0.region"),
      img: "/images/dist1.jpg",
      coords: [-7.872, 112.528], // Jawa Timur (contoh)
    },
    {
      name: t("distributor.list.1.name"),
      region: t("distributor.list.1.region"),
      img: "/images/dist2.jpg",
      coords: [-5.134, 119.412], // Sulawesi Selatan
    },
    {
      name: t("distributor.list.2.name"),
      region: t("distributor.list.2.region"),
      img: "/images/dist3.jpg",
      coords: [-0.026, 109.342], // Kalimantan Barat
    },
  ];

  return (
    <div className="pt-16 bg-dark">
      {/* ===== HERO ===== */}
      <section
        className="
        h-[48vh] md:h-[55vh]
        bg-linear-to-br from-yellow-500 to-yellow-600
        dark:from-yellow-800 dark:to-yellow-900
        text-white flex items-center
      "
      >
        <div className="max-w-6xl mx-auto px-6">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-5xl font-bold drop-shadow-lg"
          >
            {t("distributor.hero.title")}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="mt-4 max-w-2xl text-white/95 text-lg"
          >
            {t("distributor.hero.subtitle")}
          </motion.p>

          <a
            href="#map"
            className="inline-block mt-6 bg-white text-yellow-700 font-medium 
              px-5 py-2 rounded-lg shadow hover:bg-gray-100 
              dark:bg-gray-100 dark:text-yellow-900"
          >
            {t("distributor.hero.cta")}
          </a>
        </div>
      </section>

      {/* ===== DISTRIBUTOR LIST ===== */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl font-bold mb-8 text-gray-900 dark:text-white">
            {t("distributor.section.title")}
          </h2>

          <div className="grid md:grid-cols-3 gap-7">
            {distributors.map((d, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="rounded-xl overflow-hidden shadow-lg bg-white dark:bg-gray-800"
              >
                <img
                  src={d.img}
                  className="w-full h-44 object-cover"
                  alt={d.name}
                />

                <div className="p-5">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    {d.name}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">{d.region}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== MAP ===== */}
      <section
        id="map"
        className="scroll-mt-20 py-16 bg-white dark:bg-gray-950"
      >
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
            {t("distributor.map.title")}
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mb-6">
            {t("distributor.map.desc")}
          </p>

          <div className="relative z-1 rounded-xl overflow-hidden shadow-lg h-[400px]">
            <MapComponent markers={distributors} />
          </div>
        </div>
      </section>

      {/* ===== BECOME DISTRIBUTOR CTA ===== */}
      <section className="py-16 bg-gray-100 dark:bg-gray-900">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-2xl font-bold text-gray-900 dark:text-white"
          >
            {t("distributor.join.title")}
          </motion.h3>

          <p className="mt-3 text-gray-600 dark:text-gray-300">
            {t("distributor.join.desc")}
          </p>

          <a
            href="mailto:info@company.com"
            className="inline-block mt-6 bg-yellow-600 hover:bg-yellow-700 
            text-white px-6 py-3 rounded-lg shadow"
          >
            {t("distributor.join.button")}
          </a>
        </div>
      </section>
    </div>
  );
}
