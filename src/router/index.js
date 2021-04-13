import Vue from 'vue';
import VueRouter from 'vue-router';
import Classify from '../components/Classify.vue';
import Artical from '../components/Artical.vue';

Vue.use(VueRouter)

const routes = [
  {
    path: '/homepage',
    redirect: '/artical/20210320154440',
  },
  {
    path: '/classify',
    component: Classify
  },
  {
    path: '/artical/:id',
    component: Artical
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
