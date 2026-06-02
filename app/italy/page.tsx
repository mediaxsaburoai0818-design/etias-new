import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../components/Breadcrumb";
import FaqAccordion from "../components/FaqAccordion";

export const metadata: Metadata = {
  title: "イタリア渡航のETIAS申請ガイド｜ローマ・ミラノ旅行",
  description:
    "イタリア渡航に必要なETIAS申請を日本人旅行者向けに解説。ローマ、ミラノ、フィレンツェ、ヴェネツィアなど人気都市の情報と入国審査の注意点をまとめました。",
  alternates: { canonical: "https://etias-application-desk.com/italy/" },
  openGraph: {
    title: "イタリア渡航のETIAS申請ガイド｜ローマ・ミラノ旅行",
    description: "イタリア渡航に必要なETIAS申請を日本人旅行者向けに解説。",
    url: "https://etias-application-desk.com/italy/",
    type: "article", locale: "ja_JP", siteName: "ETIAS Application Desk",
  },
};

const faqs = [
  { question: "イタリアへの渡航にETIASは必要ですか？", answer: "はい、イタリアはシェンゲン協定加盟国のため、ETIAS制度の運用開始後はETIASの事前取得が必要です。ローマ、ミラノ、フィレンツェなどどの都市を訪問する場合も、同じETIASで入国できます。" },
  { question: "ローマの空港での入国審査はどのような流れですか？", answer: "フィウミチーノ空港（レオナルド・ダ・ヴィンチ空港）に到着後、パスポートコントロールに進みます。EES導入後は初回入国時にバイオメトリクス登録が追加されます。ETIASのステータスはパスポートスキャン時に自動確認されます。" },
  { question: "イタリアからフランスへの移動にも入国審査はありますか？", answer: "いいえ、イタリアとフランスはどちらもシェンゲン圏内のため、国境での入国審査はありません。鉄道、バス、車での移動は国内移動と同様にスムーズに行えます。" },
  { question: "バチカン市国への訪問にETIASは必要ですか？", answer: "バチカン市国はシェンゲン協定に加盟していませんが、イタリア（ローマ）に囲まれた都市国家のため、実質的にパスポートコントロールなしで行き来できます。イタリアへの入国時にETIASがあれば、バチカン訪問に追加の手続きは不要です。" },
  { question: "イタリアでの長期留学にETIASは使えますか？", answer: "90日以内の短期留学・語学研修であればETIASで滞在できます。90日を超える長期留学の場合は学生ビザの取得が必要です。イタリアの在日大使館で学生ビザの申請手続きをしてください。" },
];

