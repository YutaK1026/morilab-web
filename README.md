# 森研究室 Web サイト

森研究室の公式 Web サイトです。Next.js 15 と TypeScript を使用して構築されています。

## 🚀 技術スタック

- **フレームワーク**: Next.js 15 (App Router)
- **言語**: TypeScript
- **国際化**: next-intl (日本語、英語、中国語対応)
- **スタイリング**: CSS Modules
- **コンテンツ管理**: ローカル CSV ファイル
- **パッケージマネージャー**: npm

## 📁 プロジェクト構造

```
morilab/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── [locale]/          # 多言語対応のページ
│   │   │   ├── about/         # 研究室について
│   │   │   ├── access/        # アクセス情報
│   │   │   ├── members/       # メンバー一覧
│   │   │   ├── news/          # ニュース
│   │   │   ├── publications/  # 論文・発表
│   │   │   └── themes/        # 研究テーマ
│   │   └── globals.css        # グローバルスタイル
│   ├── components/            # Reactコンポーネント
│   │   ├── pages/            # ページコンポーネント
│   │   └── ui/               # 再利用可能なUIコンポーネント
│   ├── lib/                  # ユーティリティ関数
│   │   ├── csv.ts           # CSV読み込み機能
│   │   ├── auth.ts          # 認証システム
│   │   └── utils.ts          # 共通ユーティリティ
│   ├── app/
│   │   ├── admin/           # 管理画面
│   │   │   ├── (auth)/     # 認証前ルート
│   │   │   └── (authed)/   # 認証後ルート
│   │   └── api/admin/      # 管理APIエンドポイント
│   ├── i18n/                 # 国際化設定
│   └── messages/             # 翻訳ファイル
├── data/                     # CSVデータ（バックアップ）
├── public/                   # 静的ファイル
└── package.json
```

## 🛠️ 開発環境のセットアップ

### 1. 依存関係のインストール

```bash
npm install
```

### 2. 開発サーバーの起動

```bash
npm run dev
```

