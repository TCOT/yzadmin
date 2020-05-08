import Vue from 'vue'
import Cookies from 'js-cookie'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import '@/styles/index.scss' // global css
import '@/icons'
import '@/permission'
import store from './store'
import router from './router'
import i18n from './lang' // internationalization
import App from './App.vue'

Vue.use(ElementUI, {
  size: Cookies.get('size') || 'medium', // set element-ui default size
  i18n: (key, value) => i18n.t(key, value)
})

Vue.config.productionTip = false
Vue.use(ElementUI);
new Vue({
  render: h => h(App),
  router,
  store,
  i18n
}).$mount('#app')
