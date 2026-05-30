import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Your site",
  description: "Built with siteloop",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
