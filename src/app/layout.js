import { Inter } from "next/font/google";
import Head from "next/head";
import Navigation from "./components/navbar";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "TrellingFood - Digital Marketing Agency That Delivers !",
  description:
    "Trellingfood is a leading digital agency focused on delivering measurable results. Our online marketing services focus on clear tangible goals by solving bottlenecks and adding impactful creativity across all platforms.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
        />
      </Head>

      <body className={inter.className}>
        <Navigation />
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
