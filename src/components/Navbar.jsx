import { useState } from "react";
import { Link, NavLink } from "react-router";
import { useTranslation } from "react-i18next";
import { Sun, Moon } from "lucide-react";

export default function Navbar() {
  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  // Toggle light/dark mode
  const toggleTheme = () => {
    const html = document.documentElement;
    html.classList.toggle("dark");
    localStorage.setItem(
      "theme",
      html.classList.contains("dark") ? "dark" : "light"
    );
  };

  // Load saved theme on mount
  useState(() => {
    const saved = localStorage.getItem("theme");
    if (saved === "dark") document.documentElement.classList.add("dark");
  });

  return (
    <header className="fixed top-0 left-0 w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur z-50 shadow">
      <nav className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="font-bold text-xl text-primary">
          SeedCorp
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-6">
          <NavItem to="/" label={t("nav.home")} />
          <NavItem to="/products" label={t("nav.products")} />
          <NavItem to="/about" label={t("nav.about")} />
          <NavItem to="/rnd" label={t("nav.rnd")} />
          <NavItem to="/distributor" label={t("nav.distributor")} />
          <NavItem to="/contact" label={t("nav.contact")} />

          {/* Language Selector */}
          <select
            onChange={(e) => i18n.changeLanguage(e.target.value)}
            className="
    px-3 py-1.5 text-sm rounded-lg
    bg-gray-100 border border-gray-300 text-gray-800
    hover:bg-gray-200
    focus:outline-none
    dark:bg-gray-800 dark:border-gray-700 dark:text-gray-200
    dark:hover:bg-gray-700
  "
          >
            <option className="bg-white dark:bg-gray-900" value="id">
              ID
            </option>
            <option className="bg-white dark:bg-gray-900" value="en">
              EN
            </option>
          </select>

          {/* Dark mode toggle */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700"
          >
            <Sun className="w-5 h-5 dark:hidden" />
            <Moon className="w-5 h-5 hidden dark:block text-gray-300" />
          </button>
        </ul>

        {/* Mobile button */}
        <button className="md:hidden p-2" onClick={() => setIsOpen(!isOpen)}>
          ☰
        </button>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 border-t dark:border-gray-700 px-6 py-4 space-y-4">
          <MobileItem to="/" label={t("nav.home")} />
          <MobileItem to="/products" label={t("nav.products")} />
          <MobileItem to="/about" label={t("nav.about")} />
          <MobileItem to="/rnd" label={t("nav.rnd")} />
          <MobileItem to="/distributor" label={t("nav.distributor")} />
          <MobileItem to="/contact" label={t("nav.contact")} />

          <div className="flex items-center gap-4 pt-4">
            <select
              onChange={(e) => i18n.changeLanguage(e.target.value)}
              className="
    px-3 py-1.5 text-sm rounded-lg w-full
    bg-gray-100 border border-gray-300 text-gray-800
    hover:bg-gray-200
    focus:outline-none
    dark:bg-gray-800 dark:border-gray-700 dark:text-gray-200
    dark:hover:bg-gray-700
  "
            >
              <option className="bg-white dark:bg-gray-900" value="id">
                ID
              </option>
              <option className="bg-white dark:bg-gray-900" value="en">
                EN
              </option>
            </select>

            <button
              onClick={toggleTheme}
              className="p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700"
            >
              <Sun className="w-5 h-5 dark:hidden" />
              <Moon className="w-5 h-5 hidden dark:block text-gray-300" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
}

// Reusable Nav item
function NavItem({ to, label }) {
  return (
    <li>
      <NavLink
        to={to}
        className={({ isActive }) =>
          `transition ${
            isActive
              ? "text-primary font-semibold"
              : "text-gray-700 dark:text-gray-300 hover:text-primary"
          }`
        }
      >
        {label}
      </NavLink>
    </li>
  );
}

// Mobile version
function MobileItem({ to, label }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `block ${
          isActive
            ? "text-primary font-semibold"
            : "text-gray-700 dark:text-gray-300"
        }`
      }
    >
      {label}
    </NavLink>
  );
}
