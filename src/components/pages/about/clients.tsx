"use client";

import { PageTitle } from "@/components/ui/page-title";
import styles from "./clients.module.css";
import { useTranslations } from "next-intl";
import { SectionHeader } from "@/components/ui/section-title";
import Image from "next/image";

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
      <div className={styles.container}>
        <div className={styles.professorImage}>
          {/* 画像のサイズを調整 heightとwidthの比率を一定にする*/}
          <Image
            src="/about/professor.png"
            alt="教授"
            height={400}
            width={400}
            style={{
              objectFit: "contain",
            }}
          />
        </div>
        <div className={styles.containerRight}>
          <div className={styles.professorName}>
            <h3>{t("name")}</h3>
          </div>
          <div className={styles.professorDescription}>
            <p>{t("mail")}</p>
            <p>{t("description")}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
