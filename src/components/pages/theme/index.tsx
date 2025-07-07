import {
  TitleSection,
  ImageRecognitionSection,
  ImageGenerationSection,
} from "./clients";

export default function ThemePage() {
  return (
    <div>
      <TitleSection />
      <ImageRecognitionSection />
      <ImageGenerationSection />
    </div>
  );
}
