import DefaultTheme from 'vitepress/theme'
import './custom.css'
import Customizer from './Customizer.vue'
import HtmlPreviewer from './HtmlPreviewer.vue'
import ThemeBuilder from './ThemeBuilder.vue'
import InstallGuide from './InstallGuide.vue'
import PaletteBuilder from './PaletteBuilder.vue'

export default {
  extends: DefaultTheme,
  enhanceApp({ app, router, siteData }) {
    app.component('Customizer', Customizer)
    app.component('HtmlPreviewer', HtmlPreviewer)
    app.component('ThemeBuilder', ThemeBuilder)
    app.component('InstallGuide', InstallGuide)
    app.component('PaletteBuilder', PaletteBuilder)
  }
}
