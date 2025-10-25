"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/layout/container";

const easing = [0.16, 1, 0.3, 1] as const;

export function StrategicCTA() {
  return (
    <section className="mt-24 px-4 sm:px-6 lg:px-8">
      <Container>
        <motion.div
        initial={{ opacity: 0, scale: 0.94 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.7, ease: easing }}
        className="relative overflow-hidden rounded-[32px] border border-white/10 bg-gradient-to-br from-[#10172B] via-[#0D1324] to-[#0A0F1E] px-8 py-12 text-center text-white shadow-[0_40px_140px_-80px_rgba(71,126,255,0.9)]"
      >
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(127,92,255,0.45),transparent_55%)]" />
        <div className="relative z-10 mx-auto max-w-2xl space-y-6">
          <p className="text-xs uppercase tracking-[0.4em] text-white/50">
            Executive Advisory
          </p>
          <h3 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            Assemble an AI command center built for regulated, mission-critical enterprises.
          </h3>
          <p className="text-base text-white/70">
            Schedule an executive workshop with our architecture and transformation leaders to identify high-impact autonomation opportunities and governance requirements.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button href="/contact" size="lg" floating>
              Book Executive Session
            </Button>
            <Button href="/about" size="lg" variant="secondary">
              Meet the Leadership Team
            </Button>
          </div>
        </div>
        </motion.div>
      </Container>
    </section>
  );
}
