<template>
   <div>
   	  <header-div message="资金记录" path="/userAccount/accountCenter"></header-div>
   	  <div class="fixTop fixInvesttop">
	     <div class="fundTitle">
	         <p class="fl">类型／时间</p>
	         <p class="fr">金额／备注</p>
	     </div>
		 <div class="goldTip">

			 <div class="commonTab fundTab">
				 <div class="title">
	                 <p>提现成功<span>2016-08-25   12:30:40</span></p>
	                 <div class="rightCon">
	                     <i>-200</i>
	                     <a href="#">查看详情</a>
	                 </div>
	             </div>
				 <div class="detail">用户[15618322596]提现成功，到账金额为[20.00]元，提现金额为[20.00]元，提现手续费为[0.00]，具体到账时间以银行为准。</div>
			 </div>
	         <div class="commonTab fundTab">
	             <div class="title">
				       <p>提现申请<span>2016-08-25   12:30:40</span></p>
					   <div class="rightCon">
	                     <i>-200</i>
	                     <a href="#">查看详情</a>
	                  </div>
				 </div>
	             <div class="detail">尊敬的15021163927会员您已绑卡成功！</div>
	         </div>
	         <div class="commonTab fundTab">
	             <div class="title">
				       <p>收到回款<span>2016-08-25   12:30:40</span></p>
				       <div class="rightCon">
	                     <i>-200</i>
	                     <a href="#">查看详情</a>
	                   </div>
				  </div>
	             <div class="detail">尊敬的15021163927会员您已投标成功！</div>
	         </div>
	         <div class="commonTab fundTab">
	             <div class="title">
					   <p>待收增加<span>2016-08-25   12:30:40</span></p>
					   <div class="rightCon">
							 <i>-200</i>
							 <a href="#">查看详情</a>
					   </div>
				 </div>
	             <div class="detail">尊敬的15021163927会员您已投标成功！</div>
	         </div>
	         <div class="commonTab fundTab">
	             <div class="title">
					  <p>投标成功<span>2016-08-25   12:30:40</span></p>
					  <div class="rightCon">
							 <i>-200</i>
							 <a href="#">查看详情</a>
					  </div>
				 </div>
	             <div class="detail">尊敬的15021163927会员您已投标成功！</div>
	         </div>
	         <div class="commonTab fundTab">
	             <div class="title">
				        <p>投标冻结<span>2016-08-25   12:30:40</span></p>
						<div class="rightCon">
	                     <i>-200</i>
	                     <a href="#">查看详情</a>
	                    </div>
				 </div>
	             <div class="detail">尊敬的15021163927会员您已投标成功！</div>
	         </div>
	         <div class="commonTab fundTab">
	             <div class="title">
					 <p>充值成功<span>2016-08-25   12:30:40</span></p>
					 <div class="rightCon">
	                     <i>-200</i>
	                     <a href="#">查看详情</a>
	                 </div>
				 </div>
	             <div class="detail">尊敬的15021163927会员您已投标成功！</div>
	         </div>
		 </div>
	  </div>
   </div> 
</template>

<script type="ecmascript-6">
   import headerDiv from '../../../common/HeaderDiv'
   import '../../../../assets/zwards'
   export default {
     components:{
	      headerDiv 
	  }, 
	  data(){
	     return {
	       datalist:[]
	     }
	  },
	  computed: {
	        title_mess:function(){
	          return this.$store.state.title
	        },
		    store_admin:function(){
		       return this.$store.state.admin_id
		    },
		    DepositoryAccount:function(){
		       return this.$store.state.DepositoryAccount
		    },
      },     
      mounted(){
        this.dataHad(); 
      },
      destroyed(){

      },
      methods:{
          dataHad:function(){
             this.$store.commit('TITLE','投资管理2');  
             this.$nextTick(function(){
                 $(function(){
                  // allOad($(".fixTop"),3);
                   //$(".noCoupon").css({"paddingTop":"7.6em"})
                 })
             })
          },            
      }
   }  
</script>

<style rel="stylesheet" scoped>
    
</style>