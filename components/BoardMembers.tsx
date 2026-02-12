"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FiUser, FiStar } from "react-icons/fi";

const boardMembers = [
  {
    name: "م. عمر حمامي",
    title: "مؤسس مشارك ورئيس مجلس الإدارة",
    role: "Co-Founder & Chairman",
  },
  {
    name: "د. م. صفاء سراقبي",
    title: "مؤسس مشارك ونائب رئيس مجلس الإدارة",
    role: "Co-Founder & Vice Chairman",
  },
  {
    name: "م. محمد شموط",
    title: "مؤسس مشارك وأمين سر الجمعية",
    role: "Co-Founder & Secretary",
  },
  {
    name: "م. أنس برهاني",
    title: "مؤسس مشارك وأمين الصندوق",
    role: "Co-Founder & Treasurer",
  },
  {
    name: "م. محمد عاطف بقلة",
    title: "مؤسس مشارك وعضو مجلس الإدارة",
    role: "Co-Founder & Board Member",
  },
];

const coFounders = [
  {
    name: "م. إقبال دعبول",
    title: "مؤسس مشارك",
    role: "Co-Founder",
  },
  {
    name: "م. أيمن الحسني",
    title: "مؤسس مشارك",
    role: "Co-Founder",
  },
  {
    name: "د. م. أيمن الكيال",
    title: "مؤسس مشارك",
    role: "Co-Founder",
  },
  {
    name: "م. محمد بشير متولي",
    title: "مؤسس مشارك",
    role: "Co-Founder",
  },
  {
    name: "م. هزار تغلبي",
    title: "مؤسس مشارك",
    role: "Co-Founder",
  },
  {
    name: "م. أمل أشمر",
    title: "مؤسس مشارك",
    role: "Co-Founder",
  },
  {
    name: "م. رجاء بقلة",
    title: "مؤسس مشارك",
    role: "Co-Founder",
  },
];

type Member = { name: string; title: string; role: string };

function MemberCard({
  member,
  index,
  highlight,
}: {
  member: Member;
  index: number;
  highlight?: boolean;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="relative group"
    >
      {/* Hover gradient border */}
      {highlight && (
        <div className="absolute -inset-[1.5px] rounded-2xl bg-gradient-to-br from-primary via-primary-light/40 to-primary-dark opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-[0.5px]" />
      )}

      <div className="relative bg-white rounded-2xl p-6 shadow-sm border border-gray-light/20 card-hover text-center h-full">
        {/* Avatar */}
        <div className="relative w-20 h-20 mx-auto mb-4">
          <div
            className={`w-full h-full rounded-full flex items-center justify-center group-hover:scale-105 transition-all duration-500 ${
              highlight
                ? "bg-gradient-to-bl from-primary to-primary-dark shadow-lg shadow-primary/20 group-hover:shadow-primary/30"
                : "bg-gradient-to-bl from-primary-light/70 to-primary/70 shadow-md shadow-primary/10"
            }`}
          >
            <FiUser className="w-8 h-8 text-white" />
          </div>

          {/* Chairman badge */}
          {highlight && index === 0 && (
            <div className="absolute -top-1 -right-1 w-7 h-7 bg-accent rounded-full flex items-center justify-center border-2 border-white shadow-sm">
              <FiStar className="w-3.5 h-3.5 text-white" />
            </div>
          )}
        </div>

        <h3 className="text-lg font-bold text-dark mb-1">{member.name}</h3>
        <p className="text-primary font-medium text-sm mb-1 leading-snug">{member.title}</p>
        <p className="text-gray-light text-xs font-inter">{member.role}</p>
      </div>
    </motion.div>
  );
}

export default function BoardMembers() {
  const ref = useRef(null);
  const coFounderRef = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const coFounderInView = useInView(coFounderRef, { once: true, margin: "-100px" });

  return (
    <section id="board" className="section-padding bg-white section-divider relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute -top-40 -left-40 w-80 h-80 bg-primary/[0.02] rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-accent/[0.02] rounded-full blur-[100px] pointer-events-none" />

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
              فريقنا
            </span>
            <div className="h-[2px] w-8 bg-gradient-to-r from-primary to-transparent rounded-full" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">
            أعضاء مجلس الإدارة{" "}
            <span className="gradient-text">والأعضاء المؤسسون</span>
          </h2>
        </motion.div>

        {/* Board Members */}
        <div className="mb-16">
          <motion.h3
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl font-bold text-dark text-center mb-8 flex items-center justify-center gap-3"
          >
            <div className="h-[1px] w-12 bg-gradient-to-l from-primary/30 to-transparent" />
            مجلس الإدارة
            <div className="h-[1px] w-12 bg-gradient-to-r from-primary/30 to-transparent" />
          </motion.h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {boardMembers.map((member, index) => (
              <MemberCard
                key={index}
                member={member}
                index={index}
                highlight
              />
            ))}
          </div>
        </div>

        {/* Co-Founders */}
        <div ref={coFounderRef}>
          <motion.h3
            initial={{ opacity: 0 }}
            animate={coFounderInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5 }}
            className="text-xl font-bold text-dark text-center mb-8 flex items-center justify-center gap-3"
          >
            <div className="h-[1px] w-12 bg-gradient-to-l from-primary/30 to-transparent" />
            الأعضاء المؤسسون
            <div className="h-[1px] w-12 bg-gradient-to-r from-primary/30 to-transparent" />
          </motion.h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {coFounders.map((member, index) => (
              <MemberCard key={index} member={member} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
