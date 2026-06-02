import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../components/Breadcrumb";
import FaqAccordion from "../components/FaqAccordion";

export const metadata: Metadata = {
  title: "スペイン渡航のETIAS申請ガイド｜バルセロナ・マドリード",
  description:
    "スペイン渡航に必要なETIAS申請を日本人旅行者向けに解説。バルセロナ、マドリード、アンダルシアなど人気都市の情報と入国時の注意点をまとめました。",
  alternates: { canonical: "https://etias-application-desk.com/spain/" },
  openGraph: {
    title: "スペイン渡航のETIAS申請ガイド｜バルセロナ・マドリード",
    description: "スペイン渡航に必要なETIAS申請を日本人旅行者向けに解説。",
    url: "https://etias-application-desk.com/spain/",
    type: "article", locale: "ja_JP", siteName: "ETIAS Application Desk",
  },
};

const faqs = [
  { question: "スペインへの渡航にETIASは必要ですか？", answer: "はい、スペインはシェンゲン協定加盟国のため、ETIAS運用開始後はETIASの事前取得が必要です。バルセロナ、マドリードなどどの都市に渡航する場合も同様です。" },
  { question: "カナリア諸島やバレアレス諸島もETIAS対象ですか？", answer: "はい、カナリア諸島（テネリフェ島など）やバレアレス諸島（マヨルカ島、イビサ島など）はスペイン領のためシェンゲン圏に含まれ、ETIASが必要です。" },
  { question: "スペインからポルトガルへの移動に追加手続きは必要ですか？", answer: "いいえ、スペインとポルトガルは両方ともシェンゲン圏内のため、国境での入国審査はありません。鉄道やバスで自由に移動できます。ETIASも追加不要です。" },
  { question: "フラメンコ鑑賞やサッカー観戦にもETIASが必要ですか？", answer: "はい、渡航目的を問わずスペインに入国する際にはETIASが必要です。観光、スポーツ観戦、文化体験などすべての短期滞在がETIASの対象です。" },
  { question: "サンティアゴ巡礼路をフランスから歩いて入国する場合は？", answer: "フランスからスペインへの陸路移動（巡礼路を含む）は、両国ともシェンゲン圏内のため国境での入国審査はありません。ただし、最初にシェンゲン圏に入国する際にETIASが必要です。" },
];

