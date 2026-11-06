/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight, Check, Download } from "lucide-react";
import { animations, getAnimation, SINGLE_PRICE } from "@/lib/animations";
import { MeshGradient } from "@/components/MeshGradient";
import { INSTAGRAM_URL, PRO_CHECKOUT_URL, PRO_MONTHLY_PRICE } from "@/lib/links";

type PageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return animations.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const animation = getAnimation(slug);
  if (!animation) return {};
  return {
    title: `${animation.title}: SwiftUI + Flutter animation`,
    description: `${animation.tagline}. ${animation.longDescription}`,
    alternates: { canonical: `/animations/${animation.slug}/` },
    openGraph: {
      title: `${animation.title} · Zelcodes`,
      description: animation.tagline,
      type: "article",
      images: [{ url: animation.image, width: 800, height: 1067 }],
    },
  };
}

export default async function AnimationDetail({ params }: PageProps) {
  const { slug } = await params;
  const animation = getAnimation(slug);
  if (!animation) notFound();

  const sameCategory = animations.filter(
    (a) => a.slug !== animation.slug && a.category === animation.category,
  );
  const related = [
    ...sameCategory,
    ...animations.filter((a) => a.slug !== animation.slug && !sameCategory.includes(a)),
  ].slice(0, 3);

  const included = [
    `Complete SwiftUI project (${animation.platform.replace("SwiftUI · ", "")}, Xcode)`,
    "1:1 Flutter port of the same animation",
    "No third-party dependencies",
    "Use in personal and commercial apps",
  ];

  return (
    <div className="relative">
      <MeshGradient intensity="soft" />
      <div className="relative mx-auto max-w-5xl px-4 pt-16 pb-16 sm:px-6">
        <Link
          href="/#animations"
          className="inline-flex items-center gap-2 text-sm text-muted transition hover:text-foreground"
        >
          <ArrowLeft size={14} /> Back to library
        </Link>

        <header className="mt-8 grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:gap-12">
          <div className="glass relative overflow-hidden rounded-[28px] p-3">
            <img
              src={animation.image}
              alt={`${animation.title} animation preview`}
              className="aspect-[3/4] w-full rounded-[22px] object-cover"
            />
          </div>

          <div className="flex flex-col justify-center">
            <span className="text-xs font-medium tracking-wide text-muted uppercase">
              {animation.category} · {animation.platform} + Flutter
            </span>
            <h1 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">
              {animation.title}
            </h1>
            <p className="mt-2 text-lg text-gradient font-medium">{animation.tagline}</p>
            <p className="mt-4 text-muted">{animation.longDescription}</p>

            <ul className="mt-6 grid gap-2">
              {included.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm">
                  <Check size={16} className="mt-0.5 shrink-0 text-brand" />
                  {item}
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={animation.checkoutUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition hover:opacity-90"
              >
                <Download size={14} /> Buy this animation · {SINGLE_PRICE}
              </a>
              <a
                href={PRO_CHECKOUT_URL}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-surface-border bg-surface px-6 py-3 text-sm font-medium transition hover:border-brand/60"
              >
                Get all {animations.length} with Pro · {PRO_MONTHLY_PRICE}/mo
              </a>
            </div>
            <p className="mt-3 text-xs text-muted">
              Secure checkout by Polar · instant download · taxes calculated at checkout.
              Saw it on{" "}
              <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer" className="underline">
                Instagram
              </a>
              ? The reel keyword is <strong>“{animation.keyword}”</strong>.
            </p>
          </div>
        </header>

        <section className="mt-20">
          <h2 className="text-xl font-semibold tracking-tight">More animations</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            {related.map((r) => (
              <Link
                key={r.slug}
                href={`/animations/${r.slug}`}
                className="glass group relative block overflow-hidden rounded-2xl p-2 transition hover:-translate-y-0.5"
              >
                <img
                  src={r.image}
                  alt={`${r.title} animation preview`}
                  loading="lazy"
                  className="aspect-[4/3] w-full rounded-xl object-cover object-[50%_64%]"
                />
                <div className="flex items-center justify-between p-3">
                  <span className="text-sm font-semibold">{r.title}</span>
                  <ArrowUpRight
                    size={14}
                    className="text-muted transition group-hover:text-foreground"
                  />
                </div>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
