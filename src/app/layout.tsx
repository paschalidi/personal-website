import "./globals.css";

import { Inter } from "next/font/google";
import { PrismicPreview } from "@prismicio/next";

import { repositoryName } from "../prismicio";
import { ReactNode } from "react";
import { Navigation } from "../components/Navigation/inde";
import { Footer } from "../components/Footer";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export default async function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="pc pt-10 md:pt-14 overflow-x-hidden antialiased bg-zinc-50">
        <Navigation />
        {children}
        <PrismicPreview repositoryName={repositoryName} />
        <Footer />
      </body>
    </html>
  );
}
