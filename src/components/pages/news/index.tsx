import { fetchLatestNews } from "@/lib/microcms";
import { TitleSection, NewsSection } from "./clients";
import { News } from "@/lib/microcms";

interface NewsPageProps {
  news?: News[];
  allNews?: boolean;
  currentPage?: number;
  totalPages?: number;
}

export default async function NewsPage({
  news: propNews,
  allNews = false,
  currentPage = 1,
  totalPages = 1,
}: NewsPageProps = {}) {
  const news = propNews || (await fetchLatestNews());

  return (
    <div>
      <TitleSection />
      <NewsSection
        news={news}
        allNews={allNews}
        currentPage={currentPage}
        totalPages={totalPages}
      />
    </div>
  );
}
