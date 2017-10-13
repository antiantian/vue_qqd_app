<template>
   <div>
	  <header-div message="存管账户" goback="true"></header-div>
	  <div class="fixTop">
		  <div class="mid_con">
			  <div class="noAccounttip">您还没有开通资金存管账户</div>
			  <router-link class="commonBtn immediateInvest radiushalf" to="/shyh/openAccount">立即开通</router-link>
		  </div>
	  </div>
  </div>  
</template>

<script type="ecmascript-6">
	import store from '../../../store'
	import headerDiv from '../../common/HeaderDiv'
	export default {
		components:{
			headerDiv 
		},
		data(){
			return(
				{
				  phoneNumber:null,
				}
			)
		},
		methods:{

		}
	}
</script>

<style rel="stylesheet" scoped>
    
</style>