"use client";

import Image from "next/image";
import styles from "./index.module.css";
import { SectionTitle } from "@/components/ui/section-title";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";

export default function HomePage() {
  return (
    <div>
      <HeroSection />
      <MessageSection />
      <ResearchThemeSection />
    </div>
  );
}

const HeroSection = () => (
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

const MessageSection = () => {
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

const ResearchThemeSection = () => {
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
