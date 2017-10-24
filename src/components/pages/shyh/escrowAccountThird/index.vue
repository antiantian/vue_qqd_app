<template>
 <div>
    <header-div message="存管账户" goback="true"></header-div>
    <div class="fixTop">
	   <ul class="openAccount escrowAccountTwo znewSend">
		   <li></li>
		   <li></li>
	       <li style="margin-top:-.7em;"><em></em>
	       	<a onclick="testOnclick()">
	       		<div id="bankName">请选择新绑定银行卡简称</div>
	       		<img alt="" src="/static/h5/common/images/rightOne.png" /></a></li>
	      <li>
	       <em></em>
	         <select name="" id="province">
	         <option value="">请选择省</option>
	       </select>
	         <select name="" style="float:right" id="city">
	         <option value="">请选择市</option>
	       </select>
	       </li>
	        <li><em></em><input type="text" placeholder="请输入新绑定银行卡号" id="bankCard" /></li>
	        <li><em></em><input type="text" placeholder="请输入新绑定银行预留手机号" id="phoneNumber" /></li>
	        <li style="position:relative">
	          <em></em>
		        <p class="cludeWrap">
		         <input type="text" placeholder="请输入短信验证码" id="inputNumber" /> 
		        </p>  
		        <input type="button" name="" value="发送" class="sendInfo" id="sendInfo" />
	        </li>
	   </ul>
	    <p class="alertContent"></p>
	   <div style="text-align: center;" class="accountSubmit">
	   	<input type="hidden" id="usrCustId" value="6000060209746597" />
	   	<input type="hidden" id="oldSmsSeq" value="l48BvmPE" />
	   	<input type="hidden" id="oldSmsCode" value="218623" />
	   	<input type="hidden" value="" id="smsSeq" />
	     <input type="button" value="确认" id="accompentSure" />
	   </div>
	 </div>
	 <div class="fixTop divAccountBank" style="display:none;width:100%;height:100%;    position:fixed;left:0px;top:0px;right:0px;    bottom:0px;background:#f1f1f1;z-index:200">
		<a onclick="hideAccountBank()" style="width:100%;background:#fa5527;position:" class="iconfont prePage">&#xe606;</a>
	   <ul class="accountBank" style="height: 93%; overflow-y: scroll; ">
	   </ul>
	</div>
</div>   
</template>
<script type="ecmascript-6">
   import headerDiv from '../../../common/HeaderDiv'
   export default {
     components:{
	      headerDiv 
	  }, 
	  computed: {
		    store_admin:function(){
		       return this.$store.state.admin_id
		    },
		    DepositoryAccount:function(){
		       return this.$store.state.DepositoryAccount
		    },
      },
      data(){
        return({

        })
      },      
      mounted(){
         this.setTitle();
      },
      destroyed(){
      },
      methods:{
          setTitle:function(){
             this.$store.commit('TITLE','存管账户');
              this.$nextTick(function() {
                       $(function(){ 
                            
						})

               })                   
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

