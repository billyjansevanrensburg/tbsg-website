import type { Metadata } from "next";
import { Montserrat, Open_Sans, Roboto_Mono } from "next/font/google";
import "./globals.css";
import { Header, Footer } from "@/components";
import { GoogleAnalytics } from "@/components/analytics/GoogleAnalytics";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});

const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-opensans",
  display: "swap",
});

const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  variable: "--font-roboto-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://tbsg.co.za"),
  title: {
    default: "TBSG | Bridging Finance & Home Loans South Africa",
    template: "%s | TBSG",
  },
  description:
    "South Africa's most transparent property finance partner. Bridging finance in as little as 6 hours. Home loans with 0.95% better rates. Trusted for 10+ years.",
  keywords: [
    "bridging finance",
    "bridging finance south africa",
    "home loans south africa",
    "bond origination",
    "property finance",
    "estate agent commission advance",
    "seller bridging finance",
    "commercial property finance",
    "TBSG",
  ],
  authors: [{ name: "The Bridging Solutions Group" }],
  creator: "TBSG",
  publisher: "The Bridging Solutions Group",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_ZA",
    url: "https://tbsg.co.za",
    siteName: "The Bridging Solutions Group",
    title: "TBSG | Bridging Finance & Home Loans South Africa",
    description:
      "South Africa's most transparent property finance partner. Bridging finance in as little as 6 hours. Home loans with 0.95% better rates.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "TBSG - Bridging Finance & Home Loans",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "TBSG | Bridging Finance & Home Loans South Africa",
    description: "South Africa's most transparent property finance partner.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${montserrat.variable} ${openSans.variable} ${robotoMono.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className="font-body antialiased bg-white text-tbsg-charcoal">
        <GoogleAnalytics />
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
