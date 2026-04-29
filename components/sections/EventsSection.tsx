"use client";

import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";

const events = [
  {
    time: "01",
    title: "Concerts",
    copy: "High-attention cultural moments that turn footfall into shared memory."
  },
  {
    time: "02",
    title: "Brand activations",
    copy: "Immersive launches, pop-ups, and sponsor-led experiences with premium audience capture."
  },
  {
    time: "03",
    title: "Seasonal spectacles",
    copy: "A programming canvas for global calendars, tourism peaks, and luxury retail beats."
  }
];

export default function EventsSection() {
  return (
    <section id="events" className="section-shell flex items-center bg-[#060606] py-24">
      <Container>
        <SectionHeading
          eyebrow="07 / Event platform"
          title="A place where campaigns become destinations."
          body="For partners, the mall is not just media space. It is a live stage with constant audience, cultural permission, and visual scale."
        />
        <div className="mt-16 overflow-hidden rounded-lg border border-white/10">
          {events.map((event, index) => (
            <motion.article
              key={event.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -32 : 32 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-15%" }}
              transition={{ duration: 0.75 }}
              className="grid border-b border-white/10 bg-white/[0.03] last:border-b-0 lg:grid-cols-[220px_1fr]"
            >
              <div className="border-b border-white/10 p-8 lg:border-b-0 lg:border-r">
                <p className="text-5xl font-semibold text-gold/80">{event.time}</p>
              </div>
              <div className="p-8 sm:p-10">
                <h3 className="text-4xl font-semibold text-white sm:text-5xl">{event.title}</h3>
                <p className="mt-4 max-w-2xl text-base leading-7 text-white/58">{event.copy}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </Container>
    </section>
  );
}
