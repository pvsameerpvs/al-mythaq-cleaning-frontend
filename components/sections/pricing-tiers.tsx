import Link from "next/link";
import { Check, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const tiers = [
  {
    name: "Essentials",
    badge: "Popular for homes",
    subtitle: "Routine cleaning for everyday freshness",
    price: "Flexible",
    highlight: false,
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
    price: "Premium",
    highlight: true,
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
    price: "Custom",
    highlight: false,
    points: [
      "Reception & work areas",
      "Meeting rooms & pantry",
      "Washrooms cleaned & restocked",
      "Evening / off-peak scheduling",
      "Quality checks each visit"
    ],
  },
];

export function PricingTiers() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-8 lg:grid-cols-3 max-w-6xl mx-auto items-start">
          {tiers.map((t) => (
            <Card 
              key={t.name} 
              className={`relative overflow-hidden rounded-[2rem] border-0 shadow-lg hover:shadow-2xl transition-all duration-300 h-full flex flex-col ${t.highlight ? 'bg-[#0970B2] text-white ring-4 ring-[#0970B2]/20' : 'bg-white text-slate-900'}`}
            >
              <CardHeader className="p-8 pb-4">
                <div className="flex items-center justify-between mb-4">
                  <Badge 
                    variant={t.highlight ? "outline" : "brand"} 
                    className={t.highlight ? "border-white/30 text-white bg-white/10" : ""}
                  >
                    {t.badge}
                  </Badge>
                  {t.highlight && <Sparkles className="h-5 w-5 text-[#92C340]" />}
                </div>
                <CardTitle className={`text-2xl font-bold ${t.highlight ? 'text-white' : 'text-slate-900'}`}>{t.name}</CardTitle>
                <CardDescription className={`mt-2 ${t.highlight ? 'text-white/80' : 'text-slate-500'}`}>{t.subtitle}</CardDescription>
              </CardHeader>
              <CardContent className="p-8 pt-4 flex-1 flex flex-col">
                <div className="mb-6">
                   <span className={`text-3xl font-extrabold ${t.highlight ? 'text-white' : 'text-slate-900'}`}>{t.price}</span>
                   <span className={`text-sm ml-2 ${t.highlight ? 'text-white/70' : 'text-slate-500'}`}>/ Quote based</span>
                </div>

                <ul className="space-y-4 mb-8 flex-1">
                  {t.points.map((p) => (
                    <li key={p} className="flex items-start gap-3">
                      <div className={`mt-0.5 rounded-full p-1 ${t.highlight ? 'bg-[#92C340] text-white' : 'bg-[#0970B2]/10 text-[#0970B2]'}`}>
                        <Check className="h-3 w-3" />
                      </div>
                      <span className={`text-sm ${t.highlight ? 'text-white/90' : 'text-slate-700'}`}>{p}</span>
                    </li>
                  ))}
                </ul>

                <div className="grid gap-3 mt-auto">
                  <Link href="/book" className="w-full">
                    <Button 
                      className={`w-full rounded-full h-12 font-semibold ${t.highlight ? 'bg-white text-[#0970B2] hover:bg-white/90' : 'bg-[#0970B2] text-white hover:bg-[#0970B2]/90'}`}
                    >
                      Book Now
                    </Button>
                  </Link>
                  <a href="https://wa.me/971545447809" target="_blank" rel="noreferrer" className="w-full">
                    <Button 
                      variant="outline" 
                      className={`w-full rounded-full  bg-[#92C340] h-12 ${t.highlight ? 'border-white/30 text-white hover:bg-white/10 bg-transparent' : 'border-slate-200 text-slate-700 hover:bg-slate-50'}`}
                    >
                      Ask on WhatsApp
                    </Button>
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
