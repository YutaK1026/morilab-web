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

// フッターに表示させるものを追加したい場合はここに追記する
const IMAGES = [
  {
    src: "/top/footer/miccai.png",
    alt: "MICCAI",
    link: "https://conferences.miccai.org/2023/en/workshops.asp",
  },
  { src: "/top/footer/mici.png", alt: "MICI", link: "" },
  {
    src: "/top/footer/mist.png",
    alt: "MIST",
    link: "https://mist-medical.readthedocs.io/en/latest/",
  },
  { src: "/top/footer/pluto.png", alt: "PLUTO", link: "" },
  {
    src: "/top/footer/計算解剖学.png",
    alt: "計算解剖学",
    link: "",
  },
  {
    src: "/top/footer/市民公開講座.png",
    alt: "市民公開講座",
    link: "",
  },
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
                style={{
                  objectFit: "contain",
                  cursor: "pointer",
                  width: "100%",
                  maxWidth: "180px",
                  height: "auto",
                }}
                onClick={() => {
                  if (img.link) {
                    window.open(img.link, "_blank");
                  }
                }}
              />
            </div>
          ))}
        </div>
      </div>
      <div className={styles.footerCopyright}>All Copyright @morilab</div>
    </footer>
  );
}
