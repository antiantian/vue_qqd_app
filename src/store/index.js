import Vue from 'vue'
import Vuex from 'vuex'
const KEY = 'LOGIN_TOKEN';
Vue.use(Vuex)
const delCookie = (name) => {
    var exp = new Date();
    exp.setTime(exp.getTime() - 1000);
    document.cookie = name + "="+name+";path=/;expires="+exp.toGMTString();
}
const store = new Vuex.Store({
  state: {
    count: 0,
    message:null,
    messageclass:'',
    token:null,
    admin_id:null,
    title:'钱趣多',
    DepositoryAccount:true,//存管账户开通
  },
  mutations: {
    increment (state) {
      state.count++
    },
    message(state, n){
      state.message=n.text;
      state.messageclass=n.class;
    },
    LOGIN (state, data) {
    	state.token = data.token
    	state.admin_id = data.admin_id
    	localStorage.setItem(KEY, JSON.stringify(data))
            /*localStorage.setItem(KEY, JSON.stringify(data))  localStorage.LOGIN_TOKEN.admin_id
            var newStudents = JSON.parse(localStorage.getItem("LOGIN_TOKEN")).admin_id;
            newStudents = JSON.parse(students); //转为JSON
            state.token = data.token
            state.user.state= data.process && 4 <= data.process
            state.user.type = data.usertype
            state.user.uid = data.uid*/
    },
    LOGOUT (state) {
    	localStorage.removeItem(KEY)
    	state.token = null
    	state.admin_id = null
    	delCookie('SESSIONID')
            /*localStorage.removeItem(KEY)
            state.token = null
            state.user.state= true
            state.user.type = ''
            state.user.uid = ''
            delCookie('SESSIONID')*/
    },
    TITLE(state, data){
      state.title=data
    },
    DepositoryAccount(state, data){
      state.DepositoryAccount=data
    }
  },
  actions: {
  	 message ({ commit }, products) {
	      commit('message',products)
	      setTimeout(function(){
             commit('message',{
             	text:null,
                class:''
             })
	      },2500)
	  }
  }
})
export default store
