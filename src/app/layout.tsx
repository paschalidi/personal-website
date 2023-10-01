import "../globals.css";

import { Inter } from "next/font/google";
import { PrismicPreview } from "@prismicio/next";

import { repositoryName } from "../../prismicio";
import { ReactNode } from "react";
import { SSRFooter } from "../../components/Footer/SSRFooter";

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
        {children}
        <PrismicPreview repositoryName={repositoryName} />
        <SSRFooter />
      </body>
    </html>
  );
}
