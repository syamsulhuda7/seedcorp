import { useTranslation } from "react-i18next";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { motion } from "framer-motion";
import PRODUCTS from "../data/products";

import "swiper/css";
import "swiper/css/pagination";
import ProductModal from "../components/ProductModal";
import { useState } from "react";

export default function Home() {
  const { t } = useTranslation();
  const [selectedProduct, setSelectedProduct] = useState(null);

  return (
    <div className="pt-16 bg-white dark:bg-[#0d0f11] transition-colors">
      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}

      {/* ================= HERO ================= */}
      <section className="h-[65vh] max-h-[520px]">
        <Swiper
          modules={[Autoplay]}
          autoplay={{ delay: 4000 }}
          pagination={{ clickable: true }}
          slidesPerView={1}
          loop={true}
          className="h-full"
        >
          {[
            "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?q=80&w=1600",
            "https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1600",
            "https://images.unsplash.com/photo-1496307042754-b4aa456c4a2d?q=80&w=1600",
            "https://images.unsplash.com/photo-1482192596544-9eb780fc7f66?q=80&w=1600",
            "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?q=80&w=1600",
          ].map((url, i) => (
            <SwiperSlide key={i}>
              <div
                className="relative h-full w-full bg-cover bg-center"
                style={{ backgroundImage: `url('${url}')` }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>

                <div className="absolute bottom-6 left-6 max-w-3xl">
                  <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl md:text-5xl font-bold text-white text-left p-8 drop-shadow-lg"
                  >
                    {t(`hero.title${i + 1}`)}
                  </motion.h1>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      {/* ================= ABOUT ================= */}
      <section className="py-16 bg-secondary dark:bg-[#131619] transition-colors">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-primary">
              Certified & Trusted Seeds
            </h2>

            <p className="mt-3 text-gray-700 dark:text-gray-300 leading-relaxed">
              Our company ensures the highest-quality seeds through strict R&D,
              professional cultivation management, and international
              certification.
            </p>

            <button className="mt-5 px-6 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark transition">
              Learn More
            </button>
          </motion.div>

          <motion.img
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            src="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=1000"
            className="rounded-xl shadow-lg"
          />
        </div>
      </section>

      {/* ================= FEATURED ================= */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h3 className="text-3xl font-semibold mb-10 text-primary">
            Featured Seeds
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {PRODUCTS.slice(0, 3).map((p) => (
              <motion.div
                key={p.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                onClick={() => setSelectedProduct(p)}
                className="rounded-xl overflow-hidden shadow-lg 
            dark:bg-[#111] bg-white 
            border border-gray-200 dark:border-gray-700 
            hover:shadow-2xl hover:-translate-y-1 
            transition group cursor-pointer"
              >
                <div className="overflow-hidden">
                  <img
                    src={p.images[0]}
                    className="w-full h-44 object-cover group-hover:scale-110 transition duration-500"
                  />
                </div>

                <div className="p-5">
                  <h4 className="font-semibold text-lg text-primary">
                    {p.name}
                  </h4>
                  <p className="text-sm mt-2 text-gray-600 dark:text-gray-300">
                    {p.short}
                  </p>

                  <button className="mt-4 text-primary border border-primary px-4 py-1 rounded-full hover:bg-primary hover:text-white transition">
                    View Details
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= WHY CHOOSE US ================= */}
      <section className="py-16 bg-secondary dark:bg-[#131619] transition-colors">
        <div className="max-w-6xl mx-auto px-6">
          <h3 className="text-3xl font-semibold text-primary mb-10">
            Why Choose Us?
          </h3>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10">
            {[
              {
                title: "Certified Production",
                desc: "Trusted seed quality with strict certification.",
              },
              {
                title: "Advanced R&D",
                desc: "Continuous research for better crop performance.",
              },
              {
                title: "Wide Distribution",
                desc: "Supply chain across Indonesia.",
              },
              {
                title: "High Yield",
                desc: "Consistently higher productivity results.",
              },
              {
                title: "Pest Resistant",
                desc: "Improved genetic resistance for stronger crops.",
              },
              {
                title: "Affordable Prices",
                desc: "Quality seeds with competitive pricing.",
              },
            ].map((f, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="p-6 bg-white dark:bg-[#111] rounded-xl shadow 
                border border-gray-200 dark:border-gray-700"
              >
                <h4 className="font-semibold text-primary">{f.title}</h4>

                <p className="text-sm mt-2 text-gray-600 dark:text-gray-300">
                  {f.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-16 text-center bg-white dark:bg-[#0d0f11]">
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-primary"
        >
          Ready To Improve Your Harvest?
        </motion.h2>

        <motion.button
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-6 px-8 py-3 bg-primary text-white rounded-xl hover:bg-primary-dark transition"
        >
          Contact Us
        </motion.button>
      </section>
    </div>
  );
}
