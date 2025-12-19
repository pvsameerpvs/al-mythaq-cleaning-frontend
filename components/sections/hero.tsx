"use client";

import Link from "next/link";
import Image from "next/image";
import { Star, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-white pb-20 pt-10 md:pt-16 lg:pb-28">
      <div className="container relative z-10">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          {/* Left Column: Text Content */}
          {/* Left Column: Text Content */}
          <div className="contents lg:block lg:max-w-2xl">
            <div className="order-1">
              <Badge 
                variant="brand" 
                className="mb-6 rounded-full bg-blue-50 px-4 py-1.5 text-sm font-medium text-brand-blue hover:bg-blue-100"
              >
                Professional Cleaning Service Company
              </Badge>
              
              <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl md:text-6xl lg:leading-tight">
                Trusted and Reliable <br className="hidden lg:block" />
                Cleaning Services
              </h1>
            </div>
            
            <div className="order-3">
              <p className="mt-6 text-lg text-slate-600 md:text-xl leading-relaxed max-w-lg">
                We provide the premier cleaning service in your local area. 
                Reliable, high-quality, and detailed cleaning services across the city.
              </p>

              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Link href="/contact">
                  <Button size="lg" className="h-12 rounded-full px-8 text-base ">
                    Contact Us
                  </Button>
                </Link>
                <Link href="/services">
                  <Button variant="secondary" size="lg" className="h-12 rounded-full bg-[#92C340] text-white hover:bg-[#92C340]/90 px-8 text-base shadow-lg shadow-[#92C340]/30">
                    View Services
                  </Button>
                </Link>
              </div>
            </div>
          </div>

          {/* Right Column: Image & Visuals */}
          <div className="relative flex justify-center order-2 lg:order-last">
           
            {/* Container */}
            <div className="relative w-full max-w-[320px] sm:max-w-[400px]">
               
               {/* Cloud Background */}
               <div className="absolute left-1/2 bottom-0 z-0 h-[85%] w-[120%] -translate-x-1/2 text-brand-blue">
                 <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="h-full w-full opacity-100">
                    {/* Cloud-like shape using merged circles path */}
                    <path stroke="#92C340" strokeWidth="5" fill="#0970B2" d="M 40 100 Q 40 60 80 60 Q 100 20 140 60 Q 180 60 180 100 Q 180 140 140 140 L 80 140 Q 40 140 40 100" transform="translate(-10 20) scale(1.1)" />
                    <path stroke="#92C340" strokeWidth="5" fill="#0970B2" d="M38.1,-56.3C49.9,-43.8,60.5,-32.7,63.9,-19.9C67.3,-7.1,63.5,7.3,55.9,19.9C48.3,32.5,36.9,43.3,23.6,50.6C10.3,57.9,-5,61.7,-20.1,59.3C-35.2,56.9,-50.1,48.3,-60.8,35.4C-71.5,22.5,-77.9,5.3,-75.4,-10.6C-72.9,-26.5,-61.4,-41.1,-48.6,-53.4C-35.8,-65.7,-21.6,-75.7,-7.3,-75.3C7,-74.9,26.3,-68.8,38.1,-56.3Z" transform="translate(100 100) scale(1.15)" />
                </svg>
               </div>

               {/* Image - Pop out top */}
               <div className="relative z-10 h-[400px] sm:h-[550px] w-full">
                 <svg width="0" height="0" className="absolute">
                   <defs>
                     <mask id="hero-mask" maskUnits="objectBoundingBox" maskContentUnits="objectBoundingBox">
                       <rect x="0" y="0" width="1" height="0.4" fill="white" />
                       <g transform="translate(-0.1, 0.15) scale(0.006, 0.00425)">
                         <path fill="white" d="M 40 100 Q 40 60 80 60 Q 100 20 140 60 Q 180 60 180 100 Q 180 140 140 140 L 80 140 Q 40 140 40 100" transform="translate(-10 20) scale(1.1)" />
                         <path fill="white" d="M38.1,-56.3C49.9,-43.8,60.5,-32.7,63.9,-19.9C67.3,-7.1,63.5,7.3,55.9,19.9C48.3,32.5,36.9,43.3,23.6,50.6C10.3,57.9,-5,61.7,-20.1,59.3C-35.2,56.9,-50.1,48.3,-60.8,35.4C-71.5,22.5,-77.9,5.3,-75.4,-10.6C-72.9,-26.5,-61.4,-41.1,-48.6,-53.4C-35.8,-65.7,-21.6,-75.7,-7.3,-75.3C7,-74.9,26.3,-68.8,38.1,-56.3Z" transform="translate(100 100) scale(1.15)" />
                       </g>
                     </mask>
                   </defs>
                 </svg>
                 <Image
                  src="/cleaner.png"
                  alt="Professional Cleaner"
                  fill
                  className="object-cover object-top [mask-image:url(#hero-mask)] [mask-size:100%_100%] [mask-repeat:no-repeat]"
                  priority
                 />
               </div>

              {/* Floating Element: Quality Badge (Top Left) */}
              <div className="absolute -left-2 top-4 sm:-left-6 sm:top-10 z-20 animate-bounce-slow">
                <div className="flex h-12 w-12 sm:h-16 sm:w-16 items-center justify-center rounded-full bg-white shadow-2xl p-1">
                  <div className="flex h-full w-full items-center justify-center rounded-full bg-cyan-400 text-white">
                     <Award className="h-6 w-6 sm:h-8 sm:w-8" />
                  </div>
                </div>
              </div>

               {/* Floating Element: Review Card (Right) */}
               <div className="absolute right-0 top-1/2 sm:-right-20 z-20 animate-pulse-slow max-w-[180px] sm:max-w-none">
                 <div className="rounded-2xl bg-white p-2.5 sm:p-4 shadow-xl flex items-center gap-2 sm:gap-3">
                    <div className="h-8 w-8 sm:h-10 sm:w-10 overflow-hidden rounded-full bg-yellow-400 border-2 border-white shadow-sm flex-shrink-0">
                       <Image src="/logo.png" alt="Avatar" width={40} height={40} className="object-cover" />
                     </div>
                     <div>
                       <p className="text-[10px] sm:text-xs font-bold text-slate-900 truncate">Savannah Nguyen</p>
                       <div className="flex text-yellow-400 mt-0.5">
                         <Star className="h-2.5 w-2.5 sm:h-3 sm:w-3 fill-current" />
                         <Star className="h-2.5 w-2.5 sm:h-3 sm:w-3 fill-current" />
                         <Star className="h-2.5 w-2.5 sm:h-3 sm:w-3 fill-current" />
                         <Star className="h-2.5 w-2.5 sm:h-3 sm:w-3 fill-current" />
                         <Star className="h-2.5 w-2.5 sm:h-3 sm:w-3 fill-current" />
                       </div>
                     </div>
                 </div>
               </div>
               
               {/* Floating Sparkles (Cyan Stars) */}
               <div className="absolute -right-4 top-0 z-0 text-cyan-400 animate-spin-slow">
                  <svg width="30" height="30" viewBox="0 0 24 24" fill="currentColor" className="sm:w-10 sm:h-10">
                    <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
                  </svg>
               </div>
               
               <div className="absolute left-0 bottom-10 z-0 text-cyan-400 animate-pulse">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="sm:w-[30px] sm:h-[30px]">
                    <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
                  </svg>
               </div>
               
               {/* Extra Star 1 (Inside Left) */}
               <div className="absolute left-10 top-24 z-0 text-cyan-400 animate-pulse delay-700">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="sm:w-5 sm:h-5">
                    <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
                  </svg>
               </div>

                {/* Extra Star 2 (Inside Right) */}
               <div className="absolute right-20 bottom-32 z-0 text-cyan-400 animate-pulse delay-300">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="sm:w-6 sm:h-6">
                    <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
                  </svg>
               </div>

               {/* Extra Star 3 (Top Right Center) */}
               <div className="absolute left-2/3 top-12 z-0 text-cyan-400 animate-spin-slow delay-500">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" className="sm:w-4 sm:h-4">
                    <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
                  </svg>
               </div>

                {/* Extra Star 4 (Bottom Left Lower) */}
               <div className="absolute left-16 bottom-24 z-0 text-cyan-400 animate-pulse delay-1000">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="sm:w-5 sm:h-5">
                    <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
                  </svg>
               </div>

                {/* Extra Star 5 (Top Left Higher) */}
               <div className="absolute left-1/3 -top-2 z-0 text-cyan-400 animate-pulse delay-150">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" className="sm:w-4 sm:h-4">
                    <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
                  </svg>
               </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
