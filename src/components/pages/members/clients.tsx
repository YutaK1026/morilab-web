"use client";

import { PageTitle } from "@/components/ui/page-title";
import { SectionHeader } from "@/components/ui/section-title";
import styles from "./clients.module.css";
import { useTranslations } from "next-intl";
import { useParams } from "next/navigation";

type MemberSectionProps = {
  members: Record<string, Record<string, string[]>>;
  selectedYear: string;
};

/* タイトル */
export const TitleSection = () => {
  const t = useTranslations("member");

  return (
    <div className={styles.titleSection}>
      <PageTitle label={t("title")} size="lg" />
    </div>
  );
};

/* メンバ一覧表示 */
export const MemberSection = ({
  members,
  selectedYear,
}: MemberSectionProps) => {
  const t = useTranslations("member");

  return (
    <div className={styles.section}>
      {/* 選択された年度のメンバー表示 */}
      <div className={styles.memberSection}>
        <h2>
          {selectedYear}
          {t("memberList")}
        </h2>
        {members[selectedYear] &&
          Object.entries(members[selectedYear]).map(([post, names]) => (
            <div key={post} className={styles.postGroup}>
              <h3>{post}</h3>
              <ul className={styles.memberList}>
                {names.map((name) => (
                  <li key={name}>{name}</li>
                ))}
              </ul>
              {/* ボーダーを引いて，区切り線とする */}
              <div className={styles.border} />
            </div>
          ))}
      </div>
    </div>
  );
};

/* 年度選択 */
export const YearSelectorSection = ({
  members,
  selectedYear,
}: MemberSectionProps) => {
  const t = useTranslations("member");
  const params = useParams<{ locale: string; years: string }>();
  const locale = params.locale;
  // 年度の一覧を取得
  const years = Object.keys(members).sort((a, b) => b.localeCompare(a));

  return (
    <div className={styles.section}>
      <div className={styles.yearSelector}>
        <SectionHeader label={t("yearSelector")} size="md" />
        <div className={styles.yearList}>
          {years.map((year) => (
            <a
              key={year}
              href={`/${locale}/members/${year}`}
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
