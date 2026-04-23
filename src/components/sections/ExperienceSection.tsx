import { motion } from "motion/react";
import { SectionLabel, SectionHeading } from "./shared";

const experiences = [
  {
    role:     "Laravel Developer",
    company:  "Walkinroom",
    type:     "Remote",
    period:   "Dec 2024 – Present",
    current:  true,
    desc:     "Building and maintaining the core Laravel backend for a hotel booking platform. Responsibilities include REST API development, database optimisation, feature implementation, and integrating third-party payment and booking services.",
    tags:     ["Laravel", "PHP", "MySQL", "REST API"],
  },
  {
    role:     "Web Developer",
    company:  "Cloudkhamar",
    type:     "Remote",
    period:   "Jan 2026 – Present",
    current:  true,
    desc:     "Developing full-stack web solutions for clients across various industries. Working with modern frontend and backend technologies to deliver scalable, maintainable, and performant web applications.",
    tags:     ["Laravel", "React", "Next.js", "MySQL"],
  },
  {
    role:     "Laravel Developer",
    company:  "IT Lab Industry",
    type:     "Remote",
    period:   "Jan 2024 – Aug 2024",
    current:  false,
    desc:     "Developed and delivered Laravel-based web applications for various client projects. Worked on backend architecture, database design, and API development within an agile team environment.",
    tags:     ["Laravel", "PHP", "MySQL", "REST API"],
  },
];

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" as const, delay } },
});

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-28 bg-[#080808] border-t border-white/[0.05] relative overflow-hidden">

      {/* bg glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] pointer-events-none
        bg-[radial-gradient(ellipse_at_top,rgba(29,205,159,0.05)_0%,transparent_70%)]" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">

        {/* header */}
        <motion.div
          variants={fadeUp(0)} initial="hidden" whileInView="show" viewport={{ once: true }}
          className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14"
        >
          <div>
            <SectionLabel>Work History</SectionLabel>
            <SectionHeading>
              Professional <span className="text-primary">Experience</span>
            </SectionHeading>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            Currently working at {experiences.filter(e => e.current).length} companies
          </div>
        </motion.div>

        {/* timeline */}
        <div className="relative flex flex-col gap-5">

          {/* vertical line — desktop */}
          <div className="absolute left-[19px] top-3 bottom-3 w-px bg-white/[0.07] hidden sm:block" />

          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              variants={fadeUp(0.1 + i * 0.1)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="relative flex gap-6 sm:gap-8"
            >
              {/* dot */}
              <div className="relative flex-shrink-0 hidden sm:flex flex-col items-center">
                <div className={`w-10 h-10 rounded-full border-2 flex items-center justify-center z-10
                  ${exp.current
                    ? "border-primary bg-primary/10"
                    : "border-white/20 bg-[#080808]"
                  }`}>
                  <svg className={`w-4 h-4 ${exp.current ? "text-primary" : "text-gray-600"}`}
                    fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                      d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
              </div>

              {/* card */}
              <div className="flex-1 bg-white/[0.02] border border-white/[0.07]
                hover:border-primary/25 rounded-2xl p-6 sm:p-7
                transition-colors duration-300 group">

                {/* top row */}
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 mb-5">
                  <div>
                    <div className="flex flex-wrap items-center gap-2.5 mb-1">
                      <h3 className="text-white font-bold text-lg leading-none">{exp.role}</h3>
                      {exp.current && (
                        <span className="inline-flex items-center gap-1.5 bg-primary/10 border border-primary/25
                          text-primary text-[10px] font-semibold uppercase tracking-widest
                          px-2.5 py-1 rounded-full">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                          Current
                        </span>
                      )}
                    </div>
                    <div className="flex items-center gap-2 mt-1.5">
                      <span className="text-primary font-semibold text-sm">{exp.company}</span>
                      <span className="text-white/20">·</span>
                      <span className="text-gray-500 text-sm">{exp.type}</span>
                    </div>
                  </div>

                  {/* period */}
                  <div className="flex-shrink-0 bg-white/[0.04] border border-white/[0.08]
                    rounded-xl px-4 py-2 text-center">
                    <p className="text-white text-xs font-semibold whitespace-nowrap">{exp.period}</p>
                  </div>
                </div>

                {/* divider */}
                <div className="h-px bg-white/[0.06] mb-5" />

                {/* description */}
                <p className="text-gray-400 text-sm leading-relaxed mb-5">{exp.desc}</p>

                {/* tags */}
                <div className="flex flex-wrap gap-2">
                  {exp.tags.map((tag) => (
                    <span key={tag}
                      className="text-[11px] font-medium text-gray-500
                        bg-white/[0.04] border border-white/[0.07]
                        px-3 py-1.5 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
