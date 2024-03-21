import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";

import "./globals.css";
import Logo from "../components/Logo/Logo";
import { Inter as FontSans } from "next/font/google";
import { cn } from "../lib/utils";
import Head from "next/head";
const inter = Inter({ subsets: ["latin"] });

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
     
        <body
          className={cn(
            "min-h-screen bg-background font-sans antialiased",
            fontSans.variable
          )}
        >
          {children}
        </body>
      
    </html>
  );
}
