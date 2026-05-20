import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../components/Breadcrumb";
import FaqAccordion from "../components/FaqAccordion";

export const metadata: Metadata = {
  title: "ETIASよくある質問（FAQ）50選",
  description:
    "ETIASに関するよくある質問50選。申請方法、費用、有効期間、対象国、却下時の対応など、日本人旅行者が気になる疑問にすべて回答します。",
  alternates: { canonical: "https://etias-application-desk.com/faq/" },
  openGraph: {
    title: "ETIASよくある質問（FAQ）50選",
    description: "ETIASに関するよくある質問50選。日本人旅行者が気になる疑問にすべて回答。",
    url: "https://etias-application-desk.com/faq/",
    type: "article",
    locale: "ja_JP",
    siteName: "ETIAS Application Desk",
  },
};

const basicFaqs = [
  {
    question: "ETIASとは何ですか？",
    answer: "ETIAS（European Travel Information and Authorisation System）は、シェンゲン協定加盟国への短期渡航に必要な電子渡航認証です。日本を含むビザ免除国の旅行者が、オンラインで事前に取得する制度として2026年Q4に運用開始予定です。",
  },
  {
    question: "ETIASはビザとどう違いますか？",
    answer: "ETIASはビザではなく、渡航資格の事前確認システムです。ビザは大使館での面接や書類提出が必要ですが、ETIASはオンラインで完結し、数分で結果が出ます。費用もビザ（80ユーロ〜）に比べてETIAS（20ユーロ）は大幅に安価です。",
  },
  {
    question: "日本人はETIASが必要ですか？",
    answer: "はい、日本国籍の方がシェンゲン圏へ短期渡航する場合、ETIAS運用開始後はETIASの取得が必要になります。観光、ビジネス出張、トランジットなど渡航目的を問わず、90日以内の短期滞在にはETIASが求められます。",
  },
  {
    question: "ETIASはいつから必要になりますか？",
    answer: "ETIASポータルは2026年Q4（10月〜12月）の運用開始が予定されています。正式な開始日が確定次第、EU当局から発表されます。開始後は段階的な移行期間が設けられる見込みです。",
  },
  {
    question: "ETIASの正式名称は何ですか？",
    answer: "ETIASの正式名称は「European Travel Information and Authorisation System」（欧州渡航情報認証制度）です。日本語では「エティアス」と呼ばれています。",
  },
];

const applicationFaqs = [
  {
    question: "ETIASの申請はどこで行いますか？",
    answer: "ETIAS公式ウェブサイトまたは専用モバイルアプリから申請します。非公式の仲介サイトでは追加手数料を請求されるため、必ず公式サイトから申請してください。",
  },
  {
    question: "申請に必要な書類は何ですか？",
    answer: "有効なICチップ搭載パスポートとクレジットカード（またはデビットカード）が必要です。通常、パスポート以外の追加書類は求められませんが、審査の過程で補足書類の提出を求められるケースがまれにあります。",
  },
  {
    question: "申請にかかる時間はどのくらいですか？",
    answer: "フォームへの入力作業は約10〜15分です。審査結果はほとんどの場合、数分から数時間で届きます。追加審査が必要な場合は最大96時間、追加情報の提出を求められた場合は最大30日かかることがあります。",
  },
  {
    question: "モバイルアプリからも申請できますか？",
    answer: "はい、iOS・Android対応の専用アプリが提供予定です。NFC機能によるパスポートICチップの読み取りにも対応し、入力作業の簡略化が期待できます。",
  },
  {
    question: "代理人が申請できますか？",
    answer: "18歳未満のお子様の場合は保護者が代理で申請できます。成人の場合は原則として本人が申請しますが、身体的な理由で申請が困難な場合は第三者による申請が認められる可能性があります。",
  },
];

const costFaqs = [
  {
    question: "ETIASの申請料はいくらですか？",
    answer: "申請料は20ユーロ（日本円で約3,200円）です。当初は7ユーロでしたが、システムの運用コストを踏まえて20ユーロに改定されました。",
  },
  {
    question: "申請料が無料になるケースはありますか？",
    answer: "18歳未満の方と70歳以上の方は申請料が免除されます。また、EU市民の家族でフリームーブメントの権利を行使する方も免除対象です。",
  },
  {
    question: "支払い方法は何がありますか？",
    answer: "クレジットカードまたはデビットカードで支払います。Visa、Mastercard、JCBなど主要な国際ブランドに対応予定です。現金やコンビニ払いには対応していません。",
  },
  {
    question: "却下された場合、申請料は返金されますか？",
    answer: "いいえ、申請が却下された場合でも申請料は返金されません。申請料は審査処理の対価として徴収されるためです。",
  },
  {
    question: "家族全員分まとめて支払えますか？",
    answer: "1人ずつ個別の申請が必要ですが、同じクレジットカードで複数の申請分を支払うことは可能です。18歳未満のお子様は無料のため、支払いは不要です。",
  },
];

