import NewsPage from "@/components/pages/news";
import styles from "./page.module.css";
import { fetchAllNews } from "@/lib/microcms";

export default async function News() {
  const allNews = await fetchAllNews();
  const totalCount = allNews.length;
  const totalPages = Math.ceil(totalCount / 10);
  const news = allNews.slice(0, 10);

  return (
    <div className={styles.page}>
      <NewsPage
        news={news}
        allNews={true}
        currentPage={1}
        totalPages={totalPages}
      />
    </div>
  );
}
