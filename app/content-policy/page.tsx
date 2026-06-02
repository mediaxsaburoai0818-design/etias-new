import type { Metadata } from "next";
import Breadcrumb from "../components/Breadcrumb";

export const metadata: Metadata = {
  title: "コンテンツポリシー",
  description: "ETIAS Application Deskのコンテンツポリシー。当サイトの位置づけ、運営会社の基本情報、提供する情報、コンテンツ制作の流れについて説明します。",
  alternates: { canonical: "https://etias-application-desk.com/content-policy/" },
};

export default function ContentPolicyPage() {
  return (
    <>
      <Breadcrumb items={[{ name: "コンテンツポリシー" }]} />
      <section className="svc-hero svc-hero-content-policy">
        <div className="container">
          <h1>コンテンツポリシー</h1>
        </div>
      </section>
      <article className="svc-article">
        <h2>ETIAS Application Deskとは</h2>
        <p>ETIAS Application Deskは、「電子渡航認証ETIASの基本情報や申請方法、シェンゲンビザ、EES（出入国システム）など、ヨーロッパ渡航に必要な情報を紹介するメディアサイト」です。渡航予定者だけでなく興味がある方向けに分かりやすい記事を発信しており、ヨーロッパ旅行に役立つ最新ニュースも掲載しています。</p>

        <h2>運営会社の基本情報</h2>
        <p><strong>サイト名：</strong>ETIAS Application Desk</p>
        <p><strong>役務提供事業者：</strong>株式会社M2 Agency</p>
        <p><strong>電話番号：</strong>03-4455-9260</p>
        <p><strong>事業内容：</strong>自社メディア「ETIAS Application Desk」を運営。ETIAS申請サポート、基本情報発信、シェンゲンビザ関連情報、最新ニュース、EES（出入国システム）の登録方法等を提供しています。</p>

        <h2>ETIAS Application Deskで得られる情報</h2>

        <h3>電子渡航認証システム「ETIAS」の基本情報と申請方法</h3>
        <p>ETIASの基本情報、申請方法（PC・スマホアプリ）、グループ・家族申請の手順、審査結果に関する記事を掲載しており、初めての利用者にも分かりやすく解説しています。</p>

        <h3>シェンゲンビザの関連情報</h3>
        <p>ETIASとビザの違い、短期訪問ビザ、学生ビザ、就労ビザなど各々の申請方法や条件について詳しく解説しています。</p>

        <h3>ヨーロッパへの入国における手続きの最新情報</h3>
        <p>EES（出入国システム／Entry-Exit System）の概要や登録方法、ETIASとEESの関係について詳しく解説しています。</p>

        <h3>ヨーロッパ旅行に必要な持ち物の情報</h3>
        <p>必要な持ち物、おすすめの服装、便利グッズを紹介。各国の観光局公式アプリ、路線図、地図アプリ、緊急連絡先など滞在中に役立つ情報を提供しています。</p>

        <h2>ETIAS Application Deskのコンテンツ制作の流れ</h2>

        <h3>1. ライティングチームによる記事内容の企画・方針決定</h3>
        <p>「ヨーロッパ渡航をより快適に楽しんでもらうには？」という観点からライティングチームで話し合い、記事内容と方針を決定します。シェンゲン圏入国時に必要な情報を取り入れつつ、ユーザーの疑問に寄り添った記事構成を心がけています。</p>

        <h3>2. ライティングチームによる記事の執筆</h3>
        <p>記事方針と構成が確定後、記事要件に沿って執筆を実施。読みやすい構成と表現を意識し、EU当局（欧州委員会・eu-LISA）の最新情報との相違がないか確認して納品します。</p>

        <h3>3. ライティングチームによる記事の校閲・品質チェック</h3>
        <p>納品後、文章の校正と校閲、記事全体のクオリティチェックを実施。「誰でも読みやすい文章」「ヨーロッパ渡航時における疑問解消」を意識しながらチーム内コミュニケーションで内容調整を行います。</p>

        <h3>4. 記事の入稿、定期的な見直し・更新作業</h3>
        <p>記事完成後、サイトにアップします。パソコンとスマートフォンの両方で確認を行い、読みやすさを最終チェック。ヨーロッパ渡航に関する情報は日々更新されるため、常に最新情報をお届けできるよう定期的に品質管理を実施しています。</p>
      </article>
    </>
  );
}
