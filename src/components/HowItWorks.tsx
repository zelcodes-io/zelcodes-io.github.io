"use client";

import { motion } from "framer-motion";
import { Compass, CreditCard, Download } from "lucide-react";

const steps = [
  {
    icon: Compass,
    title: "Find an animation",
    body: "Browse the library here, or spot one in a reel on Instagram (@zelcodes.io). Every animation has a preview and a full description.",
  },
  {
    icon: CreditCard,
    title: "Buy one, or join Pro",
    body: "Get a single animation for $3.99, or every animation with Zelcodes Pro. Secure checkout by Polar takes about a minute.",
  },
  {
    icon: Download,
    title: "Get the code instantly",
    body: "Download the SwiftUI project and Flutter port right away. Pro members also get invited to the private GitHub repo with every update.",
  },
];

export function HowItWorks() {
  return (
    <section
      id="how-it-works"
      aria-labelledby="how-title"
      className="relative mx-auto max-w-6xl px-4 py-24 sm:px-6"
    >
      <div className="mx-auto max-w-2xl text-center">
        <h2
          id="how-title"
          className="text-3xl font-semibold tracking-tight sm:text-4xl"
        >
          From browser to <span className="text-gradient">Xcode</span> in 3
          steps
        </h2>
        <p className="mt-4 text-muted">
          Explore everything without signing up. When you want the code,
          checkout takes a minute and the download is instant.
        </p>
      </div>

      <div className="mt-14 grid gap-5 md:grid-cols-3">
        {steps.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="glass relative rounded-3xl p-6"
          >
            <div className="flex items-center gap-3">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-brand to-brand-2 text-white">
                <s.icon size={18} />
              </span>
              <span className="text-xs font-semibold tracking-wide text-muted uppercase">
                Step 0{i + 1}
              </span>
            </div>
            <h3 className="mt-4 text-lg font-semibold tracking-tight">
              {s.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">{s.body}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
