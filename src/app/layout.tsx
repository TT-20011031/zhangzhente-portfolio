import type { Metadata } from "next";
import { SiteHeader } from "@/components/SiteHeader";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "章振特｜AI Agent 开发工程师",
    template: "%s｜章振特",
  },
  description: "章振特的 AI Agent 工程与时序预测研究作品集。",
  keywords: ["AI Agent", "LangGraph", "RAG", "Text-to-SQL", "多智能体", "章振特"],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="zh-CN">
      <body>
        <a className="skip-link" href="#main-content">跳到主要内容</a>
        <SiteHeader />
        <div id="main-content">{children}</div>
      </body>
    </html>
  );
}
