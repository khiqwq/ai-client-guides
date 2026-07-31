import DefaultTheme from 'vitepress/theme'
import type { Theme } from 'vitepress'
import Layout from './Layout.vue'
import ToolGrid from './ToolGrid.vue'
import HomeHelp from './HomeHelp.vue'
import EndpointCopy from './EndpointCopy.vue'
import HomeLanding from './HomeLanding.vue'
import { installUiEnhancements } from './ui-enhancements'
import './custom.css'

export default {
  extends: DefaultTheme,
  Layout,
  enhanceApp({ app }) {
    installUiEnhancements()
    app.component('ToolGrid', ToolGrid)
    app.component('HomeHelp', HomeHelp)
    app.component('EndpointCopy', EndpointCopy)
    app.component('HomeLanding', HomeLanding)
  }
} satisfies Theme
