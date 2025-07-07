import styles from "./index.module.css";
import { TitleSection, ProfessorSection } from "./clients";

export default function AboutPage() {
  return (
    <div className={styles.page}>
      <TitleSection />
      <ProfessorSection />
    </div>
  );
}
