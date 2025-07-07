"use client";

import { PageTitle } from "@/components/ui/page-title";
import styles from "./clients.module.css";
import { useTranslations } from "next-intl";
import { SectionHeader } from "@/components/ui/section-title";
import Image from "next/image";

/* タイトル */
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

/* 研究室からのメッセージ */
export const MessageSection = () => {
  const t = useTranslations("about.message");
  return (
    <div className={styles.messageSection}>
      <SectionHeader label={t("title")} size="lg" />
      <div className={styles.messageContainer}>
        <p>{t("message")}</p>
      </div>
    </div>
  );
};

/* 研究室の配属について */
export const EntrySection = () => {
  const t = useTranslations("about.entry");
  return (
    <div className={styles.entrySection}>
      <SectionHeader label={t("title")} size="lg" />
      <div className={styles.entryContainer}>
        <SectionHeader label={t("bachelor.title")} size="md" />
        <div className={styles.entryDescription}>
          <p>{t("bachelor.description")}</p>
        </div>
        <SectionHeader label={t("master.title")} size="md" />
        <div className={styles.entryDescription}>
          <p>{t("master.description")}</p>
        </div>
        <SectionHeader label={t("doctor.title")} size="md" />
        <div className={styles.entryDescription}>
          <p>{t("doctor.description")}</p>
        </div>
      </div>
    </div>
  );
};
