"use client";

import { motion } from "framer-motion";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  body?: string;
  align?: "left" | "center";
};

export default function SectionHeading({
  eyebrow,
  title,
  body,
  align = "left"
}: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-15%" }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className={align === "center" ? "mx-auto max-w-4xl text-center" : "max-w-4xl"}
    >
      <p className="mb-5 text-xs font-semibold uppercase tracking-[0.36em] text-gold/80">
        {eyebrow}
      </p>
      <h2 className="text-balance text-4xl font-semibold leading-[0.95] text-white sm:text-6xl lg:text-7xl">
        {title}
      </h2>
      {body ? (
        <p className="mt-6 max-w-2xl text-base leading-7 text-white/62 sm:text-lg">
          {body}
        </p>
      ) : null}
    </motion.div>
  );
}
