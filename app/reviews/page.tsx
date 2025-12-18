import type { Metadata } from "next";
import { Star } from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = {
  title: "Reviews",
  description: "Customer reviews for AL MYTHAQ Building Cleaning Service — 5-star professional cleaning across the UAE.",
};

const reviews = [
  {
    name: "Aisha R.",
    location: "Dubai",
    service: "Home deep clean",
    quote: "Professional team, on time, and the finish was spotless. You can tell they care about quality.",
  },
  {
    name: "Omar K.",
    location: "Sharjah",
    service: "Office cleaning",
    quote: "Great service and very responsive on WhatsApp. The office looked fresh and organized after their visit.",
  },
  {
    name: "Sarah M.",
    location: "Abu Dhabi",
    service: "Move-in cleaning",
    quote: "We booked a deep clean before moving in — the results were excellent and the process was smooth.",
  },
  {
    name: "Hassan A.",
    location: "Dubai",
    service: "Building common areas",
    quote: "Consistent quality every week. The lobby and stairwells stay clean and welcoming.",
  },
  {
    name: "Noura S.",
    location: "Sharjah",
    service: "Restaurant cleaning",
    quote: "High hygiene standards and very organized. They worked around our schedule without disruption.",
  },
  {
    name: "James T.",
    location: "Abu Dhabi",
    service: "Commercial cleaning",
    quote: "Reliable and professional. Clear communication and strong attention to detail.",
  },
];

export default function ReviewsPage() {
  return (
    <div>
      <section className="section-muted">
        <div className="container py-14">
          <Badge variant="brand" className="mb-4">5-Star Service</Badge>
          <h1 className="text-4xl font-extrabold tracking-tight md:text-5xl">What clients say about AL MYTHAQ</h1>
          <p className="mt-4 max-w-3xl text-slate-600 md:text-lg">
            We’re proud to earn trust through professional conduct, punctual service, and consistent results.
          </p>
        </div>
      </section>

      <section>
        <div className="container py-14">
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {reviews.map((r) => (
              <Card key={r.name}>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-base">{r.name}</CardTitle>
                    <div className="flex items-center gap-1">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star key={i} className="h-4 w-4 text-brand-green" />
                      ))}
                    </div>
                  </div>
                  <CardDescription>{r.location} • {r.service}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-slate-700">“{r.quote}”</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
