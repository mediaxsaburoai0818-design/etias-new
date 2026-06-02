import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../components/Breadcrumb";
import FaqAccordion from "../components/FaqAccordion";

export const metadata: Metadata = {
  title: "ETIAS費用・支払い方法｜申請料20ユーロの詳細",
  description:
    "ETIAS申請料20ユーロの内訳、支払い方法、免除条件、日本円での目安金額を詳しく解説。クレジットカード支払いの注意点や為替手数料についても紹介します。",
  alternates: { canonical: "https://etias-application-desk.com/fee/" },
  openGraph: {
    title: "ETIAS費用・支払い方法｜申請料20ユーロの詳細",
    description: "ETIAS申請料20ユーロの内訳、支払い方法、免除条件を詳しく解説。",
    url: "https://etias-application-desk.com/fee/",
    type: "article",
    locale: "ja_JP",
    siteName: "ETIAS Application Desk",
  },
};

const faqs = [
  {
    question: "ETIASの申請料はなぜ7ユーロから20ユーロに値上げされたのですか？",
    answer: "ETIASシステムの開発費、運用コスト、セキュリティデータベースの維持費などが当初の見積もりを上回ったため、申請料が20ユーロに改定されました。それでもシェンゲンビザ（80ユーロ〜）と比較すると大幅に安く設定されています。",
  },
  {
    question: "申請料の支払いにPayPayやLINE Payは使えますか？",
    answer: "現時点ではクレジットカードおよびデビットカードのみが支払い手段として予定されています。QR決済サービスには対応していない見込みです。Visa、Mastercard、JCBなどの国際ブランドカードをご用意ください。",
  },
  {
    question: "ETIASが却下された場合、申請料は返金されますか？",
    answer: "ETIASの申請料は審査処理の対価として徴収されるため、申請が却下された場合でも返金されません。ただし、システムエラーにより二重請求が発生した場合などは返金対応が行われる可能性があります。",
  },
  {
    question: "家族4人で申請する場合の合計費用はいくらですか？",
    answer: "家族構成によります。18歳以上の大人2人と10歳・15歳の子ども2人の場合、大人2名分の40ユーロのみとなります。18歳未満のお子様は申請料が免除されるためです。70歳以上の方も免除対象です。",
  },
  {
    question: "申請料の領収書は発行されますか？",
    answer: "支払い完了時に確認メールが届き、これが領収書の代わりとなります。ビジネス出張で経費精算が必要な場合は、このメールを保存しておいてください。クレジットカードの明細書も支払いの証拠になります。",
  },
];

