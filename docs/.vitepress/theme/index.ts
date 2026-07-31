import DefaultTheme from 'vitepress/theme'
import type { Theme } from 'vitepress'
import ToolGrid from './ToolGrid.vue'
import HomeHelp from './HomeHelp.vue'
import EndpointCopy from './EndpointCopy.vue'
import './custom.css'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component('ToolGrid', ToolGrid)
    app.component('HomeHelp', HomeHelp)
    app.component('EndpointCopy', EndpointCopy)
  }
} satisfies Theme