export default function SpainPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "Article", headline: "スペイン渡航のETIAS申請ガイド｜バルセロナ・マドリード", datePublished: "2026-05-20", dateModified: "2026-05-20", author: { "@type": "Organization", name: "ETIAS Application Desk" }, publisher: { "@type": "Organization", name: "ETIAS Application Desk" }, description: "スペイン渡航に必要なETIAS申請ガイド。", mainEntityOfPage: "https://etias-application-desk.com/spain/" }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.question, acceptedAnswer: { "@type": "Answer", text: f.answer } })) }) }} />
      <Breadcrumb items={[{ name: "対象国一覧", href: "/countries/" }, { name: "スペイン" }]} />
      <section className="svc-hero svc-hero-spain">
        <div className="container">
          <h1>スペイン渡航のETIAS申請ガイド<br />バルセロナ・マドリード</h1>
          <div className="svc-hero-meta"><span>公開日: 2026年5月20日</span><span>更新日: 2026年5月20日</span></div>
        </div>
      </section>
      <article className="svc-article">
        <nav className="svc-toc">
          <div className="svc-toc-title">目次</div>
          <ol>
            <li><a href="#overview">スペインとETIAS</a></li>
            <li><a href="#japan-spain">日西間の渡航状況</a></li>
            <li><a href="#airports">スペインの主要空港</a></li>
            <li><a href="#barcelona">バルセロナ旅行</a></li>
            <li><a href="#madrid">マドリード旅行</a></li>
            <li><a href="#andalusia">アンダルシア地方</a></li>
            <li><a href="#islands">島嶼部（バレアレス・カナリア）</a></li>
            <li><a href="#multi-country">スペインからの周遊旅行</a></li>
            <li><a href="#tips">スペイン渡航の実践的アドバイス</a></li>
            <li><a href="#faq">よくある質問</a></li>
          </ol>
        </nav>

        <h2 id="overview">スペインとETIAS</h2>
        <p>スペインはシェンゲン協定加盟国であり、ETIAS制度の運用開始後は日本人旅行者のスペイン渡航にETIASの事前取得が必要になります。スペインは温暖な気候、豊かな食文化、フラメンコやサッカーに代表される活気ある文化で、日本人旅行者に高い人気を誇ります。</p>
        <p>特にバルセロナのサグラダ・ファミリアはガウディ建築の最高傑作として日本人に広く知られており、年間を通じて多くの日本人が訪れています。マドリードのプラド美術館、アンダルシア地方のアルハンブラ宮殿なども見逃せないスポットです。</p>
        <p>ETIASは1つでスペインを含む30か国に渡航可能です。申請料20ユーロ、有効期間3年間で、フランスやポルトガルとの周遊旅行も追加手続きなしで楽しめます。</p>

        <h2 id="japan-spain">日西間の渡航状況</h2>
        <h3>フライト状況</h3>
        <p>日本からスペインへの直行便は限定的ですが、ヨーロッパの主要空港を経由してアクセスできます。</p>
        <ul>
          <li>イベリア航空: 成田 → マドリード（直行便が運航されている場合あり）</li>
          <li>フランクフルト、パリ、アムステルダム経由: ルフトハンザ、エールフランス、KLM等</li>
          <li>イスタンブール経由: ターキッシュエアラインズ（コストパフォーマンスが高い）</li>
        </ul>
        <p>経由便を利用する場合、最初に入国するシェンゲン圏の国（乗り継ぎ空港がある国）をETIAS申請時に申告します。たとえばパリ経由でバルセロナに向かう場合、最初の入国先はフランスです。</p>

        <h2 id="airports">スペインの主要空港</h2>
        <table>
          <thead><tr><th>空港名</th><th>コード</th><th>特徴</th></tr></thead>
          <tbody>
            <tr><td>マドリード・バラハス空港</td><td>MAD</td><td>スペイン最大の国際空港。南米路線も豊富</td></tr>
            <tr><td>バルセロナ・エル・プラット空港</td><td>BCN</td><td>カタルーニャ地方の玄関口。日本からの旅行者に人気</td></tr>
            <tr><td>マラガ・コスタ・デル・ソル空港</td><td>AGP</td><td>アンダルシア地方の入口。リゾート客が多い</td></tr>
            <tr><td>パルマ・デ・マヨルカ空港</td><td>PMI</td><td>バレアレス諸島マヨルカ島の空港</td></tr>
          </tbody>
        </table>

        <h2 id="barcelona">バルセロナ旅行</h2>
        <p>バルセロナは地中海沿岸のカタルーニャ地方の中心都市で、アントニ・ガウディの建築作品群が世界的に有名です。日本人旅行者の間ではスペインで最も人気のある都市です。</p>
        <h3>主要観光スポット</h3>
        <ul>
          <li>サグラダ・ファミリア: ガウディの未完の最高傑作。事前予約必須</li>
          <li>グエル公園: モザイクタイルで彩られた庭園</li>
          <li>カサ・バトリョ、カサ・ミラ: ガウディの集合住宅建築</li>
          <li>ランブラス通り: バルセロナのメインストリート</li>
          <li>ゴシック地区: 中世の面影を残す旧市街</li>
          <li>カンプ・ノウ: FCバルセロナのホームスタジアム</li>
        </ul>
        <p>バルセロナはスリの被害が多い都市としても知られています。ランブラス通りや地下鉄内では特に注意し、パスポートや貴重品の管理に気をつけてください。</p>

        <h2 id="madrid">マドリード旅行</h2>
        <p>マドリードはスペインの首都であり、政治・経済の中心地です。世界三大美術館の一つに数えられるプラド美術館をはじめ、ソフィア王妃芸術センター、王宮など見どころが豊富です。</p>
        <ul>
          <li>プラド美術館: ベラスケス、ゴヤ、エル・グレコの傑作が集結</li>
          <li>ソフィア王妃芸術センター: ピカソの「ゲルニカ」を所蔵</li>
          <li>マドリード王宮: ヨーロッパ最大級の王宮</li>
          <li>レティーロ公園: 市民の憩いの場</li>
          <li>サンティアゴ・ベルナベウ: レアル・マドリードのスタジアム</li>
        </ul>

        <h2 id="andalusia">アンダルシア地方</h2>
        <p>スペイン南部のアンダルシア地方は、イスラム文化とキリスト教文化が融合した独特の建築や文化が魅力的なエリアです。</p>
        <ul>
          <li>グラナダ（アルハンブラ宮殿）: イスラム建築の最高傑作。事前予約必須</li>
          <li>セビリア: フラメンコの本場。大聖堂とヒラルダの塔</li>
          <li>コルドバ: メスキータ（モスク大聖堂）の美しいアーチ</li>
          <li>ロンダ: 断崖絶壁に建つ白い村</li>
        </ul>
        <p>アンダルシア地方は夏場に非常に暑くなります（40度を超えることも）。熱中症対策を忘れずに。6月や9月〜10月が比較的過ごしやすい時期です。</p>

        <h2 id="islands">島嶼部（バレアレス・カナリア）</h2>
        <p>スペインにはバレアレス諸島（地中海）とカナリア諸島（大西洋）という2つの島嶼群があり、いずれもシェンゲン圏内です。</p>
        <ul>
          <li>マヨルカ島: バレアレス諸島最大の島。リゾートホテルが充実</li>
          <li>イビサ島: クラブカルチャーで世界的に有名</li>
          <li>テネリフェ島: カナリア諸島最大の島。常春の気候</li>
        </ul>
        <p>これらの島々はスペイン国内線でアクセスでき、シェンゲン圏内の移動のため追加の入国手続きは不要です。</p>

        <h2 id="multi-country">スペインからの周遊旅行</h2>
        <ul>
          <li>バルセロナ → 南仏（ニース、マルセイユ）: 鉄道またはバスで移動可能</li>
          <li>マドリード → リスボン（ポルトガル）: 夜行列車または飛行機で約1時間</li>
          <li>バルセロナ → パリ: TGVで約6時間30分</li>
          <li>ビルバオ → サン・セバスティアン → ビアリッツ（フランス）: バスク地方周遊</li>
        </ul>
        <p>すべてシェンゲン圏内のため、ETIASは1つで十分です。</p>

        <h2 id="tips">スペイン渡航の実践的アドバイス</h2>
        <h3>食事の時間帯</h3>
        <p>スペインの食事時間は日本とかなり異なります。ランチは14時〜16時、ディナーは21時〜23時が一般的です。日本人の感覚では遅すぎると感じるかもしれませんが、これがスペインの生活リズムです。</p>
        <h3>シエスタ</h3>
        <p>伝統的な昼休み（シエスタ）の習慣により、14時〜17時頃に閉店する商店があります。特に地方では顕著です。観光スケジュールを立てる際にはこの時間帯を考慮してください。</p>
        <h3>言語</h3>
        <p>公用語はスペイン語（カスティーリャ語）です。カタルーニャ地方ではカタルーニャ語、バスク地方ではバスク語も使われます。観光地では英語が通じる場所も多いですが、基本的なスペイン語のフレーズを覚えておくと便利です。</p>
        <h3>治安</h3>
        <p>バルセロナやマドリードではスリの被害報告が多くあります。混雑した場所（地下鉄、観光地、ランブラス通り等）では貴重品の管理に十分注意してください。</p>

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
            <li><Link href="/germany/">ドイツ渡航ガイド</Link></li>
          </ul>
        </div>
        <div className="text-center mt-4">
          <Link href="/flow/" className="btn btn-primary btn-lg">ETIAS申請手順を確認する</Link>
        </div>
      </article>
      <section className="cta-section">
        <div className="container">
          <h2>スペイン旅行の準備を始めましょう</h2>
          <p>バルセロナのサグラダ・ファミリアを訪れるにもETIASが必要です。今すぐ申請方法を確認しましょう。</p>
          <Link href="/guide/" className="btn btn-primary btn-lg">ETIAS完全ガイドを読む</Link>
        </div>
      </section>
    </>
  );
}
