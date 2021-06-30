import Vue from 'vue';
import VueRouter from 'vue-router';
import Classify from '../components/Classify.vue';
import Artical from '../components/Artical.vue';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
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

const VueRouterPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(to) {
  return VueRouterPush.call(this, to).catch(err => err)
}

export default router
