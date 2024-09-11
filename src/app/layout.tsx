import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Vollkorn } from "next/font/google";
import "./globals.css";
import Header from "@/components/header/Header";
import Providers from "@/providers";

const inter = Inter({ subsets: ["latin"] });
const vollkorn = Vollkorn({ subsets: ["latin"], display: "swap" });

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
        className={`${vollkorn.className} bg-gradient-to-r from-main-purple to-secondary-purple h-[3000px] antialiased`}>
        <Providers>
          <Header />
          {children}
        </Providers>
      </body>
    </html>
  );
}
