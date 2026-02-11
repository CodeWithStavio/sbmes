"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FiTarget, FiUsers, FiBookOpen, FiGlobe } from "react-icons/fi";

const objectives = [
  {
    icon: FiBookOpen,
    title: "تأهيل المتخصصين",
    description:
      "تأهيل المتخصصين في الهندسة الطبية عبر برامج تعليمية وتدريبية مستمرة.",
  },
  {
    icon: FiUsers,
    title: "تمكين الأعضاء",
    description:
      "تمكين الأعضاء من توسيع معارفهم من خلال تبادل المعلومات والخبرات عبر الدورات وورش العمل والمؤتمرات.",
  },
  {
    icon: FiTarget,
    title: "تعزيز التواصل المهني",
    description:
      "تعزيز التواصل بين المستثمرين والمصنّعين وصنّاع القرار والمتخصصين في القطاع والربط بين الخريجين وسوق العمل.",
  },
  {
    icon: FiGlobe,
    title: "التنسيق مع الهيئات",
    description:
      "بناء جسور التفاهم والتنسيق مع الهيئات والإدارات والسلطات ذات الصلة لدعم تطوير القطاع.",
  },
];

function AnimatedCard({
  item,
  index,
}: {
  item: (typeof objectives)[0];
  index: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const Icon = item.icon;
  const badgeNumber = String(index + 1).padStart(2, "0");

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      className="relative group"
    >
      {/* Gradient border - visible on hover */}
      <div className="absolute -inset-[1.5px] rounded-2xl bg-gradient-to-br from-primary via-primary-light/40 to-primary-dark opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-[0.5px]" />

      <div className="relative bg-white rounded-2xl p-6 shadow-sm border border-gray-light/20 card-hover h-full">
        {/* Number badge */}
        <div className="absolute top-4 left-4 w-8 h-8 rounded-lg bg-primary/5 flex items-center justify-center group-hover:bg-primary/10 transition-colors duration-300">
          <span className="text-xs font-bold text-primary/60 group-hover:text-primary transition-colors duration-300">{badgeNumber}</span>
        </div>

        <div className="w-12 h-12 bg-gradient-to-br from-primary/10 to-primary/5 rounded-xl flex items-center justify-center mb-4 group-hover:from-primary/20 group-hover:to-primary/10 transition-all duration-300 group-hover:shadow-md group-hover:shadow-primary/10">
          <Icon className="w-6 h-6 text-primary" />
        </div>
        <h3 className="text-lg font-bold text-dark mb-2">{item.title}</h3>
        <p className="text-gray leading-relaxed text-sm">{item.description}</p>
      </div>
    </motion.div>
  );
}

export default function About() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section
      id="about"
      className="section-padding bg-light section-divider relative overflow-hidden"
    >
      {/* Grid pattern background */}
      <div className="absolute inset-0 grid-pattern pointer-events-none" />

      {/* Decorative blur */}
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/[0.03] rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-accent/[0.02] rounded-full blur-[100px] pointer-events-none" />

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-14 items-start">
          {/* Text Content */}
          <motion.div
            ref={sectionRef}
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-2">
              <div className="h-[2px] w-10 bg-gradient-to-l from-primary to-primary-light rounded-full" />
              <span className="text-primary font-semibold text-sm tracking-wide">
                من نحن
              </span>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-dark mb-6 leading-snug">
              عن الجمعية السورية للهندسة{" "}
              <span className="gradient-text">الطبية</span>
            </h2>

            <p className="text-gray leading-relaxed mb-4 text-[15px]">
              تُعدّ الجمعية السورية للهندسة الطبية أول وأكبر مجتمع هندسي مهني
              يجمع مهندسي الأجهزة الطبية في الجمهورية العربية السورية. وهي كيان
              غير ربحي يهدف إلى تمثيل المهندسين الطبيين، وتوحيد صوتهم، والتعبير
              عن احتياجات هذا التخصص الحيوي بما يسهم في تحسين جودة الرعاية
              الصحية.
            </p>

            <p className="text-gray leading-relaxed mb-4 text-[15px]">
              تعمل الجمعية كمنارة علمية ومهنية تُرشد مقدمي خدمات الرعاية الصحية
              من خلال دعم وتطوير الممارسات الهندسية، وتصحيح الأخطاء المهنية،
              ومشاركة الخبرات الملهمة، وتقديم حلول شاملة تحت مظلة واحدة تمثل
              مهندسي الأجهزة الطبية.
            </p>
          </motion.div>

          {/* Objectives Grid */}
          <div className="grid sm:grid-cols-2 gap-4">
            {objectives.map((item, index) => (
              <AnimatedCard key={index} item={item} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
