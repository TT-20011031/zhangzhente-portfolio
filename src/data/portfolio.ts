export type MediaAsset = {
  src: string;
  alt: string;
  caption: string;
  width: number;
  height: number;
  portrait?: boolean;
  contain?: boolean;
};

export type StudySection = {
  marker: string;
  title: string;
  body: string[];
  bullets?: string[];
  media?: MediaAsset[];
};

export type Study = {
  slug: string;
  kind: "project" | "research";
  layout?: "standard" | "research-article";
  index: string;
  title: string;
  titleLines?: string[];
  eyebrow: string;
  role: string;
  period: string;
  summary: string;
  thesis: string;
  tags: string[];
  tone: "graphite" | "herbal" | "civic" | "research";
  hero: MediaAsset;
  listingHero?: MediaAsset;
  facts: { label: string; value: string }[];
  sections: StudySection[];
  external?: { label: string; href: string }[];
};

const media = {
  deluChatHome: {
    src: "/media/deludata/chat-home-full.png",
    alt: "DeluData 企业知识问答与智能问数工作台首页",
    caption: "统一问答入口：知识库、智能问数与 Agent 能力",
    width: 2560,
    height: 1288,
    contain: true,
  },
  deluConsole: {
    src: "/media/deludata/semantic-console-full.png",
    alt: "DeluData 智能问数语义治理控制台",
    caption: "智能问数语义治理控制台",
    width: 2234,
    height: 860,
    contain: true,
  },
  deluOverview: {
    src: "/media/deludata/system-overview.svg",
    alt: "DeluData 系统架构总览图",
    caption: "系统架构总览：入口、编排、治理、Worker 与数据基础设施",
    width: 4370,
    height: 2572,
    contain: true,
  },
  deluWiki: {
    src: "/media/deludata/wiki-first-pipeline.svg",
    alt: "Wiki-First 知识流水线架构图",
    caption: "Wiki-First 知识流水线：从入库、编译治理到在线路由",
    width: 1796,
    height: 5442,
    portrait: true,
    contain: true,
  },
  deluSql: {
    src: "/media/deludata/text-to-sql-sequence.svg",
    alt: "DeluData 智能问数时序图",
    caption: "智能问数时序：意图、权限、确定性编译、执行与合成",
    width: 3730,
    height: 5024,
    portrait: true,
    contain: true,
  },
  deluPermission: {
    src: "/media/deludata/permission-governance.svg",
    alt: "DeluData 多租户和权限治理架构图",
    caption: "权限治理：租户硬边界、运行时策略与 SQL 防线",
    width: 3234,
    height: 5864,
    portrait: true,
    contain: true,
  },
  deluQuery: {
    src: "/media/deludata/query-result-full.png",
    alt: "DeluData 自然语言智能问数结果页",
    caption: "自然语言问数结果与分析过程",
    width: 1499,
    height: 1170,
    contain: true,
  },
  deluQaWorkflow: {
    src: "/media/deludata/qa-workflow-full.png",
    alt: "DeluData 知识问答执行链路与证据检索过程",
    caption: "知识问答链路：问题理解、知识检索与证据合成",
    width: 1406,
    height: 1203,
    contain: true,
  },
  deluWikiGovernance: {
    src: "/media/deludata/wiki-governance-full.png",
    alt: "DeluData Wiki 与 RAG 知识治理页面",
    caption: "Wiki 治理：实体页面、路由健康度与召回诊断",
    width: 2235,
    height: 1214,
    contain: true,
  },
  deluKnowledgeGraph: {
    src: "/media/deludata/knowledge-graph-full.png",
    alt: "DeluData 企业知识图谱页面",
    caption: "知识图谱：文档、实体与关系的可视化连接",
    width: 2235,
    height: 1284,
    contain: true,
  },
  deluFieldSemantics: {
    src: "/media/deludata/field-semantics-full.png",
    alt: "DeluData 表字段语义治理页面",
    caption: "表字段语义治理：业务名、同义词与字段说明",
    width: 2550,
    height: 1274,
    contain: true,
  },
  deluQueryPermissions: {
    src: "/media/deludata/query-permissions-full.png",
    alt: "DeluData 智能问数数据权限配置页面",
    caption: "问数权限配置：部门、岗位与账号的数据资产边界",
    width: 2560,
    height: 1288,
    contain: true,
  },
  deluOrgAccounts: {
    src: "/media/deludata/org-accounts-full.png",
    alt: "DeluData 组织与账号管理页面",
    caption: "组织与账号管理：部门、岗位与任职关系",
    width: 2005,
    height: 1085,
    contain: true,
  },
  drugWorkspace: {
    src: "/media/drug/conversation-full.png",
    alt: "多智能体中药研发助手完整对话工作台",
    caption: "研发对话工作台：研发记录、需求输入与任务范例",
    width: 2560,
    height: 1288,
    contain: true,
  },
  drugOverview: {
    src: "/media/drug/system-overview.svg",
    alt: "多智能体中药研发助手系统架构图",
    caption: "系统架构：条件路由、专家智能体、状态存储与报告输出",
    width: 4768,
    height: 3540,
    contain: true,
  },
  drugProgress: {
    src: "/media/drug/multi-turn-full.png",
    alt: "多智能体中药研发助手完整多轮对话页面",
    caption: "多轮修改：基于既有研发状态继续生成报告",
    width: 2560,
    height: 1329,
    contain: true,
  },
  drugStages: {
    src: "/media/drug/report-generation-full.png",
    alt: "多智能体中药研发助手完整研发报告生成页面",
    caption: "研发报告生成：六阶段执行进度与报告交付入口",
    width: 2560,
    height: 1329,
    contain: true,
  },
  drugExamples: {
    src: "/media/drug/examples-full.png",
    alt: "多智能体中药研发助手完整研发范例页面",
    caption: "研发范例：新品研发与古方优化任务入口",
    width: 2560,
    height: 1329,
    contain: true,
  },
  policyWorkspace: {
    src: "/media/policy/workspace.webp",
    alt: "政策公平竞争审查工具文档分析首页",
    caption: "政策文件输入与审查入口",
    width: 2200,
    height: 1142,
  },
  policyResult: {
    src: "/media/policy/analysis-result.webp",
    alt: "政策公平竞争审查工具结构化分析结果",
    caption: "问题条款、风险等级与法律依据的结构化输出",
    width: 2200,
    height: 1142,
  },
  dyngArchitecture: {
    src: "/media/dyng/core-architecture.png",
    alt: "DynG-Diff 无条件骨干预训练、状态感知策略学习与动态引导推理三阶段架构",
    caption: "整体架构：无条件骨干预训练、状态感知策略学习与动态引导推理",
    width: 6311,
    height: 4496,
    contain: true,
  },
  dyngPaperInfo: {
    src: "/media/dyng/paper-info.png",
    alt: "DynG-Diff 论文标题、作者与摘要信息",
    caption: "DynG-Diff 论文信息",
    width: 1304,
    height: 743,
    contain: true,
  },
  dyngResults: {
    src: "/media/dyng/main-results.png",
    alt: "DynG-Diff 在六个真实数据集上的 MSE 与 CRPS 对比结果表",
    caption: "主结果：六个真实数据集、四种预测长度下的 MSE 与 CRPS 对比",
    width: 859,
    height: 729,
    portrait: true,
    contain: true,
  },
  dyngBenchmark: {
    src: "/media/dyng/benchmark-results.png",
    alt: "DynG-Diff 在 ETTh1 与 Appliance 数据集上的 MSE 和 CRPS 柱状对比",
    caption: "Figures 3–4：ETTh1 与 Appliance 上不同预测长度的 MSE、CRPS 结果",
    width: 1060,
    height: 676,
    contain: true,
  },
  dyngIntervals: {
    src: "/media/dyng/forecast-intervals.png",
    alt: "动态引导、标量引导和无引导模式下的概率预测区间对比",
    caption: "Figure 5：动态、标量与无引导模式下的概率预测区间",
    width: 1065,
    height: 304,
    contain: true,
  },
  dyngWeights: {
    src: "/media/dyng/dynamic-weights.png",
    alt: "Weather 数据集观测精度与动态引导权重在不同扩散时刻的热力图对比",
    caption: "Figure 6：观测精度与策略网络动态权重的时空对应关系",
    width: 1050,
    height: 556,
    contain: true,
  },
  dyngRobustness: {
    src: "/media/dyng/robustness-efficiency.png",
    alt: "DynG-Diff 极端噪声鲁棒性与训练推理开销实验图",
    caption: "Figures 7–8：极端噪声下的性能退化与动态策略网络的计算开销",
    width: 1060,
    height: 903,
    contain: true,
  },
  cspArchitecture: {
    src: "/media/csp/core-architecture.png",
    alt: "CSP-Diff 多能耦合特征融合、S4 无条件扩散训练与梯度引导推理架构",
    caption: "整体架构：连续耦合先验、S4 去噪骨干与梯度引导反向采样",
    width: 5000,
    height: 2539,
    contain: true,
  },
  cspSoftWeighting: {
    src: "/media/csp/soft-weighting.png",
    alt: "CSP-Diff 连续软加权策略与传统硬阈值筛选的原理对比",
    caption: "先验机制：用连续软加权保留不同强度的多能耦合信息",
    width: 5000,
    height: 2901,
    contain: true,
  },
  cspPaperInfo: {
    src: "/media/csp/paper-info.png",
    alt: "CSP-Diff 中文核心论文标题、作者与摘要信息",
    caption: "CSP-Diff 论文信息",
    width: 955,
    height: 471,
    contain: true,
  },
  cspResults: {
    src: "/media/csp/main-results.png",
    alt: "CSP-Diff 与七种时序预测模型在三类负荷和四个预测窗口上的结果表",
    caption: "Table 2：八种模型在电、冷、热负荷和四个预测窗口上的 MAE、RMSE 与 MAPE",
    width: 753,
    height: 974,
    portrait: true,
    contain: true,
  },
  cspElectric: {
    src: "/media/csp/electric-forecast.png",
    alt: "电负荷真实曲线与多种模型预测曲线",
    caption: "Figure 5(a)：电负荷预测曲线对比",
    width: 2970,
    height: 1469,
    contain: true,
  },
  cspCooling: {
    src: "/media/csp/cooling-forecast.png",
    alt: "冷负荷真实曲线与多种模型预测曲线",
    caption: "Figure 5(b)：冷负荷预测曲线对比",
    width: 2970,
    height: 1469,
    contain: true,
  },
  cspHeating: {
    src: "/media/csp/heating-forecast.png",
    alt: "热负荷真实曲线与多种模型预测曲线",
    caption: "Figure 5(c)：热负荷预测曲线对比",
    width: 2969,
    height: 1469,
    contain: true,
  },
  cspCorrelation: {
    src: "/media/csp/coupling-correlation.png",
    alt: "电冷热负荷与八类气象因素之间的 Spearman 相关系数矩阵",
    caption: "Figure 2：三类负荷与气象因素的 Spearman 相关矩阵",
    width: 2511,
    height: 2124,
    contain: true,
  },
  cspGuidanceSensitivity: {
    src: "/media/csp/guidance-strength-sensitivity.png",
    alt: "电冷热负荷相对基准误差随全局引导强度变化的曲线",
    caption: "Figure 6(a)：全局引导强度 s 的敏感性分析",
    width: 800,
    height: 600,
    contain: true,
  },
  cspTemperatureSensitivity: {
    src: "/media/csp/temperature-sensitivity.png",
    alt: "电冷热负荷相对基准误差随 Softmax 温度系数变化的曲线",
    caption: "Figure 6(b)：Softmax 温度系数 τ 的敏感性分析",
    width: 800,
    height: 600,
    contain: true,
  },
  cspEfficiency: {
    src: "/media/csp/efficiency.png",
    alt: "CSP-Diff 与七种模型的训练时间和参数量对比柱状图",
    caption: "Figure 7：不同模型的训练时间与参数量对比",
    width: 800,
    height: 500,
    contain: true,
  },
} satisfies Record<string, MediaAsset>;

