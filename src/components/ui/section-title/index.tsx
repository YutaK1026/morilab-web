import styles from "./index.module.css";

type SectionTitleProps = {
  label: string;
  size?: "sm" | "md" | "lg";
};

export const SectionTitle = ({ label, size = "md" }: SectionTitleProps) => (
  <div className={`${styles.wrapper} ${styles[size]}`}>
    <span className={styles.line} />
    <span className={styles.text}>{label}</span>
    <span className={styles.line} />
  </div>
);
