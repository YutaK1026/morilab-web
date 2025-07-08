import {
  TitleSection,
  ImageRecognitionSection,
  ImageGenerationSection,
  MedicalApplicationSection,
} from "./clients";

export default function ThemePage() {
  return (
    <div>
      <TitleSection />
      <ImageRecognitionSection />
      <ImageGenerationSection />
      <MedicalApplicationSection />
    </div>
  );
}
