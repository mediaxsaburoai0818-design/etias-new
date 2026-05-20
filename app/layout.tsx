import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  title: {
    default: "ETIAS Application Desk｜日本人のための欧州渡航認証ETIASガイド",
    template: "%s｜ETIAS Application Desk",
  },
  description:
    "ヨーロッパ渡航に必要なETIAS（欧州渡航情報認証制度）の申請方法、費用、対象国を日本人旅行者向けにわかりやすく解説。申請料20ユーロ、2026年Q4開始予定。",
  metadataBase: new URL("https://etias-application-desk.com"),
  openGraph: {
    type: "website",
    locale: "ja_JP",
    siteName: "ETIAS Application Desk",
  },
  alternates: {
    canonical: "https://etias-application-desk.com/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className={notoSansJP.className}>
      <head>
        <meta
          httpEquiv="Cache-Control"
          content="no-cache, no-store, must-revalidate"
        />
        <meta httpEquiv="Pragma" content="no-cache" />
        <meta httpEquiv="Expires" content="0" />
      </head>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
