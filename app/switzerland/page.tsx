import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../components/Breadcrumb";
import FaqAccordion from "../components/FaqAccordion";

export const metadata: Metadata = {
  title: "スイス渡航のETIAS申請ガイド｜非EU加盟国の注意点",
  description:
    "スイス渡航に必要なETIAS申請を日本人旅行者向けに解説。EU非加盟ながらシェンゲン協定に参加するスイスの独自事情と、チューリッヒ・ジュネーブなどの情報をまとめました。",
  alternates: { canonical: "https://etias-application-desk.com/switzerland/" },
  openGraph: {
    title: "スイス渡航のETIAS申請ガイド｜非EU加盟国の注意点",
    description: "スイス渡航に必要なETIAS申請を日本人旅行者向けに解説。",
    url: "https://etias-application-desk.com/switzerland/",
    type: "article", locale: "ja_JP", siteName: "ETIAS Application Desk",
  },
};

const faqs = [
  { question: "スイスはEU加盟国ではないのにETIASが必要ですか？", answer: "はい、スイスはEUには加盟していませんが、シェンゲン協定には参加しています。そのため、ETIAS制度の対象国に含まれており、日本人がスイスに渡航する際にはETIASの取得が必要です。" },
  { question: "スイスの通貨はユーロではないですが、ETIASの申請料はユーロですか？", answer: "はい、ETIASの申請料は対象国に関わらず一律20ユーロです。スイスの通貨はスイスフランですが、ETIAS申請料はユーロ建てで請求されます。クレジットカードで支払う場合は自動的に円換算されます。" },
  { question: "スイスからフランスやドイツへの移動にETIASは追加で必要ですか？", answer: "いいえ、スイスもフランスもドイツもすべてシェンゲン圏内のため、一つのETIASで自由に移動できます。国境での入国審査もありません。" },
  { question: "スイスでのスキーやハイキングにもETIASは必要ですか？", answer: "はい、渡航目的を問わずスイスに入国するにはETIASが必要です。スキー、ハイキング、登山、観光などすべての短期滞在がETIASの対象です。" },
  { question: "ジュネーブの国際機関への渡航にETIASは使えますか？", answer: "短期の会議出席やビジネス訪問であればETIASで十分です。ただし、国際機関での勤務（就労）が目的の場合は、別途スイスの就労許可が必要になります。" },
];

