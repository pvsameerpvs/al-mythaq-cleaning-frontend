
import Link from "next/link";
import { CheckCircle2, Clock, Leaf, ShieldCheck, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export function WhyChooseSection() {
  return (
    <section>
      <div className="container py-14">
        <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="text-2xl font-extrabold tracking-tight md:text-3xl">
              Why Choose AL MYTHAQ Cleaners
            </h2>
            <p className="mt-3 max-w-2xl text-slate-600">
              A clean space is peace of mind. Our process is designed for reliability, hygiene, and a premium finish — every time.
            </p>
          </div>
          <Link href="/contact" className="md:self-end">
            <Button variant="outline">Get a Quick Quote</Button>
          </Link>
        </div>

        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          <IconCard title="Trusted & reliable" icon={<ShieldCheck className="h-5 w-5" />} />
          <IconCard title="Trained professionals" icon={<CheckCircle2 className="h-5 w-5" />} />
          <IconCard title="Eco-friendly options" icon={<Leaf className="h-5 w-5" />} />
          <IconCard title="On-time service" icon={<Clock className="h-5 w-5" />} />
          <IconCard title="Quality assurance" icon={<Star className="h-5 w-5" />} />
        </div>
      </div>
    </section>
  );
}

function IconCard({ title, icon }: { title: string; icon: React.ReactNode }) {
  return (
    <Card className="p-6">
      <div className="flex items-center gap-3">
        <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-brand-blue/10 text-brand-blue">
          {icon}
        </div>
        <p className="text-sm font-semibold text-slate-900">{title}</p>
      </div>
    </Card>
  );
}
