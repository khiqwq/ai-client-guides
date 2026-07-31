---
title: 部署到 GitHub Pages
description: 将本仓库发布为公开文档网站。
outline: [2, 3]
---

# 部署到 GitHub Pages

仓库已经包含自动部署流程。你只需要创建一个 GitHub 仓库、推送代码，并在仓库设置中启用 GitHub Actions 作为 Pages 来源。

## 1. 创建组织或个人仓库

按当前协作要求，**组织名和仓库名不要直接使用 CodeFlow**。可以使用通用文档品牌，例如：

- 组织：`leaf-docs`、`dev-guides-cn`、`toolbox-notes`
- 仓库：`ai-client-guides`、`api-setup-docs`

仓库建议设为 Public，默认分支使用 `main`。

## 2. 初始化并推送

在项目根目录运行：

```bash
git init
git add .
git commit -m "docs: initialize AI client guides"
git branch -M main
git remote add origin https://github.com/<组织或用户名>/<仓库名>.git
git push -u origin main
```

把尖括号中的内容换成实际名称。不要把真实 API 令牌提交到仓库。

## 3. 启用 GitHub Pages

打开仓库的 **Settings → Pages**，在 **Build and deployment → Source** 中选择 **GitHub Actions**。

随后进入 **Actions** 页面，等待 `Deploy documentation to GitHub Pages` 工作流完成。

## 4. 访问网站

普通项目仓库的默认地址为：

```text
https://<组织或用户名>.github.io/<仓库名>/
```

如果仓库名本身是 `<组织或用户名>.github.io`，网站会部署在根地址。工作流会自动识别这两种情况，无需手动修改 `base`。

## 5. 后续更新

每次向 `main` 分支推送修改后，网站都会自动重新构建并发布：

```bash
git add .
git commit -m "docs: update tutorial"
git push
```

## 自定义域名（可选）

可以在 GitHub Pages 设置中填写域名，并按 GitHub 的提示配置 DNS。若使用自定义域名，建议同时在仓库中维护 `docs/public/CNAME` 文件，内容只写域名本身。

## 常见问题

### Actions 构建成功，但网站样式丢失

通常是站点基础路径错误。本仓库会根据仓库名自动设置路径；如果自行修改工作流，请确保项目站点使用 `/<仓库名>/`。

### 页面显示 404

确认 Pages 来源已选择 **GitHub Actions**，并检查 Actions 中最近一次部署是否成功。

### 如何新增一个软件教程

1. 在 `docs/tools/` 新建一个 `.md` 文件。
2. 使用一级标题写软件名称，并按步骤组织内容。
3. 在 `docs/.vitepress/config.mts` 的“软件教程”侧边栏中添加链接。
4. 推送到 `main` 分支。