ブラウザで [http://localhost:3000](http://localhost:3000) を開いて確認してください。

## 🌐 多言語対応

このプロジェクトは 3 つの言語に対応しています：

- **日本語 (ja)**: デフォルト言語
- **英語 (en)**
- **中国語 (zh)**

### 言語切り替えの仕組み

- URL パスで言語を指定: `/ja/`, `/en/`, `/zh/`
- `src/i18n/routing.ts`でルーティング設定
- `src/messages/`内の JSON ファイルで翻訳管理

## 📝 コンテンツ管理

### ローカル CSV ファイルの利用

データは`data/`ディレクトリ内の CSV ファイルから読み込まれます：

- **ニュース**: `data/news.csv`
- **メンバー**: `data/members.csv`
- **論文・発表**: `data/publications.csv`

### データ取得の仕組み

`src/lib/csv.ts`で CSV ファイルからデータを取得：

```typescript
// 最新ニュースの取得
const news = await fetchAllNews();

// メンバー情報の取得
const members = await fetchMembers();

// 論文・発表の取得
const publications = await fetchPublications();
```

### 管理画面

データの編集は管理画面から行えます：

1. 開発サーバーを起動: `npm run dev`
2. 管理画面にアクセス: `http://localhost:3000/admin/login`
3. パスワードを入力してログイン
4. データを編集・保存
5. ビルドを実行してサイトを更新

**注意**: 管理画面は開発サーバー（`npm run dev`）でのみ動作します。本番環境では常時起動の開発サーバーが必要です。

#### 認証

管理画面は以下の 2 段階認証で保護されています：

1. **IP アドレス制限**: 環境変数`ALLOWED_IPS`で許可された IP アドレスのみアクセス可能
2. **パスワード認証**: 環境変数`ADMIN_PASSWORD`で設定されたパスワードが必要

#### ディレクトリ構造

管理画面は認証状態に応じて分離されています：

- `admin/(auth)/login` - 認証前のログイン画面
- `admin/(authed)/edit` - 認証後の編集画面

## 🎨 スタイリング

### CSS Modules

各コンポーネントは独自の CSS Module ファイルを持ちます：

```typescript
import styles from "./page.module.css";

export default function Component() {
  return <div className={styles.container}>...</div>;
}
```

### グローバルスタイル

- `src/app/globals.css`: 全体のスタイル
- `src/styles/variants.css`: 共通のスタイル変数

## 🔧 開発ガイド

### 新しいページの追加

1. `src/app/[locale]/`内に新しいディレクトリを作成
2. `page.tsx`ファイルを作成
3. 必要に応じて`page.module.css`でスタイルを追加

```typescript
// src/app/[locale]/example/page.tsx
import styles from "./page.module.css";

export default function ExamplePage() {
  return (
    <div className={styles.container}>
      <h1>新しいページ</h1>
    </div>
  );
}
```

### ページコンポーネントの作成, 修正

既存のページコンポーネントは`src/components/pages/`以下に定義されています，ここには，ページ固有のコンポーネントなどを配置します．ファイルは`index.tsx`と`clients.tsx`に分かれています．fetch したいデータは全て`index.tsx`内で処理し，`clients.tsx`には Client コンポーネントを記述してください．本リポジトリでは SSG を採用しているため，SSG に則った開発をしてください．

### 新しい汎用コンポーネントの作成

ここでは，汎用コンポーネントを「２つ以上のファイルで使用するコンポーネント」と「共通化した方が実装が楽だと感じたコンポーネント」の積集合で定義します．今後実装をする中で共通化の指標に困った場合，本実装の`ui/`以下を参考にしてください．

1. `src/components/ui/`内にディレクトリを作成
2. `index.tsx`と`index.module.css`を作成

```typescript
// src/components/ui/example/index.tsx
import styles from "./index.module.css";

interface ExampleProps {
  title: string;
}

export default function Example({ title }: ExampleProps) {
  return (
    <div className={styles.container}>
      <h2>{title}</h2>
    </div>
  );
}
```

### 国際化対応

1. `src/messages/`内の各言語ファイルに翻訳を追加
2. コンポーネントで`useTranslations`フックを使用

```typescript
import { useTranslations } from "next-intl";

export default function Component() {
  const t = useTranslations("common");

  return <h1>{t("title")}</h1>;
}
```

## 📦 ビルドとデプロイ

### 本番ビルド

```bash
npm run build
```

### 静的サイト生成

このプロジェクトは完全な静的サイト生成（SSG）を使用しています：

- `export const dynamic = "force-static"`: 静的生成を強制
- `export const revalidate = false`: 再検証を無効化

## 🐛 トラブルシューティング

### よくある問題

1. **環境変数が読み込まれない**

   - `.env`ファイルが正しい場所にあるか確認
   - 開発サーバーを再起動

2. **CSV ファイル読み込みエラー**

   - `data/`ディレクトリ内の CSV ファイルが存在するか確認
   - CSV ファイルの形式が正しいか確認（1 行目は説明行、2 行目以降がヘッダーとデータ）

3. **TypeScript エラー**
   - `npm run lint`でエラーを確認
   - 型定義を適切に追加

## 📚 参考資料

- [Next.js Documentation](https://nextjs.org/docs)
- [next-intl Documentation](https://next-intl-docs.vercel.app/)

## 🤝 コントリビューション

1. 新しい機能を追加する際は、適切なブランチを作成
2. コードの品質を保つため、ESLint を実行
3. 多言語対応が必要な場合は、翻訳ファイルも更新

## 📄 ライセンス

このプロジェクトは森研究室の公式 Web サイトです。

## ローカルでのテスト方法

ローカル環境で SSG サイトのテスト，デモをしたい場合，以下のコマンドを利用してください．

```bash
npm run build
cd out
python3 -m http.server
```
