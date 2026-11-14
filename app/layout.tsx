import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TopBar from "@/components/TopBar";
import FloatingContact from "@/components/FloatingContact";

export const metadata: Metadata = {
  metadataBase: new URL("https://1medionline.com"),
  title: "medionline — Genuine Medical Supplies, Delivered in Karachi",
  description:
    "Medicines, diagnostic devices, PPE and disposables sourced from licensed distributors, delivered same-day across Karachi.",
  openGraph: {
    title: "medionline — Genuine Medical Supplies, Delivered in Karachi",
    description:
      "Medicines, diagnostic devices, PPE and disposables sourced from licensed distributors, delivered same-day across Karachi.",
    url: "https://1medionline.com",
    siteName: "medionline",
    locale: "en_PK",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,500;0,9..144,600;1,9..144,500&family=Inter:wght@400;500;600;700&family=Space+Mono:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">
        <TopBar />
        <Header />
        <main>{children}</main>
        <Footer />
        <FloatingContact />
      </body>
    </html>
  );
}