export const projects: Study[] = [
  {
    slug: "deludata",
    kind: "project",
    index: "01",
    title: "DeluData",
    eyebrow: "企业级 AI 数据与知识平台",
    role: "项目负责人 · 全栈开发",
    period: "2026.04 — 2026.09",
    summary:
      "把企业文档、业务语义与数据库权限组织进同一条可控的 Agent 执行链路。",
    thesis:
      "从企业文档到业务数据，DeluData 让知识可检索、回答可溯源、指标可理解、问数可管控，并将这些能力组织进统一的 Agent 工作流。",
    tags: ["LangGraph", "RAG", "Text-to-SQL", "FastAPI", "React", "ChromaDB"],
    tone: "graphite",
    hero: media.deluConsole,
    listingHero: media.deluChatHome,
    facts: [
      { label: "职责", value: "需求分析 / 架构 / 前后端" },
      { label: "核心编排", value: "Supervisor–Worker" },
      { label: "安全原则", value: "Fail closed / Read only" },
    ],
    sections: [
      {
        marker: "01 / SYSTEM",
        title: "先确定边界，再让 Agent 决策",
        body: [
          "系统采用确定性工作流骨架承载意图识别、知识路由、计划、执行与结果合成，仅把需要语义判断的局部环节交给模型。这样既保留 Agent 的适应性，也让失败、重试和人工确认都有明确落点。",
          "前端通过 SSE 展示步骤状态和生成产物，后端以 FastAPI、LangGraph、MySQL、Redis 与 ChromaDB 分担业务事实、短期状态和语义索引。",
        ],
        media: [media.deluOverview, media.deluQaWorkflow],
      },
      {
        marker: "02 / KNOWLEDGE",
        title: "Wiki 负责复用，RAG 负责证据",
        body: [
          "RAG 在查询时保留原文细节，适合数字、公式、页码和参数；Wiki 在入库阶段把跨文档知识编译为可复用的实体页面与关系。在线路由先用确定性规则，再由低温结构化分类器决定 wiki、rag 或两者并用。",
          "检索链路使用语义分块、Dense 与 BM25 混合召回、重排和上下文扩展，最终回答仍回到原始证据。",
        ],
        media: [media.deluWikiGovernance, media.deluWiki, media.deluKnowledgeGraph],
      },
      {
        marker: "03 / QUERY",
        title: "把 Text-to-SQL 收束为确定性编译",
        body: [
          "自然语言先被解析为查询意图，再经过业务术语、指标、公式、时间口径与表关系组成的语义层。授权 Schema 与访问策略参与编译，SQLGlot 负责生成和校验，最后才进入只读连接执行。",
          "链路重点不是让模型自由写 SQL，而是让每一次查询都能说明用了什么口径、经过哪些权限、为何可以执行。",
        ],
        media: [media.deluQuery, media.deluSql, media.deluFieldSemantics],
      },
      {
        marker: "04 / GOVERNANCE",
        title: "权限不是后置过滤，而是编译输入",
        body: [
          "工作区形成租户硬边界，部门和用户权限形成软边界。对象权限覆盖表、字段、指标依赖、行过滤、时间范围和连接关系；若无法形成安全闭环，系统默认拒绝并给出可选路径。",
          "数据库白名单、SQL AST 单语句校验和原生只读账号构成三层防线，执行记录保留审计线索。",
        ],
        media: [media.deluQueryPermissions, media.deluPermission, media.deluOrgAccounts],
      },
    ],
  },
  {
    slug: "drug-development",
    kind: "project",
    index: "02",
    title: "多智能体中药研发助手",
    titleLines: ["多智能体", "中药研发助手"],
    eyebrow: "研发工作流 Agent",
    role: "项目成员 · 多智能体架构",
    period: "2026.05 — 2026.07",
    summary:
      "把需求理解、古方检索、药材分析、法规审查、配方设计与报告生成编排成连续研发流程。",
    thesis:
      "让不同专业 Agent 围绕同一份结构化状态协作，并允许用户在报告生成后继续修改、恢复和追问。",
    tags: ["LangGraph", "FastAPI", "SSE", "Next.js", "SQLite Checkpoint", "Prompt"],
    tone: "herbal",
    hero: media.drugWorkspace,
    facts: [
      { label: "职责", value: "架构 / 结构化 I/O / Prompt / 上下文" },
      { label: "交互", value: "SSE 流式步骤反馈" },
      { label: "连续性", value: "Thread checkpoint / 恢复" },
    ],
    sections: [
      {
        marker: "01 / ROUTING",
        title: "一张状态图，承载三类研发任务",
        body: [
          "Router 先区分新品研发、古方优化、多轮修改、追问和闲聊。新品研发依次进入需求、古方、药材、法规、配方与工程规格；古方优化从配方解析和替换建议进入后续流程；修改请求则从已有状态继续。",
        ],
        media: [media.drugOverview, media.drugExamples],
      },
      {
        marker: "02 / STATE",
        title: "结构化状态让协作可以恢复",
        body: [
          "每个 Agent 读取并更新同一份 ProductDevState，输出契约限制字段和阶段结果。AsyncSqliteSaver 按 thread_id 保存 checkpoint，使一次研发任务可以跨请求继续，而不是每轮重新拼接全部上下文。",
        ],
        media: [media.drugProgress],
      },
      {
        marker: "03 / DELIVERY",
        title: "把长任务变成可观察的过程",
        body: [
          "FastAPI 通过 SSE 发送会话、步骤开始、步骤完成、内容、拒绝、完成和错误事件。用户能看到六个阶段的推进情况，并在任务结束后查看或下载 PDF 研发报告。",
          "产品定位是研发决策辅助与材料组织，不替代专业人员判断，也不对配方作医疗疗效承诺。",
        ],
        media: [media.drugStages],
      },
    ],
  },
  {
    slug: "policy-review",
    kind: "project",
    index: "03",
    title: "政策公平竞争审查工具",
    titleLines: ["政策公平竞争", "审查工具"],
    eyebrow: "法律政策 RAG 原型",
    role: "RAG 架构 · Prompt 工程",
    period: "2025.05 — 2025.08",
    summary:
      "面向政策条款识别潜在竞争风险，并给出法律依据与结构化修改建议。",
    thesis:
      "把长政策文档拆成可审查条款，让检索证据、风险等级与修改建议保持同一输出结构。",
    tags: ["LangChain", "RAG", "Few-shot", "结构化输出", "长文档"],
    tone: "civic",
    hero: media.policyWorkspace,
    facts: [
      { label: "个人贡献", value: "切分 / 检索 / Prompt" },
      { label: "输出", value: "风险 + 依据 + 建议" },
      { label: "状态", value: "专项模块已交付集成" },
    ],
    sections: [
      {
        marker: "01 / PIPELINE",
        title: "围绕条款，而不是固定字符长度切分",
        body: [
          "使用中文序号和条款模式识别政策结构，在尽量保留完整语义的前提下生成检索单元。知识库负责召回公平竞争审查规则与相关法律依据，减少模型只凭语言表面判断。",
        ],
        bullets: ["条款级语义切分", "检索证据随结论返回", "长文档按结构分批处理"],
      },
      {
        marker: "02 / OUTPUT",
        title: "Few-shot 固定审查结果的形状",
        body: [
          "Prompt 用少量示例约束问题条款、风险等级、适用依据与修改建议等字段；解析失败或字段缺失时触发重试，避免自由文本难以进入后续界面。",
          "页面展示的是团队原型成果；我的工作范围聚焦 RAG 与 Prompt 模块，不将整体系统实现归于个人。",
        ],
        media: [media.policyResult],
      },
    ],
  },
];

