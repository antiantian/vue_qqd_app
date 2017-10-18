<template>
  <div>
    <header-div message="会员中心"></header-div>
     <div class="mapContent">
		<div class="map_container" id="mapContainer"></div>
		<div id="wrapper" ref="wrapper">
			<div id="scroller">
				<div id="pullDown" ref="pullDown">
					<span class="pullDownIcon" style="display: none;"></span><span class="pullDownLabel">下拉刷新</span>
				</div>
				<div class="middleContent fixTop  fixBottom">
					<div class="zMemeberTop">
						<div class="degree">
							<img src="/static/images/zMember2.png" />
							<p id="leveNumber">{{store_admin?degree:"?"}}</p>
						</div>
						<div class="ZmemberName">
							<div v-if="store_admin">
                                <p id="customerName">赵春雨</p>
								<p id="currentMember">当前积分：0</p>
								<p id="memberLeve">年化投资还差10000元就可以升级Q2，快去投资吧！</p>
							</div>
							<p class="go" v-else>您当前还未登录，<router-link to="/login">立即登录</router-link></p>
						</div>
					</div>
					<div class="zwardM W50 clearfix">
						<a @click="zLuckdraw" class="commonBtn radiushalf zwardMember">立即抽奖</a>
						<a href="/cashAPrize" class="commonBtn radiushalf zwardMember">兑换码兑换</a>
					</div>
					<ul class="zMemberMid clearfix">
						<li class="col3">
				         <a @click="toUpgradepacks"> 
				           <img class="imgIcon" src="/static/images/zM_06.png" />
				           <span>升级礼包</span>
				         </a>
				       </li>
				       <li class="col3">
				         <a @click="integralTask">
				           <i class="iconfont blue">&#xe66b;</i>
				           <span>积分任务</span>
				         </a>
				       </li>
				       <li class="col3">
				         <a @click="toIntegralDetail">
				           <i class="iconfont yellow">&#xe62e;</i>
				           <span>积分明细</span>
				         </a>
				       </li>
				       <li class="col3">
				         <a @click="zIntegralrule"> 
				           <i class="iconfont blue">&#xe65e;</i>
				           <span>积分规则</span>
				         </a>
				       </li>
				       <li class="col3">
				         <a @click="zMygifts">
				           <i class="iconfont orangered">&#xe62b;</i>
				           <span>我的奖品</span>
				         </a>
				       </li>
				       <li class="col3">
				         <a @click="zMyexchange">
				           <img class="imgIcon" src="/static/images/zM_07.png" />
				           <span>我的兑换</span>
				         </a>
				       </li>
					</ul>
					<div class="zMemberbottom">
						<!-- <div th:if="${not #strings.isEmpty(resource)}" >
							<a class="newGuideIndex" style="width: 12em;margin-left: -235px;right: 230px;" href="/valentineDay/api/exchangeList">
								<img style="width: 12em;margin-top: 25px;margin-left: -10px;" src="/static/h5/common/activity/images/activity.gif" />
							</a>
						</div> -->
						<img class="imgSM" src="/static/images/zMember3.png" />
						<div class="inner">
							<ul class="zMlist clearfix" id="like-list" ref="ullist">

							</ul>
							<div id="pullUp" ref="pullUp">
								<span class="pullUpIcon"></span><span class="pullUpLabel">上拉加载更多...</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		</div>
		<!--弹出层-->
		<div class="centerNologin zcenterNologin zMemberIog1" style="display: none;">
			<div class="vertical MemebetLogInner">
				<div class="conmess radius7">
					<p class="scorePaing">
						
					</p>
					<div class="btngroup clearfix">
						<input type="hidden" id="awardId" value="" />
						<input type="hidden" id="awardType" value="" />
						<span class="radiushalf sureZlog" onclick="sureZlog();">是</span> 
						<span class="radiushalf closeZlog" onclick="closeZlog();">否</span>
					</div>
					<img class="zZLOG2" src="/static/images/zZLOG2.png" />
				</div>
			</div>
		</div>
		<div class="centerNologin zcenterNologin zMemberIog2" style="display: none;">
			<input type="hidden" id="customerConsigneeId" />
			<div class="vertical MemebetLogInner">
				<div class="conmess radius7">
					<div style="padding: 0 5px">
						<table width="100%" cellpadding="0" cellspacing="0" border="0" class="box_S zMtable">
							<tr>
								<td align="right"><span class="spant">所在地区</span></td>
								<td>
									<div class="areaMc clearfix">
										<div class="m_zlxg box_S" id="shenfen">
											<p class="m_zlxgp" title="上海市" id="shenfen1">选择省份</p>
											<div class="m_zlxg2">
												<ul></ul>
											</div>
										</div>
										<div class="m_zlxg box_S" id="chengshi">
											<p class="m_zlxgp" title="">选择城市</p>
											<div class="m_zlxg2">
												<ul></ul>
											</div>
										</div>
										<div class="m_zlxg" id="quyu" style="display: none;">
											<p class="m_zlxgp" title="">选择区域</p>
											<div class="m_zlxg2">
												<ul></ul>
											</div>
										</div>
										<input id="sfdq_num" type="hidden" value="" /> <input id="csdq_num" type="hidden" value="" /> <input id="qydq_num" type="hidden" value="" /> <input id="sfdq_tj" type="hidden" value="北京市" /> <input id="csdq_tj" type="hidden" value="区" />
										<input id="qydq_tj" type="hidden" value="西城区" />
									</div>
								</td>
							</tr>
							<tr>
								<td align="right"><span class="spant">详细地址</span></td>
								<td><textarea id="prizeDetailAddress" placeholder="建议您如实填写详细收货地址，例如街道名称、门牌号码、楼层和房间号等信息" class="pnInput detailSite box_S"></textarea></td>
							</tr>
							<tr>
								<td align="right"><span class="spant">姓名</span></td>
								<td><input type="text" class="pnInput box_S" id="prizeCustomerName" placeholder="请输入姓名" /></td>
							</tr>
							<tr>
								<td align="right"><span class="spant">手机号码</span></td>
								<td><input type="text" class="pnInput box_S" id="customerPhone" placeholder="请输入手机号码" maxlength="11" /></td>
							</tr>
						</table>
					</div>
					<div class="btngroup clearfix">
						<span class="radiushalf sureZlog2" onclick="sureZlog2();">确定</span> <span class="radiushalf closeZlog2" onclick="closeZlog2();">取消</span>
					</div>
					<img class="zZLOG2" src="/static/images/zZLOG3.png" />
				</div>
			</div>
		</div>
		<div class="centerNologin zcenterNologin zMemberIog3" style="display:none;">
		 <div class="vertical MemebetLogInner"> 
	         <div class="conmess radius7">
	         <div class="closeMlog radiushalf"></div>
	             <div class="siteCon">
		             <div class="siteTitle">请选择收货地址：</div>
		             <div class="sitesGroup">
		               <input type="hidden" id="siteCheck" value="0" />
		               <!-- <div class="box on">
		                    <div class="top">
		                       <span class="name">兵兵</span>
		                       <i class="tel">13611919495</i>
		                    </div>
		                    <div class="site">河南省郑州市金水区工业路36号201室</div>
		                    <div class="bot clearfix">
		                       <span class="checkSite cur" dataId="0">默认地址</span>
		                       <span class="er del">删除</span>
		                       <span class="er edit">编辑</span>
		                    </div>
		               </div> -->
		             </div>
	             </div>
	             <div class="addNewSite orange" onclick="addNewSite()"><i class="iconfont orange">&#xe636;</i>添加新地址</div>
	             <div class="commonBtn sureSites radiushalf" onclick="determinePurchase()">确定</div>
	         </div>
	     </div>
	</div>
	<!---多多金使用规则-->
	  <div class="rulesCon" id="ruleDDJ">
		  <div class="closeRules"></div>
	    <h3>使用规则</h3>
	    <p>1、多多金为钱趣多平台现金红包，可在投标时使用；</p>
	    <p>2、多多金在项目到期回款之后自动返现至投资会员的上海银行存管账户；</p>
	    <p>3、自兑换之日起有效期为180天；</p>
	    <p>4、多多金不可以分拆使用，不能进行转让，不可叠加使用。</p>
	  </div>
	  <!---加息券使用规则-->
	  <div class="rulesCon" id="ruleJXJ">
		  <div class="closeRules"></div>
		  <h3>使用规则</h3>
	      <p>1、加息券一次只能使用一张，不可以和多多金同时使用；</p>
	      <p>2、自兑换之日起有效期为180天；</p>
	      <p>3、加息券仅限在钱趣多平台上使用。</p> 
	  </div>
  </div>
