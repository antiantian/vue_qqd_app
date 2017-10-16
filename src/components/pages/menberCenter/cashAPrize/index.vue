<template>
   <div>
         <header-div message="兑换码兑换" path="/menberCenter"></header-div>
         <div class="fixTop">
			<div class="registerTable zregisterTable">
				<ul class="registerList zregisterList" style="margin-top: 20px;">
				  <li class="radius3">
					  <input type="text" id="cashAPrize" class="textArea box_S" v-model="codePrize" placeholder="请输入兑换码" onblur="checkCashAPrize();" />
				  </li>
				</ul>
			</div>
			<a class="commonBtn radiushalf" style="margin:1.5em auto" @click="cashAPrizeBtn">立即兑换</a>
			<div class="ruleCon">
			    <p class="action" style="color:#4c4c4c">兑换码兑换规则</p>
				<div class="smallTitle"><span class="radius50">1</span><p></p></div>
			    <div class="detail">
					<p>兑换码可兑换多多金和加息券，兑换码一个月内兑换有效；</p>
			    </div>
			    <div class="smallTitle"><span class="radius50">2</span><p></p></div>
			    <div class="detail">
					<p>兑换码兑换的多多金数额有：10元，20元，50元，100元，有效期均为30天；</p>
				</div>
				<div class="detail zcode">
				    <p>兑换的多多金使用条件：</p>
				    </div>
				    <div class="detail zcode">					
					<p>10元，  要求：投资满3000元</p>
					<p>20元，  要求：投资满6000元</p>
					<p>50元，  要求：投资满15000元</p>
					<p>100元，要求：投资满30000元</p>
				</div>
				<div class="smallTitle"><span class="radius50">3</span><p></p></div>
			    <div class="detail">
					<p>兑换码兑换的加息券有  0.3%，0.5%,0.8%,1% ，有效期均为30天 ；</p>
				</div>
			</div>
		</div>
   </div>   
</template>

<script type="ecmascript-6">
   import store from '../../../../store'
   import headerDiv from '../../../common/HeaderDiv'
   import '../../../../assets/zwards'
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
             this.$nextTick(function(){
                 
             })
          },          
      }
   } 
</script>

<style rel="stylesheet" scoped>
    
</style>