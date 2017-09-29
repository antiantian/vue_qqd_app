<template>
<div>
  <header-div message="资金三方存管" path="/"></header-div>
  <div class="fixTop  bannerContent">
  	<img src="/static/activitys/zthird/zThird1.jpg">
  	<img src="/static/activitys/zthird/zThird2.jpg">
  	<img src="/static/activitys/zthird/zThird3.jpg">
  	<img src="/static/activitys/zthird/zThird4.jpg">
  	<img src="/static/activitys/zthird/zThird5.jpg">
  	<img src="/static/activitys/zthird/zThird6.jpg">
  	<img src="/static/activitys/zthird/zThird7.jpg">
  	<img src="/static/activitys/zthird/zThird8.jpg">
  	<img src="/static/activitys/zthird/zThird9.jpg">
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
             store.commit('TITLE','资金三方存管');
             this.$nextTick(function(){
                       
             })  
          },          
      }
   }
</script>
<style scoped>
		
	</style>