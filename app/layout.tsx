import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { CartProvider } from "../components/context/CartContext";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nexora AI Store | Premium AI Reels & Digital Products",
  description:
    "Discover premium AI reels bundles, templates, prompts, presets, and digital resources for content creators. Get high-quality digital products instantly.",
  keywords: [
    "Nexora AI Store",
    "AI reels bundles",
    "AI content",
    "digital products",
    "Instagram reels",
    "YouTube Shorts",
    "AI templates",
    "content creator resources",
  ],
  openGraph: {
    title: "Nexora AI Store | Premium AI Reels & Digital Products",
    description:
      "Premium AI reels bundles, templates, prompts, presets, and digital resources for content creators.",
    url: "https://nexoraaistore.vercel.app",
    siteName: "Nexora AI Store",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <CartProvider>{children}</CartProvider>
      </body>
    </html>
  );
}