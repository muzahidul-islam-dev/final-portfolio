import { motion } from "motion/react";
import { SectionLabel, SectionHeading } from "./shared";

const aboutContent =
  "I'm Rahat Hossain, a Full Stack Web Developer with 2+ years of hands-on experience building production-grade applications. I specialise in Laravel and the MERN stack, delivering solutions that are fast, secure, and maintainable. I care deeply about code quality, user experience, and meeting deadlines.";

const facts = [
  { icon: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z", label: "Location",     value: "Bangladesh"     },
  { icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z",                                                                          label: "Availability", value: "Open to work"   },
  { icon: "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4",                                                                                   label: "Speciality",   value: "Laravel & MERN" },
  { icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",                                                                             label: "Experience",   value: "2+ Years"       },
];

const skillGroups = [
  {
    category: "Backend",
    color: "from-emerald-500/10 to-teal-500/5",
    border: "border-emerald-500/20",
    dot: "bg-emerald-400",
    skills: ["PHP", "Laravel", "Node.js", "Express.js", "REST API"],
  },
  {
    category: "Frontend",
    color: "from-sky-500/10 to-blue-500/5",
    border: "border-sky-500/20",
    dot: "bg-sky-400",
    skills: ["React", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS"],
  },
  {
    category: "Database",
    color: "from-violet-500/10 to-purple-500/5",
    border: "border-violet-500/20",
    dot: "bg-violet-400",
    skills: ["MySQL", "MongoDB", "Database Design"],
  },
  {
    category: "Tools & Others",
    color: "from-orange-500/10 to-amber-500/5",
    border: "border-orange-500/20",
    dot: "bg-orange-400",
    skills: ["Git", "GitHub", "Postman", "WordPress", "Flutter"],
  },
];

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" as const, delay } },
});

export default function AboutSection() {
  return (
    <section id="about" className="py-28 bg-[#080808] relative overflow-hidden">

      {/* background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[350px] pointer-events-none
        bg-[radial-gradient(ellipse_at_top,rgba(29,205,159,0.055)_0%,transparent_70%)]" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">

        {/* ── header ── */}
        <motion.div
          variants={fadeUp(0)} initial="hidden" whileInView="show" viewport={{ once: true }}
          className="mb-16"
        >
          <SectionLabel>About Me</SectionLabel>
          <SectionHeading>
            Passionate About Building<br />
            <span className="text-primary">Scalable Web Solutions</span>
          </SectionHeading>
        </motion.div>

        {/* ── two-column ── */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">

          {/* ══ LEFT — bio + facts + CTA ══ */}
          <div className="flex flex-col gap-8">

            {/* bio */}
            <motion.p
              variants={fadeUp(0.1)} initial="hidden" whileInView="show" viewport={{ once: true }}
              className="text-gray-400 text-[15px] leading-[1.95]"
            >
              {aboutContent}
            </motion.p>

            {/* facts grid */}
            <motion.div
              variants={fadeUp(0.15)} initial="hidden" whileInView="show" viewport={{ once: true }}
              className="grid grid-cols-2 gap-3"
            >
              {facts.map((f) => (
                <div key={f.label}
                  className="flex items-start gap-3 bg-white/[0.03] border border-white/[0.07]
                    rounded-xl px-4 py-3.5 hover:border-primary/25 transition-colors duration-200 group"
                >
                  <div className="w-8 h-8 rounded-lg bg-primary/10 border border-primary/15
                    flex items-center justify-center flex-shrink-0 mt-0.5
                    group-hover:bg-primary/15 transition-colors">
                    <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d={f.icon} />
                    </svg>
                  </div>
                  <div>
                    <p className="text-[10px] text-gray-600 uppercase tracking-[0.15em] font-medium leading-none">{f.label}</p>
                    <p className="text-white text-sm font-semibold mt-1">{f.value}</p>
                  </div>
                </div>
              ))}
            </motion.div>

            {/* divider */}
            <div className="h-px bg-gradient-to-r from-white/[0.07] to-transparent" />

            {/* CTAs */}
            <motion.div
              variants={fadeUp(0.2)} initial="hidden" whileInView="show" viewport={{ once: true }}
              className="flex flex-wrap gap-4"
            >
              <a
                href="mailto:muzahidulislam.dev@gmail.com"
                className="inline-flex items-center gap-2 bg-primary text-black font-semibold
                  text-sm px-6 py-3 rounded-full hover:bg-primary/90 active:scale-[0.97]
                  transition-all shadow-[0_0_20px_rgba(29,205,159,0.2)]"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Let's Work Together
              </a>
              <a
                href="#projects"
                className="inline-flex items-center gap-2 bg-transparent border border-white/[0.12]
                  text-white font-semibold text-sm px-6 py-3 rounded-full
                  hover:border-primary/40 hover:bg-primary/[0.06] active:scale-[0.97] transition-all"
              >
                View My Work
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </motion.div>
          </div>

          {/* ══ RIGHT — skill groups ══ */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {skillGroups.map((group, gi) => (
              <motion.div
                key={group.category}
                variants={fadeUp(0.1 + gi * 0.08)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className={`relative rounded-2xl border ${group.border} bg-gradient-to-br ${group.color}
                  p-5 overflow-hidden`}
              >
                {/* category header */}
                <div className="flex items-center gap-2.5 mb-4">
                  <span className={`w-2 h-2 rounded-full ${group.dot} flex-shrink-0`} />
                  <p className="text-white text-sm font-semibold tracking-wide">{group.category}</p>
                </div>

                {/* skill pills */}
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="bg-white/[0.06] border border-white/[0.1] text-gray-300
                        text-[11px] font-medium px-3 py-1.5 rounded-full
                        hover:bg-white/[0.1] hover:text-white transition-colors duration-150"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {/* subtle corner glow */}
                <div className="absolute -bottom-6 -right-6 w-24 h-24 rounded-full
                  bg-white/[0.03] blur-2xl pointer-events-none" />
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
