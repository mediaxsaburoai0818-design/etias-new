import type { Metadata } from "next";
import Link from "next/link";
import "./renewal.css";
import RnReveal from "./RnReveal";

export const metadata: Metadata = {
  title: "ETIAS Application Desk｜TOPリニューアル案（プレビュー）",
  description:
    "TOPページ リニューアルデザイン サンプル（プレビュー用）。",
  robots: { index: false, follow: false },
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

const Arrow = () => (
  <svg className="rn-arrow" width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
    <path d="M3 8h9M8.5 4l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export default function RenewalTop() {
  return (
    <div className="rn-root">
      <RnReveal />

      {/* ============ HERO ============ */}
      <section className="rn-hero">
        <div className="rn-hero-bg" />
        <div className="rn-hero-grain" />
        <div className="rn-container">
          <div className="rn-hero-inner">
            <span className="rn-kicker">European Travel Authorisation</span>
            <h1>
              ヨーロッパ渡航に必要な
              <br />
              電子渡航認証 ETIAS
            </h1>
            <p className="rn-hero-lead">
              シェンゲン協定加盟30か国への渡航に必要なETIAS（エティアス）。
              申請方法、費用、対象国まで、日本人旅行者が知っておくべき情報をわかりやすくまとめました。
            </p>
            <div className="rn-hero-actions">
              <Link href="/guide/" className="rn-btn rn-btn-primary">
                ETIAS完全ガイドを読む <Arrow />
              </Link>
              <Link href="/flow/" className="rn-btn rn-btn-ghost">
                申請手順を確認する
              </Link>
            </div>
            <div className="rn-hero-facts">
              <div>
                <div className="rn-hero-fact-num">30</div>
                <div className="rn-hero-fact-label">対象国（シェンゲン協定）</div>
              </div>
              <div>
                <div className="rn-hero-fact-num">€20</div>
                <div className="rn-hero-fact-label">申請料（約3,200円）</div>
              </div>
              <div>
                <div className="rn-hero-fact-num">3年</div>
                <div className="rn-hero-fact-label">有効期間</div>
              </div>
            </div>
          </div>
        </div>
        <div className="rn-scrollcue">
          <span>Scroll</span>
          <i />
        </div>
      </section>

      {/* ============ TRUST STRIP ============ */}
      <div className="rn-trust">
        <div className="rn-container rn-trust-inner">
          <span className="rn-trust-item">European Travel Information and Authorisation System</span>
          <span className="rn-trust-dot" />
          <span className="rn-trust-item">Schengen Area · 30 Countries</span>
          <span className="rn-trust-dot" />
          <span className="rn-trust-item">For Japanese Travellers</span>
        </div>
      </div>

      {/* ============ ABOUT ============ */}
      <section className="rn-section">
        <div className="rn-container">
          <div className="rn-head rn-reveal">
            <span className="rn-kicker">About ETIAS</span>
            <h2 className="rn-title">ETIASとは</h2>
            <p className="rn-lead">
              欧州渡航情報認証制度（ETIAS）は、EU域外からの旅行者を事前にスクリーニングする電子渡航認証システムです。
            </p>
          </div>
          <div className="rn-cards rn-stagger">
            <div className="rn-card">
              <div className="rn-card-num">01</div>
              <h3>オンライン申請</h3>
              <p>
                パスポート情報や渡航目的などの基本情報をオンラインフォームに入力するだけ。空港のチェックインカウンターやビザセンターへ出向く必要はなく、自宅から24時間いつでも申請できます。
              </p>
            </div>
            <div className="rn-card">
              <div className="rn-card-num">02</div>
              <h3>申請料20ユーロ</h3>
              <p>
                申請費用は20ユーロ（日本円で約3,200円相当）。18歳未満と70歳以上は無料です。クレジットカードやデビットカードでの支払いに対応しており、ビザの取得費用と比較すると大幅に手軽です。
              </p>
            </div>
            <div className="rn-card">
              <div className="rn-card-num">03</div>
              <h3>3年間有効</h3>
              <p>
                一度承認されたETIASは3年間有効で、その期間内であれば何度でもシェンゲン圏へ渡航できます。1回の滞在は180日間のうち最大90日間まで。パスポートを更新した場合は再申請が必要です。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============ STEPS ============ */}
      <section className="rn-section rn-section-soft">
        <div className="rn-container">
          <div className="rn-head rn-reveal">
            <span className="rn-kicker">How to apply</span>
            <h2 className="rn-title">申請の流れ</h2>
            <p className="rn-lead">
              ETIASの申請は4つのステップで完了します。所要時間は約10〜15分です。
            </p>
          </div>
          <div className="rn-steps rn-stagger">
            <div className="rn-step">
              <div className="rn-step-num">1</div>
              <div>
                <h3>パスポート情報の入力</h3>
                <p>
                  有効なICチップ搭載パスポートの情報を入力します。氏名、生年月日、パスポート番号、有効期限などの基本的な個人情報を正確に記入してください。
                </p>
              </div>
            </div>
            <div className="rn-step">
              <div className="rn-step-num">2</div>
              <div>
                <h3>渡航情報・セキュリティ質問</h3>
                <p>
                  渡航先の国名、滞在先の住所、渡航目的などを回答します。加えて、健康状態や犯罪歴に関するセキュリティ質問にも回答する必要があります。
                </p>
              </div>
            </div>
            <div className="rn-step">
              <div className="rn-step-num">3</div>
              <div>
                <h3>申請料の支払い</h3>
                <p>
                  申請料20ユーロをクレジットカードまたはデビットカードで支払います。18歳未満および70歳以上の方は申請料が免除されます。
                </p>
              </div>
            </div>
            <div className="rn-step">
              <div className="rn-step-num">4</div>
              <div>
                <h3>承認結果の受け取り</h3>
                <p>
                  ほとんどの申請は数分から数時間以内に処理されます。結果はメールで通知されます。承認されたETIASはパスポートと電子的にリンクされるため、印刷は不要です。
                </p>
              </div>
            </div>
          </div>
          <div className="rn-center rn-mt">
            <Link href="/flow/" className="rn-btn rn-btn-ghost">
              申請手順の詳細を見る <Arrow />
            </Link>
          </div>
        </div>
      </section>

      {/* ============ COUNTRIES ============ */}
      <section className="rn-section">
        <div className="rn-container">
          <div className="rn-head rn-reveal">
            <span className="rn-kicker">Destinations</span>
            <h2 className="rn-title">ETIAS対象国</h2>
            <p className="rn-lead">
              シェンゲン協定に加盟する30か国が対象です。日本人旅行者に人気の主要国をご紹介します。
            </p>
          </div>
          <div className="rn-countries rn-stagger">
            <Link href="/france/" className="rn-country">フランス</Link>
            <Link href="/italy/" className="rn-country">イタリア</Link>
            <Link href="/spain/" className="rn-country">スペイン</Link>
            <Link href="/germany/" className="rn-country">ドイツ</Link>
            <Link href="/switzerland/" className="rn-country">スイス</Link>
          </div>
          <div className="rn-center rn-mt">
            <Link href="/countries/" className="rn-btn rn-btn-ghost">
              対象国一覧を見る <Arrow />
            </Link>
          </div>
        </div>
      </section>

      {/* ============ STATS ============ */}
      <section className="rn-section rn-section-soft">
        <div className="rn-container">
          <div className="rn-stats rn-stagger">
            <div className="rn-stat">
              <div className="rn-stat-num">30</div>
              <div className="rn-stat-label">対象国（シェンゲン協定加盟国）</div>
            </div>
            <div className="rn-stat">
              <div className="rn-stat-num">20 EUR</div>
              <div className="rn-stat-label">申請料（約3,200円）</div>
            </div>
            <div className="rn-stat">
              <div className="rn-stat-num">3年間</div>
              <div className="rn-stat-label">有効期間（複数回渡航可能）</div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ FAQ ============ */}
      <section className="rn-section">
        <div className="rn-container">
          <div className="rn-head rn-reveal">
            <span className="rn-kicker">FAQ</span>
            <h2 className="rn-title">よくある質問</h2>
            <p className="rn-lead">
              ETIASに関する基本的な疑問にお答えします。
            </p>
          </div>
          <div className="rn-faq rn-reveal">
            {topFaqs.map((faq, i) => (
              <details className="rn-faq-item" key={i} open={i === 0}>
                <summary>{faq.question}</summary>
                <div className="rn-faq-answer">{faq.answer}</div>
              </details>
            ))}
          </div>
          <div className="rn-center rn-mt">
            <Link href="/faq/" className="rn-btn rn-btn-ghost">
              FAQ一覧を見る <Arrow />
            </Link>
          </div>
        </div>
      </section>

      {/* ============ NEWS ============ */}
      <section className="rn-section rn-section-soft">
        <div className="rn-container">
          <div className="rn-head rn-reveal">
            <span className="rn-kicker">Updates</span>
            <h2 className="rn-title">最新情報</h2>
          </div>
          <div className="rn-news rn-reveal">
            <div className="rn-news-item">
              <span className="rn-news-date">2026-05-20</span>
              <div className="rn-news-title">
                <Link href="/guide/">ETIAS完全ガイドを公開しました</Link>
              </div>
            </div>
            <div className="rn-news-item">
              <span className="rn-news-date">2026-05-20</span>
              <div className="rn-news-title">
                <Link href="/fee/">ETIAS申請料20ユーロの詳細ページを追加</Link>
              </div>
            </div>
            <div className="rn-news-item">
              <span className="rn-news-date">2026-05-20</span>
              <div className="rn-news-title">
                <Link href="/countries/">シェンゲン協定30か国の対象国一覧を公開</Link>
              </div>
            </div>
            <div className="rn-news-item">
              <span className="rn-news-date">2026-05-20</span>
              <div className="rn-news-title">
                <Link href="/comparison/">ETIAS・ESTA・K-ETA徹底比較ページを追加</Link>
              </div>
            </div>
            <div className="rn-news-item">
              <span className="rn-news-date">2026-05-20</span>
              <div className="rn-news-title">
                <Link href="/france/">フランス、イタリア、スペインなど国別ガイドを公開</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ CTA ============ */}
      <section className="rn-cta">
        <div className="rn-container rn-reveal">
          <h2>ETIASの準備を始めましょう</h2>
          <p>
            2026年Q4の運用開始に向けて、今から申請に必要な情報を確認しておきましょう。
            パスポートの有効期限や渡航計画の確認がスムーズな申請への第一歩です。
          </p>
          <Link href="/guide/" className="rn-btn rn-btn-primary">
            ETIAS完全ガイドを読む <Arrow />
          </Link>
        </div>
      </section>
    </div>
  );
}
