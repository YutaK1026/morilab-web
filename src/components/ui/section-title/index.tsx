import styles from "./index.module.css";

type Size = "lg" | "md" | "sm";

interface Props {
  label: string;
  size?: Size;
}

/** セクション用見出し */
export const SectionHeader: React.FC<Props> = ({ label, size = "md" }) => (
  <div className={styles.sectionHeader}>
    <h2 className={`${styles.header} ${styles[size]}`}>{label}</h2>
  </div>
);
