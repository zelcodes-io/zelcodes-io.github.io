"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { MeshGradient } from "./MeshGradient";
import { HeroCarousel } from "./HeroCarousel";
import { PRO_CHECKOUT_URL, PRO_MONTHLY_PRICE } from "@/lib/links";
import { animations } from "@/lib/animations";

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden pt-16 pb-24 sm:pt-20 lg:pt-28">
      <MeshGradient intensity="bold" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="glass inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs text-muted">
            <Sparkles size={12} className="text-brand" />
            SwiftUI (iOS 27) + Flutter · Liquid Glass ready
          </span>

          <h1 className="mt-6 text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
            <span className="text-gradient">{animations.length} iOS animations</span>
            <br />
            in SwiftUI and Flutter
          </h1>

          <p className="mx-auto mt-5 max-w-xl text-base text-muted sm:text-lg">
            Liquid Glass tab bars, Dynamic Island toasts, App Store-style hero
            transitions, paywalls and more. Every one is a complete Xcode project
            with a 1:1 Flutter port, ready to drop into your app.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href="#animations"
              className="group inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition hover:opacity-90"
            >
              Browse Animations
              <ArrowRight
                size={16}
                className="transition group-hover:translate-x-0.5"
              />
            </Link>
            <a
              href={PRO_CHECKOUT_URL}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-2 rounded-full border border-surface-border bg-surface px-6 py-3 text-sm font-medium backdrop-blur-md transition hover:border-brand/60"
            >
              <span
                aria-hidden
                className="inline-block h-2 w-2 rounded-full bg-gradient-to-br from-brand to-brand-2"
              />
              Get Zelcodes Pro · {PRO_MONTHLY_PRICE}/mo
            </a>
          </div>

          <p className="mt-5 text-xs text-muted">
            No dependencies · use in commercial apps · secure checkout by Polar
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <HeroCarousel />
        </motion.div>

        <p className="mt-8 text-center text-xs text-muted">
          Drag a card, tap the arrows, or let it auto-play.
        </p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative z-10 mx-auto mt-14 grid max-w-3xl grid-cols-3 gap-2 sm:gap-6"
        >
          {[
            { k: String(animations.length), v: "Animations" },
            { k: "2", v: "SwiftUI + Flutter" },
            { k: "iOS 27", v: "Latest APIs" },
          ].map((s) => (
            <div
              key={s.v}
              className="rounded-2xl border border-surface-border bg-background px-3 py-4 text-center shadow-sm sm:py-5"
            >
              <div className="text-xl font-semibold tracking-tight sm:text-2xl">
                {s.k}
              </div>
              <div className="mt-1 text-xs text-muted sm:text-sm">{s.v}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
