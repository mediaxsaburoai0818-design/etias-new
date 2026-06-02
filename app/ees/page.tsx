import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../components/Breadcrumb";
import FaqAccordion from "../components/FaqAccordion";

export const metadata: Metadata = {
  title: "EES（出入国管理システム）とETIASの関係",
  description:
    "EES（Entry/Exit System）とETIASの関係を日本人旅行者向けに解説。EESによる入出国記録の電子化がETIASとどう連携するか、旅行者への影響をまとめました。",
  alternates: { canonical: "https://etias-application-desk.com/ees/" },
  openGraph: {
    title: "EES（出入国管理システム）とETIASの関係",
    description: "EESとETIASの関係を日本人旅行者向けに解説。",
    url: "https://etias-application-desk.com/ees/",
    type: "article",
    locale: "ja_JP",
    siteName: "ETIAS Application Desk",
  },
};

const faqs = [
  {
    question: "EESとETIASは同じものですか？",
    answer: "いいえ、EESとETIASは別のシステムです。EES（Entry/Exit System）はシェンゲン圏の入出国記録を電子的に管理するシステムで、ETIASは渡航前にオンラインで取得する電子渡航認証です。両システムは連携して機能しますが、目的と役割が異なります。",
  },
  {
    question: "EESで指紋を登録する必要がありますか？",
    answer: "はい、EES導入後は初回入国時に指紋（4本指）と顔写真のバイオメトリクスデータが登録されます。データは3年間保存され、2回目以降の入国では登録済みデータとの照合のみで手続きが簡略化されます。",
  },
  {
    question: "EESの導入で入国審査に時間がかかるようになりますか？",
    answer: "初回入国時はバイオメトリクスの登録があるため、従来よりも時間がかかる可能性があります。ただし、2回目以降は電子データとの照合で手続きが効率化されるため、長期的には入国審査の時間短縮が期待されています。",
  },
  {
    question: "EESによって滞在日数は自動的に管理されますか？",
    answer: "はい、EESによって入出国日時が正確に記録されるため、180日間のうち90日という滞在制限が自動的に管理されます。従来はパスポートのスタンプで手動確認していましたが、EES導入後はシステムで自動計算されます。",
  },
  {
    question: "EESのデータは何年間保存されますか？",
    answer: "EESに登録された入出国記録は3年間保存されます。バイオメトリクスデータ（指紋・顔写真）も同期間保存されます。保存期間を過ぎたデータは自動的に削除されます。",
  },
];

