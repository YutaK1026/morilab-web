import styles from "./page.module.css";
import MemberPage from "@/components/pages/members";
import { fetchMembers } from "@/lib/microcms";
import { notFound } from "next/navigation";

// 完全な静的生成のための設定
export const dynamic = "force-static";
export const revalidate = false;

// 静的パラメータを生成
export async function generateStaticParams() {
  const members = await fetchMembers();
  const years = Object.keys(members);

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
  const members = await fetchMembers();

  // 存在しない年度の場合は404
  if (!members[years]) {
    notFound();
  }

  return (
    <div className={styles.page}>
      <MemberPage members={members} selectedYear={years} />
    </div>
  );
}
