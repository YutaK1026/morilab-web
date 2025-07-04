import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

/** ─────────────────────────────────────────────
 * next-intl のプラグインを初期化
 * 必要なら locales / defaultLocale をここで指定
 *   – App Router なので `localePrefix: 'as-needed'` が推奨
 * ──────────────────────────────────────────── */
const withNextIntl = createNextIntlPlugin("./src/i18n/request.ts");

/** ─────────────────────────────────────────────
 * Next.js の基本設定
 *  - `output: 'export'`  : HTML を静的書き出し
 *  - `images.unoptimized`: `next export` でも <Image> を使うため
 *  - `trailingSlash`     : URL 末尾に `/` を付ける (好みで)
 * ──────────────────────────────────────────── */
const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
  trailingSlash: true,
};

/** プラグインを適用してエクスポート */
export default withNextIntl(nextConfig);
