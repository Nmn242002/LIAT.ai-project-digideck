"use client";

import { motion } from "framer-motion";
import Container from "@/components/ui/Container";

const actions = ["Lease at Dubai Mall", "Partner With Us", "Host Your Event"];

export default function CTASection() {
  return (
    <section id="cta" className="section-shell cinematic-noise flex items-center bg-black py-24">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_40%,rgba(215,180,106,0.2),transparent_35%),linear-gradient(180deg,#080808,#000)]" />
      <Container className="text-center">
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.75 }}
          className="deck-kicker mb-6 text-gold/80"
        >
          08 / Invitation
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.08 }}
          className="mx-auto max-w-5xl text-balance text-5xl font-semibold leading-[0.9] sm:text-7xl lg:text-8xl"
        >
          Be Part of the World&apos;s Most Visited Destination
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.18 }}
          className="mx-auto mt-12 flex max-w-3xl flex-col justify-center gap-3 sm:flex-row"
        >
          {actions.map((action, index) => (
            <a
              key={action}
              href={`mailto:partnerships@example.com?subject=${encodeURIComponent(action)}`}
              className={`rounded-full px-6 py-4 text-sm font-semibold transition ${
                index === 0
                  ? "bg-white text-black hover:bg-gold"
                  : "border border-white/18 text-white hover:border-white/40 hover:bg-white/10"
              }`}
            >
              {action}
            </a>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
