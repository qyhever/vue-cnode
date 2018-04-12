// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/store'

Vue.config.productionTip = false

import '@/assets/css/reset.css'
import 'github-markdown-css'
import '../static/font-awesome-4.7.0/css/font-awesome.css'
import * as filters from './kits/filter'

Object.keys(filters).forEach(k => Vue.filter(k, filters[k]))

import 'mint-ui/lib/style.css'
import { Cell, Field } from 'mint-ui'

Vue.component(Cell.name, Cell)
Vue.component(Field.name, Field)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
