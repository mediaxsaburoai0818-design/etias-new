import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../components/Breadcrumb";
import FaqAccordion from "../components/FaqAccordion";

export const metadata: Metadata = {
  title: "ETIAS申請却下・トラブル対応ガイド",
  description:
    "ETIAS申請が却下された場合の理由、不服申し立ての方法、再申請の手順を解説。日本人旅行者が遭遇しやすいトラブルとその対処法をまとめました。",
  alternates: { canonical: "https://etias-application-desk.com/denied/" },
  openGraph: {
    title: "ETIAS申請却下・トラブル対応ガイド",
    description: "ETIAS申請が却下された場合の理由と対処法を解説。",
    url: "https://etias-application-desk.com/denied/",
    type: "article",
    locale: "ja_JP",
    siteName: "ETIAS Application Desk",
  },
};

const faqs = [
  {
    question: "ETIASが却下される確率はどのくらいですか？",
    answer: "日本国籍の申請者の場合、却下率は非常に低いと予想されます。ESTAの却下率が日本人で1%未満であることを考慮すると、ETIASでも同程度の低い却下率になるでしょう。通常の観光やビジネス目的であれば心配する必要はほとんどありません。",
  },
  {
    question: "不服申し立てにはどのくらいの期間がかかりますか？",
    answer: "不服申し立ての処理期間は加盟国によって異なりますが、一般的には数週間から数か月かかる可能性があります。渡航までに時間的余裕がない場合は、不服申し立てと並行して代替手段（シェンゲンビザの申請など）も検討してください。",
  },
  {
    question: "入力ミスで却下された場合、すぐに再申請できますか？",
    answer: "入力ミスが原因であることが明確であれば、正しい情報で再度申請することが可能です。ただし、再申請でも新たに20ユーロの申請料が必要になります。入力ミスを防ぐため、送信前に必ず内容を確認しましょう。",
  },
  {
    question: "過去の犯罪歴がある場合、ETIASは絶対に却下されますか？",
    answer: "犯罪歴があるだけで自動的に却下されるわけではありません。犯罪の内容、時期、再犯の可能性などが総合的に判断されます。軽微な違反や古い前歴であれば承認される可能性もありますが、セキュリティに直接関わる犯罪歴がある場合は却下リスクが高くなります。",
  },
  {
    question: "ETIASが却下されたらヨーロッパには一切行けないのですか？",
    answer: "ETIASが却下されても、シェンゲンビザを申請することでヨーロッパに渡航できる可能性があります。シェンゲンビザは大使館で面接を受けて取得するもので、ETIASよりも詳細な審査が行われますが、個別の事情を説明する機会があります。",
  },
];

