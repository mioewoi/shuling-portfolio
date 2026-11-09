# 叶书伶 · 作品集骨架

Vite + React + TypeScript + Tailwind CSS。纯 CSS 轻量交互，无动画依赖、无外部字体、无 3D。

## 本地运行

```powershell
cd C:\Users\28629\shuling-portfolio
npm install
npm run dev
```

开发地址以终端输出为准。生产构建：`npm run build`；本地检查构建：`npm run preview`。

## 已实现

- 首页：100vh 宇宙占位首屏、三个错位轨道式精选入口、其余八个项目及类别筛选、个人介绍、联系信息占位。
- 项目详情：`/projects/:slug`，包含元信息、概述、设计过程、画廊占位、下一项目与返回链接。
- 导航锚点、平滑滚动、键盘焦点、减少动态效果支持、桌面及小屏布局、未找到项目与 404 页面。
- 首页精选：LuxReal、待补充的移动端项目、小象超市。年份与角色未经确认，统一保留“待补充”。

## 后续替换位置

| 内容 | 文件 / 方式 |
| --- | --- |
| 项目数据、分类、排序、精选 | `src/data/projects.ts`，`featured: true` 加入精选，支持 3–4 张 |
| 真实封面 | 放入 `public/images/`，将 `cover: null` 改成 `/images/文件名.webp` |
| 宇宙背景、首屏文案 | `src/components/HeroSection.tsx` |
| 轨道布局 | `src/components/FeaturedOrbitSection.tsx` 和 `src/styles.css` 的 `orbit-position-*` |
| 基础颜色、尺寸、响应式、hover | `src/styles.css`；保留 reduced-motion 规则 |
| 真实案例过程、画廊、Demo | `src/pages/ProjectDetailPage.tsx`，后续扩展 Project 数据结构，用数据驱动案例内容 |
| 简历、个人经历、邮箱 | `src/pages/HomePage.tsx` 的 About / Contact |

当前抽象封面都标注“封面占位”，不代表真实项目界面。Demo 后续用 `<video controls preload="none" poster="...">` 嵌入；图片使用 WebP / AVIF 并保留懒加载。不要把未经确认的 mock 数字作为成果上线。

## 组件结构

```text
src/
  App.tsx                 路由与滚动行为
  data/projects.ts        独立、类型化项目数据
  components/
    Navbar.tsx
    HeroSection.tsx
    FeaturedOrbitSection.tsx
    ProjectFeedSection.tsx
    ProjectCard.tsx
    ProjectArtwork.tsx    通用封面 / 占位图
    Footer.tsx
  pages/
    HomePage.tsx
    ProjectDetailPage.tsx
  styles.css
```

## 部署注意

构建产物在 `dist/`，不提交到 Git。GitHub Pages 地址：https://mioewoi.github.io/shuling-portfolio/。

仓库 Settings → Pages → Build and deployment → Source 选择 **GitHub Actions**。每次推送 `main`，`.github/workflows/deploy-pages.yml` 都会安装锁定依赖、构建并部署，也可在 Actions 中手动运行。

生产构建的 Vite base 与 BrowserRouter basename 为 `/shuling-portfolio/`。Vite 插件统一适配源码中的公共图片、视频和图标地址，CSS 和 HTML 资源由 Vite 处理，不改动页面视觉。`postbuild` 从项目数据生成 About 和各项目的静态 HTML 入口，支持直接访问和刷新，并提供 `404.html`。新增详情页后会自动生成对应入口；若新增其他顶层路由，请同步更新 `scripts/pages-entries.mjs`。

发布前执行 `npm ci` 和 `npm run build`。`references/`、`figma-reference/`、`tmp/`、本地测试文件、环境变量和密钥文件均由 `.gitignore` 排除；网站实际使用的 `public/` 资源会公开发布。
