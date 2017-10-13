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
	<header-div message="充值" goback="true" rulesBtn="true"></header-div>
    <div class="fixTop">
	  <div class="registerTable accoutDraw">
	  	<ul class="registerList chargeList">
			  <li>
				 <span class="txt">充值金额（元）：</span>
				 <input type="text" class="textArea box_S" id="insertCzMoney" @blur="insertCzMoney" placeholder="请输入充值金额" onkeyup="this.value=this.value.replace(/\D/g,'')" onafterpaste="this.value=this.value.replace(/\D/g,'')" 
                 v-model="money"
				 />
			  </li>
			</ul>
			
			<div class="recharqeContent">
               <div class="accountMoney">账户余额：<span>100.00元</span></div>
			   <div class="recharqeMethod">
					<form action="Recharge_submit" id="zchargeChange" method="get" accept-charset="utf-8">
						 <span><label for="internet"><input checked="checked" type="radio" value="0" name="aa" v-model="picked" id="internet" />网银充值</label></span>
						 <span class="twoContent"><label for="fastInput" class="twoContent"><input v-model="picked" type="radio" value="1" name="aa" id="fastInput" />快捷充值</label></span>
					</form>
					<input type="hidden" value="0" id="z_charge_val" />
			    </div>
              </div>
              <div style="height:10em">
                     <div class="eachBank openAccount" style="margin:1.667em 1.25em 1em 1.25em" v-show="this.picked=='0'"  @click="testOnclick">
		                <em></em>
		                <div id="bankName" v-if="dataname" style="color: rgb(196, 196, 196);">{{dataname}}</div>
		                <div id="bankName" v-else style="color: rgb(196, 196, 196);">请选择银行简称</div>
		                <a><img alt="" src="/static/h5/common/images/rightOne.png" /></a>
		              </div>
					  <div class="netBANK" v-show="this.picked=='1'">
		                <ul class="openAccount znewSend accountMoneyInfo" style="display:block;margin-bottom:1em">
			                <li><em></em><input type="text" disabled="disabled" placeholder="" id="phoneNumber" value="13611919490" /></li> 
			               </ul> 
			              <ul class="openAccount znewSend accountMoneyInfo" style="display:block;margin-bottom:1em">
			                <li style="position:relative;">
								<em class="mess"></em>
								<p class="cludeWrap">
								   <input type="hidden" disabled="disabled" placeholder="" id="usrCustId" value="6000060209746597" />
								   <input type="hidden" value="" id="smsSeq" />
								   <input type="text" v-model="phonecode" placeholder="请输入短信验证码" id="inputNumber" />
								</p>   
								<input type="button" name="" value="发送" class="sendInfo" id="sendInfo" />
								<input type="hidden" class="isActivate" id="isActivate" value="1" />
							</li>
						  </ul>
		             </div>
              </div>
			
	  </div>
	  <a @click="userCenterCz" class="commonBtn radiushalf">确认充值</a>
	</div>
	<div class="rulesCon">
		<div class="closeRules"></div>
		<h3>充值规则</h3>
		<div class="tip">
			*钱趣多wap端充值使用上海银行的快捷充值服务，充值前请仔细阅读以下的提示内容。
		</div>
		<p>1.快捷支付仅支持绑定一张银行卡，绑定后将默认为唯一提现卡。</p>	
		<p>2.为了确保您的资金安全，通过平台充值添加快捷卡后，之前绑定的取现卡不能再作为取现卡使用。一经绑定，其余银行卡自动解绑。</p>	
		<p>3.如需解绑快捷银行卡，请至汇付官网-P2P账户查询系统进行解绑。具体操作流程可登陆钱趣多电脑端的银行卡管理进行查看。</p>
	</div>
	 <div class="fixTop divAccountBank" v-show="showbanks" style="width:100%;height:100%;    position:fixed;left:0px;top:0px;right:0px;    bottom:0px;background:#f1f1f1;z-index:200">
		<a @click="hideAccountBank" style="width:100%;background:#fa5527;position:" class="iconfont prePage">&#xe606;</a>
   		<ul class="accountBank" style="height: 93%; overflow-y: scroll; ">
   		   <li v-for="(item,index) in banklist" :dataindex="dataindex" @click="banksel(item)">
                 <img :src="'/static/images/accountBank/icon'+(index+1)+'.png'" />
                 <input type='text'  value="item.bankCode" />
                 <span :class="{'on':dataindex==item.bankCode}">{{item.bankName}}</span>
   		   </li>
   		</ul>
	</div>
  </div> 
</div>   
</template>
<script type="ecmascript-6">
   import store from '../../../store'
   import headerDiv from '../../common/HeaderDiv'
   import areaDefined from './chargeJs/areaDefined'
   import accountBank from './chargeJs/accountBank'
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
           picked:'0',
           showbanks:false,
           banklist:accountBank,
           dataname:null,
           dataindex:null,
           isActivate:false,
           money:null,
           phonecode:null
        })
      },      
      mounted(){
         this.setTitle();
      },
      destroyed(){
      },
      methods:{
          setTitle:function(){
             store.commit('TITLE','新手指引');
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
         testOnclick:function(){
           this.showbanks=true;
         },
         hideAccountBank:function(){
           this.showbanks=false;
         },
         banksel:function(items){
            this.showbanks=false;
            this.dataname=items.bankName;
            this.dataindex=items.bankCode
         },
         userCenterCz:function(){
            var changVal2 = this.picked;
			var bankName = this.dataindex;
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
		getFloatStr:function(num){
			num += '';  
		    num = num.replace(/[^0-9|\.]/g, ''); //清除字符串中的非数字非.字符  
		    if(/^0+/) //清除字符串开头的0  
		        num = num.replace(/^0+/, '');  
		    if(!/\./.test(num)){
		    //为整数字符串在末尾添加.00  
		       num += '.00'; 
		    } 
		    if(/^\./.test(num)){
		    	//字符以.开头时,在开头添加0  
		        num = '0' + num;
		    }
		    num += '00';        //在字符串末尾补零  
		    num = num.match(/\d+\.\d{2}/)[0];  
		    return num;
		}
      }
   }
</script>

<style rel="stylesheet" scoped>  
     .accountBank li{
        background: #ffffff;
     }
     .accountBank li .on{
       color:#ff0000;
     }
</style>

