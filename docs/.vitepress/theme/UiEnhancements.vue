<script setup lang="ts">
import { onBeforeUnmount, onMounted } from 'vue'
import { withBase } from 'vitepress'

const groups = [
  {
    title: '开始使用',
    pages: [
      { name: '快速接入流程', desc: '注册、充值、令牌与验证', href: '/guide/quick-start', mark: '01' },
      { name: '接入前置', desc: 'Base URL、令牌与分组', href: '/guide/access', mark: '02' },
      { name: '模型与计费', desc: '模型选择、预扣和缓存', href: '/guide/models-and-billing', mark: '03' }
    ]
  },
  {
    title: '软件教程',
    pages: [
      { name: 'Claude Code', desc: '命令行 AI 编程助手', href: '/tools/claude-code', icon: 'claude-code.png' },
      { name: 'Codex', desc: 'CLI 与 Desktop', href: '/tools/codex', icon: 'codex.svg' },
      { name: 'CC Switch', desc: '供应商快速切换', href: '/tools/cc-switch', icon: 'cc-switch.png' },
      { name: 'Cursor', desc: '编辑器 API 配置', href: '/tools/cursor', icon: 'cursor.svg' },
      { name: 'Cherry Studio', desc: '桌面多模型客户端', href: '/tools/cherry-studio', icon: 'cherry-studio.png' },
      { name: 'Kilo Code', desc: 'VS Code 插件', href: '/tools/kilo-code', icon: 'kilo-code.svg' },
      { name: 'OpenCode', desc: '终端编程助手', href: '/tools/opencode', icon: 'opencode.svg' },
      { name: 'OpenClaw', desc: '本地智能体与网关', href: '/tools/openclaw', icon: 'openclaw.svg' }
    ]
  }
]

let observer: MutationObserver | undefined
let scheduled = false

function closeSearch(shell: Element) {
  const back = shell.querySelector<HTMLButtonElement>('.back-button')
  if (back) setTimeout(() => back.click(), 0)
}

function createPagePicker(shell: Element) {
  if (shell.querySelector('.search-page-picker')) return
  const form = shell.querySelector('.search-bar')
  const input = shell.querySelector<HTMLInputElement>('#localsearch-input')
  if (!form || !input) return

  input.placeholder = '搜索标题、配置项，或直接选择教程'
  const picker = document.createElement('div')
  picker.className = 'search-page-picker'

  const heading = document.createElement('div')
  heading.className = 'search-picker-heading'
  heading.innerHTML = '<strong>直接选择教程</strong><span>也可以在上方输入关键词搜索</span>'
  picker.appendChild(heading)

  for (const group of groups) {
    const section = document.createElement('section')
    section.className = 'search-picker-group'
    const title = document.createElement('p')
    title.textContent = group.title
    section.appendChild(title)
    const grid = document.createElement('div')
    grid.className = 'search-picker-grid'

    for (const page of group.pages) {
      const link = document.createElement('a')
      link.href = withBase(page.href)
      link.className = 'search-picker-link'
      const visual = page.icon
        ? `<img src="${withBase(`/tool-icons/${page.icon}`)}" alt="" />`
        : `<b>${page.mark}</b>`
      link.innerHTML = `<span class="search-picker-icon">${visual}</span><span><strong>${page.name}</strong><small>${page.desc}</small></span><i>→</i>`
      link.addEventListener('click', () => closeSearch(shell))
      grid.appendChild(link)
    }
    section.appendChild(grid)
    picker.appendChild(section)
  }

  form.insertAdjacentElement('afterend', picker)
  const update = () => {
    const hasQuery = input.value.trim().length > 0
    picker.hidden = hasQuery
  }
  input.addEventListener('input', update)
  update()
}

function enhanceOutline() {
  const title = document.querySelector<HTMLElement>('.VPDocAsideOutline .outline-title')
  if (!title || title.dataset.topEnhanced === 'true') return
  title.dataset.topEnhanced = 'true'
  title.textContent = ''
  const button = document.createElement('a')
  button.href = '#VPContent'
  button.className = 'outline-top-button'
  button.title = '返回本页顶部'
  button.setAttribute('aria-label', '返回本页顶部')
  button.innerHTML = '<span>本页目录</span><i>↑</i>'
  title.appendChild(button)
}

function enhance() {
  document.querySelectorAll('.VPLocalSearchBox .shell').forEach(createPagePicker)
  enhanceOutline()
}

function goToDocumentTop() {
  try { history.replaceState(null, '', location.pathname + location.search) } catch {}
  window.scrollTo(0, 0)
  document.documentElement.scrollTop = 0
  document.body.scrollTop = 0
}

function onDocumentClick(event: MouseEvent) {
  const target = event.target as HTMLElement | null
  if (!target?.closest?.('.outline-top-button')) return
  setTimeout(goToDocumentTop, 0)
}

function onSearchTrigger(event: MouseEvent) {
  const target = event.target as HTMLElement | null
  if (target?.closest?.('.DocSearch-Button')) setTimeout(enhance, 0)
}

function onSearchShortcut(event: KeyboardEvent) {
  if (event.key === '/' || (event.key.toLowerCase() === 'k' && (event.metaKey || event.ctrlKey))) {
    setTimeout(enhance, 0)
  }
}

function scheduleEnhance() {
  if (scheduled) return
  scheduled = true
  requestAnimationFrame(() => {
    scheduled = false
    enhance()
  })
}

onMounted(() => {
  try { localStorage.setItem('vitepress:local-search-detailed-list', 'true') } catch {}
  document.addEventListener('click', onDocumentClick)
  document.addEventListener('click', onSearchTrigger, true)
  window.addEventListener('keydown', onSearchShortcut)
  enhance()
  observer = new MutationObserver(scheduleEnhance)
  observer.observe(document.body, { childList: true, subtree: true })
})

onBeforeUnmount(() => {
  document.removeEventListener('click', onDocumentClick)
  document.removeEventListener('click', onSearchTrigger, true)
  window.removeEventListener('keydown', onSearchShortcut)
  observer?.disconnect()
})
</script>

<template><span class="ui-enhancements-anchor" aria-hidden="true"></span></template>




