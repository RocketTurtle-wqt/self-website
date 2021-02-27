import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
import Write from "../views/Write.vue"
import Artical from "../views/Artical.vue"

Vue.use(VueRouter)

const routes = [
  {
    path: "/login",
    component: Login
  },
  {
    path: "/write",
    component: Write
  },
  {
    path: "/artical",
    component: Artical
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
