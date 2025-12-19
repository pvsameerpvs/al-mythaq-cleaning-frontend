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
      <section className="pt-20 pb-10 md:pt-24 md:pb-12">
        <div className="container mx-auto px-4 text-center">
          <Badge variant="outline" className="mb-4 border-[#92C340] text-slate-600 px-4 py-1 text-sm uppercase tracking-wider">Online Booking</Badge>
          <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 font-headland mb-6">
            Book a <span className="text-[#0970B2]">Cleaning</span><br /> Appointment
          </h1>
          <p className="max-w-3xl mx-auto text-slate-600 md:text-lg leading-relaxed">
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
