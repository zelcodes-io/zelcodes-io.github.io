import { Hero } from "@/components/Hero";
import { AnimationShowcase } from "@/components/AnimationShowcase";
import { HowItWorks } from "@/components/HowItWorks";
import { PricingSection } from "@/components/PricingSection";
import { CredibilitySection } from "@/components/CredibilitySection";
import { CTASection } from "@/components/CTASection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <AnimationShowcase />
      <HowItWorks />
      <PricingSection />
      <CredibilitySection />
      <CTASection />
    </>
  );
}
