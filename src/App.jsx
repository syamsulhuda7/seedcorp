import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router";
import i18n from "./i18n";

import Home from "./pages/Home";
import Products from "./pages/Products";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Distributor from "./pages/Distributor";
import RnD from "./pages/RnD";
import ScrollToTop from "./components/ScrollToTop";

export default function App() {
  const [isDark, setIsDark] = useState(() => {
    const saved = localStorage.getItem("seed-theme");
    if (saved) return saved === "dark";
    return (
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    );
  });

  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add("dark");
      document.documentElement.style.setProperty("--bg", "#0b0b0b");
      document.documentElement.style.setProperty("--text", "#e6eef3");
    } else {
      root.classList.remove("dark");
      document.documentElement.style.setProperty("--bg", "#ffffff");
      document.documentElement.style.setProperty("--text", "#0f172a");
    }
    localStorage.setItem("seed-theme", isDark ? "dark" : "light");
  }, [isDark]);

  return (
    <div className="min-h-screen bg-[color:var(--bg)] text-[color:var(--text)]">
      <Navbar isDark={isDark} toggleTheme={() => setIsDark((s) => !s)} />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/rnd" element={<RnD />} />
        <Route path="/distributor" element={<Distributor />} />
      </Routes>

      <Footer />
    </div>
  );
}
