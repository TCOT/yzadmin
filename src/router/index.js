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
    redirect: '/form/basicForm',
  },
  {
    path: '/form',
    component: Layout,
    meta: {
      title: '表单',
      icon:'table'
    },
    children: [{
      path: 'basicForm',
      component: () => import('@/views/form/basicForm/index'),
      meta: { title: '基础表单' }
    },]
  },
  {
    path: '/table',
    component: Layout,
    meta: {
      title: '表格',
      icon:'table'
    },
    children: [{
      path: 'basicTable',
      component: () => import('@/views/table/basicTable/index'),
      meta: { title: '基础表格' }
    },]
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
