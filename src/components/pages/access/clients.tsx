"use client";

import { PageTitle } from "@/components/ui/page-title";
import styles from "./clients.module.css";
import { useTranslations } from "next-intl";
import { SectionHeader } from "@/components/ui/section-title";
import Image from "next/image";

/* タイトル */
export const TitleSection = () => {
  const t = useTranslations("access");

  return (
    <div className={styles.titleSection}>
      <PageTitle label={t("title")} size="lg" />
    </div>
  );
};

/* 連絡方法 */
export const ContactSection = () => {
  const t = useTranslations("access.contact");

  return (
    <div className={styles.section}>
      <SectionHeader label={t("title")} size="lg" />
      <div className={styles.messageContainer}>
        <SectionHeader label={t("phone.title")} size="sm" />
        <p>{t("phone.mori")}</p>
        <p className={styles.paddingLeft}>{t("phone.mori-number")}</p>
        <p className={styles.paddingLeft}>{t("phone.mori-email")}</p>
        <p>{t("phone.lab")}</p>
        <p className={styles.paddingLeft}>{t("phone.lab-phone")}</p>
      </div>
      <div className={styles.messageContainer}>
        <SectionHeader label={t("fax.title")} size="sm" />
        <p>{t("fax.mori")}</p>
        <p className={styles.paddingLeft}>{t("fax.mori-number")}</p>
      </div>
    </div>
  );
};

/* 交通アクセス */
export const AccessSection = () => {
  const t = useTranslations("access.access");

  return (
    <div className={styles.section}>
      <SectionHeader label={t("title")} size="lg" />
      <div className={styles.messageContainer}>
        <SectionHeader label={t("method.title")} size="sm" />
        <p>{t("method.toNagoya")}</p>
        <p className={styles.paddingLeft}>{t("method.toNagoya-detail")}</p>
        <p>{t("method.toKanayama")}</p>
        <p className={styles.paddingLeft}>{t("method.toKanayama-detail")}</p>
        <p>{t("method.toCentrair")}</p>
        <p className={styles.paddingLeft}>{t("method.toCentrair-detail")}</p>
        <p>{t("method.subway")}</p>
        <p className={styles.paddingLeft}>{t("method.subway-detail")}</p>
      </div>
      <div className={styles.messageContainer}>
        <SectionHeader label={t("address.title")} size="sm" />
        <p>{t("address.content")}</p>
      </div>
      <Image
        src="/access/map.png"
        alt="森研究室の地図"
        width={480}
        height={280}
        sizes="(max-width: 480px) 90vw, (max-width: 480px) 60vw, 480px"
        style={{
          width: "100%",
          maxWidth: "480px",
          height: "auto",
          objectFit: "contain",
        }}
      />
    </div>
  );
};
