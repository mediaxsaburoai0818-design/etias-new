import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../components/Breadcrumb";
import FaqAccordion from "../components/FaqAccordion";

export const metadata: Metadata = {
  title: "フランス渡航のETIAS申請ガイド｜パリ旅行の準備",
  description:
    "フランス渡航に必要なETIAS申請を日本人旅行者向けに解説。パリ、プロヴァンス、コートダジュールなど人気観光地の情報と、入国審査の注意点をまとめました。",
  alternates: { canonical: "https://etias-application-desk.com/france/" },
  openGraph: {
    title: "フランス渡航のETIAS申請ガイド｜パリ旅行の準備",
    description: "フランス渡航に必要なETIAS申請を日本人旅行者向けに解説。",
    url: "https://etias-application-desk.com/france/",
    type: "article",
    locale: "ja_JP",
    siteName: "ETIAS Application Desk",
  },
};

const faqs = [
  {
    question: "フランスへの渡航にETIASは必要ですか？",
    answer: "はい、フランスはシェンゲン協定加盟国のため、ETIAS制度の運用開始後はETIASの事前取得が必要です。観光、ビジネス出張、トランジットなど渡航目的を問わず、90日以内の短期滞在にはETIASが必要になります。",
  },
  {
    question: "パリでの乗り継ぎだけでもETIASは必要ですか？",
    answer: "シャルル・ド・ゴール空港での乗り継ぎで入国審査を通過する場合はETIASが必要です。ただし、国際線エリア内のみで乗り継ぎが完結する場合は不要となるケースもあります。乗り継ぎ経路を事前に確認しましょう。",
  },
  {
    question: "フランスのETIASでイタリアやスペインにも行けますか？",
    answer: "はい、ETIASは1つでシェンゲン圏30か国すべてに渡航できます。フランスのETIASという区分はなく、フランスを最初の入国先として申請したETIASでイタリアやスペインにもそのまま渡航可能です。",
  },
  {
    question: "フランスでのワーキングホリデーにETIASは使えますか？",
    answer: "いいえ、ワーキングホリデーは90日を超える滞在が一般的であり、就労を伴うため、ETIASではなくワーキングホリデービザが必要です。フランスは日本とのワーキングホリデー協定があるため、在日フランス大使館でビザを申請してください。",
  },
  {
    question: "フランスの海外領土（タヒチなど）にもETIASは必要ですか？",
    answer: "フランスの海外領土（フランス領ポリネシア、ニューカレドニアなど）はシェンゲン圏に含まれないため、ETIASの対象外です。これらの地域への渡航には別の入国規定が適用されます。",
  },
];

