import type { Metadata } from "next";
import { Noto_Sans_KR } from "next/font/google";
import "./globals.css";

const notoSansKR = Noto_Sans_KR({
  variable: "--font-noto-sans-kr",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://jeongsu-sanjang.tgsystem.kr"),
  title: {
    default: "정수산장 | Jeongsu Sanjang - Korean Soy Crab & Grilled Fish",
    template: "%s | 정수산장",
  },
  description: "김포 간장게장 · 생선구이 전문점. 김포공항 20분 거리. Experience authentic Korean soy-marinated crab (Ganjang Gejang) and grilled fish near Gimpo Airport. Must-try Korean delicacy!",
  keywords: [
    "Korean restaurant", "soy crab", "ganjang gejang", "간장게장", "양념게장",
    "김포 맛집", "Korean food", "Gimpo Airport", "생선구이", "꽃게탕",
    "Korean seafood", "rice thief", "밥도둑", "한식", "정수산장",
    "Jeongsu Sanjang", "Korean crab restaurant", "blue crab"
  ],
  authors: [{ name: "정수산장" }],
  creator: "정수산장",
  publisher: "정수산장",
  formatDetection: {
    email: false,
    address: true,
    telephone: true,
  },
  openGraph: {
    title: "정수산장 | Jeongsu Sanjang - Must-Try Korean Soy Crab",
    description: "Authentic Korean Soy-Marinated Crab & Grilled Fish Restaurant. 20 min from Gimpo Airport. Korea's beloved delicacy - the famous 'Rice Thief'!",
    url: "https://jeongsu-sanjang.tgsystem.kr",
    siteName: "정수산장 Jeongsu Sanjang",
    locale: "ko_KR",
    alternateLocale: "en_US",
    type: "website",
    images: [
      {
        url: "/images/restaurant-hero.png",
        width: 1200,
        height: 630,
        alt: "정수산장 - Korean Soy Crab Restaurant",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "정수산장 | Korean Soy Crab Restaurant",
    description: "Must-try Korean delicacy near Gimpo Airport. Authentic Ganjang Gejang!",
    images: ["/images/restaurant-hero.png"],
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
    google: "google-site-verification-code",
  },
  alternates: {
    canonical: "https://jeongsu-sanjang.tgsystem.kr",
    languages: {
      "ko-KR": "https://jeongsu-sanjang.tgsystem.kr",
      "en-US": "https://jeongsu-sanjang.tgsystem.kr/en",
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  name: "정수산장 (Jeongsu Sanjang)",
  image: "https://jeongsu-sanjang.tgsystem.kr/images/restaurant-hero.png",
  "@id": "https://jeongsu-sanjang.tgsystem.kr",
  url: "https://jeongsu-sanjang.tgsystem.kr",
  telephone: "+82-507-1333-9399",
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    streetAddress: "41, Punggok-ro, Gochon-eup",
    addressLocality: "Gimpo-si",
    addressRegion: "Gyeonggi-do",
    postalCode: "10126",
    addressCountry: "KR",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 37.59,
    longitude: 126.76,
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    opens: "11:00",
    closes: "21:00",
  },
  servesCuisine: ["Korean", "Seafood"],
  menu: "https://jeongsu-sanjang.tgsystem.kr/menu",
  acceptsReservations: "True",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.5",
    reviewCount: "100",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${notoSansKR.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
