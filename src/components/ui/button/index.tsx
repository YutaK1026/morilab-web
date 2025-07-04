import styles from "./index.module.css";

type ButtonProps = {
  label: string;
  variant?: "primary" | "secondary" | "danger";
  onClick?: () => void;
};

export const Button = ({
  label,
  variant = "primary",
  onClick,
}: ButtonProps) => (
  <button onClick={onClick} className={`${styles.btn} ${styles[variant]}`}>
    {label}
    <span className={styles.arrow}>→</span>
  </button>
);
