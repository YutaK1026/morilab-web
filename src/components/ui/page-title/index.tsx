import styles from "./index.module.css";
import { JSX } from "react";

type PageTitleProps = {
  label: string;
  size?: "sm" | "md" | "lg";
};

export const PageTitle = ({ label, size = "md" }: PageTitleProps) => {
  const Tag: keyof JSX.IntrinsicElements =
    size === "lg" ? "h1" : size === "md" ? "h2" : "h3";
  return (
    <Tag className={`${styles.wrapper} ${styles[size]}`}>
      <span className={styles.line} />
      <span className={styles.text}>{label}</span>
      <span className={styles.line} />
    </Tag>
  );
};
