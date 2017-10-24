<template>
 <div>
    <header-div message="存管账户" goback="true"></header-div>
     <div class="fixTop">
	   <ul class="openAccount escrowAccountTwo znewSend">
	       <li><em></em><input type="text" placeholder="请输入原绑定银行预留手机号" id="phoneNumber" /></li>
	       <li style="position:relative">
	           <em></em>
		        <p class="cludeWrap">
		         <input type="text" placeholder="请输入短信验证码" id="inputNumber" /> 
		        </p>  
		        <input type="button" name="" value="发送" class="sendInfo" id="sendInfo" />
	        </li>
	   </ul>
	    <p class="alertContent"></p>
	   <div style="text-align: center;margin-top:12.5em" class="accountSubmit" @click="next">
	     <input type="hidden" id="usrCustId" value="6000060209746597" />
	     <input type="hidden" id="cardId" v-model="cardId" />
	     <input type="hidden" value="" id="smsSeq" />
	     <input type="button" value="下一步" id="nextStep" />
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
            cardId:'6217880800003955657',
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
		  next:function(){
		       this.$router.push({
			       path:"/shyh/escrowAccountThird",
			       query:{
			         oldSmsReq:'haYj097K',
			         oldSmsCode:'426568'
			       }
			    })
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

