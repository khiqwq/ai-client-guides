import DefaultTheme from 'vitepress/theme'
import type { Theme } from 'vitepress'
import ToolGrid from './ToolGrid.vue'
import './custom.css'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component('ToolGrid', ToolGrid)
  }
} satisfies Theme
