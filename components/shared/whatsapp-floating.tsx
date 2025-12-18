"use client";

import Link from "next/link";
import { MessageCircle } from "lucide-react";

const whatsappUrl = "https://wa.me/971545447809";

export function FloatingWhatsApp() {
  return (
    <Link
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 z-50 inline-flex h-12 w-12 items-center justify-center rounded-full bg-brand-green shadow-card hover:bg-brand-green/90 focus-ring"
      aria-label="WhatsApp AL MYTHAQ"
    >
      <MessageCircle className="h-6 w-6 text-slate-900" />
    </Link>
  );
}
