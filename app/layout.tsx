import type { Metadata } from "next";
import { Noto_Sans_JP, Noto_Serif_JP, Fraunces } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ScrollReveal from "./components/ScrollReveal";

const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
  preload: true,
  variable: "--font-sans-jp",
});

const notoSerifJP = Noto_Serif_JP({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  display: "swap",
  preload: false,
  variable: "--font-serif-jp",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
  preload: false,
  variable: "--font-fraunces",
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
    <html
      lang="ja"
      className={`${notoSansJP.variable} ${notoSerifJP.variable} ${fraunces.variable}`}
    >
      <body>
        <script
          dangerouslySetInnerHTML={{
            __html: "document.documentElement.classList.add('js');",
          }}
        />
        <Header />
        <main>{children}</main>
        <Footer />
        <ScrollReveal />
      </body>
    </html>
  );
}
