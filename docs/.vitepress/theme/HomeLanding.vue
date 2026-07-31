<script setup lang="ts">
import { withBase } from 'vitepress'
import ToolGrid from './ToolGrid.vue'
import EndpointCopy from './EndpointCopy.vue'
import HomeHelp from './HomeHelp.vue'

const tools = [
  { name: 'Claude Code', icon: 'claude-code.png', href: '/tools/claude-code' },
  { name: 'Codex', icon: 'codex.svg', href: '/tools/codex' },
  { name: 'CC Switch', icon: 'cc-switch.png', href: '/tools/cc-switch' },
  { name: 'Cursor', icon: 'cursor.svg', href: '/tools/cursor' },
  { name: 'Cherry Studio', icon: 'cherry-studio.png', href: '/tools/cherry-studio' },
  { name: 'Kilo Code', icon: 'kilo-code.svg', href: '/tools/kilo-code' },
  { name: 'OpenCode', icon: 'opencode.svg', href: '/tools/opencode' },
  { name: 'OpenClaw', icon: 'openclaw.svg', href: '/tools/openclaw' }
]
</script>

<template>
  <main class="cf-landing">
    <section class="cf-hero">
      <div class="cf-hero-glow"></div>
      <div class="cf-container cf-hero-grid">
        <div class="cf-hero-copy">
          <span class="cf-badge"><i></i> 支持 Claude Code / Codex 等 AI 编程工具</span>
          <h1>选好工具，<br /><em>几分钟完成接入</em></h1>
          <p>创建 CodeFlow API 令牌，把客户端接口地址替换为本站地址，然后按对应教程完成模型配置。</p>
          <div class="cf-actions">
            <a class="cf-button cf-button-primary" :href="withBase('/guide/quick-start')">第一次使用，从这里开始</a>
            <a class="cf-button cf-button-secondary" href="#software-guides">直接选择软件 <span>↓</span></a>
          </div>
          <ul class="cf-benefits">
            <li><span>✓</span> 无需修改项目代码</li>
            <li><span>✓</span> 每个软件独立教程</li>
            <li><span>✓</span> 配置完成即可验证</li>
          </ul>
        </div>

        <div class="cf-terminal" aria-label="CodeFlow API 配置示意">
          <div class="cf-terminal-top">
            <span></span><span></span><span></span>
            <small>codeflow — setup</small>
          </div>
          <div class="cf-terminal-body">
            <p><b>$</b> connect --provider codeflow</p>
            <div class="cf-config-line"><i></i><span>Base URL</span><code>https://codeflow.asia</code></div>
            <div class="cf-config-line"><i></i><span>API Token</span><code>sk-••••••••••••</code></div>
            <div class="cf-config-line"><i></i><span>Client</span><code>Claude Code</code></div>
            <div class="cf-terminal-divider"></div>
            <p class="cf-terminal-success"><b>✓</b> Configuration verified</p>
            <small>Ready. Start a new conversation to test the connection.</small>
          </div>
        </div>
      </div>
    </section>

    <section class="cf-tool-ribbon" aria-label="支持的软件">
      <div class="cf-container">
        <p>主流 AI 工具与客户端，找到对应教程直接配置</p>
        <div class="cf-tool-chips">
          <a v-for="tool in tools" :key="tool.name" :href="withBase(tool.href)">
            <img :src="withBase(`/tool-icons/${tool.icon}`)" alt="" />
            <span>{{ tool.name }}</span>
          </a>
        </div>
      </div>
    </section>

    <section class="cf-section" id="getting-started">
      <div class="cf-container">
        <header class="cf-section-heading">
          <span>接入流程</span>
          <h2>三步完成配置</h2>
          <p>第一次使用也不用通读整份文档，按顺序完成下面三步即可。</p>
        </header>
        <div class="cf-step-grid">
          <article>
            <div class="cf-step-number">01</div>
            <div class="cf-step-icon">⌁</div>
            <h3>创建 API 令牌</h3>
            <p>进入控制台令牌管理，为当前软件创建独立令牌并设置费用上限。</p>
            <a :href="withBase('/guide/quick-start')">查看准备步骤 →</a>
          </article>
          <article>
            <div class="cf-step-number">02</div>
            <div class="cf-step-icon">&lt;/&gt;</div>
            <h3>填写客户端配置</h3>
            <p>选择正在使用的软件，复制 Base URL、填入令牌并选择正确模型。</p>
            <a href="#software-guides">选择软件教程 →</a>
          </article>
          <article>
            <div class="cf-step-number">03</div>
            <div class="cf-step-icon">✓</div>
            <h3>发送请求验证</h3>
            <p>发送一条简单消息，并在使用日志中确认模型、Token 与费用记录。</p>
            <a :href="withBase('/guide/quick-start')">查看验证方法 →</a>
          </article>
        </div>
      </div>
    </section>

    <section class="cf-section cf-section-alt" id="software-guides">
      <div class="cf-container">
        <header class="cf-section-heading cf-heading-left">
          <span>软件教程</span>
          <h2>选择你正在使用的软件</h2>
          <p>每个软件都是独立教程，不需要从头阅读全部文档。</p>
        </header>
        <ToolGrid />
      </div>
    </section>

    <section class="cf-section">
      <div class="cf-container">
        <header class="cf-section-heading">
          <span>配置准备</span>
          <h2>开始前准备好地址与令牌</h2>
          <p>两条线路的账号、令牌和余额互通，可以根据网络情况随时切换。</p>
        </header>
        <div class="cf-setup-grid">
          <article class="cf-token-card">
            <div class="cf-card-label">API TOKEN</div>
            <code>sk-••••••••••••</code>
            <h3>每个软件单独创建一个令牌</h3>
            <p>按软件命名更容易核对用量，也能设置独立费用限制。令牌只在创建时完整显示一次。</p>
            <a :href="withBase('/guide/access#api-令牌')">查看令牌说明 →</a>
          </article>
          <article class="cf-url-card">
            <div class="cf-card-label">BASE URL</div>
            <EndpointCopy />
            <div class="cf-v1-warning"><b>/v1 规则：</b>Claude Code、Cherry Studio、OpenClaw 不带；Cursor、Kilo Code、OpenCode、Codex 需要带。</div>
          </article>
        </div>
      </div>
    </section>

    <section class="cf-section cf-section-alt">
      <div class="cf-container">
        <header class="cf-section-heading cf-heading-left">
          <span>常见问题</span>
          <h2>配置卡住时，先从这里排查</h2>
          <p>地址、令牌、分组或模型不匹配，是最常见的接入问题。</p>
        </header>
        <HomeHelp />
      </div>
    </section>

    <section class="cf-cta">
      <div class="cf-container cf-cta-inner">
        <div>
          <span>准备开始了吗？</span>
          <h2>找到你的软件，下一步直接照着配置</h2>
          <p>教程中的令牌均为占位符，请替换成控制台创建的真实令牌。</p>
        </div>
        <div class="cf-actions">
          <a class="cf-button cf-button-primary" :href="withBase('/tools/')">查看全部软件</a>
          <a class="cf-button cf-button-secondary" href="https://codeflow.asia/">打开 CodeFlow 官网 ↗</a>
        </div>
      </div>
    </section>
  </main>
</template>
