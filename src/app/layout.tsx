import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import AnimationProvider from "@/providers/AnimationProvider";
import CustomCursor from "@/components/CustomCursor";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Kaan Uzman - Full Stack Developer",
  description: "A passionate Full Stack Developer specializing in mobile and web development.",
  keywords: "Full Stack Developer, Mobile Developer, Web Developer, Flutter, React, Next.js, Node.js",
  authors: [{ name: "Kaan Uzman" }],
  creator: "Kaan Uzman",
  publisher: "Kaan Uzman",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://kaanuzman.dev",
    siteName: "Kaan Uzman",
    title: "Kaan Uzman - Full Stack Developer",
    description: "A passionate Full Stack Developer specializing in mobile and web development.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Kaan Uzman - Full Stack Developer"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Kaan Uzman - Full Stack Developer",
    description: "A passionate Full Stack Developer specializing in mobile and web development.",
    creator: "@akaanuzman",
    images: ["/og-image.png"]
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} min-h-screen bg-background text-foreground antialiased`}>
        <AnimationProvider>
          <main className="flex min-h-screen flex-col">
            {children}
          </main>
          <CustomCursor />
        </AnimationProvider>
      </body>
    </html>
  );
}
