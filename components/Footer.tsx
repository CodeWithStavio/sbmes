"use client";

import { FiMapPin, FiMail, FiPhone } from "react-icons/fi";
import Image from "next/image";

const quickLinks = [
  { label: "عن الجمعية", href: "#about" },
  { label: "مجلس الإدارة", href: "#board" },
  { label: "الخدمات", href: "#services" },
  { label: "العضوية", href: "#membership" },
  { label: "تواصل معنا", href: "#contact" },
];

const contactItems = [
  {
    icon: FiMapPin,
    label: "دمشق، المزرعة، شارع صالح العلي، بناء رقم (6)",
    dir: "rtl" as const,
  },
  {
    icon: FiMail,
    label: "info@sbmes-sy.org",
    dir: "ltr" as const,
    href: "mailto:info@sbmes-sy.org",
  },
  {
    icon: FiPhone,
    label: "+963-11-4429193",
    dir: "ltr" as const,
    href: "tel:+963114429193",
  },
];

const socialLinks = [
  { letter: "f", label: "Facebook" },
  { letter: "t", label: "Twitter" },
  { letter: "l", label: "LinkedIn" },
];

export default function Footer() {
  const handleClick = (href: string) => {
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-dark text-white relative overflow-hidden" role="contentinfo" aria-label="تذييل الموقع">
      {/* Gradient top border */}
      <div
        className="h-[2px] w-full"
        style={{
          background:
            "linear-gradient(to left, #1B6B6B, #238F8F, #C41E3A, #0F4C4C)",
        }}
      />

      {/* Subtle decorative blur */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/[0.03] rounded-full blur-[120px] pointer-events-none" />

      <div className="container-custom py-16 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-3 gap-14 mb-14">
          {/* Logo & About */}
          <div>
            <div className="mb-5">
              <Image
                src="/logo.png"
                alt="SBMES - الجمعية السورية للهندسة الطبية"
                width={192}
                height={128}
                className="h-14 w-auto object-contain opacity-85"
              />
            </div>
            <h3 className="font-bold text-lg mb-3">
              الجمعية السورية للهندسة الطبية
            </h3>
            <p className="text-white/45 text-sm leading-relaxed">
              أول كيان غير ربحي يُعنى بالنهوض بقطاع الهندسة الطبية، ودعم
              دراساته، وتمكين المهندسين الطبيين السوريين في سوريا.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-6 relative inline-block">
              روابط سريعة
              <span
                className="absolute -bottom-1.5 right-0 h-[2px] w-10 rounded-full"
                style={{
                  background:
                    "linear-gradient(to left, #1B6B6B, #238F8F)",
                }}
              />
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => handleClick(link.href)}
                    className="group text-white/50 hover:text-white transition-colors duration-300 text-sm relative"
                  >
                    {link.label}
                    <span className="absolute -bottom-0.5 right-0 w-full h-[1px] bg-primary origin-right scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold text-lg mb-6 relative inline-block">
              تواصل معنا
              <span
                className="absolute -bottom-1.5 right-0 h-[2px] w-10 rounded-full"
                style={{
                  background:
                    "linear-gradient(to left, #1B6B6B, #238F8F)",
                }}
              />
            </h3>
            <div className="space-y-4">
              {contactItems.map((item, idx) => {
                const Icon = item.icon;
                const content = (
                  <div className="flex items-start gap-3 group">
                    <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-white/10 transition-colors duration-300">
                      <Icon className="w-4 h-4 text-white/50 group-hover:text-primary transition-colors duration-300" />
                    </div>
                    <span
                      className="text-white/50 group-hover:text-white/70 transition-colors duration-300 text-sm leading-relaxed"
                      dir={item.dir}
                      style={
                        item.dir === "ltr" ? { textAlign: "left" } : undefined
                      }
                    >
                      {item.label}
                    </span>
                  </div>
                );

                if (item.href) {
                  return (
                    <a
                      key={idx}
                      href={item.href}
                      className="block hover:translate-x-[-2px] transition-transform duration-300"
                    >
                      {content}
                    </a>
                  );
                }

                return <div key={idx}>{content}</div>;
              })}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div
          className="h-[1px] w-full mb-8"
          style={{
            background:
              "linear-gradient(to left, transparent, rgba(255,255,255,0.08), transparent)",
          }}
        />

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-5">
          <p className="text-sm">
            <span className="text-white/30">
              &copy; {new Date().getFullYear()} SBMES - الجمعية السورية للهندسة
              الطبية. جميع الحقوق محفوظة.
            </span>
          </p>

          {/* Social icons */}
          <div className="flex items-center gap-3">
            {socialLinks.map((social) => (
              <div
                key={social.letter}
                title={social.label}
                className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center
                           text-white/40 text-sm font-inter font-semibold uppercase
                           hover:border-primary hover:text-primary hover:bg-primary/10
                           transition-all duration-300 cursor-pointer select-none"
              >
                {social.letter}
              </div>
            ))}
          </div>
        </div>

        <p className="text-center text-white/25 text-xs mt-4">
          Created by{" "}
          <a
            href="https://stavio.dev"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/40 hover:text-primary transition-colors duration-300"
          >
            Mustafa Alhassny
          </a>
        </p>
      </div>
    </footer>
  );
}
