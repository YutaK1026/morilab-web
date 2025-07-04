import { News } from "@/lib/microcms";
import styles from "./newslist.module.css";

export const NewsList = ({ news }: { news: News[] }) => {
  return (
    <section className={styles.list}>
      {news.map(({ id, date, title }) => (
        <div key={id} className={styles.row}>
          <time className={styles.date}>{date.replace(/-/g, "/")}</time>
          <span className={styles.title}>{title}</span>
        </div>
      ))}
    </section>
  );
};
