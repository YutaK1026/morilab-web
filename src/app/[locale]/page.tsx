import styles from "./page.module.css";
import HomePage from "@/components/pages/home";

// 完全な静的生成のための設定
export const dynamic = "force-static";
export const revalidate = false;

export default function Home() {
  return (
    <div className={styles.page}>
      <HomePage />
    </div>
  );
}
