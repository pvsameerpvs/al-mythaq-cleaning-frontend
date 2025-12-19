
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

export function AboutSection() {
  return (
    <section className="py-12 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        {/* Main Blue Card */}
        <div className="relative overflow-hidden rounded-[2rem] md:rounded-[2.5rem] bg-[#0970B2] p-6 md:p-12 lg:p-16">
          
          {/* Background Decorative Sparkles (Subtle) */}
          <div className="absolute top-10 left-10 text-white/20 animate-pulse">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" /></svg>
          </div>
          <div className="absolute bottom-10 left-1/3 text-white/20 animate-pulse delay-700">
             <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" /></svg>
          </div>

          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
            
            {/* Left Column: Masked Image */}
            <div className="w-full lg:w-1/2 relative h-[300px] md:h-[400px] lg:h-[500px] flex items-center justify-center">
               {/* Cloud Mask Container */}
               <div className="relative w-full h-full">
                 <div className="absolute inset-0 z-10">
                   {/* We use a CSS Mask for the cloud shape to clip the image */}
                   <div className="w-full h-full relative">
                      {/* SVG Mask Definition (Hidden, mapped to ID) */}
                      <svg width="0" height="0" className="absolute">
                        <defs>
                          <mask id="cloud-mask-about" maskUnits="objectBoundingBox" maskContentUnits="objectBoundingBox">
                            <path fill="white" d="M0.5,0.05 C0.65,-0.05 0.75,0.05 0.8,0.15 C0.95,0.15 1.0,0.3 0.95,0.45 C1.0,0.55 1.0,0.7 0.9,0.8 C0.95,0.9 0.85,1.0 0.7,0.95 C0.6,1.0 0.4,1.0 0.3,0.95 C0.15,1.0 0.05,0.9 0.1,0.8 C0.0,0.7 0.0,0.55 0.05,0.45 C0.0,0.3 0.05,0.15 0.2,0.15 C0.25,0.05 0.35,-0.05 0.5,0.05 Z" />
                          </mask>
                        </defs>
                      </svg>
                      
                      {/* The Image itself with the mask applied */}
                      <div className="w-full h-full" style={{ maskImage: "url(#cloud-mask-about)", WebkitMaskImage: "url(#cloud-mask-about)", maskSize: "contain", WebkitMaskSize: "contain", maskRepeat: "no-repeat", maskPosition: "center" }}>
                        <Image 
                          src="/aboutsection.jpg" 
                          alt="Professional Cleaner" 
                          fill 
                          className="object-cover"
                          priority
                        />
                      </div>
                   </div>
                 </div>
                 
                 {/* Decorative Background Cloud (Behind the image to give depth/border) */}
                 <div className="absolute inset-0 z-0 opacity-20 transform scale-110 text-white">
                    <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="w-full h-full fill-current">
                       <path d="M50,5 C65,-5 75,5 80,15 C95,15 100,30 95,45 C100,55 100,70 90,80 C95,90 85,100 70,95 C60,100 40,100 30,95 C15,100 5,90 10,80 C0,70 0,55 5,45 C0,30 5,15 20,15 C25,5 35,-5 50,5 Z" />
                    </svg>
                 </div>
               </div>
            </div>

            {/* Right Column: Content Card */}
            <div className="w-full lg:w-1/2">
              <div className="bg-white rounded-[2rem] p-6 md:p-10 shadow-xl">
                 <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 mb-6 font-headland">
                   Few Words About <span className="text-[#0970B2]">AL MYTHAQ</span> Cleaning Services
                 </h2>
                 
                 <p className="text-slate-600 mb-8 leading-relaxed text-sm md:text-base">
                   Trusted across the UAE for premium cleaning, we deliver consistency and precision in every detail. Our team ensures your space is left impeccably clean, refreshed, and ready to enjoy.
                 </p>


                 <Link href="/services">
                   <Button size="lg" className="w-full md:w-auto rounded-full bg-[#92C340] hover:bg-[#92C340]/90 text-white px-8 h-12 text-base font-semibold shadow-lg shadow-[#92C340]/30">
                     View Services
                   </Button>
                 </Link>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
