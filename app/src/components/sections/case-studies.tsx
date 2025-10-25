"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/layout/container";

const cases = [
  {
    client: "Fortune 20 Financial Services",
    outcome: "Scaled AI risk controls managing $3.7T in assets with 0 regulatory exceptions.",
    value: "+31% risk review velocity",
    badge: "Global Risk Fabric",
  },
  {
    client: "Global Pharma Leader",
    outcome: "Autonomous trial orchestration reducing cycle time by 26 days across 14 markets.",
    value: "18x faster insights",
    badge: "Clinical Intelligence Mesh",
  },
  {
    client: "Top 5 Logistics Provider",
    outcome: "AI command center orchestrating 9M shipments with predictive exception handling.",
    value: "$420M cost avoidance",
    badge: "Adaptive Supply Chain",
  },
];

export function CaseStudies() {
  return (
    <section className="mt-24 px-4 sm:px-6 lg:px-8">
      <Container className="flex flex-col gap-8 lg:flex-row lg:items-start">
        <div className="max-w-sm space-y-4">
          <span className="inline-flex items-center rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs uppercase tracking-[0.4em] text-white/60">
            Impact
          </span>
          <h2 className="text-3xl font-semibold text-white sm:text-4xl">
            From playbooks to production outcomes at enterprise scale.
          </h2>
          <p className="text-sm text-white/70">
            Our engagements are architected for measurable value capture, regulatory alignment, and operational resilience from day one.
          </p>
        </div>
        <div className="grid flex-1 gap-6 md:grid-cols-3">
          {cases.map((item, index) => (
            <motion.article
              key={item.client}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, delay: index * 0.12 }}
              className="group relative h-full overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur"
            >
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(0,215,255,0.25),transparent_65%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <div className="relative z-10 flex h-full flex-col gap-5">
                <div className="flex items-center justify-between text-xs uppercase tracking-[0.4em] text-white/50">
                  <span>{item.badge}</span>
                  <span>{item.value}</span>
                </div>
                <p className="text-lg font-medium text-white">{item.client}</p>
                <p className="text-sm leading-relaxed text-white/70">{item.outcome}</p>
                <div className="mt-auto flex items-center gap-3 text-xs text-white/60">
                  <span className="h-1 w-16 rounded-full bg-gradient-to-r from-[#7F5CFF] to-[#00D7FF]" />
                  <span>Full case study →</span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </Container>
    </section>
  );
}
