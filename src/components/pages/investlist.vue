<template>
  <div>
    <header-div message="投资列表"></header-div>
    <div class="fixTop">
      <p>列表</p>
    </div>  
  </div>
</template>
<script>
    import store from '../../store'
    import headerDiv from '../common/HeaderDiv'
	export default {
	    components:{
	      headerDiv 
	    },
	    data(){
	      return{}
	    },
	   computed: {
		    store_admin:function(){
		       return store.state.admin_id
		    }
       },
	   methods:{

       } 
	}
</script>
<style scoped>

</style>