import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes'

Vue.use(VueRouter)

const Router = new VueRouter({
  mode: 'history',
  base: __dirname,
  linkActiveClass: 'actived',
  scrollBehavior: () => ({ y: 0 }),
  routes: routes
})

Router.beforeEach((to, from, next) => {
  next()
})

Router.afterEach(route => {
  console.log('after route')
})

export default Router
