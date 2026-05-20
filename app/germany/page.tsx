import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../components/Breadcrumb";
import FaqAccordion from "../components/FaqAccordion";

export const metadata: Metadata = {
  title: "ドイツ渡航のETIAS申請ガイド｜ビジネス出張にも対応",
  description:
    "ドイツ渡航に必要なETIAS申請を日本人旅行者・ビジネスパーソン向けに解説。フランクフルト、ミュンヘン、ベルリンなど主要都市の情報をまとめました。",
  alternates: { canonical: "https://etias-application-desk.com/germany/" },
  openGraph: {
    title: "ドイツ渡航のETIAS申請ガイド｜ビジネス出張にも対応",
    description: "ドイツ渡航に必要なETIAS申請を日本人旅行者向けに解説。",
    url: "https://etias-application-desk.com/germany/",
    type: "article", locale: "ja_JP", siteName: "ETIAS Application Desk",
  },
};

const faqs = [
  { question: "ドイツへのビジネス出張にETIASは必要ですか？", answer: "はい、商談、会議、展示会参加などビジネス目的の短期渡航（90日以内）にもETIASが必要です。ETIASの申請フォームで渡航目的に「ビジネス」を選択してください。現地で報酬を受ける就労の場合は別途就労ビザが必要です。" },
  { question: "フランクフルト空港での乗り継ぎにETIASは必要ですか？", answer: "フランクフルト空港で入国審査を通過する乗り継ぎの場合はETIASが必要です。シェンゲン圏外から到着してシェンゲン圏内の別の都市へ乗り継ぐ場合、フランクフルトで入国審査を受けるため、ETIASを事前に取得しておく必要があります。" },
  { question: "ドイツでの展示会参加に追加のビザは必要ですか？", answer: "90日以内の展示会参加であればETIASのみで十分です。ブースの設営・撤去作業も短期ビジネス活動として認められます。ただし、展示会場でのデモンストレーションが報酬を伴う労働に該当する場合は別途確認が必要です。" },
  { question: "ドイツからオーストリアへの移動に追加手続きは必要ですか？", answer: "いいえ、ドイツとオーストリアは両方ともシェンゲン圏内のため、国境での入国審査はありません。鉄道や車で自由に移動でき、追加のETIAS申請も不要です。" },
  { question: "ミュンヘンのオクトーバーフェストに行くにもETIASは必要ですか？", answer: "はい、オクトーバーフェストへの参加を含め、ドイツに入国するにはETIASが必要です。大規模イベント期間中は空港の混雑が予想されるため、早めにETIASを申請しておきましょう。" },
];

