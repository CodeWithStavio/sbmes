"use client";

import { useState, useEffect, useRef } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import Image from "next/image";

const navLinks = [
  { href: "#hero", label: "الرئيسية" },
  { href: "#about", label: "عن الجمعية" },
  { href: "#board", label: "مجلس الإدارة" },
  { href: "#services", label: "الخدمات" },
  { href: "#membership", label: "العضوية" },
  { href: "#contact", label: "تواصل معنا" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const progressRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (ticking) return;
      ticking = true;

      requestAnimationFrame(() => {
        const scrollY = window.scrollY;
        setScrolled(scrollY > 50);

        if (progressRef.current) {
          const docHeight = document.documentElement.scrollHeight - window.innerHeight;
          const progress = docHeight > 0 ? (scrollY / docHeight) * 100 : 0;
          progressRef.current.style.width = `${progress}%`;
        }

        const sections = navLinks.map((link) => link.href.replace("#", ""));
        for (let i = sections.length - 1; i >= 0; i--) {
          const el = document.getElementById(sections[i]);
          if (el) {
            const rect = el.getBoundingClientRect();
            if (rect.top <= 100) {
              setActiveSection(sections[i]);
              break;
            }
          }
        }

        ticking = false;
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = (href: string) => {
    setIsOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      aria-label="التنقل الرئيسي"
      className={`fixed top-0 right-0 left-0 z-50 transition-all duration-500 ${
        scrolled
          ? "backdrop-blur-xl bg-white/75 shadow-lg shadow-black/[0.03] border-b border-white/20"
          : "bg-transparent"
      }`}
    >
      {/* Scroll Progress Bar */}
      <div
        ref={progressRef}
        role="progressbar"
        aria-label="تقدم التمرير"
        className="absolute top-0 right-0 h-[2px] z-50 will-change-[width]"
        style={{
          width: "0%",
          background: "linear-gradient(to left, #1B6B6B, #238F8F, #0F4C4C)",
        }}
      />

      <div className="container-custom flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <button
          onClick={() => handleClick("#hero")}
          className="relative shrink-0 group"
        >
          <Image
            src="/logo.png"
            alt="SBMES - الجمعية السورية للهندسة الطبية"
            width={150}
            height={100}
            priority
            className={`h-9 md:h-11 w-auto object-contain transition-all duration-500 ${
              scrolled
                ? ""
                : "drop-shadow-[0_1px_8px_rgba(255,255,255,0.15)]"
            }`}
          />
        </button>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-1 relative">
          {navLinks.map((link) => {
            const sectionId = link.href.replace("#", "");
            const isActive = activeSection === sectionId;

            return (
              <button
                key={link.href}
                onClick={() => handleClick(link.href)}
                className={`relative px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  scrolled
                    ? isActive
                      ? "text-primary bg-primary/10 border border-primary/10"
                      : "text-dark/60 hover:text-primary"
                    : isActive
                      ? "text-white bg-white/15 border border-white/10"
                      : "text-white/70 hover:text-white"
                }`}
              >
                {link.label}
              </button>
            );
          })}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`md:hidden p-2 rounded-lg transition-colors ${
            scrolled
              ? "text-dark/70 hover:text-primary hover:bg-primary/5"
              : "text-white/80 hover:text-white hover:bg-white/10"
          }`}
          aria-label="فتح القائمة"
        >
          {isOpen ? <HiX size={24} /> : <HiMenu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden backdrop-blur-xl bg-white/85 border-t border-white/20 transition-all duration-300 ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="container-custom py-4 flex flex-col gap-1">
          {navLinks.map((link) => {
            const sectionId = link.href.replace("#", "");
            const isActive = activeSection === sectionId;

            return (
              <button
                key={link.href}
                onClick={() => handleClick(link.href)}
                className={`px-4 py-3 rounded-xl text-sm font-medium text-right transition-colors ${
                  isActive
                    ? "text-primary bg-primary/5"
                    : "text-dark/70 hover:text-primary"
                }`}
              >
                {link.label}
              </button>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
