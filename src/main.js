// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false
// 注册组件
Vue.component('my-component', {
  template: '<div>A custom component!</div>'
})

// 局部注册

const Child = {
  template: '<div>A custom component!!!!!</div>'
}
/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: {
    App,
    'my-component': Child
  },
  template: '<App/>'
})
