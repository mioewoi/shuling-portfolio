export type HomeProject = {
  id: string
  title: string
  description: string
  cover: string
  href: string
  heroLabel: string
  icon: string
}

export const homeProjects: HomeProject[] = [
  {
    id: 'luxreal',
    title: 'LuxReal｜互动影游导演台设计',
    description: '优化互动影游导演台的节点体系、画布交互与工作流引导，提升复杂剧情的理解效率与创作体验。',
    cover: '/images/LuxReal互动影游导演台.png',
    href: '/projects/luxreal',
    heroLabel: 'LuxReal – AI Native',
    icon: '/hero-hover/icons/luxreal.webp',
  },
  {
    id: 'luxreal-mobile',
    title: 'LuxReal｜移动端',
    description: '交互链路梳理 · 搭建 · Demo',
    cover: '/images/LuxReal移动端封面.png',
    href: '/projects/mobile-exploration',
    heroLabel: 'LuxReal – 移动端Demo',
    icon: '/hero-hover/icons/luxreal.webp',
  },
  {
    id: 'bilibili-manga',
    title: '哔哩哔哩漫画｜用户体验优化',
    description: '框架布局 / 视觉优化 / 互动反馈',
    cover: '/images/bilibili漫画用户核心使用链路优化封面.png',
    href: '/projects/bilibili-manga',
    heroLabel: 'BiliBili漫画 – To C',
    icon: '/hero-hover/icons/bilibili.webp',
  },
  {
    id: 'xiaoxiang',
    title: '小象超市｜抢鲜季活动视觉',
    description: '以春日抢鲜为主题，打造小象IP营销主视觉与系列活动场景。',
    cover: '/images/explorations/xiaoxiang.webp',
    href: '/projects/xiaoxiang',
    heroLabel: '小象超市 – 视觉',
    icon: '/hero-hover/icons/xiaoxiang.webp',
  },
]
