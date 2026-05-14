import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import CustomCursor from "@/components/CustomCursor";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-primary",
});

export const metadata: Metadata = {
  title: "Digital Agency | Futuristic Performance Marketing",
  description: "World-class futuristic digital marketing and performance marketing agency. We help brands grow using AI, performance marketing, and creative strategies.",
  keywords: ["digital marketing", "performance marketing", "AI marketing", "SEO", "agency", "futuristic"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${outfit.variable}`}>
      <body>
        <SmoothScroll>
          <CustomCursor />
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
