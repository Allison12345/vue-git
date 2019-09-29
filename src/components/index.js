import Icon from './icon'
import TabBar from './tab-bar'
import Page from './page'

const components = [Icon, TabBar, Page]

const install = Vue => {
  if (install.installed) return
  install.installed = true
  components.map(component => Vue.component(component.name, component))
}

export default {
  install
}
