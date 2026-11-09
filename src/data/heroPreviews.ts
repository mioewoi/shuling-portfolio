type PreviewLayer = { file: string; className: string; revision?: string }
type HeroPreview = { title: string; description: string; folder?: string; layers?: PreviewLayer[] }

// Copy and layer order checked against Page 1 in the desktop Figma file.
export const heroPreviews: Record<string, HeroPreview> = {
  luxreal: {
    title: 'LuxReal互动影游导演台',
    description: '从0搭建互动影游导演台，提升复杂剧情的理解、管理效率与创作体验',
  },
  'luxreal-mobile': {
    title: 'LuxReal - 移动端Demo',
    description: '从0搭建AI影视创作移动端，满足低门槛创作与专业用户向Web端引流',
    folder: 'LuxReal-移动端',
    layers: [
      { file: 'Layer-02.png', className: 'mobile-library' },
      { file: 'Layer-01.png', className: 'mobile-editor' },
      { file: 'Layer-03.png', className: 'mobile-character-one', revision: '20261108-1555' },
      { file: 'Layer-04.png', className: 'mobile-character-two', revision: '20261108-1555' },
    ],
  },
  'bilibili-manga': {
    title: 'BiliBili漫画 - To C',
    description: '优化漫画发现、决策、阅读与互动链路，提升浏览效率与使用体验',
    folder: 'BiliBili',
    layers: [
      { file: 'Layer-01.png', className: 'bili-review', revision: '20261108-1553' },
      { file: 'Layer-02.png', className: 'bili-discover', revision: '20261108-1552' },
      { file: 'Layer-06.png', className: 'bili-love' },
      { file: 'Layor-03.png', className: 'bili-cold' },
      { file: 'Layer-04.png', className: 'bili-cry' },
      { file: 'Layer-05.png', className: 'bili-laugh' },
    ],
  },
  xiaoxiang: {
    title: '小象超市开屏视觉',
    description: '以春日抢鲜为主题，打造小象IP营销主视觉与系列活动场景',
    folder: '小象超市',
    layers: [
      { file: 'Layer-01.png', className: 'market-spring' },
      { file: 'Layer-02.png', className: 'market-picnic' },
      { file: 'Layer-03.png', className: 'market-bamboo' },
      { file: 'Layer-04.png', className: 'market-ocean' },
    ],
  },
}
