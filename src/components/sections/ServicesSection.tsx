import { motion } from "motion/react";
import { SectionLabel, SectionHeading } from "./shared";

const services = [
  {
    num: "01",
    title: "Laravel Web Application Development",
    desc: "Custom, scalable Laravel applications with clean architecture — from multi-role dashboards and admin panels to complex business logic and workflow automation.",
    tags: ["Laravel", "PHP", "MySQL"],
    icon: "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4",
  },
  {
    num: "02",
    title: "MERN Stack Development",
    desc: "Full-featured web applications using MongoDB, Express.js, React, and Node.js — fast, modern, and built for real-world scale with clean component architecture.",
    tags: ["React", "Node.js", "MongoDB"],
    icon: "M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
  },
  {
    num: "03",
    title: "REST API Design & Development",
    desc: "Secure, well-structured REST APIs with proper authentication (JWT/Sanctum), rate limiting, versioning, and full documentation — ready for web, mobile, or third-party consumers.",
    tags: ["Laravel", "Node.js", "JWT"],
    icon: "M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z",
  },
  {
    num: "04",
    title: "E-commerce Platform Development",
    desc: "End-to-end online stores and multi-vendor marketplaces with product management, cart, checkout, payment gateway integration, and order tracking.",
    tags: ["Laravel", "React", "Stripe"],
    icon: "M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z",
  },
  {
    num: "05",
    title: "Third-party API & Service Integration",
    desc: "Seamless integration of payment gateways (Stripe, PayPal), SMS/email services, Google Maps, social auth, CRMs, and any external API into your existing application.",
    tags: ["REST API", "Webhooks", "OAuth"],
    icon: "M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1",
  },
  {
    num: "06",
    title: "Performance Audit & Bug Fixing",
    desc: "In-depth diagnosis of slow queries, memory leaks, security vulnerabilities, and broken features — with clear fixes, refactoring, and measurable performance improvements.",
    tags: ["Debugging", "Optimisation", "Security"],
    icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
  },
];

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" as const, delay } },
});

export default function ServicesSection() {
  return (
    <section id="service" className="py-28 bg-[#080808] relative overflow-hidden">

      {/* bg glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] pointer-events-none
        bg-[radial-gradient(ellipse_at_bottom,rgba(29,205,159,0.05)_0%,transparent_70%)]" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">

        {/* ── header ── */}
        <motion.div
          variants={fadeUp(0)} initial="hidden" whileInView="show" viewport={{ once: true }}
          className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14"
        >
          <div>
            <SectionLabel>What I Offer</SectionLabel>
            <SectionHeading>
              Services That Drive<br />
              <span className="text-primary">Real Results</span>
            </SectionHeading>
          </div>
          <p className="text-gray-500 text-sm max-w-xs leading-relaxed sm:text-right">
            From concept to deployment — clean code, on time, built to scale.
          </p>
        </motion.div>

        {/* ── service cards ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((s, i) => (
            <motion.div
              key={s.num}
              variants={fadeUp(0.06 + i * 0.07)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="group relative flex flex-col gap-5 rounded-2xl
                bg-white/[0.02] border border-white/[0.07]
                hover:border-primary/25 hover:bg-white/[0.035]
                p-6 transition-all duration-300 overflow-hidden"
            >
              {/* top row — icon + number */}
              <div className="flex items-start justify-between">
                <div className="w-11 h-11 rounded-xl bg-primary/[0.08] border border-primary/[0.15]
                  flex items-center justify-center flex-shrink-0
                  group-hover:bg-primary/[0.14] transition-colors duration-300">
                  <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6} d={s.icon} />
                  </svg>
                </div>
                <span className="text-[13px] font-bold text-white/[0.08] tabular-nums
                  group-hover:text-primary/30 transition-colors duration-300">
                  {s.num}
                </span>
              </div>

              {/* title + desc */}
              <div className="flex flex-col gap-2 flex-1">
                <h3 className="text-white font-semibold text-[15px] leading-snug">
                  {s.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {s.desc}
                </p>
              </div>

              {/* tags */}
              <div className="flex flex-wrap gap-1.5 pt-1 border-t border-white/[0.05]">
                {s.tags.map((tag) => (
                  <span key={tag}
                    className="text-[10px] font-medium text-gray-600
                      bg-white/[0.04] border border-white/[0.07]
                      px-2.5 py-1 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>

              {/* hover left accent */}
              <div className="absolute left-0 top-6 bottom-6 w-[2px] rounded-r-full
                bg-primary/0 group-hover:bg-primary/50
                transition-all duration-300" />
            </motion.div>
          ))}
        </div>

        {/* ── bottom CTA ── */}
        <motion.div
          variants={fadeUp(0.35)} initial="hidden" whileInView="show" viewport={{ once: true }}
          className="mt-14 flex flex-col sm:flex-row items-center justify-between gap-6
            border border-white/[0.07] rounded-2xl px-8 py-6 bg-white/[0.02]"
        >
          <div>
            <p className="text-white font-semibold text-base">Have a project in mind?</p>
            <p className="text-gray-500 text-sm mt-1">
              Let's discuss your requirements and build something great together.
            </p>
          </div>
          <a
            href="#contact"
            className="flex-shrink-0 inline-flex items-center gap-2 bg-primary text-black
              font-semibold text-sm px-6 py-3 rounded-full
              hover:bg-primary/90 active:scale-[0.97] transition-all
              shadow-[0_0_20px_rgba(29,205,159,0.2)] whitespace-nowrap"
          >
            Start a Project
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
