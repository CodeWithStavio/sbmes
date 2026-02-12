import type { Metadata, Viewport } from "next";
import { Cairo, Inter } from "next/font/google";
import "./globals.css";

const cairo = Cairo({
  subsets: ["arabic", "latin"],
  variable: "--font-cairo",
  display: "swap",
  preload: true,
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  preload: true,
});

const SITE_URL = "https://www.sbmes-sy.org";
const SITE_NAME = "SBMES - الجمعية السورية للهندسة الطبية الحيوية";
const SITE_DESCRIPTION =
  "الجمعية السورية للهندسة الطبية الحيوية - Syrian Biomedical Engineering Society. أول كيان غير ربحي يُعنى بالنهوض بقطاع الهندسة الطبية ودعم المهندسين الطبيين السوريين وتطوير الرعاية الصحية في سوريا.";

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#1B6B6B" },
    { media: "(prefers-color-scheme: dark)", color: "#0F4C4C" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_NAME,
    template: `%s | SBMES`,
  },
  description: SITE_DESCRIPTION,
  keywords: [
    "SBMES",
    "الهندسة الطبية الحيوية",
    "سوريا",
    "جمعية علمية",
    "Biomedical Engineering",
    "Syria",
    "هندسة طبية",
    "أجهزة طبية",
    "مؤتمر",
    "دمشق",
    "Syrian Biomedical Engineering Society",
    "رعاية صحية",
    "تكنولوجيا طبية",
    "Medical Devices",
    "Healthcare Engineering",
    "ISBME Conference",
  ],
  authors: [
    { name: "SBMES - الجمعية السورية للهندسة الطبية الحيوية", url: SITE_URL },
  ],
  creator: "SBMES",
  publisher: "SBMES - Syrian Biomedical Engineering Society",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: SITE_URL,
    languages: {
      "ar-SY": SITE_URL,
    },
  },
  openGraph: {
    title: SITE_NAME,
    description:
      "أول جمعية علمية مهنية غير ربحية تعمل على تطوير وتعزيز مجال الهندسة الطبية الحيوية في سوريا. تأسست في دمشق عام 2025.",
    type: "website",
    locale: "ar_SY",
    url: SITE_URL,
    siteName: "SBMES",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "SBMES - الجمعية السورية للهندسة الطبية الحيوية",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_NAME,
    description:
      "أول جمعية علمية مهنية غير ربحية تعمل على تطوير الهندسة الطبية الحيوية في سوريا",
    images: ["/logo.png"],
    creator: "@sbmes_sy",
    site: "@sbmes_sy",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  category: "technology",
  classification: "Biomedical Engineering Society",
};

function JsonLd() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "الجمعية السورية للهندسة الطبية الحيوية",
    alternateName: ["SBMES", "Syrian Biomedical Engineering Society"],
    url: SITE_URL,
    logo: `${SITE_URL}/logo.png`,
    description: SITE_DESCRIPTION,
    foundingDate: "2025-08-27",
    foundingLocation: {
      "@type": "Place",
      name: "Damascus, Syria",
      address: {
        "@type": "PostalAddress",
        addressLocality: "دمشق",
        streetAddress: "المزرعة، شارع صالح العلي، بناء رقم (6)",
        addressCountry: "SY",
      },
    },
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: "+963-11-4429193",
        contactType: "customer service",
        availableLanguage: ["Arabic", "English"],
      },
      {
        "@type": "ContactPoint",
        email: "info@sbmes-sy.org",
        contactType: "general inquiry",
      },
    ],
    address: {
      "@type": "PostalAddress",
      streetAddress: "المزرعة، شارع صالح العلي، بناء رقم (6)",
      addressLocality: "دمشق",
      addressCountry: "SY",
    },
    sameAs: [],
    nonprofitStatus: "Nonprofit",
    areaServed: {
      "@type": "Country",
      name: "Syria",
    },
    knowsAbout: [
      "Biomedical Engineering",
      "Medical Devices",
      "Healthcare Technology",
      "الهندسة الطبية الحيوية",
    ],
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_NAME,
    url: SITE_URL,
    description: SITE_DESCRIPTION,
    inLanguage: "ar",
    publisher: {
      "@type": "Organization",
      name: "SBMES",
      url: SITE_URL,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteSchema),
        }}
      />
    </>
  );
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl" className="scroll-smooth">
      <head>
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.googleapis.com"
          crossOrigin="anonymous"
        />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <JsonLd />
      </head>
      <body
        className={`${cairo.variable} ${inter.variable} font-cairo antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
