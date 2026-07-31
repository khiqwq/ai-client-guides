---
layout: home
title: AI 工具接入指南
titleTemplate: false
description: CodeFlow API 的 AI 编程工具与客户端配置教程
hero:
  name: AI 工具接入指南
  text: 一次配置，顺畅使用
  tagline: 面向 CodeFlow API 的中文客户端接入手册。独立教程、清晰步骤、随时可迁移。
  image:
    src: /hero-flow.svg
    alt: API 与多个 AI 编程工具之间的连接示意图
  actions:
    - theme: brand
      text: 5 分钟快速开始
      link: /guide/quick-start
    - theme: alt
      text: 浏览全部软件
      link: /tools/
features:
  - icon: 📝
    title: Markdown 优先
    details: 每个软件一篇独立文档，后续可直接合并到其他网站或文档系统。
  - icon: 🧭
    title: 步骤清晰
    details: 从令牌准备到验证调用，关键地址、配置文件和注意事项集中呈现。
  - icon: 🌗
    title: 舒适阅读
    details: 支持本地搜索、深色模式、移动端导航和清晰的页面目录。
---

<div class="home-status" aria-label="文档概览">
  <span><b>8</b> 个软件教程</span>
  <span><b>29</b> 张步骤截图</span>
  <span><b>100%</b> Markdown</span>
  <span class="status-live"><i></i> 持续维护</span>
</div>

## 选择你的工具

<p class="section-lead">不用从头通读，找到你正在使用的软件，照着对应步骤配置即可。</p>

<ToolGrid />

## 配置前先记住

<div class="endpoint-grid">
  <div class="endpoint-card endpoint-primary">
    <span class="endpoint-label">中国优化线路</span>
    <code>https://codeflow.asia</code>
    <p>适合中国用户日常使用，账号、令牌与余额和全球线路互通。</p>
  </div>
  <div class="endpoint-card">
    <span class="endpoint-label">全球加速线路</span>
    <code>https://cdn.codeflow.asia</code>
    <p>适合团队、企业和境外网络环境，可随时切换。</p>
  </div>
</div>

::: warning `/v1` 不能凭协议猜测
Claude Code、Cherry Studio 和 OpenClaw 填写不带 `/v1` 的地址；Cursor、Kilo Code、OpenCode 和 Codex 填写带 `/v1` 的地址。请以具体软件页面为准。
:::

<div class="home-next">
  <div>
    <span class="eyebrow">第一次使用？</span>
    <h3>先完成令牌与分组准备</h3>
    <p>了解 Base URL、API 令牌、安全保管和计费分组，再进入软件教程。</p>
  </div>

[查看接入前置 →](/guide/access)
</div>

## 关于本指南

CodeFlow 站点地址：[https://codeflow.asia/](https://codeflow.asia/)

本文档说明如何将各类 AI 编程工具与客户端接入 CodeFlow。接入方式为替换接口地址与填入令牌，无需修改代码，无需海外网络环境。各工具章节相互独立，可按需查阅。

![CodeFlow 站点首页](./assets/images/image-13.png)

::: info 2026 年 7 月 22 日平台升级说明
原有 `sk-` 令牌继续有效，接入地址未变更，账户余额按 1:1 迁入，订阅剩余时长完整保留，客户端配置无需调整。历史调用明细与用量统计未迁移，消耗记录自升级日重新累计；邀请码全部更新，旧邀请链接失效；令牌不再支持单独设置有效期与模型/IP 限制，令牌层面仅保留“费用限制”。
:::
