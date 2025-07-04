"use client";

import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { SectionTitle } from "@/components/ui/section-title";
import styles from "./index.module.css";
import { News } from "@/lib/microcms";
import { NewsList } from "./newslist";

type I18nSectionsProps = {
  news: News[];
};

export const MessageSection = () => {
  const t = useTranslations("top");
  return (
    <div className={styles.message}>
      <SectionTitle label={t("message.title")} />
      <div className={styles.messageContent}>
        <p>{t("message.content1")}</p>
        <p>{t("message.content2")}</p>
      </div>
    </div>
  );
};

export const ResearchThemeSection = () => {
  const t = useTranslations("top.researchTheme");
  const router = useRouter();

  return (
    <div className={styles.researchTheme}>
      <SectionTitle label={t("title")} />
      <div className={styles.row}>
        <Card
          src="/top/researchTheme/1.png"
          alt="研究テーマ1"
          title={t("theme1.title")}
          description={t("theme1.description")}
        />
        <Card
          src="/top/researchTheme/1.png"
          alt="研究テーマ1"
          title={t("theme1.title")}
          description={t("theme1.description")}
        />
        <Card
          src="/top/researchTheme/1.png"
          alt="研究テーマ1"
          title={t("theme1.title")}
          description={t("theme1.description")}
        />
      </div>
      <Button
        label={t("button")}
        variant="primary"
        onClick={() => {
          router.push("/theme");
        }}
      />
    </div>
  );
};

export const NewsSection = ({ news }: I18nSectionsProps) => {
  const t = useTranslations("top.news");
  const router = useRouter();

  return (
    <div className={styles.news}>
      <SectionTitle label={t("title")} />
      <NewsList news={news} />
      <Button
        label={t("button")}
        variant="primary"
        onClick={() => {
          router.push("/news");
        }}
      />
    </div>
  );
};
