import DefaultTheme from 'vitepress/theme'
import './custom.css'
import HtmlPreviewer from './HtmlPreviewer.vue'
import InstallGuide from './InstallGuide.vue'
import PaletteBuilder from './PaletteBuilder.vue'
import PalettePicker from './PalettePicker.vue'
import Palettes from './Palettes.vue'
import SizesPicker from './SizesPicker.vue'
import SizesBuilder from './SizesBuilder.vue'
import Sizes from './Sizes.vue'

export default {
  extends: DefaultTheme,
  enhanceApp({ app, router, siteData }) {
    app.component('HtmlPreviewer', HtmlPreviewer)
    app.component('InstallGuide', InstallGuide)
    app.component('PaletteBuilder', PaletteBuilder)
    app.component('PalettePicker', PalettePicker)
    app.component('Palettes', Palettes)
    app.component('SizesPicker', SizesPicker)
    app.component('SizesBuilder', SizesBuilder)
    app.component('Sizes', Sizes)
  }
}
