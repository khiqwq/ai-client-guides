---
layout: home
title: CodeFlow 接入教程
titleTemplate: false
description: Claude Code、Codex、Cursor、Cherry Studio 等工具接入 CodeFlow API 的配置教程
hero:
  name: CodeFlow 使用教程
  text: 把你的 AI 编程工具接入 CodeFlow
  tagline: 准备 API 令牌，选择正在使用的软件，照着对应页面完成配置。
  image:
    src: /hero-flow.svg
    alt: CodeFlow API 配置终端示意图
  actions:
    - theme: brand
      text: 第一次使用，从这里开始
      link: /guide/quick-start
    - theme: alt
      text: 直接选择软件
      link: /tools/
features:
  - icon: '1'
    title: 创建 API 令牌
    details: 注册并进入令牌管理，为正在使用的软件创建一个独立令牌。
    link: /guide/quick-start
    linkText: 查看准备步骤
  - icon: '2'
    title: 按软件填写配置
    details: 找到对应教程，复制 Base URL、填入令牌并选择正确模型。
    link: /tools/
    linkText: 选择你的软件
  - icon: '3'
    title: 发送请求验证
    details: 发起一次简单对话，并在控制台使用日志中确认调用成功。
    link: /guide/quick-start
    linkText: 查看验证方法
---

## 选择你正在使用的软件

<p class="section-lead">每个软件都有独立教程，不需要从头阅读全部文档。</p>

<ToolGrid />

## 开始配置前，准备好这两项

<div class="endpoint-grid">
  <div class="endpoint-card endpoint-primary">
    <span class="endpoint-label">API 令牌</span>
    <code>sk-••••••••••••</code>
    <p>在 CodeFlow 控制台的“令牌管理”中创建。建议每个软件使用一个独立令牌，方便核对用量和设置费用上限。</p>
  </div>
  <div class="endpoint-card endpoint-card-urls">
    <span class="endpoint-label">Base URL</span>
    <EndpointCopy />
    <p>两条线路的账号、令牌和余额互通，可以随时切换。</p>
  </div>
</div>

::: warning 注意地址末尾的 `/v1`
Claude Code、Cherry Studio 和 OpenClaw 填写不带 `/v1` 的地址；Cursor、Kilo Code、OpenCode 和 Codex 填写带 `/v1` 的地址。不要根据协议自行判断，以对应软件教程为准。
:::

<div class="home-next">
  <div>
    <span class="eyebrow">还没有令牌？</span>
    <h3>按完整流程完成注册、充值和令牌创建</h3>
    <p>首次使用建议先走一遍快速接入流程，再返回这里选择软件。</p>
  </div>

[查看快速接入流程 →](/guide/quick-start)
</div>

## 配置时常见的问题

<p class="section-lead">地址、令牌、分组或模型不匹配时，可以先从下面找到对应说明。</p>

<HomeHelp />

<div class="home-next home-next-final">
  <div>
    <span class="eyebrow">已经准备好了？</span>
    <h3>现在选择软件并开始配置</h3>
    <p>教程中的令牌均为占位符，请替换成你在控制台创建的真实令牌。</p>
  </div>

[查看全部软件 →](/tools/)
</div>
