"use client";

import styles from "./index.module.css";
import Image from "next/image";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { useParams } from "next/navigation";

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

export default function Footer() {
  const t = useTranslations("header");
  const params = useParams<{ locale: string; years: string }>();
  const locale = params.locale;

  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <nav className={styles.footerNav}>
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={`/${locale}${link.href}`}
              className={styles.footerLink}
            >
              {t(link.label)}
            </Link>
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
