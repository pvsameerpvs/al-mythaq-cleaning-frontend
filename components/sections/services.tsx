
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const services = [
  { title: "Residential cleaning", image: "/residentialcleaning.jpg" },
  { title: "Commercial cleaning", image: "/commercialcleaning.jpg" },
  { title: "Office cleaning", image: "/officecleaning.jpg" },
  { title: "Deep cleaning", image: "/deepcleaning.jpg" },
  { title: "Move-in / Move-out cleaning", image: "/moveincleaning.jpg" },
  { title: "Special event cleaning", image: "/specialeventcleaning.jpg" },
];

export function ServicesSection() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 font-headland">Cleaning Services</h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
          {services.map((s, idx) => (
            <Card key={idx} className="overflow-hidden rounded-[1.5rem] border-0 shadow-lg hover:shadow-xl transition-all duration-300 group">
              <CardContent className="p-0">
                <div className="relative h-64 w-full overflow-hidden">
                   {/* Placeholder Image - in a real scenario we would have actual images */}
                   <div className="absolute inset-0 bg-slate-200 flex items-center justify-center text-slate-400">
                      <Image 
                        src={s.image}
                        alt={s.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                   </div>
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-lg font-bold text-slate-900">{s.title}</h3>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link href="/services">
            <Button size="lg" className="rounded-full bg-cyan-400 hover:bg-cyan-500 text-white px-10 h-12 text-base font-semibold shadow-lg shadow-cyan-400/30">
              View All Services
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
