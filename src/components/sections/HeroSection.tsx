import { useState } from "react";
import { motion } from "motion/react";
import {
  Navbar, NavBody, NavItems, MobileNav, NavbarLogo, NavbarButton,
  MobileNavHeader, MobileNavToggle, MobileNavMenu,
} from "../ui/resizable-navbar";
import { FlipWords } from "../ui/flip-words";
import { NumberTicker } from "../ui/NumberTicker";
import Icons from "../Icons";
import ProfileImage from "../../assets/img/profile.jpg";
import { fadeUpVariant } from "./shared";

/* ─── data ─────────────────────────────────────────── */

const navItems = [
  { name: "About",    link: "#about"    },
  { name: "Projects", link: "#projects" },
  { name: "Services", link: "#service"  },
  { name: "Experience",   link: "#experience" },
  { name: "Contact",  link: "#contact"  },
];

const professionWords = [
  "Full Stack Developer",
  "Laravel Expert",
  "MERN Developer",
  "Web Designer",
];

const heroDescription =
  "I craft modern, scalable web applications with clean architecture and pixel-perfect interfaces. From backend APIs to polished frontends — I bring your ideas to life.";

const stats = [
  { value: 2,  suffix: "+", label: "Years of Experience" },
  { value: 10, suffix: "+", label: "Projects Delivered"  },
  { value: 98, suffix: "%", label: "Client Satisfaction" },
];

/* ─── component ─────────────────────────────────────── */

