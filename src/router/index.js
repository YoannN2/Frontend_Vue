import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home'
import interimaire from '@/views/interimaire'
import Form from '@/views/test/Form'
import Tabs from '@/views/test/Tabs'
import Calendrier from "@/views/Calendar"
import Skills from "@/views/test/Skills"
import CM from "@/views/contrat/mission"
import CMaD from "@/views/contrat/mise_a_disposition"

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
    path: '/test/tabs',
    name: 'Tabs',
    component: Tabs
  },
  {
    path: '/test/skills',
    name: "Skills",
    component: Skills
  },
  {
    path: "/calendrier",
    name: "calendrier",
    component: Calendrier
  },
  {
    path: '/contrat/mission',
    name: "ContratMission",
    component: CM
  },
  {
    path: "/contrat/mise_a_disposition",
    name: "ContratMaD",
    component: CMaD
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
