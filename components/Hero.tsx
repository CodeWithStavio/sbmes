"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiAward, FiGlobe, FiUsers } from "react-icons/fi";
import Image from "next/image";

const slides = [
  {
    icon: FiAward,
    title: "الجمعية السورية للهندسة الطبية (SBMES)",
    paragraphs: [
      "بعد أشهر من الجهد والعمل، وبفضلٍ من الله وتوفيقه، تمّت الموافقة على تسجيل الجمعية السورية للهندسة الطبية (SBMES) من قبل وزارة الشؤون الاجتماعية والعمل، وإشهارها رسميًا في دمشق بتاريخ 27/8/2025. تحت رقم 3893",
      "وتُعدّ الجمعية أول كيان غير ربحي يُعنى بالنهوض بقطاع الهندسة الطبية، ودعم دراساته، وتمكين المهندسين الطبيين السوريين، بهدف الارتقاء بالمنشآت الصحية وخدماتها في سوريا.",
      "إننا نقدّم هذه الجمعية كأول عمل هندسي علمي غير ربحي لوطننا سوريا، آملين أن تكون خطوة أولى تتبعها مشاريع أخرى مهمة ومفيدة في مسيرة بناء سوريا.",
    ],
  },
  {
    icon: FiGlobe,
    title: "الشراكات والتعاون",
    paragraphs: [
      "دعم البحث العلمي، وتطوير المناهج الأكاديمية، وتبادل الخبرات، وتنظيم الفعاليات العلمية المشتركة، بما يسهم في رفع مستوى الكفاءات الهندسية والطبية وتعزيز حضور المهندس الطبي السوري إقليميًا ودوليًا.",
      "وتُعدّ هذه الشراكات خطوة محورية في مسيرة الجمعية نحو بناء منظومة تعاون واسعة تفتح آفاقًا جديدة للمشاريع العلمية والبحثية.",
    ],
  },
  {
    icon: FiUsers,
    title: "المؤتمر الدولي الرابع للهندسة الطبية",
    paragraphs: [
      "بعد تأسيس الجمعية، كان لنا شرف المشاركة في المؤتمر الدولي الرابع للهندسة الطبية في تشرين الأول لعام 2025، أحد أهم المنصات العلمية المتخصصة في المنطقة.",
      "وقد شكّلت هذه المشاركة أول ظهور رسمي للجمعية، وفرصة في بناء شبكة علاقات واسعة وإطلاق مبادرات تخدم تطوير القطاع الصحي والهندسي في سوريا.",
    ],
  },
];

const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? -60 : 60,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    x: direction > 0 ? 60 : -60,
    opacity: 0,
  }),
};

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isPaused, setIsPaused] = useState(false);

  const goToSlide = useCallback(
    (index: number) => {
      setDirection(index > current ? 1 : -1);
      setCurrent(index);
    },
    [current]
  );

  const nextSlide = useCallback(() => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % slides.length);
  }, []);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(nextSlide, 6000);
    return () => clearInterval(timer);
  }, [isPaused, nextSlide]);

  const Icon = slides[current].icon;

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Background - pure CSS, no JS animation overhead */}
      <div className="absolute inset-0 bg-gradient-to-bl from-primary-dark via-primary to-dark" />

      {/* Mesh gradient overlay - pure CSS */}
      <div className="absolute inset-0 opacity-40">
        <div className="absolute top-0 left-0 w-full h-full bg-mesh-gradient" />
      </div>

      {/* Decorative orbs - CSS animations instead of Framer Motion */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 right-10 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[120px] animate-pulse-slow" />
        <div className="absolute bottom-10 left-10 w-[600px] h-[600px] bg-primary-light/15 rounded-full blur-[120px] animate-pulse-slow [animation-delay:2s]" />
      </div>

      {/* Subtle grid overlay - pure CSS */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none grid-pattern-hero" />

      {/* Main content - padded for navbar */}
      <div className="relative z-10 w-full max-w-4xl mx-auto px-4 sm:px-6 pt-20">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-8"
        >
          <Image
            src="/logo.png"
            alt="SBMES - الجمعية السورية للهندسة الطبية الحيوية"
            width={480}
            height={320}
            priority
            className="mx-auto h-32 sm:h-40 md:h-52 w-auto object-contain drop-shadow-[0_2px_20px_rgba(255,255,255,0.2)]"
          />
        </motion.div>

        {/* Slide Content */}
        <div className="relative min-h-[300px] sm:min-h-[260px]">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={current}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="text-center"
            >
              {/* Slide Icon */}
              <div className="flex justify-center mb-5">
                <div className="w-14 h-14 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center border border-white/20 shadow-lg shadow-black/10">
                  <Icon className="w-7 h-7 text-white" />
                </div>
              </div>

              {/* Slide Title */}
              <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight text-balance">
                {slides[current].title}
              </h1>

              {/* Slide Paragraphs */}
              <div className="space-y-4 max-w-3xl mx-auto">
                {slides[current].paragraphs.map((p, i) => (
                  <p
                    key={i}
                    className="text-white/80 text-base md:text-lg leading-relaxed"
                  >
                    {p}
                  </p>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Dot Navigation */}
        <div className="flex justify-center gap-3 mt-8">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className="group relative p-1.5"
              aria-label={`انتقل إلى الشريحة ${index + 1}`}
            >
              <span
                className={`block rounded-full transition-all duration-500 ${
                  index === current
                    ? "w-8 h-3 bg-white"
                    : "w-3 h-3 bg-white/30 group-hover:bg-white/50"
                }`}
              />
            </button>
          ))}
        </div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-wrap justify-center gap-4 mt-8 pb-16"
        >
          <button
            onClick={() =>
              document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })
            }
            className="px-8 py-3.5 bg-white text-primary-dark font-bold rounded-full transition-all duration-300 shadow-lg shadow-black/10 hover:shadow-xl hover:scale-[1.02] active:scale-[0.98]"
          >
            اكتشف المزيد
          </button>
          <button
            onClick={() =>
              document.getElementById("membership")?.scrollIntoView({ behavior: "smooth" })
            }
            className="px-8 py-3.5 border-2 border-white/60 text-white font-bold rounded-full transition-all duration-300 hover:bg-white/10 active:scale-[0.98]"
          >
            انضم إلينا
          </button>
        </motion.div>
      </div>
    </section>
  );
}
