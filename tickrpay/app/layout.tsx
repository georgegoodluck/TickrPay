import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
// @ts-expect-error - No types available for this package
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
  title: "TickrPay",
  description:
    "A Modern event check-in system built to help organizers confirm payments and instantly issue unique attendee IDs during live events.",
  icons: {
    icon: "/logo.jpg", // Path to your logo in the public directory
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
