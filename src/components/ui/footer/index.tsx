import styles from "./index.module.css";
import Image from "next/image";
import { useTranslations } from "next-intl";

const NAV_LINKS = [
  { href: "/", label: "home" },
  { href: "/about", label: "about" },
  { href: "/themes", label: "themes" },
  { href: "/members", label: "members" },
  { href: "/publications", label: "publications" },
  { href: "/news", label: "news" },
  { href: "/access", label: "access" },
];

const IMAGES = [
  { src: "/img1.png", alt: "img1" },
  { src: "/img2.png", alt: "img2" },
  { src: "/img3.png", alt: "img3" },
  { src: "/img4.png", alt: "img4" },
  { src: "/img5.png", alt: "img5" },
  { src: "/img6.png", alt: "img6" },
];

export default function Footer() {
  const t = useTranslations("header");
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <nav className={styles.footerNav}>
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href} className={styles.footerLink}>
              {t(link.label)}
            </a>
          ))}
        </nav>
        <div className={styles.footerImages}>
          {IMAGES.map((img, i) => (
            <div className={styles.footerImage} key={i}>
              <Image
                src={img.src}
                alt={img.alt}
                width={180}
                height={60}
                style={{ objectFit: "contain" }}
              />
            </div>
          ))}
        </div>
      </div>
      <div className={styles.footerCopyright}>All Copyright @morilab</div>
    </footer>
  );
}
