<template>
  <div>
      <header-div message="修改密码" path="/userAccount/accoutSet"></header-div>
      <div class="fixTop">
	     <input type="hidden" id="customerAccount" value="13611919490" />
	      <div class="zcPhone">
	         <p><i class="iconfont">&#xe629;</i><span>手机号码</span></p>
	         <i>1361****9490</i>
	      </div>
		  <div class="registerTable zregisterTable">
			<ul class="registerList zregisterList">
	           <li>
				<i class="iconfont gray txt">&#xe685;</i>
				<input type="password" class="textArea box_S" name="customerPassword" id="customerPassword" onblur="checkCustomerPassWord();" placeholder="请输原密码" />
			  </li>
			  <li class="zcode box_S">
	             <div class="inner">
	                <i class="iconfont gray txt">&#xe634;</i>
	                <input type="text" class="textArea box_S" id="checkSendCode" placeholder="请输入短信验证码" />
	             </div>
				<div id="getCode" dataOption="1" class="code radius3 messCode">发送</div>
			  </li>
			</ul>
			<div class="sureBtn">
	          <div class="errorTip bindTip">手机验证码不能为空</div>
			  <a onclick="setNewPwd()" class="commonBtn radiushalf">下一步</a>
			</div> 
		  </div>
	      
	  
		  <!-- <div class="mid_con">
		  	 <input type="hidden" id="customerAccount" value="" th:attr="value=${qcCustomer.customerAccount}" />
			  <ul class="bindList">
				  <li><input type="password" class="w100 box_S radius3"  name="customerPassword" id="customerPassword" onblur="checkCustomerPassWord();"  placeholder="请输入原密码" /></li>
				  <li><input type="text" id="" class="w100 box_S radius3 limitChange" readonly="readonly" value="手机号码 156*****3456" th:attr="value='手机号码'+${#strings.substring(qcCustomer.customerAccount,0,4) + '****' + #strings.substring(qcCustomer.customerAccount,#strings.length(qcCustomer.customerAccount)-4,#strings.length(qcCustomer.customerAccount))}"/></li>
				  <li><input type="text" class="w60 box_S radius3" id="checkSendCode"  placeholder="请输入短信验证码" />
				  <div class="w40 messCode  radius3" dataOption="1">获取短信验证码</div></li>
			  </ul>
			  <div class="sureBtn">
				  <div class="errorTip bindTip"></div>
				  <a onclick="setNewPwd()" class="commonBtn radiushalf">下一步</a>
			  </div>

		  </div> -->
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