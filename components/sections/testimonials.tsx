"use client";

import { useState, useEffect } from "react";
import { Star, Quote, ArrowLeft, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const testimonials = [
  {
    name: "Ralph Edwards",
    location: "Dore, Sheffield",
    quote: "The cleaners arrived on time, and worked diligently until the job was completed. They were polite. I am very satisfied with the service and would gladly recommend them to others or use them again in the future.",
  },
  {
    name: "Kristin Watson",
    location: "Lisvane, Cardiff",
    quote: "They delivered excellent service within the time frame we had before turning the keys over to the state agent. They listened to our needs and adapted their work fantastically. I will certainly use their services again.",
  },
  {
    name: "Courtney Henry",
    location: "Knighton, Leicester",
    quote: "We used their services five times during our busiest time of the year, annual Christmas Fair, and were very happy with them. It was a delight to have the building cleaned every evening. Excellent service as always.",
  },
   {
    name: "Cameron Williamson",
    location: "West Midlands",
    quote: "The team did a fantastic job with our post-construction cleaning. They removed all the dust and debris, leaving the place sparkling. Highly recommended!",
  },
  {
    name: "Eleanor Pena",
    location: "Bristol",
    quote: "I've tried several cleaning companies, but Al Mythaq is by far the best. Consistent quality and very friendly staff. They always go the extra mile.",
  },
  {
    name: "Arlene McCoy",
    location: "London",
    quote: "Fast, efficient, and thorough. I book them for my office cleaning every week and have never been disappointed. Great value for money.",
  },
];

export function TestimonialsSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Reset slide when switching views to prevent index out of bounds
  useEffect(() => {
    setCurrentSlide(0);
  }, [isMobile]);

  const itemsPerPage = isMobile ? 1 : 3;
  const totalPages = Math.ceil(testimonials.length / itemsPerPage);

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % totalPages);
  };

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + totalPages) % totalPages);
  };

  return (
    <section className=" py-16 md:py-24">
      <div className=" mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 font-headland">
            What Our Customers Say
          </h2>
        </div>

        {/* Carousel Viewport */}
        <div className="relative max-w-7xl mx-auto overflow-hidden">
          {/* Sliding Track */}
          <div 
            className="flex transition-transform duration-500 ease-in-out will-change-transform"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {testimonials.map((t, i) => (
              <div key={i} className="w-full md:w-1/3 flex-shrink-0 px-4">
                <Card className="border-0 shadow-lg overflow-hidden flex flex-col h-full rounded-[2rem] bg-white">
                  <CardContent className="p-8 flex-1 flex flex-col gap-6">
                    
                    {/* User Info */}
                    <div className="flex items-center gap-4">
                      <div className="relative h-14 w-14 overflow-hidden rounded-full bg-slate-200">
                        <div className="absolute inset-0 flex items-center justify-center bg-[#ffe0e0] text-[#ff6b6b] font-bold text-xl">
                          {t.name.charAt(0)}
                        </div>
                      </div>
                      <div>
                        <h3 className="font-bold text-lg text-slate-900">{t.name}</h3>
                        <p className="text-sm text-slate-500 italic">{t.location}</p>
                      </div>
                    </div>

                    {/* Quote Text */}
                    <p className="text-slate-600 leading-relaxed text-sm md:text-base">
                      {t.quote}
                    </p>
                    
                    <div className="flex-1" />
                  </CardContent>

                  {/* Blue Footer */}
                  <div className="bg-[#0970B2] p-6 flex items-center justify-between mt-auto">
                    <div className="flex gap-1">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star key={star} className="h-5 w-5 fill-white text-white" />
                      ))}
                    </div>
                    <div className="h-10 w-10 rounded-full bg-white/20 flex items-center justify-center border-2 border-white">
                      <Quote className="h-5 w-5 text-white fill-white" />
                    </div>
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Buttons */}
        <div className="mt-12 flex justify-center gap-4">
          <Button 
            size="icon" 
            variant="outline" 
            className="h-12 w-12 rounded-full border-2 border-white bg-white hover:bg-slate-50 shadow-md text-slate-400 hover:text-slate-600"
            onClick={handlePrev}
          >
            <ArrowLeft className="h-5 w-5" />
          </Button>
          <Button 
            size="icon" 
            className="h-12 w-12 rounded-full bg-[#92C340] hover:bg-[#92C340]/90 text-white shadow-md"
            onClick={handleNext}
          >
             <ArrowRight className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
}
