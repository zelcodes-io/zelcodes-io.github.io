import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const mono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

import { SITE_URL } from "@/lib/links";
import { MAKER } from "@/lib/founder";

const siteUrl = SITE_URL;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Zelcodes: iOS animations in SwiftUI and Flutter",
    template: "%s · Zelcodes",
  },
  description:
    "31 polished iOS UI animations (Liquid Glass tab bars, Dynamic Island toasts, hero transitions, paywalls) as complete SwiftUI projects with 1:1 Flutter ports. $3.99 each, or all of them with Zelcodes Pro.",
  keywords: [
    "SwiftUI animations",
    "iOS UI animations",
    "SwiftUI code examples",
    "SwiftUI transitions",
    "iOS developer tools",
    "SwiftUI components",
    "Flutter animations",
    "Liquid Glass SwiftUI",
    "Dynamic Island SwiftUI",
    "Zelcodes",
  ],
  authors: [{ name: MAKER, url: siteUrl }],
  creator: MAKER,
  publisher: "Zelcodes",
  openGraph: {
    type: "website",
    url: siteUrl,
    title: "Zelcodes: iOS animations in SwiftUI and Flutter",
    description:
      "Polished iOS UI animations as complete SwiftUI projects with Flutter ports. Buy one for $3.99, or get every one with Zelcodes Pro.",
    siteName: "Zelcodes",
    images: [{ url: "/og.jpg", width: 1200, height: 675, alt: "Zelcodes" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Zelcodes: iOS animations in SwiftUI and Flutter",
    description:
      "Polished iOS UI animations as complete SwiftUI projects with Flutter ports.",
    images: ["/og.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  category: "technology",
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fafbff" },
    { media: "(prefers-color-scheme: dark)", color: "#05060f" },
  ],
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${mono.variable} flex min-h-screen flex-col antialiased`}
      >
        <ThemeProvider>
          <Navbar />
          <main id="main" className="relative flex-1">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