export default function EesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "EES（出入国管理システム）とETIASの関係",
            datePublished: "2026-05-20",
            dateModified: "2026-05-20",
            author: { "@type": "Organization", name: "ETIAS Application Desk" },
            publisher: { "@type": "Organization", name: "ETIAS Application Desk" },
            description: "EESとETIASの関係を日本人旅行者向けに解説。",
            mainEntityOfPage: "https://etias-application-desk.com/ees/",
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
      <Breadcrumb items={[{ name: "EESとETIASの関係" }]} />
      <section className="svc-hero svc-hero-ees">
        <div className="container">
          <h1>EES（出入国管理システム）と<br />ETIASの関係</h1>
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
            <li><a href="#what-is-ees">EESとは何か</a></li>
            <li><a href="#ees-vs-etias">EESとETIASの違い</a></li>
            <li><a href="#how-connected">両システムの連携の仕組み</a></li>
            <li><a href="#biometrics">バイオメトリクス登録について</a></li>
            <li><a href="#overstay">滞在日数の自動管理</a></li>
            <li><a href="#border-process">入国審査の流れの変化</a></li>
            <li><a href="#japan-impact">日本人旅行者への具体的な影響</a></li>
            <li><a href="#timeline">EES導入スケジュール</a></li>
            <li><a href="#privacy">プライバシーとデータ保護</a></li>
            <li><a href="#faq">よくある質問</a></li>
          </ol>
        </nav>

        <h2 id="what-is-ees">EESとは何か</h2>
        <p>
          EES（Entry/Exit System、出入国管理システム）は、シェンゲン圏の外部国境を通過する非EU市民の入出国を電子的に記録・管理するシステムです。従来のパスポートへのスタンプ押印に代わり、デジタルデータとして入出国記録を一元管理する仕組みです。
        </p>
        <p>
          EESの主な目的は、シェンゲン圏に滞在するビザ免除国の旅行者（日本人を含む）の入出国日時を正確に記録し、滞在許可日数の超過（オーバーステイ）を防止することです。現行のスタンプベースの管理方法では、旅行者が複数のシェンゲン圏の国を周遊する際に滞在日数の正確な追跡が困難でしたが、EESによってこの問題が解消されます。
        </p>
        <p>
          EESでは、入国時にパスポート情報に加えてバイオメトリクスデータ（指紋4本と顔写真）が登録されます。これにより、なりすましや偽造パスポートによる入国を防止し、国境管理の安全性が大幅に向上します。
        </p>

        <h2 id="ees-vs-etias">EESとETIASの違い</h2>
        <p>
          EESとETIASは、EUのスマートボーダー（賢い国境管理）戦略の2本柱として位置づけられていますが、それぞれ異なる役割を持っています。
        </p>
        <table>
          <thead>
            <tr>
              <th>比較項目</th>
              <th>EES</th>
              <th>ETIAS</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>目的</td>
              <td>入出国記録の電子管理</td>
              <td>渡航前のセキュリティスクリーニング</td>
            </tr>
            <tr>
              <td>タイミング</td>
              <td>入国時・出国時（国境で）</td>
              <td>渡航前（オンラインで）</td>
            </tr>
            <tr>
              <td>バイオメトリクス</td>
              <td>指紋4本＋顔写真</td>
              <td>なし（パスポート情報のみ）</td>
            </tr>
            <tr>
              <td>費用</td>
              <td>無料</td>
              <td>20ユーロ</td>
            </tr>
            <tr>
              <td>対象者</td>
              <td>非EU市民全員</td>
              <td>ビザ免除国の旅行者</td>
            </tr>
            <tr>
              <td>データ保存期間</td>
              <td>3年間</td>
              <td>3年間（有効期間）</td>
            </tr>
          </tbody>
        </table>
        <p>
          簡単に言えば、ETIASは「渡航前のチェック」、EESは「入出国時の記録」という関係です。旅行者はまずETIASで渡航認証を取得し、実際にシェンゲン圏に入出国する際にEESで記録が登録されます。
        </p>

        <h2 id="how-connected">両システムの連携の仕組み</h2>
        <p>
          ETIASとEESは、eu-LISA（大規模ITシステム運用管理機関）によって統合的に管理され、以下のように連携して機能します。
        </p>
        <ol>
          <li>旅行者がETIASを申請し、セキュリティスクリーニングを通過する</li>
          <li>承認されたETIAS情報がeu-LISAのデータベースに保存される</li>
          <li>旅行者がシェンゲン圏の国境に到着すると、国境管理官がパスポートをスキャンする</li>
          <li>EESシステムが自動的にETIASのステータスを確認する</li>
          <li>ETIASが有効であれば、EESに入国記録が登録される</li>
          <li>出国時にもEESに出国記録が登録され、滞在日数が自動計算される</li>
        </ol>
        <p>
          この連携により、国境管理官はパスポートをスキャンするだけで、旅行者のETIASステータス、過去の入出国履歴、残りの滞在可能日数を即座に確認できるようになります。
        </p>

        <h2 id="biometrics">バイオメトリクス登録について</h2>
        <p>
          EESの導入により、シェンゲン圏に初めて入国する際にバイオメトリクスデータの登録が必要になります。日本人旅行者にとって、これは新しい手続きです。
        </p>

        <h3>登録されるデータ</h3>
        <ul>
          <li>指紋: 4本の指（通常は両手の人差し指と中指）</li>
          <li>顔写真: 入国審査ブースのカメラで撮影</li>
        </ul>

        <h3>登録のタイミング</h3>
        <p>
          バイオメトリクスの登録は初回入国時のみ行われます。データは3年間保存され、2回目以降の入国時には登録済みデータとの照合のみが行われるため、手続きが大幅に簡略化されます。
        </p>

        <h3>セルフサービスキオスクの利用</h3>
        <p>
          主要空港にはセルフサービスキオスクが設置される予定で、指紋読み取りと顔写真撮影を自動で行うことができます。混雑する入国審査の待ち時間を短縮する効果が期待されています。
        </p>

        <div className="info-box">
          <div className="info-box-title">日本人旅行者への影響</div>
          <p>
            バイオメトリクスの登録自体は数分で完了しますが、EES導入直後は空港の入国審査が混雑する可能性があります。特にパリ・シャルル・ド・ゴール空港やフランクフルト空港など大規模空港では、乗り継ぎ時間に余裕を持たせることをお勧めします。
          </p>
        </div>

        <h2 id="overstay">滞在日数の自動管理</h2>
        <p>
          EESの最大のメリットの一つが、シェンゲン圏での滞在日数の自動管理です。「180日間のうち90日」という滞在ルールの計算が、システムによって正確に行われるようになります。
        </p>

        <h3>従来の問題点</h3>
        <p>
          従来はパスポートのスタンプで滞在日数を管理していたため、以下のような問題がありました。
        </p>
        <ul>
          <li>スタンプが不鮮明で読み取れない場合がある</li>
          <li>複数国を周遊する際にスタンプの整理が困難</li>
          <li>旅行者自身が滞在日数を正確に計算することが難しい</li>
          <li>オーバーステイを意図的に隠しやすい</li>
        </ul>

        <h3>EES導入後の改善点</h3>
        <ul>
          <li>入出国の日時が電子的に正確に記録される</li>
          <li>シェンゲン圏全体での合計滞在日数が自動計算される</li>
          <li>残りの滞在可能日数が入国時に確認できる</li>
          <li>滞在超過が近づくとアラートが発せられる</li>
        </ul>

        <h2 id="border-process">入国審査の流れの変化</h2>
        <p>
          EESとETIAS導入後の入国審査の流れは以下のようになります。
        </p>

        <h3>初回入国時</h3>
        <ol>
          <li>入国審査ブースまたはセルフサービスキオスクに進む</li>
          <li>パスポートをスキャンする（ETIASステータスが自動確認される）</li>
          <li>指紋を登録する（4本指をスキャナーにかざす）</li>
          <li>顔写真を撮影する（カメラに向かう）</li>
          <li>入国審査官またはシステムが入国を承認する</li>
          <li>EESに入国記録が登録される</li>
        </ol>

        <h3>2回目以降の入国</h3>
        <ol>
          <li>入国審査ブースまたはセルフサービスキオスクに進む</li>
          <li>パスポートをスキャンする</li>
          <li>指紋または顔写真で本人確認（登録済みデータとの照合）</li>
          <li>入国が承認される</li>
        </ol>
        <p>
          2回目以降は大幅に手続きが簡略化されるため、頻繁にヨーロッパを訪れるビジネスパーソンにとっては利便性が向上するでしょう。
        </p>

        <h2 id="japan-impact">日本人旅行者への具体的な影響</h2>
        <p>
          EESとETIASの導入によって、日本人旅行者の渡航体験は以下のように変化します。
        </p>

        <h3>渡航前</h3>
        <ul>
          <li>ETIAS申請が必要になる（20ユーロ、オンライン10〜15分）</li>
          <li>パスポートのICチップ確認が必要</li>
        </ul>

        <h3>入国時</h3>
        <ul>
          <li>初回はバイオメトリクス登録で従来より時間がかかる（5〜10分追加）</li>
          <li>2回目以降はスムーズになる可能性あり</li>
          <li>パスポートへのスタンプ押印が廃止される</li>
        </ul>

        <h3>滞在中</h3>
        <ul>
          <li>滞在日数が自動管理されるため、オーバーステイのリスクが低減</li>
          <li>EESアプリで残りの滞在可能日数を確認できるようになる予定</li>
        </ul>

        <h3>出国時</h3>
        <ul>
          <li>出国記録が自動的にEESに登録される</li>
          <li>出国スタンプの押印も廃止される</li>
        </ul>

        <div className="warning-box">
          <div className="warning-box-title">パスポートスタンプの廃止について</div>
          <p>
            EES導入後はパスポートへの入出国スタンプの押印が廃止されます。旅の記念としてスタンプを集めている方にとっては残念かもしれませんが、記録はすべて電子的に管理されるため、手続き上は問題ありません。
          </p>
        </div>

        <h2 id="timeline">EES導入スケジュール</h2>
        <p>
          EESの導入はETIASよりも先行して進められています。EESはETIASの基盤となるシステムであり、EESが稼働した後にETIASが追加される形で展開されます。
        </p>
        <p>
          EESの正式な運用開始日はまだ確定していませんが、ETIASの開始（2026年Q4）に先行して稼働することが計画されています。両システムが連動して初めて、EUのスマートボーダー戦略が完成します。
        </p>

        <h2 id="privacy">プライバシーとデータ保護</h2>
        <p>
          EESで収集されるバイオメトリクスデータのプライバシー保護は、EUの一般データ保護規則（GDPR）に基づいて厳格に管理されます。
        </p>
        <ul>
          <li>データの利用目的は国境管理に限定される</li>
          <li>保存期間は3年間で、期限を過ぎると自動削除される</li>
          <li>データへのアクセスは権限を持つ国境管理官と法執行機関に限定される</li>
          <li>商業目的でのデータ利用は一切禁止されている</li>
          <li>旅行者には自身のデータへのアクセス権、訂正権、削除権がある</li>
        </ul>

        <h2 id="faq">よくある質問</h2>
        <FaqAccordion items={faqs} />

        <div className="related-links">
          <h3>関連ページ</h3>
          <ul>
            <li><Link href="/guide/">ETIAS完全ガイド</Link></li>
            <li><Link href="/flow/">ETIAS申請方法</Link></li>
            <li><Link href="/countries/">ETIAS対象国一覧</Link></li>
            <li><Link href="/comparison/">ETIAS vs ESTA vs K-ETA比較</Link></li>
            <li><Link href="/faq/">ETIASよくある質問</Link></li>
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
          <h2>EESとETIAS、両方の準備を</h2>
          <p>
            ヨーロッパ渡航には両システムへの対応が必要です。まずはETIASの申請方法を確認しましょう。
          </p>
          <Link href="/flow/" className="btn btn-primary btn-lg">
            申請手順を確認する
          </Link>
        </div>
      </section>
    </>
  );
}
