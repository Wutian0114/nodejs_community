// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

//引入mint-ui
import MintUi from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(MintUi)

//引入moment.js
import moment from 'moment'
Vue.use(moment)
Vue.filter('moment',function(value){
  moment.locale('zh-cn');
  return moment(value).startOf("hour").fromNow();
})

//引入全局样式文件
import './assets/css/common.css'
import '../static/iconfont/iconfont.css'

//引入axios进行ajax数据请求，axios不支持Vue.use
import axios from 'axios'
Vue.prototype.$http = axios

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
