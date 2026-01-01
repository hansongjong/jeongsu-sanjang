import type { Metadata } from "next";
import { Noto_Sans_KR } from "next/font/google";
import "./globals.css";

const notoSansKR = Noto_Sans_KR({
  variable: "--font-noto-sans-kr",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

export const metadata: Metadata = {
  title: "정수산장 | Jeongsu Sanjang - Korean Soy Crab & Grilled Fish",
  description: "김포 간장게장 · 생선구이 전문점. Experience authentic Korean soy-marinated crab and grilled fish near Gimpo Airport.",
  keywords: ["Korean restaurant", "soy crab", "ganjang gejang", "간장게장", "김포 맛집", "Korean food", "Gimpo"],
  openGraph: {
    title: "정수산장 | Jeongsu Sanjang",
    description: "Must-Try Korean Delicacy - Soy Crab & Grilled Fish Restaurant",
    locale: "ko_KR",
    alternateLocale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={`${notoSansKR.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
