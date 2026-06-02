import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../components/Breadcrumb";
import FaqAccordion from "../components/FaqAccordion";

export const metadata: Metadata = {
  title: "ETIAS対象国一覧｜シェンゲン協定30か国",
  description:
    "ETIASが必要なシェンゲン協定加盟30か国の一覧を地域別に紹介。日本人旅行者に人気のフランス、イタリア、ドイツ、スペインなど各国の情報と渡航時の注意点をまとめました。",
  alternates: { canonical: "https://etias-application-desk.com/countries/" },
  openGraph: {
    title: "ETIAS対象国一覧｜シェンゲン協定30か国",
    description: "ETIASが必要なシェンゲン協定加盟30か国の一覧を地域別に紹介。",
    url: "https://etias-application-desk.com/countries/",
    type: "article",
    locale: "ja_JP",
    siteName: "ETIAS Application Desk",
  },
};

const faqs = [
  {
    question: "イギリスはETIAS対象国ですか？",
    answer: "いいえ、イギリスはシェンゲン協定に加盟していないため、ETIASの対象外です。イギリスへの渡航には独自の入国制度（ETA：Electronic Travel Authorisation）が適用されます。イギリスとヨーロッパ大陸の両方を訪問する場合は、それぞれの渡航認証が必要です。",
  },
  {
    question: "トルコやロシアはETIAS対象国ですか？",
    answer: "いいえ、トルコとロシアはシェンゲン協定に加盟していないため、ETIASの対象外です。これらの国への渡航にはそれぞれの国の入国規定に従う必要があります。日本国籍の方はトルコにはビザなしで渡航可能ですが、ロシアにはビザが必要です。",
  },
  {
    question: "1つのETIASで30か国すべてに入国できますか？",
    answer: "はい、1つのETIASが承認されれば、シェンゲン協定加盟30か国すべてに渡航できます。追加の申請は不要です。ただし、最初に入国する国を申請時に申告する必要があります。その後の国境移動は自由です。",
  },
  {
    question: "シェンゲン圏とEU加盟国は同じですか？",
    answer: "いいえ、完全には一致しません。スイス、ノルウェー、アイスランド、リヒテンシュタインはEU非加盟ですがシェンゲン協定には参加しています。逆にアイルランドはEU加盟国ですがシェンゲン協定には参加していません。ETIASはシェンゲン協定加盟国が対象です。",
  },
  {
    question: "今後対象国が増える予定はありますか？",
    answer: "EU加盟候補国（セルビア、モンテネグロなど）がEUに加盟しシェンゲン協定に参加すれば、将来的にETIAS対象国が増える可能性はあります。ブルガリアとルーマニアは2024年にシェンゲン協定に加盟したため、ETIAS対象国に含まれています。",
  },
];

