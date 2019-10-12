// import Languages from '@/pages/languages'
// import RepoDetail from '@/pages/repo-detail'
// import UserDetail from '@/pages/user-detail'
// import Search from '@/pages/search'
import RepoInfo from '@/pages/home/trending/repo/repo-info'
import UserInfo from '@/pages/home/trending/user/user-info'

import ViewCode from '@/pages/view-code'

import Issues from '@/pages/issues'
import issuesChildren from '@/pages/issues/routes'

import Home from '@/pages/home'
import homeChildren from '@/pages/home/routes'

const routes = [
  {
    path: '/home',
    component: Home,
    children: homeChildren
  },
  {
    path: '/issues',
    component: Issues,
    children: issuesChildren
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
  // {
  //   path: '/languages',
  //   component: Languages
  // },
  // {
  //   path: '/repodetail',
  //   component: RepoDetail
  // },
  // {
  //   path: '/userdetail',
  //   component: UserDetail
  // },
  // {
  //   path: '/search',
  //   component: Search
  // },
  {
    path: '*',
    redirect: '/home'
  }
]

export default routes
