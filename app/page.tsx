import { Metadata } from "next";
import { Hero } from "@/components/sections/hero";
import { AboutSection } from "@/components/sections/about";
import { WhyChooseSection } from "@/components/sections/why-choose";
import { ServicesSection } from "@/components/sections/services";
import { StatsSection } from "@/components/sections/stats";
import { ProcessSection } from "@/components/sections/process";
import { TestimonialsSection } from "@/components/sections/testimonials";

export const metadata: Metadata = {
  title: "Home",
  description: "AL MYTHAQ Building Cleaning Service — Cleaning Beyond Expectations. Book trusted cleaning services across the UAE.",
};

export default function HomePage() {
  return (
    <div>
      <Hero />
      <AboutSection />
      <WhyChooseSection />
      <ServicesSection />
      <StatsSection />
      <ProcessSection />
      <TestimonialsSection />
    </div>
  );
}

