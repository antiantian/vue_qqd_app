<template>
	<div>
	   <header-div message="投资管理" path="/helpCenter" headPhone="true"></header-div>
	   <div class="fixTop">
          <ul class="FaqList">
			 <li>
			    <router-link to="ciOpenAccount">
					<p>开户</p>
			    </router-link>
			 </li>
			  <li>
				  <router-link to="ciTieCard">
					  <p>绑卡</p>
				  </router-link>
			  </li>
			  <li>
				  <router-link to="ciInvest">
					  <p>投资</p>
				  </router-link>
			  </li>
			  <li>
				  <router-link to="ciSure">
					  <p>保票通</p>
				  </router-link>
			  </li>
			  <li>
				  <router-link to="ciNoun">
					  <p>名词解释</p>
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