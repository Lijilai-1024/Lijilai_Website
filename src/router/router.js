import ResumeView from '../views/ResumeView.vue'
import HomeView from '../views/HomeView.vue'
const routes = [
  {
    path: '/',
    name: '主页',
    component: HomeView
  },
  {
    path: '/resume',
    name: '个人简历',
    // route level code-splitting
    // this generates a separate chunk (About.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: ResumeView
  },
]
export default routes