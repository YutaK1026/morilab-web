import styles from "./index.module.css";
import {
  TitleSection,
  ProfessorSection,
  MessageSection,
  EntrySection,
} from "./clients";

export default function AboutPage() {
  return (
    <div className={styles.page}>
      <TitleSection />
      <ProfessorSection />
      <MessageSection />
      <EntrySection />
    </div>
  );
}
