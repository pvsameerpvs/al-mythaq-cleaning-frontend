import type { Metadata } from "next";
import { Badge } from "@/components/ui/badge";
import { ServiceTicker } from "@/components/sections/service-ticker";
import { AllServices } from "@/components/sections/all-services";
import { TestimonialsSection } from "@/components/sections/testimonials";

export const metadata: Metadata = {
  title: "Services | AL MYTHAQ Building Cleaning Service",
  description: "Residential, commercial, office, deep cleaning and more — AL MYTHAQ cleaning services across the UAE.",
};

export default function ServicesPage() {
  return (
    <div>
      {/* Page Header */}
      <section className="pt-20 pb-10 md:pt-32 md:pb-16 ">
        <div className="container mx-auto px-4 text-center">
          <Badge variant="outline" className="mb-4 border-[#92C340] text-slate-600 px-4 py-1 text-sm uppercase tracking-wider">
            What We Do
          </Badge>
          <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 font-headland mb-6">
             Start Fresh with <br /> 
             <span className="text-[#0970B2]">AL MYTHAQ</span> Cleaning Services
          </h1>
          <p className="max-w-3xl mx-auto text-slate-600 md:text-lg leading-relaxed">
            From routine maintenance to detailed deep cleaning, we deliver premium outcomes for every space. 
            Choose the service that fits your needs and let us handle the rest.
          </p>
        </div>
      </section>

      <ServiceTicker />
      <AllServices />

      {/* FAQs or other content can go here if needed, but keeping it clean for now per "good ui" request */}
      
      <TestimonialsSection />
    </div>
  );
}
