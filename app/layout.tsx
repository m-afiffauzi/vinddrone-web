import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "./embla.css";
import Header from "@/components/Header";
import FloatingButton from "@/components/FloatingButton";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "VINDDRONE - Sewa Drone Magelang",
  description:
    "Jasa Sewa Drone Area Magelang dan Sekitarnya? Pakai VINDDRONE aja!",
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <head>
        {/* Facebook Meta Tag */}
        <meta property="og:url" content="https://vinddrone.vercel.app/" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="VINDDRONE - Sewa Drone Magelang" />
        <meta
          property="og:description"
          content="Jasa Sewa Drone Area Magelang dan Sekitarnya? Pakai VINDDRONE aja!"
        />

        {/*  Twitter Meta Tags  */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="vinddrone.vercel.app" />
        <meta property="twitter:url" content="https://vinddrone.vercel.app/" />
        <meta name="twitter:title" content="VINDDRONE - Sewa Drone Magelang" />
        <meta
          name="twitter:description"
          content="Jasa Sewa Drone Area Magelang dan Sekitarnya? Pakai VINDDRONE aja!"
        />

        {/* Google Verif Tag */}
        <meta
          name="google-site-verification"
          content="qYrV-2oRM0QfaYdP1Pje5agBPQQaLFUs6wRBVgT_g2I"
        />
      </head>
      <body id="top" className={inter.className}>
        <Header />
        {children}
        <FloatingButton />
      </body>
    </html>
  );
}
