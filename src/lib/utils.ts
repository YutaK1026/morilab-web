export type Content = {
  year: string;
  name: string;
  post: string[];
};

export function normalizeByYearAndPost(contents: Content[] | undefined) {
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
