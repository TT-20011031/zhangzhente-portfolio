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
  index: string;
  title: string;
  eyebrow: string;
  role: string;
  period: string;
  summary: string;
  thesis: string;
  tags: string[];
  tone: "graphite" | "herbal" | "civic" | "research";
  hero: MediaAsset;
  facts: { label: string; value: string }[];
  sections: StudySection[];
  external?: { label: string; href: string }[];
};

const media = {
  deluConsole: {
    src: "/media/deludata/semantic-console.webp",
    alt: "DeluData 语义治理控制台，经裁切移除账号与数据源信息",
    caption: "语义治理控制台（公开裁切版）",
    width: 1570,
    height: 366,
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
    src: "/media/deludata/query-result-redacted.webp",
    alt: "DeluData 自然语言问数结果页，业务数据已永久遮盖",
    caption: "自然语言问数结果（业务字段与结果已永久遮盖）",
    width: 1435,
    height: 822,
  },
  drugWorkspace: {
    src: "/media/drug/workspace.webp",
    alt: "多智能体中药研发助手需求输入工作区",
    caption: "研发任务入口（会话历史已从公开素材中移除）",
    width: 1210,
    height: 415,
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
    src: "/media/drug/workflow-progress.webp",
    alt: "研发助手多轮任务和报告生成进度界面",
    caption: "多轮任务恢复与可观察的步骤进度（详细提示已移除）",
    width: 1050,
    height: 800,
  },
  drugStages: {
    src: "/media/drug/report-stages.webp",
    alt: "研发报告六个执行阶段界面",
    caption: "需求解析、检索、分析、法规、配方与规格六阶段",
    width: 395,
    height: 793,
    portrait: true,
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
    src: "/media/dyng/architecture.webp",
    alt: "DynG-Diff 两阶段动态引导扩散框架",
    caption: "DynG-Diff：无条件骨干与状态感知动态引导",
    width: 2400,
    height: 1710,
    contain: true,
  },
  dyngAblation: {
    src: "/media/dyng/experiment-1.webp",
    alt: "DynG-Diff 动态引导、标量引导和无引导对比图",
    caption: "动态矩阵引导、标量引导与无引导的消融对比",
    width: 2400,
    height: 495,
    contain: true,
  },
  dyngCompare: {
    src: "/media/dyng/experiment-2.webp",
    alt: "DynG-Diff 与多种概率时序预测方法的实验对比",
    caption: "跨数据集与预测窗口的概率预测表现",
    width: 2400,
    height: 1261,
    contain: true,
  },
  dyngWeights: {
    src: "/media/dyng/experiment-3.webp",
    alt: "DynG-Diff 观测精度和动态引导权重热力图",
    caption: "观测精度与策略网络动态权重的对应关系",
    width: 2400,
    height: 1215,
    contain: true,
  },
  cspArchitecture: {
    src: "/media/csp/architecture.webp",
    alt: "CSP-Diff 多能耦合先验引导扩散预测架构",
    caption: "CSP-Diff：耦合先验、S4 去噪骨干与梯度引导推理",
    width: 2400,
    height: 1393,
    contain: true,
  },
  cspResults: {
    src: "/media/csp/results.webp",
    alt: "CSP-Diff 与多种时序预测模型的结果表",
    caption: "电、冷、热负荷在不同输入窗口下的对比结果",
    width: 753,
    height: 974,
    portrait: true,
    contain: true,
  },
  cspElectric: {
    src: "/media/csp/experiment-1.webp",
    alt: "电负荷真实曲线与多种模型预测曲线",
    caption: "电负荷预测曲线",
    width: 2400,
    height: 1187,
    contain: true,
  },
  cspCooling: {
    src: "/media/csp/experiment-2.webp",
    alt: "冷负荷真实曲线与多种模型预测曲线",
    caption: "冷负荷预测曲线",
    width: 2400,
    height: 1187,
    contain: true,
  },
  cspHeating: {
    src: "/media/csp/experiment-3.webp",
    alt: "热负荷真实曲线与多种模型预测曲线",
    caption: "热负荷预测曲线",
    width: 2400,
    height: 1187,
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
      "这不是一个只会生成 SQL 的聊天框，而是一套让知识检索、语义治理、权限编译和只读执行彼此约束的企业系统。",
    tags: ["LangGraph", "RAG", "Text-to-SQL", "FastAPI", "React", "ChromaDB"],
    tone: "graphite",
    hero: media.deluConsole,
    facts: [
      { label: "职责", value: "需求分析 / 架构 / 前后端 / 部署" },
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
        media: [media.deluOverview],
      },
      {
        marker: "02 / KNOWLEDGE",
        title: "Wiki 负责复用，RAG 负责证据",
        body: [
          "RAG 在查询时保留原文细节，适合数字、公式、页码和参数；Wiki 在入库阶段把跨文档知识编译为可复用的实体页面与关系。在线路由先用确定性规则，再由低温结构化分类器决定 wiki、rag 或两者并用。",
          "检索链路使用语义分块、Dense 与 BM25 混合召回、重排和上下文扩展，最终回答仍回到原始证据。",
        ],
        media: [media.deluWiki],
      },
      {
        marker: "03 / QUERY",
        title: "把 Text-to-SQL 收束为确定性编译",
        body: [
          "自然语言先被解析为查询意图，再经过业务术语、指标、公式、时间口径与表关系组成的语义层。授权 Schema 与访问策略参与编译，SQLGlot 负责生成和校验，最后才进入只读连接执行。",
          "链路重点不是让模型自由写 SQL，而是让每一次查询都能说明用了什么口径、经过哪些权限、为何可以执行。",
        ],
        media: [media.deluSql, media.deluQuery],
      },
      {
        marker: "04 / GOVERNANCE",
        title: "权限不是后置过滤，而是编译输入",
        body: [
          "工作区形成租户硬边界，部门和用户权限形成软边界。对象权限覆盖表、字段、指标依赖、行过滤、时间范围和连接关系；若无法形成安全闭环，系统默认拒绝并给出可选路径。",
          "数据库白名单、SQL AST 单语句校验和原生只读账号构成三层防线，执行记录保留审计线索。",
        ],
        media: [media.deluPermission],
      },
      {
        marker: "05 / BOUNDARY",
        title: "目前的能力边界",
        body: [
          "问数效果高度依赖语义治理质量，业务规则仍需要按数据源建立适配和回归测试；Wiki 编译也需要治理与人工复核。后续重点是扩大评测集、减少业务硬编码，并用可配置规则与向量检索增强语义匹配。",
        ],
      },
    ],
  },
  {
    slug: "drug-development",
    kind: "project",
    index: "02",
    title: "多智能体中药研发助手",
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
        media: [media.drugOverview],
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
      { label: "个人贡献", value: "切分 / 检索 / Prompt / 重试" },
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
    index: "R1",
    title: "DynG-Diff",
    eyebrow: "概率多元时序预测",
    role: "第一作者 · KBS 外审中",
    period: "2026 · arXiv",
    summary:
      "用状态感知策略网络在扩散推理过程中动态判断不同变量的观测可靠性。",
    thesis:
      "同一时刻、不同变量的观测质量并不相同；引导强度也不应该只是一个固定标量。",
    tags: ["Diffusion", "Time Series", "Dynamic Guidance", "Probabilistic Forecasting"],
    tone: "research",
    hero: media.dyngArchitecture,
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
        marker: "01 / QUESTION",
        title: "观测可靠性随状态变化",
        body: [
          "现有条件扩散方法通常采用任务特定条件或统一引导强度，难以描述变量间显著不同的噪声水平与演化模式。DynG-Diff 将联合分布学习与预测引导拆开：先训练无条件扩散骨干，再训练轻量策略网络。",
        ],
      },
      {
        marker: "02 / METHOD",
        title: "从一次去噪估计中推断动态权重",
        body: [
          "策略网络联合当前噪声状态与一步去噪估计，输出变量敏感的动态引导矩阵。论文将该权重解释为观测分布的局部精度，使高置信变量获得更强引导，同时削弱异常观测带来的干扰。",
        ],
        media: [media.dyngAblation, media.dyngWeights],
      },
      {
        marker: "03 / EVIDENCE",
        title: "竞争力与鲁棒性，而不是笼统的 SOTA",
        body: [
          "实验覆盖 ETTh1、Exchange、Weather、Appliance、Solar 与 Traffic 等真实数据集，并在多个预测窗口比较 MSE 与 CRPS。结果显示方法具备有竞争力的概率预测表现，在严重观测噪声下体现出更稳定的鲁棒性。",
        ],
        media: [media.dyngCompare],
      },
    ],
  },
  {
    slug: "csp-diff",
    kind: "research",
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
    facts: [
      { label: "电负荷 MAPE", value: "1.89%" },
      { label: "冷负荷 MAPE", value: "3.76%" },
      { label: "热负荷 MAPE", value: "0.66%" },
    ],
    sections: [
      {
        marker: "01 / PRIOR",
        title: "从硬筛选转向连续耦合先验",
        body: [
          "模型先用 Spearman 相关性衡量电、冷、热负荷对环境因素的依赖，再通过 Softmax 映射形成连续权重矩阵。强耦合变量承担主导信息，弱耦合变量仍以较小权重保留。",
        ],
      },
      {
        marker: "02 / MODEL",
        title: "无条件 S4 骨干，推理阶段注入约束",
        body: [
          "S4 序列模型作为扩散去噪骨干，通过无条件训练学习负荷数据的长程依赖与高维联合分布。推理阶段将耦合权重写入能量函数，构造无需额外分类器的观测自引导项，以梯度动态修正反向采样轨迹。",
        ],
        media: [media.cspResults],
      },
      {
        marker: "03 / RESULTS",
        title: "在三类负荷上验证精度与形态一致性",
        body: [
          "亚利桑那州立大学 IES 数据集实验中，电、冷、热负荷 MAPE 分别达到 1.89%、3.76% 与 0.66%。预测曲线在波峰和波谷等关键转折处保持较好的拟合。",
        ],
        media: [media.cspElectric, media.cspCooling, media.cspHeating],
      },
      {
        marker: "04 / LIMITS",
        title: "结论适用范围",
        body: [
          "当前验证集中在单一 IES 场景，跨气候区域和系统类型的泛化仍需更多数据集检验。输入以历史负荷与气象因素为主，尚未覆盖实时价格、需求响应等因素；扩散模型的多步采样也限制了毫秒级控制场景中的工程效率。",
        ],
      },
    ],
  },
];

export const allStudies = [...projects, ...research];

export function getStudy(kind: Study["kind"], slug: string) {
  return allStudies.find((study) => study.kind === kind && study.slug === slug);
}
