import { createRouter, createWebHistory } from 'vue-router'
import BeerListView from '../views/BeerListView.vue'
import BeerFormView from '../views/BeerFormView.vue'

const routes = [
  { path: '/', redirect: '/beers' },
  { 
    path: '/beers', 
    component: BeerListView,
    name: 'beer-list' 
  },
  { 
    path: '/add', 
    component: BeerFormView,
    name: 'add-beer' 
  },
  { 
    path: '/edit/:id', 
    component: BeerFormView,
    name: 'edit-beer',
    props: true
  },
  { path: '/:catchAll(.*)', redirect: '/beers' },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router