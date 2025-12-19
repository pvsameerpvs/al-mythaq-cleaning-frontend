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
          <Badge variant="outline" className="mb-4 border-[#92C340] text-slate-600 px-4 py-1 text-sm uppercase tracking-wider">
            We're Here to Help
          </Badge>
          <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 font-headland mb-6">
             Get in <span className="text-[#0970B2]">Touch</span>
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
                     <div className="h-12 w-12 rounded-full bg-[#0970B2]/10 flex items-center justify-center shrink-0 group-hover:bg-[#0970B2] transition-colors">
                       <Phone className="h-5 w-5 text-[#0970B2] group-hover:text-white transition-colors" />
                     </div>
                     <div>
                       <p className="text-sm text-slate-600 font-medium uppercase tracking-wide">Call Us</p>
                       <p className="text-xl font-bold text-slate-900">054 544 7809</p>
                     </div>
                   </a>

                   {/* WhatsApp */}
                   <a href="https://wa.me/971545447809" target="_blank" rel="noreferrer" className="flex items-start gap-4 group p-4 rounded-xl hover:bg-slate-50 transition-colors">
                     <div className="h-12 w-12 rounded-full bg-[#92C340]/10 flex items-center justify-center shrink-0 group-hover:bg-[#92C340] transition-colors">
                       <MessageCircle className="h-5 w-5 text-[#92C340] group-hover:text-white transition-colors" />
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
                  <p className="font-bold text-[#0970B2] mb-1">We Come to You</p>
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
