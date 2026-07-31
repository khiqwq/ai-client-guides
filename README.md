# AI 工具接入指南

一个使用 VitePress 构建的中文文档网站，整理 CodeFlow API 在不同 AI 编程工具和客户端中的配置方法。

## 在线网站

- 文档站：<https://khiqwq.github.io/ai-client-guides/>
- GitHub 仓库：<https://github.com/khiqwq/ai-client-guides>

## 内容结构

- 公共说明：Base URL、API 令牌、分组、模型与计费
- 软件教程：每个软件对应一个独立 `.md` 文件
- 自动部署：推送到 `main` 后由 GitHub Actions 发布到 GitHub Pages
- 本地搜索、深色模式、移动端导航

## 软件教程

- Claude Code
- Codex CLI 与 Desktop
- CC Switch
- Cursor
- Cherry Studio
- Kilo Code
- OpenCode
- OpenClaw

## 本地预览

需要 Node.js 20 或更高版本。

```bash
npm install
npm run docs:dev
```

构建生产版本：

```bash
npm run docs:build
npm run docs:preview
```

## 部署

详细步骤见 [`docs/guide/deploy.md`](docs/guide/deploy.md)。简要流程：

1. 创建一个与 CodeFlow 名称无关的通用组织或个人仓库。
2. 将本项目推送到默认分支 `main`。
3. 在仓库 **Settings → Pages** 中选择 **GitHub Actions**。
4. 等待部署工作流完成。

工作流会自动适配项目站点 `/<仓库名>/` 和根站点 `<用户名>.github.io` 两种路径。

## 更新教程

所有公开内容位于 `docs/`：

```text
docs/
├─ guide/          # 公共说明、计费、部署
├─ tools/          # 每个软件一个 Markdown 文件
├─ assets/images/  # 教程截图
└─ .vitepress/     # 导航、侧边栏和主题配置
```

新增软件时，在 `docs/tools/` 新建一个 `.md` 文件，并同步更新 `docs/.vitepress/config.mts` 的侧边栏。

## 安全提醒

- 不要把真实 API 令牌写入 Markdown、截图或提交记录。
- 示例统一使用 `sk-您的令牌` 等占位符。
- 若令牌疑似泄露，请立即在控制台删除并重新创建。