export default function ItalyPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "Article", headline: "イタリア渡航のETIAS申請ガイド｜ローマ・ミラノ旅行", datePublished: "2026-05-20", dateModified: "2026-05-20", author: { "@type": "Organization", name: "ETIAS Application Desk" }, publisher: { "@type": "Organization", name: "ETIAS Application Desk" }, description: "イタリア渡航に必要なETIAS申請ガイド。", mainEntityOfPage: "https://etias-application-desk.com/italy/" }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map((faq) => ({ "@type": "Question", name: faq.question, acceptedAnswer: { "@type": "Answer", text: faq.answer } })) }) }} />
      <Breadcrumb items={[{ name: "対象国一覧", href: "/countries/" }, { name: "イタリア" }]} />
      <section className="svc-hero svc-hero-italy">
        <div className="container">
          <h1>イタリア渡航のETIAS申請ガイド<br />ローマ・ミラノ旅行</h1>
          <div className="svc-hero-meta"><span>公開日: 2026年5月20日</span><span>更新日: 2026年5月20日</span></div>
        </div>
      </section>
      <article className="svc-article">
        <nav className="svc-toc">
          <div className="svc-toc-title">目次</div>
          <ol>
            <li><a href="#overview">イタリアとETIAS</a></li>
            <li><a href="#japan-italy">日伊間の渡航状況</a></li>
            <li><a href="#airports">イタリアの主要空港</a></li>
            <li><a href="#rome">ローマ旅行とETIAS</a></li>
            <li><a href="#milan">ミラノ・北イタリア</a></li>
            <li><a href="#florence">フィレンツェ・トスカーナ</a></li>
            <li><a href="#venice">ヴェネツィア</a></li>
            <li><a href="#south">南イタリア・シチリア</a></li>
            <li><a href="#multi-country">イタリアからの周遊旅行</a></li>
            <li><a href="#tips">イタリア渡航の実践的アドバイス</a></li>
            <li><a href="#faq">よくある質問</a></li>
          </ol>
        </nav>

        <h2 id="overview">イタリアとETIAS</h2>
        <p>イタリアはシェンゲン協定の原加盟国であり、ETIAS制度の運用開始後は日本人旅行者のイタリア渡航にETIASの事前取得が必要になります。イタリアはフランスと並んで日本人に最も人気のあるヨーロッパの渡航先です。ローマ、フィレンツェ、ヴェネツィア、ミラノなど世界的な観光都市を擁し、歴史、芸術、食文化のいずれも世界トップクラスの魅力を持つ国です。</p>
        <p>ETIASは1つでイタリアを含むシェンゲン圏30か国すべてに渡航可能です。申請料は20ユーロ（約3,200円）、有効期間は3年間です。フランスやスペインなど他のシェンゲン圏の国との周遊旅行も追加申請なしで楽しめます。</p>

        <h2 id="japan-italy">日伊間の渡航状況</h2>
        <h3>直行便の状況</h3>
        <p>成田・羽田空港からローマ・フィウミチーノ空港への直行便が運航されています。フライト時間は約12〜13時間です。</p>
        <ul>
          <li>ITA Airways（旧アリタリア）: 成田 → ローマ</li>
          <li>全日本空輸（ANA）: 羽田 → ミラノ・マルペンサ（コードシェア便含む）</li>
          <li>日本航空（JAL）: 提携航空会社経由でローマ・ミラノ路線を運航</li>
        </ul>
        <p>直行便以外にも、フランクフルト、パリ、アムステルダムなどを経由してイタリア各都市にアクセスする方法も一般的です。乗り継ぎの場合、最初に入国するシェンゲン圏の国（乗り継ぎ空港がある国）をETIAS申請時に申告します。</p>

        <h3>日本人旅行者の渡航目的</h3>
        <ul>
          <li>観光: コロッセオ、ウフィツィ美術館、ゴンドラ遊覧など</li>
          <li>ハネムーン: ヴェネツィア、アマルフィ海岸が人気</li>
          <li>ビジネス: ファッション、デザイン、自動車産業</li>
          <li>グルメ: ピッツァ、パスタ、ジェラート、ワイン</li>
          <li>留学: 語学留学、料理学校、美術留学</li>
        </ul>

        <h2 id="airports">イタリアの主要空港</h2>
        <table>
          <thead><tr><th>空港名</th><th>コード</th><th>特徴</th></tr></thead>
          <tbody>
            <tr><td>ローマ・フィウミチーノ空港</td><td>FCO</td><td>イタリア最大の国際空港。日本からの直行便が発着</td></tr>
            <tr><td>ミラノ・マルペンサ空港</td><td>MXP</td><td>北イタリアの玄関口。ファッション都市ミラノへのアクセス</td></tr>
            <tr><td>ヴェネツィア・マルコポーロ空港</td><td>VCE</td><td>水の都ヴェネツィアへの入り口</td></tr>
            <tr><td>ナポリ・カポディキーノ空港</td><td>NAP</td><td>南イタリア、アマルフィ海岸へのアクセス</td></tr>
          </tbody>
        </table>
        <p>どの空港から入国する場合でも、ETIAS導入後は同様の入国審査プロセスが適用されます。EESの導入により、初回入国時にはバイオメトリクス登録が必要です。</p>

        <h2 id="rome">ローマ旅行とETIAS</h2>
        <p>ローマは「永遠の都」と呼ばれ、古代ローマの遺跡から現代の都市文化まで、何千年もの歴史が重層的に存在する都市です。日本人旅行者にとってイタリアで最も人気のある都市の一つです。</p>
        <h3>ローマの主要観光スポット</h3>
        <ul>
          <li>コロッセオ: 古代ローマの円形闘技場。事前予約が必須</li>
          <li>フォロ・ロマーノ: 古代ローマの政治・経済の中心地跡</li>
          <li>パンテオン: 2000年の歴史を持つ神殿建築</li>
          <li>トレヴィの泉: コインを投げ入れると再びローマに戻れるという伝説</li>
          <li>スペイン広場: 映画「ローマの休日」で有名な大階段</li>
          <li>バチカン市国: サン・ピエトロ大聖堂、システィーナ礼拝堂</li>
        </ul>
        <p>ローマ滞在中はパスポートを常に携帯してください。イタリアでは身分証明書の携帯が法律で義務付けられています。ETIASの承認メールのスクリーンショットも保存しておくと安心です。</p>

        <h2 id="milan">ミラノ・北イタリア</h2>
        <p>ミラノはイタリアの経済・ファッションの中心地です。日本企業のヨーロッパ拠点も多く、ビジネス渡航の需要が高い都市です。</p>
        <ul>
          <li>ドゥオーモ（ミラノ大聖堂）: ゴシック建築の傑作</li>
          <li>最後の晩餐（レオナルド・ダ・ヴィンチ作）: 完全予約制</li>
          <li>ガッレリア・ヴィットーリオ・エマヌエーレ2世: 美しいアーケード商店街</li>
          <li>ミラノ・ファッションウィーク: 世界4大ファッションウィークの一つ</li>
        </ul>
        <p>ミラノからはコモ湖やチンクエ・テッレなど北イタリアの美しい景勝地への日帰り旅行も可能です。これらはすべてイタリア国内のため追加の手続きは不要です。</p>

        <h2 id="florence">フィレンツェ・トスカーナ</h2>
        <p>フィレンツェはルネサンス芸術の都であり、ウフィツィ美術館やアカデミア美術館（ミケランジェロのダビデ像）など、芸術愛好家には必見の都市です。</p>
        <p>トスカーナ地方はワイナリーや丘陵地帯の風景が美しく、キャンティ地方のワイナリー巡りやシエナの歴史的市街地も人気があります。レンタカーでの周遊もおすすめですが、国際運転免許証の携帯を忘れないようにしましょう。</p>

        <h2 id="venice">ヴェネツィア</h2>
        <p>「水の都」ヴェネツィアは、運河と橋で構成された唯一無二の都市景観で知られています。ゴンドラ遊覧、サンマルコ広場、リアルト橋などが日本人旅行者に人気のスポットです。</p>
        <p>ヴェネツィアでは観光税（入島税）が導入されており、日帰り訪問者は追加の料金を支払う必要があります。これはETIASとは別の制度ですので、事前に最新の情報を確認してください。</p>

        <h2 id="south">南イタリア・シチリア</h2>
        <p>ナポリ、アマルフィ海岸、シチリア島は、北イタリアとはまた異なる魅力を持つ地域です。日本人旅行者にはアマルフィ海岸の絶景やポンペイ遺跡、カプリ島の青の洞窟が人気です。</p>
        <p>南イタリアは北イタリアに比べて英語が通じにくい場合がありますが、イタリア人の温かいホスピタリティに助けられることも多いでしょう。</p>

        <h2 id="multi-country">イタリアからの周遊旅行</h2>
        <h3>人気の周遊ルート</h3>
        <ul>
          <li>ローマ → フィレンツェ → ヴェネツィア → ミラノ: イタリア縦断（鉄道で移動可能）</li>
          <li>ローマ → ナポリ → アマルフィ → シチリア: 南イタリア周遊</li>
          <li>ミラノ → スイス（チューリッヒ/ルツェルン）: 国境を越えた日帰り旅行も可能</li>
          <li>ヴェネツィア → スロベニア（リュブリャナ）→ クロアチア（ドゥブロヴニク）: アドリア海沿岸周遊</li>
        </ul>
        <p>いずれもシェンゲン圏内のため、ETIASは1つで問題ありません。ただし、180日間のうち90日間という滞在制限にご注意ください。</p>

        <h2 id="tips">イタリア渡航の実践的アドバイス</h2>
        <h3>治安について</h3>
        <p>イタリアの主要観光都市ではスリや置き引きの被害が多く報告されています。特にローマのテルミニ駅周辺、ミラノの地下鉄、フィレンツェの混雑した広場では注意が必要です。パスポートの原本はホテルのセーフティボックスに保管し、コピーを持ち歩くことをお勧めします。</p>
        <h3>食事の習慣</h3>
        <p>イタリアではランチ（pranzo）が13時〜15時、ディナー（cena）が20時〜22時と日本より遅い時間帯です。レストランではコペルト（席料）が加算されることが一般的で、これはチップとは別の料金です。</p>
        <h3>公共交通機関</h3>
        <p>ローマ、ミラノ、ナポリなどには地下鉄があり、都市間はTrenitalia（トレニタリア）やItalo（イタロ）の高速鉄道で効率的に移動できます。チケットは事前にオンラインで購入すると割引がある場合があります。</p>

        <h2 id="faq">よくある質問</h2>
        <FaqAccordion items={faqs} />

        <div className="related-links">
          <h3>関連ページ</h3>
          <ul>
            <li><Link href="/guide/">ETIAS完全ガイド</Link></li>
            <li><Link href="/flow/">ETIAS申請方法</Link></li>
            <li><Link href="/countries/">ETIAS対象国一覧</Link></li>
            <li><Link href="/france/">フランス渡航ガイド</Link></li>
            <li><Link href="/spain/">スペイン渡航ガイド</Link></li>
            <li><Link href="/switzerland/">スイス渡航ガイド</Link></li>
          </ul>
        </div>

        <div className="text-center mt-4">
          <Link href="/flow/" className="btn btn-primary btn-lg">ETIAS申請手順を確認する</Link>
        </div>
      </article>
      <section className="cta-section">
        <div className="container">
          <h2>イタリア旅行の準備を始めましょう</h2>
          <p>ローマ、ミラノ、フィレンツェ旅行にもETIASが必要です。申請方法を事前に確認しておきましょう。</p>
          <Link href="/guide/" className="btn btn-primary btn-lg">ETIAS完全ガイドを読む</Link>
        </div>
      </section>
    </>
  );
}
