import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import MapComponent from "../components/MapComponent";

// Optional peta (jika ingin ditampilkan)
export default function Contact() {
  const { t } = useTranslation();

  return (
    <div className="pt-16 bg-dark">
      {/* HERO */}
      <section
        className="
          h-[45vh] md:h-[55vh] 
          bg-linear-to-br from-green-600 to-green-700
          dark:from-green-800 dark:to-green-900
          text-white flex items-center
        "
      >
        <div className="max-w-6xl mx-auto px-6">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-5xl font-bold drop-shadow-lg"
          >
            {t("contact.hero.title")}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="mt-4 max-w-2xl text-white/90 text-lg"
          >
            {t("contact.hero.subtitle")}
          </motion.p>
        </div>
      </section>

      {/* CONTACT INFO */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-8">
          {/* PHONE */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="bg-white dark:bg-gray-800 shadow rounded-xl p-6"
          >
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              {t("contact.info.phoneTitle")}
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mt-2">
              {t("contact.info.phone")}
            </p>
          </motion.div>

          {/* EMAIL */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="bg-white dark:bg-gray-800 shadow rounded-xl p-6"
          >
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              {t("contact.info.emailTitle")}
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mt-2">
              {t("contact.info.email")}
            </p>
          </motion.div>

          {/* ADDRESS */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="bg-white dark:bg-gray-800 shadow rounded-xl p-6"
          >
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              {t("contact.info.addressTitle")}
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mt-2">
              {t("contact.info.address")}
            </p>
          </motion.div>
        </div>
      </section>

      {/* CONTACT FORM */}
      <section className="py-16 bg-white dark:bg-gray-950">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            {t("contact.form.title")}
          </h2>

          <p className="text-gray-700 dark:text-gray-300 mt-2 mb-6">
            {t("contact.form.subtitle")}
          </p>

          <form className="grid md:grid-cols-2 gap-8">
            <div>
              <label className="text-gray-800 dark:text-gray-300 font-medium">
                {t("contact.form.name")}
              </label>
              <input
                type="text"
                className="
                  mt-2 p-3 w-full rounded-lg border dark:border-gray-700
                  bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white
                "
              />
            </div>

            <div>
              <label className="text-gray-800 dark:text-gray-300 font-medium">
                {t("contact.form.email")}
              </label>
              <input
                type="email"
                className="
                  mt-2 p-3 w-full rounded-lg border dark:border-gray-700
                  bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white
                "
              />
            </div>

            <div className="md:col-span-2">
              <label className="text-gray-800 dark:text-gray-300 font-medium">
                {t("contact.form.message")}
              </label>
              <textarea
                rows="5"
                className="
                  mt-2 p-3 w-full rounded-lg border dark:border-gray-700
                  bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white
                "
              ></textarea>
            </div>

            <button
              type="submit"
              className="
                md:col-span-2 bg-green-600 hover:bg-green-700 
                text-white font-medium px-6 py-3 rounded-lg shadow
              "
            >
              {t("contact.form.submit")}
            </button>
          </form>
        </div>
      </section>

      {/* MAP (OPTIONAL) */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            {t("contact.map.title")}
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mt-2 mb-6">
            {t("contact.map.desc")}
          </p>

          <div className="h-[400px] rounded-xl overflow-hidden shadow-lg">
            <MapComponent />
          </div>
        </div>
      </section>
    </div>
  );
}
