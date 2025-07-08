import { cache } from "react";
import { normalizeByYearAndPost } from "./utils";

const domain = process.env.MICROCMS_SERVICE_DOMAIN!;
const key = process.env.MICROCMS_API_KEY!;

export type News = { id: string; date: string; author: string; title: string };
export type Member = { id: string; name: string; post: string[]; year: string };

export const fetchLatestNews = cache(async (): Promise<News[]> => {
  const res = await fetch(
    `https://${domain}.microcms.io/api/v1/news?limit=6&orders=-date`,
    {
      headers: { "X-MICROCMS-API-KEY": key },
      next: { revalidate: 3600 }, // 1時間キャッシュ
    }
  );
  const json = await res.json();
  return json.contents;
});

export const fetchMembers = cache(
  async (): Promise<Record<string, Record<string, string[]>>> => {
    const res = await fetch(`https://${domain}.microcms.io/api/v1/members`, {
      headers: { "X-MICROCMS-API-KEY": key },
      next: { revalidate: 3600 },
    });
    const json = await res.json();
    const normalized = normalizeByYearAndPost(json.contents);
    return normalized;
  }
);
