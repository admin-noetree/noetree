import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "NoeTree",
  description: "NoeTree app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" data-theme="dark">
      <body className="antialiased">{children}</body>
    </html>
  );
}
