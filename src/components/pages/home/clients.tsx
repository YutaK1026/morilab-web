"use client";

import { useTranslations } from "next-intl";
import { useRouter, usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { PageTitle } from "@/components/ui/page-title";
import Image from "next/image";
import styles from "./clients.module.css";
import { News } from "@/lib/microcms";
import { NewsList } from "@/components/ui/newslist";

type I18nSectionsProps = {
  news: News[];
};

export const HeroSection = () => {
  return (
    <div className={styles.hero}>
      <Image
        src="/top/main.png"
        alt="研究室のトップ画像"
        fill
        priority // LCP 対策
        sizes="100vw"
        style={{ objectFit: "cover" }}
      />
      <h1 className={styles.title}>
        <span>名古屋大学情報学研究科</span>
        <br />
        森研究室
      </h1>
    </div>
  );
};

export const MessageSection = () => {
  const t = useTranslations("top");
  return (
    <div className={styles.message}>
      <PageTitle label={t("message.title")} />
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
  const pathname = usePathname();

  const getLocalePrefix = () => {
    const localeMatch = pathname.match(/^\/(ja|en|zh)/);
    return localeMatch ? localeMatch[0] : "";
  };

  return (
    <div className={styles.researchTheme}>
      <PageTitle label={t("title")} />
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
          const localePrefix = getLocalePrefix();
          router.push(`${localePrefix}/theme`);
        }}
      />
    </div>
  );
};

export const NewsSection = ({ news }: I18nSectionsProps) => {
  const t = useTranslations("top.news");
  const router = useRouter();
  const pathname = usePathname();

  const getLocalePrefix = () => {
    const localeMatch = pathname.match(/^\/(ja|en|zh)/);
    return localeMatch ? localeMatch[0] : "";
  };

  return (
    <div className={styles.news}>
      <PageTitle label={t("title")} />
      <NewsList news={news} />
      <Button
        label={t("button")}
        variant="primary"
        onClick={() => {
          const localePrefix = getLocalePrefix();
          router.push(`${localePrefix}/news`);
        }}
      />
    </div>
  );
};
