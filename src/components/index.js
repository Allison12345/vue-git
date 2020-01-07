import Icon from './icon'
import SuccessToast from './success-toast'
import LoadingToast from './loading-toast'
import WordToast from './word-toast'
import MaskPage from './mask-page'
import NavBar from './nav-bar'
import TabBar from './tab-bar'
import RepoItem from './repo-item'
import Picker from './picker'
import UserItem from './user-item'
import CodeLang from './code-lang'
import AuthorPhoto from './author-photo'
import ActivityItem from './activity-item'
import ContributorItem from './contributor-item'
import Cell from './cell'
import Cells from './cells'
import ClickCell from './click-cell'
import WordCells from './word-cells'
import Page from './page'
import InfoItem from './info-item'
import MeInfoItem from './me-info-item'
import ViewCodeItem from './view-code-item'
import IssuesItem from './issues-item'
import ScrollerY from './scroller-y'
import LanguagesCells from './languages-cells'
import LanguagesCellsTop from './languages-cells__top'
import SearchBar from './search-bar'
import SearchContent from './search-content'

const components = [
  SearchBar,
  SearchContent,
  LanguagesCells,
  Icon,
  LoadingToast,
  SuccessToast,
  WordToast,
  MaskPage,
  TabBar,
  Page,
  NavBar,
  RepoItem,
  UserItem,
  AuthorPhoto,
  CodeLang,
  ActivityItem,
  Cell,
  Cells,
  ClickCell,
  WordCells,
  InfoItem,
  MeInfoItem,
  ViewCodeItem,
  IssuesItem,
  ScrollerY,
  ContributorItem,
  Picker,
  LanguagesCellsTop
]

const install = Vue => {
  if (install.installed) return
  install.installed = true
  components.map(component => Vue.component(component.name, component))
}

export default {
  install
}
