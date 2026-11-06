"use client";
/* eslint-disable @next/next/no-img-element */

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import type { Animation } from "@/lib/animations";
import { SINGLE_PRICE } from "@/lib/animations";

type Props = {
  animation: Animation;
  index?: number;
};

export function AnimationCard({ animation, index = 0 }: Props) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{
        duration: 0.5,
        delay: Math.min(index * 0.04, 0.2),
        ease: [0.22, 1, 0.36, 1],
      }}
      className="group relative"
    >
      <Link
        href={`/animations/${animation.slug}`}
        aria-label={`${animation.title} — view details`}
        className="glass relative block overflow-hidden rounded-3xl p-3 transition duration-300 hover:-translate-y-1 hover:ring-1 hover:ring-brand/40"
      >
        <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
          <img
            src={animation.image}
            alt={`${animation.title} animation preview`}
            loading="lazy"
            className="h-full w-full object-cover object-[50%_64%] transition duration-500 group-hover:scale-[1.03]"
          />
          <div className="absolute left-3 top-3 flex gap-1.5">
            <span className="glass rounded-full px-2.5 py-1 text-[11px] font-medium tracking-wide">
              {animation.difficulty}
            </span>
          </div>
          <div className="absolute right-3 top-3">
            <span className="rounded-full bg-black/60 px-2.5 py-1 text-[11px] font-semibold text-white backdrop-blur">
              {SINGLE_PRICE}
            </span>
          </div>
        </div>

        <div className="px-2 pt-4 pb-2">
          <div className="flex items-start justify-between gap-3">
            <h3 className="text-base font-semibold tracking-tight">
              {animation.title}
            </h3>
            <span className="mt-0.5 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-foreground/5 text-foreground/70 transition group-hover:bg-foreground group-hover:text-background">
              <ArrowUpRight size={14} />
            </span>
          </div>
          <p className="mt-1.5 line-clamp-2 text-sm text-muted">
            {animation.tagline}. {animation.description}
          </p>
          <div className="mt-4 flex flex-wrap gap-1.5">
            {animation.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-surface-border px-2 py-0.5 text-[11px] text-muted"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </Link>
    </motion.article>
  );
}