export default function CountriesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "ETIAS対象国一覧｜シェンゲン協定30か国",
            datePublished: "2026-05-20",
            dateModified: "2026-05-20",
            author: { "@type": "Organization", name: "ETIAS Application Desk" },
            publisher: { "@type": "Organization", name: "ETIAS Application Desk" },
            description: "ETIASが必要なシェンゲン協定加盟30か国の一覧。",
            mainEntityOfPage: "https://etias-application-desk.com/countries/",
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
      <Breadcrumb items={[{ name: "ETIAS対象国一覧" }]} />
      <section className="svc-hero svc-hero-countries">
        <div className="container">
          <h1>ETIAS対象国一覧<br />シェンゲン協定30か国</h1>
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
            <li><a href="#overview">対象国の概要</a></li>
            <li><a href="#west">西ヨーロッパの対象国</a></li>
            <li><a href="#central">中央ヨーロッパの対象国</a></li>
            <li><a href="#south">南ヨーロッパの対象国</a></li>
            <li><a href="#north">北ヨーロッパの対象国</a></li>
            <li><a href="#east">東ヨーロッパの対象国</a></li>
            <li><a href="#not-included">ETIAS対象外の主な国</a></li>
            <li><a href="#schengen-vs-eu">シェンゲン圏とEUの違い</a></li>
            <li><a href="#popular">日本人に人気の渡航先</a></li>
            <li><a href="#multi-country">複数国周遊のポイント</a></li>
            <li><a href="#faq">よくある質問</a></li>
          </ol>
        </nav>

        <h2 id="overview">対象国の概要</h2>
        <p>
          ETIASの対象となるのは、シェンゲン協定に加盟する30か国です。シェンゲン協定とは、加盟国間の国境検査を撤廃し、人の自由な移動を可能にする取り決めで、1985年にルクセンブルクのシェンゲンで署名されました。
        </p>
        <p>
          日本のパスポート保持者がこれら30か国のいずれかに渡航する場合、ETIAS制度の運用開始後は事前にETIASを取得する必要があります。1つのETIASで30か国すべてに渡航でき、国ごとに別々の申請は不要です。
        </p>
        <p>
          以下に地域別の対象国リストをご紹介します。各国の日本人旅行者向けの情報や注意点もあわせて解説します。
        </p>

        <h2 id="west">西ヨーロッパの対象国</h2>
        <table>
          <thead>
            <tr>
              <th>国名</th>
              <th>首都</th>
              <th>日本人旅行者の特徴</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><Link href="/france/">フランス</Link></td>
              <td>パリ</td>
              <td>日本人渡航先として常に上位。パリ、プロヴァンス、コートダジュールなど</td>
            </tr>
            <tr>
              <td>ベルギー</td>
              <td>ブリュッセル</td>
              <td>EU本部所在地。チョコレート、ビール文化で人気</td>
            </tr>
            <tr>
              <td>オランダ</td>
              <td>アムステルダム</td>
              <td>チューリップ、風車、ゴッホ美術館など観光資源豊富</td>
            </tr>
            <tr>
              <td>ルクセンブルク</td>
              <td>ルクセンブルク市</td>
              <td>金融の中心地。小国ながら世界遺産の旧市街が魅力</td>
            </tr>
          </tbody>
        </table>
        <p>
          西ヨーロッパは日本人旅行者に最も人気の高い地域です。特にフランスは日本からの渡航者数がヨーロッパの中で常にトップクラスに位置しています。パリを起点にベルギーやオランダへ日帰り旅行することも可能で、周遊旅行に適しています。
        </p>

        <h2 id="central">中央ヨーロッパの対象国</h2>
        <table>
          <thead>
            <tr>
              <th>国名</th>
              <th>首都</th>
              <th>日本人旅行者の特徴</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><Link href="/germany/">ドイツ</Link></td>
              <td>ベルリン</td>
              <td>ビジネス渡航が多い。ミュンヘン、フランクフルトがハブ空港</td>
            </tr>
            <tr>
              <td>オーストリア</td>
              <td>ウィーン</td>
              <td>音楽の都ウィーン。ザルツブルクも人気</td>
            </tr>
            <tr>
              <td><Link href="/switzerland/">スイス</Link></td>
              <td>ベルン</td>
              <td>アルプス観光。非EU加盟だがシェンゲン参加</td>
            </tr>
            <tr>
              <td>リヒテンシュタイン</td>
              <td>ファドゥーツ</td>
              <td>スイスに隣接する小国。日帰り訪問が一般的</td>
            </tr>
            <tr>
              <td>チェコ</td>
              <td>プラハ</td>
              <td>プラハ城、旧市街が人気。物価が比較的安い</td>
            </tr>
            <tr>
              <td>ポーランド</td>
              <td>ワルシャワ</td>
              <td>クラクフ、アウシュヴィッツなど歴史的観光地</td>
            </tr>
            <tr>
              <td>スロバキア</td>
              <td>ブラチスラバ</td>
              <td>ウィーンからのアクセスが良好</td>
            </tr>
            <tr>
              <td>ハンガリー</td>
              <td>ブダペスト</td>
              <td>温泉文化。ドナウ川の夜景が魅力</td>
            </tr>
          </tbody>
        </table>
        <p>
          中央ヨーロッパは、ビジネス渡航（特にドイツ）と観光の両面で日本人旅行者に人気があります。ドイツのフランクフルトやミュンヘンは日本からの直行便があり、ヨーロッパの玄関口として多くの旅行者が利用しています。
        </p>

        <h2 id="south">南ヨーロッパの対象国</h2>
        <table>
          <thead>
            <tr>
              <th>国名</th>
              <th>首都</th>
              <th>日本人旅行者の特徴</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><Link href="/italy/">イタリア</Link></td>
              <td>ローマ</td>
              <td>観光大国。ローマ、フィレンツェ、ヴェネツィア、ミラノなど</td>
            </tr>
            <tr>
              <td><Link href="/spain/">スペイン</Link></td>
              <td>マドリード</td>
              <td>バルセロナのサグラダ・ファミリア、アンダルシア地方</td>
            </tr>
            <tr>
              <td>ポルトガル</td>
              <td>リスボン</td>
              <td>近年人気急上昇。リスボン、ポルトの美しい街並み</td>
            </tr>
            <tr>
              <td>ギリシャ</td>
              <td>アテネ</td>
              <td>サントリーニ島、ミコノス島のリゾート</td>
            </tr>
            <tr>
              <td>マルタ</td>
              <td>バレッタ</td>
              <td>英語留学先としても人気の地中海の島国</td>
            </tr>
            <tr>
              <td>クロアチア</td>
              <td>ザグレブ</td>
              <td>ドゥブロヴニクがアドリア海の真珠として人気</td>
            </tr>
            <tr>
              <td>スロベニア</td>
              <td>リュブリャナ</td>
              <td>ブレッド湖など自然観光</td>
            </tr>
          </tbody>
        </table>
        <p>
          南ヨーロッパは温暖な気候と豊かな食文化で、日本人旅行者のリピーターが多い地域です。イタリアとスペインは特に人気が高く、美術館、建築、グルメなど多彩な魅力があります。
        </p>

        <h2 id="north">北ヨーロッパの対象国</h2>
        <table>
          <thead>
            <tr>
              <th>国名</th>
              <th>首都</th>
              <th>日本人旅行者の特徴</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>フィンランド</td>
              <td>ヘルシンキ</td>
              <td>日本から最も近いヨーロッパ。オーロラ、サンタクロース村</td>
            </tr>
            <tr>
              <td>スウェーデン</td>
              <td>ストックホルム</td>
              <td>北欧デザイン、IKEAの本国</td>
            </tr>
            <tr>
              <td>デンマーク</td>
              <td>コペンハーゲン</td>
              <td>レゴランド、ニューハウンの港町</td>
            </tr>
            <tr>
              <td>ノルウェー</td>
              <td>オスロ</td>
              <td>フィヨルド観光、オーロラ。非EU加盟だがシェンゲン参加</td>
            </tr>
            <tr>
              <td>アイスランド</td>
              <td>レイキャビク</td>
              <td>温泉、オーロラ、氷河ツアー。非EU加盟だがシェンゲン参加</td>
            </tr>
          </tbody>
        </table>
        <p>
          北ヨーロッパは、フィンランドのヘルシンキが日本からの直行便で約10時間と、ヨーロッパへの最短ルートとして注目されています。フィンランドをヨーロッパ旅行の起点にして他国へ乗り継ぐ旅行者も増えています。
        </p>

        <h2 id="east">東ヨーロッパの対象国</h2>
        <table>
          <thead>
            <tr>
              <th>国名</th>
              <th>首都</th>
              <th>日本人旅行者の特徴</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>エストニア</td>
              <td>タリン</td>
              <td>IT先進国。中世の旧市街が世界遺産</td>
            </tr>
            <tr>
              <td>ラトビア</td>
              <td>リガ</td>
              <td>アールヌーボー建築の宝庫</td>
            </tr>
            <tr>
              <td>リトアニア</td>
              <td>ヴィリニュス</td>
              <td>杉原千畝ゆかりの地として日本人に知名度あり</td>
            </tr>
            <tr>
              <td>ブルガリア</td>
              <td>ソフィア</td>
              <td>ヨーグルトの本場。バラの谷が有名</td>
            </tr>
            <tr>
              <td>ルーマニア</td>
              <td>ブカレスト</td>
              <td>トランシルヴァニア地方、ドラキュラ城</td>
            </tr>
          </tbody>
        </table>
        <p>
          バルト三国（エストニア、ラトビア、リトアニア）は、リトアニアのカウナスにある杉原千畝記念館が日本人に知られており、歴史的なつながりから訪問する旅行者もいます。ブルガリアとルーマニアは2024年にシェンゲン協定に加盟し、ETIAS対象国に加わりました。
        </p>

        <h2 id="not-included">ETIAS対象外の主な国</h2>
        <p>
          ヨーロッパにはETIAS対象外の国もあります。以下の国はシェンゲン協定に加盟していないため、ETIASとは別の入国制度が適用されます。
        </p>
        <table>
          <thead>
            <tr>
              <th>国名</th>
              <th>入国制度</th>
              <th>備考</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>イギリス</td>
              <td>UK ETA</td>
              <td>2024年から電子渡航認証導入</td>
            </tr>
            <tr>
              <td>アイルランド</td>
              <td>独自の入国規定</td>
              <td>EU加盟だがシェンゲン非参加</td>
            </tr>
            <tr>
              <td>トルコ</td>
              <td>ビザなし渡航可（90日以内）</td>
              <td>シェンゲン非加盟</td>
            </tr>
            <tr>
              <td>セルビア</td>
              <td>ビザなし渡航可（30日以内）</td>
              <td>EU加盟候補国</td>
            </tr>
          </tbody>
        </table>

        <h2 id="schengen-vs-eu">シェンゲン圏とEUの違い</h2>
        <p>
          シェンゲン協定加盟国とEU加盟国は似ていますが、完全には一致しません。この違いを理解しておくことは、ヨーロッパ旅行の計画を立てるうえで重要です。
        </p>
        <ul>
          <li>スイス、ノルウェー、アイスランド、リヒテンシュタインは「EU非加盟だがシェンゲン協定に参加」しているため、ETIASが必要です。</li>
          <li>アイルランドは「EU加盟だがシェンゲン協定に不参加」のため、ETIASの対象外です。</li>
          <li>キプロスはEU加盟国ですが、シェンゲン協定にはまだ完全参加しておらず、ETIASの対象外です。</li>
        </ul>
        <p>
          旅行の行程を計画する際は、シェンゲン圏の国境を越えるタイミングとそうでない国への移動を区別しておくと、入国手続きがスムーズです。
        </p>

        <h2 id="popular">日本人に人気の渡航先</h2>
        <p>
          日本人旅行者がヨーロッパで最もよく訪れる国と都市を紹介します。これらの都市を訪れる際にもETIASが必要になります。
        </p>
        <ul>
          <li><Link href="/france/">フランス（パリ）</Link> - ルーヴル美術館、エッフェル塔、モンサンミッシェル</li>
          <li><Link href="/italy/">イタリア（ローマ、フィレンツェ、ヴェネツィア）</Link> - コロッセオ、ウフィツィ美術館、ゴンドラ</li>
          <li><Link href="/spain/">スペイン（バルセロナ、マドリード）</Link> - サグラダ・ファミリア、プラド美術館</li>
          <li><Link href="/germany/">ドイツ（ミュンヘン、フランクフルト）</Link> - ノイシュヴァンシュタイン城、ビジネス出張</li>
          <li><Link href="/switzerland/">スイス（チューリッヒ、ジュネーブ）</Link> - マッターホルン、ユングフラウ</li>
        </ul>

        <h2 id="multi-country">複数国周遊のポイント</h2>
        <p>
          ヨーロッパ旅行の醍醐味の一つが複数国の周遊です。シェンゲン圏内であれば、国境検査なしで自由に移動できるため、鉄道やバスを使った周遊旅行が楽しめます。
        </p>
        <h3>人気の周遊ルート例</h3>
        <ul>
          <li>パリ（フランス） → ブリュッセル（ベルギー） → アムステルダム（オランダ）</li>
          <li>ローマ → フィレンツェ → ヴェネツィア → ウィーン</li>
          <li>バルセロナ（スペイン） → 南仏 → パリ</li>
          <li>ミュンヘン → ザルツブルク（オーストリア） → プラハ（チェコ）</li>
        </ul>
        <p>
          これらの周遊ルートはすべてシェンゲン圏内のため、ETIASは1つで十分です。ただし、180日間のうち合計90日以内という滞在日数制限にはご注意ください。
        </p>

        <h2 id="faq">よくある質問</h2>
        <FaqAccordion items={faqs} />

        <div className="related-links">
          <h3>関連ページ</h3>
          <ul>
            <li><Link href="/guide/">ETIAS完全ガイド</Link></li>
            <li><Link href="/france/">フランス渡航ガイド</Link></li>
            <li><Link href="/italy/">イタリア渡航ガイド</Link></li>
            <li><Link href="/spain/">スペイン渡航ガイド</Link></li>
            <li><Link href="/germany/">ドイツ渡航ガイド</Link></li>
            <li><Link href="/switzerland/">スイス渡航ガイド</Link></li>
          </ul>
        </div>

        <div className="text-center mt-4">
          <Link href="/guide/" className="btn btn-primary btn-lg">
            ETIAS完全ガイドに戻る
          </Link>
        </div>
      </article>

      <section className="cta-section">
        <div className="container">
          <h2>渡航先を決めたらETIASの準備を</h2>
          <p>
            30か国のうちどの国に行くにもETIASが必要です。申請方法を確認して準備を進めましょう。
          </p>
          <Link href="/flow/" className="btn btn-primary btn-lg">
            申請手順を確認する
          </Link>
        </div>
      </section>
    </>
  );
}
