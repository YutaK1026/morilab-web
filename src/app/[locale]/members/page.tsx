import { fetchMembers } from "@/lib/microcms";
import { redirect } from "next/navigation";
// 完全な静的生成のための設定
export const dynamic = "force-static";
export const revalidate = false;

export default async function Member() {
  const members = await fetchMembers();
  const latestYear = Object.keys(members).sort((a, b) => b.localeCompare(a))[0]; // 最新年度

  // 最新年度にリダイレクト．
  // /{latestYear}の/がないのは敢えてです．
  redirect(`${latestYear}`);
}
