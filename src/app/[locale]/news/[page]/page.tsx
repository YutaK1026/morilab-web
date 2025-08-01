import styles from "../page.module.css";
import NewsPage from "@/components/pages/news";
import { fetchAllNews } from "@/lib/microcms";
import { notFound } from "next/navigation";

// 完全な静的生成のための設定
export const dynamic = "force-static";
export const revalidate = false;

// 静的パラメータを生成
export async function generateStaticParams() {
  const news = await fetchAllNews();
  const totalCount = news.length;
  const totalPages = Math.ceil(totalCount / 10);

  return Array.from({ length: totalPages }, (_, i) => ({
    page: (i + 1).toString(),
  }));
}

export default async function NewsPageWithPagination({
  params,
}: {
  params: Promise<{ page: string }>;
}) {
  const { page } = await params;
  const pageNumber = parseInt(page, 10);

  if (isNaN(pageNumber) || pageNumber < 1) {
    notFound();
  }

  const allNews = await fetchAllNews();
  const totalCount = allNews.length;
  const totalPages = Math.ceil(totalCount / 10);

  // 存在しないページの場合は404
  if (pageNumber > totalPages) {
    notFound();
  }

  // currentPageに応じて10個ずつスライス
  const startIndex = (pageNumber - 1) * 10;
  const endIndex = startIndex + 10;
  const news = allNews.slice(startIndex, endIndex);

  return (
    <div className={styles.page}>
      <NewsPage
        news={news}
        allNews={true}
        currentPage={pageNumber}
        totalPages={totalPages}
      />
    </div>
  );
}
