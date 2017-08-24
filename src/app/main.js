import Vue from 'vue'
import App from './App'
import router from '../router'
import store from '../store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'

Vue.use(ElementUI)

new Vue({
  el: '#app',
  router,
  data(){
    return {

    }
  },
  store,
  template: '<App/>',
  components: { App },
  created() {
    // console.log('this')
  },
  computed:{
  	computedMethod(){
  		return 'hhhh'
  	}
  },
  updated(){
  }
})
