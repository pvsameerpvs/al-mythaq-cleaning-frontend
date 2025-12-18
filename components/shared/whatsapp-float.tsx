"use client";

import { MessageCircle } from "lucide-react";

export function WhatsAppFloatingButton() {
  return (
    <a
      href="https://wa.me/971545447809"
      target="_blank"
      rel="noreferrer"
      aria-label="WhatsApp"
      className="fixed bottom-5 right-5 z-50 inline-flex items-center gap-2 rounded-full bg-brand-green px-4 py-3 text-sm font-semibold text-slate-900 shadow-card hover:bg-brand-green/90 focus:ring-2 focus:ring-brand-blue focus:ring-offset-2"
    >
      <MessageCircle className="h-5 w-5" />
      WhatsApp
    </a>
  );
}
