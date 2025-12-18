import type { Metadata } from "next";
import { ContactFormSection } from "@/components/sections/contact-form";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact AL MYTHAQ Building Cleaning Service. Call 0545447809 or WhatsApp us to book cleaning across the UAE.",
};

export default function ContactPage() {
  return (
    <div>
      <section className="section-muted">
        <div className="container py-14">
          <Badge variant="brand" className="mb-4">Contact</Badge>
          <h1 className="text-4xl font-extrabold tracking-tight md:text-5xl">Let’s schedule your cleaning</h1>
          <p className="mt-4 max-w-3xl text-slate-600 md:text-lg">
            Call <strong>0545447809</strong> or message us on WhatsApp for the fastest response. You can also use the form below.
          </p>
        </div>
      </section>

      <section>
        <div className="container py-14">
          <ContactFormSection />
        </div>
      </section>
    </div>
  );
}
