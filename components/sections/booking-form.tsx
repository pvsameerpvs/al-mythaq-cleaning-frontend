"use client";

import * as React from "react";
import { format } from "date-fns";
import { CalendarDays, CheckCircle2, MessageCircle } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Calendar } from "@/components/ui/calendar";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/components/ui/use-toast";

const SERVICES = [
  "Home",
  "Building",
  "Office",
  "Restaurant",
  "Industry",
  "Hospitality",
] as const;

type Booking = {
  service: (typeof SERVICES)[number];
  date: Date | undefined;
  time: string;
  name: string;
  phone: string;
  area: string;
  notes: string;
};

function buildTimeSlots(startHour = 9, endHour = 18, stepMinutes = 30) {
  const slots: string[] = [];
  for (let h = startHour; h < endHour; h++) {
    for (let m = 0; m < 60; m += stepMinutes) {
      const hh = String(h).padStart(2, "0");
      const mm = String(m).padStart(2, "0");
      slots.push(`${hh}:${mm}`);
    }
  }
  // include endHour:00 as last slot
  slots.push(`${String(endHour).padStart(2, "0")}:00`);
  return slots;
}

const TIME_SLOTS = buildTimeSlots(9, 18, 30);

export function BookingFormSection() {
  const { toast } = useToast();
  const [submitted, setSubmitted] = React.useState(false);
  const [loading, setLoading] = React.useState(false);

  const [booking, setBooking] = React.useState<Booking>({
    service: "Home",
    date: undefined,
    time: "09:00",
    name: "",
    phone: "",
    area: "",
    notes: "",
  });

  function update<K extends keyof Booking>(key: K, value: Booking[K]) {
    setBooking((prev) => ({ ...prev, [key]: value }));
  }

  const today = React.useMemo(() => {
    const d = new Date();
    d.setHours(0, 0, 0, 0);
    return d;
  }, []);

  const summary = React.useMemo(() => {
    const dateText = booking.date ? format(booking.date, "PPP") : "(select a date)";
    return {
      ...booking,
      dateText,
    };
  }, [booking]);

  function buildWhatsAppUrl() {
    const dateText = booking.date ? format(booking.date, "PPP") : "(not selected)";
    const message =
      `AL MYTHAQ Booking Request
` +
      `Service: ${booking.service}
` +
      `Date & time: ${dateText} at ${booking.time}
` +
      `Customer name: ${booking.name}
` +
      `Customer phone: ${booking.phone}
` +
      `Company phone: 0545447809
` +
      `Location/Area: ${booking.area}
` +
      `Notes: ${booking.notes || "-"}`;
    return `https://wa.me/971545447809?text=${encodeURIComponent(message)}`;
  }

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!booking.date) {
      toast({ title: "Please select a date", description: "Pick an available day from the calendar." });
      return;
    }
    setLoading(true);
    await new Promise((r) => setTimeout(r, 700));
    setLoading(false);
    setSubmitted(true);
    toast({ title: "Booking confirmed", description: "Your booking details are ready — you can send them via WhatsApp." });
  }

  return (
    <div className="grid gap-6 lg:grid-cols-5">
      <div className="lg:col-span-3">
        <Card>
          <CardHeader>
            <div className="flex items-start justify-between gap-4">
              <div>
                <CardTitle>Book your cleaning</CardTitle>
                <CardDescription>
                  Select a service, date, and time — then confirm your booking .
                </CardDescription>
              </div>
              <Badge variant="outline" className="mt-1 border-brand-green text-brand-green">WhatsApp</Badge>
            </div>
          </CardHeader>
          <CardContent>
            <form onSubmit={onSubmit} className="grid gap-5">
              <div className="grid gap-2">
                <Label htmlFor="service">Service</Label>
                <select
                  id="service"
                  value={booking.service}
                  onChange={(e) => update("service", e.target.value as Booking["service"])}
                  className="h-11 w-full rounded-xl border border-slate-200 bg-white px-4 text-sm shadow-sm focus:border-brand-blue focus:ring-brand-blue/20 focus:outline-none focus:ring-2"
                >
                  {SERVICES.map((s) => (
                    <option key={s} value={s}>{s}</option>
                  ))}
                </select>
              </div>

              <div className="grid gap-3">
                <div className="flex items-center gap-2">
                  <CalendarDays className="h-5 w-5 text-brand-blue" />
                  <p className="text-sm font-semibold">Select a date</p>
                </div>
                <Calendar
                  mode="single"
                  selected={booking.date}
                  onSelect={(d) => update("date", d)}
                  disabled={{ before: today }}
                />
              </div>

              <div className="grid gap-2">
                <Label>Time slot</Label>
                <div className="grid grid-cols-3 gap-2 sm:grid-cols-4">
                  {TIME_SLOTS.map((t) => (
                    <button
                      key={t}
                      type="button"
                      onClick={() => update("time", t)}
                      className={
                        "rounded-full border px-3 py-2 text-sm font-semibold transition " +
                        (booking.time === t
                          ? "border-brand-blue bg-brand-blue text-white shadow-md shadow-brand-blue/20"
                          : "border-slate-200 bg-white hover:border-brand-blue/50 hover:bg-slate-50")
                      }
                    >
                      {t}
                    </button>
                  ))}
                </div>
                <p className="text-xs text-slate-500">Available from 09:00 to 18:00 (30 min slots).</p>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <div className="grid gap-2">
                  <Label htmlFor="name">Name</Label>
                  <Input 
                    id="name" 
                    value={booking.name} 
                    onChange={(e) => update("name", e.target.value)} 
                    required 
                    className="focus:border-brand-blue focus:ring-brand-blue/20"
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="phone">Phone</Label>
                  <Input 
                    id="phone" 
                    value={booking.phone} 
                    onChange={(e) => update("phone", e.target.value)} 
                    placeholder="e.g., 05xxxxxxxx" 
                    required 
                    className="focus:border-brand-blue focus:ring-brand-blue/20"
                  />
                </div>
              </div>

              <div className="grid gap-2">
                <Label htmlFor="area">Location / Area</Label>
                <Input 
                  id="area" 
                  value={booking.area} 
                  onChange={(e) => update("area", e.target.value)} 
                  placeholder="Dubai Marina, Al Nahda, Khalifa City..." 
                  required 
                  className="focus:border-brand-blue focus:ring-brand-blue/20"
                />
              </div>

              <div className="grid gap-2">
                <Label htmlFor="notes">Notes</Label>
                <Textarea 
                  id="notes" 
                  value={booking.notes} 
                  onChange={(e) => update("notes", e.target.value)} 
                  placeholder="Any special instructions, access notes, parking info, etc." 
                  className="focus:border-brand-blue focus:ring-brand-blue/20"
                />
              </div>

              <Button 
                type="submit" 
                disabled={loading}
                className="w-full rounded-full bg-brand-blue hover:bg-brand-blue/90 text-white h-12 font-bold text-lg shadow-lg shadow-brand-blue/20 transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                {loading ? "Confirming..." : "Confirm Booking"}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>

      <div className="lg:col-span-2">
        <Card className="sticky top-20">
          <CardHeader>
            <CardTitle>Booking summary</CardTitle>
            <CardDescription>Review your details and send via WhatsApp.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm">
              <p><span className="font-semibold">Company:</span> AL MYTHAQ</p>
              <p><span className="font-semibold">Service:</span> {summary.service}</p>
              <p><span className="font-semibold">Date & time:</span> {summary.dateText} at {summary.time}</p>
              <p><span className="font-semibold">Customer:</span> {summary.name || "-"}</p>
              <p><span className="font-semibold">Customer phone:</span> {summary.phone || "-"}</p>
              <p><span className="font-semibold">Company phone:</span> 0545447809</p>
              <p><span className="font-semibold">Location/Area:</span> {summary.area || "-"}</p>
              <p><span className="font-semibold">Notes:</span> {summary.notes || "-"}</p>
            </div>

            <a href={buildWhatsAppUrl()} target="_blank" rel="noreferrer">
              <Button className="w-full flex gap-2 font-bold my-2 bg-[#25D366] hover:bg-[#128C7E] text-white shadow-md hover:shadow-lg transition-all hover:scale-[1.02] active:scale-[0.98]">
                <svg viewBox="0 0 24 24" width="24" height="24" className="w-6 h-6 fill-current" xmlns="http://www.w3.org/2000/svg"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.008-.57-.008-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                Send Booking via WhatsApp
              </Button>
            </a>

            {submitted ? (
              <div className="rounded-2xl border border-brand-green/40 bg-brand-green/10 p-4">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-brand-green" />
                  <p className="text-sm font-semibold text-brand-green">Confirmation ready</p>
                </div>
                <p className="mt-2 text-sm text-slate-700">
                  Your booking is confirmed on this site (mock). Please tap the WhatsApp button to send the details to our team.
                </p>
              </div>
            ) : null}

           
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
