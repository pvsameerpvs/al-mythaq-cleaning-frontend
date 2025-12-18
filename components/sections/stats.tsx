
import Link from "next/link";
import { PhoneCall } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

export function StatsSection() {
  return (
    <section>
      <div className="container py-14">
        <div className="grid gap-8 md:grid-cols-2 md:items-center">
          <div>
            <Badge variant="green" className="mb-3">Growing across UAE</Badge>
            <h2 className="text-2xl font-extrabold tracking-tight md:text-3xl">
              We Are the Fastest Growing Cleaning Company
            </h2>
            <p className="mt-4 text-slate-600">
              Our growth comes from repeat clients and referrals. We focus on clear communication, punctual arrivals, and a consistent checklist-based clean — so you get the same reliable results every visit.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="tel:0545447809">
                <Button variant="primary">
                  <PhoneCall className="h-4 w-4" /> Call 0545447809
                </Button>
              </a>
              <Link href="/book">
                <Button variant="outline">Book Online</Button>
              </Link>
            </div>
          </div>

          <div className="grid gap-5 sm:grid-cols-3">
            <StatCard value="500+" label="Happy clients" />
            <StatCard value="7+" label="Years experience" />
            <StatCard value="1200+" label="Projects done" />
          </div>
        </div>
      </div>
    </section>
  );
}

function StatCard({ value, label }: { value: string; label: string }) {
  return (
    <Card>
      <CardContent className="p-6">
        <p className="text-3xl font-extrabold text-slate-900">{value}</p>
        <p className="mt-1 text-sm text-slate-600">{label}</p>
      </CardContent>
    </Card>
  );
}
