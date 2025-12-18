"use client";

import Link from "next/link";
import Image from "next/image";
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
  return (
    <header className="sticky top-0 z-40 w-full border-b border-slate-200 bg-white/90 backdrop-blur">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/logo.png"
            alt="AL MYTHAQ Building Cleaning Service"
            width={120}
            height={34}
            priority
          />
          <span className="sr-only">AL MYTHAQ Building Cleaning Service</span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((l) => (
            <NavLink key={l.href} {...l} />
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link href="/book" className="hidden md:block">
            <Button variant="primary" className="rounded-full">
              Book Now
            </Button>
          </Link>

          <Sheet>
            <SheetTrigger asChild>
              <button
                className="inline-flex items-center justify-center rounded-full p-2 hover:bg-slate-100 focus-ring md:hidden"
                aria-label="Open menu"
              >
                <Menu className="h-5 w-5" />
              </button>
            </SheetTrigger>
            <SheetContent>
              <div className="flex flex-col gap-4">
                {navLinks.map((l) => (
                  <NavLink key={l.href} {...l} />
                ))}
                <div className="pt-2">
                  <Link href="/book">
                    <Button className="w-full">Book Now</Button>
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
