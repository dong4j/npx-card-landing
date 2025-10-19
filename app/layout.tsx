import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#ffffff',
};

export const metadata: Metadata = {
  title: "npx dong4j - An electronic business card containing personal information",
  description: "No need to globally install dependency packages, quick to run and display personal information.",
  keywords: "npx dong4j, npx, dong4j, personal information, business card, no install, quick run",
  authors: [{ name: "dong4j" }],
  creator: "npx dong4j",
  publisher: "npx dong4j",
  formatDetection: {
    email: false,
    telephone: false,
    address: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://home.dong4j.site",
    title: "npx dong4j - An electronic business card containing personal information",
    description: "No need to globally install dependency packages, quick to run and display personal information.",
    siteName: "npx dong4j",
  },
  twitter: {
    card: "summary_large_image",
    title: "npx dong4j - An electronic business card containing personal information",
    description: "No need to globally install dependency packages, quick to run and display personal information.",
    creator: "@dong4j",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="canonical" href="https://home.dong4j.site" />
        <script defer src="https://cdn.dong4j.site/source/static/umami.self.js" data-host-url="https://umami.dong4j.site" data-website-id="5ec968a8-2eb3-4137-b535-2c3143d3f905"></script>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
