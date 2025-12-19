import type { Metadata } from "next";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";
import { ContactFormSection } from "@/components/sections/contact-form";
import { ServiceTicker } from "@/components/sections/service-ticker";

export const metadata: Metadata = {
  title: "Contact Us | AL MYTHAQ Building Cleaning Service",
  description: "Contact AL MYTHAQ Building Cleaning Service. Call 0545447809 or WhatsApp us to book cleaning across the UAE.",
};

export default function ContactPage() {
  return (
    <div>
      {/* Page Header */}
      <section className="pt-20 pb-10 md:pt-32 md:pb-16 ">
        <div className="container mx-auto px-4 text-center">
          <Badge variant="outline" className="mb-4 border-brand-green text-slate-600 px-4 py-1 text-sm uppercase tracking-wider">
            We're Here to Help
          </Badge>
          <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 font-headland mb-6">
             Get in <span className="text-brand-blue">Touch</span>
          </h1>
          <p className="max-w-3xl mx-auto text-slate-600 md:text-lg leading-relaxed">
            Ready to schedule a clean? Have a question about our services? 
            Reach out to us directly via phone or WhatsApp for the fastest response.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto items-start">
            
            {/* Contact Information */}
            <div className="space-y-8">
               <div className="bg-white rounded-[2rem] p-8 shadow-lg border border-slate-100">
                 <h2 className="text-2xl font-bold text-slate-900 mb-6">Contact Information</h2>
                 <div className="space-y-6">
                   {/* Phone */}
                   <a href="tel:0545447809" className="flex items-start gap-4 group p-4 rounded-xl hover:bg-slate-50 transition-colors">
                     <div className="h-12 w-12 rounded-full bg-brand-blue/10 flex items-center justify-center shrink-0 group-hover:bg-brand-blue transition-colors">
                       <Phone className="h-5 w-5 text-brand-blue group-hover:text-white transition-colors" />
                     </div>
                     <div>
                       <p className="text-sm text-slate-600 font-medium uppercase tracking-wide">Call Us</p>
                       <p className="text-xl font-bold text-slate-900">054 544 7809</p>
                     </div>
                   </a>

                   {/* WhatsApp */}
                   <a href="https://wa.me/971545447809" target="_blank" rel="noreferrer" className="flex items-start gap-4 group p-4 rounded-xl hover:bg-slate-50 transition-colors">
                     <div className="h-12 w-12 rounded-full bg-brand-green/10 flex items-center justify-center shrink-0 group-hover:bg-brand-green transition-colors">
                         <svg viewBox="0 0 24 24" width="24" height="24" className="h-5 w-5 text-brand-green group-hover:text-white transition-colors fill-current" xmlns="http://www.w3.org/2000/svg"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.008-.57-.008-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                     </div>
                     <div>
                       <p className="text-sm text-slate-600 font-medium uppercase tracking-wide">WhatsApp</p>
                       <p className="text-xl font-bold text-slate-900">+971 54 544 7809</p>
                     </div>
                   </a>

                    {/* Email */}
                   <div className="flex items-start gap-4 p-4 rounded-xl">
                     <div className="h-12 w-12 rounded-full bg-slate-100 flex items-center justify-center shrink-0">
                       <Mail className="h-5 w-5 text-slate-600" />
                     </div>
                     <div>
                       <p className="text-sm text-slate-600 font-medium uppercase tracking-wide">Email</p>
                       <p className="text-lg font-semibold text-slate-900">info@almythaq.com</p>
                     </div>
                   </div>

                   {/* Location */}
                   <div className="flex items-start gap-4 p-4 rounded-xl">
                     <div className="h-12 w-12 rounded-full bg-slate-100 flex items-center justify-center shrink-0">
                       <MapPin className="h-5 w-5 text-slate-600" />
                     </div>
                     <div>
                       <p className="text-sm text-slate-600 font-medium uppercase tracking-wide">Serving</p>
                       <p className="text-lg font-semibold text-slate-900">Dubai, Abu Dhabi, Sharjah & all UAE</p>
                     </div>
                   </div>
                 </div>
               </div>
               
               {/* Contact Form Component - Added below contact info */}
               <ContactFormSection />
            </div>

            {/* Map Iframe */}
            <div className="h-full min-h-[400px] w-full bg-slate-100 rounded-[2rem] overflow-hidden shadow-lg relative">
               <iframe 
                 src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d462560.301183331!2d54.94728752662563!3d25.076381467479704!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f43496ad9c645%3A0xbde66e5084295162!2sDubai%20-%20United%20Arab%20Emirates!5e0!3m2!1sen!2s!4v1716300000000!5m2!1sen!2s" 
                 width="100%" 
                 height="100%" 
                 style={{ border: 0, minHeight: "450px" }} 
                 allowFullScreen 
                 loading="lazy" 
                 referrerPolicy="no-referrer-when-downgrade"
               />
               
               {/* Decorative Overlay Badge */}
               <div className="absolute bottom-6 left-6 bg-white p-4 rounded-xl shadow-lg max-w-xs hidden sm:block">
                  <p className="font-bold text-brand-blue mb-1">We Come to You</p>
                  <p className="text-xs text-slate-600">Booking a cleaning means we bring the service to your doorstep, anywhere in our coverage area.</p>
               </div>
            </div>

          </div>
        </div>
      </section>
      <ServiceTicker />
    </div>
  );
}
