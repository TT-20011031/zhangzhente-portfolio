import Link from "next/link";
import type { Study } from "@/data/portfolio";
import { MediaFigure } from "./MediaFigure";

export function StudyPage({ study }: { study: Study }) {
  const backHref = study.kind === "project" ? "/#work" : "/#research";

  return (
    <main className={`study-page tone-${study.tone}`}>
      <section className="study-hero page-shell">
        <div className="study-breadcrumb">
          <Link href={backHref}>← 返回{study.kind === "project" ? "项目" : "研究"}</Link>
          <span>{study.index}</span>
        </div>

        <div className="study-title-grid">
          <div>
            <p className="kicker">{study.eyebrow}</p>
            <h1>{study.title}</h1>
          </div>
          <p className="study-thesis">{study.thesis}</p>
        </div>

        <div className="study-meta-line">
          <span>{study.role}</span>
          <span>{study.period}</span>
          {study.external?.map((link) => (
            <a key={link.href} href={link.href} target="_blank" rel="noreferrer">
              {link.label} ↗
            </a>
          ))}
        </div>

        <MediaFigure media={study.hero} priority />

        <div className="facts-grid" aria-label="项目摘要">
          {study.facts.map((fact) => (
            <div key={fact.label}>
              <span>{fact.label}</span>
              <strong>{fact.value}</strong>
            </div>
          ))}
        </div>
      </section>

      <div className="study-sections">
        {study.sections.map((section) => (
          <section className="study-section page-shell" key={section.marker}>
            <aside>
              <span>{section.marker}</span>
            </aside>
            <div className="section-copy">
              <h2>{section.title}</h2>
              {section.body.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
              {section.bullets && (
                <ul>
                  {section.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}
                </ul>
              )}
              {section.media && (
                <div className={`section-media ${section.media.length > 1 ? "media-grid" : ""}`}>
                  {section.media.map((item) => <MediaFigure media={item} key={item.src} />)}
                </div>
              )}
            </div>
          </section>
        ))}
      </div>

      <section className="next-contact page-shell">
        <p>继续交流</p>
        <h2>如果这个案例与你正在解决的问题相似，欢迎联系我。</h2>
        <div>
          <a href="mailto:zhangzhente@163.com">zhangzhente@163.com ↗</a>
          <Link href="/">返回首页</Link>
        </div>
      </section>
    </main>
  );
}
