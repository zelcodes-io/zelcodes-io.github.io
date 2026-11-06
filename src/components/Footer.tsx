import Link from "next/link";
import { Mail } from "lucide-react";
import { FacebookIcon, InstagramIcon } from "./BrandIcons";
import { Logo } from "./Logo";
import {
  CONTACT_EMAIL,
  FACEBOOK_URL,
  INSTAGRAM_URL,
  PRO_CHECKOUT_URL,
} from "@/lib/links";
import { MAKER } from "@/lib/founder";

export function Footer() {
  const year = new Date().getFullYear();

  const cols = [
    {
      title: "Product",
      links: [
        { href: "/#animations", label: "Animations" },
        { href: "/#pricing", label: "Pricing" },
        { href: PRO_CHECKOUT_URL, label: "Get Pro", external: true },
        { href: "/#how-it-works", label: "How it works" },
      ],
    },
    {
      title: "Resources",
      links: [
        { href: "/blog", label: "Blog" },
        { href: INSTAGRAM_URL, label: "Instagram", external: true },
        { href: FACEBOOK_URL, label: "Facebook", external: true },
        { href: `mailto:${CONTACT_EMAIL}`, label: "Contact" },
      ],
    },
    {
      title: "Legal",
      links: [
        { href: "/privacy", label: "Privacy" },
        { href: "/terms", label: "Terms" },
      ],
    },
  ];

  return (
    <footer className="relative mt-24 border-t border-surface-border/70">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link href="/" className="flex items-center">
              <Logo height={40} />
            </Link>
            <p className="mt-4 max-w-xs text-sm text-muted">
              Polished iOS UI animations in SwiftUI and Flutter, for iOS and
              Flutter developers. New reels every week on Instagram.
            </p>
            <div className="mt-5 flex items-center gap-2">
              <a
                href={INSTAGRAM_URL}
                aria-label="Instagram"
                target="_blank"
                rel="noreferrer"
                className="glass inline-flex h-9 w-9 items-center justify-center rounded-full transition hover:scale-105"
              >
                <InstagramIcon size={15} />
              </a>
              <a
                href={FACEBOOK_URL}
                aria-label="Facebook"
                target="_blank"
                rel="noreferrer"
                className="glass inline-flex h-9 w-9 items-center justify-center rounded-full transition hover:scale-105"
              >
                <FacebookIcon size={15} />
              </a>
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                aria-label="Email"
                className="glass inline-flex h-9 w-9 items-center justify-center rounded-full transition hover:scale-105"
              >
                <Mail size={16} />
              </a>
            </div>
          </div>

          {cols.map((col) => (
            <div key={col.title}>
              <h4 className="text-sm font-semibold tracking-wide uppercase text-foreground/80">
                {col.title}
              </h4>
              <ul className="mt-4 space-y-2">
                {col.links.map((l) => (
                  <li key={l.label}>
                    {"external" in l && l.external ? (
                      <a
                        href={l.href}
                        target="_blank"
                        rel="noreferrer"
                        className="text-sm text-muted transition hover:text-foreground"
                      >
                        {l.label}
                      </a>
                    ) : (
                      <Link
                        href={l.href}
                        className="text-sm text-muted transition hover:text-foreground"
                      >
                        {l.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t border-surface-border/70 pt-6 text-xs text-muted sm:flex-row sm:items-center">
          <span>
            © {year} Zelcodes{MAKER !== "Zelcodes" ? ` · Built by ${MAKER}` : ""} · for SwiftUI and Flutter developers.
          </span>
          <span>Crafted in Kerala, India · Shipped worldwide.</span>
        </div>
      </div>
    </footer>
  );
}
