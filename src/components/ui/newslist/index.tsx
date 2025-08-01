import { News } from "@/lib/microcms";
import styles from "./index.module.css";

interface NewsListProps {
  news: News[];
  allNews?: boolean;
  currentPage?: number;
  totalPages?: number;
  onPageChange?: (page: number) => void;
}

export const NewsList = ({
  news,
  allNews = false,
  currentPage = 1,
  totalPages = 1,
  onPageChange,
}: NewsListProps) => {
  const handlePageChange = (page: number) => {
    if (onPageChange) {
      onPageChange(page);
    }
  };

  return (
    <div className={styles.container}>
      <section className={styles.list}>
        {news.map(({ id, date, title }) => (
          <div key={id} className={styles.row}>
            <time className={styles.date}>
              {date.replace(/-/g, "/").replace(/T.*$/, "")}
            </time>
            <span className={styles.title}>{title}</span>
          </div>
        ))}
      </section>

      {allNews && totalPages > 1 && (
        <div className={styles.pagination}>
          {currentPage > 1 && (
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              className={styles.pageButton}
            >
              前へ
            </button>
          )}

          <div className={styles.pageNumbers}>
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                onClick={() => handlePageChange(page)}
                className={`${styles.pageButton} ${
                  page === currentPage ? styles.active : ""
                }`}
              >
                {page}
              </button>
            ))}
          </div>

          {currentPage < totalPages && (
            <button
              onClick={() => handlePageChange(currentPage + 1)}
              className={styles.pageButton}
            >
              次へ
            </button>
          )}
        </div>
      )}
    </div>
  );
};
