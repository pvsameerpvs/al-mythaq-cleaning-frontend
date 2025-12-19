import type { Metadata } from "next";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ServiceTicker } from "@/components/sections/service-ticker";
import { PricingTiers } from "@/components/sections/pricing-tiers";
import { TestimonialsSection } from "@/components/sections/testimonials";

export const metadata: Metadata = {
  title: "Pricing | AL MYTHAQ Building Cleaning Service",
  description: "Transparent cleaning packages for homes, offices, and buildings across the UAE.",
};

export default function PricingPage() {
  return (
    <div>
      {/* Page Header */}
      <section className="pt-20 pb-10 md:pt-32 md:pb-16 bg-slate-50">
        <div className="container mx-auto px-4 text-center">
          <Badge variant="outline" className="mb-4 border-[#92C340] text-slate-600 px-4 py-1 text-sm uppercase tracking-wider">
            Value for Money
          </Badge>
          <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 font-headland mb-6">
             Simple, <span className="text-[#0970B2]">Transparent</span> Pricing
          </h1>
          <p className="max-w-3xl mx-auto text-slate-600 md:text-lg leading-relaxed">
            Every space is unique. Our packages offer a clear starting point, but we tailor the final quote to your specific needs, size, and schedule.
          </p>
        </div>
      </section>

      <ServiceTicker />
      <PricingTiers />

      {/* FAST QUOTE CTA */}
      <section className="py-16 bg-[#0970B2]">
        <div className="container mx-auto px-4 text-center">
           <h2 className="text-3xl font-bold text-white mb-6">Need a Fast Custom Quote?</h2>
           <p className="text-white/80 max-w-2xl mx-auto mb-8 text-lg">
             Send us your location, service type, and preferred time. We will get back to you instantly with a price.
           </p>
           <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:0545447809">
                <Button size="lg" className="rounded-full bg-white text-[#0970B2] hover:bg-white/90 px-8 h-14 font-bold text-lg">
                  Call 0545447809
                </Button>
              </a>
              <a href="https://wa.me/971545447809" target="_blank" rel="noreferrer">
                <Button size="lg" variant="outline" className="rounded-full bg-[#92C340] text-white hover:bg-[#92C340]/90 px-8 h-14 font-bold text-lg">
                   WhatsApp Us
                </Button>
              </a>
           </div>
        </div>
      </section>

      
    </div>
  );
}
