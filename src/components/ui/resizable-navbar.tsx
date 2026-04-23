import { cn } from "./../../lib/utils";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "motion/react";
import React, { useRef, useState, useEffect } from "react";

/* ─── Types ─────────────────────────────────────────────── */

interface NavbarProps   { children: React.ReactNode; className?: string; }
interface NavBodyProps  { children: React.ReactNode; className?: string; visible?: boolean; }
interface NavItemsProps {
  items: { name: string; link: string }[];
  className?: string;
  onItemClick?: () => void;
}
interface MobileNavProps       { children: React.ReactNode; className?: string; visible?: boolean; }
interface MobileNavHeaderProps { children: React.ReactNode; className?: string; }
interface MobileNavMenuProps   { children: React.ReactNode; className?: string; isOpen: boolean; onClose: () => void; }

/* ─── Navbar shell ──────────────────────────────────────── */

export const Navbar = ({ children, className }: NavbarProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  const [visible, setVisible] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setVisible(latest > 60);
  });

  return (
    <motion.div
      ref={ref}
      className={cn("fixed inset-x-0 top-0 z-50 w-full", className)}
    >
      {React.Children.map(children, (child) =>
        React.isValidElement(child)
          ? React.cloneElement(child as React.ReactElement<{ visible?: boolean }>, { visible })
          : child
      )}
    </motion.div>
  );
};

/* ─── Desktop nav body ──────────────────────────────────── */

export const NavBody = ({ children, className, visible }: NavBodyProps) => {
  return (
    <motion.div
      initial={false}
      animate={visible ? "scrolled" : "top"}
      variants={{
        top: {
          backgroundColor: "rgba(8,8,8,0)",
          borderColor: "rgba(255,255,255,0)",
          paddingTop: "20px",
          paddingBottom: "20px",
        },
        scrolled: {
          backgroundColor: "rgba(8,8,8,0.85)",
          borderColor: "rgba(255,255,255,0.07)",
          paddingTop: "12px",
          paddingBottom: "12px",
        },
      }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      style={{ backdropFilter: "blur(20px)", WebkitBackdropFilter: "blur(20px)" }}
      className={cn(
        "hidden lg:flex w-full items-center justify-between",
        "border-b px-8 xl:px-12",
        className
      )}
    >
      <div className="w-full max-w-7xl mx-auto flex items-center justify-between">
        {children}
      </div>
    </motion.div>
  );
};

/* ─── Desktop nav items ─────────────────────────────────── */

export const NavItems = ({ items, className, onItemClick }: NavItemsProps) => {
  const [activeSection, setActiveSection] = useState<string>("");
  const [hovered, setHovered] = useState<number | null>(null);

  // Track active section via IntersectionObserver
  useEffect(() => {
    const ids = items.map((i) => i.link.replace("#", ""));
    const observers: IntersectionObserver[] = [];

    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveSection(id); },
        { threshold: 0.4 }
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, [items]);

  return (
    <div
      onMouseLeave={() => setHovered(null)}
      className={cn("flex items-center gap-1", className)}
    >
      {items.map((item, idx) => {
        const id = item.link.replace("#", "");
        const isActive = activeSection === id;
        return (
          <a
            key={idx}
            href={item.link}
            onClick={onItemClick}
            onMouseEnter={() => setHovered(idx)}
            className="relative px-4 py-2 group"
          >
            {/* hover pill */}
            {hovered === idx && (
              <motion.span
                layoutId="nav-hover-pill"
                className="absolute inset-0 rounded-full bg-white/[0.06]"
                transition={{ type: "spring", stiffness: 380, damping: 30 }}
              />
            )}

            <span className={cn(
              "relative z-10 text-sm font-medium transition-colors duration-200",
              isActive ? "text-white" : "text-gray-400 group-hover:text-white"
            )}>
              {item.name}
            </span>

            {/* active underline */}
            <motion.span
              className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[2px] rounded-full bg-primary"
              initial={false}
              animate={{ width: isActive ? "60%" : "0%" }}
              transition={{ duration: 0.25, ease: "easeInOut" }}
            />
          </a>
        );
      })}
    </div>
  );
};

/* ─── Mobile nav wrapper ────────────────────────────────── */

export const MobileNav = ({ children, className, visible }: MobileNavProps) => {
  return (
    <motion.div
      initial={false}
      animate={visible ? "scrolled" : "top"}
      variants={{
        top:      { backgroundColor: "rgba(8,8,8,0)",    borderColor: "rgba(255,255,255,0)" },
        scrolled: { backgroundColor: "rgba(8,8,8,0.9)",  borderColor: "rgba(255,255,255,0.07)" },
      }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      style={{ backdropFilter: "blur(20px)", WebkitBackdropFilter: "blur(20px)" }}
      className={cn(
        "flex lg:hidden w-full flex-col border-b px-5 py-3",
        className
      )}
    >
      {children}
    </motion.div>
  );
};

/* ─── Mobile nav header ─────────────────────────────────── */

export const MobileNavHeader = ({ children, className }: MobileNavHeaderProps) => (
  <div className={cn("flex w-full items-center justify-between", className)}>
    {children}
  </div>
);

/* ─── Mobile nav menu (drawer) ──────────────────────────── */

export const MobileNavMenu = ({ children, className, isOpen, onClose }: MobileNavMenuProps) => {
  const childArray = React.Children.toArray(children);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* backdrop */}
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 top-[56px] z-40 bg-black/60 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* drawer panel */}
          <motion.div
            key="drawer"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            className={cn(
              "absolute inset-x-0 top-full z-50",
              "bg-[#0d0d0d] border border-white/[0.08] border-t-0",
              "rounded-b-2xl shadow-[0_20px_60px_rgba(0,0,0,0.6)]",
              "px-5 pt-4 pb-6 flex flex-col gap-1",
              className
            )}
          >
            {childArray.map((child, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.05, duration: 0.2, ease: "easeOut" }}
              >
                {child}
              </motion.div>
            ))}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

