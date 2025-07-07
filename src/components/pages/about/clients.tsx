import { PageTitle } from "@/components/ui/page-title";
import styles from "./clients.module.css";
import { useTranslations } from "next-intl";
import { SectionHeader } from "@/components/ui/section-title";

export const TitleSection = () => {
  const t = useTranslations("about");
  return (
    <div className={styles.titleSection}>
      <PageTitle label={t("title")} size="lg" />
    </div>
  );
};

/* 教員紹介 */
export const ProfessorSection = () => {
  const t = useTranslations("about.professor");
  return (
    <div className={styles.professorSection}>
      <SectionHeader label={t("title")} size="lg" />
    </div>
  );
};
