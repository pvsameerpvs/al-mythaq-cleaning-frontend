import type { Metadata } from "next";
import { ServiceTicker } from "@/components/sections/service-ticker";
import { AboutSection } from "@/components/sections/about";
import { WhyChooseSection } from "@/components/sections/why-choose";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = {
  title: "About Us | AL MYTHAQ Building Cleaning Service",
  description: "Learn about AL MYTHAQ Building Cleaning Service — trusted, premium cleaning across the UAE. We deliver consistent, high-quality results for homes and businesses.",
};

export default function AboutPage() {
  return (
    <div>
      {/* Page Header / Intro */}
      <section className="pt-20 pb-10 md:pt-32 md:pb-16 ">
        <div className="container mx-auto px-4 text-center">
          <Badge variant="outline" className="mb-4 border-[#92C340] text-slate-600 px-4 py-1 text-sm uppercase tracking-wider">
            Who We Are
          </Badge>
          <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 font-headland mb-6">
            Building Trust,<br /> 
            One <span className="text-[#0970B2]">Clean Space</span> at a Time
          </h1>
          <p className="max-w-3xl mx-auto text-slate-600 md:text-lg leading-relaxed">
            At Al Mythaq, we believe a clean environment is the foundation of a happy, productive life. 
            We started with a vision to redefine cleaning standards in the UAE, combining 
            professional expertise with a personal touch.
          </p>
        </div>
      </section>

      {/* Requested Components */}
      <AboutSection />
      <WhyChooseSection />
      <ServiceTicker />
    </div>
  );
}
