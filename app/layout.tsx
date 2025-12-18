import type { Metadata } from "next";
import { Inter, Headland_One } from "next/font/google";

import "./globals.css";
import { Navbar } from "@/components/shared/navbar";
import { Footer } from "@/components/shared/footer";
import { Providers } from "@/components/shared/providers";
import { WhatsAppFloatingButton } from "@/components/shared/whatsapp-float";

const inter = Inter({ subsets: ["latin"], display: "swap" });
const headland = Headland_One({ 
  subsets: ["latin"], 
  weight: "400",
  display: "swap",
  variable: "--font-headland"
});

export const metadata: Metadata = {
  title: {
    default: "AL MYTHAQ Building Cleaning Service",
    template: "%s | AL MYTHAQ Cleaning",
  },
  description: "AL MYTHAQ Building Cleaning Service — Cleaning Beyond Expectations. Trusted cleaning services across the UAE.",
  metadataBase: new URL("https://almythaqcleaning.com"),
  openGraph: {
    title: "AL MYTHAQ Building Cleaning Service",
    description: "Cleaning Beyond Expectations. Professional cleaning for homes, offices, buildings and more across the UAE.",
    type: "website",
  },
  icons: {
    icon: "/icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${headland.variable}`}>
        <Providers>
          <Navbar />
          <main className="min-h-[70vh]">{children}</main>
          <Footer />
          <WhatsAppFloatingButton />
        </Providers>
      </body>
    </html>
  );
}
