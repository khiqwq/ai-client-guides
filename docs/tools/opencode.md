---
title: OpenCode
description: 创建 OpenCode 配置、保存 API 密钥并验证连接。
outline: [2, 3]
---

# Opencode配置教程

## **1、创建配置文件**

置于全局默认路径下：

|操作系统|配置文件路径|
|---|---|
|Windows|`C:\Users\<你的用户名>\.config\opencode\opencode.json`|
|macOS / Linux|`~/.config/opencode/opencode.json`|

填入以下内容：

```json
{
  "$schema": "https://opencode.ai/config.json",
  "provider": {
    "codeflow": {
      "npm": "@ai-sdk/anthropic",
      "name": "CodeFlow",
      "options": {
        "baseURL": "https://codeflow.asia/v1"
      },
      "models": {
        "claude-opus-5": { "name": "Opus 5" },
        "claude-sonnet-5": { "name": "Sonnet 5" },
        "claude-opus-4-8": { "name": "Opus 4.8" },
        "claude-sonnet-4-6": { "name": "Sonnet 4.6" },
        "claude-haiku-4-5-20251001": { "name": "Haiku 4.5" }
      }
    }
  },
  "model": "codeflow/claude-sonnet-5"
}
```

> 注意两点：
>
> 供应商配置必须置于 `provider.<供应商 ID>` 之下（此处 ID 为 `codeflow`），不可将 `npm`、`options`、`models` 平铺于最外层。平铺不会报错，但供应商不会注册，第 3 步 `/models` 中将为空。
>
> 此处 `baseURL` 需带 `/v1`。`@ai-sdk/anthropic` 仅自行拼接 `/messages`，与 Claude Code 的填写方式不同，请勿参照 Claude Code 章节删去 `/v1`。
>
>

## 2、保存 API 密钥

上述 JSON 中未包含密钥，改由 OpenCode 凭据库保存。在终端运行：

```bash
opencode auth login
```

按提示操作：

- 在供应商列表中选择 `Other`

- Provider ID 输入：`codeflow`（须与 JSON 中的 ID 一致）

- 输入你的 API Key（如 `sk-xxxxxx`）

密钥会自动保存，无需写进 JSON。

## 3、验证

终端输入 `opencode` 进入界面后输入：

```Plain Text
/models
```

如果看到你配置的模型（如 `claude-sonnet-5`），说明成功。
