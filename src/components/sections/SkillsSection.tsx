import { cn } from "../../lib/utils";
import { SparklesCore } from "../ui/sparkles";
import Icons from "../Icons";
import { SectionLabel, SectionHeading } from "./shared";

const skills = [
  { icon: "phpSkillIcon",     label: "PHP",          bg: false },
  { icon: "laravelSkillIcon", label: "Laravel",      bg: true  },
  { icon: "mysqlIcon",        label: "MySQL",        bg: false },
  { icon: "mongoDBIcon",      label: "MongoDB",      bg: false },
  { icon: "reactJsIcon",      label: "React",        bg: false },
  { icon: "expressIcon",      label: "Express.js",   bg: false },
  { icon: "typeScriptIcon",   label: "TypeScript",   bg: false },
  { icon: "nextJsIcon",       label: "Next.js",      bg: false },
  { icon: "tailwindCSS",      label: "Tailwind CSS", bg: false },
  { icon: "javascriptIcon",   label: "JavaScript",   bg: false },
  { icon: "dartIcon",         label: "Dart",         bg: false },
  { icon: "wordpressIcon",    label: "WordPress",    bg: false },
  { icon: "flutterIcon",      label: "Flutter",      bg: false },
  { icon: "postmanIcon",      label: "Postman",      bg: false },
  { icon: "gitIcon",          label: "Git / GitHub", bg: false },
];

export default function SkillsSection() {
  return (
    <section id="skills" className="py-28 bg-[#080808] border-t border-white/[0.05]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">

        <div className="text-center mb-4">
          <SectionLabel>Tech Stack</SectionLabel>
          <SectionHeading>
            Skills &amp; <span className="text-primary">Experience</span>
          </SectionHeading>
        </div>

        {/* Sparkle divider */}
        <div className="relative w-full max-w-xl mx-auto h-16 mb-12">
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent" />
          <SparklesCore
            background="transparent"
            minSize={0.3}
            maxSize={0.9}
            particleDensity={600}
            className="w-full h-full"
            particleColor="#1DCD9F"
          />
          <div className="absolute inset-0 bg-[#080808] [mask-image:radial-gradient(280px_80px_at_top,transparent_30%,white)]" />
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
          {skills.map((skill) => {
            const IconComp = (Icons as Record<string, React.FC<React.SVGProps<SVGSVGElement>>>)[skill.icon];
            return (
              <div
                key={skill.label}
                className={cn(
                  "group relative bg-white/[0.03] border border-white/[0.07] hover:border-primary/40 rounded-xl",
                  "py-6 px-4 flex flex-col items-center gap-3",
                  "transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(29,205,159,0.1)] overflow-hidden"
                )}
              >
                <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className={cn(
                  "relative flex items-center justify-center w-12 h-12 rounded-xl",
                  skill.bg ? "bg-white p-2" : "bg-white/5"
                )}>
                  {IconComp && <IconComp className="h-8 w-8" />}
                </div>
                <p className="relative text-gray-300 text-xs font-medium text-center group-hover:text-white transition-colors">
                  {skill.label}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
