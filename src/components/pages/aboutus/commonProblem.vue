<template>
	<div>
	   <header-div message="常见问题" path="/helpCenter" headPhone="true"></header-div>
	   <div class="fixTop">
	          <ul class="FaqList">
				 <li>
				    <router-link to="cpregister">
						<p>注册认证</p>
				    </router-link>
				 </li>
				  <li>
					  <router-link to="cprecharge">
						  <p>充值</p>
					  </router-link>
				  </li>
				  <li>
					  <router-link to="cpwithdraw">
						  <p>提现</p>
					  </router-link>
				  </li>
	          </ul>
	  </div> 
	</div>  
</template>

<script type="ecmascript-6">
   import store from '../../../store'
   import headerDiv from '../../common/HeaderDiv'
   export default {
     components:{
	      headerDiv 
	  }
   }
</script>

<style rel="stylesheet" scoped>
    
</style>