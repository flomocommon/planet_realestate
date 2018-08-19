import Planets from '../views/planets'
import Dashboard from '../views/dashboard'

export const routes = [
  {
    view: 'planets',
    label: 'Planets',
    path: '/', 
    component: Planets,
    exact: true
  },
  {
    view: 'dashboard',
    label: 'dashboard',
    path: '/dashboard', 
    component: Dashboard,
    exact: true
  }
]
