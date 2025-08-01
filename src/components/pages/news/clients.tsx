"use client";

import { PageTitle } from "@/components/ui/page-title";
import styles from "./clients.module.css";
import { useTranslations } from "next-intl";
import { NewsList } from "@/components/ui/newslist";
import { News } from "@/lib/microcms";
import { useParams, useRouter } from "next/navigation";

/* タイトル */
export const TitleSection = () => {
  const t = useTranslations("news");

  return (
    <div className={styles.titleSection}>
      <PageTitle label={t("title")} size="lg" />
    </div>
  );
};

/* お知らせ */
export const NewsSection = ({
  news,
  allNews = false,
  currentPage = 1,
  totalPages = 1,
}: {
  news: News[];
  allNews?: boolean;
  currentPage?: number;
  totalPages?: number;
}) => {
  const router = useRouter();
  const params = useParams<{ locale: string }>();
  const locale = params.locale;

  const handlePageChange = (page: number) => {
    if (page === 1) {
      router.push(`/${locale}/news`);
    } else {
      router.push(`/${locale}/news/${page}`);
    }
  };

  return (
    <div className={styles.news}>
      <NewsList
        news={news}
        allNews={allNews}
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </div>
  );
};
