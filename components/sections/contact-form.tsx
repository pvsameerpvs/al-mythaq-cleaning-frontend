"use client";

import * as React from "react";
import { MapPin, MessageCircle, PhoneCall } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";

export function ContactFormSection() {
  const { toast } = useToast();
  const [loading, setLoading] = React.useState(false);
  const [form, setForm] = React.useState({ name: "", phone: "", message: "" });

  function update(key: keyof typeof form, value: string) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 600));
    setLoading(false);
    toast({ title: "Message sent", description: "Thanks! We'll get back to you shortly." });
    setForm({ name: "", phone: "", message: "" });
  }

  return (
    <div className="grid gap-6 lg:grid-cols-3">
      <div className="lg:col-span-2">
        <Card>
          <CardContent className="p-6">
            <h2 className="text-lg font-semibold">Send us a message</h2>
            <p className="mt-2 text-sm text-slate-600">
              Frontend-only form (mock submit). For faster response, use WhatsApp.
            </p>

            <form onSubmit={onSubmit} className="mt-6 grid gap-4">
              <div className="grid gap-2">
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  value={form.name}
                  onChange={(e) => update("name", e.target.value)}
                  placeholder="Your name"
                  required
                />
              </div>

              <div className="grid gap-2">
                <Label htmlFor="phone">Phone</Label>
                <Input
                  id="phone"
                  value={form.phone}
                  onChange={(e) => update("phone", e.target.value)}
                  placeholder="e.g., 05xxxxxxxx"
                  required
                />
              </div>

              <div className="grid gap-2">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  value={form.message}
                  onChange={(e) => update("message", e.target.value)}
                  placeholder="Tell us what service you need, your area, and preferred date/time"
                  required
                />
              </div>

              <Button type="submit" disabled={loading}>
                {loading ? "Sending..." : "Submit"}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4">
        <QuickCard
          title="Call"
          description="0545447809"
          href="tel:0545447809"
          icon={<PhoneCall className="h-5 w-5" />}
        />
        <QuickCard
          title="WhatsApp"
          description="Chat with us"
          href="https://wa.me/971545447809"
          icon={<MessageCircle className="h-5 w-5" />}
          external
        />
        <QuickCard
          title="Location"
          description="UAE — Dubai, Abu Dhabi, Sharjah & nearby areas"
          href="#map"
          icon={<MapPin className="h-5 w-5" />}
        />

        <div id="map" className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
          <p className="text-sm font-semibold">Google Map</p>
          <p className="mt-2 text-sm text-slate-600">
            Placeholder — embed your Google Map here later.
          </p>
          <div className="mt-4 h-40 w-full rounded-xl bg-white shadow-soft" />
        </div>
      </div>
    </div>
  );
}

function QuickCard({
  title,
  description,
  href,
  icon,
  external,
}: {
  title: string;
  description: string;
  href: string;
  icon: React.ReactNode;
  external?: boolean;
}) {
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
      className="rounded-2xl border border-slate-200 bg-white p-5 shadow-soft transition hover:shadow-card"
    >
      <div className="flex items-center gap-3">
        <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-brand-blue/10 text-brand-blue">
          {icon}
        </div>
        <div>
          <p className="text-sm font-semibold text-slate-900">{title}</p>
          <p className="text-sm text-slate-600">{description}</p>
        </div>
      </div>
    </a>
  );
}
