import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Master Stitch Tailoring | Premium Alterations & Repairs in Cubao, QC",
  description: "Expert tailoring, alterations, and clothing repairs in Cubao, Quezon City. 20+ years experience in precision craftsmanship for suits, dresses, and all garments.",
  keywords: "tailoring Quezon City, alterations Cubao, clothing repairs, suit tailoring, dress alterations, zipper replacement",
  themeColor: "#ffffff",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} font-sans antialiased text-gray-800 bg-white`}>
        {children}
      </body>
    </html>
  );
}