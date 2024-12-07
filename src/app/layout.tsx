import type { Metadata } from "next";
import "../styles/globals.scss";
import { Header } from "@/components/header/Header";

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
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
