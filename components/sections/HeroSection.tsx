"use client";

import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import VideoBackground from "@/components/ui/VideoBackground";

export default function HeroSection() {
  return (
    <section id="hero" className="section-shell cinematic-noise flex items-center">
      <VideoBackground
        posterSrc="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=2400&q=85"
        alt="Downtown Dubai skyline at night"
        embedSrc="/videos/hero.mp4"
        priority
      />
      <Container className="relative z-20 flex min-h-svh items-center justify-center pb-16 pt-36 text-center sm:pb-20">
        <div className="max-w-6xl">
          <motion.p
            initial={{ opacity: 1, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="deck-kicker mb-6 text-gold/90"
          >
            Interactive Partner Digideck
          </motion.p>
          <motion.h1
            initial={{ opacity: 1, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.05, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="text-balance text-5xl font-semibold leading-[0.88] text-white sm:text-7xl lg:text-8xl xl:text-9xl"
          >
            The World&apos;s Most Visited Retail Destination
          </motion.h1>
          <motion.p
            initial={{ opacity: 1, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.05, delay: 0.22, ease: [0.22, 1, 0.36, 1] }}
            className="mx-auto mt-8 max-w-2xl text-base leading-8 text-white/72 sm:text-xl"
          >
            Where retail, luxury, entertainment, and global culture converge.
          </motion.p>
          <motion.div
            initial={{ opacity: 1, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.36 }}
            className="mx-auto mt-10 grid max-w-3xl grid-cols-3 overflow-hidden rounded-lg border border-white/14 bg-black/40 text-left backdrop-blur-xl"
          >
            {["Retail Tenants", "Luxury Brands", "Event Partners"].map((item) => (
              <div key={item} className="border-r border-white/10 p-4 last:border-r-0">
                <p className="text-[10px] uppercase tracking-[0.28em] text-white/42">Built for</p>
                <p className="mt-3 text-sm font-semibold text-white sm:text-base">{item}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </Container>
      <div className="absolute bottom-5 left-1/2 z-10 h-12 w-px -translate-x-1/2 overflow-hidden bg-white/16">
        <div className="h-5 w-px animate-[pulse_1.8s_ease-in-out_infinite] bg-gold" />
      </div>
    </section>
  );
}
