---
title: Codex CLI 与 Desktop
description: Codex CLI 和 Codex Desktop 的安装与 API 配置。
outline: [2, 3]
---

# Codex CLI 安装与配置指南

按照以下步骤完成接入，即可通过本平台使用 Codex 模型调用服务。

## 前置条件：安装 Codex

确保已安装 [Node.js](https://nodejs.org/)（v22 或更高版本），然后运行：

```bash
npm install -g @openai/codex
```

安装完成后，验证是否成功：

```bash
codex --version
```

## 步骤 1：配置 `config.toml` 文件

找到并编辑 `config.toml`（不存在则新建），填入以下内容：

```toml
model_provider = "codeflow"
model = "gpt-5.6-terra"

[model_providers.codeflow]
name = "codeflow"
base_url = "https://codeflow.asia/v1"
wire_api = "responses"
requires_openai_auth = true
```

`model` 可替换为模型广场中任一 GPT 模型 ID，如 `gpt-5.6-sol`、`gpt-5.4`、`gpt-5.3-codex-spark`。

### 文件路径

根据您的操作系统，将文件放置在对应位置：

|操作系统|路径|
|---|---|
|**Windows**|`C:\Users\<用户名>\.codex\config.toml`|
|**macOS**|`/Users/<用户名>/.codex/config.toml`|
|**Linux**|`~/.codex/config.toml`|

> 注意：此处 `base_url` 需带 `/v1`，且令牌须选择 **Codex 官方分组**。
>
>

## 步骤 2：配置 `auth.json` 文件

在同一目录下编辑 `auth.json`（不存在则新建），将 `OPENAI_API_KEY` 的值替换为您在后台生成的密钥：

```json
{
  "OPENAI_API_KEY": "您的密钥"
}
```

|操作系统|路径|
|---|---|
|**Windows**|`C:\Users\<用户名>\.codex\auth.json`|
|**macOS**|`/Users/<用户名>/.codex/auth.json`|
|**Linux**|`~/.codex/auth.json`|

## 验证配置

配置完成后，在终端运行以下命令启动 Codex：

```bash
codex
```

如果一切配置正确，Codex 将成功连接到 codeflow 平台并使用配置的模型。

## Codex Desktop 配置

**与 `Codex CLI` 共用配置文件**，按上述步骤配置即可，无需另行设置。
