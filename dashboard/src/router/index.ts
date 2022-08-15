import { createRouter, createWebHistory } from 'vue-router';
const User = {
    template: '<div>User scsac</div>',
  }
const routes = [
  { path: '/', component: ()=>import('@/views/index.vue') },
// { path: '/', component: User },

]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router;