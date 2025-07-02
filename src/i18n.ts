import { translations } from "./data/translations";

export const LANGS = {
  ja: "日本語",
  en: "English",
} as const;

export type Lang = keyof typeof LANGS;
export type Multilingual = Record<Lang, string>;

const langMap: Record<Lang, keyof typeof translations> = {
  ja: "jp",
  en: "en",
};

export function useTranslations(lang: Lang) {
  return function t<T extends keyof (typeof translations)["jp"] | Multilingual>(
    input: T
  ): any {
    if (typeof input === "string") {
      return translations[langMap[lang]][
        input as keyof (typeof translations)["jp"]
      ];
    } else if (
      typeof input === "object" &&
      input !== null &&
      "ja" in input &&
      "en" in input
    ) {
      return input[lang];
    }
    return input;
  };
}
