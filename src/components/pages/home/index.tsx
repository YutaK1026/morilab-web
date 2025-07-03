import Image from "next/image";
import styles from "./index.module.css";
import { SectionTitle } from "@/components/ui/section-title";
import { useTranslations } from "next-intl";

export default function HomePage() {
  return (
    <div>
      <HeroSection />
      <MessageSection />
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
