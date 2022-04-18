import { createRouter, createWebHistory } from 'vue-router';
import HomePage from './views/HomePage';
import PersonalAccount from './views/PersonalAccount'

const routes = [
  {
    path: '/RandomBeer/',
    component: HomePage
  },
  {
    path: '/RandomBeer/main',
    component: PersonalAccount
  }
]

const router = createRouter({
  routes,
  history: createWebHistory()
})

export default router;