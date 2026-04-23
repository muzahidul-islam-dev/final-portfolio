export function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3 mb-4">
      <span className="h-px w-8 bg-primary" />
      <span className="text-primary text-xs font-semibold uppercase tracking-[0.2em]">{children}</span>
    </div>
  );
}

export function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
      {children}
    </h2>
  );
}

export function fadeUpVariant(i = 0) {
  return {
    hidden: { opacity: 0, y: 28 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" as const, delay: i * 0.1 },
    },
  };
}
