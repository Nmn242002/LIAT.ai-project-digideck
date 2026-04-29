"use client";

import { useEffect, useState } from "react";

const navItems = [
  { id: "hero", label: "Hero" },
  { id: "stats", label: "Stats" },
  { id: "retail", label: "Retail" },
  { id: "luxury", label: "Luxury" },
  { id: "dining", label: "Dining" },
  { id: "entertainment", label: "Entertainment" },
  { id: "events", label: "Events" },
  { id: "cta", label: "CTA" }
];

export default function Navbar() {
  const [active, setActive] = useState("hero");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible?.target.id) {
          setActive(visible.target.id);
        }
      },
      { threshold: [0.28, 0.45, 0.62], rootMargin: "-10% 0px -45% 0px" }
    );

    navItems.forEach(({ id }) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const handleScroll = (id: string) => {
    const target = document.getElementById(id);
    if (!target) return;

    if (window.__lenis) {
      window.__lenis.scrollTo(target, { offset: 0 });
      return;
    }

    target.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="fixed left-1/2 top-4 z-50 w-[calc(100%-1.5rem)] max-w-6xl -translate-x-1/2 rounded-full border border-white/10 bg-black/44 px-3 py-2 shadow-2xl backdrop-blur-2xl sm:top-6 sm:px-4">
      <div className="flex items-center justify-between gap-3">
        <button
          type="button"
          onClick={() => handleScroll("hero")}
          className="shrink-0 px-2 text-left text-[11px] font-semibold uppercase tracking-[0.28em] text-white sm:px-3"
        >
          Dubai Mall Digideck
        </button>
        <div className="no-scrollbar flex min-w-0 flex-1 items-center justify-end gap-1 overflow-x-auto">
          {navItems.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => handleScroll(item.id)}
              className={`rounded-full px-3 py-2 text-[11px] font-medium transition sm:text-xs ${
                active === item.id
                  ? "bg-gold text-black"
                  : "text-white/58 hover:bg-white/10 hover:text-white"
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>
      <div className="pointer-events-none absolute -bottom-9 left-1/2 hidden -translate-x-1/2 items-center gap-2 text-[10px] uppercase tracking-[0.32em] text-white/38 lg:flex">
        <span>{String(navItems.findIndex((item) => item.id === active) + 1).padStart(2, "0")}</span>
        <span className="h-px w-16 bg-white/20" />
        <span>{String(navItems.length).padStart(2, "0")}</span>
      </div>
    </nav>
  );
}
