import styles from "./page.module.css";
import MemberPage from "@/components/pages/member";

// 完全な静的生成のための設定
export const dynamic = "force-static";
export const revalidate = false;

export default function Member() {
  return (
    <div className={styles.page}>
      <MemberPage />
    </div>
  );
}
