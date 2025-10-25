"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/layout/container";

const brands = [
  "Axiom Capital",
  "Vertex Dynamics",
  "Helios Energy",
  "Novus Bank",
  "Orion Logistics",
  "Summit Biotech",
];

export function TrustedBy() {
  return (
    <section className="mt-8 px-4 sm:px-6 lg:px-8">
      <Container>
        <div className="rounded-3xl border border-white/10 bg-white/5 px-6 py-8 backdrop-blur">
          <div className="flex flex-col gap-6 text-center md:flex-row md:items-center md:justify-between md:text-left">
            <div>
              <p className="text-xs uppercase tracking-[0.35em] text-white/50">
                Trusted By
              </p>
              <p className="mt-2 text-sm text-white/70">
                Global industry leaders orchestrating AI-driven operations
              </p>
            </div>
            <motion.div
              className="flex flex-1 flex-wrap items-center justify-center gap-x-8 gap-y-4 text-sm font-medium uppercase tracking-[0.25em] text-white/50"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-20%" }}
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: { staggerChildren: 0.08, delayChildren: 0.2 },
                },
              }}
            >
              {brands.map((brand) => (
                <motion.span
                  key={brand}
                  variants={{ hidden: { opacity: 0, y: 12 }, visible: { opacity: 1, y: 0 } }}
                >
                  {brand}
                </motion.span>
              ))}
            </motion.div>
          </div>
        </div>
      </Container>
    </section>
  );
}
