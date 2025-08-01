import { Publication } from "./microcms";

export type MemberContent = {
  year: string;
  name: string;
  post: string[];
};

export function normalizeMembersByYearAndPost(
  contents: MemberContent[] | undefined
) {
  if (!Array.isArray(contents)) return {}; // ガード

  const result: Record<string, Record<string, string[]>> = {};

  contents.forEach(({ year, name, post }) => {
    if (!result[year]) result[year] = {};

    post.forEach((p) => {
      if (!result[year][p]) result[year][p] = [];
      result[year][p].push(name);
    });
  });

  return result;
}

export function normalizePublicationsByYearAndPost(
  contents: Publication[] | undefined
) {
  if (!Array.isArray(contents)) return {}; // ガード

  const result: Record<string, Record<string, string[]>> = {};

  contents.forEach(({ year, genre, publications }) => {
    // ① <p>…</p> をすべて抜き出して
    // ② タグを外し、前後の空白を除去した配列に変換
    const items =
      publications
        .match(/<p>(.*?)<\/p>/g) // ①
        ?.map((p) => p.replace(/<\/?p>/g, "").trim()) ?? // ②
      [];

    if (!result[year]) result[year] = {};

    genre.forEach((g) => {
      if (!result[year][g]) result[year][g] = [];
      result[year][g].push(...items); // 配列を展開して追加
    });
  });

  return result;
}
