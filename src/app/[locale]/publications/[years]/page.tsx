import styles from "./page.module.css";
import PublicationsPage from "@/components/pages/publications";
import { fetchPublications } from "@/lib/microcms";
import { notFound } from "next/navigation";

// 完全な静的生成のための設定
export const dynamic = "force-static";
export const revalidate = false;

// 静的パラメータを生成
export async function generateStaticParams() {
  const publications = await fetchPublications();
  const years = Object.keys(publications);

  return years.map((year) => ({
    years: year,
  }));
}

export default async function MemberArchive({
  params,
}: {
  params: Promise<{ years: string }>;
}) {
  const { years } = await params;
  const publications = await fetchPublications();

  // 存在しない年度の場合は404
  if (!publications[years]) {
    notFound();
  }

  return (
    <div className={styles.page}>
      <PublicationsPage publications={publications} selectedYear={years} />
    </div>
  );
}
