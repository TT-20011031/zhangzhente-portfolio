# 章振特个人作品集

面向 AI Agent、LLM 应用和后端工程岗位的中文个人作品集，包含三个工程案例与两项时序预测研究。

## 本地运行

```bash
pnpm install
pnpm dev
```

访问 `http://localhost:3000`。

## 校验与构建

```bash
pnpm lint
pnpm typecheck
pnpm build
```

项目使用 Next.js 静态导出，生产文件生成至 `out/`，可直接部署到 Vercel。

## 素材与隐私

- 公开仓库仅保存网页所需的 SVG 与经过裁切、遮盖、压缩的 WebP 副本。
- 原始项目截图和开发文档不进入仓库。
- `scripts/process_assets.py` 用于从本机私有素材目录重新生成公开媒体，可通过 `--source` 指定素材路径。
- 站点按作品集需求保留原始简历 PDF 下载；其中的公开范围与页面正文不同。
