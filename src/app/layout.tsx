import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Vollkorn } from "next/font/google";
import "./globals.css";
import Header from "@/components/header/Header";
import Providers from "@/providers";
import Footer from "@/components/footer";

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
        className={`${vollkorn.className} bg-gradient-to-r h-screen from-main-purple to-secondary-purple flex flex-col gap-10 antialiased`}>
        <Providers>
          <Header />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
