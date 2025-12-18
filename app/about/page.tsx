import type { Metadata } from "next";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "About",
  description: "Learn about AL MYTHAQ Building Cleaning Service — trusted, premium cleaning across the UAE.",
};

export default function AboutPage() {
  return (
    <div>
      <section className="section-muted">
        <div className="container py-14">
          <Badge variant="brand" className="mb-4">About AL MYTHAQ</Badge>
          <h1 className="text-4xl font-extrabold tracking-tight md:text-5xl">A cleaner standard for the UAE</h1>
          <p className="mt-4 max-w-3xl text-slate-600 md:text-lg">
            AL MYTHAQ Building Cleaning Service was built around one simple goal: deliver consistent, premium cleaning you can trust. From homes and offices to buildings and hospitality properties, we combine trained staff, clear checklists, and quality assurance to keep your space spotless.
          </p>
        </div>
      </section>

      <section>
        <div className="container py-14">
          <div className="grid gap-6 md:grid-cols-3">
            <Card>
              <CardContent className="p-6">
                <h2 className="text-lg font-semibold">Our promise</h2>
                <p className="mt-2 text-sm text-slate-600">
                  Cleaning Beyond Expectations — every visit, every room, every detail.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h2 className="text-lg font-semibold">How we work</h2>
                <p className="mt-2 text-sm text-slate-600">
                  We follow a task-based checklist, use professional tools, and confirm the finish before we leave.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h2 className="text-lg font-semibold">Where we serve</h2>
                <p className="mt-2 text-sm text-slate-600">
                  UAE — Dubai, Abu Dhabi, Sharjah & nearby areas. Flexible scheduling available.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="mt-10 max-w-3xl">
            <h3 className="text-2xl font-extrabold tracking-tight">What makes us different</h3>
            <ul className="mt-4 space-y-3 text-slate-700">
              <li>• Clear communication and fast response on WhatsApp</li>
              <li>• Trained professionals with consistent standards</li>
              <li>• Options for eco-friendly products upon request</li>
              <li>• On-time arrivals and organized service flow</li>
              <li>• Quality checks to ensure the results match expectations</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
