import TaskListView from '@/views/TaskListView.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'tasks',
      component: TaskListView,
    },
    {
      path: '/add',
      name: 'add-task',
      component: () => import('@/views/AddTaskView.vue'),
    },
    {
      path: '/tasks/:id',
      name: 'TaskDetails',
      component: () => import('@/views/TaskDetails.vue'),
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component: () => import('../views/NotFoundView.vue'),
    },
  ],
})

export default router
