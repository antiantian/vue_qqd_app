<template>
    <div>
       <header-div message="解绑手机号" path="/userAccount/perfectinfo"></header-div>
       <div class="fixTop">
	  	<input type="hidden" id="customerAccount" value="13611919490" />
		 <div class="registerTable zregisterTable" style="padding-top:2em;">
	          <ul class="registerList zregisterList">
					  <li>
						<i class="iconfont gray txt">&#xe616;</i>
						<input type="text" class="textArea box_S" placeholder="请输入注册手机号" id="customerPhone" onblur="checkCustomerPhone();" maxlength="11" />
					  </li>
					  <li class="zcode box_S" id="imgCode">
					  	<div class="inner">
					  		<i class="iconfont gray txt">&#xe61f;</i>
							<input type="text" class="textArea box_S" placeholder="请输入图形验证码" onblur="authCodeInputDemo();" id="authCodeInput" name="authCodeInput" maxlength="4" />
					  	</div>
						<div class="code imgcode radius3 vertical" onclick="reloadVerifyCode();">
						  	<img class="img" id="image1" src="/static/images/z62y_03.png" />
						</div>
					  </li>
					  <li class="zcode box_S">
					  	<div class="inner">
					  		<i class="iconfont gray txt">&#xe634;</i>
							<input type="text" class="textArea box_S" id="checkSendCode" maxlength="6" placeholder="请输入验证码" />
					  	</div>
						<div id="getCode" dataOption="1" class="code messCode radius3">获取验证码</div>
					  </li>
			  </ul>
	          <div class="sureBtn">
	              <div class="errorTip bindTip"></div>
	              <a onclick="unbundingPhoneNext()" class="commonBtn radiushalf">下一步</a>
	          </div>

		  </div>
	   </div>
    </div>
</template>

<script type="ecmascript-6">
    import headerDiv from '../../../common/HeaderDiv'
    export default {
	      components:{
		       headerDiv 
		  }, 
		  data(){
		    return{

		    }
		  },
		  computed:{
		    store_admin:function(){
		       return this.$store.state.admin_id
		    },
		    DepositoryAccount:function(){
		       return this.$store.state.DepositoryAccount
		    },
		  },
		  mounted(){

		  },
		  method:{

		  }
	}
</script>

<style rel="stylesheet" scoped>
    
</style>