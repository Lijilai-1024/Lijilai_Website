import ResumeView from '../views/ResumeView.vue'
import HomeView from '../views/HomeView.vue'
import DormSwitchView from '../views/DormSwitchView.vue'
import Game2048View from '../views/Game2048View.vue'
import TodoListView from '../views/TodoListView.vue'
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
  {
    path:'/DormSwitch',
    name:'交换机',
    component:DormSwitchView
  },
  {
    path:'/2048',
    name:'2048',
    component:Game2048View
  },
  {
    path: '/todo',
    name: 'todo',
    component: TodoListView
  }
]
export default routes