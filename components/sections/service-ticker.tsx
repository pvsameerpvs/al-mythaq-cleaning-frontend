"use client";

import { Sparkles } from "lucide-react";

const services = [
  "Residential Cleaning",
  "Commercial Cleaning",
  "Office Cleaning",
  "Deep Cleaning",
  "Move-in / Move-out Cleaning",
  "Special Event Cleaning",
  "Carpet Cleaning",
  "Mattress Cleaning",
  "Oven Cleaning",
  "Window Cleaning",
  "Upholstery Cleaning"
];

export function ServiceTicker() {
  return (
    <section className="bg-[#0970B2] py-6 overflow-hidden border-y border-white/10">
      <div className="relative flex w-full">
        <div className="flex w-max animate-marquee items-center whitespace-nowrap">
          {/* First Set */}
          {services.map((service, index) => (
            <div key={`s1-${index}`} className="flex items-center mx-8">
              <Sparkles className="h-5 w-5 text-white mr-8 flex-shrink-0" />
              <span className="text-white font-bold text-lg tracking-wide uppercase">
                {service}
              </span>
            </div>
          ))}
          {/* Second Set (Duplicate) */}
          {services.map((service, index) => (
            <div key={`s2-${index}`} className="flex items-center mx-8">
              <Sparkles className="h-5 w-5 text-white mr-8 flex-shrink-0" />
              <span className="text-white font-bold text-lg tracking-wide uppercase">
                {service}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
