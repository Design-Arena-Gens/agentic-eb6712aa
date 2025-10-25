"use client";

import { motion } from "framer-motion";
import { HeroCanvas } from "@/components/three/hero-canvas";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/layout/container";

const easing = [0.16, 1, 0.3, 1] as const;

const container = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.9,
      ease: easing,
      staggerChildren: 0.12,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: easing } },
};

export function HeroSection() {
  return (
    <section className="relative isolate px-4 pb-24 pt-10 sm:px-6 lg:px-8">
      <Container className="flex flex-col gap-16 lg:flex-row lg:items-center">
      <motion.div
        className="relative z-10 flex flex-1 flex-col gap-8"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        <motion.span
          variants={item}
          className="inline-flex w-fit items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs uppercase tracking-[0.35em] text-white/70"
        >
          Autonomous AI Systems
        </motion.span>
        <motion.h1
          variants={item}
          className="text-balance text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl"
        >
          Designing the operating system for the enterprise of tomorrow.
        </motion.h1>
        <motion.p
          variants={item}
          className="max-w-xl text-lg leading-relaxed text-white/70"
        >
          Nexari Labs partners with Fortune 500 leaders to automate complex value chains,
          orchestrate hybrid intelligence, and deliver measurable operational lift across the entire enterprise.
        </motion.p>
        <motion.div variants={item} className="flex flex-wrap items-center gap-4">
          <Button href="/contact" floating size="lg">
            Launch Discovery
          </Button>
          <Button href="/services" variant="secondary" size="lg">
            Explore Services
          </Button>
        </motion.div>
        <motion.div
          variants={item}
          className="grid max-w-xl grid-cols-2 gap-6 rounded-3xl border border-white/10 bg-white/5 px-6 py-4 backdrop-blur lg:max-w-none lg:grid-cols-3"
        >
          {[
            { metric: "220%", label: "Productivity lift via autonomous ops" },
            { metric: "43", label: "Enterprise platforms integrated" },
            { metric: "<60 days", label: "From blueprint to live automation" },
          ].map((itemData) => (
            <div key={itemData.metric} className="space-y-1">
              <p className="text-2xl font-semibold text-white">{itemData.metric}</p>
              <p className="text-sm text-white/60">{itemData.label}</p>
            </div>
          ))}
        </motion.div>
      </motion.div>
      <motion.div
        className="relative flex flex-1 items-center justify-end"
        initial={{ opacity: 0, scale: 0.96, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 1, ease: easing, delay: 0.12 }}
      >
        <HeroCanvas />
        <div className="pointer-events-none absolute -bottom-10 left-8 hidden max-w-xs rounded-3xl border border-white/10 bg-white/10 p-4 backdrop-blur-md lg:flex">
          <div>
            <p className="text-xs uppercase tracking-[0.4em] text-white/50">Live Signal</p>
            <p className="mt-3 text-sm text-white/70">
              Predictive automation orchestrating 84M+ annual events on behalf of our clients.
            </p>
          </div>
        </div>
      </motion.div>
      </Container>
    </section>
  );
}
