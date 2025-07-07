import styles from "./index.module.css";
import Image from "next/image";
import { getTranslations } from "next-intl/server";

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
  { src: "/top/main.png", alt: "img1" },
  { src: "/top/main.png", alt: "img2" },
  { src: "/top/main.png", alt: "img3" },
  { src: "/top/main.png", alt: "img4" },
  { src: "/top/main.png", alt: "img5" },
  { src: "/top/main.png", alt: "img6" },
];

const getLocalePath = (href: string) => {
  const langs =
    href
      .replace(/^\/(ja|en|zh)(\/|$)/, "/")
      .split("/")
      .filter(Boolean)[0] ?? "";
  return langs;
};

export default async function Footer() {
  const t = await getTranslations("header");
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <nav className={styles.footerNav}>
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={getLocalePath(link.href)}
              className={styles.footerLink}
            >
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
