import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeSection from '../views/HomeView.vue'
import NewFile from '../views/NewFile.vue'
import UpLoad from '../components/UpLoad.vue'
import SignName from '../components/SignName.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeSection
  },
  {
    path: '/NewFile',
    name: 'NewFile',
    component: NewFile,
    children: [
      {
        path: 'UpLoad',
        component: UpLoad
      },
      {
        path: 'SignName',
        component: SignName
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
