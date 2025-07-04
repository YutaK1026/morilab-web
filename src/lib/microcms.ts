import { cache } from "react";

const domain = process.env.MICROCMS_SERVICE_DOMAIN!;
const key = process.env.MICROCMS_API_KEY!;

export type News = { id: string; date: string; author: string; title: string };

export const fetchNews = cache(async (): Promise<News[]> => {
  const res = await fetch(
    `https://${domain}.microcms.io/api/v1/news?limit=100&orders=-date`,
    { headers: { "X-MICROCMS-API-KEY": key } }
  );
  const json = await res.json();
  return json.contents;
});
