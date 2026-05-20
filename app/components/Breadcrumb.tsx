import Link from "next/link";

type BreadcrumbItem = {
  name: string;
  href?: string;
};

type BreadcrumbProps = {
  items: BreadcrumbItem[];
};

export default function Breadcrumb({ items }: BreadcrumbProps) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "ホーム",
        item: "https://etias-application-desk.com/",
      },
      ...items.map((item, index) => ({
        "@type": "ListItem",
        position: index + 2,
        name: item.name,
        ...(item.href
          ? { item: `https://etias-application-desk.com${item.href}` }
          : {}),
      })),
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <nav className="breadcrumb" aria-label="パンくずリスト">
        <div className="container">
          <ol>
            <li>
              <Link href="/">ホーム</Link>
            </li>
            {items.map((item, index) => (
              <li key={index}>
                {item.href ? (
                  <Link href={item.href}>{item.name}</Link>
                ) : (
                  <span className="breadcrumb-current">{item.name}</span>
                )}
              </li>
            ))}
          </ol>
        </div>
      </nav>
    </>
  );
}
