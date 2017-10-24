<template>
   <div>
   	  <header-div message="我的邀请" path="/userAccount/accountCenter"></header-div>
      <div class="investContent fixTop invitionCtop">
	      <div class=" invesTitle invitationTitle  clearfix">
	         <div class="inner">
	            <input type="text" class="detailSea" placeholder="详情" />
	            <div class="listIocn righticon headicon">
	               
	               
	               <span class="txt">最近3个月</span>
	               <div class="sp1"></div>
	             </div>
	         </div>
	         <ul class="headlist joinList boxShadow radius3">
	           <li dataOption="0" class="on">全部</li>
	           <li dataOption="1">本月</li>
	           <li dataOption="2">最近3个月</li>
	         </ul>
	         <input type="hidden" id="headInput" />
	         <input type="hidden" id="dataOption" value="2" /> 
	      </div> 
	     <div class="invitationData clearfix">
	        <div class="col3">
	           <i class="iconfont orange">&#xe62b;</i>
	           <p>0积分</p>
	           <span class="block">我的奖励</span>
	        </div>
	        <div class="col3">
	           <i class="iconfont orange">&#xe6c9;</i>
	           <p>0人</p>
	           <span class="block">好友注册</span>
	        </div>
	        <div class="col3">
	           <i class="iconfont orange">&#xe632;</i>
	           <p>0位</p>
	           <span class="block">好友投资</span>
	        </div>
	     </div>
	     <div class="mapContent">
		     <div class="map_container" id="mapContainer"></div>
		     <div id="wrapper">
		     	<div id="scroller">
			     	<div id="pullDown" style="display: none;">
			            <span class="pullDownIcon"></span><span class="pullDownLabel">下拉刷新</span>
			        </div>           
				    <ul class="investList" id="like-list">
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
   import headerDiv from '../../../common/HeaderDiv'
   import '../../../../assets/zwards'
   export default {
     components:{
	      headerDiv 
	  }, 
	  data(){
	     return {
	       datalist:[]
	     }
	  },
	  computed: {
		    store_admin:function(){
		       return this.$store.state.admin_id
		    },
		    DepositoryAccount:function(){
		       return this.$store.state.DepositoryAccount
		    },
      },     
      mounted(){
        this.dataHad(); 
      },
      destroyed(){

      },
      methods:{
          dataHad:function(){
             this.$store.commit('TITLE','我的邀请');  
             this.$nextTick(function(){
                 $(function(){
                  // allOad($(".fixTop"),3);
                   //$(".noCoupon").css({"paddingTop":"7.6em"})
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
	top: 192px;
	left: 0;
	bottom: 0;
	overflow: auto;
	background: #ffffff;
}

#wrapper.nobottom {
	bottom: 0;
}

#scroller {
	position: relative;
	-webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}

#scroller ul {
	position: relative;
	padding-bottom: 0;
}
/* Pull down styles*/
#pullUp,#pullDown {
	width: 300px;
	margin: 0 auto;
	height: 40px;
	line-height: 40px;
	font-weight: bold;
	font-size: 24px;
	color: #888;
	z-index: -1;
	text-align: center;
	padding-bottom: 10px;
}

#pullUp .pullUpIcon,#pullDown .pullDownIcon {
	display: block;
	float: left;
	width: 40px;
	height: 40px;
	/* background: url(../../image/wechat/pull-icon@2x.png) 0 0 no-repeat; */
	-webkit-background-size: 40px 80px;
	background-size: 40px 80px;
	-webkit-transition-property: -webkit-transform;
	-webkit-transition-duration: 250ms;
}

#pullUp .pullUpIcon,#pullDown .pullDownIcon {
	-webkit-transform: rotate(-180deg) translateZ(0);
}

#pullUp.flip .pullUpIcon,#pullDown.flip .pullDownIcon {
	-webkit-transform: rotate(0deg) translateZ(0);
}

#pullUp.loading .pullUpIcon,#pullDown.loading .pullDownIcon {
	background-position: 0 100%;
	-webkit-transform: rotate(0deg) translateZ(0);
	-webkit-transition-duration: 0ms;
	-webkit-animation-name: loading;
	-webkit-animation-duration: 2s;
	-webkit-animation-iteration-count: infinite;
	-webkit-animation-timing-function: linear;
}

#pullUp.none .pullUpIcon,#pullDown.none .pullDownIcon {
	display: none;
}

.pullUpLabel,.pullDownLabel {
	padding-left: 3.125%;
	font-size:12px;
}
</style>