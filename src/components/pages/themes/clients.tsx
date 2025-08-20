"use client";

import { PageTitle } from "@/components/ui/page-title";
import { SectionHeader } from "@/components/ui/section-title";
import styles from "./clients.module.css";
import { useTranslations } from "next-intl";
import Image from "next/image";

/* タイトル */
export const TitleSection = () => {
  const t = useTranslations("theme");
  return (
    <div className={styles.titleSection}>
      <PageTitle label={t("title")} size="lg" />
    </div>
  );
};

/* 1. 画像認識・理解・コンピュータービジョン */
export const ImageRecognitionSection = () => {
  const t = useTranslations("theme.imageRecognition");
  return (
    <div className={styles.section}>
      <SectionHeader label={t("title")} size="lg" />
      <div className={styles.sectionContent}>
        <p>{t("content")}</p>
      </div>
    </div>
  );
};

/* 2. 画像生成, 可視化技術(コンピュータグラフィックス) */
export const ImageGenerationSection = () => {
  const t = useTranslations("theme.imageGeneration");
  return (
    <div className={styles.section}>
      <SectionHeader label={t("title")} size="lg" />
      <div className={styles.sectionContent}>
        <p>{t("content")}</p>
      </div>
      <div className={styles.imageContainer}>
        <Image
          src="/theme/2/1.png"
          alt="スーパーコンピュータによって得られた大規模乱流場の可視化"
          width={480}
          height={280}
          sizes="(max-width: 480px) 90vw, (max-width: 480px) 60vw, 480px"
          style={{
            width: "100%",
            maxWidth: "480px",
            height: "auto",
            objectFit: "contain",
          }}
        />
        <p className={styles.imageDescription}>{t("imageDescription")}</p>
      </div>
    </div>
  );
};

