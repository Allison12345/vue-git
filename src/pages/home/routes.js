import Activity from './activity'
import Me from './me'

import Trending from './trending'
import trendingChildren from './trending/routes'

const homeChildren = [
  {
    path: 'trending',
    component: Trending,
    children: trendingChildren
  },
  {
    path: 'activity',
    component: Activity
  },
  {
    path: 'me',
    component: Me
  },
  {
    path: '/home',
    redirect: '/home/trending'
  },
  {
    path: '/home/*',
    redirect: '/home/trending'
  }
]
export default homeChildren
