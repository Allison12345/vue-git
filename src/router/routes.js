import RepoInfo from '@/pages/home/trending/repo/repo-info'
import UserInfo from '@/pages/home/trending/user/user-info'

import ViewCode from '@/pages/view-code'

import Issues from '@/pages/issues'

import Events from '@/pages/events'

import About from '@/pages/about'

import Contributors from '@/pages/contributors'

import Languages from '@/pages/languages'
import Search from '@/pages/search'

import Home from '@/pages/home'
import homeChildren from '@/pages/home/routes'

const routes = [
  {
    path: '/home',
    component: Home,
    children: homeChildren
  },
  {
    path: '/languages',
    component: Languages
  },
  {
    path: '/search',
    component: Search
  },
  {
    path: '/about',
    component: About
  },
  {
    path: '/events',
    component: Events
  },
  {
    path: '/issues',
    component: Issues
  },
  {
    path: '/contributors',
    component: Contributors
  },
  {
    path: '/repo-info',
    component: RepoInfo
  },
  {
    path: '/user-info',
    component: UserInfo
  },
  {
    path: '/view-code',
    component: ViewCode
  },
  {
    path: '*',
    redirect: '/home'
  }
]

export default routes
