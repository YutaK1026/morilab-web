import { MemberSection, TitleSection, YearSelectorSection } from "./clients";

type MemberPageProps = {
  members: Record<string, Record<string, string[]>>;
  selectedYear?: string;
};

export default async function MemberPage({
  members,
  selectedYear,
}: MemberPageProps) {
  const currentYear = selectedYear || Object.keys(members)[0];

  return (
    <div>
      <TitleSection />
      <MemberSection members={members} selectedYear={currentYear} />
      <YearSelectorSection members={members} selectedYear={currentYear} />
    </div>
  );
}
