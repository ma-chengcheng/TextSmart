import { createRouter, createWebHistory } from 'vue-router';
// import Header from '@/layout/Header.vue';
// const routes = [
//   { path: '/', name: 'analysis', children: [
//     {
//       path: '',
//       component: ()=>import('@/views/Analysis.vue'),
//     },
//   ], component: Header },
//   { path: '/tool', name: 'tool', children: [
//     {
//       path: '',
//       component: ()=>import('@/views/Analysis.vue'),
//     },
//   ], component: Header },
//   { path: '/*', name: '', component: ()=>import('@/views/Analysis.vue') },
// ]
const routes = [
  { path: '/', name: 'analysis',  component: ()=>import('@/views/Analysis.vue') },
  { path: '/tool', name: 'tool',  component: ()=>import('@/views/Tools.vue') },
  { path: '/*', name: '', component: ()=>import('@/views/Analysis.vue') },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router;