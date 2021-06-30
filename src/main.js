import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import mavonEditor from 'mavon-editor'
import SIdentify from './components/Identify'
import 'mavon-editor/dist/css/index.css'
import axios from 'axios'
import {
  Icon,
  Timeline,
  TimelineItem,
  Card,
  Divider
} from 'element-ui'

Vue.prototype.$axios = axios;
Vue.config.productionTip = false
Vue.use(SIdentify);
Vue.use(mavonEditor);
Vue.use(Icon);
Vue.use(Timeline);
Vue.use(TimelineItem);
Vue.use(Card);
Vue.use(Divider);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
