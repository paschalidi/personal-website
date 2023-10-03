import "./globals.css";

import { Inter } from "next/font/google";
import { PrismicPreview } from "@prismicio/next";
import NextTopLoader from 'nextjs-toploader';

import { repositoryName } from "../prismicio";
import { ReactNode } from "react";
import { Navigation } from "../components/Navigation";
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
      <body className="pc pt-10 md:pt-14 overflow-x-hidden antialiased bg-neutral-100">
        <NextTopLoader
          color="#111"
          initialPosition={0.08}
          crawlSpeed={200}
          height={2}
          crawl={true}
          showSpinner={true}
          easing="ease"
          speed={200}
          shadow="0 0 4px #111,0 0 2px #111"
        />
        <Navigation />
        {children}
        <PrismicPreview repositoryName={repositoryName} />
        <Footer />
      </body>
    </html>
  );
}