export const research: Study[] = [
  {
    slug: "dyng-diff",
    kind: "research",
    layout: "research-article",
    index: "R1",
    title: "DynG-Diff",
    eyebrow: "概率多元时序预测",
    role: "第一作者 · KBS 外审中",
    period: "2026 · arXiv",
    summary:
      "用状态感知策略网络在扩散推理过程中动态判断不同变量的观测可靠性。",
    thesis:
      "以状态感知策略网络动态估计变量可靠性，重构多元时序预测的扩散引导机制。",
    tags: ["Diffusion", "Time Series", "Dynamic Guidance", "Probabilistic Forecasting"],
    tone: "research",
    hero: media.dyngArchitecture,
    listingHero: media.dyngPaperInfo,
    facts: [
      { label: "训练", value: "两阶段分离" },
      { label: "骨干", value: "无条件扩散模型" },
      { label: "引导", value: "变量级动态矩阵" },
    ],
    external: [
      { label: "阅读 arXiv", href: "https://arxiv.org/abs/2609.02068" },
    ],
    sections: [
      {
        marker: "01 / ABSTRACT",
        title: "论文摘要",
        body: [
          "多元时间序列（MTS）的概率预测对于复杂动态系统建模至关重要。然而，现有基于扩散的方法依赖任务特定的条件范式，灵活性不足，也难以处理内在的“信息异质性”——不同变量之间显著不同的噪声水平与演化模式。为此，我们提出 DynG-Diff，一种面向多元时间序列概率预测的变量敏感动态引导扩散框架。DynG-Diff 采用两阶段分离训练策略，使用无条件扩散骨干建模多元时间序列的联合分布先验；引入轻量级状态感知策略网络，从实时含噪状态与一步去噪估计中自适应推断变量可靠性，并输出动态引导强度矩阵；同时从数学上将动态权重表述为观测分布的局部精度，使模型能够在推理阶段对高置信变量进行精确引导，并过滤异常噪声的干扰。多个真实世界基准实验表明，DynG-Diff 相较先进的条件扩散模型取得了具有竞争力的概率预测表现，并提升了严重观测破坏场景下的鲁棒性。",
        ],
      },
      {
        marker: "02 / ARCHITECTURE",
        title: "解耦训练与变量级动态引导",
        body: [
          "DynG-Diff 由三个阶段组成：首先使用标准扩散损失预训练无条件去噪骨干，以学习多元时间序列的联合概率分布；随后冻结骨干，把当前含噪状态与一步去噪估计拼接后输入状态感知策略网络，并以重构逆误差作为代理目标，学习针对每个变量和扩散时刻的动态引导强度矩阵；推理阶段，策略网络在每一步重新计算权重，以变量级方式调制观测引导梯度，使高置信观测获得更精确的引导，同时抑制异常噪声的干扰。",
        ],
        media: [media.dyngArchitecture],
      },
      {
        marker: "03 / EVIDENCE",
        title: "在真实基准上验证精度、机制与鲁棒性",
        body: [
          "实验覆盖 ETTh1、Exchange、Weather、Appliance、Solar 与 Traffic 六个真实数据集，设置 96、168、336、720 四种预测长度，以 MSE 与 CRPS 比较 DynG-Diff 和 D3U、TMDM、TimeDiff、SSSD、CSDI、TimeGrad。DynG-Diff 在多数设置取得有竞争力的结果，ETTh1、Appliance 和 Weather 的平均 CRPS 分别为 0.321、0.395 和 0.190；Solar 在各预测长度上保持竞争力，而 Traffic 的超长预测仍存在概率校准空间。",
          "消融结果显示，相比动态引导，无引导的平均 MSE 与 CRPS 分别恶化 125.6% 和 81.7%，统一标量引导分别恶化 26.1% 和 14.8%。预测区间和热力图进一步表明，策略网络生成的变量级权重能够跟随观测精度变化，并在极端噪声下比标量引导更稳健；相应代价是在 Traffic 上带来约 30.4% 的推理时间开销，当前实现更适合离线或批量预测。",
        ],
        media: [
          media.dyngResults,
          media.dyngBenchmark,
          media.dyngIntervals,
          media.dyngWeights,
          media.dyngRobustness,
        ],
      },
    ],
  },
  {
    slug: "csp-diff",
    kind: "research",
    layout: "research-article",
    index: "R2",
    title: "CSP-Diff",
    eyebrow: "综合能源系统多元负荷预测",
    role: "第一作者 ·《计算机应用》已录用",
    period: "中文核心",
    summary:
      "把多能耦合强度转化为连续物理先验，在扩散反向采样中动态校正生成轨迹。",
    thesis:
      "弱相关并不等于无信息。相比硬阈值删选，连续耦合权重能够更完整地保留综合能源系统的物理状态。",
    tags: ["Diffusion", "S4", "IES", "Spearman", "Gradient Guidance"],
    tone: "research",
    hero: media.cspArchitecture,
    listingHero: media.cspPaperInfo,
    facts: [
      { label: "电负荷 MAPE", value: "1.89%" },
      { label: "冷负荷 MAPE", value: "3.76%" },
      { label: "热负荷 MAPE", value: "0.66%" },
    ],
    sections: [
      {
        marker: "01 / ABSTRACT",
        title: "论文摘要",
        body: [
          "针对综合能源系统（IES）多元负荷预测中存在的非线性耦合复杂与物理一致性缺失问题，我们提出 CSP-Diff，一种基于多能耦合强度先验引导的扩散预测方法。该方法首先针对不同负荷对环境因素依赖强度的本质差异，构建基于 Spearman 相关性分析与 Softmax 映射的耦合特征融合机制，生成连续物理先验权重矩阵，减少传统硬阈值筛选造成的信息损失；随后引入结构化状态空间（S4）序列模型作为扩散模型的去噪骨干，通过无条件训练捕捉综合能源系统负荷数据的长程时序依赖与高维联合分布；最后在统计先验约束下构建梯度引导推理机制，将耦合权重融入能量函数形成观测自引导项，以梯度信号动态校正反向去噪轨迹。亚利桑那州立大学综合能源系统实测数据上的实验表明，电、冷、热负荷预测的 MAPE 分别降至 1.89%、3.76% 和 0.66%，验证了该方法在提升预测精度与维持物理一致性方面的有效性。",
        ],
      },
      {
        marker: "02 / ARCHITECTURE",
        title: "把耦合强度先验写入扩散采样",
        body: [
          "CSP-Diff 由三个彼此解耦又在推理阶段汇合的模块组成：多能耦合特征融合模块从历史负荷与气象数据计算 Spearman 相关矩阵，再用带温度系数的 Softmax 将不同目标负荷的耦合强度映射为连续权重；无条件扩散模块以 S4 为去噪骨干，学习电、冷、热负荷的长程依赖与联合分布；梯度引导模块则把耦合权重、历史观测与一步去噪估计写入能量函数，在每次反向采样中利用能量梯度修正生成轨迹。相比硬阈值直接删除弱相关特征，连续软加权既突出强耦合关系，也保留可能具有非线性补充价值的弱耦合信息。",
        ],
        media: [media.cspArchitecture, media.cspSoftWeighting],
      },
      {
        marker: "03 / EVIDENCE",
        title: "从预测精度到先验机制与计算效率",
        body: [
          "实验使用亚利桑那州立大学 IES 实测数据，在 12、24、48、96 四种预测窗口下，以 MAE、RMSE 与 MAPE 对比 LSTM、Transformer、Informer、DLinear、PatchTST、TimeMixer 和 TimeGrad。CSP-Diff 的电、冷、热负荷平均 MAPE 分别为 1.89%、3.76% 和 0.66%；相较 TimeMixer 分别降低 2.58、3.67 和 1.28 个百分点，相较 TimeGrad 分别降低 1.41、4.80 和 1.74 个百分点。三类负荷曲线显示，模型在波峰、波谷及周期转折处能够更贴近真实轨迹。",
          "消融实验进一步检验了连续先验的作用：在 24 步预测中，软加权在电负荷和冷负荷上取得最低 MAPE（1.72% 与 4.34%），热负荷则与同质化引导基本相当（0.58% 与 0.57%），说明连续先验提升的是整体协同建模能力，而非保证每个目标上的绝对占优。敏感性实验表明，全局引导强度 s=50 时整体表现最均衡，而温度系数的最优取值因负荷类型而异，印证了多能耦合强度并非同质。",
          "在工程效率上，CSP-Diff 的参数量约为 1.50 MB，训练耗时约 4.85 min；批量大小为 100 时，12 至 96 步预测的推理时间约为 1.64–1.98 s，显著低于 TimeGrad 的 95.04–768.48 s。当前结论仍仅来自一个 IES 数据集，且扩散采样相较确定性模型仍有迭代开销，跨地区泛化与实时调度能力有待进一步验证。",
        ],
        media: [
          media.cspResults,
          media.cspElectric,
          media.cspCooling,
          media.cspHeating,
          media.cspCorrelation,
          media.cspGuidanceSensitivity,
          media.cspTemperatureSensitivity,
          media.cspEfficiency,
        ],
      },
    ],
  },
];

export const allStudies = [...projects, ...research];

export function getStudy(kind: Study["kind"], slug: string) {
  return allStudies.find((study) => study.kind === kind && study.slug === slug);
}
