/* eslint-disable @next/next/no-page-custom-font */
import type { Metadata } from "next";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import "./globals.css";

export const metadata: Metadata = {
  title: "TickrPay",
  description: "Event payment registration & ID issuing",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,400;0,500;0,600;0,700;0,800;1,400&display=swap"
          rel="stylesheet"
        />
        <style>{`
  html { -webkit-font-smoothing: antialiased; }
  body { font-family: 'Plus Jakarta Sans', sans-serif; background: #0d1117; color: #e2e8f0; }
  *, *::before, *::after { box-sizing: border-box; }
  input[type='number']::-webkit-inner-spin-button,
  input[type='number']::-webkit-outer-spin-button { -webkit-appearance: none; }
`}</style>
      </head>
      <body>{children}</body>
    </html>
  );
}
