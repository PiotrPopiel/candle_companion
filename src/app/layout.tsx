import type { Metadata } from "next";
import { Vollkorn } from "next/font/google";
import "./globals.css";
import Header from "@/components/header/header";
import Providers from "@/providers";
import Footer from "@/components/footer";

const vollkorn = Vollkorn({ subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  title: "Candle Companion",
  description: "Personal assistant for candle makers :)",
};

export default async function RootLayout({
  children,
  modal,
}: Readonly<{
  children: React.ReactNode;
  modal: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${vollkorn.className} bg-gradient-to-r h-screen from-main-purple to-secondary-purple flex flex-col gap-10 antialiased`}>
        <Providers>
          <Header />
          {modal}
          {children}
          <Footer />
        </Providers>
        <div className=".modal-container"></div>
      </body>
    </html>
  );
}
