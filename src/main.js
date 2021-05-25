import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'


/* * * * * * * * * *
 *  Vue Material   *
 * * * * * * * * * */

// import VueMaterial from 'vue-material'
// import VueMaterialConfig from '@/configs/VueMaterialConfig'
// import 'vue-material/dist/vue-material.min.css'
// import 'vue-material/dist/theme/default.css'

// Vue.use(VueMaterial, VueMaterialConfig);


/* * * * * * * * * *
 *  Vue Formulate  *
 * * * * * * * * * */

import VueFormulate from '@braid/vue-formulate'
import VueFormulateConfig from '@/configs/VueFormulateConfig'
import myLabel from '@/components/formulate/slots/label'
import myInput from '@/components/formulate/input'
import myTextarea from '@/components/formulate/textarea'
import mySelect from '@/components/formulate/select'
import myRadio from '@/components/formulate/radio'
import myCKB from '@/components/formulate/checkbox'
import myFile from '@/components/formulate/file'
import myTel from '@/components/formulate/tel'
import myTag from '@/components/formulate/tag'


// Custom Slots
Vue.component('myLabel', myLabel)

// Custom Inputs
Vue.component('myInput', myInput)
Vue.component('myTextarea', myTextarea)
Vue.component('mySelect', mySelect)
Vue.component('myRadio', myRadio)
Vue.component('myCKB', myCKB)
Vue.component('myFile', myFile)
Vue.component('myTel',myTel)
Vue.component('myTag',myTag)


Vue.use(VueFormulate, VueFormulateConfig)


/* * * * * * * * * *
 *       Vue       *
 * * * * * * * * * */

Vue.config.productionTip = false;
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
