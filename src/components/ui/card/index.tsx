import Image from "next/image";
import styles from "./index.module.css";

type CardProps = {
  src: string;
  alt: string;
  title: string;
  description: string;
};

export const Card = ({ src, alt, title, description }: CardProps) => (
  <div className={styles.card}>
    <Image
      className={styles.img}
      src={src}
      alt={alt}
      width={200}
      height={150}
      priority
    />
    <h3 className={styles.title}>{title}</h3>
    <p className={styles.desc}>{description}</p>
  </div>
);
