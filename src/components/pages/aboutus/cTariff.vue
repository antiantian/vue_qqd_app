<template>
	<div>
	   <header-div message="资费管理" path="/find" headPhone="true"></header-div>
	   <div class="fixTop">
          <ul class="FaqList">
			 <li>
			    <router-link to="ctariffExplain">
					<p>资费说明</p>
			    </router-link>
			 </li>
			  <li>
				  <router-link to="ctDDXExplain">
					  <p>多多金说明</p>
				  </router-link>
			  </li>
			  <li>
				  <router-link to="ctJXQExplain">
					  <p>加息券说明</p>
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