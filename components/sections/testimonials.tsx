
import Link from "next/link";
import { Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    name: "Aisha R.",
    location: "Dubai",
    quote: "Professional team, on time, and the finish was spotless. You can tell they care about quality.",
  },
  {
    name: "Omar K.",
    location: "Sharjah",
    quote: "Great service and very responsive on WhatsApp. The office looked fresh and organized after their visit.",
  },
  {
    name: "Sarah M.",
    location: "Abu Dhabi",
    quote: "We booked a deep clean before moving in — the results were excellent and the process was smooth.",
  },
];

export function TestimonialsSection() {
  return (
    <section>
      <div className="container py-14">
        <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="text-2xl font-extrabold tracking-tight md:text-3xl">What Our Customers Say</h2>
            <p className="mt-3 max-w-2xl text-slate-600">
              Rated 5-stars by clients who value professionalism, speed, and a premium finish.
            </p>
          </div>
          <Link href="/reviews" className="md:self-end">
            <Button variant="outline">See More Reviews</Button>
          </Link>
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {testimonials.map((t) => (
            <Card key={t.name}>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-base">{t.name}</CardTitle>
                  <div className="flex items-center gap-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-brand-green" />
                    ))}
                  </div>
                </div>
                <CardDescription>{t.location}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-slate-700">“{t.quote}”</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
