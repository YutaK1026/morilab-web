import styles from "./index.module.css";

type PageTitleProps = {
  label: string;
  size?: "sm" | "md" | "lg";
};

export const PageTitle = ({ label, size = "md" }: PageTitleProps) => (
  <div className={`${styles.wrapper} ${styles[size]}`}>
    <span className={styles.line} />
    <span className={styles.text}>{label}</span>
    <span className={styles.line} />
  </div>
);
