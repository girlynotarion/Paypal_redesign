import { createRouter, createWebHistory } from 'vue-router'
import Login from '../views/Login.vue'
import Dashboard from '../views/Dashboard.vue'
import SendMoney from '../views/SendMoney.vue'
import Settings from '../views/Settings.vue'
import RecentActivity from '../views/RecentActivity.vue'
import Register from '../views/Register.vue'
import SmartBudgeting from '../views/SmartBudgeting.vue'
import Verification from '../views/Verification.vue'
import Profile from '../views/Profile.vue'
import SplashScreen from '../views/SplashScreen.vue'
import RequestMoney from '../views/RequestMoney.vue'


const routes = [
  {
    path: '/',
    redirect: '/SplashScreen', // 👈 default route goes to login
  },
  {
    path: '/Login',
    name: 'Login',
    component: Login,
  },
  {
    path: '/Dashboard',
    name: 'Dashboard',
    component: Dashboard,
  },
  {
    path: '/SendMoney',
    name: 'SendMoney',
    component: SendMoney,
  },
  {
    path: '/RequestMoney',
    name: 'RequestMoney',
    component: RequestMoney,
  },
  {
    path: '/Settings',
    name: 'Settings',
    component: Settings,
  },
  {
    path: '/RecentActivity',
    name: 'RecentActivity',
    component: RecentActivity,
  },
  {
    path: '/Register',
    name: 'Register',
    component: Register,
  },
  {
    path: '/SmartBudgeting',
    name: 'SmartBudgeting',
    component: SmartBudgeting,
  },
  {
    path: '/Verification',
    name: 'Verification',
    component: Verification,
  },
  {
    path: '/Profile',
    name: 'Profile',
    component: Profile,
  },
  {
    path: '/SplashScreen',
    name: 'SplashScreen',
    component: SplashScreen,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
