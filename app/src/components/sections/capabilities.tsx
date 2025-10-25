"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/layout/container";

const easing = [0.16, 1, 0.3, 1] as const;

const capabilities = [
  {
    title: "Autonomous Decision Fabrics",
    description:
      "Deploy adaptive control layers across core operations enabling AI to orchestrate workflows, detect anomalies, and autonomously remediate gaps in real-time.",
    metrics: ["Self-Optimizing", "Compliance-Aware", "Closed Loop"],
  },
  {
    title: "Cognitive Process Automation",
    description:
      "Unify complex processes across ERP, CRM, and industry platforms with LLM copilots, agent networks, and human-in-the-loop governance.",
    metrics: ["Contextual", "Explainable", "Human Aligned"],
  },
  {
    title: "Enterprise Intelligence Mesh",
    description:
      "Activate a secure data plane with streaming insights, vectorized knowledge graphs, and policy-based routing for every business function.",
    metrics: ["Federated", "Trusted", "Real-Time"],
  },
];

export function Capabilities() {
  return (
    <section className="mt-24 px-4 sm:px-6 lg:px-8">
      <Container className="flex flex-col gap-12 lg:flex-row lg:items-start">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: easing }}
          className="max-w-md space-y-5"
        >
          <span className="inline-flex items-center rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs uppercase tracking-[0.4em] text-white/60">
            Core Capabilities
          </span>
          <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Architect AI-native operating models, not point solutions.
          </h2>
          <p className="text-base text-white/70">
            We partner with boards and CxOs to design, deploy, and scale intelligent systems that augment every layer of the enterprise.
          </p>
        </motion.div>
        <div className="grid flex-1 gap-6 md:grid-cols-2">
          {capabilities.map((capability, index) => (
            <motion.article
              key={capability.title}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
            >
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(127,92,255,0.18),transparent_65%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <div className="relative z-10 space-y-4">
                <h3 className="text-xl font-semibold text-white">
                  {capability.title}
                </h3>
                <p className="text-sm leading-relaxed text-white/70">
                  {capability.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {capability.metrics.map((metric) => (
                    <span
                      key={metric}
                      className="rounded-full border border-white/15 px-3 py-1 text-xs uppercase tracking-[0.28em] text-white/65"
                    >
                      {metric}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </Container>
    </section>
  );
}
