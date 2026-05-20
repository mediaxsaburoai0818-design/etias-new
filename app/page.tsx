import type { Metadata } from "next";
import Link from "next/link";
import FaqAccordion from "./components/FaqAccordion";

export const metadata: Metadata = {
  title: "ETIAS Application Desk｜日本人のための欧州渡航認証ETIASガイド",
  description:
    "ヨーロッパ渡航に必要なETIAS（欧州渡航情報認証制度）の申請方法、費用、対象国を日本人旅行者向けにわかりやすく解説。申請料20ユーロ、2026年Q4開始予定。",
  alternates: { canonical: "https://etias-application-desk.com/" },
  openGraph: {
    title: "ETIAS Application Desk｜日本人のための欧州渡航認証ETIASガイド",
    description:
      "ヨーロッパ渡航に必要なETIAS（欧州渡航情報認証制度）の申請方法、費用、対象国を日本人旅行者向けにわかりやすく解説。",
    url: "https://etias-application-desk.com/",
    type: "website",
    locale: "ja_JP",
    siteName: "ETIAS Application Desk",
  },
};

const topFaqs = [
  {
    question: "ETIASとは何ですか？",
    answer:
      "ETIAS（European Travel Information and Authorisation System）は、シェンゲン協定加盟国への渡航前にオンラインで取得する電子渡航認証です。日本のパスポート保持者がビザなしでヨーロッパを訪問する際に必要となる制度で、2026年Q4に運用開始が予定されています。アメリカのESTA（電子渡航認証システム）に似た仕組みです。",
  },
  {
    question: "日本人はETIASが必要ですか？",
    answer:
      "はい、日本国籍の方がシェンゲン協定加盟国（フランス、ドイツ、イタリア、スペインなど30か国）へ短期渡航する場合、ETIAS制度の運用開始後はETIASの取得が必要になります。観光、ビジネス、トランジットなど90日以内の滞在が対象です。",
  },
  {
    question: "ETIASの申請料はいくらですか？",
    answer:
      "ETIASの申請料は20ユーロです。当初は7ユーロとされていましたが、制度の運用コストを踏まえて20ユーロに改定されました。18歳未満および70歳以上の方は無料で申請できます。支払いはクレジットカードまたはデビットカードで行います。",
  },
  {
    question: "ETIASの有効期間はどのくらいですか？",
    answer:
      "ETIASは承認されてから3年間有効です。ただし、パスポートの有効期限がETIASの有効期限より先に切れる場合は、パスポートの有効期限と同時にETIASも失効します。新しいパスポートを取得した場合は、ETIASの再申請が必要です。",
  },
  {
    question: "ETIASはいつから必要になりますか？",
    answer:
      "ETIASポータルは2026年Q4（10月〜12月）の開始が予定されています。運用開始後は、シェンゲン協定加盟国へ渡航する前にオンラインでETIASを取得する必要があります。開始日が正式に確定次第、当サイトでお知らせいたします。",
  },
];

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: "ETIAS Application Desk",
            url: "https://etias-application-desk.com/",
            description:
              "日本人旅行者のための欧州渡航認証ETIAS情報サイト",
            inLanguage: "ja",
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: topFaqs.map((faq) => ({
              "@type": "Question",
              name: faq.question,
              acceptedAnswer: {
                "@type": "Answer",
                text: faq.answer,
              },
            })),
          }),
        }}
      />

      {/* Hero */}
      <section className="hero">
        <div className="container">
          <div className="hero-badge">2026年Q4 運用開始予定</div>
          <h1>ヨーロッパ渡航に必要な電子渡航認証ETIASの申請</h1>
          <p className="hero-lead">
            シェンゲン協定加盟30か国への渡航に必要なETIAS（エティアス）。
            申請方法、費用、対象国など日本人旅行者が知っておくべき情報をまとめました。
          </p>
          <div className="hero-actions">
            <Link href="/guide/" className="btn btn-primary btn-lg">
              ETIAS完全ガイドを読む
            </Link>
            <Link href="/flow/" className="btn btn-secondary btn-lg">
              申請手順を確認する
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">ETIASとは</h2>
          <p className="section-lead">
            欧州渡航情報認証制度（ETIAS）は、EU域外からの旅行者を事前にスクリーニングする電子渡航認証システムです。
          </p>
          <div className="card-grid card-grid-3">
            <div className="card">
              <div className="card-icon">01</div>
              <h3>オンライン申請</h3>
              <p>
                パスポート情報や渡航目的などの基本情報をオンラインフォームに入力するだけ。空港のチェックインカウンターやビザセンターへ出向く必要はなく、自宅から24時間いつでも申請できます。
              </p>
            </div>
            <div className="card">
              <div className="card-icon">02</div>
              <h3>申請料20ユーロ</h3>
              <p>
                申請費用は20ユーロ（日本円で約3,200円相当）。18歳未満と70歳以上は無料です。クレジットカードやデビットカードでの支払いに対応しており、ビザの取得費用と比較すると大幅に手軽です。
              </p>
            </div>
            <div className="card">
              <div className="card-icon">03</div>
              <h3>3年間有効</h3>
              <p>
                一度承認されたETIASは3年間有効で、その期間内であれば何度でもシェンゲン圏へ渡航できます。1回の滞在は180日間のうち最大90日間まで。パスポートを更新した場合は再申請が必要です。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Steps Section */}
      <section className="section section-alt">
        <div className="container">
          <h2 className="section-title">申請の流れ</h2>
          <p className="section-lead">
            ETIASの申請は4つのステップで完了します。所要時間は約10〜15分です。
          </p>
          <div style={{ maxWidth: "640px", margin: "0 auto" }}>
            <div className="steps">
              <div className="step">
                <div className="step-content">
                  <h3>パスポート情報の入力</h3>
                  <p>
                    有効なICチップ搭載パスポートの情報を入力します。氏名、生年月日、パスポート番号、有効期限などの基本的な個人情報を正確に記入してください。
                  </p>
                </div>
              </div>
              <div className="step">
                <div className="step-content">
                  <h3>渡航情報・セキュリティ質問</h3>
                  <p>
                    渡航先の国名、滞在先の住所、渡航目的などを回答します。加えて、健康状態や犯罪歴に関するセキュリティ質問にも回答する必要があります。
                  </p>
                </div>
              </div>
              <div className="step">
                <div className="step-content">
                  <h3>申請料の支払い</h3>
                  <p>
                    申請料20ユーロをクレジットカードまたはデビットカードで支払います。18歳未満および70歳以上の方は申請料が免除されます。
                  </p>
                </div>
              </div>
              <div className="step">
                <div className="step-content">
                  <h3>承認結果の受け取り</h3>
                  <p>
                    ほとんどの申請は数分から数時間以内に処理されます。結果はメールで通知されます。承認されたETIASはパスポートと電子的にリンクされるため、印刷は不要です。
                  </p>
                </div>
              </div>
            </div>
            <div className="text-center mt-3">
              <Link href="/flow/" className="btn btn-outline">
                申請手順の詳細を見る
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Target Countries Overview */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">ETIAS対象国</h2>
          <p className="section-lead">
            シェンゲン協定に加盟する30か国が対象です。日本人旅行者に人気の主要国をご紹介します。
          </p>
          <div className="country-grid">
            <Link href="/france/" className="country-card">
              <div className="country-card-name">フランス</div>
            </Link>
            <Link href="/italy/" className="country-card">
              <div className="country-card-name">イタリア</div>
            </Link>
            <Link href="/spain/" className="country-card">
              <div className="country-card-name">スペイン</div>
            </Link>
            <Link href="/germany/" className="country-card">
              <div className="country-card-name">ドイツ</div>
            </Link>
            <Link href="/switzerland/" className="country-card">
              <div className="country-card-name">スイス</div>
            </Link>
          </div>
          <div className="text-center mt-4">
            <Link href="/countries/" className="btn btn-outline">
              対象国一覧を見る
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section section-alt">
        <div className="container">
          <div className="stat-grid">
            <div className="stat-item">
              <div className="stat-number">30</div>
              <div className="stat-label">対象国（シェンゲン協定加盟国）</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">20 EUR</div>
              <div className="stat-label">申請料（約3,200円）</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">3年間</div>
              <div className="stat-label">有効期間（複数回渡航可能）</div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">よくある質問</h2>
          <p className="section-lead">
            ETIASに関する基本的な疑問にお答えします。
          </p>
          <FaqAccordion items={topFaqs} />
          <div className="text-center mt-4">
            <Link href="/faq/" className="btn btn-outline">
              FAQ一覧を見る
            </Link>
          </div>
        </div>
      </section>

      {/* News Section */}
      <section className="section section-alt">
        <div className="container">
          <h2 className="section-title">最新情報</h2>
          <div className="news-list">
            <div className="news-item">
              <span className="news-date">2026-05-20</span>
              <div className="news-title">
                <Link href="/guide/">ETIAS完全ガイドを公開しました</Link>
              </div>
            </div>
            <div className="news-item">
              <span className="news-date">2026-05-20</span>
              <div className="news-title">
                <Link href="/fee/">ETIAS申請料20ユーロの詳細ページを追加</Link>
              </div>
            </div>
            <div className="news-item">
              <span className="news-date">2026-05-20</span>
              <div className="news-title">
                <Link href="/countries/">シェンゲン協定30か国の対象国一覧を公開</Link>
              </div>
            </div>
            <div className="news-item">
              <span className="news-date">2026-05-20</span>
              <div className="news-title">
                <Link href="/comparison/">ETIAS・ESTA・K-ETA徹底比較ページを追加</Link>
              </div>
            </div>
            <div className="news-item">
              <span className="news-date">2026-05-20</span>
              <div className="news-title">
                <Link href="/france/">フランス、イタリア、スペインなど国別ガイドを公開</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <h2>ETIASの準備を始めましょう</h2>
          <p>
            2026年Q4の運用開始に向けて、今から申請に必要な情報を確認しておきましょう。
            パスポートの有効期限や渡航計画の確認がスムーズな申請への第一歩です。
          </p>
          <Link href="/guide/" className="btn btn-primary btn-lg">
            ETIAS完全ガイドを読む
          </Link>
        </div>
      </section>
    </>
  );
}
