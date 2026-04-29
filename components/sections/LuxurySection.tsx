"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";

export default function LuxurySection() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [-40, 40]);

  return (
    <section id="luxury" ref={ref} className="section-shell flex items-center bg-[#070706] py-24">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <SectionHeading
            eyebrow="04 / Luxury quarter"
            title="Precision, privacy, and presence for the world's most discerning clients."
            body="An environment where heritage maisons, contemporary labels, and ultra-premium services can meet a truly international audience."
          />
          <motion.div style={{ y }} className="relative min-h-[560px] overflow-hidden rounded-lg border border-white/10 shadow-glow">
            <Image
              src="https://images.unsplash.com/photo-1604014237800-1c9102c219da?auto=format&fit=crop&w=1600&q=85"
              alt="Luxury retail interior"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
            <div className="absolute bottom-0 left-0 max-w-md p-8">
              <p className="deck-kicker text-gold/80">
                Flagship context
              </p>
              <p className="mt-4 text-3xl font-semibold leading-tight">
                Designed for moments that feel personal at global scale.
              </p>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
