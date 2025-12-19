"use client";

import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Check } from "lucide-react";

// Expanded services list with details
const expandedServices = [
  {
    title: "Residential Cleaning",
    image: "/residentialcleaning-service.jpg",
    description: "Comprehensive home cleaning for apartments and villas. We handle everything from dusting to deep sanitization.",
    features: ["Kitchen & Bathroom Deep Clean", "Floor Vacuuming & Mopping", "Dusting High-Touch Areas", "Trash Removal"]
  },
  {
    title: "Commercial Cleaning",
    image: "/commercialcleaning-service.jpg", 
    description: "Keep your business pristine with our professional cleaning services for offices, shops, and showrooms.",
    features: ["Reception & Common Areas", "Office Desks & Equipment", "Restroom Sanitization", "Pantry Cleaning"]
  },
  {
    title: "Office Cleaning",
    image: "/officecleaning-service.jpg",
    description: "Daily or weekly office maintenance to ensure a healthy, productive workspace for your team.",
    features: ["Desk & Workstation Wipe-down", "Meeting Room Prep", "Waste Disposal", "Floor Care"]
  },
  {
    title: "Deep Cleaning",
    image: "/deepcleaning-service.jpg",
    description: "A thorough top-to-bottom clean, perfect for spring cleaning, moving in/out, or post-renovation.",
    features: ["Grout & Tile Scrubbing", "Appliance Interior Cleaning", "Window Tracks & Frames", "Hidden Dust Removal"]
  },
  {
    title: "Move-in / Move-out",
    image: "/moveincleaning-service.jpg",
    description: "Ensure your new home is spotless or leave your old one in perfect condition for inspection.",
    features: ["Cupboards & Shelves (Inside/Out)", "Full Kitchen Degreasing", "Bathroom Descaling", "Balcony Cleaning"]
  },
  {
    title: "Special Event Cleaning",
    image: "/specialeventcleaning-service.jpg",
    description: "Pre-event preparation and post-event cleanup so you can focus on hosting without the mess.",
    features: ["Venue Setup Assistance", "During-Event Maintenance", "Trash & Debris Removal", "Post-Event Deep Clean"]
  },
  {
    title: "Carpet Cleaning",
    image: "/carpetcleaning-service.jpg", // Fallback if specific image missing, or use new placeholders
    description: "Revitalize your carpets with our deep shampoo and stain removal services.",
    features: ["Stain Treatment", "Deep Shampooing", "Odor Neutralization", "Fast Drying Process"]
  },
  {
    title: "Mattress & Upholstery",
    image: "/mattresscleaning-service.jpg",
    description: "Remove dust mites and allergens from your sleeping and seating areas.",
    features: ["UV Sanitization", "Deep Vacuuming", "Stain Removal", "Fabric Protection"]
  },
   {
    title: "Window Cleaning",
    image: "/windowcleaning-service.jpg",
    description: "Crystal clear views for your home or office with our professional window washing.",
    features: ["Interior & Exterior", "Streak-Free Finish", "Frame & Track Cleaning", "Safe High-Reach Tools"]
  }
];

export function AllServices() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
          {expandedServices.map((s, idx) => (
            <Card key={idx} className="overflow-hidden rounded-[2rem] border-0 shadow-lg hover:shadow-2xl transition-all duration-300 group bg-white flex flex-col h-full">
              <CardContent className="p-0 flex flex-col h-full">
                {/* Image Area */}
                <div className="relative h-64 w-full overflow-hidden">
                   <div className="absolute inset-0 bg-slate-200 flex items-center justify-center text-slate-400">
                      <Image 
                        src={s.image}
                        alt={s.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      {/* Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60" />
                   </div>
                   
                   {/* Title Overlay on Image */}
                   <div className="absolute bottom-0 left-0 w-full p-6 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                     <h3 className="text-2xl font-bold text-white mb-1 shadow-black/50">{s.title}</h3>
                   </div>
                </div>

                {/* Content Area */}
                <div className="p-6 md:p-8 flex-1 flex flex-col">
                  <p className="text-slate-600 mb-6 leading-relaxed">
                    {s.description}
                  </p>
                  
                  <div className="mt-auto space-y-3">
                    {s.features.map((feat, i) => (
                      <div key={i} className="flex items-start gap-2 text-sm text-slate-700">
                        <Check className="h-4 w-4 text-[#92C340] mt-1 shrink-0" />
                        <span>{feat}</span>
                      </div>
                     ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
