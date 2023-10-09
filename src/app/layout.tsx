import "./globals.css";

import { Inter } from "next/font/google";
import { PrismicPreview } from "@prismicio/next";
import NextTopLoader from "nextjs-toploader";

import { repositoryName } from "../prismicio";
import { ReactNode } from "react";
import { Navigation } from "../components/Navigation";
import { SSRFooter } from "../components/Footer";

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
      <body className="pc pt-6 sm:pt-10 md:pt-14 overflow-x-hidden antialiased bg-zinc-50">
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <NextTopLoader
          color="#111"
          initialPosition={0.08}
          crawlSpeed={200}
          height={2}
          crawl={true}
          showSpinner={false}
          easing="ease"
          speed={200}
          shadow="0 0 4px #111,0 0 2px #111"
        />
        <Navigation />
        {children}
        <PrismicPreview repositoryName={repositoryName} />
        <SSRFooter />
      </body>
    </html>
  );
}
