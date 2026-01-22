"use client";

interface PageHeaderProps {
  eyebrow: string;
  title: string;
  subtitle: string;
}

export default function PageHeader({
  eyebrow,
  title,
  subtitle,
}: PageHeaderProps) {
  return (
    <header className="mb-14">
      {/* EYEBROW — LOCKED */}
      <p className="uppercase text-xs tracking-wider text-[#64748B] mb-3">
        {eyebrow}
      </p>

      {/* TITLE — LOCKED */}
      <h1 className="text-3xl md:text-4xl font-extrabold text-[#0B3A63] mb-6">
        {title}
      </h1>

      {/* SUBTITLE — LOCKED */}
      <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed max-w-3xl">
        {subtitle}
      </p>

      {/* DIVIDER — LOCKED */}
      <div className="w-20 h-[2px] bg-gray-300 dark:bg-gray-700 mt-10" />
    </header>
  );
}
