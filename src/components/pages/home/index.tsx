import { fetchLatestNews } from "@/lib/csv";
import {
  HeroSection,
  MessageSection,
  ResearchThemeSection,
  NewsSection,
} from "./clients";

export default async function HomePage() {
  const news = await fetchLatestNews();

  return (
    <div>
      <HeroSection />
      <MessageSection />
      <ResearchThemeSection />
      <NewsSection news={news} />
    </div>
  );
}
