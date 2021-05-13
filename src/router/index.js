import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import SignUp from '../views/Signup.vue'
import interimaire from '../views/interimaire.vue'
import Test from '../views/test.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path:'/SignUp',
    component:SignUp,
  },
  {
    path: '/interimaire',
    component:interimaire,
  },
  {
    path: '/test',
    name: 'Test',
    component: Test
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
