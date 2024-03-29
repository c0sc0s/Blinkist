import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import clsx from "clsx";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

// font
const ceraProFont = localFont({
  src: "../public/fonts/CeraPro.woff2",
  display: "swap",
});

const globalStyle = "text-primary font-medium lg:leading-tight leading-snug";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={clsx([globalStyle, ceraProFont.className])}>
        {children}
      </body>
    </html>
  );
}
