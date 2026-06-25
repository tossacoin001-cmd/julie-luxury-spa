import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { MobileBar } from "@/components/layout/MobileBar";
import { Toaster } from "sonner";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Julie Luxury Spa — Lagos's Premier Spa Experience",
  description:
    "Book your luxury spa session in Lagos. Facials, massages, body treatments, bridal packages and more. Same-week availability. Book in 60 seconds.",
  keywords: [
    "luxury spa Lagos",
    "best facial Lagos",
    "spa Lagos",
    "massage Lekki",
    "bridal spa package Lagos",
    "body treatment Lagos",
  ],
  openGraph: {
    title: "Julie Luxury Spa",
    description: "Where luxury meets conversion. Book your session today.",
    type: "website",
    locale: "en_NG",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${cormorant.variable} ${inter.variable}`}>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <MobileBar />
        <Toaster position="top-center" richColors />
      </body>
    </html>
  );
}
