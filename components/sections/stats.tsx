import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Sparkles, Trophy, Star, UserCheck } from "lucide-react";

export function StatsSection() {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="rounded-[2.5rem] bg-[#0970B2] p-8 md:p-16 overflow-hidden relative">
           {/* Background decorative elements */}
           <div className="absolute top-10 right-10 text-white/10 animate-pulse">
             <Star className="h-12 w-12" fill="currentColor" />
           </div>
           <div className="absolute bottom-20 left-10 text-white/10 animate-pulse delay-700">
             <Star className="h-8 w-8" fill="currentColor" />
           </div>
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white/5 rotate-12 scale-150 pointer-events-none">
             <Star className="h-96 w-96" fill="currentColor" />
           </div>
           
           <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center relative z-10">
             
             {/* Left Column: Stats Grid */}
             <div className="grid grid-cols-2 gap-4 md:gap-6">
               <StatCard 
                  value="750+" 
                  label="Project Finished" 
                  icon={<Sparkles className="h-8 w-8 text-[#0970B2]" />} 
               />
               <StatCard 
                  value="15+" 
                  label="Years of Experience" 
                  icon={<Trophy className="h-8 w-8 text-[#0970B2]" />} 
               />
               <StatCard 
                  value="700+" 
                  label="Satisfied Customers" 
                  icon={<Star className="h-8 w-8 text-[#0970B2]" fill="currentColor" />} 
               />
               <StatCard 
                  value="120+" 
                  label="Professional Cleaners" 
                  icon={<UserCheck className="h-8 w-8 text-[#0970B2]" />} 
               />
             </div>

             {/* Right Column: Text Content */}
             <div className="text-white space-y-6">
               <h2 className="text-3xl md:text-5xl font-extrabold font-headland leading-tight">
                 We are the Fastest Growing Cleaning Companies
               </h2>
               <p className="text-white/80 leading-relaxed text-lg">
                 Our cleaning service is growing quickly. We provide excellent service that keeps customers coming back. Our staff work hard to keep your home or office clean. You can trust us to do the job right. We use eco-friendly products so you can have a clean home without harsh chemicals. We would love to have you as a new customer. Give us a call today to learn more about our fast-growing cleaning service.
               </p>
               
               <div className="pt-4">
                 <Link href="/services">
                   <Button size="lg" className="rounded-full bg-cyan-400 hover:bg-cyan-500 text-white px-8 h-12 text-base font-semibold border-0">
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
function StatCard({ value, label, icon }: { value: string; label: string; icon: React.ReactNode }) {
  return (
    <Card className="border-0 shadow-lg p-6 md:p-8 flex flex-col items-center justify-center text-center aspect-square rounded-[2rem]">
      <div className="mb-4 bg-blue-50 p-4 rounded-full">
        {icon}
      </div>
      <p className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-2">{value}</p>
      <p className="text-sm font-medium text-slate-500">{label}</p>
    </Card>
  );
}