export default function HeroSection() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const downloadFile = () => {
    const link = document.createElement("a");
    link.href = "/muzahidul_islam_full_stack_developer.pdf";
    link.download = "muzahidul_islam_full_stack_developer.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden bg-[#080808]">

      {/* ── Background ─────────────────────────────── */}

      {/* fine dot grid */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ backgroundImage: "radial-gradient(rgba(255,255,255,0.035) 1px, transparent 1px)", backgroundSize: "32px 32px" }} />

      {/* top-center radial glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] rounded-full
        bg-[radial-gradient(ellipse_at_top,rgba(29,205,159,0.09)_0%,transparent_70%)]
        pointer-events-none" />

      {/* left accent glow */}
      <div className="absolute top-1/3 -left-32 w-[480px] h-[480px] rounded-full
        bg-primary/[0.05] blur-[100px] pointer-events-none" />

      {/* right accent glow */}
      <div className="absolute bottom-1/4 -right-32 w-[400px] h-[400px] rounded-full
        bg-sky-500/[0.04] blur-[90px] pointer-events-none" />

      {/* ── Navbar ─────────────────────────────────── */}
      <Navbar>
        <NavBody>
          <NavbarLogo />
          <NavItems items={navItems} />
          <NavbarButton variant="bgPrimary" href="#contact">Hire Me</NavbarButton>
        </NavBody>

        <MobileNav>
          <MobileNavHeader>
            <NavbarLogo />
            <MobileNavToggle
              isOpen={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            />
          </MobileNavHeader>
          <MobileNavMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)}>
            {navItems.map((item, idx) => (
              <a
                key={idx}
                href={item.link}
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center gap-3 text-gray-300 hover:text-primary transition-colors
                  py-3 px-2 text-sm font-medium border-b border-white/[0.05] last:border-0"
              >
                <span className="w-1 h-1 rounded-full bg-primary/60 flex-shrink-0" />
                {item.name}
              </a>
            ))}
            <div className="pt-3">
              <NavbarButton variant="bgPrimary" href="#contact" className="w-full"
                onClick={() => setIsMobileMenuOpen(false)}>
                Hire Me
              </NavbarButton>
            </div>
          </MobileNavMenu>
        </MobileNav>
      </Navbar>

      {/* ── Main content ───────────────────────────── */}
      <div className="flex-1 flex items-center">
        <div className="w-full max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 pt-28 sm:pt-32 lg:pt-36 pb-12 lg:pb-20">

          <div className="grid lg:grid-cols-[1fr_auto] gap-10 lg:gap-20 items-center">

            {/* ════════════════════════════════════════
                LEFT — text content
            ════════════════════════════════════════ */}
            <div className="order-2 lg:order-1 max-w-2xl">

              {/* availability badge */}
              <motion.div
                variants={fadeUpVariant(0)} initial="hidden" animate="show"
                className="inline-flex items-center gap-2.5 mb-8"
              >
                <span className="flex items-center gap-2 bg-primary/[0.08] border border-primary/[0.18]
                  rounded-full pl-2 pr-4 py-1.5">
                  <span className="relative flex h-2 w-2 flex-shrink-0">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-50" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
                  </span>
                  <span className="text-primary text-[11px] font-semibold tracking-[0.18em] uppercase">
                    Available for work
                  </span>
                </span>
              </motion.div>

              {/* headline */}
              <motion.div variants={fadeUpVariant(1)} initial="hidden" animate="show">
                <p className="text-gray-500 text-base font-medium mb-2 tracking-wide">
                  Hi there, I'm
                </p>
                <h1 className="text-[3.2rem] sm:text-[4rem] lg:text-[4.8rem] font-bold
                  text-white leading-[1.0] tracking-[-0.02em]">
                  Rahat
                  <br />
                  <span className="relative">
                    <span className="text-primary">Hossain</span>
                    {/* animated underline */}
                    <motion.span
                      className="absolute -bottom-1 left-0 h-[3px] rounded-full bg-primary/50"
                      initial={{ width: 0 }}
                      animate={{ width: "100%" }}
                      transition={{ delay: 0.9, duration: 0.6, ease: "easeOut" }}
                    />
                  </span>
                </h1>
              </motion.div>

              {/* role */}
              <motion.div
                variants={fadeUpVariant(2)} initial="hidden" animate="show"
                className="flex items-center gap-3 mt-5"
              >
                <div className="h-px w-6 bg-primary/50 flex-shrink-0" />
                <span className="text-lg sm:text-xl font-medium text-white/40">
                  <FlipWords words={professionWords} />
                </span>
              </motion.div>

              {/* description */}
              <motion.p
                variants={fadeUpVariant(3)} initial="hidden" animate="show"
                className="text-gray-400 text-[15px] leading-[1.9] mt-7 max-w-[480px]"
              >
                {heroDescription}
              </motion.p>

              {/* CTA row */}
              <motion.div
                variants={fadeUpVariant(4)} initial="hidden" animate="show"
                className="flex flex-wrap items-center gap-4 mt-10"
              >
                <a
                  href="mailto:muzahidulislam.dev@gmail.com"
                  className="group inline-flex items-center gap-2.5 bg-primary text-black
                    font-semibold px-7 py-3.5 rounded-full text-sm
                    shadow-[0_0_0_0_rgba(29,205,159,0.4)]
                    hover:shadow-[0_0_24px_6px_rgba(29,205,159,0.18)]
                    hover:bg-primary/90 active:scale-[0.97] transition-all duration-300"
                >
                  <svg className="w-4 h-4 transition-transform group-hover:translate-x-0.5"
                    fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  Get In Touch
                </a>

                <button
                  onClick={downloadFile}
                  className="group inline-flex items-center gap-2.5 bg-transparent
                    border border-white/[0.14] text-white font-semibold px-7 py-3.5
                    rounded-full text-sm hover:border-primary/40 hover:bg-primary/[0.06]
                    active:scale-[0.97] transition-all duration-300"
                >
                  <svg className="w-4 h-4 transition-transform group-hover:translate-y-0.5"
                    fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                      d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                  Download CV
                </button>
              </motion.div>

              {/* social row */}
              <motion.div
                variants={fadeUpVariant(5)} initial="hidden" animate="show"
                className="flex items-center gap-4 mt-9"
              >
                <span className="text-[11px] text-gray-600 uppercase tracking-[0.2em] font-medium">
                  Find me on
                </span>
                <div className="h-px w-6 bg-white/[0.08]" />
                <a
                  href="https://github.com/muzahidul-islam-dev"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="w-9 h-9 rounded-xl bg-white/[0.04] border border-white/[0.09]
                    flex items-center justify-center text-gray-500
                    hover:text-white hover:border-primary/40 hover:bg-primary/[0.08]
                    transition-all duration-200"
                >
                  <Icons.gitHub className="w-4 h-4" />
                </a>
              </motion.div>
            </div>

            {/* ════════════════════════════════════════
                RIGHT — profile image
            ════════════════════════════════════════ */}
            <motion.div
              variants={fadeUpVariant(1)} initial="hidden" animate="show"
              className="order-1 lg:order-2 flex justify-center lg:justify-end"
            >
              <div className="relative">

                {/* image container */}
                <div className="relative z-10 rounded-[1.5rem] overflow-hidden
                  w-[240px] sm:w-[270px] lg:w-[300px]
                  border border-white/[0.1] shadow-[0_32px_80px_rgba(0,0,0,0.5)]">
                  <img
                    src={ProfileImage}
                    alt="Rahat Hossain — Full Stack Developer"
                    className="w-full aspect-[3/4] object-cover object-top"
                  />
                  {/* subtle inner overlay for depth */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                </div>

                {/* floating chip — experience */}
                <motion.div
                  initial={{ opacity: 0, x: -16, y: 8 }}
                  animate={{ opacity: 1, x: 0, y: 0 }}
                  transition={{ delay: 0.75, duration: 0.5, ease: "easeOut" }}
                  className="absolute -left-14 top-8 z-20
                    bg-[#0f0f0f] border border-white/[0.1] rounded-2xl
                    px-4 py-3 shadow-[0_8px_32px_rgba(0,0,0,0.4)]
                    backdrop-blur-sm"
                >
                  <p className="text-[10px] text-gray-500 uppercase tracking-widest leading-none">Experience</p>
                  <p className="text-white font-bold text-lg leading-none mt-1.5">
                    2+ <span className="text-xs font-normal text-gray-400">yrs</span>
                  </p>
                </motion.div>

                {/* floating chip — stack */}
                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.05, duration: 0.5, ease: "easeOut" }}
                  className="absolute -bottom-5 left-1/2 -translate-x-1/2 z-20
                    bg-[#0f0f0f] border border-primary/[0.22] rounded-full
                    px-5 py-2 shadow-[0_8px_32px_rgba(0,0,0,0.4)]
                    backdrop-blur-sm flex items-center gap-2 whitespace-nowrap"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse flex-shrink-0" />
                  <span className="text-[11px] text-gray-300 font-medium tracking-wide">
                    Laravel · MERN
                  </span>
                </motion.div>
              </div>
            </motion.div>
          </div>

          {/* ════════════════════════════════════════
              Stats row
          ════════════════════════════════════════ */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.65, duration: 0.7, ease: "easeOut" }}
            className="mt-24 lg:mt-28"
          >
            {/* top divider */}
            <div className="h-px w-full bg-gradient-to-r from-transparent via-white/[0.08] to-transparent mb-10" />

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-0 divide-y sm:divide-y-0 sm:divide-x divide-white/[0.06]">
              {stats.map((s, i) => (
                <div
                  key={i}
                  className="group flex flex-col sm:items-center px-0 sm:px-10 py-6 sm:py-0
                    first:pl-0 last:pr-0 cursor-default"
                >
                  <div className="flex items-end gap-1.5">
                    <span className="text-4xl sm:text-5xl font-bold text-primary leading-none
                      group-hover:drop-shadow-[0_0_12px_rgba(29,205,159,0.5)] transition-all duration-300">
                      <NumberTicker className="text-primary" value={s.value} />
                      {s.suffix}
                    </span>
                  </div>
                  <p className="text-sm text-gray-500 mt-2 font-medium tracking-wide">
                    {s.label}
                  </p>
                </div>
              ))}
            </div>

            {/* bottom divider */}
            <div className="h-px w-full bg-gradient-to-r from-transparent via-white/[0.08] to-transparent mt-10" />
          </motion.div>
        </div>
      </div>

      {/* bottom fade */}
      <div className="absolute bottom-0 inset-x-0 h-28
        bg-gradient-to-t from-[#080808] to-transparent pointer-events-none" />
    </section>
  );
}
