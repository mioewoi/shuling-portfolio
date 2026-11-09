/** Detail-page copy and project facts transcribed from the corresponding Figma frames.
 * Image content lives separately so each case can have its own page count and aspect ratios.
 */
interface ProjectDetail {
  title: string
  summary: string
  role: string
  website?: string
  date?: string
  nextProjectId: string
  nextProjectTitle?: string
}

export const projectDetails: Record<string, ProjectDetail> = {
  luxreal: {
    title: 'LuxReal互动影游导演台',
    summary: '优化导演台节点体系与画布交互。通过节点简化、网格布局及工作流引导，降低复杂剧情的理解与编辑成本，兼顾新手用户的易用性与专业创作团队的生产效率。',
    role: '产品体验设计师',
    website: 'https://www.luxreal.com/',
    date: '2026.8-2026.9',
    nextProjectId: 'luxreal-mobile',
  },
  'bilibili-manga': {
    title: 'bilibili漫画核心使用链路优化',
    summary: '本项目旨在优化哔哩哔哩漫画App的核心内容消费路径，涵盖首页、分类、作品详情至阅读与评论的全流程。当前版本虽能满足资深用户，但主流及新人用户在引导性与易用性上仍有较大优化空间。',
    role: '产品体验设计师',
    nextProjectId: 'luxreal-mobile',
  },
  xiaoxiang: {
    title: '小象超市抢鲜季活动视觉设计',
    summary: '以春日抢鲜为主题，结合品牌丰富供给与即时零售属性，通过一系列沉浸式的时令场景塑造，打造小象IP营销主视觉与系列活动场景。',
    role: '视觉设计师',
    nextProjectId: 'secondhand-bookshop',
  },
  "mobile-exploration": {
    "title": "LuxReal移动端交互设计 & Demo",
    "summary": "以自然语言交互为核心，整合 AI 对话与影视创作流程，打造轻量化、低门槛的移动端创作体验。",
    "role": "产品体验设计师",
    "date": "2026.7",
    "website": "https://mioewoi.github.io/LuxReal-/",
    "nextProjectId": "baidu-netdisk"
  },
  "baidu-netdisk": {
    "title": "百度网盘首页AI赋能改版升级",
    "summary": "围绕百度网盘首页AI智能化升级，重构信息架构与功能入口，融合AI搜索与文件管理能力，提升文件查找效率与整体使用体验。",
    "role": "产品体验设计师",
    "nextProjectId": "xiaoxiang"
  },
  // Figma still contains a director-console summary here; retain approved project-index copy.
  "secondhand-bookshop": {
    "title": "《二手书屋》 · 书籍设计",
    "summary": "以档案库逻辑重编古贺稔章访谈，打造多线索阅读体验",
    "role": "项目负责人 · 视觉设计师",
    "website": "https://mp.weixin.qq.com/s/ZHFkbOxIITXcH8L-BWpamw",
    "nextProjectId": "chess-box"
  },
  // Figma summary is also a director-console placeholder; use this project's approved index copy.
  "chess-box": {
    "title": "棋盒 · 策展 & 视觉",
    "summary": "打造棋盒结构的可携式微型展览，融合棋的造型美学与参与式策展",
    "role": "小组负责人",
    "nextProjectId": "pavilions"
  },
}
