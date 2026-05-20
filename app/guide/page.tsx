import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../components/Breadcrumb";
import FaqAccordion from "../components/FaqAccordion";

export const metadata: Metadata = {
  title: "ETIAS（エティアス）完全ガイド｜日本人のための申請方法・費用・対象国まとめ",
  description:
    "ETIAS（欧州渡航情報認証制度）について日本人旅行者向けに徹底解説。申請方法、費用20ユーロ、対象国30か国、有効期間3年間など、ヨーロッパ渡航に必要な全情報をまとめた完全ガイドです。",
  alternates: {
    canonical: "https://etias-application-desk.com/guide/",
  },
  openGraph: {
    title: "ETIAS（エティアス）完全ガイド｜日本人のための申請方法・費用・対象国まとめ",
    description:
      "ETIAS（欧州渡航情報認証制度）について日本人旅行者向けに徹底解説。申請方法、費用、対象国など全情報をまとめた完全ガイド。",
    url: "https://etias-application-desk.com/guide/",
    type: "article",
    locale: "ja_JP",
    siteName: "ETIAS Application Desk",
  },
};

const faqs = [
  {
    question: "ETIASはビザと何が違いますか？",
    answer:
      "ETIASはビザではなく、電子渡航認証です。ビザは大使館への申請が必要で取得に数週間かかりますが、ETIASはオンラインで申請でき、通常は数分から数時間で結果が出ます。費用もビザが数千円〜数万円かかるのに対し、ETIASは20ユーロと手軽です。",
  },
  {
    question: "ETIASの申請はいつから可能ですか？",
    answer:
      "ETIASポータルは2026年Q4（10月〜12月頃）の開始が予定されています。運用開始後すぐにオンラインで申請が可能になります。渡航予定の方は、出発の少なくとも72時間前までに申請を完了することをお勧めします。",
  },
  {
    question: "パスポートを更新したらETIASはどうなりますか？",
    answer:
      "ETIASはパスポートと電子的にリンクされているため、パスポートを更新・再発行した場合は新たにETIASを申請する必要があります。旧パスポートに紐づいたETIASは使用できなくなりますのでご注意ください。",
  },
  {
    question: "ETIASが却下されることはありますか？",
    answer:
      "はい、ETIASの申請が却下される可能性はあります。主な理由としては、犯罪歴がある場合、過去にシェンゲン圏でオーバーステイした場合、入力情報に誤りがある場合などが挙げられます。却下された場合は不服申し立てが可能です。",
  },
  {
    question: "ETIASで何か国を訪問できますか？",
    answer:
      "ETIASが承認されれば、シェンゲン協定加盟30か国すべてに渡航できます。1つのETIASで複数国を周遊することも可能で、フランス、ドイツ、イタリア、スペインなど人気の観光国をまとめて旅行できます。",
  },
];

