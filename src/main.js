// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'normalize.css'
import Vue from 'vue'
import App from './App'
import router from './router'

import Shell from './common-comps/shell'
import Switch from './common-comps/switch'
import Checkbox from './common-comps/checkbox'

Vue.component('shell', Shell)
Vue.component('u-switch', Switch)
Vue.component('u-checkbox', Checkbox)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
})
