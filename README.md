
# GifTs 個人プロフィールページ

大浦空（OURA Sora）の個人プロフィールページです。Instagramストーリー風のカルーセルで、GifTsの情報や関連リンクを表示します。

## 特徴

- 📱 スマートフォン最適化されたレスポンシブデザイン
- 🎨 Instagramストーリー風のカルーセルUI
- ⚡ React + TypeScript + Vite による高速開発環境
- 🎭 Framer Motion によるスムーズなアニメーション
- 🎯 タップ/スワイプ操作による直感的なナビゲーション

## 技術スタック

- **フロントエンド**: React 18, TypeScript
- **ビルドツール**: Vite
- **スタイリング**: Tailwind CSS
- **アニメーション**: Framer Motion
- **UIコンポーネント**: Radix UI, Lucide React
- **カルーセル**: Embla Carousel

## セットアップ

### 前提条件

- Node.js 18以上
- npm または yarn

### インストール

```bash
# 依存関係のインストール
npm install

# 開発サーバーの起動
npm run dev
```

### ビルド

```bash
# プロダクションビルド
npm run build
```

## プロジェクト構造

```
src/
├── App.tsx              # メインアプリケーションコンポーネント
├── main.tsx             # アプリケーションエントリーポイント
├── vite-env.d.ts        # TypeScript型宣言
├── assets/              # 画像アセット
├── components/          # UIコンポーネント
│   ├── ui/             # 再利用可能なUIコンポーネント
│   └── figma/          # Figma関連コンポーネント
└── styles/             # スタイルファイル
```

## 機能

### カルーセルスライド

1. **ニュース**: 軽井沢プロジェクトの学生参加者募集
2. **GifTsについて**: 組織の概要とミッション
3. **デジタル広報チーム**: チーム情報とメンバー紹介
4. **リンク集**: 公式HPやLinkedInへのリンク

### 外部リンク

- [LinkedIn](https://linkedin.com/in/oura-sora)
- [GifTs公式HP](https://gifts.ne.jp)
- [GifTs公式LinkedIn](https://linkedin.com/company/gifts)
- [軽井沢プロジェクト](https://gifts.ne.jp/karuizawa-project)

## 開発

### 開発サーバー

```bash
npm run dev
```

開発サーバーは `http://localhost:3000` で起動します。

### 型チェック

```bash
npm run type-check
```

## GitHub Pages での公開

このプロジェクトはGitHub Pagesで公開するように設定されています。

> **注意**: このプロジェクトは自動デプロイが設定されています。

### 公開手順

1. **GitHubリポジトリの作成**
   - GitHubで新しいリポジトリを作成
   - リポジトリ名を `GifTs_1` に設定（または `vite.config.ts` の `base` パスを変更）

2. **コードのプッシュ**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/GifTs_1.git
   git push -u origin main
   ```

3. **GitHub Pagesの設定**
   - リポジトリの「Settings」→「Pages」に移動
   - Source を「GitHub Actions」に設定

4. **自動デプロイ**
   - `main`ブランチにプッシュすると、自動的にGitHub Actionsが実行され、GitHub Pagesにデプロイされます
   - デプロイ完了後、`https://YOUR_USERNAME.github.io/GifTs_1/` でアクセス可能

### 手動デプロイ

```bash
npm run deploy
```

## ライセンス

このプロジェクトはGifTsの一部として開発されています。

## オリジナルデザイン

Figmaデザインファイル: [スマホ用画像ページ作成](https://www.figma.com/design/N4bLqqBbYpKtmuljBcT4Li/%E3%82%B9%E3%83%9E%E3%83%9B%E7%94%A8%E7%94%BB%E5%83%8F%E3%83%9A%E3%83%BC%E3%82%B8%E4%BD%9C%E6%88%90)
  