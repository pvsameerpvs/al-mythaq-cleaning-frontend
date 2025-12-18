import type { Metadata } from "next";
import { BookingFormSection } from "@/components/sections/booking-form";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = {
  title: "Book",
  description: "Book cleaning services with AL MYTHAQ. Select a service, date and time, then send booking details via WhatsApp.",
};

export default function BookPage() {
  return (
    <div>
      <section className="section-muted">
        <div className="container py-14">
          <Badge variant="brand" className="mb-4">Online Booking</Badge>
          <h1 className="text-4xl font-extrabold tracking-tight md:text-5xl">Book a cleaning appointment</h1>
          <p className="mt-4 max-w-3xl text-slate-600 md:text-lg">
            Choose your service, date and time. After confirmation, send the booking details directly to our WhatsApp.
          </p>
        </div>
      </section>

      <section>
        <div className="container py-14">
          <BookingFormSection />
        </div>
      </section>
    </div>
  );
}
