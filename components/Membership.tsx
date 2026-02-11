"use client";

import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { FiStar, FiUsers, FiBriefcase, FiAward, FiFileText, FiSend, FiMail, FiCheck, FiDownload } from "react-icons/fi";

const membershipBenefits = [
  "التدريب والتعليم المستمر عبر إعداد وتنفيذ والمشاركة في البرامج التدريبية والحلقات الدراسية المتخصصة.",
  "توفير الدورات العلمية التي ترفع المستوى العلمي والتقني للأعضاء في مختلف مجالات الهندسة الطبية.",
  "تنظيم والمشاركة في الندوات والملتقيات وورش العمل والمؤتمرات والمعارض محليًا وإقليميًا ودوليًا، بما في ذلك ورش تصنيع الأجهزة والمستلزمات الطبية، وتصميم ونشر المحتوى عبر الوسائط المتعددة بعد موافقة الجهات المختصة.",
  "إجراء الدراسات والبحوث وتقديم المشورات العلمية في مجال الهندسة الطبية أو المجالات المرتبطة بها، وفق الأطر التنظيمية المعتمدة.",
  "دعم واستكشاف واحتضان وتشجيع المبتكرين والمصممين والمبدعين السوريين في مجال الهندسة الطبية.",
  "تعزيز تبادل الخبرات على المستويات الوطنية والعربية والأفريقية والدولية، بعد موافقة الجهات المختصة.",
  "دعم الدراسات والنشر العلمي والبحوث التطبيقية في مختلف تخصصات الهندسة الطبية، بالتعاون مع الجهات العلمية والبحثية، وإصدار المجلات والنشرات والمؤلفات والبرمجيات المتخصصة.",
  "تشجيع البحث العلمي والابتكار في مجال الهندسة الطبية.",
];

const membershipTypes = [
  {
    id: "original",
    icon: FiStar,
    letter: "أ",
    title: "العضو الأصيل",
    description:
      "هو العضو الذي استوفى شروطًا معينة من الخبرة ومضى على عضويته فترة طويلة والذي يقبل كتابةً النظام الداخلي للجمعية ويلتزم بتسديد رسوم الانتساب والاشتراك السنوي ويحق له حضور اجتماعات الهيئة العامة ويحق له الترشيح لمجلس الإدارة والتصويت في انتخابات الجمعية، وهو المهندس الطبي السوري أو من في حكمه الذي درس الهندسة الطبية خلال المرحلة الجامعية الأولى أو المهندس الطبي السوري الذي حصل على درجة الدكتوراه في الهندسة الطبية ويعمل في مجال الهندسة الطبية.",
    highlights: [
      "حق التصويت في الجمعية العمومية",
      "حق الترشيح لمجلس الإدارة",
      "حضور اجتماعات الهيئة العامة",
    ],
  },
  {
    id: "supporting",
    icon: FiUsers,
    letter: "ت",
    title: "العضو المؤازر",
    description:
      "هو العضو الذي يقبل كتابةً النظام الداخلي للجمعية ويلتزم بتسديد رسوم الانتساب والاشتراك السنوي والذي يرغب بتقديم الدعم المادي أو المعنوي أو كليهما معًا وليس له حق حضور اجتماعات الهيئة العامة ولا يحق له الترشيح والتصويت في انتخابات الجمعية، وهو المهندس غير الطبي والذي عمل في أحد مجالات الهندسة الطبية لمدة تزيد عن خمس سنوات، أو حديث التخرج في الهندسة الطبية من جامعة معترف بها أو الطالب الذي يدرس الهندسة الطبية أو أحد فروعها أو اختصاصاتها في جامعة معترف بها.",
    highlights: [
      "تقديم الدعم المادي أو المعنوي",
      "المشاركة في أنشطة الجمعية",
    ],
  },
  {
    id: "corporate",
    icon: FiBriefcase,
    letter: "ث",
    title: "العضو الاعتباري",
    description:
      "هو كيان قانوني وليس شخصًا طبيعيًا (مثل الجامعات، مراكز الأبحاث، المشافي والمصحات، الشركات الطبية والتقنية والبيئية والصيدلانية، الوزارات والهيئات الحكومية السورية والأجنبية، مصانع الأجهزة الطبية والدوائية، المنظمات الصحية المحلية والدولية، الجمعيات الطبية والصحية، النقابات الهندسية والطبية والبيئية والصيدلانية أو أي كيان قانوني أو مهني أو علمي مرتبط بمجال الهندسة الطبية).",
    highlights: [
      "الجامعات ومراكز الأبحاث",
      "المشافي والشركات الطبية",
      "المنظمات والنقابات المهنية",
      "مصانع الأجهزة الطبية",
    ],
  },
  {
    id: "honorary",
    icon: FiAward,
    letter: "ج",
    title: "عضو الشرف",
    description:
      "يقرر مجلس الإدارة منح هذه الصفة للخدمات الجليلة التي قدمها أو يمكن أن يقدمها عضو الشرف.",
    highlights: [
      "تكريم الإسهامات المتميزة",
      "عضوية تقديرية من مجلس الإدارة",
    ],
  },
];

