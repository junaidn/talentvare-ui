import "../styles/globals.scss";
import type { Metadata } from "next";
import localFont from "next/font/local";
import { Header } from "@/components/header/Header";

const neueHaas = localFont({
  src: [
    {
      path: "../../public/fonts/neue-haas/NeueHaasDisplayBlack.ttf",
      weight: "900",
      style: "normal",
    },
    {
      path: "../../public/fonts/neue-haas/NeueHaasDisplayBlackItalic.ttf",
      weight: "900",
      style: "italic",
    },
    {
      path: "../../public/fonts/neue-haas/NeueHaasDisplayBold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/fonts/neue-haas/NeueHaasDisplayBoldItalic.ttf",
      weight: "700",
      style: "italic",
    },
    {
      path: "../../public/fonts/neue-haas/NeueHaasDisplayLight.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../public/fonts/neue-haas/NeueHaasDisplayLightItalic.ttf",
      weight: "300",
      style: "italic",
    },
    {
      path: "../../public/fonts/neue-haas/NeueHaasDisplayMedium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/neue-haas/NeueHaasDisplayMediumItalic.ttf",
      weight: "500",
      style: "italic",
    },
    {
      path: "../../public/fonts/neue-haas/NeueHaasDisplayRoman.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/neue-haas/NeueHaasDisplayRomanItalic.ttf",
      weight: "400",
      style: "italic",
    },
    {
      path: "../../public/fonts/neue-haas/NeueHaasDisplayThin.ttf",
      weight: "100",
      style: "normal",
    },
    {
      path: "../../public/fonts/neue-haas/NeueHaasDisplayThinItalic.ttf",
      weight: "100",
      style: "italic",
    },
  ],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Talentvare",
  description: "Talentvare",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={neueHaas.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
