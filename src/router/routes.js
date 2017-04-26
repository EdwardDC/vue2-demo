const Hello = resolve => require(['@/views/Hello'], resolve)
const NotFound = resolve => require(['@/views/NotFound'], resolve)
const Signin = resolve => require(['@/views/Signin'], resolve)
const index = resolve => require(['@/views/index'], resolve)
const Routes = [
  {
    name: 'home',
    path: '/',
    component: Hello
  },
  {
    name: 'signin',
    path: '/signin',
    component: Signin
  },
  {
    name: 'index',
    path: '/index',
    component: index
  },
  {
    path: '*',
    component: NotFound
  }
]

export default Routes
