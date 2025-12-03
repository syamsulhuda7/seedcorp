import { useState } from "react";
import { motion } from "framer-motion";
import PRODUCTS from "../data/products";
import ProductModal from "../components/ProductModal";

export default function Products() {
  const [open, setOpen] = useState(null);

  return (
    <div className="min-h-screen bg-white dark:bg-[#0b0d0e] py-16">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-primary mb-8 mt-4 dark:text-primary">
          All Products
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {PRODUCTS.map((p) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="
    cursor-pointer 
    rounded-2xl 
    overflow-hidden
    bg-white dark:bg-[#111416]/80
    border border-black/10 dark:border-white/5
    shadow-md dark:shadow-lg dark:shadow-black/50
    hover:scale-[1.02] transition-all duration-300
  "
              onClick={() => setOpen(p)}
            >
              <img src={p.images[0]} className="w-full h-48 object-cover" />

              <div className="p-4">
                <h4 className="font-semibold text-neutral-800 dark:text-neutral-100">
                  {p.name}
                </h4>

                <p className="text-sm text-neutral-500 dark:text-neutral-400 mt-1 line-clamp-2">
                  {p.short}
                </p>

                <p className="mt-3 text-primary font-medium dark:text-primary">
                  Lihat detail →
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {open && <ProductModal product={open} onClose={() => setOpen(null)} />}
    </div>
  );
}
