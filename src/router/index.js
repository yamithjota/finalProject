import { createRouter, createWebHistory } from '@ionic/vue-router';

import Login from '../pages/Login.vue';
import UsersList from '../pages/UsersList.vue';
import TaskList from '../pages/TaskList.vue';
import TaskForm from '../pages/TaskForm.vue';

const routes = [
  
  {
    path: '/',
    component: Login
  },
  {
    path: '/userslist',
    component: UsersList,
    name:'userslist'
  },
  {
    path: '/tasklist/:id',
    component: TaskList,
    name:'tasklist'
  },
  {
    path: '/create-task',
    component: TaskForm,
    name:'taskform'
  },
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
