"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import VideoBackground from "@/components/ui/VideoBackground";

const attractions = [
  {
    title: "Aquarium",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/b/ba/Dubai_Mall_Aquarium_%285318995689%29.jpg",
    alt: "Dubai Mall Aquarium"
  },
  {
    title: "Ice rink",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/7/76/Dubai_Mall_Ice_Rink_%283884065365%29.jpg",
    alt: "Dubai Mall Ice Rink"
  },
  {
    title: "Attractions",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/5/50/The_Waterfall%2C_The_Dubai_Mall_%288668520922%29.jpg",
    alt: "The Waterfall at Dubai Mall"
  }
];

export default function EntertainmentSection() {
  return (
    <section id="entertainment" className="section-shell cinematic-noise flex items-center py-24">
      <VideoBackground
        posterSrc="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=2200&q=85"
        alt="Immersive attraction lights"
      />
      <Container className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15%" }}
          transition={{ duration: 0.9 }}
          className="max-w-5xl"
        >
          <p className="deck-kicker mb-5 text-gold/85">
            06 / Entertainment gravity
          </p>
          <h2 className="text-balance text-5xl font-semibold leading-[0.9] sm:text-7xl lg:text-8xl">
            Retail becomes a day-long destination.
          </h2>
        </motion.div>
        <div className="mt-16 grid gap-3 md:grid-cols-3">
          {attractions.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.09 }}
              className="group relative min-h-[340px] overflow-hidden rounded-lg border border-white/12 bg-black/36 p-7 backdrop-blur-xl"
            >
              <Image
                src={item.image}
                alt={item.alt}
                fill
                sizes="(min-width: 768px) 33vw, 100vw"
                unoptimized
                className="object-cover opacity-78 transition duration-700 group-hover:scale-105 group-hover:opacity-95"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/34 to-black/8" />
              <div className="relative z-10 flex h-full min-h-[286px] flex-col justify-between">
                <p className="text-sm uppercase tracking-[0.32em] text-white/66">Experience</p>
                <h3 className="text-4xl font-semibold">{item.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.12 }}
          className="mt-4 rounded-lg border border-white/12 bg-black/48 p-5 backdrop-blur-xl"
        >
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
            <div>
              <p className="deck-kicker text-emerald/80">Destination film</p>
              <p className="mt-2 max-w-2xl text-sm leading-6 text-white/62">
                The opening slide plays a Dubai Mall video as the deck background, matching the video-led digideck behavior from the reference.
              </p>
            </div>
            <button
              type="button"
              onClick={() => document.getElementById("hero")?.scrollIntoView({ behavior: "smooth" })}
              className="rounded-full bg-white px-5 py-3 text-sm font-semibold text-black transition hover:bg-gold"
            >
              Replay Opener
            </button>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
