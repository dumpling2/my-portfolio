import { createRouter, createWebHistory } from 'vue-router'
import Home from './views/Home.vue'
import About from './views/About.vue'
import Portfolio from './views/Portfolio.vue'
import Skills from './views/Skills.vue'
import Contact from './views/Contact.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/About', component: About },
  { path: '/Portfolio', component: Portfolio },
  { path: '/Skills', component: Skills },
  { path: '/Contact', component: Contact }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
