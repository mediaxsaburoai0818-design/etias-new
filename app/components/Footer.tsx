import Link from "next/link";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-col">
            <h4>ETIASについて</h4>
            <ul>
              <li><Link href="/guide/">ETIAS完全ガイド</Link></li>
              <li><Link href="/flow/">申請方法・手順</Link></li>
              <li><Link href="/fee/">費用・支払い方法</Link></li>
              <li><Link href="/ees/">EESとの関係</Link></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>国別ガイド</h4>
            <ul>
              <li><Link href="/france/">フランス</Link></li>
              <li><Link href="/italy/">イタリア</Link></li>
              <li><Link href="/spain/">スペイン</Link></li>
              <li><Link href="/germany/">ドイツ</Link></li>
              <li><Link href="/switzerland/">スイス</Link></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>比較・FAQ</h4>
            <ul>
              <li><Link href="/comparison/">ETIAS vs ESTA vs K-ETA</Link></li>
              <li><Link href="/esta-comparison/">ESTA経験者向け</Link></li>
              <li><Link href="/faq/">よくある質問</Link></li>
              <li><Link href="/denied/">却下・トラブル対応</Link></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>サイト情報</h4>
            <ul>
              <li><Link href="/countries/">対象国一覧</Link></li>
              <li><Link href="/terms/">利用規約</Link></li>
              <li><Link href="/privacy/">プライバシーポリシー</Link></li>
              <li><Link href="/content-policy/">コンテンツポリシー</Link></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>ETIAS Application Desk - 日本人旅行者のための欧州渡航認証サポート</p>
          <p>当サイトはEU公式機関とは関係のない独立した情報提供サービスです。</p>
          <div className="footer-legal">
            <Link href="/terms/">利用規約</Link>
            <Link href="/privacy/">プライバシーポリシー</Link>
            <Link href="/content-policy/">コンテンツポリシー</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
