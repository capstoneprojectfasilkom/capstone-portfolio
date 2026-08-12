import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://capstone.fasilkom.unej.ac.id";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Capstone Project – Fasilkom UNEJ | Solusi Perangkat Lunak Berdampak Nyata",
    template: "%s | Capstone Project Fasilkom UNEJ",
  },
  description:
    "Program Capstone Project Fakultas Ilmu Komputer Universitas Jember (Fasilkom UNEJ). Mengembangkan aplikasi website, mobile, dan sistem integrasi profesional berstandar industri untuk mitra instansi & industri.",
  keywords: [
    "Capstone Project",
    "Fasilkom UNEJ",
    "Universitas Jember",
    "Software Development Jember",
    "Jasa Pembuatan Website Jember",
    "Pengembangan Aplikasi Mobile",
    "UI UX Design Jember",
    "Sistem Informasi Kampus",
    "Integrasi Sistem",
  ],
  authors: [{ name: "Fasilkom UNEJ" }],
  creator: "Fasilkom UNEJ",
  publisher: "Fasilkom UNEJ",
  alternates: {
    canonical: SITE_URL,
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
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: SITE_URL,
    title: "Capstone Project – Fasilkom UNEJ | Solusi Perangkat Lunak Berdampak Nyata",
    description:
      "Mitra terpercaya pengembangan software berkualitas tinggi yang dikerjakan dengan jaminan keberlanjutan proyek dan kualitas penuh.",
    siteName: "Capstone Project Fasilkom UNEJ",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Capstone Project Fasilkom UNEJ",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Capstone Project – Fasilkom UNEJ",
    description:
      "Capstone Project Fasilkom UNEJ. Solusi teknologi profesional, berdampak nyata, dan berkelanjutan.",
    images: ["/opengraph-image"],
  },
  icons: {
    icon: "/images/fasilkom-icon.png",
    apple: "/images/fasilkom-icon.png",
  },
};

import ClientProviders from "@/components/ClientProviders";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Capstone Project – Fasilkom UNEJ",
    "url": SITE_URL,
    "logo": `${SITE_URL}/images/fasilkom-logo-official.png`,
    "description":
      "Program Capstone Project Fakultas Ilmu Komputer Universitas Jember. Mengembangkan aplikasi & website profesional dengan supervisi dosen pembimbing.",
    "sameAs": [
      "https://ilkom.unej.ac.id/",
      "https://github.com/capstoneprojectfasilkom",
    ],
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Jl. Kalimantan No. 37, Kampus Tegalboto",
      "addressLocality": "Jember",
      "addressRegion": "Jawa Timur",
      "postalCode": "68121",
      "addressCountry": "ID",
    },
  };

  return (
    <html lang="id" className={`${inter.variable} scroll-smooth`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-paper text-ink font-sans antialiased min-h-screen flex flex-col selection:bg-sky-wash selection:text-ink">
        <ClientProviders>{children}</ClientProviders>
      </body>
    </html>
  );
}
