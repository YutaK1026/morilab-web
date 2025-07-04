import Image from "next/image";
import styles from "./index.module.css";
import { fetchNews } from "@/lib/microcms";
import {
  MessageSection,
  ResearchThemeSection,
  NewsSection,
} from "./i18n-sections";

export default async function HomePage() {
  const news = await fetchNews();

  return (
    <div>
      <HeroSection />
      <MessageSection />
      <ResearchThemeSection />
      <NewsSection news={news} />
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