/* 3. 医用分野への応用 */
export const MedicalApplicationSection = () => {
  const t = useTranslations("theme.medicalApplication");
  return (
    <div className={styles.section}>
      <SectionHeader label={t("title")} size="lg" />

      {/* 3Dプリンタにより造形した人体臓器モデルの利用 */}
      <div className={styles.sectionContent}>
        <SectionHeader label={t("3dPrinter.title")} size="md" />
        <div className={styles.messageSubContainer}>
          <p>{t("3dPrinter.content")}</p>
          <div className={styles.imageRow}>
            <div className={styles.imageContainer}>
              <Image
                src="/theme/3/1.png"
                alt="形状露出法により造形した腎臓モデル"
                width={120}
                height={170}
                style={{ height: "150px", width: "auto", objectFit: "contain" }}
              />
              <div className={styles.imageDescription}>
                {t("3dPrinter.imageDescription1")}
              </div>
            </div>
            <div className={styles.imageContainer}>
              <Image
                src="/theme/3/2.png"
                alt="形状露出法により造形した微細血管構造のモデル"
                width={120}
                height={170}
                style={{ height: "150px", width: "auto", objectFit: "contain" }}
              />
              <div className={styles.imageDescription}>
                {t("3dPrinter.imageDescription2")}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 仮想化内視鏡 */}
      <div className={styles.sectionContent}>
        <SectionHeader label={t("virtualEndoscope.title")} size="md" />
        <div className={styles.messageSubContainer}>
          <p>{t("virtualEndoscope.content")}</p>
          <div className={styles.imageRow}>
            <div className={styles.imageContainer}>
              <Image
                src="/theme/3/3.png"
                alt="1995年当時の仮想化内視鏡システムです"
                width={200}
                height={150}
                style={{ height: "150px", width: "auto", objectFit: "contain" }}
              />
              <div className={styles.imageDescription}>
                {t("virtualEndoscope.imageDescription1")}
              </div>
            </div>
            <div className={styles.imageContainer}>
              <Image
                src="/theme/3/4.png"
                alt="現在の仮想化内視鏡システムです.評価希望の方は連絡先までメールをお願いいたします"
                width={270}
                height={160}
                style={{ height: "150px", width: "auto", objectFit: "contain" }}
              />
              <div className={styles.imageDescription}>
                {t("virtualEndoscope.imageDescription2")}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 医用画像認識 */}
      <div className={styles.sectionContent}>
        <SectionHeader label={t("medicalImageRecognition.title")} size="md" />
        <div className={styles.messageSubContainer}>
          <p>{t("medicalImageRecognition.content")}</p>
          <div className={styles.imageRow}>
            <div className={styles.imageContainer}>
              <Image
                src="/theme/3/5.png"
                alt="気管支領域の抽出結果"
                width={124}
                height={135}
                style={{ height: "150px", width: "auto", objectFit: "contain" }}
              />
              <div className={styles.imageDescription}>
                {t("medicalImageRecognition.imageDescription1")}
              </div>
            </div>
            <div className={styles.imageContainer}>
              <Image
                src="/theme/3/6.png"
                alt="気管支領域の各枝に名称を付与した結果"
                width={124}
                height={135}
                style={{ height: "150px", width: "auto", objectFit: "contain" }}
              />
              <div className={styles.imageDescription}>
                {t("medicalImageRecognition.imageDescription2")}
              </div>
            </div>
          </div>
          <div className={styles.imageRow}>
            <div className={styles.imageContainer}>
              <Image
                src="/theme/3/7.png"
                alt="腹部臓器のセグメンテーション結果"
                width={168}
                height={143}
                style={{ height: "150px", width: "auto", objectFit: "contain" }}
              />
              <div className={styles.imageDescription}>
                {t("medicalImageRecognition.imageDescription3")}
              </div>
            </div>
            <div className={styles.imageContainer}>
              <Image
                src="/theme/3/8.png"
                alt="リンパ節の検出結果"
                width={91}
                height={135}
                style={{ height: "150px", width: "auto", objectFit: "contain" }}
              />
              <div className={styles.imageDescription}>
                {t("medicalImageRecognition.imageDescription4")}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* コンピュータ支援診断・自動診断(CAD) */}
      <div className={styles.sectionContent}>
        <SectionHeader label={t("cad.title")} size="md" />
        <div className={styles.messageSubContainer}>
          <p>{t("cad.content")}</p>
          <div className={styles.imageRow}>
            <div className={styles.imageContainer}>
              <Image
                src="/theme/3/9.png"
                alt="肺がんCADのシステム"
                width={192}
                height={158}
                style={{ height: "150px", width: "auto", objectFit: "contain" }}
              />
              <div className={styles.imageDescription}>
                {t("cad.imageDescription1")}
              </div>
            </div>
            <div className={styles.imageContainer}>
              <Image
                src="/theme/3/10.png"
                alt="肺気腫CADのシステム"
                width={172}
                height={175}
                style={{ height: "150px", width: "auto", objectFit: "contain" }}
              />
              <div className={styles.imageDescription}>
                {t("cad.imageDescription2")}
              </div>
            </div>
          </div>
          <div className={styles.imageRow}>
            <div className={styles.imageContainer}>
              <Image
                src="/theme/3/11.png"
                alt="本研究室で開発した大腸診断支援システム"
                width={296}
                height={214}
                style={{ height: "150px", width: "auto", objectFit: "contain" }}
              />
              <div className={styles.imageDescription}>
                {t("cad.imageDescription3")}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 手術シュミレーション */}
      <div className={styles.sectionContent}>
        <SectionHeader label={t("surgerySimulation.title")} size="md" />
        <div className={styles.messageSubContainer}>
          <p>{t("surgerySimulation.content")}</p>
          <div className={styles.imageRow}>
            <div className={styles.imageContainer}>
              <Image
                src="/theme/3/12.png"
                alt="腹腔鏡手術のシミュレーション"
                width={192}
                height={154}
                style={{ height: "150px", width: "auto", objectFit: "contain" }}
              />
              <div className={styles.imageDescription}>
                {t("surgerySimulation.imageDescription1")}
              </div>
            </div>
            <div className={styles.imageContainer}>
              <Image
                src="/theme/3/13.png"
                alt="幼児臀部像の切開シミュレーション"
                width={172}
                height={175}
                style={{ height: "150px", width: "auto", objectFit: "contain" }}
              />
              <div className={styles.imageDescription}>
                {t("surgerySimulation.imageDescription2")}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 人間の視覚，思考，行動の仕組みの探求 */}
      <div className={styles.sectionContent}>
        <SectionHeader label={t("humanInteraction.title")} size="md" />
        <div className={styles.messageSubContainer}>
          <p>{t("humanInteraction.content")}</p>
          <div className={styles.imageRow}>
            <div className={styles.imageContainer}>
              <Image
                src="/theme/3/14.png"
                alt="大腸内視鏡のバーチャルリアリティー"
                width={192}
                height={154}
                style={{ height: "150px", width: "auto", objectFit: "contain" }}
              />
              <div className={styles.imageDescription}>
                {t("humanInteraction.imageDescription1")}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
