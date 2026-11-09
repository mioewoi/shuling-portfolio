type Paragraph = { label?: string; text: string }
type Experience = { title: string; date: string; tags: string[]; paragraphs: Paragraph[] }
type ExperienceGroup = { label: string; company?: string; date?: string; items: Experience[] }

// Content from About frame 132:390 and the supplied reference screenshot.
export const aboutExperience: ExperienceGroup[] = [
  { label: '实习经历', company: '群核科技LuxReal AI视频 – 体验设计实习生', date: '2026.6–10', items: [
    { title: '01 | 互动影游导演台设计', date: '2026.8–2026.9', tags: ['AI Native', 'AIGC', 'AI工作流设计', '节点式交互', 'To C'], paragraphs: [
      { label: '项目背景', text: '面向互动影游创作者的AI制作Agent，帮助用户从创意、剧本出发，快速生成故事设定、剧情蓝图、资产素材和可试玩预览。' },
      { label: '工作过程', text: '梳理互动影游创作流程与节点关系，结合用户对组织管理与编辑创作界面的核心需求，逐步建立节点类型、连线逻辑与画布空间规则，并通过多版本方案迭代优化导演台的信息组织方式。' },
      { label: '工作成果', text: '完成互动影游导演台从0到1的系统化设计，成功建立节点体系与空间连线规则，解决复杂剧情下内容难识别、路径难定位的问题。' },
    ] },
    { title: '02 | LUI × GUI Agent 交互设计', date: '2026.9', tags: ['AI Agent', 'GUI × LUI', '对话式交互', '交互创新', 'To C'], paragraphs: [
      { label: '项目背景', text: '本项目旨在建立 LUI 与 GUI 工作对象之间的关联，让用户能够精准调用具体工作流模块，降低复杂 AI 工作流的理解与操作成本。' },
      { label: '工作过程', text: '梳理 Agent 与剧本、资产和分镜等 GUI 对象之间的操作关系，定义并设计引用面板以及GUI中引用的快捷方式。' },
      { label: '工作成果', text: '完成 GUI 对象引用至 LUI Agent 的交互方案，实现从“自然语言描述”到“精准指定对象”的交互转变，成功降低小白用户与 AI 协作时的理解与操作成本。' },
    ] },
    { title: '03 | LuxReal 移动端核心链路设计', date: '2026.7–2026.8', tags: ['AI Agent', 'PLG增长', '移动端', 'To C'], paragraphs: [
      { text: '完成 LuxReal 移动端核心创作链路及界面框架从 0-1 搭建，负责首页及核心页面的信息结构、交互流程与视觉设计，建立移动端从内容进入到创作使用以及Web端引流的完整体验框架。' },
    ] },
  ] },
  { label: '项目经历', items: [
    { title: '01 | bilibili漫画用户核心使用链路优化', date: '2026.1–2026.2', tags: ['内容平台', '核心使用链路', 'To C'], paragraphs: [
      { label: '项目背景', text: '本项目旨在优化哔哩哔哩漫画APP的核心内容消费路径，涵盖首页、分类、作品详情至阅读与评论的全流程。' },
      { label: '调研分析', text: '通过自查与用户访谈发掘产品界面问题及用户痛点，同时利用竞品分析辅助设计执行。' },
      { label: '工作成果', text: '独立完成了哔哩哔哩漫画app核心内容消费路径整体优化，提升产品易用性以及视觉质感，提高新用户转化率及老用户留存率。' },
    ] },
    { title: '02 | 小象超市抢鲜季活动视觉', date: '2026.3', tags: ['AI Agent', 'GUI × LUI', '对话式交互', '交互创新', 'To C'], paragraphs: [
      { text: '基于运营需求进行风格探索，明确项目主导视觉方向，并搭建统一的活动视觉表达体系。通过AI辅助生成、风格筛选与后期精修相结合的方式，完成主kv、H5视觉等设计内容。' },
    ] },
  ] },
]
