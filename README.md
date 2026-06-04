# taeji46.github.io

細川泰智 (Taichi Hosokawa) の個人ポートフォリオサイト。
研究活動（学会発表）とアプリ開発を扱う、研究者兼開発者としての個人ハブ。

- **フレームワーク**: [Astro](https://astro.build) v5
- **スタイリング**: [Tailwind CSS](https://tailwindcss.com) v3（ダークモード対応）
- **デプロイ**: GitHub Pages（GitHub Actions による自動デプロイ）
- **公開 URL**: https://taeji46.github.io

## ページ構成

| パス | 内容 |
| --- | --- |
| `/` | プロフィール / Connect / About / Research / Projects / Skills |
| `/jsai2026` | JSAI 2026 発表ハブ（2件） |
| `/jsai2026/poster` | ポスター発表（QRコード飛び先・研究会優秀賞） |
| `/jsai2026/oral` | 口頭発表 OS-37（QRコード飛び先・RDFS-LLM-Bench） |

## ローカル開発

```bash
npm install      # 依存インストール
npm run dev      # 開発サーバー (http://localhost:4321)
npm run build    # 本番ビルド -> dist/
npm run preview  # ビルド結果のプレビュー
```

## デプロイ手順

1. GitHub で公開リポジトリ **`taeji46.github.io`** を作成
2. このディレクトリを push
   ```bash
   git remote add origin git@github.com:Taeji46/taeji46.github.io.git
   git push -u origin main
   ```
3. リポジトリ **Settings → Pages → Source** を **"GitHub Actions"** に設定
4. push のたびに `.github/workflows/deploy.yml` が自動でビルド・デプロイ
5. `https://taeji46.github.io` で公開

## 編集ガイド（よく触る箇所）

- **プロフィール・SNS・研究・プロジェクト・スキル**: [`src/pages/index.astro`](src/pages/index.astro) 冒頭のデータ配列
- **JSAI 共通リソース（論文 / GitHub / Zenodo）**: [`src/components/CommonResources.astro`](src/components/CommonResources.astro)
- **テーマカラー / フォント**: [`tailwind.config.mjs`](tailwind.config.mjs)
- **PDF（poster / slides / paper）**: `public/jsai2026/` に配置（[詳細](public/jsai2026/README.md)）

### 要差し替え（TODO）

現在プレースホルダになっている項目:

- `src/pages/index.astro`: X / LinkedIn / researchmap / 大学プロフィールの各 URL
- `src/components/CommonResources.astro`: 論文 PDF（または arXiv / ISWC の外部 URL）
- `public/jsai2026/`: `poster.pdf` / `slides.pdf` / `paper.pdf` の実ファイル
- `public/images/og.png`: SNS シェア用 OGP 画像（1200×630px 推奨）
- `public/images/profile.jpg`: 使う場合は `src/components/Header.astro` でアバターを画像に変更

## 将来の拡張

- 他学会ページの追加: `src/pages/iswc2026.astro` などを追加するだけ
- 独自ドメイン: `public/CNAME` に `taeji46.com` 等を記載するだけ
