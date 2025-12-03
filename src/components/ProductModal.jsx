import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function ProductModal({ product, onClose }) {
  if (!product) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm bg-black/40 p-4"
      >
        {/* Close area */}
        <div className="absolute inset-0" onClick={onClose}></div>

        {/* Modal */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 20, opacity: 0 }}
          className="
            relative w-full max-w-4xl rounded-2xl overflow-hidden 
            bg-white dark:bg-[#0f0f0f] shadow-xl border border-white/20 dark:border-white/10
          "
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="
              absolute top-3 right-3 z-10 
              w-9 h-9 flex items-center justify-center
              rounded-full bg-black/10 dark:bg-white/10 
              hover:bg-black/20 dark:hover:bg-white/20 
              backdrop-blur-sm text-black dark:text-white
            "
          >
            ✕
          </button>

          {/* Header */}
          <div className="p-6 border-b border-black/5 dark:border-white/10">
            <h3 className="font-semibold text-xl text-neutral-800 dark:text-neutral-200">
              {product.name}
            </h3>

            <p className="text-sm text-black/60 dark:text-white/60 mt-1">
              {product.short}
            </p>
          </div>

          {/* Content */}
          <div className="grid md:grid-cols-2 gap-6 p-6">
            {/* Slider */}
            <div>
              <Swiper
                modules={[Navigation, Pagination]}
                navigation
                pagination={{ clickable: true }}
                className="rounded-xl overflow-hidden shadow-sm"
              >
                {product.images.map((img, i) => (
                  <SwiperSlide key={i}>
                    <img src={img} className="w-full h-72 object-cover" />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>

            {/* Details */}
            <div className="flex flex-col justify-between">
              <div>
                <h4 className="font-medium text-lg mb-3 text-primary">
                  Specifications
                </h4>

                <div className="grid grid-cols-2 gap-3">
                  {Object.entries(product.specs).map(([key, val], i) => (
                    <div
                      key={i}
                      className="
    p-3 rounded-xl 
    border border-black/10 dark:border-white/15
    bg-black/5 dark:bg-white/5
  "
                    >
                      <p className="text-xs uppercase text-black/60 dark:text-white/50">
                        {key}
                      </p>
                      <p className="font-semibold mt-1 text-black dark:text-white">
                        {val}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Actions */}
              <div className="mt-6 space-y-3">
                <button
                  className="
                    w-full py-3 rounded-xl 
                    bg-primary text-white font-semibold 
                    hover:bg-primary-dark transition
                  "
                >
                  Hubungi Sales
                </button>

                <button
                  className="
                    w-full py-3 rounded-xl font-semibold
                    border border-primary text-primary 
                    dark:border-primary dark:text-primary
                    hover:bg-primary/10 transition
                  "
                >
                  Download Brochure
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
