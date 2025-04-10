import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import AnimationProvider from "@/providers/AnimationProvider";
import CustomCursor from "@/components/CustomCursor";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Kaan Uzman - Frontend Developer",
  description: "A passionate Frontend Developer specializing in mobile and web development.",
  keywords: "Full Stack Developer, Frontend Developer, Backend Developer, Mobile Developer, Web Developer, Flutter, React, Next.js, Node.js, TypeScript, JavaScript, UI/UX, CSS, Tailwind CSS, Mobile Apps, Web Applications, Software Engineer, Cross-platform Development, REST API, Redux, State Management, Git, GitHub",
  authors: [{ name: "Kaan Uzman" }],
  creator: "Kaan Uzman",
  publisher: "Kaan Uzman",
  robots: "index, follow",
  metadataBase: new URL('https://akaanuzman-portfolio.vercel.app'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://akaanuzman-portfolio.vercel.app",
    siteName: "Kaan Uzman",
    title: "Kaan Uzman - Frontend Developer",
    description: "A passionate Frontend Developer specializing in mobile and web development.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Kaan Uzman - Frontend Developer"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Kaan Uzman - Frontend Developer",
    description: "A passionate Frontend Developer specializing in mobile and web development.",
    creator: "@akaandev",
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
      <head>
        <Script
          id="structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Kaan Uzman",
              url: "https://akaanuzman-portfolio.vercel.app",
              jobTitle: "Full Stack Developer",
              knowsAbout: ["Web Development", "Mobile Development", "React", "Next.js", "Flutter", "Node.js"],
              sameAs: [
                "https://github.com/akaanuzman",
                "https://www.linkedin.com/in/akaanuzman/",
                "https://twitter.com/akaanuzman"
              ]
            })
          }}
        />
      </head>
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