export default function GermanyPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "Article", headline: "ドイツ渡航のETIAS申請ガイド｜ビジネス出張にも対応", datePublished: "2026-05-20", dateModified: "2026-05-20", author: { "@type": "Organization", name: "ETIAS Application Desk" }, publisher: { "@type": "Organization", name: "ETIAS Application Desk" }, description: "ドイツ渡航のETIAS申請ガイド。", mainEntityOfPage: "https://etias-application-desk.com/germany/" }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.question, acceptedAnswer: { "@type": "Answer", text: f.answer } })) }) }} />
      <Breadcrumb items={[{ name: "対象国一覧", href: "/countries/" }, { name: "ドイツ" }]} />
      <section className="svc-hero">
        <div className="container">
          <h1>ドイツ渡航のETIAS申請ガイド<br />ビジネス出張にも対応</h1>
          <div className="svc-hero-meta"><span>公開日: 2026年5月20日</span><span>更新日: 2026年5月20日</span></div>
        </div>
      </section>
      <article className="svc-article">
        <nav className="svc-toc">
          <div className="svc-toc-title">目次</div>
          <ol>
            <li><a href="#overview">ドイツとETIAS</a></li>
            <li><a href="#japan-germany">日独間の渡航状況</a></li>
            <li><a href="#airports">ドイツの主要空港</a></li>
            <li><a href="#business">ビジネス渡航ガイド</a></li>
            <li><a href="#frankfurt">フランクフルト</a></li>
            <li><a href="#munich">ミュンヘン</a></li>
            <li><a href="#berlin">ベルリン</a></li>
            <li><a href="#other-cities">その他の主要都市</a></li>
            <li><a href="#multi-country">ドイツからの周遊旅行</a></li>
            <li><a href="#tips">ドイツ渡航の実践的アドバイス</a></li>
            <li><a href="#faq">よくある質問</a></li>
          </ol>
        </nav>

        <h2 id="overview">ドイツとETIAS</h2>
        <p>ドイツはシェンゲン協定加盟国であり、ETIAS制度の運用開始後は日本人のドイツ渡航にETIASの事前取得が必要です。ドイツは日本にとってヨーロッパ最大の貿易相手国であり、ビジネス渡航が非常に活発です。フランクフルトとミュンヘンは日本からの直行便が就航するヨーロッパのハブ空港として、多くの日本人が利用しています。</p>
        <p>観光面でも、ノイシュヴァンシュタイン城、ロマンチック街道、ベルリンの壁跡、ミュンヘンのオクトーバーフェストなど魅力的な目的地が多数あります。ETIASは1つで30か国に渡航可能、申請料20ユーロ、有効期間3年間です。</p>

        <h2 id="japan-germany">日独間の渡航状況</h2>
        <h3>直行便</h3>
        <p>日本からドイツへは複数の直行便が運航されています。フライト時間は約11〜12時間です。</p>
        <ul>
          <li>ルフトハンザ航空: 羽田/成田 → フランクフルト、ミュンヘン（毎日運航）</li>
          <li>全日本空輸（ANA）: 羽田 → フランクフルト、ミュンヘン</li>
          <li>日本航空（JAL）: 羽田 → フランクフルト（コードシェア含む）</li>
        </ul>
        <p>フランクフルト空港はヨーロッパ最大級のハブ空港であり、ドイツ国内だけでなくヨーロッパ各地への乗り継ぎにも利用されます。フランクフルト空港経由でヨーロッパに入る場合、最初の入国先はドイツとなります。</p>

        <h3>渡航目的の内訳</h3>
        <p>ドイツへの日本人渡航者の特徴として、ビジネス渡航の割合が他のヨーロッパ諸国と比較して高い点が挙げられます。</p>
        <ul>
          <li>ビジネス: 自動車産業、機械工業、化学分野の商談・出張</li>
          <li>展示会: ハノーバーメッセ、IFA、フランクフルトモーターショーなど</li>
          <li>観光: 古城巡り、クリスマスマーケット、ビール祭り</li>
          <li>音楽: バイロイト音楽祭、ベルリン・フィル</li>
        </ul>

        <h2 id="airports">ドイツの主要空港</h2>
        <table>
          <thead><tr><th>空港名</th><th>コード</th><th>特徴</th></tr></thead>
          <tbody>
            <tr><td>フランクフルト空港</td><td>FRA</td><td>ヨーロッパ最大級のハブ空港。日本からの直行便多数</td></tr>
            <tr><td>ミュンヘン空港</td><td>MUC</td><td>南ドイツの玄関口。ルフトハンザの第2ハブ</td></tr>
            <tr><td>ベルリン・ブランデンブルク空港</td><td>BER</td><td>首都ベルリンの新空港（2020年開港）</td></tr>
            <tr><td>デュッセルドルフ空港</td><td>DUS</td><td>日本企業が多い地域。日本人コミュニティが大きい</td></tr>
          </tbody>
        </table>

        <h2 id="business">ビジネス渡航ガイド</h2>
        <p>ドイツへのビジネス出張は日本企業にとって頻度の高い渡航です。ETIASはビジネス渡航にも必要であり、出張経費として処理できます。</p>
        <h3>ビジネス渡航でのETIAS活用ポイント</h3>
        <ul>
          <li>ETIASは3年間有効: 頻繁にドイツ出張がある方は一度の申請で3年間使える</li>
          <li>申請料は経費処理可能: 20ユーロの領収書（確認メール）を保管</li>
          <li>30か国共通: ドイツ以外のヨーロッパ出張にもそのまま使える</li>
          <li>渡航の72時間前までに申請を推奨: 出張スケジュールに合わせて早めに申請</li>
        </ul>
        <h3>主要な国際展示会</h3>
        <table>
          <thead><tr><th>展示会名</th><th>開催地</th><th>分野</th></tr></thead>
          <tbody>
            <tr><td>ハノーバーメッセ</td><td>ハノーバー</td><td>産業技術</td></tr>
            <tr><td>IFA</td><td>ベルリン</td><td>家電・エレクトロニクス</td></tr>
            <tr><td>フランクフルトモーターショー（IAA）</td><td>フランクフルト/ミュンヘン</td><td>自動車</td></tr>
            <tr><td>CeBIT</td><td>ハノーバー</td><td>IT・テクノロジー</td></tr>
            <tr><td>アンビエンテ</td><td>フランクフルト</td><td>消費財・ライフスタイル</td></tr>
          </tbody>
        </table>

        <h2 id="frankfurt">フランクフルト</h2>
        <p>フランクフルトはドイツの金融の中心地であり、欧州中央銀行（ECB）の本拠地です。日本の金融機関や企業のヨーロッパ拠点も多く、ビジネス渡航の需要が高い都市です。</p>
        <ul>
          <li>レーマー広場: フランクフルト旧市街の中心</li>
          <li>マインタワー展望台: フランクフルトのスカイラインを一望</li>
          <li>ゼンケンベルク自然博物館: ヨーロッパ最大級の自然史博物館</li>
          <li>りんご酒横丁（ザクセンハウゼン）: 地元グルメを楽しめるエリア</li>
        </ul>

        <h2 id="munich">ミュンヘン</h2>
        <p>ミュンヘンはバイエルン州の州都で、伝統的なバイエルン文化と最先端の産業が共存する都市です。BMW、シーメンスなどの本社があり、日本企業との取引も活発です。</p>
        <ul>
          <li>マリエン広場と新市庁舎: からくり時計が有名</li>
          <li>ノイシュヴァンシュタイン城: ミュンヘンから日帰り可能（約2時間）</li>
          <li>オクトーバーフェスト: 世界最大のビール祭り（9月下旬〜10月上旬）</li>
          <li>BMW博物館: 自動車ファン必見</li>
          <li>ドイツ博物館: 世界最大級の科学技術博物館</li>
        </ul>

        <h2 id="berlin">ベルリン</h2>
        <p>ベルリンはドイツの首都であり、冷戦時代の歴史遺産と現代のアート・カルチャーが融合した魅力的な都市です。</p>
        <ul>
          <li>ブランデンブルク門: ベルリンのシンボル</li>
          <li>ベルリンの壁記念碑: 東西分断の歴史を学べる</li>
          <li>ペルガモン博物館: 博物館島の中核</li>
          <li>国会議事堂（ライヒスターク）: ガラスドームから市内を一望</li>
        </ul>

        <h2 id="other-cities">その他の主要都市</h2>
        <ul>
          <li>デュッセルドルフ: 日本企業が約600社進出する日本人コミュニティの中心。インマーマン通りには日本食レストランや日本の食品店が軒を連ねる</li>
          <li>ハンブルク: ドイツ第2の都市。港町としてヨーロッパ有数の物流拠点</li>
          <li>ケルン: ケルン大聖堂（世界遺産）が有名。カーニバルも盛大</li>
          <li>ハイデルベルク: ドイツ最古の大学がある古都。ロマンチックな城下町</li>
        </ul>

        <h2 id="multi-country">ドイツからの周遊旅行</h2>
        <ul>
          <li>フランクフルト → パリ（フランス）: ICEと TGVで約3時間50分</li>
          <li>ミュンヘン → ザルツブルク（オーストリア）: 鉄道で約1時間30分</li>
          <li>ミュンヘン → チューリッヒ（スイス）: 鉄道で約3時間30分</li>
          <li>ベルリン → プラハ（チェコ）: 鉄道で約4時間30分</li>
          <li>デュッセルドルフ → アムステルダム（オランダ）: ICEで約2時間30分</li>
        </ul>
        <p>すべてシェンゲン圏内のため、ETIASは1つで十分です。ドイツの鉄道網は非常に充実しており、周辺国へのアクセスも便利です。</p>

        <h2 id="tips">ドイツ渡航の実践的アドバイス</h2>
        <h3>ビジネスマナー</h3>
        <p>ドイツのビジネス文化は時間厳守、効率重視が特徴です。約束の時間に遅れることは大きなマイナスになります。名刺交換は日本ほど儀式的ではありませんが、用意しておくと良いでしょう。</p>
        <h3>現金社会</h3>
        <p>ドイツは先進国の中では現金決済の比率が比較的高い国です。レストランや小規模店舗ではクレジットカードが使えない場合もあるため、ある程度のユーロ現金を持っておくことをお勧めします。</p>
        <h3>公共交通機関</h3>
        <p>ドイツの鉄道（DB: Deutsche Bahn）は都市間移動に便利です。ICE（超特急）、IC（特急）、RE（快速）などの種類があります。チケットは事前にオンライン予約すると割引があります。各都市内はUバーン（地下鉄）、Sバーン（近郊鉄道）、トラムが整備されています。</p>
        <h3>治安</h3>
        <p>ドイツは比較的治安の良い国ですが、大都市の駅周辺では注意が必要です。特にフランクフルト中央駅周辺は夜間の一人歩きを避けた方が良いでしょう。</p>

        <h2 id="faq">よくある質問</h2>
        <FaqAccordion items={faqs} />

        <div className="related-links">
          <h3>関連ページ</h3>
          <ul>
            <li><Link href="/guide/">ETIAS完全ガイド</Link></li>
            <li><Link href="/flow/">ETIAS申請方法</Link></li>
            <li><Link href="/countries/">ETIAS対象国一覧</Link></li>
            <li><Link href="/france/">フランス渡航ガイド</Link></li>
            <li><Link href="/italy/">イタリア渡航ガイド</Link></li>
            <li><Link href="/switzerland/">スイス渡航ガイド</Link></li>
          </ul>
        </div>
        <div className="text-center mt-4">
          <Link href="/flow/" className="btn btn-primary btn-lg">ETIAS申請手順を確認する</Link>
        </div>
      </article>
      <section className="cta-section">
        <div className="container">
          <h2>ドイツ出張・旅行の準備を始めましょう</h2>
          <p>ビジネス出張にもETIASが必要です。申請方法を確認して、スムーズな渡航を実現しましょう。</p>
          <Link href="/guide/" className="btn btn-primary btn-lg">ETIAS完全ガイドを読む</Link>
        </div>
      </section>
    </>
  );
}
