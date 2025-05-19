import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import "./globals.css";

export const metadata: Metadata = {
  title: "Master Stitch Tailoring | Premium Alterations & Repairs in Cubao, QC",
  description: "Expert tailoring...",
  keywords: "tailoring Quezon City...", 
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${GeistSans.className} antialiased text-gray-800 bg-white`}>
        {children}
      </body>
    </html>
  );
}