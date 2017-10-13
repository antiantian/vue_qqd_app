<template>
<!-- :href是新页面 跳转连接  link是页面内切换 -->
<nav class="nav">
   <test myComponent="234"></test>
   <simple-counter></simple-counter>
   <simple-counter></simple-counter>
	<div :class="currentPath == '/index' ? 'homePage cur': 'homePage'">
	    <router-link to="/">
	        <i class="iconfont">&#xe604;</i>
	        <span>首页</span>
	    </router-link>
	</div>
	<div :class="currentPath == '/investlist' ? 'InvestMent cur': 'InvestMent'">
	    <router-link to="/investlist">
	        <i class="iconfont">&#xe600;</i>
	        <span>投资</span>
	    </router-link>
	</div>
	<div :class="currentPath == '/menberCenter' ? 'InvestMent cur': 'InvestMent'">
	    <router-link to="/menberCenter">
	        <i class="iconfont">&#xe62d;</i>
	        <span>会员中心</span>
	    </router-link></div>
	<div :class="currentPath == '/userAccount/accountCenter' ? 'Account cur': 'Account'">
	    <router-link to="/userAccount/accountCenter">
	        <i class="iconfont">&#xe605;</i>
	        <span>账户</span>
	    </router-link>
	</div>
</nav>
</template>
<script>
import Vue from 'vue'
Vue.component('simple-counter', {
  template: '<button v-on:click="counter += 1">{{ counter }}</button>',
  // 技术上 data 的确是一个函数了，因此 Vue 不会警告，
  // 但是我们返回给每个组件的实例却引用了同一个 data 对象
  data: function () {
	  return {
	    counter: 0
	  }
	}
})

	 export default{
	        name:'footer2',
	        components:{
		      test:{
		        props:["myComponent"],
		        template:'<p>{{myComponent}}</p>'
		       } 
		    },
	        data() {
		        return {
		            msg: 'Hello, vue router!',
		             currentPath: '',
				      firstName: 'Walter',
				      lastName: 'White',
				      alias: 'Heisenberg'

		        }
		    },
		    methods: {
		       fetchDate:function(){
		         let path=this.$route.path;
		        //  console.log(111+":"+path)
		         this.currentPath=path
		       },
		    },
		    created() {
		     // 组件创建完后获取数据，
		     // 此时 data 已经被 observed 了
		     this.fetchDate();
		    },
		    watch: {
		     // 如果路由有变化，会再次执行该方法
		     "$route": "fetchDate"
		    },
		    route: {
		        data: function(transition){
		          //  console.log(111)
		            transition.next({
		                currentPath: transition.to.path
		            })
		        }
		    }
	 }
</script>
<style scoped>

</style>