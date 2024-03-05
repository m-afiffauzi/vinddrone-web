import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import "./embla.css";
import Header from "@/components/Header";
import FloatingButton from "@/components/FloatingButton";
import { ThemeProvider } from "@/components/ThemeProvider";

const fontStyle = Poppins({ weight: "400", preload: false });

export const metadata: Metadata = {
  title: "VINDDRONE - Sewa Drone Magelang",
  description:
    "Jasa Sewa Drone Area Magelang dan Sekitarnya? Pakai VINDDRONE aja! Hubungi No.Hp/WA 082138351343 sekarang juga!",
  twitter: {
    card: "summary_large_image",
  },
  metadataBase: new URL("https://vinddrone.vercel.app/"),
  alternates: {
    canonical: "/",
    languages: {
      "id-ID": "/id-ID",
      "en-US": "/en-US",
    },
  },
  openGraph: {
    images: "/opengraph-image.png",
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
          content="Jasa Sewa Drone Area Magelang dan Sekitarnya? Pakai VINDDRONE aja! Hubungi No.Hp/WA 082138351343 sekarang juga! Hubungi No.Hp/WA 082138351343 sekarang juga!"
        />
        <meta
          property="og:image"
          content="https://ogcdn.net/2c2c6737-47d4-4459-9969-e711eb48394c/v1/jtek3pedydmzqoltk43htyaq24.srv.us/VINDDRONE%20-%20Sewa%20Drone%20Magelang/Jasa%20Sewa%20Drone%20Area%20Magelang%20dan%20Sekitarnya%3F%20Pakai%20VINDDRONE%20aja!%20Hubungi%20No.Hp%2FWA%20082138351343%20sekarang%20juga!/https%3A%2F%2Fopengraph.b-cdn.net%2Fproduction%2Fdocuments%2F734935b2-6681-480b-9b5f-24dcf4395f82.png%3Ftoken%3DjvHvazTEGFLFvFac2Ribxdpqj86Wfnxcz1qKlVVTDSc%26height%3D630%26width%3D1200%26expires%3D33245614610/og.png"
        />

        {/*  Twitter Meta Tags  */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="vinddrone.vercel.app" />
        <meta property="twitter:url" content="https://vinddrone.vercel.app/" />
        <meta name="twitter:title" content="VINDDRONE - Sewa Drone Magelang" />
        <meta
          name="twitter:description"
          content="Jasa Sewa Drone Area Magelang dan Sekitarnya? Pakai VINDDRONE aja! Hubungi No.Hp/WA 082138351343 sekarang juga!"
        />
        <meta
          name="twitter:image"
          content="https://ogcdn.net/2c2c6737-47d4-4459-9969-e711eb48394c/v1/jtek3pedydmzqoltk43htyaq24.srv.us/VINDDRONE%20-%20Sewa%20Drone%20Magelang/Jasa%20Sewa%20Drone%20Area%20Magelang%20dan%20Sekitarnya%3F%20Pakai%20VINDDRONE%20aja!%20Hubungi%20No.Hp%2FWA%20082138351343%20sekarang%20juga!/https%3A%2F%2Fopengraph.b-cdn.net%2Fproduction%2Fdocuments%2F734935b2-6681-480b-9b5f-24dcf4395f82.png%3Ftoken%3DjvHvazTEGFLFvFac2Ribxdpqj86Wfnxcz1qKlVVTDSc%26height%3D630%26width%3D1200%26expires%3D33245614610/og.png"
        />

        {/* Google Verif Tag */}
        <meta
          name="google-site-verification"
          content="qYrV-2oRM0QfaYdP1Pje5agBPQQaLFUs6wRBVgT_g2I"
        />
      </head>
      <body id="top" className={fontStyle.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          {children}
          <FloatingButton />
        </ThemeProvider>
      </body>
    </html>
  );
}
