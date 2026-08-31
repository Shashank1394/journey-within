import type { Metadata } from "next";
import { Coming_Soon, Geist, Geist_Mono } from "next/font/google";
import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.scss";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const comingSoon = Coming_Soon({
  variable: "--font-coming-soon",
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Journey Within",
  description:
    "Have you ever thought about finding yourself in a faraway land?",
  openGraph: {
    title: "Journey Within",
    description:
      "Have you ever thought about finding yourself in a faraway land?",
    type: "website",
    siteName: "Journey Within",
  },
  twitter: {
    card: "summary_large_image",
    title: "Journey Within",
    description:
      "Have you ever thought about finding yourself in a faraway land?",
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
      className={`${geistSans.variable} ${geistMono.variable} ${comingSoon.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
