import Repo from './repo'
import User from './user'

const trendingChildren = [
  {
    path: 'repo',
    component: Repo
  },
  {
    path: 'user',
    component: User
  },
  {
    path: '/home/trending',
    redirect: '/home/trending/repo'
  },
  {
    path: '/home/trending/*',
    redirect: '/home/trending/repo'
  }
]

export default trendingChildren
