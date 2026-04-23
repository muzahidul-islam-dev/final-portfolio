import Icons from "../Icons";

const navItems = [
  { name: "About",    link: "#about"    },
  { name: "Projects", link: "#projects" },
  { name: "Services", link: "#service"  },
  { name: "Experience", link: "#experience" },
  { name: "Contact",  link: "#contact"  },
];

const serviceLinks = ["Laravel Development", "MERN Stack", "API Development", "E-commerce", "Bug Fixing"];

export default function FooterSection() {
  return (
    <footer className="border-t border-white/[0.06] bg-[#050505]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">

          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <a href="#" className="inline-block">
              <span className="text-2xl font-bold text-white">RH<span className="text-primary">.</span></span>
            </a>
            <p className="text-sm text-gray-600 mt-4 leading-relaxed max-w-[220px]">
              Full Stack Developer crafting modern, scalable web applications.
            </p>
            <div className="flex gap-3 mt-6">
              <a
                href="https://github.com/muzahidul-islam-dev"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="w-9 h-9 rounded-lg bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-gray-500 hover:text-white hover:border-primary/40 transition-all"
              >
                <Icons.gitHub className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-xs font-semibold text-white uppercase tracking-[0.15em] mb-5">Navigation</h4>
            <ul className="space-y-3">
              {navItems.map((item) => (
                <li key={item.name}>
                  <a href={item.link} className="text-sm text-gray-600 hover:text-primary transition-colors">
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xs font-semibold text-white uppercase tracking-[0.15em] mb-5">Services</h4>
            <ul className="space-y-3">
              {serviceLinks.map((s) => (
                <li key={s}>
                  <span className="text-sm text-gray-600">{s}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs font-semibold text-white uppercase tracking-[0.15em] mb-5">Contact</h4>
            <ul className="space-y-3">
              <li>
                <a href="mailto:muzahidulislam.dev@gmail.com" className="text-sm text-gray-600 hover:text-primary transition-colors break-all">
                  muzahidulislam.dev@gmail.com
                </a>
              </li>
              <li>
                <span className="text-sm text-gray-600">Bangladesh (Remote)</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/[0.05] pt-7 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-gray-700">
            © {new Date().getFullYear()} Rahat Hossain. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
