import styles from "./index.module.css";
import { JSX } from "react";

type Size = "lg" | "md" | "sm";

interface Props {
  label: string;
  size?: Size;
}

/** セクション用見出し */
export const SectionHeader: React.FC<Props> = ({ label, size = "md" }) => {
  const Tag: keyof JSX.IntrinsicElements =
    size === "lg" ? "h2" : size === "md" ? "h3" : "h4";
  return (
    <Tag className={styles.sectionHeader}>
      <div className={`${styles.header} ${styles[size]}`}>{label}</div>
    </Tag>
  );
};