export default function SwitzerlandPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "Article", headline: "スイス渡航のETIAS申請ガイド｜非EU加盟国の注意点", datePublished: "2026-05-20", dateModified: "2026-05-20", author: { "@type": "Organization", name: "ETIAS Application Desk" }, publisher: { "@type": "Organization", name: "ETIAS Application Desk" }, description: "スイス渡航のETIAS申請ガイド。", mainEntityOfPage: "https://etias-application-desk.com/switzerland/" }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.question, acceptedAnswer: { "@type": "Answer", text: f.answer } })) }) }} />
      <Breadcrumb items={[{ name: "対象国一覧", href: "/countries/" }, { name: "スイス" }]} />
      <section className="svc-hero svc-hero-switzerland">
        <div className="container">
          <h1>スイス渡航のETIAS申請ガイド<br />非EU加盟国の注意点</h1>
          <div className="svc-hero-meta"><span>公開日: 2026年5月20日</span><span>更新日: 2026年5月20日</span></div>
        </div>
      </section>
      <article className="svc-article">
        <nav className="svc-toc">
          <div className="svc-toc-title">目次</div>
          <ol>
            <li><a href="#overview">スイスとETIAS</a></li>
            <li><a href="#non-eu">非EU加盟国としてのスイスの立場</a></li>
            <li><a href="#japan-swiss">日瑞間の渡航状況</a></li>
            <li><a href="#airports">スイスの主要空港</a></li>
            <li><a href="#zurich">チューリッヒ</a></li>
            <li><a href="#geneva">ジュネーブ</a></li>
            <li><a href="#alps">アルプス観光</a></li>
            <li><a href="#currency">通貨と物価</a></li>
            <li><a href="#multi-country">スイスからの周遊旅行</a></li>
            <li><a href="#tips">スイス渡航の実践的アドバイス</a></li>
            <li><a href="#faq">よくある質問</a></li>
          </ol>
        </nav>

        <h2 id="overview">スイスとETIAS</h2>
        <p>スイスはシェンゲン協定加盟国であり、ETIAS制度の運用開始後は日本人旅行者のスイス渡航にETIASの事前取得が必要になります。スイスはアルプスの絶景、時計産業、チョコレート、チーズなどで知られる美しい国で、日本人旅行者にも根強い人気があります。</p>
        <p>特に注目すべきは、スイスがEU（欧州連合）には加盟していないにもかかわらず、シェンゲン協定には参加しているという点です。この特殊な立場は日本人旅行者にとって混乱しやすいポイントですが、ETIAS申請に関してはEU加盟のフランスやドイツと同じ扱いです。</p>
        <p>ETIASは1つでシェンゲン圏30か国すべてに渡航可能。申請料20ユーロ、有効期間3年間です。</p>

        <h2 id="non-eu">非EU加盟国としてのスイスの立場</h2>
        <p>スイスは国民投票によってEU加盟を見送っており、独自の中立政策を維持しています。しかし、人の自由な移動に関してはシェンゲン協定に参加することで、EU加盟国との間で国境検査なしの移動を実現しています。</p>
        <p>このため、以下のような特徴があります。</p>
        <ul>
          <li>ETIAS対象: シェンゲン協定参加国としてETIASの対象</li>
          <li>通貨: ユーロではなくスイスフラン（CHF）を使用</li>
          <li>EU法の適用: EU法は直接適用されないが、シェンゲン関連の規定は適用</li>
          <li>国境: フランス、ドイツ、イタリア、オーストリア、リヒテンシュタインと接し、国境検査なし</li>
        </ul>
        <div className="info-box">
          <div className="info-box-title">同様の立場の国</div>
          <p>スイスと同様に「EU非加盟・シェンゲン参加」の国は、ノルウェー、アイスランド、リヒテンシュタインの3か国があります。これらの国もすべてETIAS対象国です。</p>
        </div>

        <h2 id="japan-swiss">日瑞間の渡航状況</h2>
        <h3>直行便</h3>
        <ul>
          <li>スイス インターナショナル エアラインズ（SWISS）: 成田 → チューリッヒ（直行便）</li>
          <li>フランクフルト、パリ、アムステルダム経由: 各種ヨーロッパ系航空会社</li>
        </ul>
        <p>チューリッヒ空港は比較的コンパクトで、入国審査もスムーズです。EES導入後も大規模空港と比較して待ち時間は短めになる見込みです。</p>
        <h3>渡航目的</h3>
        <ul>
          <li>観光: アルプスの絶景、湖畔の都市、時計博物館</li>
          <li>ビジネス: 金融（チューリッヒ）、国際機関（ジュネーブ）、製薬（バーゼル）</li>
          <li>ハネムーン: ルツェルン、インターラーケン地域</li>
          <li>ウィンタースポーツ: ツェルマット、サンモリッツ、グリンデルワルト</li>
        </ul>

        <h2 id="airports">スイスの主要空港</h2>
        <table>
          <thead><tr><th>空港名</th><th>コード</th><th>特徴</th></tr></thead>
          <tbody>
            <tr><td>チューリッヒ空港</td><td>ZRH</td><td>スイス最大の国際空港。SWISSのハブ。日本からの直行便あり</td></tr>
            <tr><td>ジュネーブ空港</td><td>GVA</td><td>国際機関が集まるジュネーブの空港。フランスとの国境に位置</td></tr>
            <tr><td>バーゼル・ミュルーズ空港</td><td>BSL/MLH</td><td>スイス・フランス・ドイツの3か国国境に位置するユニークな空港</td></tr>
          </tbody>
        </table>
        <p>ジュネーブ空港にはフランス側の出口もあり、空港から直接フランスに入ることができます。シェンゲン圏内のため国境検査はありません。</p>

        <h2 id="zurich">チューリッヒ</h2>
        <p>チューリッヒはスイス最大の都市であり、世界有数の金融センターです。チューリッヒ湖畔の美しい景観と、旧市街の歴史的な街並みが魅力です。</p>
        <ul>
          <li>バーンホフ通り: 世界で最も高級なショッピングストリートの一つ</li>
          <li>チューリッヒ旧市街: 中世の面影を残す石畳の小路</li>
          <li>チューリッヒ美術館: 印象派やモダンアートの充実したコレクション</li>
          <li>リンデンホフの丘: チューリッヒ市街と湖を見渡せるビューポイント</li>
        </ul>

        <h2 id="geneva">ジュネーブ</h2>
        <p>ジュネーブは国際連合欧州本部、WHO（世界保健機関）、赤十字国際委員会など多くの国際機関が本部を置く国際都市です。レマン湖畔の美しい景観で知られています。</p>
        <ul>
          <li>レマン湖と大噴水（ジェッドー）: ジュネーブのシンボル</li>
          <li>国連欧州本部（パレ・デ・ナシオン）: ガイドツアーで見学可能</li>
          <li>旧市街とサン・ピエール大聖堂: 宗教改革の歴史を学べる</li>
          <li>CERN（欧州原子核研究機構）: 素粒子物理学の研究施設。見学ツアーあり</li>
        </ul>

        <h2 id="alps">アルプス観光</h2>
        <p>スイスの最大の観光資源はアルプスの壮大な山岳景観です。日本人旅行者にとって、スイスアルプスはヨーロッパ旅行のハイライトの一つです。</p>
        <h3>人気の山岳観光地</h3>
        <ul>
          <li>ツェルマット / マッターホルン: スイスを象徴する名峰。ゴルナーグラート展望台からの眺望が絶景</li>
          <li>ユングフラウ地域: ユングフラウヨッホ（トップ・オブ・ヨーロッパ）へは登山鉄道でアクセス。標高3,454m</li>
          <li>グリンデルワルト: アイガー北壁を間近に望む山岳リゾート</li>
          <li>サンモリッツ: 高級リゾート。冬季オリンピック開催地</li>
          <li>ルツェルン / ピラトゥス山: ルツェルン湖畔の美しい街と世界一急勾配の登山鉄道</li>
        </ul>
        <h3>スイストラベルパス</h3>
        <p>スイスの鉄道、バス、湖船が乗り放題になるスイストラベルパスは、山岳観光に非常に便利です。多くの登山鉄道やロープウェイにも割引が適用されます。日本で事前に購入できます。</p>

        <h2 id="currency">通貨と物価</h2>
        <p>スイスの通貨はスイスフラン（CHF）です。ユーロ圏ではないため、フランスやドイツから入国するとレートの異なる通貨を使うことになります。</p>
        <div className="warning-box">
          <div className="warning-box-title">スイスの物価について</div>
          <p>スイスはヨーロッパの中でも非常に物価が高い国です。レストランでの食事は日本の2〜3倍程度を見込んでおく必要があります。スーパーマーケット（Coop、Migros）を活用するなど、食費を抑える工夫も重要です。</p>
        </div>
        <table>
          <thead><tr><th>項目</th><th>スイスの目安金額</th><th>日本円換算（目安）</th></tr></thead>
          <tbody>
            <tr><td>レストランでの食事</td><td>25〜50 CHF</td><td>4,000〜8,000円</td></tr>
            <tr><td>コーヒー1杯</td><td>4〜6 CHF</td><td>640〜960円</td></tr>
            <tr><td>ホテル（中級）</td><td>150〜300 CHF/泊</td><td>24,000〜48,000円</td></tr>
            <tr><td>市内交通（1回券）</td><td>3〜5 CHF</td><td>480〜800円</td></tr>
          </tbody>
        </table>
        <p>ただし、観光地のレストランでも水道水（Leitungswasser / Hahnenwasser）を無料で提供してくれることがあります。遠慮なくリクエストしましょう。</p>

        <h2 id="multi-country">スイスからの周遊旅行</h2>
        <p>スイスは5か国（フランス、ドイツ、オーストリア、イタリア、リヒテンシュタイン）と国境を接しており、周遊旅行の拠点として最適です。</p>
        <ul>
          <li>チューリッヒ → ミュンヘン（ドイツ）: 鉄道で約3時間30分</li>
          <li>ジュネーブ → リヨン（フランス）: TGVで約2時間</li>
          <li>ルガーノ → ミラノ（イタリア）: 鉄道で約1時間20分</li>
          <li>チューリッヒ → ファドゥーツ（リヒテンシュタイン）: バスと鉄道で約2時間</li>
          <li>バーゼル → ストラスブール（フランス）: 鉄道で約1時間30分</li>
        </ul>
        <p>すべてシェンゲン圏内のため、ETIASは1つで十分です。</p>

        <h2 id="tips">スイス渡航の実践的アドバイス</h2>
        <h3>言語</h3>
        <p>スイスには4つの公用語があります（ドイツ語、フランス語、イタリア語、ロマンシュ語）。地域によって使用言語が異なります。チューリッヒはドイツ語圏、ジュネーブはフランス語圏、ルガーノはイタリア語圏です。観光地では英語も広く通じます。</p>
        <h3>チップ</h3>
        <p>スイスではサービス料が料金に含まれていることが多いため、チップは必須ではありません。良いサービスを受けた場合に端数を切り上げる程度で十分です。</p>
        <h3>公共交通機関</h3>
        <p>スイスの公共交通機関は世界一正確と言われるほど時間に正確です。鉄道、バス、湖船が統合的に運行されており、乗り換えもスムーズです。SBB（スイス連邦鉄道）のアプリを事前にダウンロードしておくと便利です。</p>
        <h3>日曜日の営業</h3>
        <p>スイスでは日曜日にほとんどの商店が閉まります。食料品の買い出しは土曜日までに済ませておきましょう。駅構内のショップや一部のコンビニタイプの店舗は日曜日も営業しています。</p>

        <h2 id="faq">よくある質問</h2>
        <FaqAccordion items={faqs} />

        <div className="related-links">
          <h3>関連ページ</h3>
          <ul>
            <li><Link href="/guide/">ETIAS完全ガイド</Link></li>
            <li><Link href="/flow/">ETIAS申請方法</Link></li>
            <li><Link href="/countries/">ETIAS対象国一覧</Link></li>
            <li><Link href="/germany/">ドイツ渡航ガイド</Link></li>
            <li><Link href="/france/">フランス渡航ガイド</Link></li>
            <li><Link href="/italy/">イタリア渡航ガイド</Link></li>
          </ul>
        </div>
        <div className="text-center mt-4">
          <Link href="/flow/" className="btn btn-primary btn-lg">ETIAS申請手順を確認する</Link>
        </div>
      </article>
      <section className="cta-section">
        <div className="container">
          <h2>スイス旅行の準備を始めましょう</h2>
          <p>アルプスの絶景を楽しむにもETIASが必要です。申請方法を確認しておきましょう。</p>
          <Link href="/guide/" className="btn btn-primary btn-lg">ETIAS完全ガイドを読む</Link>
        </div>
      </section>
    </>
  );
}
