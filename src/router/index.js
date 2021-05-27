import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'
import interimaire from '@/views/interimaire.vue'
import Form from '@/views/test/Form.vue'
import Calendrier from "@/views/Calendar.vue"
import Skills from "@/views/test/Skills.vue"
import SignUp from "@/views/SignUp"
import Tabs from '@/views/test/Tabs'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/interimaire',
    component:interimaire,
  },
  {
    path: '/test/form',
    name: 'Form',
    component: Form
  },
  {
    path: '/test/skills',
    name: "Skills",
    component: Skills
  },
  {
    path:"/test/Tabs",
    name:'Tabs',
    component:Tabs
  },
  {
    path: "/calendrier",
    name: "calendrier",
    component: Calendrier
  },
  {
    path:"/SignUp",
    name:"signUp",
    component:SignUp
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
