import { space_grotesk } from "@/lib/font";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Vidyum",
  description: "An AI powered learning platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${space_grotesk.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
