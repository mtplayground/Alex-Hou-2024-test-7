import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Alex-Hou-2024-test-7",
  description: "Simple message board built with Next.js.",
};

type RootLayoutProps = Readonly<{
  children: React.ReactNode;
}>;

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