export default function Membership() {
  const [activeTab, setActiveTab] = useState("original");
  const ref = useRef(null);
  const benefitsRef = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const benefitsInView = useInView(benefitsRef, { once: true, margin: "-100px" });

  const activeMembership = membershipTypes.find((m) => m.id === activeTab)!;
  const ActiveIcon = activeMembership.icon;

  return (
    <section id="membership" className="section-padding bg-light section-divider relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 grid-pattern pointer-events-none opacity-50" />

      <div className="container-custom relative z-10">
        {/* Membership Benefits */}
        <div className="mb-24">
          <motion.div
            ref={benefitsRef}
            initial={{ opacity: 0, y: 30 }}
            animate={benefitsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <div className="flex items-center justify-center gap-3 mb-3">
              <div className="h-[2px] w-8 bg-gradient-to-l from-primary to-transparent rounded-full" />
              <span className="text-primary font-semibold text-sm tracking-wide">
                العضوية
              </span>
              <div className="h-[2px] w-8 bg-gradient-to-r from-primary to-transparent rounded-full" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">
              امتيازات <span className="gradient-text">العضوية</span>
            </h2>
            <p className="text-gray max-w-3xl mx-auto text-[15px]">
              تمنح الجمعية السورية للهندسة الطبية أعضاءها مجموعة واسعة من
              الامتيازات والتسهيلات، تشمل خصومات خاصة وقد تصل إلى الحضور
              المجاني في بعض الأنشطة وفقًا لما تعلنه الجمعية.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-4 max-w-5xl mx-auto">
            {membershipBenefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 20 }}
                animate={benefitsInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.2 + index * 0.08 }}
                className="flex items-start gap-3 bg-white rounded-xl p-5 shadow-sm border border-gray-light/20 card-hover group"
              >
                <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-primary/20 transition-colors duration-300">
                  <FiCheck className="w-4 h-4 text-primary" />
                </div>
                <p className="text-dark text-sm leading-relaxed">{benefit}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Membership Types Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <div className="flex items-center justify-center gap-3 mb-3">
            <div className="h-[2px] w-8 bg-gradient-to-l from-primary to-transparent rounded-full" />
            <span className="text-primary font-semibold text-sm tracking-wide">
              أنواع العضوية
            </span>
            <div className="h-[2px] w-8 bg-gradient-to-r from-primary to-transparent rounded-full" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">
            أنواع <span className="gradient-text">العضوية</span>
          </h2>
          <p className="text-gray max-w-2xl mx-auto text-[15px]">
            تتألف الجمعية من أعضاء أصيلين، عاملين، مؤازرين، اعتباريين، وشرف.
          </p>
        </motion.div>

        {/* Tabs + Content */}
        <div className="max-w-4xl mx-auto">
          {/* Tabs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-2 mb-8"
          >
            {membershipTypes.map((type) => {
              const Icon = type.icon;
              const isActive = activeTab === type.id;
              return (
                <motion.button
                  key={type.id}
                  onClick={() => setActiveTab(type.id)}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                    isActive
                      ? "bg-primary text-white shadow-lg shadow-primary/25"
                      : "bg-white text-gray hover:bg-primary/5 hover:text-primary border border-gray-light/20"
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  {type.title}
                </motion.button>
              );
            })}
          </motion.div>

          {/* Active Type Detail */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.35 }}
              className="relative bg-white rounded-2xl p-6 md:p-10 shadow-sm border border-gray-light/20 overflow-hidden"
            >
              {/* Corner accent */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-primary/5 to-transparent pointer-events-none" />

              <div className="flex items-center gap-4 mb-6 relative">
                <div className="w-14 h-14 bg-gradient-to-br from-primary/15 to-primary/5 rounded-2xl flex items-center justify-center shadow-sm">
                  <ActiveIcon className="w-7 h-7 text-primary" />
                </div>
                <div>
                  <span className="text-sm text-primary font-bold">
                    {activeMembership.letter}
                  </span>
                  <h3 className="text-xl md:text-2xl font-bold text-dark">
                    {activeMembership.title}
                  </h3>
                </div>
              </div>

              <p className="text-gray leading-loose mb-6 text-[15px]">
                {activeMembership.description}
              </p>

              {activeMembership.highlights.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {activeMembership.highlights.map((h, i) => (
                    <span
                      key={i}
                      className="px-4 py-2 bg-primary/5 text-primary text-sm rounded-full border border-primary/10 font-medium"
                    >
                      {h}
                    </span>
                  ))}
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Fees + Application */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto mt-12"
        >
          {/* Fees */}
          <div className="relative group bg-white rounded-2xl p-7 shadow-sm border border-gray-light/20 text-center overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-accent/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative">
              <div className="w-14 h-14 bg-accent/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:shadow-md group-hover:shadow-accent/10 transition-all duration-300">
                <FiFileText className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-lg font-bold text-dark mb-3">
                رسوم الاشتراك
              </h3>
              <ul className="text-gray text-sm leading-relaxed text-right space-y-3">
                <li>
                  <span className="font-semibold text-dark">رسم الانتساب:</span>{" "}
                  750 ل.س (سبعمائة وخمسون ليرة سورية جديدة)، ورسم الاشتراك السنوي{" "}
                  <span className="font-semibold text-dark">500 ل.س</span> (خمسمائة ليرة سورية جديدة) يُسدَّد سنويًا بناءً على طلب العضو، ويجب تسديده كاملًا قبل نهاية السنة المالية للجمعية بشهر على الأقل.
                </li>
                <li>
                  إذا انضم أحد الأعضاء إلى الجمعية خلال السنة المالية فلا يؤدي من رسم الاشتراك السنوي إلا ما يعادل المدة الباقية من السنة.
                </li>
              </ul>
            </div>
          </div>

          {/* Application */}
          <div className="relative group bg-white rounded-2xl p-7 shadow-sm border border-gray-light/20 text-center overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-primary/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative">
              <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:shadow-md group-hover:shadow-primary/10 transition-all duration-300">
                <FiFileText className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-bold text-dark mb-2">
                طلب الانتساب
              </h3>
              <p className="text-gray text-sm leading-relaxed mb-5">
                حمّل نموذج طلب الانتساب، واملأه، ثم أرسله عبر البريد الإلكتروني
                الخاص بالجمعية.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <motion.a
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  href="/membership-application.pdf"
                  download="طلب انتساب - الجمعية السورية للهندسة الطبية.pdf"
                  className="inline-flex items-center gap-2 px-6 py-2.5 bg-primary text-white text-sm font-bold rounded-full hover:bg-primary-dark transition-all duration-300 hover:shadow-lg hover:shadow-primary/25"
                >
                  <FiDownload className="w-4 h-4" />
                  تحميل النموذج
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  href="mailto:info@sbmes-sy.org?subject=طلب انتساب للجمعية"
                  className="inline-flex items-center gap-2 px-6 py-2.5 border-2 border-primary text-primary text-sm font-bold rounded-full hover:bg-primary hover:text-white transition-all duration-300"
                >
                  <FiSend className="w-4 h-4" />
                  إرسال عبر البريد
                </motion.a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