export default function DeniedPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "ETIAS申請却下・トラブル対応ガイド",
            datePublished: "2026-05-20",
            dateModified: "2026-05-20",
            author: { "@type": "Organization", name: "ETIAS Application Desk" },
            publisher: { "@type": "Organization", name: "ETIAS Application Desk" },
            description: "ETIAS申請が却下された場合の対処法。",
            mainEntityOfPage: "https://etias-application-desk.com/denied/",
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
      <Breadcrumb items={[{ name: "申請却下・トラブル対応" }]} />
      <section className="svc-hero">
        <div className="container">
          <h1>ETIAS申請却下・トラブル対応ガイド</h1>
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
            <li><a href="#overview">却下の概要と日本人への影響</a></li>
            <li><a href="#reasons">主な却下理由</a></li>
            <li><a href="#notification">却下通知の内容</a></li>
            <li><a href="#appeal">不服申し立ての手順</a></li>
            <li><a href="#reapply">再申請の方法</a></li>
            <li><a href="#alternatives">代替手段（シェンゲンビザ）</a></li>
            <li><a href="#prevention">却下を防ぐためのポイント</a></li>
            <li><a href="#common-troubles">よくあるトラブルと対処法</a></li>
            <li><a href="#support">サポート・問い合わせ先</a></li>
            <li><a href="#faq">よくある質問</a></li>
          </ol>
        </nav>

        <h2 id="overview">却下の概要と日本人への影響</h2>
        <p>
          ETIASの申請が却下されることは、特に日本国籍の申請者にとってはまれなケースと考えられます。日本のパスポートは世界的に高い信頼性を持ち、シェンゲン圏との関係も良好であるため、通常の渡航目的であれば申請が却下される可能性は非常に低いでしょう。
        </p>
        <p>
          しかし、ゼロではありません。入力情報の誤り、過去の渡航歴に関する問題、データベースとの照合で何らかのフラグが立った場合など、予期せぬ理由で却下される可能性は存在します。万が一却下された場合に慌てないよう、対処法を事前に知っておくことが重要です。
        </p>
        <p>
          アメリカのESTAでも日本人の却下率は1%未満とされており、ETIASも同程度の低い却下率が予想されます。とはいえ、年間数百万人の日本人がヨーロッパを訪れることを考えると、少数ではあっても却下されるケースは発生するでしょう。
        </p>

        <h2 id="reasons">主な却下理由</h2>
        <p>
          ETIASの申請が却下される主な理由を以下にまとめます。
        </p>

        <h3>セキュリティ上の理由</h3>
        <ul>
          <li>犯罪歴（特にテロ関連、薬物関連、組織犯罪関連）がある場合</li>
          <li>国際的な指名手配リストや注意人物リストに登録されている場合</li>
          <li>紛争地域への渡航歴がセキュリティ上のリスクと判断された場合</li>
        </ul>

        <h3>入国条件に関する理由</h3>
        <ul>
          <li>過去にシェンゲン圏でオーバーステイ（滞在超過）した経歴がある場合</li>
          <li>過去にシェンゲン圏の国から入国を拒否された、または強制退去させられた経歴がある場合</li>
          <li>入国禁止措置が出されている場合</li>
        </ul>

        <h3>申請内容に関する理由</h3>
        <ul>
          <li>虚偽の情報を申告した場合（セキュリティ質問への虚偽回答を含む）</li>
          <li>パスポート情報と申請情報に不一致がある場合</li>
          <li>パスポートが失効している、またはICチップが搭載されていない場合</li>
        </ul>

        <h3>健康上の理由</h3>
        <ul>
          <li>公衆衛生上のリスクとなる特定の感染症に罹患している場合</li>
        </ul>

        <div className="warning-box">
          <div className="warning-box-title">重要な注意</div>
          <p>
            セキュリティ質問に対して虚偽の回答をすることは絶対に避けてください。データベースとの照合で虚偽が判明した場合、単なる入力ミスよりも厳しい扱いを受け、将来の申請にも悪影響を及ぼす可能性があります。該当する事項がある場合は正直に申告しましょう。
          </p>
        </div>

        <h2 id="notification">却下通知の内容</h2>
        <p>
          ETIASの申請が却下された場合、登録したメールアドレスに却下通知が届きます。通知には以下の情報が含まれます。
        </p>
        <ul>
          <li>却下の決定を行った加盟国名</li>
          <li>却下の理由（一般的な理由カテゴリー）</li>
          <li>不服申し立ての方法と期限</li>
          <li>問い合わせ先の情報</li>
        </ul>
        <p>
          却下理由は安全保障上の配慮から、詳細な説明が省略されるケースもあります。具体的な理由が不明な場合は、不服申し立てのプロセスで詳細を確認することができます。
        </p>

        <h2 id="appeal">不服申し立ての手順</h2>
        <p>
          ETIASの申請が却下された場合、不服申し立て（アピール）を行う権利があります。不服申し立ては、却下の決定を行った加盟国の当局に対して行います。
        </p>

        <h3>不服申し立ての流れ</h3>
        <ol>
          <li>却下通知に記載された不服申し立て先と期限を確認する</li>
          <li>却下理由に対する反論や補足説明を準備する</li>
          <li>必要に応じて裏付け資料（犯罪経歴証明書、渡航歴の証明など）を準備する</li>
          <li>指定された方法（オンラインまたは書面）で不服申し立てを提出する</li>
          <li>審査結果を待つ（処理期間は加盟国により異なる）</li>
        </ol>

        <h3>不服申し立てで有効な証拠</h3>
        <ul>
          <li>警察証明書（犯罪経歴証明書）: 犯罪歴がないことを証明する公的書類</li>
          <li>渡航歴の証明: パスポートの入出国スタンプのコピーなど</li>
          <li>雇用証明書: 日本での安定した職業があることの証明</li>
          <li>帰国意思の証明: 帰国便の予約確認書、日本での不動産所有証明など</li>
        </ul>

        <div className="tip-box">
          <div className="tip-box-title">日本人旅行者へのアドバイス</div>
          <p>
            日本人が不服申し立てを行う場合、日本の法務局で取得できる「犯罪経歴証明書」が有効な証拠となります。取得には2〜4週間程度かかるため、却下通知を受け取ったらすぐに手配することをお勧めします。
          </p>
        </div>

        <h2 id="reapply">再申請の方法</h2>
        <p>
          不服申し立てが認められなかった場合や、却下原因を解消できた場合は、再度ETIASを申請することができます。再申請の際は以下の点に注意してください。
        </p>
        <ul>
          <li>却下原因を特定し、可能であれば解消してから再申請する</li>
          <li>前回の入力ミスが原因であれば、正しい情報で再度申請する</li>
          <li>再申請でも20ユーロの申請料が新たに発生する</li>
          <li>同じ内容で繰り返し申請しても結果は変わらない可能性が高い</li>
        </ul>

        <h2 id="alternatives">代替手段（シェンゲンビザ）</h2>
        <p>
          ETIASの申請が却下され、不服申し立てでも解決しない場合は、シェンゲンビザを申請する方法があります。シェンゲンビザはETIASよりも詳細な審査が行われますが、面接で個別の事情を説明する機会があります。
        </p>
        <p>
          シェンゲンビザの申請は訪問予定国の大使館・領事館で行います。東京にある各国の大使館のほか、大阪や名古屋の領事館でも申請を受け付けている場合があります。
        </p>

        <h3>シェンゲンビザの概要</h3>
        <table>
          <thead>
            <tr>
              <th>項目</th>
              <th>内容</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>申請料</td>
              <td>80ユーロ（約12,800円）</td>
            </tr>
            <tr>
              <td>処理期間</td>
              <td>15日〜45日</td>
            </tr>
            <tr>
              <td>必要書類</td>
              <td>パスポート、写真、旅程表、宿泊予約、海外旅行保険、資金証明など</td>
            </tr>
            <tr>
              <td>面接</td>
              <td>必要（大使館・領事館にて）</td>
            </tr>
          </tbody>
        </table>

        <h2 id="prevention">却下を防ぐためのポイント</h2>
        <p>
          ETIASの却下リスクを最小限に抑えるために、以下のポイントを確認しましょう。
        </p>
        <ul>
          <li>パスポート情報は1文字ずつ慎重に入力し、送信前に必ず見直す</li>
          <li>セキュリティ質問にはすべて正直に回答する</li>
          <li>パスポートの残存有効期間が十分にあることを確認する</li>
          <li>過去にヨーロッパで滞在超過の経験がある場合は、再発防止策を明確にしておく</li>
          <li>渡航の72時間以上前に申請を完了し、問題があった場合の対応時間を確保する</li>
          <li>公式サイトから申請する（非公式サイトの入力エラーリスクを避ける）</li>
        </ul>

        <h2 id="common-troubles">よくあるトラブルと対処法</h2>

        <h3>申請料の決済エラー</h3>
        <p>
          クレジットカードの決済が通らない場合は、カードの海外利用制限が有効になっていないか確認してください。カード会社に連絡して一時的に制限を解除するか、別のカードで試してみましょう。
        </p>

        <h3>確認メールが届かない</h3>
        <p>
          申請後に確認メールが届かない場合は、迷惑メールフォルダを確認してください。メールアドレスの入力ミスの可能性もあるため、ETIAS公式サイトのステータス確認ページで申請状況を直接確認することをお勧めします。
        </p>

        <h3>審査が長期間保留されている</h3>
        <p>
          96時間を超えても結果が届かない場合は、追加情報の提出を求めるメールが届いていないか確認してください。迷惑メールフォルダに振り分けられている可能性があります。それでも連絡がない場合は、ETIASのカスタマーサポートに問い合わせましょう。
        </p>

        <h3>パスポート番号の入力ミス</h3>
        <p>
          日本のパスポート番号はアルファベット2文字と数字7桁の組み合わせです（例: TK1234567）。アルファベットの「O」と数字の「0」、「I」と「1」などを間違えやすいので注意してください。
        </p>

        <h2 id="support">サポート・問い合わせ先</h2>
        <p>
          ETIASに関する問い合わせは以下の窓口で対応しています。
        </p>
        <ul>
          <li>ETIAS公式サイトのカスタマーサポート（運用開始後に公開予定）</li>
          <li>渡航先国の在日大使館・領事館</li>
          <li>eu-LISA（大規模ITシステム運用管理機関）のヘルプデスク</li>
        </ul>
        <p>
          日本語での問い合わせに対応しているかは現時点で確定していませんが、英語での問い合わせは確実に対応されるでしょう。
        </p>

        <h2 id="faq">よくある質問</h2>
        <FaqAccordion items={faqs} />

        <div className="related-links">
          <h3>関連ページ</h3>
          <ul>
            <li><Link href="/guide/">ETIAS完全ガイド</Link></li>
            <li><Link href="/flow/">ETIAS申請方法</Link></li>
            <li><Link href="/faq/">ETIASよくある質問</Link></li>
            <li><Link href="/fee/">ETIAS費用・支払い方法</Link></li>
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
          <h2>正確な情報入力でスムーズな申請を</h2>
          <p>
            入力ミスを防ぐことが却下リスク低減の第一歩です。申請手順を事前に確認しておきましょう。
          </p>
          <Link href="/flow/" className="btn btn-primary btn-lg">
            申請手順を確認する
          </Link>
        </div>
      </section>
    </>
  );
}
