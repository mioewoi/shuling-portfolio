import { categories, type Category } from './projects'

export { categories }
export type { Category }

export interface ExplorationProject {
  id: string
  title: string
  category: Category
  type: string
  date: string
  description: string
  cover: string
  coverPosition?: string
  // Only connect an existing, matching detail page. Leave null until its page is configured.
  detailUrl: string | null
}

// Order, titles, dates and descriptions follow Figma 13:564.
// This is the complete data source for the third section, including its filter counts.
export const allProjects: ExplorationProject[] = [
  {
    id: 'luxreal', title: 'LuxReal互动影游导演台', category: 'Web / AI', type: 'Web端',
    date: '2026.8–2026.9',
    description: '从0搭建互动影游导演台，提升复杂剧情的理解、管理效率与创作体验',
    cover: '/images/explorations/luxreal-director.webp', detailUrl: '/projects/luxreal',
  },
  {
    id: 'gui-lui', title: 'GUI引用至LUI交互设计', category: 'Web / AI', type: 'Web端',
    date: '2026.9',
    description: '打通GUI与LUI边界，降低工作流理解成本，提升AI创作修改的精准度',
    cover: '/images/explorations/gui-lui.webp', detailUrl: null,
  },
  {
    id: 'bilibili-manga', title: 'bilibili漫画用户核心使用链路优化', category: '移动端', type: '移动端',
    date: '2026.1–2026.2',
    description: '优化漫画发现、决策、阅读与互动链路，提升浏览效率与使用体验',
    cover: '/images/explorations/bilibili-manga.webp', detailUrl: '/projects/bilibili-manga',
  },
  {
    id: 'luxreal-mobile', title: 'LuxReal移动端交互设计 & Demo', category: '移动端', type: '移动端',
    date: '2026.7–2026.8',
    description: '从0搭建AI影视创作移动端，满足低门槛创作与专业用户向Web端引流',
    cover: '/images/explorations/luxreal-mobile.webp', detailUrl: '/projects/mobile-exploration',
  },
  {
    id: 'baidu-netdisk', title: '百度网盘首页AI赋能改版升级', category: '移动端', type: '移动端',
    date: '2026.5',
    description: '重构百度网盘首页，融合AI搜索与文件管理，提升操作效率',
    cover: '/images/explorations/baidu-netdisk.webp', detailUrl: '/projects/baidu-netdisk',
  },
  {
    id: 'xiaoxiang', title: '小象超市抢鲜季活动视觉', category: '视觉设计', type: '视觉设计',
    date: '2026.3',
    description: '以春日抢鲜为主题，打造小象IP营销主视觉与系列活动场景',
    cover: '/images/explorations/xiaoxiang.webp', detailUrl: '/projects/xiaoxiang',
  },
  {
    id: 'secondhand-bookshop', title: '二手书屋 · 书籍设计', category: '学校项目', type: '学校项目',
    date: '2025.11–2025.12',
    description: '以档案库逻辑重编古贺稔章访谈，打造多线索阅读体验',
    cover: '/images/explorations/secondhand-bookshop.webp', coverPosition: '50% 75%', detailUrl: '/projects/secondhand-bookshop',
  },
  {
    id: 'chess-box', title: '棋盒 · 策展&视觉', category: '学校项目', type: '学校项目',
    date: '2025.9–2025.10',
    description: '打造棋盒结构的可携式微型展览，融合棋的造型美学与参与式策展',
    cover: '/images/explorations/chess-box.webp', detailUrl: '/projects/chess-box',
  },
  {
    id: 'pavilions', title: '展示设计 · 系列凉亭', category: '学校项目', type: '学校项目',
    date: '2025.3–2025.4',
    description: '以模块化翻板结构设计系列凉亭，适配展示、休憩与市集',
    cover: '/images/explorations/pavilions.webp', detailUrl: null,
  },
  {
    id: 'mary-celeste', title: '内容与图解 · 玛丽·塞勒斯特之谜', category: '学校项目', type: '学校项目',
    date: '2024.11–2024.12',
    description: '创作与学习中的探索 · 内容待补充',
    cover: '/images/explorations/mary-celeste.webp', detailUrl: null,
  },
]