</template>
<script>
    import store from '../../store'
    import headerDiv from '../common/HeaderDiv'
    import {loaded,loadData,exchangePrizes} from  '../../assets/pulllist'
	export default {
	    components:{
	      headerDiv 
	    },
	    data(){
	    	return{
	    	  degree:'Q1',
	    	  isAjax:null,
	    	  nextPage:1,
	    	}
	    },
	   computed: {
		    store_admin:function(){
		       return store.state.admin_id
		    }
       },
       created(){
         this.loaded=loaded;
         this.loadData=loadData;
       },
       mounted(){
          this.init();
          this.$nextTick(function(){
              this.loaded();
          })
       },
	   methods:{
         init:function(){
           this.$nextTick(function(){
              
              var self=this;
               //弹出层最大高度限制
				  $(function(){
				    console.log(333333333333333333)
					  var sh=$(".zMemberIog3").find(".conmess").height();
					  var allH=$(window).height();
					  var alls=allH*0.8;
					  var innerH=alls-11.5*parseInt($(".zMemberIog3").css("font-size"));
					  $(".siteCon").css({"max-height":innerH+"px"})
				  })
               $(function(){
                        $(".zMemberbottom").on("click",".ddj",function(){
					       $("#ruleDDJ").addClass("allCon");
						})
						
						$(".zMemberbottom").on("click",".jxj",function(){
					       $("#ruleJXJ").addClass("allCon");
						})
						 
               })
                    // loaded();
					//$("#sjld").getArea("#shenfen", "#chengshi", "#quyu");
					 // 绑定iScroll控件
					self.loadData(self.exchangePrizes)
                       
                        
           })
         },
         exchangePrizes:function(id,score){
            alert(id+":"+score)
         },
         zLuckdraw:function(){
           this.goDel('/zLuckdraw')
         },
         toUpgradepacks:function(){
           this.goDel('/upgradepacks')
         },
         zIntegralrule:function(){
           this.goDel('/zIntegralrule')
         },
         integralTask:function(){
           this.goDel('/integralTask')
         },
         toIntegralDetail:function(){
           this.goDel('/integralDetail')
         },
         zMygifts:function(){
           this.goDel('/zMygifts')
         }, 
         zMyexchange:function(){
           this.goDel('/zMyexchange')
         },
         goDel:function(path){
            if(this.store_admin){
                this.$router.push({
	             path:path,
	           })
            }else{
               this.$router.push({
	             path:'/login'
	           })
            }
         }
       } 
	}
</script>
<style scoped>
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

