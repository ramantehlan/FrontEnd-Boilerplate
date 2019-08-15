import Vue from 'vue'
import Router from 'vue-router'

// Page content
import Home from '@/components/Home'

// Fallback page
import PageNotFound from '@/components/errorPages/404'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '**',
      name: 'PageNotFound',
      component: PageNotFound
    }
  ]
})
