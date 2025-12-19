
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sparkles, Award, Star } from "lucide-react";

export function ProcessSection() {
  return (
    <section className="py-16 md:py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* Left Column: Text Content */}
          <div className="w-full lg:w-1/2">
            <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 font-headland mb-6 leading-tight">
              We Make Cleaning Easier and More Convenient
            </h2>
            <p className="text-slate-600 mb-6 leading-relaxed">
              AL MYTHAQ offers convenient, professional cleaning services to help make your life easier. Our experienced, trained cleaners use top-quality products and equipment to deliver thorough, efficient cleaning. We strive to provide a hassle-free experience, with cleaners who are punctual, reliable, and committed to exceptional results.
            </p>
            <p className="text-slate-600 mb-8 leading-relaxed">
              Whether you need a one-time cleaning or a regular cleaning service, our professional team is here to meet your needs. We offer flexible scheduling options and customizable cleaning plans to ensure that your home or office is cleaned to your satisfaction.
            </p>
            
            <Link href="/services">
              <Button size="lg" className="rounded-full bg-[#92C340] hover:bg-[#92C340]/90 text-white px-10 h-12 text-base font-semibold shadow-lg shadow-[#92C340]/30">
                View Services
              </Button>
            </Link>
          </div>

          {/* Right Column: Image with Cloud Mask Background */}
          <div className="w-full lg:w-1/2 relative flex justify-center">
             <div className="relative w-full max-w-[320px] sm:max-w-[400px]">
               
               {/* Cloud Background */}
               <div className="absolute left-1/2 bottom-0 z-0 h-[85%] w-[120%] -translate-x-1/2 text-brand-blue">
                 <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="h-full w-full opacity-100">
                    {/* Cloud-like shape using merged circles path */}
                    <path stroke="#0970B2" strokeWidth="1" fill="#0970B2" d="M 40 100 Q 40 60 80 60 Q 100 20 140 60 Q 180 60 180 100 Q 180 140 140 140 L 80 140 Q 40 140 40 100" transform="translate(-10 20) scale(1.1)" />
                    <path stroke="#0970B2" strokeWidth="1" fill="#0970B2" d="M38.1,-56.3C49.9,-43.8,60.5,-32.7,63.9,-19.9C67.3,-7.1,63.5,7.3,55.9,19.9C48.3,32.5,36.9,43.3,23.6,50.6C10.3,57.9,-5,61.7,-20.1,59.3C-35.2,56.9,-50.1,48.3,-60.8,35.4C-71.5,22.5,-77.9,5.3,-75.4,-10.6C-72.9,-26.5,-61.4,-41.1,-48.6,-53.4C-35.8,-65.7,-21.6,-75.7,-7.3,-75.3C7,-74.9,26.3,-68.8,38.1,-56.3Z" transform="translate(100 100) scale(1.15)" />
                </svg>
               </div>

               {/* Image - Pop out top */}
               <div className="relative z-10 h-[400px] sm:h-[550px] w-full">
                 <svg width="0" height="0" className="absolute">
                   <defs>
                     <mask id="process-mask" maskUnits="objectBoundingBox" maskContentUnits="objectBoundingBox">
                       <rect x="0" y="0" width="1" height="0.4" fill="white" />
                       <g transform="translate(-0.1, 0.15) scale(0.006, 0.00425)">
                         <path fill="white" d="M 40 100 Q 40 60 80 60 Q 100 20 140 60 Q 180 60 180 100 Q 180 140 140 140 L 80 140 Q 40 140 40 100" transform="translate(-10 20) scale(1.1)" />
                         <path fill="white" d="M38.1,-56.3C49.9,-43.8,60.5,-32.7,63.9,-19.9C67.3,-7.1,63.5,7.3,55.9,19.9C48.3,32.5,36.9,43.3,23.6,50.6C10.3,57.9,-5,61.7,-20.1,59.3C-35.2,56.9,-50.1,48.3,-60.8,35.4C-71.5,22.5,-77.9,5.3,-75.4,-10.6C-72.9,-26.5,-61.4,-41.1,-48.6,-53.4C-35.8,-65.7,-21.6,-75.7,-7.3,-75.3C7,-74.9,26.3,-68.8,38.1,-56.3Z" transform="translate(100 100) scale(1.15)" />
                       </g>
                     </mask>
                   </defs>
                 </svg>
                 <Image
                  src="/cleaner-man.png"
                  alt="Professional Cleaner"
                  fill
                  className="object-cover object-top [mask-image:url(#process-mask)] [mask-size:100%_100%] [mask-repeat:no-repeat]"
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
