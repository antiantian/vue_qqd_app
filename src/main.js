// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Qs from 'qs'
import axios from 'axios'
import store from './store'
import "babel-polyfill"
import API from './api/API'
const api = new API()
Vue.prototype.api = api;



// Vue.prototype.api = axios
Vue.config.productionTip = false
Vue.prototype.message=function(text){
	store.dispatch('message',{
		text:text,
		class:'icon-shibai2 alert'
	});
}
Vue.prototype.success=function(text){
	store.dispatch('message',{
		text:text,
		class:'icon-chenggong1 success'
	});
}
Vue.prototype.fail=function(text){
	store.dispatch('message',{
		text:text,
		class:'icon-shibai fail'
	});
}
Vue.prototype.setToken=function(text){
	store.dispatch('message',{
		text:text,
		class:'icon-shibai fail'
	});
}
/* eslint-disable no-new */
// new Vue({
//   el: '#app',
//   router,
//   template: '<App/>',
//   components: { App }
// })

new Vue({
	api,
    router,
    store,
    render: h => h(App),
}).$mount('#app');
