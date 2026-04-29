"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";

const brands = [
  {
    title: "Flagship Fashion",
    detail: "Global launches and destination retail",
    image:
      "https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=1200&q=85",
    alt: "Luxury fashion runway and garments"
  },
  {
    title: "Fine Jewellery",
    detail: "High-intent luxury footfall",
    image:
      "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=1200&q=85",
    alt: "Fine jewellery close up"
  },
  {
    title: "Beauty Houses",
    detail: "Experiential beauty and fragrance",
    image:
      "https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=1200&q=85",
    alt: "Premium beauty products"
  },
  {
    title: "Lifestyle",
    detail: "Premium everyday discovery",
    image:
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1200&q=85",
    alt: "Premium lifestyle retail styling"
  },
  {
    title: "Department Stores",
    detail: "Anchor scale and cross-shopping",
    image:
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1200&q=85",
    alt: "Department store retail floor"
  },
  {
    title: "Design Studios",
    detail: "Interior, home, and collectible design",
    image:
      "https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&w=1200&q=85",
    alt: "Interior design studio furniture"
  },
  {
    title: "Tech Retail",
    detail: "Immersive consumer technology",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=85",
    alt: "Premium technology retail experience"
  },
  {
    title: "Concept Boutiques",
    detail: "Pop-ups, capsule drops, and limited runs",
    image:
      "https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?auto=format&fit=crop&w=1200&q=85",
    alt: "Boutique retail display"
  }
];

export default function RetailSection() {
  return (
    <section id="retail" className="section-shell flex items-center bg-ink py-24">
      <Container>
        <SectionHeading
          eyebrow="03 / Retail theatre"
          title="A global stage built for discovery, launch, and daily desire."
          body="From high-velocity stores to destination flagships, every tenant benefits from unmatched dwell, international reach, and adjacency to culture."
        />
        <div className="mt-16 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {brands.map((brand, index) => (
            <motion.div
              key={brand.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.65, delay: index * 0.04 }}
              whileHover={{ scale: 1.025 }}
              className="group relative aspect-[4/5] overflow-hidden rounded-lg border border-white/10 bg-white/[0.04] p-6"
            >
              <Image
                src={brand.image}
                alt={brand.alt}
                fill
                sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                className="object-cover opacity-64 transition duration-700 group-hover:scale-105 group-hover:opacity-82"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black/22" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(215,180,106,0.2),transparent_34%),linear-gradient(145deg,rgba(255,255,255,0.06),rgba(255,255,255,0))] opacity-80 transition duration-500 group-hover:opacity-100" />
              <div className="relative z-10 flex h-full flex-col justify-between">
                <span className="text-xs uppercase tracking-[0.32em] text-white/40">
                  0{index + 1}
                </span>
                <h3 className="max-w-[12rem] text-3xl font-semibold leading-none text-white">
                  {brand.title}
                </h3>
                <p className="max-w-[13rem] text-sm leading-6 text-white/0 transition duration-500 group-hover:text-white/62">
                  {brand.detail}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
