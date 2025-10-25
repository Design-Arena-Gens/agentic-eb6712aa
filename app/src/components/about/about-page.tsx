"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/layout/container";

const easing = [0.16, 1, 0.3, 1] as const;

const leadership = [
  {
    name: "Elaine Porter",
    role: "Chief Automation Architect",
    bio: "Former McKinsey partner leading global automation programs across regulated industries.",
  },
  {
    name: "Rahul Iyer",
    role: "Head of Cognitive Systems",
    bio: "Ex-Google Brain engineer specializing in multi-agent intelligence and knowledge fabrics.",
  },
  {
    name: "Marta Alanis",
    role: "Chief Trust Officer",
    bio: "Led risk and compliance for two Fortune 100 banks ensuring responsible AI adoption.",
  },
];

const values = [
  {
    title: "Outcome-obsessed",
    detail:
      "We anchor every engagement in measurable business value, governance readiness, and adoption metrics.",
  },
  {
    title: "Architected for trust",
    detail:
      "Security, compliance, and ethical guardrails are engineered into the AI fabric from day zero.",
  },
  {
    title: "Enterprise-native",
    detail:
      "We integrate seamlessly with global operating models, legacy platforms, and complex partner ecosystems.",
  },
];

const partners = [
  "Microsoft AI Cloud",
  "AWS Strategic Initiative",
  "Google Cloud AI",
  "Snowflake Select",
  "ServiceNow Elite",
];

export function AboutPage() {
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
              About Nexari Labs
            </span>
            <h1 className="text-4xl font-semibold text-white sm:text-5xl">
              Building intelligent operations for the industries that run the world.
            </h1>
            <p className="text-lg text-white/70">
              Nexari Labs is an AI automation and IT solutions firm engineered to accelerate transformation for global enterprises. We combine strategy, deep engineering, and program leadership to deliver the intelligent operating systems of the future.
            </p>
          </motion.div>
        </Container>
      </section>

      <section className="px-4 sm:px-6 lg:px-8">
        <Container className="rounded-[32px] border border-white/10 bg-white/5 px-8 py-12 backdrop-blur">
          <div className="grid gap-10 md:grid-cols-2">
            <div className="space-y-6">
              <h2 className="text-3xl font-semibold text-white">
                Our mission
              </h2>
              <p className="text-base text-white/70">
                We help boards and executive teams design AI-powered enterprises that can sense, decide, and act in real time—securely, responsibly, and at scale.
              </p>
              <p className="text-base text-white/70">
                From New York to Singapore, our teams work alongside clients to architect adaptive operations, accelerate innovation, and establish governance frameworks that withstand regulatory scrutiny.
              </p>
            </div>
            <div className="space-y-6">
              <div className="rounded-3xl border border-white/10 bg-white/10 p-6">
                <p className="text-xs uppercase tracking-[0.4em] text-white/50">
                  Presence
                </p>
                <div className="mt-4 grid grid-cols-2 gap-4 text-sm text-white/70">
                  <div>
                    <p className="text-2xl font-semibold text-white">4</p>
                    <p>Global hubs</p>
                  </div>
                  <div>
                    <p className="text-2xl font-semibold text-white">28</p>
                    <p>Countries served</p>
                  </div>
                  <div>
                    <p className="text-2xl font-semibold text-white">96%</p>
                    <p>Client retention</p>
                  </div>
                  <div>
                    <p className="text-2xl font-semibold text-white">1400+</p>
                    <p>Specialists worldwide</p>
                  </div>
                </div>
              </div>
              <div className="rounded-3xl border border-white/10 bg-white/10 p-6">
                <p className="text-xs uppercase tracking-[0.4em] text-white/50">
                  Partner Ecosystem
                </p>
                <div className="mt-4 flex flex-wrap gap-3 text-xs uppercase tracking-[0.35em] text-white/60">
                  {partners.map((partner) => (
                    <span key={partner} className="rounded-full border border-white/10 px-4 py-2">
                      {partner}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section
        id="leadership"
        className="px-4 sm:px-6 lg:px-8"
      >
        <Container className="space-y-10">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div className="space-y-3">
              <h2 className="text-3xl font-semibold text-white">
                Leadership team
              </h2>
              <p className="text-base text-white/70">
                Veteran strategists, engineers, and risk leaders guiding AI transformation at enterprise scale.
              </p>
            </div>
            <Button href="/contact" variant="secondary">
              Request advisory session
            </Button>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {leadership.map((leader, index) => (
              <motion.article
                key={leader.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.7, delay: index * 0.1 }}
                className="rounded-3xl border border-white/10 bg-white/5 p-6"
              >
                <div className="h-16 w-16 rounded-2xl bg-gradient-to-br from-[#7F5CFF] to-[#00D7FF]" />
                <h3 className="mt-6 text-xl font-semibold text-white">
                  {leader.name}
                </h3>
                <p className="text-sm uppercase tracking-[0.3em] text-white/50">
                  {leader.role}
                </p>
                <p className="mt-4 text-sm text-white/70">{leader.bio}</p>
              </motion.article>
            ))}
          </div>
        </Container>
      </section>

      <section
        id="partners"
        className="px-4 sm:px-6 lg:px-8"
      >
        <Container className="rounded-[32px] border border-white/10 bg-white/5 px-8 py-12 backdrop-blur">
          <div className="grid gap-10 md:grid-cols-3">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.7, delay: index * 0.1 }}
                className="rounded-3xl border border-white/10 bg-white/10 p-6"
              >
                <p className="text-xs uppercase tracking-[0.3em] text-white/50">
                  Principle {index + 1}
                </p>
                <h3 className="mt-4 text-lg font-semibold text-white">
                  {value.title}
                </h3>
                <p className="mt-3 text-sm text-white/70">{value.detail}</p>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>
    </div>
  );
}
