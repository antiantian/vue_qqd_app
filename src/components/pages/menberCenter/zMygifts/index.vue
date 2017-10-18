<template>
   <div>
       <header-div message="我的奖品" path="/menberCenter"></header-div>
       <input id="customerAppToken" type="hidden" value="" />
	   <input id="resource" type="hidden" value="" />
       <div class="mapContent">
		     <div class="map_container" id="mapContainer"></div>
		     <div id="wrapper" ref="wrapper">
		     	<div id="scroller">
		     	<div id="pullDown" ref="pullDown">
		                <span class="pullDownIcon"></span><span class="pullDownLabel">下拉刷新</span>
		            </div>
					  <div class="fixTop">
					      <ul class="couponList" id="like-list">
							  <!-- <li>
								  <div class="listTop clearfix">
									  <div class="couponLeft fl">
										  <p>￥<i>10</i></p>
										  <span>多多金</span>
									  </div>
									  <div class="couponRight box_S fr">
										  <p><span>使用条件：</span>单笔投资满1000元，标的期限至少180天</p>
										  <p><span>中奖时间：</span>2016.12.08</p>
										  <p><span>有效时间：</span>2016.07.12至2016.08.11</p>
									  </div>
								  </div>
							  </li> -->
							  <li v-for="value in datalist" :class="{'used':value.use==1,'limit':value.use==2}">
							      <div class="listTop clearfix">
							        <div class="couponLeft fl" v-if="value.type==='ddj'">
							          <p>￥<i>{{value.mount}}</i></p>
							          <span>多多金</span>
							        </div>
							        <div class="couponLeft fl" v-if="value.type==='jxj'">
							          <p><i>{{value.mount}}</i>%</p>
							          <span>加息券</span>
							        </div>							        
							        <div class="couponRight box_S fr">
							          <div class="title" v-if="value.type==='ddj'">{{value.mount}}元多多金</div>
							          <div class="title" v-if="value.type==='jxj'">{{value.mount}}%加息券</div>
							          <p v-if="value.indition"><span>使用条件：</span>投资满{{value.indition}}元</p>
							          <p><span>兑换时间：</span>{{value.changeTime}}</p>
							          <p><span>有效时间：</span>{{value.changeTime}}至{{value.dateTime}}</p>
							         </div>
							      </div>
							  </li>
						  </ul>
						  <div id="pullUp"  ref="pullUp">
			           		<span class="pullUpIcon"></span><span class="pullUpLabel">上拉加载更多...</span>
			       		</div>
		  			</div>  
		 		 </div>
		     </div>
		</div> 
   </div> 
</template>

<script type="ecmascript-6">
   import apis from  '../../../../api'
   import store from '../../../../store'
   import headerDiv from '../../../common/HeaderDiv'
   import '../../../../assets/zwards'
   import {loaded,loadData} from  './pulllist'
   export default {
     components:{
	      headerDiv 
	  }, 
	  data(){
	     return {
	       codePrize:null,
	       pageNum:1,
	       numPerPage:10,
	       order_date:'1',
	       order_type:'1',
           datalist:[],
           more:true
	     }
	  },
	  computed: {
		    store_admin:function(){
		       return store.state.admin_id
		    },
		    DepositoryAccount:function(){
		       return store.state.DepositoryAccount
		    },
      },  
	   created(){
	     this.loaded=loaded;
	     this.loadData=loadData;
	   },   
      mounted(){
         this.setTitle();
          this.$nextTick(function(){
              this.loaded();  //初始化 scroll
          })
      },
      destroyed(){
      },
      methods:{
          setTitle:function(){
             store.commit('TITLE','我的奖品');  
             this.$nextTick(function(){
                var self=this;
                $(function(){
                    self.loadData(true); //执行事件
                })
             })
          },          
      }
   }
</script>

<style rel="stylesheet" scoped>
   #wrapper {
	font-size: 1em;
	width: 100%;
	position: absolute;
	z-index: 1;
	top: 0px;
	left: 0;
	bottom: 0;
	overflow: auto;
	background: #ffffff;
}

#wrapper.nobottom {
	bottom: 0;
}
 
</style>