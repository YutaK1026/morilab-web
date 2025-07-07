"use client";

import { PageTitle } from "@/components/ui/page-title";
import { SectionHeader } from "@/components/ui/section-title";
import styles from "./clients.module.css";
import { useTranslations } from "next-intl";
import Image from "next/image";

/* タイトル */
export const TitleSection = () => {
  const t = useTranslations("theme");
  return (
    <div className={styles.titleSection}>
      <PageTitle label={t("title")} size="lg" />
    </div>
  );
};

/* 1. 画像認識・理解・コンピュータービジョン */
export const ImageRecognitionSection = () => {
  const t = useTranslations("theme.imageRecognition");
  return (
    <div className={styles.section}>
      <SectionHeader label={t("title")} size="lg" />
      <div className={styles.messageContainer}>
        <p>{t("content")}</p>
      </div>
    </div>
  );
};

/* 2. 画像生成, 可視化技術(コンピュータグラフィックス) */
export const ImageGenerationSection = () => {
  const t = useTranslations("theme.imageGeneration");
  return (
    <div className={styles.section}>
      <SectionHeader label={t("title")} size="lg" />
      <div className={styles.messageContainer}>
        <p>{t("content")}</p>
      </div>
      <div className={styles.imageContainer}>
        <Image
          src="/theme/2/1.png"
          alt="スーパーコンピュータによって得られた大規模乱流場の可視化"
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
        <p className={styles.imageDescription}>{t("imageDescription")}</p>
      </div>
    </div>
  );
};
