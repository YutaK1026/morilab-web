import { TitleSection } from "./clients";
import { fetchMembers } from "@/lib/microcms";

export default async function MemberPage() {
  const members = await fetchMembers();
  console.log(members);
  return (
    <div>
      <TitleSection />
    </div>
  );
}
