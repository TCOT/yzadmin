import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '@/layout'
import nestedRouter from "@/router/modules/nested";
Vue.use(VueRouter)
const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err);
}
const routes = [
  {
    path: '',
    redirect: '/nested',
  },
  nestedRouter,
  {
    path: '/404',
    component: () => import('@/views/error-page/404'),
    hidden: true
  },
  {path: '*', redirect: '/404', hidden: true}
]
const router = new VueRouter({
  routes,
  mode: 'history'
})
export default router
