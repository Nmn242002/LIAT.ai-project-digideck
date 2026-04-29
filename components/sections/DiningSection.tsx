"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";

const dining = [
  {
    title: "Terrace Dining",
    src: "https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=1200&q=85"
  },
  {
    title: "Signature Cafes",
    src: "https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=1200&q=85"
  },
  {
    title: "Fine Dining",
    src: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1200&q=85"
  }
];

export default function DiningSection() {
  return (
    <section id="dining" className="section-shell bg-[#0b0b09] py-24">
      <Container>
        <SectionHeading
          eyebrow="05 / Dining as dwell"
          title="More reasons to arrive early, stay late, and return often."
          body="Over 200 dining outlets turn retail traffic into full-day experiences, from celebratory tables to quick premium rituals."
        />
        <div className="mt-16 grid gap-4 lg:grid-cols-3">
          {dining.map((item, index) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 36 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-12%" }}
              transition={{ duration: 0.75, delay: index * 0.1 }}
              className="group relative min-h-[520px] overflow-hidden rounded-lg"
            >
              <Image
                src={item.src}
                alt={item.title}
                fill
                sizes="(min-width: 1024px) 33vw, 100vw"
                className="object-cover transition duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/82 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 p-7">
                <p className="mb-3 text-xs uppercase tracking-[0.3em] text-white/46">
                  0{index + 1}
                </p>
                <h3 className="text-3xl font-semibold">{item.title}</h3>
              </div>
            </motion.article>
          ))}
        </div>
      </Container>
    </section>
  );
}
