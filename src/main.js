import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import { BootstrapVue } from 'bootstrap-vue'

Vue.config.productionTip = false

new Vue({
  vuetify,
  BootstrapVue,
  render: h => h(App)
}).$mount('#app')



