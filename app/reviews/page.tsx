import type { Metadata } from "next";
import { Badge } from "@/components/ui/badge";
import { TestimonialsSection } from "@/components/sections/testimonials";
import { ServiceTicker } from "@/components/sections/service-ticker";

export const metadata: Metadata = {
  title: "Reviews | AL MYTHAQ Building Cleaning Service",
  description: "Customer reviews for AL MYTHAQ Building Cleaning Service — 5-star professional cleaning across the UAE.",
};

export default function ReviewsPage() {
  return (
    <div>
      {/* Page Header */}
      <section className="pt-20 pb-10 md:pt-32 md:pb-16 ">
        <div className="container mx-auto px-4 text-center">
          <Badge variant="outline" className="mb-4 border-[#92C340] text-slate-600 px-4 py-1 text-sm uppercase tracking-wider">
            Client Stories
          </Badge>
          <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 font-headland mb-6">
             Trusted by Families <br /> 
             <span className="text-[#0970B2]">& Businesses</span>
          </h1>
          <p className="max-w-3xl mx-auto text-slate-600 md:text-lg leading-relaxed">
            We take pride in every space we clean. Read what our clients have to say about our commitment to quality, punctuality, and detail.
          </p>
        </div>
      </section>

      <TestimonialsSection />
      <ServiceTicker />
    </div>
  );
}
