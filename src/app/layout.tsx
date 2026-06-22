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
  title: "RVM ScaleCraft | Futuristic Performance Marketing",
  description: "World-class futuristic digital marketing and performance marketing agency. We help brands grow with performance marketing, and creative strategies.",
  keywords: ["digital marketing", "performance marketing", "brand growth", "SEO", "creative agency", "futuristic"],
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
  openGraph: {
    title: "RVM ScaleCraft | Futuristic Performance Marketing",
    description: "World-class futuristic digital marketing and performance marketing agency. We help brands grow with performance marketing, and creative strategies.",
    url: "https://rishiverse.co.in",
    siteName: "RVM ScaleCraft",
    images: [
      {
        url: "https://rishiverse.co.in/logo.png",
        width: 1200,
        height: 630,
        alt: "RVM ScaleCraft Logo",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "RVM ScaleCraft | Futuristic Performance Marketing",
    description: "World-class futuristic digital marketing and performance marketing agency. We help brands grow with performance marketing, and creative strategies.",
    images: ["https://rishiverse.co.in/logo.png"],
  },
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