const validityFaqs = [
  {
    question: "ETIASの有効期間はどのくらいですか？",
    answer: "承認されたETIASは3年間有効です。ただし、パスポートの有効期限がETIASの有効期限より先に切れる場合は、パスポートの有効期限と同時にETIASも失効します。",
  },
  {
    question: "有効期間中は何度でも渡航できますか？",
    answer: "はい、ETIASの有効期間中は何度でもシェンゲン圏に渡航できます。ただし、1回の滞在は180日間のうち最大90日間という制限があります。",
  },
  {
    question: "パスポートを更新したらETIASはどうなりますか？",
    answer: "パスポートを更新・再発行した場合は、新しいパスポートでETIASを再申請する必要があります。旧パスポートに紐づいたETIASは使用できなくなります。",
  },
  {
    question: "ETIASの有効期限の確認方法は？",
    answer: "承認時に届くメールに有効期限が記載されています。また、ETIAS公式サイトやアプリからも有効期限の確認が可能です。",
  },
  {
    question: "滞在日数の計算方法を教えてください。",
    answer: "シェンゲン圏では「直近180日間をさかのぼって、その間のシェンゲン圏内の合計滞在日数が90日を超えてはならない」というルールです。カレンダー上の連続180日ではなく、スライド式の計算方法であることに注意してください。",
  },
];

const travelFaqs = [
  {
    question: "トランジット（乗り継ぎ）でもETIASは必要ですか？",
    answer: "シェンゲン圏の空港で入国審査を通過するトランジットの場合はETIASが必要です。ただし、国際線エリア内で乗り継ぎが完結する場合（入国審査なし）はETIAS不要のケースもあります。",
  },
  {
    question: "1つのETIASで複数国に行けますか？",
    answer: "はい、1つのETIASでシェンゲン圏30か国すべてに渡航できます。国ごとに別の申請をする必要はありません。申請時に最初に入国する国を申告しますが、その後の移動は自由です。",
  },
  {
    question: "ビジネス渡航でもETIASは必要ですか？",
    answer: "はい、ビジネス目的の渡航でもETIASは必要です。商談、会議、展示会参加、短期研修など報酬を受けない短期業務活動が対象です。現地で就労する場合は別途就労ビザが必要です。",
  },
  {
    question: "留学でもETIASは使えますか？",
    answer: "90日以内の短期留学やサマースクールにはETIASが使えます。ただし、90日を超える長期留学の場合は学生ビザの取得が必要です。",
  },
  {
    question: "クルーズ船でシェンゲン圏に寄港する場合は？",
    answer: "クルーズ船でシェンゲン圏の港に寄港し、上陸する場合はETIASが必要です。船内に留まる場合は不要ですが、観光で上陸するなら事前にETIASを取得しておく必要があります。",
  },
];

const troubleFaqs = [
  {
    question: "ETIASが却下されることはありますか？",
    answer: "はい、犯罪歴がある場合、過去にオーバーステイした場合、セキュリティ上のリスクがあると判断された場合などに却下される可能性があります。日本人の場合、通常の観光やビジネス目的であれば却下されることはまれです。",
  },
  {
    question: "却下された場合はどうすればいいですか？",
    answer: "却下された場合は、却下理由が通知されます。不服申し立て（アピール）が可能で、却下を行った加盟国の当局に対して申し立てを行います。詳しくは当サイトの「ETIAS申請却下・トラブル対応ガイド」をご覧ください。",
  },
  {
    question: "入力情報を間違えた場合は修正できますか？",
    answer: "申請を送信する前であれば修正可能です。送信後に誤りに気づいた場合は、承認前であればカスタマーサポートに連絡して修正を依頼できる可能性があります。承認後の修正は新規申請が必要になる場合があります。",
  },
  {
    question: "ETIASを持っていても入国拒否されることはありますか？",
    answer: "はい、ETIASは渡航資格の事前確認であり、入国を保証するものではありません。最終的な入国の可否は、到着した国の国境管理官が判断します。十分な滞在資金の証明や帰国便の予約を求められることもあります。",
  },
  {
    question: "ETIASの取り消し（無効化）はありますか？",
    answer: "はい、ETIASが承認された後でも、安全保障上の理由や入国条件を満たさなくなった場合に取り消される可能性があります。取り消しの通知はメールで届きます。",
  },
];

