import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Candle Companion",
  description: "Personal assistant for candle makers :)",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-gradient-to-r from-[#5f448c] to-[#7a649f] h-[3000px] antialiased`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
