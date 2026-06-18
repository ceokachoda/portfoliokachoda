import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import "@/styles/globals.css";
import { siteConfig } from "@/config/site";
import { fontVariables } from "@/lib/fonts";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.name}`
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  authors: [{ name: "Karan Malakar" }],
  creator: "Karan Malakar",
  publisher: "WeDrip Ecosystem",
  keywords: ["Karan Malakar", "Karan Malakar Shillong", "Karan Malakar Guwahati", "Karan Malakar WeDrip", "WeDrip", "WeDrip OS", "FlowCOS", "FyneStudy", "SUHASHI POS", "Northeast Home Rentals", "NEHR", "Kaizen Cafe", "Kaizen Guwahati", "Founder from Northeast India", "Entrepreneur from Meghalaya", "Product Builder Northeast India"],
  alternates: {
    canonical: siteConfig.url
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: siteConfig.title,
    description: siteConfig.description,
    images: [
      {
        url: "/og/karan-malakar-founder-portfolio.png",
        width: 1200,
        height: 630,
        alt: "Karan Malakar - Founder of WeDrip Ecosystem"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    images: ["/og/karan-malakar-founder-portfolio.png"]
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1
    }
  }
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#030305",
  colorScheme: "dark"
};

export default function RootLayout({
  children
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en" className={fontVariables} suppressHydrationWarning>
      <body>
        {children}
      </body>
    </html>
  );
}
