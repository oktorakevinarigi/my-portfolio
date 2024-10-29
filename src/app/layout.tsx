import localFont from "next/font/local";
import type { Metadata } from "next";

import Providers from "./providers";

const calibre = localFont({
  src: [
    {
      path: "./fonts/Calibre/Calibre-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/Calibre/Calibre-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/Calibre/Calibre-Semibold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "./fonts/Calibre/Calibre-RegularItalic.woff2",
      weight: "400",
      style: "italic",
    },
    {
      path: "./fonts/Calibre/Calibre-MediumItalic.woff2",
      weight: "500",
      style: "italic",
    },
    {
      path: "./fonts/Calibre/Calibre-SemiboldItalic.woff2",
      weight: "600",
      style: "italic",
    },
  ],
  variable: "--font-calibre",
});
const sfMono = localFont({
  src: [
    {
      path: "./fonts/SFMono/SFMono-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/SFMono/SFMono-Semibold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "./fonts/SFMono/SFMono-RegularItalic.woff2",
      weight: "400",
      style: "italic",
    },
    {
      path: "./fonts/SFMono/SFMono-SemiboldItalic.woff2",
      weight: "600",
      style: "italic",
    },
  ],
  variable: "--font-sf-mono",
});

export const metadata: Metadata = {
  title: "Oktora Kevin Arigi",
  description:
    "Oktora Kevin Arigi is a frontend engineer who specializes in building  exceptional digital experiences.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${calibre.variable} ${sfMono.variable}`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
