"use client";

import styles from "./index.module.css";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { routing } from "@/i18n/routing";
import { useParams } from "next/navigation";
import Link from "next/link";

const LANGS = [
  { code: "ja", label: "日本語" },
  { code: "en", label: "English" },
  { code: "zh", label: "中文" },
];

const NAV_LINKS = [
  { href: "/", key: "home" },
  { href: "/about", key: "about" },
  { href: "/themes", key: "themes" },
  { href: "/members", key: "members" },
  { href: "/publications", key: "publications" },
  { href: "/news", key: "news" },
  { href: "/access", key: "access" },
];

export default function Header({ lang }: { lang: string }) {
  const t = useTranslations("header");
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter();
  const params = useParams<{ locale: string; years: string }>();
  const locale = params.locale;

  // 言語変更
  const handleLangChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newLang = e.target.value;
    const path = pathname.replace(/^\/(ja|en|zh)(\/|$)/, "/");
    router.push(`/${newLang}${path}`);
  };

  // ナビゲーションのアクティブ判定
  const isActive = (href: string): boolean => {
    const normalize = (p: string) => p.replace(/\/+$/, "") || "/";

    const path = normalize(pathname);
    const target = normalize(href);

    // ルート "/" は完全一致のみ
    if (target === "/") return path === "/";

    // ロケールルート "/ja" "/en" "/zh"… は完全一致のみ
    if (/^\/[a-z]{2}$/i.test(target)) {
      return path === target;
    }

    // それ以外: 完全一致 or 区切り "/" で前方一致
    return path === target || path.startsWith(`${target}/`);
  };

  return (
    <header className={styles.header}>
      <div className={styles.headerTop}>
        <div className={styles.headerLeft}>
          <Image
            src="/logo.png"
            alt="Morilab Logo"
            className={styles.logo}
            width={64}
            height={64}
          />
          <div className={styles.titles}>
            <div className={styles.mainTitle}>森研究室</div>
            <span className={styles.subTitle}>
              Medical Image Processing Research
            </span>
          </div>
        </div>
        <div className={`${styles.langSelect} ${styles.langSelectDesktop}`}>
          <select value={lang} onChange={handleLangChange}>
            {routing.locales.map((l) => (
              <option key={l} value={l}>
                {l}
              </option>
            ))}
          </select>
        </div>
        <button
          className={styles.menuBtn}
          aria-label="メニュー"
          onClick={() => setMenuOpen(true)}
        >
          <span>
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect y="7" width="32" height="3" rx="1.5" fill="currentColor" />
              <rect y="15" width="32" height="3" rx="1.5" fill="currentColor" />
              <rect y="23" width="32" height="3" rx="1.5" fill="currentColor" />
            </svg>
          </span>
        </button>
      </div>
      <nav className={`${styles.nav} ${styles.navDesktop}`}>
        {NAV_LINKS.map((link) => (
          <Link
            key={link.href}
            href={`/${locale}${link.href}`}
            className={
              styles.navLink +
              (isActive(`/${locale}${link.href}`)
                ? ` ${styles.navLinkActive}`
                : "")
            }
          >
            {t(link.key)}
          </Link>
        ))}
      </nav>
      {/* ハンバーガーメニュー用モーダル */}
      <div
        className={
          menuOpen
            ? `${styles.menuModal} ${styles.menuModalOpen}`
            : styles.menuModal
        }
      >
        <button
          className={styles.menuCloseBtn}
          aria-label="閉じる"
          onClick={() => setMenuOpen(false)}
        >
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <line
              x1="8"
              y1="8"
              x2="24"
              y2="24"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
            />
            <line
              x1="24"
              y1="8"
              x2="8"
              y2="24"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
            />
          </svg>
        </button>
        <nav className={styles.navMobile}>
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={`/${locale}${link.href}`}
              className={
                styles.navLink +
                (isActive(`/${locale}${link.href}`)
                  ? ` ${styles.navLinkActive}`
                  : "")
              }
            >
              {t(link.key)}
            </Link>
          ))}
        </nav>
        <div className={styles.langSelectMobile}>
          <select value={lang} onChange={handleLangChange}>
            {LANGS.map((l) => (
              <option key={l.code} value={l.code}>
                {l.label}
              </option>
            ))}
          </select>
        </div>
      </div>
    </header>
  );
}
