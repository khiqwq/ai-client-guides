---
title: Claude Code
description: Claude Code CLI 的安装、初始化、配置与验证。
outline: [2, 3]
---

# Claude Code CLI 安装与配置指南

## 1. 安装 Claude Code

本机安装是官方推荐方式，优势包括：自包含可执行文件、无需 Node.js 依赖、自动更新更稳定。

**Homebrew（macOS、Linux）：**

```bash
brew install --cask claude-code
```

**macOS、Linux、WSL：**

```bash
curl -fsSL https://claude.ai/install.sh | bash
```

**Windows PowerShell：**

```PowerShell
irm https://claude.ai/install.ps1 | iex
```

安装完成后验证：

```bash
claude --version
```

## 2. 初始化

首次安装后需先执行一次 `claude` 完成初始化，此后配置文件方能生效。

```bash
claude
```

初始化过程中出现登录引导时可直接跳过，本站使用令牌鉴权，无需登录官方账号。

## 3. 配置

配置文件位于用户主目录下的隐藏文件夹 `.claude` 中：

|操作系统|路径|
|---|---|
|Windows|`C:\Users\用户名\.claude\settings.json`|
|macOS / Linux|`~/.claude/settings.json`|

文件不存在则新建，填入以下内容，并将 `ANTHROPIC_AUTH_TOKEN` 替换为自己的令牌：

```json
{
  "env": {
    "ANTHROPIC_BASE_URL": "https://codeflow.asia",
    "ANTHROPIC_AUTH_TOKEN": "sk-您的令牌",
    "ANTHROPIC_MODEL": "claude-sonnet-5",
    "ANTHROPIC_DEFAULT_SONNET_MODEL": "claude-sonnet-5",
    "ANTHROPIC_DEFAULT_OPUS_MODEL": "claude-opus-5",
    "ANTHROPIC_DEFAULT_HAIKU_MODEL": "claude-haiku-4-5-20251001"
  }
}
```

此处地址不带 `/v1`，Claude Code 自行补全。

后四项显式指定模型。Claude Code 内置的默认模型 ID 未必在本站可用列表内，不指定时可能返回 404。可替换为模型广场中任一 Claude 模型 ID，会话内亦可用 `/model claude-opus-5` 临时切换。

## 4. 验证

进入项目目录并启动：

```bash
cd your-awesome-project
claude
```

出现对话界面并能正常回复即配置完成。

详细信息参见官方文档：https://code.claude.com/docs/zh-CN/setup#安装
