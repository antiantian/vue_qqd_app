<template>
  <div>
    <header-div message="账户中心"></header-div>
    <div class="centerNologin" v-show="!store_admin">
		  <div class="inner">
			  <img class="img" src="/static/images/zfix.png"/>
			  <div class="buttonGroup clearfix">
				  <router-link class="radiushalf box_S" to="/login">登录</router-link>
				  <router-link class="radiushalf box_S" to="/register">注册</router-link>
			  </div>
		  </div>
    </div>
    <div id="accountCon" class="middleContent fixTop fixBottom">
	    <div id="accountConInner">
			<div class="accoutMess clearfix">
				<div class="acleft fl">
					<div class="headImg box_S radius50 fl"><img src="/static/images/fish.png"/> </div>
					<span class="fl">{{store_admin}}</span>
				</div>
				<router-link to="messCenter"  class="acright fr">
					<img src="/static/images/zmail.png">
					<span class="radius50">12</span>
				</router-link>
			</div>
			<div class="accoutTop">
				<div class="accoutAll radius50">
					<div class="waveCircle"  >
						<div class="totalAssets">
							<span class="allM">8000.00</span>
							<p>总资产(元)</p>
						</div>
						<div class="waveMove" amout="100" nowData="100">
							<div class="bg  bg1"></div>
							<div class="bg bg2"></div>
							<div class="bg3"></div>
						</div>
					</div>
				</div>
				<div class="block Financialbalance">
					<p>0.00</p>
					<span>账户余额(元)</span>
				</div>
				<div class="block Frozenfunds">
					<p>0.00</p>
					<span>冻结资金(元)</span>
				</div>
				<div class="block tright Receiveprincipal">
					<p>0.00</p>
					<span>待收本金(元)</span>
				</div>
				<div class="block tright Expectedreturn">
					<p>0.00</p>
					<span>预期收益(元)</span>
				</div>
			</div>
			<div class="Accumulated">
				<div class="arrow"></div>
				<ul class="Accumulatedlist clearfix">
					<li class="fl">
						<p>500,000元</p>
						<span>累计投资金额</span>
					</li>
					<li class="fl">
						<p>500,000元</p>
						<span>累计收益金额</span>
					</li>
				</ul>

			</div>
	    </div>
	  	<div class="clearfix centerBtn">
			<router-link to="/userAccount/queryTx" class="withdrawals"><i>提现</i></router-link>
	  		<router-link to="/userAccount/queryCz" class="recharge box_S"><i>充值</i></router-link>
	  	</div>
		  <ul class="centerBlock clearfix">
	        <li class="noBorderR fl box_S">
				  <router-link to="investManageBiding">
					  <!--<span class="iconfont "></span>-->
					  <img src="/static/images/InvestM.png"/>
					  <p>投资管理</p>
				  </router-link>
			  </li>
			  <li class="fl box_S">
				  <router-link to="fundRecord">
					  <!--<span class="iconfont "></span>-->
					  <img src="/static/images/Record.png"/>
					  <p>投资记录</p>
				  </router-link>
			  </li>
			  <li class="fl  box_S">
				  <router-link to="/shyh/escrowAccount">
					  <!--<span class="iconfont "></span>-->
					  <img src="/static/images/Custodyaccount.png"/>
					  <p>托管账户</p>
				  </router-link>
			  </li>
	           <li class="fl noBorderR box_S">
				  <router-link to="centerJXJ">
					  <!--<span class="iconfont "></span>-->
					  <img src="/static/images/Jxj.png"/>
					  <p>加息券</p>
				  </router-link>
			  </li>
	         <li class="fl box_S">
				<router-link to="centerDDJ">
					<!--<span class="iconfont "></span>-->
					<img src="/static/images/Experiencegold.png"/>
					<p>多多金</p>
				</router-link>
	         </li>
			 <li class="fl  box_S">
				  <router-link to="calender">
					  <!--<span class="iconfont "></span>-->
					  <img src="/static/images/Clander.png"/>
					  <p>回款日历</p>
				  </router-link>
			  </li>
			  <li class="noBorderb noBorderR fl box_S">
				  <router-link to="/integralTask">
					  <img src="/static/images/Mtask.png"/>
					  <p>我的任务</p>
				  </router-link>
			  </li>
	          <li class="noBorderb fl box_S">
				  <router-link to="zScode">
					  <!--<span class="iconfont "></span>-->
					  <img src="/static/images/Cinvition_03.png" />
					  <p>我的邀请</p>
				  </router-link>
			  </li>
			  <li class="fl noBorderb  box_S">
				  <router-link to="accoutSet">
					  <!--<span class="iconfont "></span>-->
					  <img src="/static/images/AccoutSet.png"/>
					  <p>账户设置</p>
				  </router-link>
			  </li>
		  </ul>
		</div>
		<!--弹出层-->
		<div class="fixbg"></div>
		<div class="lawRules transitionM radius3">
			 <div class="closeRules closeLaw"></div>
			 <p>账户总资产 = 账户余额 + 预期收益 + 待收本金 + 冻结资金</p>
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
       mounted(){
          this.initCss();
       },
	   methods:{
          initCss:function(){
            this.$nextTick(function(){
                $(function(){
				  //总资产圆的大小
				  var w=0.4*$(".accoutTop").width();
				  $(".accoutAll").css({"width":w+"px","height":w+"px"})
				  //累计投资与收益金额 显示隐藏
				  $(".Accumulated").click(function(){
					  if($(this).hasClass("open")){
						  $(this).removeClass("open");
					  }else{
						  $(this).addClass("open");
					  }
				  })
		          //总资产数字展示
				  var allMoney=$(".totalAssets .allM").text();
				  var newa=allMoney.split(".");
				  if(newa.length>1){
				     $(".totalAssets .allM").html(newa[0]+"<span>."+newa[1]+"</span>")
				  }
			  })
			  $(function(){
				  $(".waveMove").each(function(){
					  var percent=0.2;
					  var txt=(percent*100);
					  txt=(txt==100)?100:txt.toFixed(2);
					  percent=percent<0.12?0.12:percent;

					  $(this).siblings(".txt").find("p").text(txt+"%");
					  var allHeight=parseInt($(this).parent(".waveCircle").height());
					  var newHeight=parseInt(allHeight*percent);
					  if(newHeight<12){
						  newHeight=12;
					  }
					  $(this).css({"height":newHeight+"px"})
					  /*$(this).find(".bg3").css({"height":newHeight+"px"})*/
				  })
			  })
            })
          }
       } 
	}
</script>
<style scoped>

</style>