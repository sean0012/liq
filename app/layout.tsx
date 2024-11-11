import type { Metadata } from "next";
import "./globals.css";
import { SpeedInsights } from '@vercel/speed-insights/next';

export const metadata: Metadata = {
  title: "LiquidationLogs",
  description: "Realtime BTC Liquidation show",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}
