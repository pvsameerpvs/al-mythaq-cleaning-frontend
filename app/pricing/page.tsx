import type { Metadata } from "next";
import Link from "next/link";
import { Check } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = {
  title: "Pricing",
  description: "Transparent cleaning packages for homes, offices, and buildings across the UAE.",
};

const tiers = [
  {
    name: "Essentials",
    badge: "Popular for homes",
    subtitle: "Routine cleaning for everyday freshness",
    points: [
      "Living areas & bedrooms",
      "Kitchen wipe-down",
      "Bathroom sanitizing",
      "Floors vacuumed & mopped",
      "Trash removal"
    ],
  },
  {
    name: "Deep Clean",
    badge: "Best value",
    subtitle: "Detailed cleaning for a like-new finish",
    points: [
      "More detailed dust removal",
      "Degreasing and detailing",
      "Tile & grout focus areas",
      "High-touch points sanitized",
      "Optional add-ons upon request"
    ],
  },
  {
    name: "Commercial",
    badge: "For businesses",
    subtitle: "Flexible scheduling for offices & sites",
    points: [
      "Reception & work areas",
      "Meeting rooms & pantry",
      "Washrooms cleaned & restocked",
      "Evening / off-peak scheduling",
      "Quality checks each visit"
    ],
  },
];

export default function PricingPage() {
  return (
    <div>
      <section className="section-muted">
        <div className="container py-14">
          <h1 className="text-4xl font-extrabold tracking-tight md:text-5xl">Simple, transparent pricing</h1>
          <p className="mt-4 max-w-3xl text-slate-600 md:text-lg">
            Every space is different. These packages are a starting point — we confirm the final quote based on size, scope, and timing.
          </p>
        </div>
      </section>

      <section>
        <div className="container py-14">
          <div className="grid gap-5 lg:grid-cols-3">
            {tiers.map((t) => (
              <Card key={t.name} className="relative overflow-hidden">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle>{t.name}</CardTitle>
                    <Badge variant={t.name === "Deep Clean" ? "green" : "default"}>{t.badge}</Badge>
                  </div>
                  <CardDescription>{t.subtitle}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-slate-700">
                    {t.points.map((p) => (
                      <li key={p} className="flex items-start gap-2">
                        <Check className="mt-0.5 h-4 w-4 text-brand-green" />
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6 grid gap-3">
                    <Link href="/book">
                      <Button className="w-full">Book Now</Button>
                    </Link>
                    <a href="https://wa.me/971545447809" target="_blank" rel="noreferrer">
                      <Button variant="secondary" className="w-full">Ask on WhatsApp</Button>
                    </a>
                  </div>

                  <p className="mt-4 text-xs text-slate-500">
                    Note: This is a frontend-only site — final price is confirmed after a quick call or WhatsApp assessment.
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 rounded-3xl border border-slate-200 bg-slate-50 p-6 md:p-10">
            <h2 className="text-2xl font-extrabold tracking-tight">Need a fast quote?</h2>
            <p className="mt-3 max-w-2xl text-slate-600">
              Send your area, service type, and preferred date/time — and we’ll respond quickly.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <a href="tel:0545447809"><Button size="lg">Call 0545447809</Button></a>
              <a href="https://wa.me/971545447809" target="_blank" rel="noreferrer"><Button variant="secondary" size="lg">WhatsApp</Button></a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
