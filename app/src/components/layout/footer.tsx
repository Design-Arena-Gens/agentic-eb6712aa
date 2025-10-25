"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { footerLinks, mainNav } from "@/lib/navigation";
import { Container } from "@/components/layout/container";

export function Footer() {
  return (
    <footer className="relative mt-24 border-t border-white/10 bg-gradient-to-b from-transparent via-white/5 to-white/10 px-4 pb-12 pt-16 text-white backdrop-blur-lg">
      <Container className="flex flex-col gap-16">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1fr] lg:gap-8">
          <div className="max-w-lg space-y-6">
            <Link
              href="/"
              className="flex items-start gap-4 text-left text-white"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-[#7F5CFF] to-[#00C7FF] text-2xl font-semibold shadow-[0_30px_80px_-35px_rgba(81,132,255,0.85)]">
                λ
              </span>
              <span className="flex flex-col">
                <span className="text-xl font-semibold tracking-tight">
                  Nexari Labs
                </span>
                <span className="text-sm text-white/70">
                  Orchestrating AI-driven transformation for the world&apos;s
                  most ambitious enterprises.
                </span>
              </span>
            </Link>

            <div className="grid gap-3 text-sm text-white/70 sm:grid-cols-2">
              <div>
                <p className="uppercase tracking-[0.3em] text-xs text-white/40">
                  HQ
                </p>
                <p>One World Trade Center</p>
                <p>89th Floor, New York</p>
              </div>
              <div>
                <p className="uppercase tracking-[0.3em] text-xs text-white/40">
                  Connect
                </p>
                <p>hello@nexari.ai</p>
                <p>+1 (212) 555-0129</p>
              </div>
            </div>
          </div>

          <FooterColumn title="Expertise">
            {footerLinks.expertise.map((item) => (
              <li key={item} className="text-sm text-white/70">
                {item}
              </li>
            ))}
          </FooterColumn>

          <FooterColumn title="Resources">
            {footerLinks.resources.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className="text-sm text-white/70 transition-colors hover:text-white"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </FooterColumn>

          <FooterColumn title="Global Offices">
            {footerLinks.offices.map((item) => (
              <li key={item} className="text-sm text-white/70">
                {item}
              </li>
            ))}
          </FooterColumn>
        </div>

        <div className="flex flex-col gap-6 border-t border-white/10 pt-8 md:flex-row md:items-center md:justify-between">
          <motion.ul
            className="flex flex-wrap gap-4 text-sm text-white/60"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0, y: 16 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { staggerChildren: 0.08, delay: 0.2 },
              },
            }}
          >
            {mainNav.map((item) => (
              <motion.li
                key={item.name}
                variants={{ hidden: { opacity: 0, y: 12 }, visible: { opacity: 1, y: 0 } }}
              >
                <Link
                  href={item.href}
                  className="transition-colors hover:text-white"
                >
                  {item.name}
                </Link>
              </motion.li>
            ))}
          </motion.ul>
          <p className="text-sm text-white/50">
            © {new Date().getFullYear()} Nexari Labs. All rights reserved.
          </p>
        </div>
      </Container>
      <div className="pointer-events-none absolute inset-x-0 -top-20 mx-auto h-40 max-w-md rounded-full bg-[#7F5CFF]/25 blur-[100px]" />
    </footer>
  );
}

function FooterColumn({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-4">
      <p className="text-sm font-semibold uppercase tracking-[0.35em] text-white/50">
        {title}
      </p>
      <ul className="space-y-3">{children}</ul>
    </div>
  );
}
