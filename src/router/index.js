import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Form',
    component: () => import('../views/form/index.vue'),
    meta: { title: '提交表单信息', keepAlive: true }
  },
  {
    path: '/contract',
    name: 'Contract',
    component: () => import('../views/contract/index.vue'),
    meta: { title: '电子合同', keepAlive: true }
  },
  {
    path: '/read',
    name: 'Read',
    component: () => import('../views/read/index.vue'),
    meta: { title: '用户须知', keepAlive: true }
  },
  {
    path: '/sign',
    name: 'Sign',
    component: () => import('../views/sign/index.vue'),
    meta: { title: '签名', keepAlive: true }
  }
]

const router = new VueRouter({
  routes,
  scrollBehavior: () => ({ y: 0 })
})

export default router
