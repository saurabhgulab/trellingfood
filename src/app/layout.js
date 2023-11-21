import { Inter } from "next/font/google";
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
      <body className={inter.className}>{children}</body>
    </html>
  );
}