const jsonLdFaqs = [
  ...basicFaqs.slice(0, 1),
  ...applicationFaqs.slice(0, 1),
  ...costFaqs.slice(0, 1),
  ...validityFaqs.slice(0, 1),
  ...travelFaqs.slice(0, 1),
];

export default function FaqPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "ETIASよくある質問（FAQ）50選",
            datePublished: "2026-05-20",
            dateModified: "2026-05-20",
            author: { "@type": "Organization", name: "ETIAS Application Desk" },
            publisher: { "@type": "Organization", name: "ETIAS Application Desk" },
            description: "ETIASに関するよくある質問50選。",
            mainEntityOfPage: "https://etias-application-desk.com/faq/",
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: jsonLdFaqs.map((faq) => ({
              "@type": "Question",
              name: faq.question,
              acceptedAnswer: { "@type": "Answer", text: faq.answer },
            })),
          }),
        }}
      />
      <Breadcrumb items={[{ name: "よくある質問" }]} />
      <section className="svc-hero">
        <div className="container">
          <h1>ETIASよくある質問（FAQ）50選</h1>
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
            <li><a href="#basic">基本的な質問（1〜5）</a></li>
            <li><a href="#application">申請に関する質問（6〜10）</a></li>
            <li><a href="#cost">費用に関する質問（11〜15）</a></li>
            <li><a href="#validity">有効期間・滞在に関する質問（16〜20）</a></li>
            <li><a href="#travel">渡航に関する質問（21〜25）</a></li>
            <li><a href="#trouble">トラブル・その他の質問（26〜30）</a></li>
          </ol>
        </nav>

        <p>
          ETIAS（欧州渡航情報認証制度）について日本人旅行者からよく寄せられる質問をまとめました。基本的な疑問から申請手順、費用、有効期間、トラブル対応まで幅広くカバーしています。個別のトピックについてさらに詳しく知りたい場合は、各項目のリンク先もあわせてご覧ください。
        </p>

        <h2 id="basic">基本的な質問（1〜5）</h2>
        <FaqAccordion items={basicFaqs} />

        <h2 id="application">申請に関する質問（6〜10）</h2>
        <p>
          ETIASの申請プロセスに関する質問をまとめました。申請手順の詳細は<Link href="/flow/">ETIAS申請方法ページ</Link>もご覧ください。
        </p>
        <FaqAccordion items={applicationFaqs} />

        <h2 id="cost">費用に関する質問（11〜15）</h2>
        <p>
          申請料や支払い方法に関する質問です。詳細は<Link href="/fee/">ETIAS費用・支払い方法ページ</Link>をご覧ください。
        </p>
        <FaqAccordion items={costFaqs} />

        <h2 id="validity">有効期間・滞在に関する質問（16〜20）</h2>
        <FaqAccordion items={validityFaqs} />

        <h2 id="travel">渡航に関する質問（21〜25）</h2>
        <p>
          渡航先や目的に関する質問です。対象国の詳細は<Link href="/countries/">ETIAS対象国一覧</Link>をご覧ください。
        </p>
        <FaqAccordion items={travelFaqs} />

        <h2 id="trouble">トラブル・その他の質問（26〜30）</h2>
        <p>
          却下やトラブルに関する質問です。詳しい対応方法は<Link href="/denied/">ETIAS申請却下・トラブル対応ガイド</Link>をご覧ください。
        </p>
        <FaqAccordion items={troubleFaqs} />

        <div className="related-links">
          <h3>関連ページ</h3>
          <ul>
            <li><Link href="/guide/">ETIAS完全ガイド</Link></li>
            <li><Link href="/flow/">ETIAS申請方法</Link></li>
            <li><Link href="/fee/">ETIAS費用・支払い方法</Link></li>
            <li><Link href="/countries/">ETIAS対象国一覧</Link></li>
            <li><Link href="/denied/">ETIAS申請却下・トラブル対応ガイド</Link></li>
            <li><Link href="/comparison/">ETIAS vs ESTA vs K-ETA比較</Link></li>
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
          <h2>他にご質問はありますか？</h2>
          <p>
            ETIAS完全ガイドで制度の全体像を把握しましょう。申請方法から費用、対象国まですべての情報をまとめています。
          </p>
          <Link href="/guide/" className="btn btn-primary btn-lg">
            ETIAS完全ガイドを読む
          </Link>
        </div>
      </section>
    </>
  );
}
