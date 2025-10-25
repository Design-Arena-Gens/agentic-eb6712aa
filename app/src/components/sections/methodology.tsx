"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/layout/container";

const phases = [
  {
    title: "Vision Sprints",
    description:
      "Map strategic value pools, governance requirements, and automation readiness across the enterprise landscape.",
    deliverables: ["Executive blueprint", "Control tower metrics", "Risk posture model"],
  },
  {
    title: "System Architecture",
    description:
      "Design the AI fabric: multi-agent orchestration, secure data plane, and integration accelerators for legacy and cloud platforms.",
    deliverables: ["Reference architecture", "Security guardrails", "Integration mesh"],
  },
  {
    title: "Autonomous Activation",
    description:
      "Stand up intelligent workflows, co-pilot experiences, and observability to measure lift and continuously optimize.",
    deliverables: ["Live operations hub", "Adoption playbooks", "Optimization roadmap"],
  },
];

export function Methodology() {
  return (
    <section className="mt-24 px-4 sm:px-6 lg:px-8">
      <Container className="rounded-[32px] border border-white/10 bg-gradient-to-br from-white/8 via-white/4 to-transparent px-8 py-12 backdrop-blur-lg">
        <div className="flex flex-col gap-10 md:flex-row md:items-center md:justify-between">
          <div className="max-w-lg space-y-5">
            <span className="inline-flex items-center rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs uppercase tracking-[0.4em] text-white/60">
              Methodology
            </span>
            <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              A disciplined, board-ready playbook for AI transformation.
            </h2>
            <p className="text-base text-white/70">
              Every engagement is anchored in accountable governance, measurable outcomes, and accelerated value capture across mission-critical domains.
            </p>
          </div>
          <div className="flex h-full items-center">
            <div className="flex gap-6 rounded-full border border-white/10 bg-white/5 px-6 py-4 text-sm text-white/70">
              <span>ISO 42001 AI Management</span>
              <span>Zero Trust Compliant</span>
              <span>Global Delivery</span>
            </div>
          </div>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {phases.map((phase, index) => (
            <motion.div
              key={phase.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
              className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8"
            >
              <span className="absolute right-6 top-6 text-3xl font-bold text-white/10">
                0{index + 1}
              </span>
              <div className="relative z-10 space-y-4">
                <h3 className="text-xl font-semibold text-white">{phase.title}</h3>
                <p className="text-sm text-white/70">{phase.description}</p>
                <ul className="space-y-2 text-sm text-white/60">
                  {phase.deliverables.map((deliverable) => (
                    <li key={deliverable} className="flex items-center gap-3">
                      <span className="h-1.5 w-1.5 rounded-full bg-white/60" />
                      {deliverable}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
