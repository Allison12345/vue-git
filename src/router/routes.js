// import Languages from '@/pages/languages'
// import RepoDetail from '@/pages/repo-detail'
// import UserDetail from '@/pages/user-detail'
// import Search from '@/pages/search'
import RepoInfo from '@/pages/repo-info'

import Home from '@/pages/home'
import homeChildren from '@/pages/home/routes'

const routes = [
  {
    path: '/home',
    component: Home,
    children: homeChildren
  },
  {
    path: '/repo-info',
    component: RepoInfo
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
