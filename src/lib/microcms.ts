import { cache } from "react";
import {
  normalizeMembersByYearAndPost,
  normalizePublicationsByYearAndPost,
} from "./utils";

const domain = process.env.MICROCMS_SERVICE_DOMAIN!;
const key = process.env.MICROCMS_API_KEY!;

export type News = { id: string; date: string; author: string; title: string };
export type Member = { id: string; name: string; post: string[]; year: string };
export type Publication = {
  id: string;
  year: string;
  genre: string[];
  publications: string;
};

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

const fetchAllNewsRaw = cache(
  async (limit = 100, offset = 0): Promise<News[]> => {
    const data = await fetch(
      `https://${domain}.microcms.io/api/v1/news?limit=${limit}&offset=${offset}`,
      {
        headers: { "X-MICROCMS-API-KEY": key },
        next: { revalidate: 3600 }, // 1時間キャッシュ
      }
    ).then((res) => res.json());

    if (data.offset + data.limit < data.totalCount) {
      const nextContents = await fetchAllNewsRaw(
        data.limit,
        data.offset + data.limit
      );
      return [...data.contents, ...nextContents];
    }

    return data.contents;
  }
);
export const fetchAllNews = cache(
  async (limit = 100, offset = 0): Promise<News[]> => {
    const allContents = await fetchAllNewsRaw(limit, offset);
    return allContents;
  }
);

// 生のデータを取得するための内部関数
const fetchMembersRaw = cache(
  async (limit = 100, offset = 0): Promise<Member[]> => {
    const data = await fetch(
      `https://${domain}.microcms.io/api/v1/members?limit=${limit}&offset=${offset}`,
      {
        headers: { "X-MICROCMS-API-KEY": key },
        next: { revalidate: 3600 }, // 1時間キャッシュ
      }
    ).then((res) => res.json());

    if (data.offset + data.limit < data.totalCount) {
      const nextContents = await fetchMembersRaw(
        data.limit,
        data.offset + data.limit
      );
      return [...data.contents, ...nextContents];
    }

    return data.contents;
  }
);

export const fetchMembers = cache(
  async (
    limit = 100,
    offset = 0
  ): Promise<Record<string, Record<string, string[]>>> => {
    const allContents = await fetchMembersRaw(limit, offset);
    const normalized = normalizeMembersByYearAndPost(allContents);
    return normalized;
  }
);

const fetchPublicationsRaw = cache(
  async (limit = 100, offset = 0): Promise<Publication[]> => {
    const data = await fetch(
      `https://${domain}.microcms.io/api/v1/publications?limit=${limit}&offset=${offset}`,
      {
        headers: { "X-MICROCMS-API-KEY": key },
        next: { revalidate: 3600 }, // 1時間キャッシュ
      }
    ).then((res) => res.json());

    if (data.offset + data.limit < data.totalCount) {
      const nextContents = await fetchPublicationsRaw(
        data.limit,
        data.offset + data.limit
      );
      return [...data.contents, ...nextContents];
    }

    return data.contents;
  }
);

export const fetchPublications = cache(
  async (
    limit = 100,
    offset = 0
  ): Promise<Record<string, Record<string, string[]>>> => {
    const allContents = await fetchPublicationsRaw(limit, offset);
    const normalized = normalizePublicationsByYearAndPost(allContents);
    return normalized;
  }
);
