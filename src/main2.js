// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Qs from 'qs'
import axios from 'axios'
import store from './store'
axios.defaults.baseURL = 'http://192.168.1.115:8083';
axios.defaults.transformRequest=[
		function(data) {
			//为了避免qs格式化时对内层对象的格式化先把内层的对象转为
			//data.strSQL = base64encode(data.strSQL);
			//由于使用的form-data传数据所以要格式化
			data = Qs.stringify(data);
			return data;
		}
	]
axios.defaults.transformResponse=[
		function(data) {
			let _data = new Object()
			if(typeof data=='string'){
				_data =JSON.parse(data)
			}else{
				_data = data
			}
			return _data;
		}
	];
Vue.prototype.$http = axios
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
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
