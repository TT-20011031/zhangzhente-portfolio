import Image from "next/image";
import Link from "next/link";
import { projects, research } from "@/data/portfolio";

const capabilityGroups = [
  ["AGENT", "LangGraph", "Supervisor–Worker", "Multi-agent", "Checkpoint"],
  ["KNOWLEDGE", "RAG", "Hybrid Retrieval", "Rerank", "Wiki-First"],
  ["DATA", "Text-to-SQL", "Semantic Layer", "SQLGlot", "RBAC"],
  ["BUILD", "Python / FastAPI", "React / TypeScript", "MySQL / Redis", "Docker"],
];

export default function Home() {
  return (
    <main>
      <section className="hero page-shell" id="top">
        <div className="hero-index" aria-hidden="true">
          <span>PORTFOLIO / 2026</span>
          <strong>05</strong>
          <small>CASE FILES</small>
        </div>

        <div className="hero-copy">
          <p className="availability"><i /> 杭州 · 2027.07 毕业</p>
          <h1>
            把 <em>AI Agent</em>
            <br />
            做成可落地的系统。
          </h1>
          <p className="hero-lede">
            我是章振特，AI Agent 开发工程师。关注多智能体编排、RAG、
            Text-to-SQL 与模型应用部署，也用扩散模型研究时序预测。
          </p>
          <div className="hero-actions">
            <Link className="button-solid" href="#work">查看项目 ↓</Link>
            <a className="button-line" href="/resume.pdf" target="_blank">下载简历 ↗</a>
          </div>
        </div>

        <div className="hero-orbit" aria-label="核心能力关系图">
          <div className="orbit-ring orbit-outer" />
          <div className="orbit-ring orbit-inner" />
          <span className="orbit-label orbit-a">LANGGRAPH</span>
          <span className="orbit-label orbit-b">RAG</span>
          <span className="orbit-label orbit-c">TEXT–TO–SQL</span>
          <span className="orbit-label orbit-d">DIFFUSION</span>
          <div className="orbit-core">
            <small>FOCUS</small>
            <b>AI</b>
            <span>ENGINEERING</span>
          </div>
        </div>

        <div className="proof-line">
          <div><b>03</b><span>工程项目</span></div>
          <div><b>02</b><span>第一作者论文</span></div>
          <div><b>3.72</b><span>硕士 GPA · 前 10%</span></div>
        </div>
      </section>

      <section className="work-section page-shell" id="work">
        <header className="section-heading">
          <div><span>01</span><p>SELECTED WORK</p></div>
          <h2>系统不是功能的堆叠，<br />而是一组经过选择的边界。</h2>
        </header>

        <div className="project-list">
          {projects.map((project, index) => (
            <article className={`project-card project-${index + 1} tone-${project.tone}`} key={project.slug}>
              <div className="project-copy">
                <p className="card-index">{project.index} / {project.period}</p>
                <h3>{project.title}</h3>
                <p className="card-role">{project.role}</p>
                <p>{project.summary}</p>
                <ul aria-label="技术标签">
                  {project.tags.slice(0, 5).map((tag) => <li key={tag}>{tag}</li>)}
                </ul>
                <Link href={`/projects/${project.slug}`}>阅读案例 <span>↗</span></Link>
              </div>
              <Link className="project-image" href={`/projects/${project.slug}`} aria-label={`查看 ${project.title} 案例`}>
                <Image
                  src={project.hero.src}
                  alt={project.hero.alt}
                  width={project.hero.width}
                  height={project.hero.height}
                  sizes="(max-width: 900px) 92vw, 54vw"
                />
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="research-section" id="research">
        <div className="page-shell">
          <header className="section-heading light-heading">
            <div><span>02</span><p>RESEARCH NOTES</p></div>
            <h2>从工程问题回到方法，<br />再把方法放回真实数据。</h2>
          </header>

          <div className="research-grid">
            {research.map((paper) => (
              <article className="research-card" key={paper.slug}>
                <Link className="research-visual" href={`/research/${paper.slug}`}>
                  <Image
                    src={paper.hero.src}
                    alt={paper.hero.alt}
                    width={paper.hero.width}
                    height={paper.hero.height}
                    sizes="(max-width: 800px) 90vw, 43vw"
                  />
                </Link>
                <div className="research-copy">
                  <p>{paper.index} / {paper.role}</p>
                  <h3>{paper.title}</h3>
                  <p>{paper.summary}</p>
                  <Link href={`/research/${paper.slug}`}>查看研究详情 ↗</Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="profile-section page-shell" id="profile">
        <header className="section-heading">
          <div><span>03</span><p>PROFILE</p></div>
          <h2>工程实践与研究训练，<br />组成同一套解决问题的方法。</h2>
        </header>

        <div className="profile-grid">
          <div className="timeline">
            <h3>经历 / 教育</h3>
            <article>
              <time>2026.04 — 2026.09</time>
              <div><h4>AI Agent 开发工程实践</h4><p>需求分析、架构设计、前后端实现与部署</p></div>
            </article>
            <article>
              <time>2024.09 — 2027.07</time>
              <div><h4>浙江工商大学 · 通信工程硕士</h4><p>GPA 3.72 / 前 10% · 研究生二等奖学金</p></div>
            </article>
            <article>
              <time>2020.09 — 2024.06</time>
              <div><h4>浙江科技大学 · 电气工程及其自动化</h4><p>GPA 3.48 / 前 10%</p></div>
            </article>
          </div>

          <div className="capabilities">
            <h3>能力栈 / METHOD STACK</h3>
            {capabilityGroups.map(([label, ...items]) => (
              <div className="capability-row" key={label}>
                <b>{label}</b>
                <p>{items.join(" · ")}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="contact-section" id="contact">
        <div className="page-shell contact-inner">
          <p>04 / CONTACT</p>
          <h2>寻找 AI Agent 开发机会，<br />也欢迎讨论系统设计。</h2>
          <a className="contact-mail" href="mailto:zhangzhente@163.com">zhangzhente@163.com ↗</a>
          <div className="contact-links">
            <a href="https://github.com/TT-20011031" target="_blank" rel="noreferrer">GitHub ↗</a>
            <a href="/resume.pdf" target="_blank">简历 PDF ↗</a>
            <a href="#top">返回顶部 ↑</a>
          </div>
        </div>
      </section>
    </main>
  );
}
