<template>
  <div>
      <header-div message="修改密码" path="/userAccount/accoutSet"></header-div>
  </div>  
</template>

<script type="ecmascript-6">
    import headerDiv from '../../../common/HeaderDiv'
    export default {
	      components:{
		       headerDiv 
		  }, 
		  data(){
		    return{

		    }
		  },
		  computed:{
		    store_admin:function(){
		       return this.$store.state.admin_id
		    },
		    DepositoryAccount:function(){
		       return this.$store.state.DepositoryAccount
		    },
		  },
		  mounted(){

		  },
		  method:{

		  }
	}
</script>

<style rel="stylesheet" scoped>
    
</style>