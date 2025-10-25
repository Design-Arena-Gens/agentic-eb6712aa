"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/layout/container";

const easing = [0.16, 1, 0.3, 1] as const;

export function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

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
              Contact
            </span>
            <h1 className="text-4xl font-semibold text-white sm:text-5xl">
              Align with our architecture and automation leaders.
            </h1>
            <p className="text-lg text-white/70">
              Share your strategic priorities and we will curate a tailored advisory session with specialists across AI, automation, governance, and systems integration.
            </p>
          </motion.div>
        </Container>
      </section>

      <section className="px-4 sm:px-6 lg:px-8">
        <Container className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <motion.form
            onSubmit={(event) => {
              event.preventDefault();
              setSubmitted(true);
            }}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: easing }}
            className="space-y-6 rounded-[28px] border border-white/10 bg-white/5 p-8 backdrop-blur"
          >
            <div className="grid gap-6 md:grid-cols-2">
              <Field label="Full Name" id="name" placeholder="C-Suite Leader" required />
              <Field label="Email" id="email" type="email" placeholder="executive@company.com" required />
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              <Field label="Company" id="company" placeholder="Global Enterprise" required />
              <Field label="Role" id="role" placeholder="Chief Operations Officer" />
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              <Field label="Primary Initiative" id="initiative" placeholder="Autonomous supply chain" />
              <Field label="Timeline" id="timeline" placeholder="Q1 2025" />
            </div>
            <Field
              label="How can we partner?"
              id="message"
              as="textarea"
              rows={4}
              placeholder="Outline the goals, critical systems, and stakeholders we should be aware of."
            />
            <div className="flex flex-wrap items-center gap-4">
              <Button type="submit" size="lg" floating>
                Request Consultation
              </Button>
              {submitted && (
                <span className="text-sm text-emerald-300">
                  Submission received. A partner will respond within 24 hours.
                </span>
              )}
            </div>
          </motion.form>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: easing }}
            className="rounded-[28px] border border-white/10 bg-gradient-to-br from-white/8 via-white/4 to-transparent p-8 backdrop-blur"
          >
            <div className="space-y-6">
              <h2 className="text-2xl font-semibold text-white">Global hubs</h2>
              <div className="grid gap-6 text-sm text-white/70">
                <Location
                  city="New York"
                  detail="One World Trade Center, 89th Floor"
                  phone="+1 (212) 555-0129"
                />
                <Location
                  city="Zurich"
                  detail="Europaallee 8, Financial District"
                  phone="+41 44 555 0234"
                />
                <Location
                  city="Singapore"
                  detail="Marina One West Tower"
                  phone="+65 6123 4421"
                />
              </div>
              <div className="rounded-2xl border border-white/15 bg-white/10 p-6 text-sm text-white/70">
                <p className="text-xs uppercase tracking-[0.3em] text-white/50">
                  Partnerships
                </p>
                <p className="mt-3">
                  For ecosystem partnerships and media inquiries reach out to partnerships@nexari.ai
                </p>
              </div>
            </div>
          </motion.div>
        </Container>
      </section>
    </div>
  );
}

interface FieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  as?: "textarea";
  rows?: number;
}

function Field({ label, as, rows, ...props }: FieldProps) {
  return (
    <label className="flex flex-col gap-2 text-sm text-white/70">
      <span className="text-xs uppercase tracking-[0.3em] text-white/50">
        {label}
      </span>
      {as === "textarea" ? (
        <textarea
          rows={rows}
          className="w-full rounded-2xl border border-white/15 bg-[#0F1527]/60 px-4 py-3 text-sm text-white placeholder:text-white/30 focus:border-white/40 focus:outline-none"
          {...(props as React.TextareaHTMLAttributes<HTMLTextAreaElement>)}
        />
      ) : (
        <input
          className="w-full rounded-2xl border border-white/15 bg-[#0F1527]/60 px-4 py-3 text-sm text-white placeholder:text-white/30 focus:border-white/40 focus:outline-none"
          {...props}
        />
      )}
    </label>
  );
}

function Location({
  city,
  detail,
  phone,
}: {
  city: string;
  detail: string;
  phone: string;
}) {
  return (
    <div className="space-y-2">
      <p className="text-sm uppercase tracking-[0.3em] text-white/50">{city}</p>
      <p>{detail}</p>
      <p>{phone}</p>
    </div>
  );
}
