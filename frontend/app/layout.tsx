import type { Metadata } from "next";

import { Inter } from "next/font/google";

import { ThemeProvider } from "@/components/common/ThemeProvider";
import { ThemeScript } from "@/components/common/ThemeScript";
import { Toaster } from "@/components/ui/sonner";

import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap", // Prevent font loading from blocking render
  preload: true,
});

export const metadata: Metadata = {
  title: "AI-Augmented",
  description: "AI-Augmented Frontend",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <head>
        <ThemeScript />
      </head>
      <body
        className={`${inter.variable} antialiased`}
        // Suppress hydration warnings for browser extension attributes
        suppressHydrationWarning={true}
      >
        <ThemeProvider>
          {children}
          <Toaster position="top-center" closeButton richColors />
        </ThemeProvider>
      </body>
    </html>
  );
}
