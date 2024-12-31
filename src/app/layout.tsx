import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import AnimationProvider from "@/providers/AnimationProvider";
import CustomCursor from "@/components/CustomCursor";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Kaan Uzman | Full Stack Developer",
  description: "Full Stack Developer Portfolio of Kaan Uzman",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="dark">
      <body className={`${inter.className} overflow-x-hidden`}>
        <CustomCursor />
        <AnimationProvider>
          {children}
        </AnimationProvider>
      </body>
    </html>
  );
}
