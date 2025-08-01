import {
  TitleSection,
  PublicationSection,
  YearSelectorSection,
} from "./clients";

type PublicationsPageProps = {
  publications: Record<string, Record<string, string[]>>;
  selectedYear: string;
};

export default function PublicationsPage({
  publications,
  selectedYear,
}: PublicationsPageProps) {
  return (
    <div>
      <TitleSection />
      <PublicationSection
        publications={publications}
        selectedYear={selectedYear}
      />
      <YearSelectorSection
        publications={publications}
        selectedYear={selectedYear}
      />
    </div>
  );
}
