import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "🍋 Rick Bot 🤖",
  description: "Use if you miss Rick",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="lemonade">
      <body className={`${inter.className} flex flex-col`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
