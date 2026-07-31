<script setup lang="ts">
import { withBase } from 'vitepress'
import ToolIcon from './ToolIcon.vue'

const tools = [
  { name: 'Claude Code', icon: 'claude', tone: 'violet', href: '/tools/claude-code', desc: '命令行 AI 编程助手', protocol: 'Anthropic', suffix: '不带 /v1' },
  { name: 'Codex', icon: 'codex', tone: 'emerald', href: '/tools/codex', desc: 'CLI 与 Desktop 配置', protocol: 'OpenAI', suffix: '带 /v1' },
  { name: 'CC Switch', icon: 'switch', tone: 'blue', href: '/tools/cc-switch', desc: '快速切换 Claude 供应商', protocol: '导入配置', suffix: '一键启用' },
  { name: 'Cursor', icon: 'cursor', tone: 'slate', href: '/tools/cursor', desc: '编辑器自定义模型接入', protocol: 'OpenAI', suffix: '带 /v1' },
  { name: 'Cherry Studio', icon: 'cherry', tone: 'rose', href: '/tools/cherry-studio', desc: '桌面多模型客户端', protocol: 'Anthropic', suffix: '不带 /v1' },
  { name: 'Kilo Code', icon: 'kilo', tone: 'amber', href: '/tools/kilo-code', desc: 'VS Code 智能编程插件', protocol: 'OpenAI Compatible', suffix: '带 /v1' },
  { name: 'OpenCode', icon: 'opencode', tone: 'cyan', href: '/tools/opencode', desc: '终端原生编程助手', protocol: 'Anthropic', suffix: '带 /v1' },
  { name: 'OpenClaw', icon: 'openclaw', tone: 'orange', href: '/tools/openclaw', desc: '本地智能体与网关', protocol: 'Messages', suffix: '不带 /v1' }
]
</script>

<template>
  <div class="tool-grid">
    <a v-for="tool in tools" :key="tool.name" class="tool-card" :href="withBase(tool.href)">
      <span class="tool-mark" :class="`tone-${tool.tone}`"><ToolIcon :name="tool.icon" /></span>
      <span class="tool-copy">
        <strong>{{ tool.name }}</strong>
        <small>{{ tool.desc }}</small>
      </span>
      <span class="tool-meta">
        <span>{{ tool.protocol }}</span>
        <span>{{ tool.suffix }}</span>
      </span>
      <span class="tool-arrow" aria-hidden="true">→</span>
    </a>
  </div>
</template>
