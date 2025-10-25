"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/layout/container";

const easing = [0.16, 1, 0.3, 1] as const;

const offerings = [
  {
    title: "AI Strategy & Governance",
    description:
      "Enterprise visioning, operating model design, risk frameworks, and board-level governance for responsible AI adoption.",
    bullets: [
      "AI operating model blueprint",
      "Policy & compliance frameworks",
      "Executive alignment programs",
    ],
  },
  {
    title: "Automation Engineering",
    description:
      "Design and deploy hybrid human + agent workflows across mission-critical processes with measurable lift and reliability.",
    bullets: [
      "Process mining & optimization",
      "Agentic automation networks",
      "Human-in-the-loop orchestration",
    ],
  },
  {
    title: "Intelligent Platforms",
    description:
      "Modernize data estates, integrate enterprise platforms, and activate knowledge fabrics for trusted decisioning.",
    bullets: [
      "Vectorized knowledge mesh",
      "Multi-cloud integration fabric",
      "Observability & telemetry",
    ],
  },
];

const accelerators = [
  {
    name: "Velocity Library",
    detail: "Prebuilt multi-agent patterns, compliance adapters, and integration templates for 40+ enterprise platforms.",
  },
  {
    name: "Aegis Guardrails",
    detail: "Realtime trust, lineage, and policy enforcement layer designed for regulated industries.",
  },
  {
    name: "Polaris Command Center",
    detail: "Unified control tower for monitoring automations, human oversight and KPI performance in one pane of glass.",
  },
];

const frameworks = [
  "ISO 42001 aligned",
  "NIST AI RMF",
  "SOC2 Type II",
  "HIPAA & GxP",
  "Zero Trust architecture",
  "Global delivery model",
];

export function ServicesPage() {
  return (
    <div className="space-y-16 pb-24">
      <section className="px-4 pt-16 sm:px-6 lg:px-8">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: easing }}
            className="max-w-3xl space-y-6"
          >
            <span className="inline-flex items-center rounded-full border border-white/10 bg-white/10 px-4 py-2 text-xs uppercase tracking-[0.4em] text-white/60">
              Services
            </span>
            <h1 className="text-4xl font-semibold text-white sm:text-5xl">
              Transform every operating domain with autonomous intelligence.
            </h1>
            <p className="text-lg text-white/70">
              Our teams partner with C-suites to design end-to-end AI and automation ecosystems—from strategy through scaled operations—while preserving governance, compliance, and change management disciplines.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button href="/contact" size="lg" floating>
                Engage Our Architects
              </Button>
              <Button href="#accelerators" size="lg" variant="secondary">
                Explore Accelerators
              </Button>
            </div>
          </motion.div>
        </Container>
      </section>

      <section className="px-4 sm:px-6 lg:px-8">
        <Container className="grid gap-6 md:grid-cols-3">
          {offerings.map((offering, index) => (
            <motion.article
              key={offering.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, delay: index * 0.12 }}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur"
            >
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(127,92,255,0.2),transparent_60%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <div className="relative z-10 space-y-4">
                <h2 className="text-2xl font-semibold text-white">
                  {offering.title}
                </h2>
                <p className="text-sm text-white/70">{offering.description}</p>
                <ul className="space-y-2 text-sm text-white/60">
                  {offering.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-center gap-3">
                      <span className="h-1.5 w-1.5 rounded-full bg-white/60" />
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.article>
          ))}
        </Container>
      </section>

      <section id="accelerators" className="px-4 sm:px-6 lg:px-8">
        <Container className="rounded-[32px] border border-white/10 bg-gradient-to-r from-white/8 via-white/6 to-transparent px-8 py-12 backdrop-blur">
          <div className="flex flex-col gap-10 md:flex-row md:items-center md:justify-between">
            <div className="max-w-lg space-y-5">
              <span className="inline-flex items-center rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs uppercase tracking-[0.4em] text-white/60">
                Accelerators
              </span>
              <h2 className="text-3xl font-semibold text-white">
                Platform-native tools to compress transformation timelines.
              </h2>
              <p className="text-base text-white/70">
                Deploy composable assets, governance guardrails, and operations desks that were engineered for regulated, mission-critical environments.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 text-xs uppercase tracking-[0.35em] text-white/50">
              {frameworks.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/10 px-4 py-2"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {accelerators.map((accelerator, index) => (
              <motion.div
                key={accelerator.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: index * 0.08 }}
                className="rounded-2xl border border-white/10 bg-white/10 p-6 text-sm text-white/70"
              >
                <p className="text-xs uppercase tracking-[0.3em] text-white/50">
                  {accelerator.name}
                </p>
                <p className="mt-3 leading-relaxed">{accelerator.detail}</p>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      <section className="px-4 sm:px-6 lg:px-8">
        <Container className="rounded-3xl border border-white/10 bg-white/5 p-10 backdrop-blur">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div className="max-w-xl space-y-4">
              <h2 className="text-2xl font-semibold text-white">
                Enterprise training & adoption.
              </h2>
              <p className="text-sm text-white/70">
                Operating model activation, change management, and enablement programs tailored to your leadership teams, operators, and governance councils.
              </p>
            </div>
            <Button href="/about" variant="secondary" size="lg">
              Meet Our Specialists
            </Button>
          </div>
        </Container>
      </section>
    </div>
  );
}
