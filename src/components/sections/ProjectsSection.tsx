import { motion } from "motion/react";
import Projects, { type Project } from "../Projects";
import { SectionLabel, SectionHeading } from "./shared";

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" as const, delay } },
});

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const num = String(index + 1).padStart(2, "0");
  const isLive = project.link !== "#";

  return (
    <motion.div
      variants={fadeUp(0.05 + index * 0.06)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="group flex flex-col border border-white/[0.07] rounded-2xl overflow-hidden
        bg-white/[0.02] hover:border-primary/25 transition-colors duration-300"
    >
      {/* image */}
      <div className="relative overflow-hidden aspect-[16/10]">
        <img
          src={project.thumbnail}
          alt={project.title}
          className="w-full h-full object-cover object-top
            group-hover:scale-[1.04] transition-transform duration-700 ease-out"
        />
        {/* bottom fade */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d0d] via-transparent to-transparent" />

        {/* index number — top right */}
        <span className="absolute top-3 right-3 text-[11px] font-bold text-white/20
          bg-black/40 backdrop-blur-sm border border-white/[0.08] rounded-full
          w-8 h-8 flex items-center justify-center">
          {num}
        </span>

        {/* live link overlay on hover */}
        {isLive && (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute inset-0 flex items-center justify-center
              bg-black/50 backdrop-blur-[2px]
              opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          >
            <span className="inline-flex items-center gap-2 bg-primary text-black
              font-semibold text-sm px-5 py-2.5 rounded-full
              translate-y-2 group-hover:translate-y-0 transition-transform duration-300
              shadow-[0_0_20px_rgba(29,205,159,0.3)]">
              View Live
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5}
                  d="M7 17L17 7M17 7H7M17 7v10" />
              </svg>
            </span>
          </a>
        )}
      </div>

      {/* content */}
      <div className="flex flex-col flex-1 p-5 gap-3">
        {/* tags */}
        <div className="flex flex-wrap gap-1.5">
          {project.tags.map((tag) => (
            <span key={tag}
              className="text-[10px] font-medium text-gray-500
                bg-white/[0.04] border border-white/[0.07]
                px-2.5 py-1 rounded-full">
              {tag}
            </span>
          ))}
        </div>

        {/* title + desc */}
        <div>
          <h3 className="text-white font-semibold text-[15px] leading-snug">{project.title}</h3>
          <p className="text-gray-500 text-sm leading-relaxed mt-1.5">{project.description}</p>
        </div>

        {/* footer */}
        <div className="mt-auto pt-3 border-t border-white/[0.06] flex items-center justify-between">
          <span className="text-[10px] text-gray-700 uppercase tracking-widest font-medium">
            {isLive ? "Live project" : "Private project"}
          </span>
          {isLive ? (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary text-xs font-semibold flex items-center gap-1
                hover:gap-2 transition-all duration-200"
            >
              Visit
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5}
                  d="M7 17L17 7M17 7H7M17 7v10" />
              </svg>
            </a>
          ) : (
            <span className="text-gray-700 text-xs font-medium flex items-center gap-1">
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                  d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
              Private
            </span>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-28 bg-[#080808] relative overflow-hidden">

      {/* bg glow */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[400px] pointer-events-none
        bg-[radial-gradient(ellipse_at_bottom_right,rgba(29,205,159,0.05)_0%,transparent_70%)]" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">

        {/* header */}
        <motion.div
          variants={fadeUp(0)} initial="hidden" whileInView="show" viewport={{ once: true }}
          className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12"
        >
          <div>
            <SectionLabel>Portfolio</SectionLabel>
            <SectionHeading>
              Selected <span className="text-primary">Projects</span>
            </SectionHeading>
          </div>
          <p className="text-gray-500 text-sm max-w-xs leading-relaxed sm:text-right">
            Real-world projects built for clients across different industries.
          </p>
        </motion.div>

        {/* grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {Projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>

      </div>
    </section>
  );
}
