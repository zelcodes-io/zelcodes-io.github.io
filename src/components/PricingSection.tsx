"use client";

import { motion } from "framer-motion";
import { Check, Sparkles } from "lucide-react";
import { animations, SINGLE_PRICE } from "@/lib/animations";
import {
  FOUNDING_CODE,
  PRO_CHECKOUT_URL,
  PRO_MONTHLY_PRICE,
  PRO_YEARLY_PRICE,
} from "@/lib/links";

const proPerks = [
  `Every animation (${animations.length} today) in SwiftUI and Flutter`,
  "Private GitHub repo: git pull whenever new animations ship",
  "Full-library zip download, any time",
  "Use the code in personal and commercial apps",
  "Cancel any time and keep using code you've shipped",
];

type Plan = {
  name: string;
  price: string;
  period: string;
  note: string;
  cta: string;
  href: string;
  highlight?: boolean;
};

const plans: Plan[] = [
  {
    name: "Single animation",
    price: SINGLE_PRICE,
    period: "once",
    note: "Pick any animation in the library and download its SwiftUI project and Flutter port.",
    cta: "Browse animations",
    href: "#animations",
  },
  {
    name: "Pro · Monthly",
    price: PRO_MONTHLY_PRICE,
    period: "/month",
    note: `Founding offer: use code ${FOUNDING_CODE} for $3.50/month for life (first 100 members).`,
    cta: "Get Zelcodes Pro",
    href: PRO_CHECKOUT_URL,
    highlight: true,
  },
  {
    name: "Pro · Yearly",
    price: PRO_YEARLY_PRICE,
    period: "/year",
    note: "Everything in Pro, billed once a year. Save 35%.",
    cta: "Get Pro yearly",
    href: PRO_CHECKOUT_URL,
  },
];

export function PricingSection() {
  return (
    <section
      id="pricing"
      aria-labelledby="pricing-title"
      className="relative mx-auto max-w-6xl px-4 py-24 sm:px-6"
    >
      <div className="mx-auto max-w-2xl text-center">
        <span className="glass inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs text-muted">
          <Sparkles size={12} className="text-brand" /> Simple pricing
        </span>
        <h2
          id="pricing-title"
          className="mt-5 text-3xl font-semibold tracking-tight sm:text-4xl"
        >
          One animation, or <span className="text-gradient">every animation</span>
        </h2>
        <p className="mt-4 text-muted">
          Secure checkout by Polar, our merchant of record. Sales tax, VAT and GST
          are calculated at checkout, and you get instant access.
        </p>
      </div>

      <div className="mt-14 grid gap-5 lg:grid-cols-3">
        {plans.map((p, i) => (
          <motion.div
            key={p.name}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className={`relative flex flex-col rounded-3xl p-7 ${
              p.highlight ? "ring-glow glass" : "glass"
            }`}
          >
            {p.highlight && (
              <span className="absolute -top-3 left-7 rounded-full bg-gradient-to-r from-brand to-brand-2 px-3 py-1 text-[11px] font-semibold text-white">
                Most popular
              </span>
            )}
            <h3 className="text-sm font-semibold tracking-wide text-muted uppercase">
              {p.name}
            </h3>
            <div className="mt-4 flex items-baseline gap-1">
              <span className="text-4xl font-semibold tracking-tight">{p.price}</span>
              <span className="text-sm text-muted">{p.period}</span>
            </div>
            <p className="mt-3 text-sm text-muted">{p.note}</p>
            <div className="mt-auto pt-8">
              <a
                href={p.href}
                {...(p.href.startsWith("http") ? { target: "_blank", rel: "noreferrer" } : {})}
                className={`inline-flex w-full items-center justify-center rounded-full px-6 py-3 text-sm font-medium transition ${
                  p.highlight
                    ? "bg-foreground text-background hover:opacity-90"
                    : "border border-surface-border bg-surface hover:border-brand/60"
                }`}
              >
                {p.cta}
              </a>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="glass mx-auto mt-10 max-w-3xl rounded-3xl p-7">
        <h3 className="text-base font-semibold">Zelcodes Pro includes</h3>
        <ul className="mt-4 grid gap-3 sm:grid-cols-2">
          {proPerks.map((perk) => (
            <li key={perk} className="flex items-start gap-3 text-sm">
              <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-brand to-brand-2 text-white">
                <Check size={12} strokeWidth={3} />
              </span>
              <span>{perk}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