export default function GuidePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline:
              "ETIAS（エティアス）完全ガイド｜日本人のための申請方法・費用・対象国まとめ",
            datePublished: "2026-05-20",
            dateModified: "2026-05-20",
            author: {
              "@type": "Organization",
              name: "ETIAS Application Desk",
            },
            publisher: {
              "@type": "Organization",
              name: "ETIAS Application Desk",
            },
            description:
              "ETIAS（欧州渡航情報認証制度）について日本人旅行者向けに徹底解説する完全ガイド。",
            mainEntityOfPage:
              "https://etias-application-desk.com/guide/",
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
              acceptedAnswer: {
                "@type": "Answer",
                text: faq.answer,
              },
            })),
          }),
        }}
      />

      <Breadcrumb items={[{ name: "ETIAS完全ガイド" }]} />

      <section className="svc-hero">
        <div className="container">
          <h1>
            ETIAS（エティアス）完全ガイド
            <br />
            日本人のための申請方法・費用・対象国まとめ
          </h1>
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
            <li><a href="#what-is-etias">ETIASとは何か</a></li>
            <li><a href="#why-etias">なぜETIASが導入されるのか</a></li>
            <li><a href="#who-needs">ETIASが必要な人・不要な人</a></li>
            <li><a href="#how-to-apply">申請方法と手順</a></li>
            <li><a href="#cost">費用と支払い方法</a></li>
            <li><a href="#target-countries">対象国一覧</a></li>
            <li><a href="#validity">有効期間と滞在ルール</a></li>
            <li><a href="#timeline">導入スケジュール</a></li>
            <li><a href="#vs-visa">ETIASとビザの違い</a></li>
            <li><a href="#japan-specific">日本人旅行者が知っておくべきポイント</a></li>
            <li><a href="#prepare">今からできる準備</a></li>
            <li><a href="#faq">よくある質問</a></li>
          </ol>
        </nav>

        <h2 id="what-is-etias">ETIASとは何か</h2>

        <p>
          ETIAS（European Travel Information and Authorisation System、欧州渡航情報認証制度）は、欧州連合（EU）が導入する電子渡航認証システムです。シェンゲン協定に加盟する30か国への短期渡航（180日間のうち90日以内）を希望するビザ免除国の旅行者に対し、事前のオンライン申請を義務づける制度として設計されています。
        </p>

        <p>
          日本はシェンゲン圏に対するビザ免除国に該当するため、ETIAS導入後は日本国籍の方がヨーロッパへ渡航する際にこの電子認証を取得する必要があります。現在は日本のパスポートだけで入国できますが、2026年Q4以降はETIASの事前取得が加わることになります。
        </p>

        <p>
          ETIASの仕組みは、アメリカのESTA（Electronic System for Travel Authorization）や韓国のK-ETA（Korea Electronic Travel Authorization）と類似しています。いずれもビザ免除プログラムの一環として導入された電子事前認証であり、渡航前にオンラインで旅行者の基本情報を確認するものです。
        </p>

        <div className="info-box">
          <div className="info-box-title">重要なポイント</div>
          <p>
            ETIASはビザではありません。ビザが入国許可証であるのに対し、ETIASはシェンゲン圏への渡航資格があるかどうかを事前に確認するためのスクリーニングシステムです。ETIASを取得していても、最終的な入国の可否は国境管理官が判断します。
          </p>
        </div>

        <h2 id="why-etias">なぜETIASが導入されるのか</h2>

        <p>
          ETIASが導入される最大の目的は、ヨーロッパの安全保障を強化することです。シェンゲン圏では国境検査が撤廃されているため、外部からの入域管理がより重要になっています。ETIASによって渡航者を事前にスクリーニングすることで、テロリズムや組織犯罪に関わる人物がシェンゲン圏に入ることを未然に防ぐ狙いがあります。
        </p>

        <p>
          また、不法移民の防止も大きな目的の一つです。ビザ免除で入国した後にオーバーステイ（滞在超過）するケースを減らすため、入国前の段階で渡航者の身元や渡航目的を確認する仕組みが求められていました。ETIASは複数のデータベースと照合して申請者を評価し、リスクの高い渡航者を特定します。
        </p>

        <p>
          さらに、EU域内の人の移動に関するデータを一元管理することで、出入国管理の効率化も図られます。2024年から段階的に導入が進むEES（出入国管理システム）と連携し、シェンゲン圏の国境管理をデジタル化する大きなプロジェクトの一環としてETIASは位置づけられています。
        </p>

        <h3>従来の国境管理との違い</h3>

        <p>
          これまでシェンゲン圏では、ビザ免除国の旅行者に対する事前審査の仕組みがありませんでした。日本のパスポート保持者であれば、有効なパスポートと往復航空券さえあれば、特別な事前手続きなく入国できていたのです。
        </p>

        <p>
          しかし、アメリカ（ESTA）、カナダ（eTA）、オーストラリア（ETA）など主要な先進国がすでに同様の電子渡航認証を導入しており、EUもこの国際的な流れに沿う形でETIASを整備することになりました。これにより、旅行者は出発前に自分のステータスを確認でき、航空会社も搭乗前に渡航資格を確認できるようになります。
        </p>

        <h2 id="who-needs">ETIASが必要な人・不要な人</h2>

        <h3>ETIASが必要な方</h3>

        <p>
          以下のすべての条件に該当する方はETIASの申請が必要です。
        </p>

        <ul>
          <li>シェンゲン協定加盟国に対するビザ免除国の国籍を持つ方（日本を含む約60か国）</li>
          <li>観光、ビジネス出張、トランジット、医療目的、短期留学など90日以内の短期滞在を予定している方</li>
          <li>有効なICチップ搭載パスポートを保有している方</li>
        </ul>

        <h3>ETIASが不要な方</h3>

        <ul>
          <li>EU加盟国またはシェンゲン協定加盟国の国籍を持つ方</li>
          <li>有効なシェンゲンビザを持っている方</li>
          <li>EU加盟国の居住許可証を持っている方</li>
          <li>外交パスポートや公用パスポートの保持者（別途規定あり）</li>
        </ul>

        <div className="warning-box">
          <div className="warning-box-title">注意事項</div>
          <p>
            ETIASが必要かどうかは国籍によって決まります。日本国籍の方は基本的にETIASが必要ですが、二重国籍でEU加盟国の国籍も持っている場合はEU側のパスポートで渡航すればETIASは不要です。
          </p>
        </div>

        <h2 id="how-to-apply">申請方法と手順</h2>

        <p>
          ETIASの申請はすべてオンラインで完結します。公式ウェブサイトまたは専用のモバイルアプリから申請が可能で、所要時間は約10〜15分程度です。以下に具体的な手順を解説します。
        </p>

        <h3>ステップ1: 公式サイト・アプリにアクセス</h3>

        <p>
          ETIAS公式ウェブサイト、またはApp Store/Google Playからダウンロードできる専用アプリにアクセスします。フィッシング詐欺を避けるため、必ず公式のサイトやアプリからお申し込みください。非公式の仲介サイトでは追加料金を請求されることがありますのでご注意ください。
        </p>

        <h3>ステップ2: パスポート情報の入力</h3>

        <p>
          有効なICチップ搭載パスポートの情報を入力します。入力が必要な項目は以下の通りです。
        </p>

        <ul>
          <li>氏名（パスポート記載通り）</li>
          <li>生年月日</li>
          <li>性別</li>
          <li>国籍</li>
          <li>パスポート番号</li>
          <li>パスポート発行日・有効期限</li>
          <li>出生地</li>
        </ul>

        <p>
          モバイルアプリを使用する場合は、パスポートのICチップをNFCで読み取ることで入力を自動化できます。手入力の場合は、パスポートの記載内容と完全に一致するよう慎重に入力してください。スペルミスがあると審査に影響する可能性があります。
        </p>

        <h3>ステップ3: 個人情報・渡航情報の入力</h3>

        <p>
          パスポート情報に加えて、以下の情報も入力します。
        </p>

        <ul>
          <li>メールアドレス（結果通知用）</li>
          <li>電話番号</li>
          <li>現住所</li>
          <li>最初に入国予定のシェンゲン協定加盟国</li>
          <li>職業</li>
          <li>学歴</li>
        </ul>

        <h3>ステップ4: セキュリティ質問への回答</h3>

        <p>
          安全保障上のスクリーニングとして、いくつかの質問に回答します。具体的には、犯罪歴、紛争地域への渡航歴、過去の入国拒否や強制退去の有無、特定の感染症の有無などについて質問されます。すべての質問に正直に回答してください。虚偽の申告は申請却下や将来の入国禁止につながる可能性があります。
        </p>

        <h3>ステップ5: 申請料の支払い</h3>

        <p>
          申請料20ユーロをクレジットカードまたはデビットカードで支払います。18歳未満の方および70歳以上の方は申請料が免除されますので、支払いは不要です。決済が完了すると、申請が正式に処理に回されます。
        </p>

        <h3>ステップ6: 審査結果の受信</h3>

        <p>
          審査結果は登録したメールアドレスに通知されます。ほとんどの場合、申請から数分〜数時間以内に結果が届きます。ただし、追加確認が必要な場合は最大30日かかることもあるため、渡航の少なくとも72時間前までに申請を完了することが推奨されています。
        </p>

        <div className="tip-box">
          <div className="tip-box-title">日本人旅行者へのアドバイス</div>
          <p>
            申請時にパスポートの氏名ローマ字表記と入力内容が一致しているか確認してください。日本人の氏名は「姓・名」の順序で記載されていますが、ETIASのフォームでは名（First Name）・姓（Last Name）の順で入力する可能性があります。間違えやすいポイントなので注意しましょう。
          </p>
        </div>

        <p>
          申請手順の詳細については<Link href="/flow/">ETIAS申請方法のページ</Link>もあわせてご確認ください。
        </p>

        <h2 id="cost">費用と支払い方法</h2>

        <p>
          ETIASの申請費用は1回あたり20ユーロです。当初は7ユーロと発表されていましたが、システムの開発・運用コストを踏まえ、2025年に20ユーロへ改定されました。日本円に換算すると約3,200円程度です（為替レートにより変動します）。
        </p>

        <h3>申請料が免除されるケース</h3>

        <ul>
          <li>18歳未満の方</li>
          <li>70歳以上の方</li>
          <li>EU市民の家族でフリームーブメントの権利を行使する方</li>
        </ul>

        <h3>支払いに利用できるカード</h3>

        <p>
          支払いにはクレジットカードまたはデビットカードが利用できます。Visa、Mastercard、JCBなど主要な国際ブランドに対応する予定です。日本で一般的に使われているカードであれば問題なく決済できるでしょう。
        </p>

        <p>
          費用の詳細については<Link href="/fee/">ETIAS費用・支払い方法のページ</Link>で詳しく解説しています。
        </p>

        <h2 id="target-countries">対象国一覧</h2>

        <p>
          ETIASの対象となるのは、シェンゲン協定に加盟する以下の30か国です。これらの国に渡航する場合、ETIASの事前取得が必要になります。
        </p>

        <table>
          <thead>
            <tr>
              <th>地域</th>
              <th>対象国</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>西ヨーロッパ</td>
              <td>フランス、ベルギー、オランダ、ルクセンブルク</td>
            </tr>
            <tr>
              <td>中央ヨーロッパ</td>
              <td>ドイツ、オーストリア、スイス、リヒテンシュタイン、チェコ、ポーランド、スロバキア、ハンガリー</td>
            </tr>
            <tr>
              <td>南ヨーロッパ</td>
              <td>イタリア、スペイン、ポルトガル、ギリシャ、マルタ、クロアチア、スロベニア</td>
            </tr>
            <tr>
              <td>北ヨーロッパ</td>
              <td>フィンランド、スウェーデン、デンマーク、ノルウェー、アイスランド、エストニア、ラトビア、リトアニア</td>
            </tr>
          </tbody>
        </table>

        <p>
          対象国の詳細リストは<Link href="/countries/">ETIAS対象国一覧ページ</Link>をご覧ください。各国の個別ガイドとして<Link href="/france/">フランス</Link>、<Link href="/italy/">イタリア</Link>、<Link href="/spain/">スペイン</Link>、<Link href="/germany/">ドイツ</Link>、<Link href="/switzerland/">スイス</Link>のページも用意しています。
        </p>

        <h2 id="validity">有効期間と滞在ルール</h2>

        <p>
          承認されたETIASは3年間有効で、その期間中は何度でもシェンゲン圏への渡航が可能です。ただし、以下の点に注意が必要です。
        </p>

        <h3>滞在日数の制限</h3>

        <p>
          ETIASがあっても、シェンゲン圏での滞在は「180日間のうち最大90日間」というルールに従う必要があります。これは「直近180日間をさかのぼって計算し、その間の合計滞在日数が90日を超えてはならない」という意味です。
        </p>

        <p>
          たとえば、4月1日から6月29日まで90日間フランスに滞在した場合、その後すぐにドイツへ渡航することはできません。180日間の計算期間が経過するまで待つ必要があります。
        </p>

        <h3>パスポートの有効期限との関係</h3>

        <p>
          ETIASの有効期限は最大3年間ですが、パスポートの有効期限がそれより先に切れる場合はパスポートと同時にETIASも失効します。また、シェンゲン圏への入国には、滞在予定期間の終了日から少なくとも3か月以上のパスポート残存有効期間が必要です。
        </p>

        <h2 id="timeline">導入スケジュール</h2>

        <p>
          ETIASの導入スケジュールはこれまで複数回延期されてきました。当初は2021年の運用開始が予定されていましたが、技術的な課題やCOVID-19パンデミックの影響で延期が繰り返されました。
        </p>

        <p>
          現時点での最新情報では、ETIASポータルの開始は2026年Q4（10月〜12月）が予定されています。具体的な日程が確定次第、当サイトでもお知らせいたします。
        </p>

        <h3>移行期間について</h3>

        <p>
          運用開始直後は一定の移行期間が設けられる可能性があります。移行期間中はETIASを取得していない旅行者に対して即座に入国を拒否するのではなく、空港や国境で申請を案内する猶予措置がとられることが想定されています。ただし、正式な運用開始後は確実にETIASを取得してから渡航するようにしましょう。
        </p>

        <h2 id="vs-visa">ETIASとビザの違い</h2>

        <table>
          <thead>
            <tr>
              <th>比較項目</th>
              <th>ETIAS</th>
              <th>シェンゲンビザ</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>対象者</td>
              <td>ビザ免除国の国民</td>
              <td>ビザが必要な国の国民</td>
            </tr>
            <tr>
              <td>申請方法</td>
              <td>オンライン完結</td>
              <td>大使館・領事館への訪問</td>
            </tr>
            <tr>
              <td>費用</td>
              <td>20ユーロ</td>
              <td>80ユーロ〜</td>
            </tr>
            <tr>
              <td>処理時間</td>
              <td>数分〜数時間</td>
              <td>15日〜45日</td>
            </tr>
            <tr>
              <td>有効期間</td>
              <td>3年間</td>
              <td>申請内容による</td>
            </tr>
            <tr>
              <td>入国保証</td>
              <td>なし（渡航資格の確認のみ）</td>
              <td>なし（最終判断は国境管理官）</td>
            </tr>
          </tbody>
        </table>

        <p>
          他の電子渡航認証との詳しい比較は<Link href="/comparison/">ETIAS vs ESTA vs K-ETA比較ページ</Link>をご覧ください。ESTA経験者の方は<Link href="/esta-comparison/">ESTA経験者向けガイド</Link>も参考になります。
        </p>

        <h2 id="japan-specific">日本人旅行者が知っておくべきポイント</h2>

        <h3>日本のパスポートの信頼性</h3>

        <p>
          日本のパスポートは世界で最も信頼されるパスポートの一つであり、多くの国にビザなしで渡航できます。ETIASの審査においても、日本国籍の申請者は高い承認率が予想されます。通常の観光やビジネス目的であれば、審査で問題になることはほとんどないでしょう。
        </p>

        <h3>複数国周遊時の注意点</h3>

        <p>
          日本人旅行者に人気のヨーロッパ周遊旅行では、1回のETIASですべてのシェンゲン協定加盟国を訪問できます。たとえば、パリ（フランス）からローマ（イタリア）を経由してバルセロナ（スペイン）に行く旅程でも、追加の申請は不要です。ただし、最初に入国する国を申請時に申告する必要があります。
        </p>

        <h3>ビジネス渡航における留意点</h3>

        <p>
          ビジネス目的の渡航でもETIASは必要です。商談、会議出席、展示会参加、短期研修など、報酬を受けない短期の業務活動はETIASの範囲内です。ただし、現地で就労する場合（報酬を受ける活動）は別途就労ビザが必要になります。
        </p>

        <h3>家族旅行の場合</h3>

        <p>
          家族でヨーロッパに渡航する場合、18歳以上の家族成員はそれぞれ個別にETIASを申請する必要があります。18歳未満の子どもは申請料が免除されますが、申請自体は保護者が代行して行う必要があります。1つの申請で家族全員分をまとめることはできません。
        </p>

        <h2 id="prepare">今からできる準備</h2>

        <p>
          ETIASの運用開始は2026年Q4の予定ですが、今からできる準備があります。スムーズな申請のために以下の点を確認しておきましょう。
        </p>

        <ul>
          <li>パスポートの有効期限を確認する（渡航予定日から6か月以上の残存期間が望ましい）</li>
          <li>パスポートにICチップが搭載されていることを確認する（2006年以降に発行された日本のパスポートには搭載済み）</li>
          <li>国際ブランド対応のクレジットカードまたはデビットカードを用意する</li>
          <li>メールアドレスを確認し、受信可能な状態にしておく</li>
          <li>渡航計画（入国予定国、滞在先）を大まかに決めておく</li>
        </ul>

        <p>
          申請が却下された場合の対処法については<Link href="/denied/">ETIAS申請却下・トラブル対応ガイド</Link>をご参照ください。
        </p>

        <h2 id="faq">よくある質問</h2>

        <FaqAccordion items={faqs} />

        <div className="related-links">
          <h3>関連ページ</h3>
          <ul>
            <li><Link href="/flow/">ETIAS申請方法｜ステップバイステップで解説</Link></li>
            <li><Link href="/fee/">ETIAS費用・支払い方法｜申請料20ユーロの詳細</Link></li>
            <li><Link href="/countries/">ETIAS対象国一覧｜シェンゲン協定30か国</Link></li>
            <li><Link href="/comparison/">ETIAS vs ESTA vs K-ETA 徹底比較</Link></li>
            <li><Link href="/ees/">EES（出入国管理システム）とETIASの関係</Link></li>
            <li><Link href="/faq/">ETIASよくある質問（FAQ）50選</Link></li>
          </ul>
        </div>

        <div className="text-center mt-4">
          <Link href="/flow/" className="btn btn-primary btn-lg">
            申請手順の詳細を確認する
          </Link>
        </div>
      </article>

      <section className="cta-section">
        <div className="container">
          <h2>ETIASの申請準備を始めましょう</h2>
          <p>
            2026年Q4の運用開始に備えて、必要な情報を事前に確認しておくことをお勧めします。
          </p>
          <Link href="/flow/" className="btn btn-primary btn-lg">
            申請手順を確認する
          </Link>
        </div>
      </section>
    </>
  );
}
