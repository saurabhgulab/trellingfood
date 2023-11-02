import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Trellingfood - Results Driven Digital Marketing Agency",
  description:
    "Trellingfood is a leading Digital agency focused on delivering measurable results. Our Online Marketing Services focus on clear tangible goals by solving bottlenecks and adding impactful creativity across all platforms.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
