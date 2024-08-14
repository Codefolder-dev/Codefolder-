import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import MobileNavbar from "@/components/Navbar/navbar2";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "code folder",
  description: "codefolder ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body >
        <Navbar />
        <MobileNavbar/>
        {children}</body>
    </html>
  );
}
