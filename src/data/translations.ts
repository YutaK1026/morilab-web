export const translations = {
  jp: {
    // トップページ
    welcome: "研究ラボへようこそ",
    department: "名古屋大学大学院情報学研究科知能システム学専攻",
    directedBy: "指導教員：森 健策 教授",
    researchFocus: "研究テーマ",
    departmentUpdate: "🏛️ 部署変更のお知らせ",
    departmentUpdateText:
      "名古屋大学大学院情報学研究科知能システム学専攻・情報学部コンピュータ科学科発足に伴い、情報学研究科・情報学部所属となりました。",
    japaneseInfo: "🌐 日本語での案内",
    japaneseInfoText: "日本語での案内は研究室紹介ページからご覧いただけます。",
    exploreMore: "詳しくはこちら",
    exploreText: "研究テーマと成果をご覧ください",
    researchThemes: "研究テーマ",
    awards: "受賞歴",

    // 研究テーマ
    themesTitle: "研究テーマ紹介",
    themesDescription:
      "詳細は各テーマのページでご覧いただけます（ダミーリンク）。",

    // 研究室紹介
    aboutTitle: "研究室紹介",
    aboutDescription:
      "森研究室は、名古屋大学大学院情報学研究科 知能システム学専攻に所属し、医用画像処理やバーチャル内視鏡、手術ナビゲーションなどの研究を行っています。",
    director: "指導教員: 森 健策 教授",
    location: "所在地: 名古屋大学 東山キャンパス",
    wikiLink: "詳細は公式Wikiをご覧ください。",

    // 受賞歴
    awardsTitle: "受賞歴",

    // ヘッダー
    home: "ホーム",
    themes: "研究テーマ",
    about: "研究室紹介",
    awardsHeader: "受賞歴",

    // 研究分野説明
    researchAreasDescription:
      "最先端の医用画像処理技術で診断・治療の精度向上を目指します。",

    // 研究室紹介セクション
    labIntroTitle: "森研究室へようこそ",
    labIntroSubtitle: "画像処理で医療を変える、世界レベルの研究環境",
    labIntroDescription:
      "2次元から4次元まで、高次元画像処理の最先端を追求。人体内部の構造をコンピュータが理解し、診断・治療・手術を支援する技術を開発しています。",
    labIntroFeatures: [
      {
        title: "最先端設備",
        desc: "内視鏡装置、超音波画像診断装置、立体プリンタなど、普段触れない設備が充実",
      },
      {
        title: "充実した環境",
        desc: "一人あたり2台のワークステーション、高速ネットワーク、医学部との連携",
      },
      {
        title: "世界レベルの研究",
        desc: "世界各地の研究者との共同研究、国際会議での発表機会",
      },
      {
        title: "手厚いサポート",
        desc: "教員・研究員・医師による多角的なサポート体制",
      },
    ],

    // 研究分野
    researchAreas: [
      {
        title: {
          ja: "バーチャル内視鏡技術",
          en: "Virtual Endoscopy Technology",
        },
        desc: {
          ja: "3D医用画像を用いた仮想内視鏡による診断・治療支援技術の開発。",
          en: "Development of diagnostic and therapeutic support technologies using 3D medical images for virtual endoscopy.",
        },
      },
      {
        title: { ja: "医用画像処理", en: "Medical Image Processing" },
        desc: {
          ja: "CTやMRIなどの医用画像を解析し、診断精度向上を目指す画像処理技術の研究。",
          en: "Research on image processing techniques to analyze medical images such as CT and MRI for improved diagnostic accuracy.",
        },
      },
      {
        title: {
          ja: "CAD（コンピュータ支援診断）",
          en: "Computer-Aided Diagnosis (CAD)",
        },
        desc: {
          ja: "AIや画像解析を活用したコンピュータ支援診断システムの開発。",
          en: "Development of computer-aided diagnosis systems using AI and image analysis.",
        },
      },
      {
        title: { ja: "内視鏡ナビゲーション", en: "Endoscopic Navigation" },
        desc: {
          ja: "内視鏡手術におけるナビゲーション技術の研究と臨床応用。",
          en: "Research and clinical application of navigation technologies for endoscopic surgery.",
        },
      },
      {
        title: { ja: "手術シミュレーション", en: "Surgical Simulation" },
        desc: {
          ja: "手術手技のトレーニングや計画のためのシミュレーション技術の開発。",
          en: "Development of simulation technologies for surgical training and planning.",
        },
      },
      {
        title: { ja: "気管支鏡ナビゲーション", en: "Bronchoscope Navigation" },
        desc: {
          ja: "気管支鏡検査・治療を支援するナビゲーションシステムの研究。",
          en: "Research on navigation systems to support bronchoscopy examination and treatment.",
        },
      },
    ],
    // 論文・出版物
    publications: [
      {
        journal: {
          ja: "医用イメージングジャーナル",
          en: "Journal of Medical Imaging",
        },
        title: {
          ja: "腫瘍検出のための新規アルゴリズム",
          en: "Novel Algorithm for Tumor Detection",
        },
        desc: {
          ja: "MRI画像における腫瘍検出精度を向上させる画期的な研究。",
          en: "A groundbreaking study on enhancing tumor detection accuracy in MRI scans.",
        },
        img: "/publications/ct-scan.jpg",
        link: "#",
        button: { ja: "続きを読む", en: "Read More" },
      },
      {
        journal: {
          ja: "生体工学ジャーナル",
          en: "Biomedical Engineering Journal",
        },
        title: {
          ja: "超音波画像の解像度向上",
          en: "Improving Image Resolution in Ultrasound",
        },
        desc: {
          ja: "超音波画像の解像度を高める新技術の研究。",
          en: "Research on new techniques to enhance the resolution of ultrasound images.",
        },
        img: "/publications/ultrasound.jpg",
        link: "#",
        button: { ja: "続きを読む", en: "Read More" },
      },
    ],
  },
  en: {
    // トップページ
    welcome: "Welcome to Our Research Lab",
    department:
      "Department of Intelligent Science, Graduate School of Informatics, Nagoya University",
    directedBy: "Directed by Prof. Kensaku Mori",
    researchFocus: "Research Focus",
    departmentUpdate: "🏛️ Department Update",
    departmentUpdateText:
      "With the establishment of the Department of Computer Science in the Graduate School of Informatics and School of Informatics, we have become affiliated with the Graduate School of Informatics and School of Informatics.",
    japaneseInfo: "🌐 Japanese Information",
    japaneseInfoText:
      "For information in Japanese, please visit the laboratory introduction page.",
    exploreMore: "See more",
    exploreText: "Explore our research themes and achievements",
    researchThemes: "Research Themes",
    awards: "Awards",

    // 研究テーマ
    themesTitle: "Research Themes",
    themesDescription:
      "Please visit each theme page for details (dummy links).",

    // 研究室紹介
    aboutTitle: "Laboratory Introduction",
    aboutDescription:
      "Mori Laboratory belongs to the Department of Intelligent Science, Graduate School of Informatics, Nagoya University, and conducts research on medical image processing, virtual endoscopy, surgical navigation, and more.",
    director: "Director: Prof. Kensaku Mori",
    location: "Location: Nagoya University Higashiyama Campus",
    wikiLink: "For details, please visit the official Wiki.",

    // 受賞歴
    awardsTitle: "Awards",

    // ヘッダー
    home: "Home",
    themes: "Research Themes",
    about: "About",
    awardsHeader: "Awards",

    // Research Areas Description
    researchAreasDescription:
      "We specialize in cutting-edge medical image processing techniques to improve diagnostics and treatment.",

    // Laboratory Introduction Section
    labIntroTitle: "Welcome to Mori Laboratory",
    labIntroSubtitle:
      "World-class research environment transforming healthcare through image processing",
    labIntroDescription:
      "Pursuing the cutting edge of high-dimensional image processing from 2D to 4D. We develop technologies that enable computers to understand internal human structures and support diagnosis, treatment, and surgery.",
    labIntroFeatures: [
      {
        title: "State-of-the-art Equipment",
        desc: "Endoscopic devices, ultrasound diagnostic equipment, 3D printers, and various sensors",
      },
      {
        title: "Excellent Environment",
        desc: "Two workstations per person, high-speed network, collaboration with medical school",
      },
      {
        title: "World-class Research",
        desc: "Collaborative research with researchers worldwide, opportunities to present at international conferences",
      },
      {
        title: "Comprehensive Support",
        desc: "Multi-faceted support system from faculty, researchers, and medical doctors",
      },
    ],

    // Research Areas
    researchAreas: [
      {
        title: {
          ja: "バーチャル内視鏡技術",
          en: "Virtual Endoscopy Technology",
        },
        desc: {
          ja: "3D医用画像を用いた仮想内視鏡による診断・治療支援技術の開発。",
          en: "Development of diagnostic and therapeutic support technologies using 3D medical images for virtual endoscopy.",
        },
      },
      {
        title: { ja: "医用画像処理", en: "Medical Image Processing" },
        desc: {
          ja: "CTやMRIなどの医用画像を解析し、診断精度向上を目指す画像処理技術の研究。",
          en: "Research on image processing techniques to analyze medical images such as CT and MRI for improved diagnostic accuracy.",
        },
      },
      {
        title: {
          ja: "CAD（コンピュータ支援診断）",
          en: "Computer-Aided Diagnosis (CAD)",
        },
        desc: {
          ja: "AIや画像解析を活用したコンピュータ支援診断システムの開発。",
          en: "Development of computer-aided diagnosis systems using AI and image analysis.",
        },
      },
      {
        title: { ja: "内視鏡ナビゲーション", en: "Endoscopic Navigation" },
        desc: {
          ja: "内視鏡手術におけるナビゲーション技術の研究と臨床応用。",
          en: "Research and clinical application of navigation technologies for endoscopic surgery.",
        },
      },
      {
        title: { ja: "手術シミュレーション", en: "Surgical Simulation" },
        desc: {
          ja: "手術手技のトレーニングや計画のためのシミュレーション技術の開発。",
          en: "Development of simulation technologies for surgical training and planning.",
        },
      },
      {
        title: { ja: "気管支鏡ナビゲーション", en: "Bronchoscope Navigation" },
        desc: {
          ja: "気管支鏡検査・治療を支援するナビゲーションシステムの研究。",
          en: "Research on navigation systems to support bronchoscopy examination and treatment.",
        },
      },
    ],
    // Publications
    publications: [
      {
        journal: {
          ja: "医用イメージングジャーナル",
          en: "Journal of Medical Imaging",
        },
        title: {
          ja: "腫瘍検出のための新規アルゴリズム",
          en: "Novel Algorithm for Tumor Detection",
        },
        desc: {
          ja: "MRI画像における腫瘍検出精度を向上させる画期的な研究。",
          en: "A groundbreaking study on enhancing tumor detection accuracy in MRI scans.",
        },
        img: "/publications/ct-scan.jpg",
        link: "#",
        button: { ja: "続きを読む", en: "Read More" },
      },
      {
        journal: {
          ja: "生体工学ジャーナル",
          en: "Biomedical Engineering Journal",
        },
        title: {
          ja: "超音波画像の解像度向上",
          en: "Improving Image Resolution in Ultrasound",
        },
        desc: {
          ja: "超音波画像の解像度を高める新技術の研究。",
          en: "Research on new techniques to enhance the resolution of ultrasound images.",
        },
        img: "/publications/ultrasound.jpg",
        link: "#",
        button: { ja: "続きを読む", en: "Read More" },
      },
    ],
  },
};
