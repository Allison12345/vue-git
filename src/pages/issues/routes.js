import Open from './open'
import Closed from './closed'

const issuesChildre = [
  {
    path: 'open',
    component: Open
  },
  {
    path: 'closed',
    component: Closed
  },
  {
    path: '/issues',
    redirect: '/issues/open'
  }
]
export default issuesChildre
