import Icon from './icon'
import NavBar from './nav-bar'
import TabBar from './tab-bar'
import RepoItem from './repo-item'
import UserItem from './user-item'
import CodeLang from './code-lang'
import Page from './page'

const components = [Icon, TabBar, Page, NavBar, RepoItem, UserItem, CodeLang]

const install = Vue => {
  if (install.installed) return
  install.installed = true
  components.map(component => Vue.component(component.name, component))
}

export default {
  install
}
