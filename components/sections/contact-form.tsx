"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";

export function ContactFormSection() {
  const { toast } = useToast();
  const [loading, setLoading] = React.useState(false);
  const [form, setForm] = React.useState({ 
    name: "", 
    email: "", 
    phone: "", 
    serviceType: "",
    message: "" 
  });

  function update(key: keyof typeof form, value: string) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    // Simulate API delay
    await new Promise((r) => setTimeout(r, 1000));
    setLoading(false);
    toast({ title: "Message sent", description: "Thanks! We'll get back to you shortly." });
    setForm({ name: "", email: "", phone: "", serviceType: "", message: "" });
  }

  return (
    <div className="bg-white rounded-[2rem] p-8 shadow-lg border border-slate-100 h-full">
      <h2 className="text-2xl font-bold text-slate-900 mb-2">Send a Message</h2>
      <p className="text-slate-600 mb-6 text-sm">
        Prefer to write? Fill this out and we'll contact you.
      </p>

      <form onSubmit={onSubmit} className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="name" className="text-slate-900 font-medium">Name</Label>
          <Input
            id="name"
            placeholder="Your name"
            value={form.name}
            onChange={(e) => update("name", e.target.value)}
            required
            className="rounded-xl border-slate-200 bg-slate-50 h-12 focus:border-brand-blue focus:ring-brand-blue/20"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="phone" className="text-slate-900 font-medium">Phone Number</Label>
            <Input
              id="phone"
              type="tel"
              placeholder="050 123 4567"
              value={form.phone}
              onChange={(e) => update("phone", e.target.value)}
              required
              className="rounded-xl border-slate-200 bg-slate-50 h-12 focus:border-brand-blue focus:ring-brand-blue/20"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email" className="text-slate-900 font-medium">Email Address</Label>
            <Input
              id="email"
              type="email"
              placeholder="you@example.com"
              value={form.email}
              onChange={(e) => update("email", e.target.value)}
              className="rounded-xl border-slate-200 bg-slate-50 h-12 focus:border-brand-blue focus:ring-brand-blue/20"
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="serviceType" className="text-slate-900 font-medium">Service Type (Optional)</Label>
          <Input
            id="serviceType"
            placeholder="e.g. Deep Cleaning, AC Cleaning"
            value={form.serviceType}
            onChange={(e) => update("serviceType", e.target.value)}
            className="rounded-xl border-slate-200 bg-slate-50 h-12 focus:border-brand-blue focus:ring-brand-blue/20"
          />
        </div>

        <div className="space-y-2">
           <Label htmlFor="message" className="text-slate-900 font-medium">How can we help?</Label>
           <Textarea 
             id="message"
             placeholder="I need a deep cleaning for my villa..."
             value={form.message}
             onChange={(e) => update("message", e.target.value)}
             required
             className="rounded-xl border-slate-200 bg-slate-50 min-h-[120px] focus:border-brand-blue focus:ring-brand-blue/20 resize-none"
           />
        </div>

        <Button 
          type="submit" 
          disabled={loading}
          className="w-full rounded-full bg-brand-blue hover:bg-brand-blue/90 text-white h-12 font-bold text-lg shadow-lg shadow-brand-blue/20 mt-2 transition-all hover:scale-[1.02] active:scale-[0.98]"
        >
          {loading ? "Sending..." : "Send Message"}
        </Button>
      </form>
    </div>
  );
}

