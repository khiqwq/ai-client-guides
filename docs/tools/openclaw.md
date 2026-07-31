---
title: OpenClaw
description: 配置 OpenClaw 的 Anthropic Messages 提供商与模型。
outline: [2, 3]
---

# OpenClaw配置

## 打开配置文件

运行以下命令，在命令行终端中打开配置文件：

```bash
nano ~/.openclaw/openclaw.json
```

Windows 下配置文件位于 `C:\Users\<用户名>\.openclaw\openclaw.json`。

## 修改配置文件

`baseUrl` 使用不带 `/v1` 的地址，`api` 填 `anthropic-messages`，OpenClaw 自行补全路径。

```json
{
    "gateway": {
        "mode": "local"
    },
    "agents": {
        "defaults": {
            "model": {
                "primary": "codeflow/claude-sonnet-5"
            },
            "models": {
                "codeflow/claude-sonnet-5": {},
                "codeflow/claude-opus-5": {},
                "codeflow/claude-sonnet-4-6": {},
                "codeflow/claude-haiku-4-5-20251001": {}
            }
        }
    },
    "models": {
        "mode": "merge",
        "providers": {
            "codeflow": {
                "baseUrl": "https://codeflow.asia",
                "apiKey": "sk-您的令牌",
                "api": "anthropic-messages",
                "models": [
                    {
                        "id": "claude-haiku-4-5-20251001",
                        "name": "claude-haiku-4-5-20251001",
                        "reasoning": false,
                        "input": [
                            "text"
                        ],
                        "cost": {
                            "input": 1,
                            "output": 5,
                            "cacheRead": 0.1,
                            "cacheWrite": 1.25
                        },
                        "contextWindow": 200000,
                        "maxTokens": 64000
                    },
                    {
                        "id": "claude-sonnet-4-6",
                        "name": "claude-sonnet-4-6",
                        "reasoning": true,
                        "input": [
                            "text"
                        ],
                        "cost": {
                            "input": 3,
                            "output": 15,
                            "cacheRead": 0.3,
                            "cacheWrite": 3.75
                        },
                        "contextWindow": 200000,
                        "maxTokens": 64000
                    },
                    {
                        "id": "claude-sonnet-5",
                        "name": "claude-sonnet-5",
                        "reasoning": true,
                        "input": [
                            "text"
                        ],
                        "cost": {
                            "input": 3,
                            "output": 15,
                            "cacheRead": 0.3,
                            "cacheWrite": 3.75
                        },
                        "contextWindow": 200000,
                        "maxTokens": 64000
                    },
                    {
                        "id": "claude-opus-5",
                        "name": "claude-opus-5",
                        "reasoning": true,
                        "input": [
                            "text"
                        ],
                        "cost": {
                            "input": 5,
                            "output": 25,
                            "cacheRead": 0.5,
                            "cacheWrite": 6.25
                        },
                        "contextWindow": 200000,
                        "maxTokens": 128000
                    }
                ]
            }
        }
    }
}
```

> 说明：`cost` 各字段为模型单价，与模型广场一致，仅用于本地用量估算，不影响实际扣费。`reasoning` 控制是否启用扩展思考，Haiku 4.5 不支持，其余模型建议置为 `true`。
>
>

## 保存配置

保存文件并退出，然后运行以下命令来使配置生效：

```bash
openclaw gateway restart
```
