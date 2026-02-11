"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FiCalendar, FiMapPin, FiUsers, FiAward, FiArrowLeft } from "react-icons/fi";

const conferenceDetails = [
  { icon: FiCalendar, label: "التاريخ", value: "2024" },
  { icon: FiMapPin, label: "المكان", value: "دمشق، سوريا" },
  { icon: FiUsers, label: "المشاركون", value: "+300 مشارك" },
  { icon: FiAward, label: "الأبحاث", value: "+50 بحث علمي" },
];

export default function Conference() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="conference" className="section-padding bg-white section-divider relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute -top-20 -right-20 w-60 h-60 bg-primary/[0.03] rounded-full blur-[80px]" />
        <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-accent/[0.03] rounded-full blur-[80px]" />
      </div>

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
              المؤتمرات
            </span>
            <div className="h-[2px] w-8 bg-gradient-to-r from-primary to-transparent rounded-full" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-dark">
            المؤتمر السوري الدولي{" "}
            <span className="gradient-text">للهندسة الطبية الحيوية</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative max-w-4xl mx-auto"
        >
          {/* Gradient border card */}
          <div className="gradient-border">
            <div className="bg-white rounded-2xl p-8 md:p-12 relative overflow-hidden">
              {/* Shimmer overlay */}
              <div className="shimmer absolute inset-0 pointer-events-none rounded-2xl z-10" />

              {/* Corner accents */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-primary/5 to-transparent pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-accent/5 to-transparent pointer-events-none" />

              <div className="grid md:grid-cols-2 gap-10 relative z-20">
                {/* Left content */}
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center">
                      <FiAward className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold text-dark">
                      ISBME Conference
                    </h3>
                  </div>
                  <p className="text-gray leading-relaxed mb-4 text-[15px]">
                    المؤتمر السوري الدولي للهندسة الطبية الحيوية هو الحدث
                    الأبرز للجمعية، حيث يجمع الباحثين والمهندسين والأكاديميين
                    من مختلف أنحاء العالم لتبادل أحدث الأبحاث والابتكارات في
                    مجال الهندسة الطبية الحيوية.
                  </p>
                  <p className="text-gray leading-relaxed mb-6 text-[15px]">
                    يتضمن المؤتمر جلسات علمية وورش عمل ومعرضاً للأجهزة الطبية
                    وفرصاً للتواصل المهني مع خبراء المجال.
                  </p>
                  <motion.button
                    whileHover={{ x: -4 }}
                    whileTap={{ scale: 0.97 }}
                    onClick={() =>
                      document
                        .getElementById("contact")
                        ?.scrollIntoView({ behavior: "smooth" })
                    }
                    className="btn-primary group"
                  >
                    تواصل للمشاركة
                    <FiArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
                  </motion.button>
                </div>

                {/* Right - details grid */}
                <div className="grid grid-cols-2 gap-4">
                  {conferenceDetails.map((detail, index) => {
                    const Icon = detail.icon;
                    return (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{
                          duration: 0.4,
                          delay: 0.4 + index * 0.1,
                        }}
                        whileHover={{
                          scale: 1.04,
                          y: -2,
                        }}
                        className="bg-light rounded-2xl p-5 text-center cursor-default transition-all duration-300 border border-transparent hover:border-primary/10 hover:shadow-lg hover:shadow-primary/5 group"
                      >
                        <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:bg-primary/15 transition-colors duration-300">
                          <Icon className="w-6 h-6 text-primary" />
                        </div>
                        <p className="text-sm text-gray mb-1">{detail.label}</p>
                        <p className="font-bold text-dark text-sm">
                          {detail.value}
                        </p>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