export default function FrancePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "フランス渡航のETIAS申請ガイド｜パリ旅行の準備",
            datePublished: "2026-05-20",
            dateModified: "2026-05-20",
            author: { "@type": "Organization", name: "ETIAS Application Desk" },
            publisher: { "@type": "Organization", name: "ETIAS Application Desk" },
            description: "フランス渡航に必要なETIAS申請を日本人旅行者向けに解説。",
            mainEntityOfPage: "https://etias-application-desk.com/france/",
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((faq) => ({
              "@type": "Question",
              name: faq.question,
              acceptedAnswer: { "@type": "Answer", text: faq.answer },
            })),
          }),
        }}
      />
      <Breadcrumb items={[{ name: "対象国一覧", href: "/countries/" }, { name: "フランス" }]} />
      <section className="svc-hero svc-hero-france">
        <div className="container">
          <h1>フランス渡航のETIAS申請ガイド<br />パリ旅行の準備</h1>
          <div className="svc-hero-meta">
            <span>公開日: 2026年5月20日</span>
            <span>更新日: 2026年5月20日</span>
          </div>
        </div>
      </section>

      <article className="svc-article">
        <nav className="svc-toc">
          <div className="svc-toc-title">目次</div>
          <ol>
            <li><a href="#overview">フランスとETIAS</a></li>
            <li><a href="#japan-france">日仏間の渡航状況</a></li>
            <li><a href="#airports">フランスの主要空港と入国審査</a></li>
            <li><a href="#paris">パリ旅行とETIAS</a></li>
            <li><a href="#regions">地方都市への渡航</a></li>
            <li><a href="#transit">パリでの乗り継ぎ</a></li>
            <li><a href="#business">ビジネス渡航</a></li>
            <li><a href="#multi-country">フランスを起点とした周遊旅行</a></li>
            <li><a href="#tips">フランス渡航の実践的アドバイス</a></li>
            <li><a href="#faq">よくある質問</a></li>
          </ol>
        </nav>

        <h2 id="overview">フランスとETIAS</h2>
        <p>
          フランスはシェンゲン協定の原加盟国であり、ETIAS制度の運用開始後は日本人旅行者がフランスに渡航する際にETIASの事前取得が必要になります。フランスは日本人旅行者にとってヨーロッパで最も人気のある渡航先の一つであり、毎年多くの日本人がパリをはじめとするフランス各地を訪れています。
        </p>
        <p>
          フランスへの渡航に必要なETIASは、他のシェンゲン協定加盟国と共通のものです。つまり、フランス用のETIASを別途申請する必要はなく、1つのETIASでフランスを含む30か国すべてに渡航できます。申請時に「最初に入国する国」としてフランスを指定するだけです。
        </p>
        <p>
          ETIAS申請料は20ユーロ（約3,200円）で、承認されれば3年間有効です。フランスでの滞在は180日間のうち最大90日間までで、この制限はシェンゲン圏全体で計算されます。
        </p>

        <h2 id="japan-france">日仏間の渡航状況</h2>
        <p>
          日本とフランスの間には長い交流の歴史があり、観光、ビジネス、文化交流など多方面で人の往来が活発です。年間の日本人フランス渡航者数はヨーロッパの中でもトップクラスを維持しています。
        </p>

        <h3>直行便の状況</h3>
        <p>
          成田・羽田空港からパリ・シャルル・ド・ゴール空港への直行便が複数の航空会社で運航されています。フライト時間は約12〜13時間です。
        </p>
        <ul>
          <li>エールフランス航空: 成田/羽田 → パリ（毎日運航）</li>
          <li>全日本空輸（ANA）: 羽田 → パリ（毎日運航）</li>
          <li>日本航空（JAL）: 羽田 → パリ（毎日運航）</li>
        </ul>
        <p>
          関西国際空港からの直行便も運航されている場合があります。直行便を利用する場合、パリが最初の入国地点となるため、ETIAS申請時にフランスを最初の入国先として申告します。
        </p>

        <h3>日本人旅行者の渡航目的</h3>
        <ul>
          <li>観光: パリ、南仏、ロワール渓谷、モン・サン・ミシェルなど</li>
          <li>ビジネス: 商談、展示会（特にファッション、食品分野）</li>
          <li>ハネムーン: パリ、プロヴァンスが人気</li>
          <li>美術・文化: ルーヴル美術館、オルセー美術館など</li>
          <li>グルメ: フランス料理、ワイナリー巡り</li>
        </ul>

        <h2 id="airports">フランスの主要空港と入国審査</h2>
        <p>
          フランスには複数の国際空港がありますが、日本からの直行便が就航しているのは主にパリの空港です。どの空港から入国する場合でも、ETIAS導入後は同様の入国審査プロセスが適用されます。
        </p>
        <table>
          <thead>
            <tr>
              <th>空港名</th>
              <th>コード</th>
              <th>特徴</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>シャルル・ド・ゴール空港</td>
              <td>CDG</td>
              <td>パリ北方25km。日本からの直行便が発着するメイン空港</td>
            </tr>
            <tr>
              <td>オルリー空港</td>
              <td>ORY</td>
              <td>パリ南方14km。主にヨーロッパ内路線</td>
            </tr>
            <tr>
              <td>ニース・コートダジュール空港</td>
              <td>NCE</td>
              <td>南仏リビエラの玄関口。乗り継ぎで日本から到達</td>
            </tr>
            <tr>
              <td>リヨン・サン=テグジュペリ空港</td>
              <td>LYS</td>
              <td>フランス第3の都市リヨンの空港</td>
            </tr>
          </tbody>
        </table>

        <h3>シャルル・ド・ゴール空港での入国審査</h3>
        <p>
          日本からの直行便はシャルル・ド・ゴール空港のターミナル2に到着することが多いです。到着後、「Passport Control」の表示に従って入国審査ブースに進みます。EES導入後は、初回入国時にバイオメトリクスの登録が追加されます。
        </p>
        <p>
          シャルル・ド・ゴール空港はヨーロッパ有数の大規模空港であり、入国審査の混雑が課題です。特にEES導入直後は初回登録の旅行者が多くなるため、通常以上に時間がかかる可能性があります。乗り継ぎがある場合は余裕を持ったスケジュールを組みましょう。
        </p>

        <h2 id="paris">パリ旅行とETIAS</h2>
        <p>
          パリは日本人旅行者にとって憧れの都市であり、エッフェル塔、ルーヴル美術館、シャンゼリゼ通りなど数多くの見どころがあります。パリ旅行にあたってのETIAS関連の注意点をまとめます。
        </p>

        <h3>パリの主要観光スポット</h3>
        <ul>
          <li>エッフェル塔: パリのシンボル。事前にオンラインでチケット予約がおすすめ</li>
          <li>ルーヴル美術館: モナ・リザをはじめとする膨大なコレクション</li>
          <li>凱旋門とシャンゼリゼ通り: ショッピングと散策の定番</li>
          <li>モンマルトルとサクレ・クール寺院: パリを一望できる丘</li>
          <li>ヴェルサイユ宮殿: パリ郊外の壮麗な宮殿（日帰り可能）</li>
        </ul>

        <h3>パリ滞在時のETIAS関連の注意点</h3>
        <p>
          ETIASが承認されれば、パリでの滞在に特別な制限はありません（90日以内の滞在ルールを遵守する限り）。ただし、パスポートは常に携帯することをお勧めします。フランスでは身分証明書の携帯が義務付けられており、警察官から提示を求められることがあります。
        </p>

        <h2 id="regions">地方都市への渡航</h2>
        <p>
          フランスの魅力はパリだけではありません。地方にも日本人旅行者に人気のエリアが多数あります。
        </p>
        <ul>
          <li>プロヴァンス: ラベンダー畑、アルル、アヴィニョン</li>
          <li>コートダジュール: ニース、カンヌ、モナコ（モナコは別国だがシェンゲン圏内のような扱い）</li>
          <li>ロワール渓谷: 数多くの古城巡り</li>
          <li>モン・サン・ミシェル: ノルマンディー地方の世界遺産</li>
          <li>ボルドー: ワイナリー巡りの聖地</li>
          <li>ストラスブール: アルザス地方の中心、EU議会所在地</li>
        </ul>
        <p>
          これらの地方都市へは、パリからTGV（高速鉄道）で移動できます。フランス国内の移動にはETIAS以外の追加手続きは不要です。
        </p>

        <h2 id="transit">パリでの乗り継ぎ</h2>
        <p>
          パリ・シャルル・ド・ゴール空港はヨーロッパのハブ空港として多くの路線が集中しており、日本人旅行者がヨーロッパの他の都市へ向かう際に乗り継ぎで利用するケースも多いです。
        </p>
        <p>
          パリでの乗り継ぎにETIASが必要かどうかは、乗り継ぎの経路によります。シェンゲン圏外からシェンゲン圏内の目的地への乗り継ぎの場合、パリで入国審査を通過するためETIASが必要です。シェンゲン圏内からシェンゲン圏内への乗り継ぎの場合は、すでに入国済みなので追加の手続きはありません。
        </p>

        <h2 id="business">ビジネス渡航</h2>
        <p>
          フランスは日本企業の進出先として重要な国であり、ビジネス渡航も活発です。商談、展示会、カンファレンスなどの短期出張にもETIASが必要です。
        </p>
        <ul>
          <li>パリ・ノールヴィルパント見本市会場: 各種国際展示会が開催</li>
          <li>ラ・デファンス: パリ西部のビジネス地区</li>
          <li>パリ・ファッションウィーク: アパレル業界の重要イベント</li>
          <li>SIAL Paris: 世界最大級の食品見本市</li>
        </ul>
        <p>
          ビジネス渡航の場合、ETIASの申請料20ユーロは出張経費として処理できます。支払い時の確認メールを領収書として保存しておきましょう。
        </p>

        <h2 id="multi-country">フランスを起点とした周遊旅行</h2>
        <p>
          フランスはヨーロッパの中心に位置しており、周辺国への周遊旅行の起点として最適です。以下は日本人旅行者に人気のフランス発の周遊ルートです。
        </p>

        <h3>パリ発の人気ルート</h3>
        <ul>
          <li>パリ → ブリュッセル（ベルギー）: Thalys高速鉄道で約1時間20分</li>
          <li>パリ → アムステルダム（オランダ）: Thalysで約3時間15分</li>
          <li>パリ → ロンドン（イギリス）: ユーロスターで約2時間15分（ただしイギリスはETIAS対象外、UK ETAが別途必要）</li>
          <li>パリ → バルセロナ（スペイン）: TGVで約6時間30分</li>
          <li>パリ → フランクフルト（ドイツ）: TGVで約3時間50分</li>
        </ul>

        <div className="warning-box">
          <div className="warning-box-title">イギリスへの渡航に注意</div>
          <p>
            パリからユーロスターでロンドンに向かう場合、イギリスはシェンゲン圏に含まれないためETIASは使えません。イギリスへの入国にはUK ETAまたはビザが別途必要です。パリ北駅でのイギリス入国審査（ジャクスタポジション管理）に備えてください。
          </p>
        </div>

        <h2 id="tips">フランス渡航の実践的アドバイス</h2>

        <h3>通貨と支払い</h3>
        <p>
          フランスの通貨はユーロです。クレジットカードが広く使えますが、小さなカフェや市場では現金が必要な場合もあります。日本で事前に少額のユーロを両替しておくと安心です。
        </p>

        <h3>治安と防犯</h3>
        <p>
          パリではスリや置き引きの被害が日本人旅行者にも多く報告されています。特に地下鉄（メトロ）内、観光スポット周辺、混雑した場所では注意が必要です。パスポートのコピーを別に保管し、原本は安全な場所に保管することをお勧めします。
        </p>

        <h3>言語</h3>
        <p>
          フランスの公用語はフランス語です。パリの観光地やホテルでは英語が通じることが多いですが、地方では英語が通じにくい場合もあります。基本的なフランス語のフレーズを覚えておくと、現地の方との交流がスムーズになります。
        </p>

        <h3>時差</h3>
        <p>
          フランスと日本の時差は8時間（日本が8時間進んでいる）。サマータイム期間中は7時間差です。ETIAS申請の結果メールは日本時間では深夜に届くこともあるため、通知設定を確認しておきましょう。
        </p>

        <h2 id="faq">よくある質問</h2>
        <FaqAccordion items={faqs} />

        <div className="related-links">
          <h3>関連ページ</h3>
          <ul>
            <li><Link href="/guide/">ETIAS完全ガイド</Link></li>
            <li><Link href="/flow/">ETIAS申請方法</Link></li>
            <li><Link href="/countries/">ETIAS対象国一覧</Link></li>
            <li><Link href="/italy/">イタリア渡航ガイド</Link></li>
            <li><Link href="/spain/">スペイン渡航ガイド</Link></li>
            <li><Link href="/germany/">ドイツ渡航ガイド</Link></li>
          </ul>
        </div>

        <div className="text-center mt-4">
          <Link href="/flow/" className="btn btn-primary btn-lg">
            ETIAS申請手順を確認する
          </Link>
        </div>
      </article>

      <section className="cta-section">
        <div className="container">
          <h2>フランス渡航の準備を始めましょう</h2>
          <p>
            パリ旅行にもETIASが必要です。申請方法を確認して、スムーズな渡航を実現しましょう。
          </p>
          <Link href="/guide/" className="btn btn-primary btn-lg">
            ETIAS完全ガイドを読む
          </Link>
        </div>
      </section>
    </>
  );
}
