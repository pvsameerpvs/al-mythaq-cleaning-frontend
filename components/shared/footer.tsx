import Link from "next/link";
import Image from "next/image";
import { Facebook, Instagram, Linkedin } from "lucide-react";

import { Separator } from "@/components/ui/separator";

const quickLinks = [
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/pricing", label: "Pricing" },
  { href: "/reviews", label: "Reviews" },
  { href: "/contact", label: "Contact" },
  { href: "/book", label: "Book Now" },
];

const serviceLinks = [
  "Residential Cleaning",
  "Commercial Cleaning",
  "Office Cleaning",
  "Deep Cleaning",
  "Move-in / Move-out",
  "Special Event Cleaning",
];

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="container py-12">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-1">
            <div className="flex items-center gap-3">
              <Image
                src="/logo.png"
                alt="AL MYTHAQ Building Cleaning Service"
                width={140}
                height={40}
              />
            </div>
            <p className="mt-3 text-sm text-slate-600">
              Cleaning Beyond Expectations — trusted cleaning services across the UAE.
            </p>
            <div className="mt-4 flex items-center gap-3 text-slate-600">
              <a
                href="#"
                aria-label="Facebook"
                className="rounded-full p-2 hover:bg-slate-100"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="rounded-full p-2 hover:bg-slate-100"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                aria-label="LinkedIn"
                className="rounded-full p-2 hover:bg-slate-100"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-slate-900">Quick links</h3>
            <ul className="mt-4 space-y-3 text-sm">
              {quickLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-slate-600 hover:text-brand-blue">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-slate-900">Services</h3>
            <ul className="mt-4 space-y-3 text-sm">
              {serviceLinks.map((s) => (
                <li key={s} className="text-slate-600">
                  {s}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-slate-900">Contact</h3>
            <div className="mt-4 space-y-3 text-sm text-slate-600">
              <p>
                Phone: <a className="font-semibold text-slate-900" href="tel:0545447809">0545447809</a>
              </p>
              <p>
                WhatsApp: <a className="font-semibold text-brand-blue" href="https://wa.me/971545447809" target="_blank" rel="noreferrer">Chat on WhatsApp</a>
              </p>
              <p>Email: info@almythaqcleaning.com</p>
              <p>UAE — Dubai, Abu Dhabi, Sharjah & nearby areas</p>
            </div>
          </div>
        </div>

        {/* <Separator className="my-8" />

        <div className="flex flex-col items-start justify-between gap-3 text-xs text-slate-500 md:flex-row md:items-center">
          <p>© {new Date().getFullYear()} AL MYTHAQ Building Cleaning Service. All rights reserved.</p>
          <p> “Cleaning Beyond Expectations”</p>
        </div> */}
      </div>
    </footer>
  );
}
