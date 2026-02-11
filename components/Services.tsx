"use client";

import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import {
  FiBookOpen,
  FiSettings,
  FiTrendingUp,
  FiChevronDown,
} from "react-icons/fi";

const services = [
  {
    icon: FiBookOpen,
    title: "أولًا: نقل المعرفة",
    subtitle: "Knowledge Transfer",
    description:
      "تشجّع الجمعية السورية للهندسة الطبية على تبادل المعرفة والتعاون بين جميع المهنيين في قطاع الهندسة الطبية والرعاية الصحية، مستفيدة من قوة المبادئ العلمية والتقنيات الحديثة والخبرات المتراكمة في هذا المجال الحيوي.",
    details: [
      "ترتكز فعاليات الجمعية على جمع كبار الخبراء والمتخصصين في الصناعة، ومختلف مهن الرعاية الصحية، وأصحاب المصلحة، بهدف مشاركة الأبحاث والخبرات العملية، واستكشاف أحدث التطورات والابتكارات في هذا القطاع سريع النمو.",
      "وتنظم الجمعية مؤتمرات وورش عمل متخصصة بالتعاون مع شركائها في قطاع الهندسة الطبية الحيوية، تتناول طيفًا واسعًا من المواضيع المتميزة لجميع الشركاء في قطاع الرعاية الصحية.",
      "تقدّم برامج الجمعية مزيجًا متوازنًا من العروض العلمية، وورش العمل التفاعلية، والتطبيقات العملية، بما يعزز المعرفة والمهارات المهنية للمشاركين. كما تمنح هذه الأنشطة فرصة فريدة للبقاء على اطلاع بآخر نتائج الأبحاث والاختراقات التكنولوجية التي تشكّل مستقبل الرعاية الصحية، وتكشف الاتجاهات الناشئة القادرة على إحداث نقلة نوعية في خدمات المرضى والتكنولوجيا الطبية.",
    ],
    color: "primary" as const,
  },
  {
    icon: FiSettings,
    title: "ثانيًا: الاستشارات العملية",
    subtitle: "Practical Consulting",
    description:
      "تُعدّ الخدمات الاستشارية أحد أهم ركائز عمل الجمعية، فهي ليست مجرد نشاط مهني، بل منهج علمي يهدف إلى نقل الخبرات المتخصصة وتطبيقها.",
    details: [
      "دعم عمليات الشراء",
      "تقييم التكنولوجيا المناسبة للتطبيقات الطبية",
      "كما تدعم الجمعية المؤسسات الصحية في التعامل مع المتطلبات التنظيمية المعقدة، وتساعدها في الإعداد والتوثيق اللازم للحصول على الاعتمادات المختلفة، بما يضمن الامتثال الكامل للإرشادات الوطنية والدولية.",
    ],
    color: "accent" as const,
  },
  {
    icon: FiTrendingUp,
    title: "ثالثًا: برامج بناء الخبرات",
    subtitle: "Expertise Building",
    description:
      "تقدّم الجمعية برامج متخصصة لبناء الخبرات، تهدف إلى تطوير الموارد البشرية وتعزيز فرص النمو المهني في قطاع الهندسة الطبية الحيوية. تساعد هذه البرامج مقدمي خدمات الرعاية الصحية الحكومية والخاصة على تطوير كوادرهم، من خلال الجمع بين الخبرة العملية والمعرفة الأكاديمية.",
    details: [
      "التواصل مع الشركات المصنعة",
      "التواصل مع وكالات التمويل لتأمين ميزانيات للمشاريع البحثية",
      "دعم التعاون بين السوق والمؤسسات الأكاديمية",
      "تعزيز التعاون الدولي",
      "المساهمة في جهود توطين الصناعة الطبية",
      "دعم الابتكار وريادة الأعمال في التكنولوجيا الطبية",
    ],
    color: "primary" as const,
  },
];

function ServiceCard({
  service,
  index,
}: {
  service: (typeof services)[0];
  index: number;
}) {
  const [expanded, setExpanded] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const Icon = service.icon;
  const isAccent = service.color === "accent";

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      className="relative group"
    >
      {/* Subtle gradient border on hover */}
      <div className={`absolute -inset-[1px] rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-[0.5px] ${
        isAccent
          ? "bg-gradient-to-br from-accent/40 via-accent-light/20 to-accent-dark/40"
          : "bg-gradient-to-br from-primary/40 via-primary-light/20 to-primary-dark/40"
      }`} />

      <div className="relative bg-white rounded-2xl shadow-sm border border-gray-light/20 overflow-hidden h-full flex flex-col">
        <div className="p-6 md:p-8 flex-1">
          {/* Icon */}
          <div
            className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-5 transition-all duration-300 group-hover:shadow-md ${
              isAccent
                ? "bg-accent/10 group-hover:bg-accent/15 group-hover:shadow-accent/10"
                : "bg-primary/10 group-hover:bg-primary/15 group-hover:shadow-primary/10"
            }`}
          >
            <Icon
              className={`w-7 h-7 ${
                isAccent ? "text-accent" : "text-primary"
              }`}
            />
          </div>

          {/* Title */}
          <h3 className="text-xl font-bold text-dark mb-1">{service.title}</h3>
          <p className="text-sm text-gray-light font-inter mb-3">
            {service.subtitle}
          </p>

          {/* Description */}
          <p className="text-gray leading-relaxed mb-4 text-[15px]">{service.description}</p>

          {/* Expand button */}
          <button
            onClick={() => setExpanded(!expanded)}
            className={`flex items-center gap-2 font-medium text-sm transition-colors ${
              isAccent
                ? "text-accent hover:text-accent-dark"
                : "text-primary hover:text-primary-dark"
            }`}
          >
            {expanded ? "عرض أقل" : "عرض التفاصيل"}
            <motion.span
              animate={{ rotate: expanded ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <FiChevronDown />
            </motion.span>
          </button>

          {/* Expanded details */}
          <AnimatePresence>
            {expanded && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.35, ease: "easeInOut" }}
                className="overflow-hidden"
              >
                <ul className="mt-4 space-y-3">
                  {service.details.map((detail, i) => (
                    <li key={i} className="flex items-start gap-3 text-gray text-sm leading-relaxed">
                      <span className={`w-1.5 h-1.5 rounded-full mt-2 shrink-0 ${
                        isAccent ? "bg-accent" : "bg-primary"
                      }`} />
                      {detail}
                    </li>
                  ))}
                </ul>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Bottom accent line */}
        <div
          className={`h-1 mt-auto ${
            isAccent
              ? "bg-gradient-to-l from-accent via-accent-light to-accent-dark"
              : "bg-gradient-to-l from-primary via-primary-light to-primary-dark"
          }`}
        />
      </div>
    </motion.div>
  );
}

export default function Services() {
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true, margin: "-100px" });

  return (
    <section id="services" className="section-padding bg-light section-divider relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 grid-pattern pointer-events-none opacity-50" />

      <div className="container-custom relative z-10">
        {/* Services Header */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 30 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <div className="flex items-center justify-center gap-3 mb-3">
            <div className="h-[2px] w-8 bg-gradient-to-l from-primary to-transparent rounded-full" />
            <span className="text-primary font-semibold text-sm tracking-wide">
              خدماتنا
            </span>
            <div className="h-[2px] w-8 bg-gradient-to-r from-primary to-transparent rounded-full" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">
            ماذا <span className="gradient-text">نقدم</span>
          </h2>
        </motion.div>

        {/* Service Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
