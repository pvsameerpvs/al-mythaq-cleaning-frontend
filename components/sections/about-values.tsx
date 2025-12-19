import { HeartHandshake, ClipboardList, MapPin } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export function AboutValues() {
  const values = [
    {
      icon: HeartHandshake,
      title: "Our Promise",
      description: "Cleaning Beyond Expectations — every visit, every room, every detail. We ensure your space is left impeccably clean.",
    },
    {
      icon: ClipboardList,
      title: "How We Work",
      description: "We follow a strictly task-based checklist, use professional tools, and confirm the finish quality before we leave.",
    },
    {
      icon: MapPin,
      title: "Where We Serve",
      description: "Proudly serving the UAE — Dubai, Abu Dhabi, Sharjah & nearby areas. Flexible scheduling available to suit your needs.",
    },
  ];

  return (
    <section className="py-16 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto">
          {values.map((val, idx) => (
            <Card key={idx} className="border-0 shadow-sm hover:shadow-md transition-shadow duration-300">
              <CardContent className="p-8 flex flex-col items-start gap-4 h-full">
                <div className="h-12 w-12 rounded-xl bg-brand-blue/10 flex items-center justify-center text-[#0970B2]">
                   <val.icon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-slate-900 mb-2">{val.title}</h3>
                  <p className="text-slate-600 leading-relaxed text-sm">
                    {val.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
