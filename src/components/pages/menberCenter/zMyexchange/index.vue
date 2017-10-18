<template>
    <div>
	      <header-div message="我的兑换" path="/menberCenter"></header-div>
	      <input id="customerAppToken" type="hidden" value="" />
		  <input id="resource" type="hidden" value="" />
		  <div class="mapContent">
		     <input type="hidden" id="subject" value="${subject }" />
		  	 <input type="hidden" id="activityIdSel" value="" />
		  	 <input type="hidden" id="pathStatic" value="${path }" />
		     <div class="map_container" id="mapContainer"></div>
		     <div id="wrapper">
		     	<div id="scroller">
		     	<div id="pullDown" style="display: none;">
		                <span class="pullDownIcon"></span><span class="pullDownLabel">下拉刷新</span>
		            </div>
					  <div class="fixTop">
					      <ul class="couponList" id="like-list">
						  </ul>
						  <div id="pullUp" style="display: none;">
		          				<span class="pullUpIcon"></span><span class="pullUpLabel">上拉加载更多...</span>
		       			  </div>
					  </div> 
					</div>
		      </div>
		  </div> 	
    </div> 
</template>

<script type="ecmascript-6">
    import store from '../../../../store'
   import headerDiv from '../../../common/HeaderDiv'
   import '../../../../assets/zwards'
   export default {
     components:{
	      headerDiv 
	  }, 
	  computed: {
		    store_admin:function(){
		       return store.state.admin_id
		    },
		    DepositoryAccount:function(){
		       return store.state.DepositoryAccount
		    },
      },     
      mounted(){
         this.setTitle();

      },
      destroyed(){
      },
      methods:{
          setTitle:function(){
             store.commit('TITLE','我的兑换');  
             this.$nextTick(function(){
                $(function(){
                    allOad($(".couponList"),4) //暂无兑换记录*/
                })
             })
          },          
      }
   }
</script>
<style rel="stylesheet" scoped>
    
</style>