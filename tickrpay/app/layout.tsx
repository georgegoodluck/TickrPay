import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'TickrPay',
  description: 'Event payment registration & ID issuing',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,400;0,500;0,600;0,700;0,800;1,400&display=swap"
          rel="stylesheet"
        />
        <style>{`
          * { box-sizing: border-box; margin: 0; padding: 0; }
          html { -webkit-font-smoothing: antialiased; }
          body { font-family: 'Plus Jakarta Sans', sans-serif; background: #0d1117; color: #e2e8f0; }
          input[type='number']::-webkit-inner-spin-button,
          input[type='number']::-webkit-outer-spin-button { -webkit-appearance: none; }
        `}</style>
      </head>
      <body>{children}</body>
    </html>
  );
}