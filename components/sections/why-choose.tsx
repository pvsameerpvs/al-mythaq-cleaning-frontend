
import { ShieldCheck, Sparkles, Trophy } from "lucide-react";
import { Card } from "@/components/ui/card";

export function WhyChooseSection() {
  return (
    <section className=" py-16 md:py-24">
      <div className=" mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 font-headland">
            Why Choose <span className="text-[#0970B2]">AL MYTHAQ</span> Cleaners
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto">
          {/* Card 1 */}
          <div className="bg-white rounded-[2rem] p-8 text-center shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-[#0970B2]/10 transition-transform duration-300 hover:scale-110">
               <Sparkles className="h-10 w-10 text-[#0970B2]" />
            </div>
            <h3 className="mb-4 text-xl font-bold text-slate-900">Professional Machines</h3>
            <p className="text-slate-600 leading-relaxed">
              We use high-quality cleaning products and equipment to ensure that your home or office is left sparkling clean and fresh.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-[2rem] p-8 text-center shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-[#0970B2]/10 transition-transform duration-300 hover:scale-110">
               <Trophy className="h-10 w-10 text-[#0970B2]" />
            </div>
            <h3 className="mb-4 text-xl font-bold text-slate-900">Years of Experience</h3>
            <p className="text-slate-600 leading-relaxed">
              With years of experience in this industry, we understand that high-quality cleaning services can truly improve your life.
            </p>
          </div>

           {/* Card 3 */}
           <div className="bg-white rounded-[2rem] p-8 text-center shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-[#0970B2]/10 transition-transform duration-300 hover:scale-110">
               <ShieldCheck className="h-10 w-10 text-[#0970B2]" />
            </div>
            <h3 className="mb-4 text-xl font-bold text-slate-900">Trusted and Reliable</h3>
            <p className="text-slate-600 leading-relaxed">
              When choosing a cleaning service, trust and reliability are essential. That's why we make these qualities our top priority.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
