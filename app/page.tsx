import Link from "next/link";
import { Metadata } from "next";
import {
  CheckCircle2,
  Clock,
  Leaf,
  ShieldCheck,
  Star,
  Building2,
  Home,
  Briefcase,
  UtensilsCrossed,
  Factory,
  Hotel,
  PhoneCall,
  MessageCircle,
  CalendarCheck
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

export const metadata: Metadata = {
  title: "Home",
  description: "AL MYTHAQ Building Cleaning Service — Cleaning Beyond Expectations. Book trusted cleaning services across the UAE.",
};

const services = [
  { title: "Home cleaning", icon: Home, desc: "Regular or deep home cleaning with careful attention to kitchens, bathrooms, and high-touch areas." },
  { title: "Building cleaning", icon: Building2, desc: "Common areas, corridors, lobbies, and stairwells — maintained spotless and welcoming." },
  { title: "Office cleaning", icon: Briefcase, desc: "Daily or scheduled office cleaning for a healthy, productive workplace." },
  { title: "Restaurant cleaning", icon: UtensilsCrossed, desc: "Front-of-house and back-of-house cleaning aligned with high hygiene expectations." },
  { title: "Industry cleaning", icon: Factory, desc: "Site-safe cleaning for industrial spaces, storage, and utility areas." },
  { title: "Hospitality services", icon: Hotel, desc: "Guest-ready cleaning support for hospitality properties and service apartments." },
];

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

export default function HomePage() {
  return (
    <div>
      {/* Hero section */}
      <section className="relative overflow-hidden">
        <div className="container py-14 md:py-20">
          <div className="grid gap-10 md:grid-cols-2 md:items-center">
            <div>
              <Badge variant="brand" className="mb-4">UAE Trusted Cleaning</Badge>
              <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 md:text-5xl">
                Cleaning Beyond Expectations
              </h1>
              <p className="mt-4 text-base leading-relaxed text-slate-600 md:text-lg">
                AL MYTHAQ Building Cleaning Service delivers premium, reliable cleaning for homes, offices, buildings and more — with trained professionals, quality assurance, and flexible scheduling across the UAE.
              </p>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <a href="tel:0545447809">
                  <Button variant="primary" size="lg" className="w-full sm:w-auto">
                    <PhoneCall className="h-5 w-5" />
                    Call Now
                  </Button>
                </a>
                <a href="https://wa.me/971545447809" target="_blank" rel="noreferrer">
                  <Button variant="secondary" size="lg" className="w-full sm:w-auto">
                    <MessageCircle className="h-5 w-5" />
                    WhatsApp
                  </Button>
                </a>
                <Link href="/book" className="w-full sm:w-auto">
                  <Button variant="outline" size="lg" className="w-full">
                    <CalendarCheck className="h-5 w-5" />
                    Book Now
                  </Button>
                </Link>
              </div>

              <div className="mt-8 flex flex-wrap gap-3 text-sm text-slate-600">
                <div className="flex items-center gap-2">
                  <SparkleIcon /> <span>Fresh, professional finish</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="h-4 w-4 text-brand-blue" /> <span>Trusted & reliable</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-brand-blue" /> <span>On-time service</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="rounded-3xl border border-slate-200 bg-gradient-to-br from-slate-50 to-white p-7 shadow-card">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-semibold text-brand-blue">Fast booking</p>
                    <p className="text-2xl font-extrabold">Same-week availability</p>
                  </div>
                  <Star className="h-8 w-8 text-brand-green" />
                </div>
                <Separator className="my-5" />
                <div className="grid gap-4 sm:grid-cols-2">
                  <MiniPoint title="Transparent pricing" desc="Clear packages for homes, offices, and buildings." />
                  <MiniPoint title="Quality assurance" desc="We confirm the finish and your satisfaction." />
                  <MiniPoint title="Eco-friendly options" desc="Safer products available upon request." />
                  <MiniPoint title="Professional team" desc="Trained staff with consistent standards." />
                </div>
                <div className="mt-6">
                  <Link href="/services">
                    <Button variant="primary" className="w-full">
                      Explore Services
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="pointer-events-none absolute -right-12 -top-12 h-56 w-56 rounded-full bg-brand-green/20 blur-3xl" />
              <div className="pointer-events-none absolute -bottom-12 -left-12 h-56 w-56 rounded-full bg-brand-blue/15 blur-3xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Few Words About */}
      <section className="section-muted">
        <div className="container py-14">
          <div className="max-w-3xl">
            <h2 className="text-2xl font-extrabold tracking-tight md:text-3xl">
              Few Words About AL MYTHAQ Cleaning Services
            </h2>
            <p className="mt-4 text-slate-600">
              Based in the UAE, we focus on trust, consistency, and a premium finish. Whether you need a routine clean or a detailed deep clean, our team follows a clear checklist, arrives on time, and leaves your space looking and feeling refreshed.
            </p>
            <p className="mt-3 text-slate-600">
              From Dubai to Abu Dhabi, Sharjah, and nearby areas — we’re committed to dependable service and long-term client relationships.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose */}
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

      {/* Cleaning Services */}
      <section className="section-muted">
        <div className="container py-14">
          <div className="flex items-end justify-between gap-6">
            <div>
              <h2 className="text-2xl font-extrabold tracking-tight md:text-3xl">Cleaning Services</h2>
              <p className="mt-3 max-w-2xl text-slate-600">
                Choose the service that fits your space — and we’ll handle the rest with a high-trust, premium approach.
              </p>
            </div>
            <Link href="/services" className="hidden sm:block">
              <Button variant="primary">View All</Button>
            </Link>
          </div>

          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <Card key={s.title} className="hover:shadow-card transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-brand-blue/10 text-brand-blue">
                      <s.icon className="h-5 w-5" />
                    </div>
                    <CardTitle>{s.title}</CardTitle>
                  </div>
                  <CardDescription>{s.desc}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>

          <div className="mt-8 sm:hidden">
            <Link href="/services">
              <Button variant="primary" className="w-full">View All Services</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Fastest Growing */}
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

      {/* Make Cleaning Easier */}
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

      {/* Testimonials */}
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
    </div>
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

function MiniPoint({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-4">
      <p className="text-sm font-semibold text-slate-900">{title}</p>
      <p className="mt-1 text-xs text-slate-600">{desc}</p>
    </div>
  );
}

function SparkleIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="text-brand-green"
    >
      <path
        d="M12 2l1.2 5.2L18 9l-4.8 1.8L12 16l-1.2-5.2L6 9l4.8-1.8L12 2z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
    </svg>
  );
}
