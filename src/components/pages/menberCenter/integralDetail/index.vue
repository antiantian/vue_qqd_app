<template>
   <div>
      <header-div message="积分明细" path="/menberCenter"></header-div>
      <input id="customerAppToken" type="hidden" value="" />
	  <input id="resource" type="hidden" value="" />
	    <div class="investContent fixTop">
	      <div class="interTop">
	         <div class="inner clearfix">
	            <div class="all box">
	                <img src="/static/images/zScore2.png" />
	                <p>3389.00</p>
	                <span>积分总计</span>
	            </div>
	            <div class="had box">
	               <img src="/static/images/zScore1.png" />
	               <p>3349.00</p>
	               <span>可使用积分</span>
	            </div>
	         </div>
	      </div>
	      <div class="clearfix interCon">
	        <div class="integralTop halfBox box_S clearfix">
	         <div class="inner box_S">
	            <div class="search">
	           	  <input type="text" readonly="readonly" class="txt detailSea box_S radius3" placeholder="全部" />
	            </div>
	             <div class="sp1"></div>
	            <div class="listIocn righticon headicon">日期:</div>
	            <ul class="headlist joinList boxShadow radius3" tip="headInput1">
	               <li dataOption="0" class="on">全部</li>
	               <li dataOption="1">本月</li>
	               <li dataOption="2">最近3个月</li>
	             </ul>
	         </div>
	         <input type="hidden" id="headInput1" value="" /> 
	      </div> 
	                       
	      <div class="integralTop  halfBox  box_S clearfix">
	         <div class="inner box_S">
	            <div class="search">
	              <input type="text" readonly="readonly" class="txt detailSea box_S radius3" placeholder="全部" /> 
	            </div>
	            <div class="sp1"></div>
	            <div class="listIocn righticon headicon">方式:</div>
	            <ul class="headlist joinList boxShadow radius3" tip="headInput2">
	                <li dataOption="0" class="on">全部</li>
	                <li dataOption="1">个人投资</li>
	                <li dataOption="2">邀请好友</li>
	                <li dataOption="5">个人注册</li>
	                <li dataOption="6">开通存管</li>
	                <li dataOption="7">完善信息</li>
	             </ul>
	         </div>
	         <input type="hidden" id="headInput2" value="" /> 
	      </div>
	      </div>
	     <div class="mapContent">
		     <div class="map_container" id="mapContainer"></div>
		     <div id="wrapper">
		     	<div id="scroller">
			     	<div id="pullDown" style="display: none;">
			             <span class="pullDownIcon"></span><span class="pullDownLabel">下拉刷新</span>
			       	</div>        
				     <ul class="investList intergraList" id="like-list"><li><div class=""></div><div class="investBlock clearfix"><div class="investBox investCash"><span>2017-1-26</span><p>日期</p></div><div class="investBox investCash"><span>赵春雨</span><p>用户名</p></div><div class="investBox investCash"><span>13611919490</span><p>手机号码</p></div><div class="investBox investCash"><span>20</span><p>积分</p></div><div class="investBox investCash"><span>完善信息</span><p>方式</p></div><div class="investBox investCash"><span>0</span><p>投资金额</p></div></div></li><li><div class=""></div><div class="investBlock clearfix"><div class="investBox investCash"><span>2017-7-14</span><p>日期</p></div><div class="investBox investCash"><span>赵春雨</span><p>用户名</p></div><div class="investBox investCash"><span>13611919490</span><p>手机号码</p></div><div class="investBox investCash"><span>20</span><p>积分</p></div><div class="investBox investCash"><span>开通存管</span><p>方式</p></div><div class="investBox investCash"><span>0</span><p>投资金额</p></div></div></li><li><div class=""></div><div class="investBlock clearfix"><div class="investBox investCash"><span>2017-10-13</span><p>日期</p></div><div class="investBox investCash"><span>赵春雨</span><p>用户名</p></div><div class="investBox investCash"><span>13611919490</span><p>手机号码</p></div><div class="investBox investCash"><span>3149</span><p>积分</p></div><div class="investBox investCash"><span>投资</span><p>方式</p></div><div class="investBox investCash"><span>50000</span><p>投资金额</p></div></div></li><li><div class=""></div><div class="investBlock clearfix"><div class="investBox investCash"><span>2017-10-13</span><p>日期</p></div><div class="investBox investCash"><span>赵春雨</span><p>用户名</p></div><div class="investBox investCash"><span>13611919490</span><p>手机号码</p></div><div class="investBox investCash"><span>200</span><p>积分</p></div><div class="investBox investCash"><span>任务</span><p>方式</p></div><div class="investBox investCash"><span>0</span><p>投资金额</p></div></div></li></ul>
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
   import {loaded,loadData,myScroll} from  '../../../../assets/pulllist'
   export default {
     components:{
	      headerDiv 
	  }, 
	  data(){
	     return {
	       codePrize:null
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
      mounted(){
         this.setTitle();
      },
      destroyed(){
      },
      methods:{
          cashAPrizeBtn:function(){
             if(!this.codePrize){
               $.DialogByZ.Alert({Title: "提示", Content: "请输入兑换编码！",BtnL:"知道了"})
             }
             if(this.codePrize){
               $.DialogByZ.Alert({Title: "提示", Content: "奖品信息不存在！",BtnL:"知道了"})
             }
             
          },
          setTitle:function(){
             store.commit('TITLE','立即抽奖');  
             this.$nextTick(function() {
                $(function(){ 
 
                        //初始化绑定iScroll控件
                        loaded();
						// document.addEventListener('touchmove', function (e) { e.preventDefault(); }, false);
						 document.addEventListener('DOMContentLoaded', loaded, false);
                    
                             //areaDefined()
                            $(".rulesBtn").click(function(){
								 $(".rulesCon").addClass('allCon');
							})
							$(".closeRules").click(function(){
								 $(".rulesCon").removeClass('allCon');
							}) 
							loadData(1,myScroll);
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
	top: 235px;
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
	display: none;
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