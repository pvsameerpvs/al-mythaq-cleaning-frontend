import type { Metadata } from "next";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export const metadata: Metadata = {
  title: "Services",
  description: "Residential, commercial, office, deep cleaning and more — AL MYTHAQ cleaning services across the UAE.",
};

const services = [
  {
    title: "Residential cleaning",
    description:
      "Reliable home cleaning for apartments and villas. We focus on high-touch areas, kitchens, bathrooms, living spaces and bedrooms — leaving your home fresh, tidy, and comfortable.",
    bullets: [
      "Dusting and wiping surfaces",
      "Kitchen and bathroom sanitation",
      "Floors vacuumed and mopped",
      "Trash removed and bins cleaned",
      "Optional eco-friendly products"
    ],
  },
  {
    title: "Commercial cleaning",
    description:
      "Professional cleaning for shops, showrooms, gyms, and commercial spaces. We keep your business presentable, hygienic, and client-ready.",
    bullets: [
      "Common areas and customer zones",
      "Restrooms cleaned and restocked",
      "Glass and touchpoints cleaned",
      "Evening or off-peak scheduling",
      "Quality checks each visit"
    ],
  },
  {
    title: "Office cleaning",
    description:
      "Create a healthier workplace with consistent office cleaning. Perfect for daily, weekly, or customized schedules.",
    bullets: [
      "Desks, meeting rooms, and reception",
      "Pantry and break area cleaning",
      "Washrooms deep sanitation",
      "Waste disposal and spot checks",
      "Flexible timings to avoid disruption"
    ],
  },
  {
    title: "Deep cleaning",
    description:
      "A detail-focused clean for when your space needs extra attention. Ideal after renovations, seasonal resets, or before important occasions.",
    bullets: [
      "Detailed dust removal and degreasing",
      "Tile, grout and bathroom detailing",
      "Kitchen appliances exterior cleaning",
      "Hard-to-reach corners and edges",
      "Optional add-ons on request"
    ],
  },
  {
    title: "Move-in / Move-out cleaning",
    description:
      "Start fresh in a new home or hand over a property with confidence. We target buildup and give the space a ready-to-live finish.",
    bullets: [
      "Inside cupboards and shelves wiped",
      "Bathrooms and kitchen detailed",
      "Floors, skirting, and edges cleaned",
      "Spot cleaning for walls on request",
      "Final walkthrough-ready presentation"
    ],
  },
  {
    title: "Special event cleaning",
    description:
      "Before or after an event, we help you reset the space quickly and professionally — so you can focus on hosting.",
    bullets: [
      "Pre-event touch-up cleaning",
      "Post-event cleanup and disposal",
      "Restroom refresh and sanitizing",
      "Kitchen and dining area reset",
      "Fast response scheduling"
    ],
  },
];

export default function ServicesPage() {
  return (
    <div>
      <section className="section-muted">
        <div className="container py-14">
          <h1 className="text-4xl font-extrabold tracking-tight md:text-5xl">Cleaning services designed for real spaces</h1>
          <p className="mt-4 max-w-3xl text-slate-600 md:text-lg">
            From routine maintenance to detailed deep cleaning, AL MYTHAQ delivers premium service across the UAE with trained professionals, clear standards, and quality assurance.
          </p>
        </div>
      </section>

      <section>
        <div className="container py-14">
          <div className="grid gap-5 md:grid-cols-2">
            {services.map((s) => (
              <Card key={s.title} className="hover:shadow-card transition-shadow">
                <CardHeader>
                  <CardTitle>{s.title}</CardTitle>
                  <CardDescription>{s.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-slate-700">
                    {s.bullets.map((b) => (
                      <li key={b}>• {b}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12">
            <h2 className="text-2xl font-extrabold tracking-tight">FAQ</h2>
            <p className="mt-3 max-w-2xl text-slate-600">
              Quick answers about scheduling, supplies, and what to expect.
            </p>

            <div className="mt-6">
              <Accordion type="single" collapsible className="grid gap-4">
                <AccordionItem value="item-1">
                  <AccordionTrigger>Do you bring cleaning supplies and equipment?</AccordionTrigger>
                  <AccordionContent>
                    Yes. Our team arrives prepared with standard tools and supplies. If you prefer specific products (including eco-friendly options), tell us during booking.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>Which UAE areas do you cover?</AccordionTrigger>
                  <AccordionContent>
                    We serve Dubai, Abu Dhabi, Sharjah, and nearby areas. If you are outside these locations, message us on WhatsApp and we will confirm availability.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger>Can I book a same-week appointment?</AccordionTrigger>
                  <AccordionContent>
                    Often, yes. Use the Book page to select a date and time, or call 0545447809 for quick confirmation.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
