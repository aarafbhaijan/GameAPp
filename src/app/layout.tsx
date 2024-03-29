import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";

import "./globals.css";
import Logo from "../components/Logo/Logo";
import { Inter as FontSans } from "next/font/google";
import { cn } from "../lib/utils";
import Head from "next/head";
import { Container } from "@mui/material";
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
    <html lang="en" className="bg-black">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased scroll-smooth",
          fontSans.variable
        )}
      >
        <Logo />
        {children}
      </body>
    </html>
  );
}
