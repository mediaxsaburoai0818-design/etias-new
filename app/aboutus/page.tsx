import type { Metadata } from "next";
import Breadcrumb from "../components/Breadcrumb";

export const metadata: Metadata = {
  title: "特定商取引法に基づく表記",
  description: "ETIAS Application Deskの特定商取引法に基づく表記。役務提供事業者、販売価格、支払い方法、提供時期、キャンセルポリシーをご確認ください。",
  alternates: { canonical: "https://etias-application-desk.com/aboutus/" },
};

export default function AboutUsPage() {
  return (
    <>
      <Breadcrumb items={[{ name: "特定商取引法に基づく表記" }]} />
      <div className="legal-content">
        <h1>特定商取引法に基づく表記</h1>

        <table className="legal-table">
          <tbody>
            <tr>
              <th>サイト名</th>
              <td>ETIAS Application Desk</td>
            </tr>
            <tr>
              <th>役務提供事業者</th>
              <td>株式会社M2 Agency</td>
            </tr>
            <tr>
              <th>代表者</th>
              <td>森美咲</td>
            </tr>
            <tr>
              <th>所在地</th>
              <td>〒135-0063 東京都江東区有明3-7-11 有明パークビル</td>
            </tr>
            <tr>
              <th>メールアドレス</th>
              <td>support@etias-application-desk.com</td>
            </tr>
            <tr>
              <th>電話番号</th>
              <td>03-4455-9260</td>
            </tr>
            <tr>
              <th>営業時間</th>
              <td>お申し込み、お問い合わせは24時間365日受け付けております。</td>
            </tr>
            <tr>
              <th>販売価格</th>
              <td>17,000円（税込 18,700円）</td>
            </tr>
            <tr>
              <th>追加料金</th>
              <td>追加料金は発生いたしません。</td>
            </tr>
            <tr>
              <th>支払い時期</th>
              <td>料金はクレジットカードにより前払いされ、申込が完了し申請料お支払いページの「今すぐ支払う」ボタン押下時に決済が行われます。</td>
            </tr>
            <tr>
              <th>支払い方法</th>
              <td>VISA、Mastercard、JCB、Diners Club、American Expressのクレジットカード決済</td>
            </tr>
            <tr>
              <th>注文方法</th>
              <td>当サイトのETIAS申請書記入からお申し込み</td>
            </tr>
            <tr>
              <th>提供方法</th>
              <td>決済完了時に「申請受付通知」、審査結果時に「渡航許可通知」をメール送信</td>
            </tr>
            <tr>
              <th>提供時間</th>
              <td>原則24時間以内、最長96時間（ETIASの審査状況により、追加情報の確認が必要な場合はさらにお時間をいただく場合があります）</td>
            </tr>
            <tr>
              <th>キャンセルポリシー</th>
              <td>
                申請前のキャンセルは決済手数料700円のみご負担いただきます。審査開始後は返金不可となります。追加質問から2週間ご回答がない場合はキャンセル扱いとし、700円を差し引いて返金いたします。申請が拒否された場合も700円を差し引いて返金いたします。
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}
