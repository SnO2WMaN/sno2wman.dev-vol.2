<div align="center">

# [sno2wman.dev](https://sno2wman.dev) v2

</div>

<div align="center">

[![GitHub](https://img.shields.io/github/license/SnO2WMaN/site)](https://github.com/SnO2WMaN/site/blob/master/LICENSE)
[![Netlify Status](https://api.netlify.com/api/v1/badges/67ae15ec-b126-4833-a8fd-96b99c52890f/deploy-status)](https://app.netlify.com/sites/sno2wman/deploys)
[![CI](https://github.com/SnO2WMaN/site/workflows/CI/badge.svg)](https://github.com/SnO2WMaN/site/actions?query=workflow%3ACI)

</div>

## develop

### Setup

```bash
git config --local commit.template .github/COMMIT_TEMPLATE
```

```bash
yarn
```

### dev

```bash
yarn dev
```

### lint, format

```bash
yarn lint

yarn fmt # lint + format
```

## Using

### 🖥️ Frontend

- [Next.js](https://nextjs.org)
- [TypeScript](https://www.typescriptlang.org)
- CSS フレームワーク
  - [Tailwind CSS](https://tailwindcss.com)
  - [styled-components](https://styled-components.com)
- アニメーション
  - [react-spring](https://www.react-spring.io)
- アイコン
  - [Font Awesome 5](https://fontawesome.com/)

### 🛠️ Tools

- [ESLint](https://eslint.org/)で`.js`, `.ts`, `.ts`, `.tsx`をチェック
- [Prettier](https://prettier.io/)でその他ファイルをチェック
- [husky](https://github.com/typicode/husky) + [lint-staged](https://github.com/okonet/lint-staged) によるコミット時の自動 lint

### 🚇 Infrastructure

- [Netlify](https://www.netlify.com/)へデプロイ
- GitHub Actions で以下をプッシュ毎に実行
  - [Lighthouse](https://github.com/GoogleChrome/lighthouse-ci)
- [Renovate](https://renovate.whitesourcesoftware.com) で依存関係を(半)自動更新

## Support

[pixiv FANBOX](https://sno2wman.fanbox.cc/)

[![ko-fi](https://www.ko-fi.com/img/githubbutton_sm.svg)](https://ko-fi.com/P5P514HW9)
