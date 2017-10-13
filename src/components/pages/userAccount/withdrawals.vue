<template>
  <div>
   <div  v-if="DepositoryAccount===false">
	<header-div message="存管账户" goback="true"></header-div>
    <div class="fixTop">
	  <div class="mid_con">
		  <div class="noAccounttip">您还没有开通资金存管账户</div>
		  <router-link class="commonBtn immediateInvest radiushalf" to="/shyh/openAccount">立即开通</router-link>
	  </div>
    </div>
  </div> 
  <div  v-if="DepositoryAccount===true">
     <header-div message="提现" goback="true" rulesBtn="true"></header-div>
     <div class="fixTop">
	  <div class="registerTable accoutDraw withCashNew">
	  	<div class="hasCash accountBalance">可提金额：<span class="edu">2800.00</span></div>
	  	<ul class="registerList chargeList newWiths">
			  <li>
				 <span class="txt iconfont gray">&#xe621;</span>
				 <input type="text" class="textArea box_S radius3" v-model="money" id="withMoney" placeholder="请输入提现金额（元）"/>
			  </li>
		</ul>  
       <div class="lessThree">
           <div class="errorTip accountBalance blackFont">手续费：￥2.00</div>
           <div class="errorTip cashChange blackFont">本月您还有<span>1</span>次免费提现,<i class="rulesBtn">了解更多</i></div>
       </div>
       <div class="moreThree">
         <ul class="clearfix WithdrawCost">
           <li class="cur"><span class="radius3">2.00元手续费</span></li>
           <li><span class="radius3">50积分</span></li>
         </ul>
         <p class="message">*您当月累计提现次数超过3次，需支付手续费2元，或者50积分抵扣</p>
       </div>
        <div class="sureBtn cashBTN">
           <a @click="userCenterTx" class="commonBtn radiushalf">确认提现</a>
        </div>
	  </div>
	</div>
<!--	<div class="bgfix"></div>-->
	 <div class="rulesCon">
		<div class="closeRules"></div>
		<h3>提现规则</h3>  
        <p>1、投资会员当日网银及快捷充值资金当日都不可提现，用户可提现余额=账户余额-当日网银及快捷充值金额。</p>
        <p>2、投资会员每月享有3次免费提现机会；超过3次由上海银行收取2元/笔提现手续费，实际到账金额=提现金额-提现手续费。超过3次也可用50积分抵扣手续费</p>
        <p>3、投资会员投资后即可使用提现功能。</p>
        <p>4、投资会员申请提现后，到账时间如下：</p>
        <table border="1" width="100%" align="center" class="ruletable withdrawTable">
		  <tbody><tr>
			  <th class="cash">提现金额</th>
			  <th>提现时间</th>
			  <th class="accountime">到账时间</th>
		  </tr>
		  <tr> 
			  <td>≤50000元</td>
			  <td>周一至周日全天</td>
			  <td>T+2个工作日</td>
		  </tr>
		  <tr>
			  <td>＞50000元</td>
			  <td>工作日每天18点以前</td>
			  <td>T+2个工作日</td>
		  </tr>
		  <tr>
			  <td>＞50000元</td>
			  <td>工作日每天18点后，周六、周日全天</td>
			  <td>T+2个工作日</td>
		  </tr>
	  </tbody></table>
        <p>5、禁止洗钱、信用卡套现、虚假交易等行为，一经发现并确认，将终止该账户的使用。</p>
	</div>
  </div> 
 </div>   
</template>

<script type="ecmascript-6">
   import store from '../../../store'
   import headerDiv from '../../common/HeaderDiv'
   import {DialogByZ} from '../../../assets/dialog';
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
      data(){
        return({
           money:null
        })
      },      
      mounted(){
        this.setTitle();
      },
      destroyed(){
      },
      methods:{
         setTitle:function(){
             store.commit('TITLE','提现');
              this.$nextTick(function() {
                       $(function(){ 
                             //areaDefined()
                             $(".rulesBtn").click(function(){
							 $(".rulesCon").addClass('allCon');
						})
						$(".closeRules").click(function(){
							 $(".rulesCon").removeClass('allCon');
						}) 
                       })
               })                   
         },
         userCenterTx:function(){
			var insertCzMoney =this.money;
			if(this.insertCzMoney()){
				if(changVal2 == 0){ // 网银充值
					window.open("/shyhApi/userRecharge?rechrgeAount="+insertCzMoney+"&rechargeType=0&rechrgeBankName="+bankName,'_self');
				}
				if(changVal2 == 1){ // 快捷充值
					window.open("/shyhApi/userRecharge?rechrgeAount="+insertCzMoney+"&rechargeType=1&rechrgeSmsSeq="+$("#smsSeq").val()+"&rechrgeSmsCode="+$("#inputNumber").val(),'_self');
				}
			}
         },
		insertCzMoney:function(){
			var insertCzMoney =this.money;
			var isActivate = this.isActivate;
			var changVal = this.picked;
			if(!insertCzMoney||insertCzMoney == ''){
				$.DialogByZ.Alert({Title: "提示", Content: "请输入充值金额!",BtnL:"知道了"})
				return false;
			}
			if(this.getFloatStr(Number(this.getFloatStr(insertCzMoney))) < 100){
				$.DialogByZ.Alert({Title: "提示", Content: "充值金额不能小于100!",BtnL:"知道了"})
				return false;
			}
			if(isActivate == null || isActivate == 2){
				$.DialogByZ.Confirm({Title: "提示", Content: "您的账号还未激活，是否激活！",BtnL:"是",BtnR:"否",FunL:function(){
					location.href = "/shyhApi/bosAcctActivate";
					},FunR:function(){
						location.href = "/userAccount/queryCz";
					}
				});
				return false;
			}
			if(changVal == 0){
                if(!this.dataindex){
                  $.DialogByZ.Alert({Title: "提示", Content: "请选择银行",BtnL:"知道了"})
                  return false;
                }
			}
			if(changVal == 1){
                if(!this.phonecode){
                  $.DialogByZ.Alert({Title: "提示", Content: "请输入验证码",BtnL:"知道了"})
                  return false;
                }
			}
			return true;
		},  
      }
    }  
</script>

<style rel="stylesheet" scoped>
    
</style>