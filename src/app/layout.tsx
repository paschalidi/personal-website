import "./globals.css";

import { Inter } from "next/font/google";
import { PrismicPreview } from "@prismicio/next";

import { repositoryName } from "../prismicio";
import { ReactNode } from "react";
import { Index } from "../components/Navigation";
import { Bounded } from "../components/Bounded";

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
      <body className="overflow-x-hidden antialiased">
        <Bounded yPadding={"sm"}>
          <Index />

          {children}
          <PrismicPreview repositoryName={repositoryName} />
        </Bounded>
      </body>
    </html>
  );
}
