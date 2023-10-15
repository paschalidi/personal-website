import "./globals.css";

import { Inter } from "next/font/google";
import { PrismicPreview } from "@prismicio/next";
import NextTopLoader from "nextjs-toploader";

import { repositoryName } from "../prismicio";
import { ReactNode } from "react";


export default async function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en">
      <body className="pc pt-6 sm:pt-10 md:pt-14 overflow-x-hidden antialiased bg-stone-900">
        <NextTopLoader
          color="#000"
          initialPosition={0.08}
          crawlSpeed={200}
          height={2}
          crawl={true}
          showSpinner={false}
          easing="ease"
          speed={200}
          shadow="0 0 4px #111,0 0 2px #111"
        />
        {children}
        <PrismicPreview repositoryName={repositoryName} />
      </body>
    </html>
  );
}