export default function FeePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "ETIAS費用・支払い方法｜申請料20ユーロの詳細",
            datePublished: "2026-05-20",
            dateModified: "2026-05-20",
            author: { "@type": "Organization", name: "ETIAS Application Desk" },
            publisher: { "@type": "Organization", name: "ETIAS Application Desk" },
            description: "ETIAS申請料20ユーロの詳細と支払い方法。",
            mainEntityOfPage: "https://etias-application-desk.com/fee/",
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
      <Breadcrumb items={[{ name: "ETIAS費用・支払い方法" }]} />
      <section className="svc-hero svc-hero-fee">
        <div className="container">
          <h1>ETIAS費用・支払い方法<br />申請料20ユーロの詳細</h1>
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
            <li><a href="#amount">申請料の金額</a></li>
            <li><a href="#change">7ユーロから20ユーロへの改定経緯</a></li>
            <li><a href="#exemption">申請料免除の対象者</a></li>
            <li><a href="#jpy">日本円での目安金額</a></li>
            <li><a href="#payment">支払い方法</a></li>
            <li><a href="#card-tips">クレジットカード支払いの注意点</a></li>
            <li><a href="#forex">為替手数料について</a></li>
            <li><a href="#comparison">他の電子渡航認証との費用比較</a></li>
            <li><a href="#total-cost">ヨーロッパ渡航の総費用に占めるETIAS</a></li>
            <li><a href="#faq">よくある質問</a></li>
          </ol>
        </nav>

        <h2 id="amount">申請料の金額</h2>
        <p>
          ETIASの申請料は1回あたり20ユーロです。この料金はETIAS認証1件あたりに対して課されるもので、申請者1人につき1件の申請が必要です。家族であっても個別に申請するため、18歳以上の家族成員の人数分の費用がかかります。
        </p>
        <p>
          この20ユーロという金額は、申請の処理費用、セキュリティデータベースの照合費用、システムの運用・保守費用を賄うために設定されています。ビザ申請のように面接費用や書類審査費用が含まれないため、比較的低額に抑えられています。
        </p>
        <p>
          なお、ETIASが承認された場合の有効期間は3年間であるため、年間あたりの実質コストは約6.67ユーロ（約1,100円）と考えることもできます。3年間で何度でもシェンゲン圏への渡航に使えることを考えれば、非常に経済的な制度と言えるでしょう。
        </p>

        <h2 id="change">7ユーロから20ユーロへの改定経緯</h2>
        <p>
          ETIASの申請料は、制度の構想段階では7ユーロと発表されていました。この金額は、アメリカのESTA（21ドル）やオーストラリアのETA（20豪ドル）と比較しても低額であり、旅行者の負担を最小限に抑える意図がありました。
        </p>
        <p>
          しかし、ETIASシステムの開発が進むにつれ、当初の見積もりよりもシステム開発費やセキュリティインフラの構築費が大幅に増加しました。また、2020年以降のCOVID-19パンデミックによる開発スケジュールの遅延もコスト増加の一因です。
        </p>
        <p>
          これらの要因を踏まえ、EUは2025年に申請料を7ユーロから20ユーロに改定することを決定しました。改定後も他の入国制度と比較すると依然として低額であり、旅行者への影響は限定的と判断されています。
        </p>

        <h2 id="exemption">申請料免除の対象者</h2>
        <p>
          以下に該当する方はETIASの申請料が免除されます。申請自体は必要ですが、費用は発生しません。
        </p>
        <table>
          <thead>
            <tr>
              <th>免除対象</th>
              <th>条件</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>18歳未満の方</td>
              <td>申請時点で18歳の誕生日を迎えていない方</td>
            </tr>
            <tr>
              <td>70歳以上の方</td>
              <td>申請時点で70歳以上の方</td>
            </tr>
            <tr>
              <td>EU市民の家族</td>
              <td>EU市民の配偶者や直系の家族でフリームーブメントの権利を行使する方</td>
            </tr>
          </tbody>
        </table>
        <p>
          家族旅行の場合、大人の分だけ申請料がかかり、子どもの分は無料になるため、家計への負担は軽減されます。たとえば、大人2人と子ども（18歳未満）2人の家族の場合、合計40ユーロ（約6,400円）で全員分の申請が可能です。
        </p>

        <h2 id="jpy">日本円での目安金額</h2>
        <p>
          ETIASの申請料は20ユーロ固定ですが、日本円で支払う場合はその時点の為替レートによって金額が変動します。以下は為替レート別の目安金額です。
        </p>
        <table>
          <thead>
            <tr>
              <th>EUR/JPYレート</th>
              <th>20ユーロ相当額</th>
              <th>海外事務手数料込み（2%想定）</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1ユーロ = 155円</td>
              <td>3,100円</td>
              <td>約3,162円</td>
            </tr>
            <tr>
              <td>1ユーロ = 160円</td>
              <td>3,200円</td>
              <td>約3,264円</td>
            </tr>
            <tr>
              <td>1ユーロ = 165円</td>
              <td>3,300円</td>
              <td>約3,366円</td>
            </tr>
            <tr>
              <td>1ユーロ = 170円</td>
              <td>3,400円</td>
              <td>約3,468円</td>
            </tr>
          </tbody>
        </table>
        <p>
          実際の請求額はクレジットカード会社が適用する為替レートによって決まります。カード会社のレートは市場レートに若干の上乗せがあるため、目安金額よりわずかに高くなる可能性があります。
        </p>

        <h2 id="payment">支払い方法</h2>
        <p>
          ETIASの申請料は、クレジットカードまたはデビットカードで支払います。現金払い、銀行振込、コンビニ払いなどには対応していません。
        </p>
        <h3>利用可能な国際カードブランド</h3>
        <ul>
          <li>Visa</li>
          <li>Mastercard</li>
          <li>JCB（日本発のブランドとして対応予定）</li>
          <li>American Express（対応予定）</li>
        </ul>
        <p>
          日本国内で発行されたクレジットカードやデビットカードであれば、ほとんどの場合問題なく使用できます。ただし、海外利用が制限されているカードや、オンライン決済が無効化されているカードは使用できない場合がありますので、事前に確認しておいてください。
        </p>

        <h2 id="card-tips">クレジットカード支払いの注意点</h2>
        <h3>3Dセキュア認証</h3>
        <p>
          セキュリティ強化のため、支払い時に3Dセキュア認証（本人認証）が求められる場合があります。3Dセキュアに登録していないカードでは決済が完了しない可能性があるため、事前にカード発行会社のウェブサイトで3Dセキュアの設定状況を確認してください。
        </p>
        <h3>カード利用通知</h3>
        <p>
          海外サイトでのカード決済は、不正利用と誤認されてカード会社にブロックされることがあります。渡航前にカード会社に「海外サイトでの利用予定がある」旨を連絡しておくと、決済がスムーズに行えます。
        </p>
        <h3>プリペイドカードの利用</h3>
        <p>
          海外のオンラインサイトでの決済に不安がある方は、プリペイド式のVisaカードやMastercardを利用する方法もあります。必要な金額だけをチャージして使うため、万が一の情報漏洩時のリスクを限定できます。
        </p>

        <h2 id="forex">為替手数料について</h2>
        <p>
          日本発行のクレジットカードでユーロ建ての決済を行う場合、カード会社から海外事務手数料（外貨取扱手数料）が別途請求されます。手数料率はカード会社やカード種類によって異なりますが、一般的に1.6〜2.2%程度です。
        </p>
        <table>
          <thead>
            <tr>
              <th>カード会社</th>
              <th>海外事務手数料率（目安）</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>三井住友カード（Visa）</td>
              <td>2.20%</td>
            </tr>
            <tr>
              <td>楽天カード</td>
              <td>1.63%</td>
            </tr>
            <tr>
              <td>JCBカード</td>
              <td>1.60%</td>
            </tr>
            <tr>
              <td>アメリカン・エキスプレス</td>
              <td>2.00%</td>
            </tr>
          </tbody>
        </table>
        <p>
          手数料を抑えたい場合は、海外事務手数料が低いカードを選ぶか、ソニー銀行のデビットカードなど外貨決済に強いカードを利用する方法があります。
        </p>

        <h2 id="comparison">他の電子渡航認証との費用比較</h2>
        <div className="comparison-table">
          <table>
            <thead>
              <tr>
                <th>制度名</th>
                <th>対象地域</th>
                <th>申請料</th>
                <th>日本円目安</th>
                <th>有効期間</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>ETIAS</td>
                <td>シェンゲン圏30か国</td>
                <td>20ユーロ</td>
                <td>約3,200円</td>
                <td>3年間</td>
              </tr>
              <tr>
                <td>ESTA（アメリカ）</td>
                <td>アメリカ合衆国</td>
                <td>21ドル</td>
                <td>約3,150円</td>
                <td>2年間</td>
              </tr>
              <tr>
                <td>eTA（カナダ）</td>
                <td>カナダ</td>
                <td>7カナダドル</td>
                <td>約800円</td>
                <td>5年間</td>
              </tr>
              <tr>
                <td>ETA（オーストラリア）</td>
                <td>オーストラリア</td>
                <td>20豪ドル</td>
                <td>約2,000円</td>
                <td>1年間</td>
              </tr>
              <tr>
                <td>K-ETA（韓国）</td>
                <td>韓国</td>
                <td>10,000ウォン</td>
                <td>約1,100円</td>
                <td>2年間</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          ETIASの費用はESTAとほぼ同等で、有効期間（3年間）を考慮すると比較的コストパフォーマンスが高い制度です。詳しい比較は<Link href="/comparison/">ETIAS vs ESTA vs K-ETA比較ページ</Link>をご覧ください。
        </p>

        <h2 id="total-cost">ヨーロッパ渡航の総費用に占めるETIAS</h2>
        <p>
          ヨーロッパ旅行の総費用に占めるETIAS申請料の割合は非常に小さいものです。日本からヨーロッパへの渡航にかかる一般的な費用と比較してみましょう。
        </p>
        <table>
          <thead>
            <tr>
              <th>費用項目</th>
              <th>金額目安</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>往復航空券（エコノミー）</td>
              <td>100,000〜200,000円</td>
            </tr>
            <tr>
              <td>ホテル宿泊費（7泊）</td>
              <td>70,000〜200,000円</td>
            </tr>
            <tr>
              <td>海外旅行保険</td>
              <td>3,000〜10,000円</td>
            </tr>
            <tr>
              <td>ETIAS申請料</td>
              <td>約3,200円</td>
            </tr>
            <tr>
              <td>現地交通費・食費</td>
              <td>50,000〜150,000円</td>
            </tr>
          </tbody>
        </table>
        <p>
          総費用が30万円〜50万円以上になるヨーロッパ旅行において、ETIAS申請料の約3,200円は全体の1%未満です。旅行予算への影響は極めて限定的と言えます。
        </p>

        <h2 id="faq">よくある質問</h2>
        <FaqAccordion items={faqs} />

        <div className="related-links">
          <h3>関連ページ</h3>
          <ul>
            <li><Link href="/guide/">ETIAS完全ガイド</Link></li>
            <li><Link href="/flow/">ETIAS申請方法</Link></li>
            <li><Link href="/comparison/">ETIAS vs ESTA vs K-ETA比較</Link></li>
            <li><Link href="/esta-comparison/">ESTA経験者向けガイド</Link></li>
            <li><Link href="/denied/">ETIAS申請却下・トラブル対応ガイド</Link></li>
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
          <h2>ETIASの申請準備を始めましょう</h2>
          <p>
            申請料20ユーロとクレジットカードを準備して、スムーズなETIAS申請を目指しましょう。
          </p>
          <Link href="/flow/" className="btn btn-primary btn-lg">
            申請手順を確認する
          </Link>
        </div>
      </section>
    </>
  );
}
