
import { Card, CardContent } from "@/components/ui/card";

export function ProcessSection() {
  return (
    <section className="section-muted">
      <div className="container py-14">
        <div className="max-w-2xl">
          <h2 className="text-2xl font-extrabold tracking-tight md:text-3xl">
            We Make Cleaning Easier and More Convenient
          </h2>
          <p className="mt-3 text-slate-600">
            A simple 3-step process that saves you time — with flexible scheduling that fits your routine.
          </p>
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-3">
          <StepCard number="01" title="Contact us" desc="Call or WhatsApp to tell us what you need and where you are in the UAE." />
          <StepCard number="02" title="Schedule service" desc="Pick a date and time that works — we arrive on time and fully prepared." />
          <StepCard number="03" title="Enjoy a spotless space" desc="Relax while we deliver a clean, fresh finish with quality checks." />
        </div>
      </div>
    </section>
  );
}

function StepCard({ number, title, desc }: { number: string; title: string; desc: string }) {
  return (
    <Card>
      <CardContent className="p-6">
        <p className="text-xs font-bold tracking-widest text-brand-blue">STEP {number}</p>
        <p className="mt-2 text-lg font-semibold">{title}</p>
        <p className="mt-2 text-sm text-slate-600">{desc}</p>
      </CardContent>
    </Card>
  );
}
