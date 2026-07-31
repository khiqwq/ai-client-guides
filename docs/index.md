---
layout: home
title: AI 工具接入指南
titleTemplate: false
description: CodeFlow API 的 AI 编程工具与客户端配置教程
hero:
  name: AI 工具接入指南
  text: 从 API 令牌到客户端配置
  tagline: 每个软件一篇独立教程，按步骤完成 CodeFlow API 接入。
  actions:
    - theme: brand
      text: 5 分钟快速开始
      link: /guide/quick-start
    - theme: alt
      text: 选择软件
      link: /tools/claude-code
features:
  - icon: 🔑
    title: 先准备令牌
    details: 了解 Base URL、API 令牌、分组选择与安全保管方法。
    link: /guide/access
    linkText: 查看接入前置
  - icon: 🧰
    title: 按软件查阅
    details: Claude Code、Codex、Cursor、Cherry Studio 等工具各自独立成篇。
    link: /tools/claude-code
    linkText: 浏览软件教程
  - icon: 🚀
    title: 自动部署
    details: 推送到 GitHub 主分支后，由 GitHub Actions 自动构建并发布网站。
    link: /guide/deploy
    linkText: 查看部署方法
---

## 选择你的软件

| 软件 | 接入方式 | 教程 |
|---|---|---|
| Claude Code | Anthropic 协议，不带 `/v1` | [开始配置](/tools/claude-code) |
| Codex CLI / Desktop | OpenAI 协议，带 `/v1` | [开始配置](/tools/codex) |
| CC Switch | 导入 Claude 供应商 | [开始配置](/tools/cc-switch) |
| Cursor | OpenAI API Key + 自定义 Base URL | [开始配置](/tools/cursor) |
| Cherry Studio | Anthropic 供应商 | [开始配置](/tools/cherry-studio) |
| Kilo Code | OpenAI Compatible | [开始配置](/tools/kilo-code) |
| OpenCode | Anthropic 自定义供应商 | [开始配置](/tools/opencode) |
| OpenClaw | Anthropic Messages | [开始配置](/tools/openclaw) |

::: warning 配置前先看
不同软件对 Base URL 末尾是否包含 `/v1` 的要求不同。不要凭协议猜测，请以对应软件教程中的写法为准。
:::

## 推荐阅读顺序

1. [接入前置：Base URL 与 API 令牌](/guide/access)
2. [快速接入流程](/guide/quick-start)
3. [模型与计费](/guide/models-and-billing)
4. 选择上方任意软件教程完成配置

> 本站内容由 Markdown 文件维护，便于后续合并到其他网站或文档系统。

## 关于本指南

CodeFlow 站点地址：[https://codeflow.asia/](https://codeflow.asia/)

本文档说明如何将各类 AI 编程工具与客户端接入 CodeFlow。接入方式为替换接口地址与填入令牌，无需修改代码，无需海外网络环境。各工具章节相互独立，可按需查阅。

![CodeFlow 站点首页](./assets/images/image-13.png)

::: info 2026 年 7 月 22 日平台升级说明
原有 `sk-` 令牌继续有效，接入地址未变更，账户余额按 1:1 迁入，订阅剩余时长完整保留，客户端配置无需调整。历史调用明细与用量统计未迁移，消耗记录自升级日重新累计；邀请码全部更新，旧邀请链接失效；令牌不再支持单独设置有效期与模型/IP 限制，令牌层面仅保留“费用限制”。
:::
