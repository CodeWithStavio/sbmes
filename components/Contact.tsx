"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import {
  FiPhone,
  FiMail,
  FiGlobe,
  FiMapPin,
  FiSend,
} from "react-icons/fi";

const contactInfo = [
  {
    icon: FiPhone,
    label: "الهاتف",
    value: "+963-11-4429193",
    href: "tel:+963114429193",
  },
  {
    icon: FiPhone,
    label: "الفاكس",
    value: "+963-11-4464542",
    href: "tel:+963114464542",
  },
  {
    icon: FiMail,
    label: "البريد الإلكتروني",
    value: "info@sbmes-sy.org",
    href: "mailto:info@sbmes-sy.org",
  },
  {
    icon: FiGlobe,
    label: "الموقع الإلكتروني",
    value: "www.sbmes-sy.org",
    href: "https://www.sbmes-sy.org",
  },
  {
    icon: FiMapPin,
    label: "العنوان",
    value: "دمشق، المزرعة، شارع صالح العلي، بناء رقم (6)",
    href: "#",
  },
];

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <section id="contact" className="section-padding bg-white section-divider relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute -top-40 -left-40 w-80 h-80 bg-primary/[0.02] rounded-full blur-[100px] pointer-events-none" />

      <div className="container-custom relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <div className="flex items-center justify-center gap-3 mb-3">
            <div className="h-[2px] w-8 bg-gradient-to-l from-primary to-transparent rounded-full" />
            <span className="text-primary font-semibold text-sm tracking-wide">
              تواصل معنا
            </span>
            <div className="h-[2px] w-8 bg-gradient-to-r from-primary to-transparent rounded-full" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">
            نسعد <span className="gradient-text">بتواصلكم</span>
          </h2>
          <p className="text-gray max-w-2xl mx-auto text-[15px]">
            لا تتردد في التواصل معنا للاستفسار عن خدماتنا أو العضوية أو أي
            معلومات أخرى
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-14">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="space-y-3 mb-8">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <motion.a
                    key={index}
                    href={info.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                    className="flex items-center gap-4 bg-light rounded-xl p-4 hover:shadow-md hover:shadow-primary/5 transition-all duration-300 group border border-transparent hover:border-primary/10"
                  >
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary/15 group-hover:shadow-sm group-hover:shadow-primary/10 transition-all duration-300">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-gray">{info.label}</p>
                      <p className="font-medium text-dark" dir="ltr">{info.value}</p>
                    </div>
                  </motion.a>
                );
              })}
            </div>

            {/* Map placeholder */}
            <div className="bg-gradient-to-br from-light to-white rounded-2xl h-48 flex items-center justify-center border border-gray-light/20 relative overflow-hidden group">
              <div className="absolute inset-0 grid-pattern opacity-50" />
              <div className="relative text-center">
                <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-3 group-hover:bg-primary/15 transition-colors duration-300">
                  <FiMapPin className="w-6 h-6 text-primary" />
                </div>
                <p className="text-gray text-sm font-medium">خريطة الموقع</p>
                <p className="text-gray-light text-xs mt-1">دمشق، المزرعة، شارع صالح العلي</p>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="space-y-5" aria-label="نموذج التواصل">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-dark mb-2"
                  >
                    الاسم الكامل
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="w-full px-4 py-3.5 bg-light border border-gray-light/20 rounded-xl text-dark placeholder-gray-light focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/40 transition-all duration-300"
                    placeholder="أدخل اسمك"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-dark mb-2"
                  >
                    البريد الإلكتروني
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="w-full px-4 py-3.5 bg-light border border-gray-light/20 rounded-xl text-dark placeholder-gray-light focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/40 transition-all duration-300"
                    placeholder="أدخل بريدك الإلكتروني"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-dark mb-2"
                >
                  الموضوع
                </label>
                <input
                  type="text"
                  id="subject"
                  required
                  value={formData.subject}
                  onChange={(e) =>
                    setFormData({ ...formData, subject: e.target.value })
                  }
                  className="w-full px-4 py-3.5 bg-light border border-gray-light/20 rounded-xl text-dark placeholder-gray-light focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/40 transition-all duration-300"
                  placeholder="موضوع الرسالة"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-dark mb-2"
                >
                  الرسالة
                </label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="w-full px-4 py-3.5 bg-light border border-gray-light/20 rounded-xl text-dark placeholder-gray-light focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/40 transition-all duration-300 resize-none"
                  placeholder="اكتب رسالتك هنا..."
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.98 }}
                disabled={submitted}
                className={`w-full py-3.5 font-bold rounded-xl flex items-center justify-center gap-2 transition-all duration-300 ${
                  submitted
                    ? "bg-green-500 text-white"
                    : "bg-primary text-white hover:bg-primary-dark hover:shadow-lg hover:shadow-primary/25"
                }`}
              >
                {submitted ? (
                  "تم الإرسال بنجاح"
                ) : (
                  <>
                    <FiSend className="w-4 h-4" />
                    إرسال الرسالة
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
