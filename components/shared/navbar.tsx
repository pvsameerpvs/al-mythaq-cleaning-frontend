"use client";

import Link from "next/link";
import Image from "next/image";
import * as React from "react";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/pricing", label: "Pricing" },
  { href: "/reviews", label: "Reviews" },
  { href: "/contact", label: "Contact" },
];

function NavLink({ href, label, onClick }: { href: string; label: string; onClick?: () => void }) {
  const pathname = usePathname();
  const active = pathname === href;
  return (
    <Link
      href={href}
      onClick={onClick}
      className={cn(
        "text-sm font-semibold transition-colors hover:text-brand-blue",
        active ? "text-brand-blue" : "text-slate-700"
      )}
    >
      {label}
    </Link>
  );
}

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = React.useState(false);

  return (
    <header className="sticky top-0 z-40 w-full bg-white border-b border-slate-100 shadow-sm">
      <div className="container flex h-20 items-center justify-between px-4 md:px-8">
        
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 shrink-0">
          <Image
            src="/logo.png"
            alt="AL MYTHAQ"
            width={180}
            height={52}
            priority
            className="w-auto h-12 md:h-16 object-contain"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8 mx-auto">
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={cn(
                "text-[15px] font-medium transition-all duration-200 hover:text-brand-blue",
                pathname === l.href 
                  ? "text-brand-blue font-semibold" 
                  : "text-slate-600"
              )}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        {/* CTA & Mobile Menu */}
        <div className="flex items-center gap-4">
          <Link href="/book" className="hidden lg:block">
            <Button 
              className="rounded-full bg-brand-blue hover:bg-brand-blue/90 text-white px-8 h-11 font-bold shadow-md shadow-brand-blue/20 transition-all hover:scale-105"
            >
              Book Now
            </Button>
          </Link>

          {/* Mobile Menu Trigger */}
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <button
                className="lg:hidden inline-flex items-center justify-center rounded-xl p-2.5 bg-slate-50 text-slate-700 hover:bg-slate-100 transition-colors"
                aria-label="Open menu"
              >
                <Menu className="h-6 w-6" />
              </button>
            </SheetTrigger>
            <SheetContent className="w-[300px] sm:w-[400px]">
              <div className="flex flex-col gap-8 mt-8">
                <nav className="flex flex-col gap-4">
                  {navLinks.map((l) => (
                    <Link
                      key={l.href}
                      href={l.href}
                      onClick={() => setOpen(false)}
                      className={cn(
                        "text-lg font-medium px-4 py-3 rounded-xl transition-colors",
                         pathname === l.href 
                          ? "bg-brand-blue/10 text-brand-blue" 
                          : "text-slate-600 hover:bg-slate-50"
                      )}
                    >
                      {l.label}
                    </Link>
                  ))}
                </nav>
                <div className="px-4">
                  <Link href="/book" className="block" onClick={() => setOpen(false)}>
                    <Button className="w-full rounded-full bg-brand-blue hover:bg-brand-blue/90 h-12 text-lg font-bold">
                      Book Now
                    </Button>
                  </Link>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>

      </div>
    </header>
  );
}
