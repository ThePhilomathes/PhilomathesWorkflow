import { createRouter, createWebHistory } from 'vue-router'
import routes from '@router/routes'

const router = createRouter({
  history: createWebHistory('/PhilomathesWorkflow/'),
  routes: routes,
})

router.beforeEach((to, from, next) => {
  // route does not exist
  if (to.matched.length === 0) {
    next({ name: 'NotFound' })
  } else {
    next()
  }
})

export default router
