export const categories = ['Web / AI', '移动端', '视觉设计', '学校项目'] as const
export type Category = (typeof categories)[number]
export type Artwork = 'director' | 'mobile' | 'visual' | 'abstract'

export interface Project {
  id: string
  slug: string
  title: string
  category: Category
  year: string
  summary: string
  featured: boolean
  cover: string | null
  artwork: Artwork
  role: string
  overview: string
}

// 真实内容统一在这里维护。null 显示抽象占位图；替换为 /images/xxx.webp 即可。
// 年份、角色、过程和结果尚未核实，不以 mock 数据冒充真实经历。
const shared = {
  year: '待补充',
  cover: null,
  role: '待补充',
  overview: '这里将补充项目背景、目标用户与设计目标。后续可将已有作品集中的图文拆分到对应模块。',
}

export const projects: Project[] = [
  { ...shared, id: '01', slug: 'luxreal', title: 'LuxReal', category: 'Web / AI', summary: '互动影游导演台设计', featured: true, artwork: 'director' },
  { ...shared, id: '02', slug: 'mobile-exploration', title: '移动端精选项目', category: '移动端', summary: '探索指尖上的产品体验 · 项目内容待补充', featured: true, artwork: 'mobile' },
  { ...shared, id: '03', slug: 'xiaoxiang', title: '小象超市', category: '视觉设计', summary: '抢鲜季活动运营视觉', featured: true, artwork: 'visual' },
  { ...shared, id: '04', slug: 'bilibili-manga', title: '哔哩哔哩漫画', category: '移动端', summary: 'APP 用户体验优化', featured: false, artwork: 'mobile' },
  { ...shared, id: '05', slug: 'baidu-netdisk', title: '百度网盘', category: '移动端', summary: '首页 AI 智能化改版', featured: false, artwork: 'director' },
  { ...shared, id: '06', slug: 'web-exploration', title: 'Web 产品探索', category: 'Web / AI', summary: '第二个 Web 项目 · 内容待补充', featured: false, artwork: 'abstract' },
  { ...shared, id: '07', slug: 'visual-exploration', title: '视觉表达探索', category: '视觉设计', summary: '第二个视觉项目 · 内容待补充', featured: false, artwork: 'visual' },
  { ...shared, id: '08', slug: 'secondhand-bookshop', title: '二手书屋 · 书籍设计', category: '学校项目', summary: '以档案库逻辑重编古贺稔章访谈，打造多线索阅读体验', featured: false, artwork: 'abstract' },
  { ...shared, id: '09', slug: 'chess-box', title: '棋盒 · 策展&视觉', category: '学校项目', summary: '打造棋盒结构的可携式微型展览，融合棋的造型美学与参与式策展', featured: false, artwork: 'abstract' },
  { ...shared, id: '10', slug: 'pavilions', title: '展示设计 · 系列凉亭', category: '学校项目', summary: '以模块化翻板结构设计系列凉亭，适配展示、休憩与市集', featured: false, artwork: 'abstract' },
  { ...shared, id: '11', slug: 'mary-celeste', title: '内容与图解 · 玛丽·塞勒斯特之谜', category: '学校项目', summary: '以航海罗盘为视觉原型，呈现可视化图解。', featured: false, artwork: 'abstract' },
]
