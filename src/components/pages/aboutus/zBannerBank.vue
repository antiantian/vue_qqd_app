<template>
<div>
  <header-div message="标的资产银行存管" path="/"></header-div>
   <div class="fixTop  bannerContent">
  	<img src="/static/activitys/zbank/zBank1.jpg">
  	<img src="/static/activitys/zbank/zBank2.jpg">
  	<img src="/static/activitys/zbank/zBank3.jpg">
  	<img src="/static/activitys/zbank/zBank4.jpg">
  	<img src="/static/activitys/zbank/zBank5.jpg">
  	<img src="/static/activitys/zbank/zBank6.jpg">
  	<img src="/static/activitys/zbank/zBank7.jpg">
  </div>
</div>  
</template>
<script>
   import store from '../../../store'
   import headerDiv from '../../common/HeaderDiv'
   export default {
     components:{
	      headerDiv 
	  },
      computed: {
	        titles () {
	          return store.state.title
	        },
	  },      
      mounted(){
         this.setTitle();
      },
      destroyed(){
          //组件移除事件
          
      },
      methods:{
          setTitle:function(){
             store.commit('TITLE','标的资产银行存管');
             this.$nextTick(function(){
                       
             })  
          },          
      }
   }
</script>
<style scoped>
		
	</style>