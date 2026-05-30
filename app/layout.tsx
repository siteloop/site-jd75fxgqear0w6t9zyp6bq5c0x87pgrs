import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ember & Oak — Small-batch coffee in Brooklyn",
  description:
    "A small-batch roastery and café in Brooklyn serving single-origin coffee, made by hand.",
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
