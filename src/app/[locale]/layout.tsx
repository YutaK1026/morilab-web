import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import Header from "@/components/ui/header";
import Footer from "@/components/ui/footer";
import ja from "@/messages/ja.json";
import en from "@/messages/en.json";
import zh from "@/messages/zh.json";
import "@/app/globals.css";
import "../../styles/variants.css";
import { Noto_Sans } from "next/font/google";

const notoSans = Noto_Sans({
  subsets: ["latin"], // 日本語も使うなら "latin", "latin-ext", "japanese"
  weight: ["400", "700"], // 必要なウェイトを指定
  variable: "--font-noto-sans",
});

export const metadata: Metadata = {
  title: "森研究室",
  description: "森研究室の公式Webサイトです",
};

const MESSAGES = { ja, en, zh };
const LOCALES = ["ja", "en", "zh"];
export function generateStaticParams() {
  return LOCALES.map((l) => ({ locale: l })); // => /ja /en /zh を静的生成
}

// 完全な静的生成のための設定
export const dynamic = "force-static";
export const revalidate = false;

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;
  if (!LOCALES.includes(locale)) {
    notFound();
  }
  setRequestLocale(locale);
  const messages = MESSAGES[locale as keyof typeof MESSAGES] || MESSAGES.ja;

  return (
    <html lang={locale} className={notoSans.variable}>
      <body>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Header lang={locale} />
          <main>{children}</main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
