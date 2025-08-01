"use client";

import { PageTitle } from "@/components/ui/page-title";
import { useTranslations } from "next-intl";
import styles from "./clients.module.css";
import { useParams } from "next/navigation";
import { SectionHeader } from "@/components/ui/section-title";

type PublicationSectionProps = {
  publications: Record<string, Record<string, string[]>>;
  selectedYear: string;
};

/* タイトル */
export const TitleSection = () => {
  const t = useTranslations("publication");

  return (
    <div className={styles.titleSection}>
      <PageTitle label={t("title")} size="lg" />
    </div>
  );
};

/* 論文一覧表示 */
export const PublicationSection = ({
  publications,
  selectedYear,
}: PublicationSectionProps) => {
  const t = useTranslations("publication");

  return (
    <div className={styles.section}>
      {/* 選択された年度のメンバー表示 */}
      <div className={styles.publicationSection}>
        <h2>
          {selectedYear}
          {t("publicationList")}
        </h2>
        {publications[selectedYear] &&
          Object.entries(publications[selectedYear]).map(
            ([genre, publications]) => (
              <div key={genre} className={styles.genreGroup}>
                <h3>{genre}</h3>
                <ul className={styles.publicationList}>
                  {publications.map((publication) => (
                    <li key={publication}>{publication}</li>
                  ))}
                </ul>
                {/* ボーダーを引いて，区切り線とする */}
                <div className={styles.border} />
              </div>
            )
          )}
      </div>
    </div>
  );
};

/* 年度選択 */
export const YearSelectorSection = ({
  publications,
  selectedYear,
}: PublicationSectionProps) => {
  const t = useTranslations("publication");
  const params = useParams<{ locale: string; years: string }>();
  const locale = params.locale;
  // 年度の一覧を取得
  const years = Object.keys(publications).sort((a, b) => b.localeCompare(a));

  return (
    <div className={styles.section}>
      <div className={styles.yearSelector}>
        <SectionHeader label={t("yearSelector")} size="md" />
        <div className={styles.yearList}>
          {years.map((year) => (
            <a
              key={year}
              href={`/${locale}/publications/${year}`}
              className={`${styles.yearLink} ${
                year === selectedYear ? styles.active : ""
              }`}
            >
              {year}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};