/* ─── Mobile toggle button ──────────────────────────────── */

export const MobileNavToggle = ({ isOpen, onClick }: { isOpen: boolean; onClick: () => void }) => (
  <button
    onClick={onClick}
    aria-label={isOpen ? "Close menu" : "Open menu"}
    className="relative w-9 h-9 flex flex-col items-center justify-center gap-[5px] rounded-lg hover:bg-white/[0.06] transition-colors"
  >
    <motion.span
      animate={isOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
      transition={{ duration: 0.22, ease: "easeInOut" }}
      className="block w-5 h-[1.5px] bg-white rounded-full origin-center"
    />
    <motion.span
      animate={isOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
      transition={{ duration: 0.15 }}
      className="block w-5 h-[1.5px] bg-white rounded-full"
    />
    <motion.span
      animate={isOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
      transition={{ duration: 0.22, ease: "easeInOut" }}
      className="block w-5 h-[1.5px] bg-white rounded-full origin-center"
    />
  </button>
);

/* ─── Logo ──────────────────────────────────────────────── */

export const NavbarLogo = () => (
  <a href="#" className="relative z-20 flex items-center gap-2 select-none">
    <span className="text-2xl font-bold text-white tracking-tight leading-none">
      RH<span className="text-primary">.</span>
    </span>
  </a>
);

/* ─── CTA Button ────────────────────────────────────────── */

export const NavbarButton = <T extends React.ElementType = "a">({
  href,
  as,
  children,
  className,
  variant = "primary",
  ...props
}: {
  href?: string;
  as?: T;
  children: React.ReactNode;
  className?: string;
  variant?: "primary" | "secondary" | "dark" | "gradient" | "bgPrimary";
} & React.ComponentPropsWithoutRef<T>) => {
  const Tag = as || "a";

  const base = "inline-flex items-center justify-center gap-2 text-sm font-semibold px-5 py-2 rounded-full cursor-pointer transition-all duration-200 select-none";

  const variants: Record<string, string> = {
    primary:   "bg-white text-black hover:bg-white/90",
    secondary: "bg-transparent text-white border border-white/20 hover:border-white/40",
    dark:      "bg-[#111] text-white border border-white/10 hover:border-white/20",
    gradient:  "bg-gradient-to-r from-primary to-teal-400 text-black hover:opacity-90",
    bgPrimary: "bg-primary text-black hover:bg-primary/90 active:scale-[0.97]",
  };

  const Component: any = Tag;

  return (
    <Component
      href={href || undefined}
      className={cn(base, variants[variant], className)}
      {...(props as any)}
    >
      {children}
    </Component>
  );
};
