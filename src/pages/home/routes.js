import Activity from './activity'
import Me from './me'

import Trending from './trending'
import trendingChildren from './trending/routes'

const homeChildren = [
  {
    path: 'activity',
    component: Activity
  },
  {
    path: 'me',
    component: Me
  },
  {
    path: 'trending',
    component: Trending,
    children: trendingChildren
  }
]
export default homeChildren
