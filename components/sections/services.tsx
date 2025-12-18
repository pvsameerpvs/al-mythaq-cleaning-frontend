
import Link from "next/link";
import { Home, Building2, Briefcase, UtensilsCrossed, Factory, Hotel } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

const services = [
  { title: "Home cleaning", icon: Home, desc: "Regular or deep home cleaning with careful attention to kitchens, bathrooms, and high-touch areas." },
  { title: "Building cleaning", icon: Building2, desc: "Common areas, corridors, lobbies, and stairwells — maintained spotless and welcoming." },
  { title: "Office cleaning", icon: Briefcase, desc: "Daily or scheduled office cleaning for a healthy, productive workplace." },
  { title: "Restaurant cleaning", icon: UtensilsCrossed, desc: "Front-of-house and back-of-house cleaning aligned with high hygiene expectations." },
  { title: "Industry cleaning", icon: Factory, desc: "Site-safe cleaning for industrial spaces, storage, and utility areas." },
  { title: "Hospitality services", icon: Hotel, desc: "Guest-ready cleaning support for hospitality properties and service apartments." },
];

export function ServicesSection() {
  return (
    <section className="section-muted">
      <div className="container py-14">
        <div className="flex items-end justify-between gap-6">
          <div>
            <h2 className="text-2xl font-extrabold tracking-tight md:text-3xl">Cleaning Services</h2>
            <p className="mt-3 max-w-2xl text-slate-600">
              Choose the service that fits your space — and we’ll handle the rest with a high-trust, premium approach.
            </p>
          </div>
          <Link href="/services" className="hidden sm:block">
            <Button variant="primary">View All</Button>
          </Link>
        </div>

        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <Card key={s.title} className="hover:shadow-card transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-brand-blue/10 text-brand-blue">
                    <s.icon className="h-5 w-5" />
                  </div>
                  <CardTitle>{s.title}</CardTitle>
                </div>
                <CardDescription>{s.desc}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>

        <div className="mt-8 sm:hidden">
          <Link href="/services">
            <Button variant="primary" className="w-full">View All Services</Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
