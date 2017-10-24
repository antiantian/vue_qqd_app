<template>
   <div>
   	  <header-div message="消息中心" path="/userAccount/accountCenter"></header-div>
      <div class="fixTop">
		 <div class="goldTip">
			 
			 <div class="commonTab messageTab ">
				 <div class="title"><p><span>充值成功</span>
				 				<span>2017-10-13</span></p></div>
				 <div class="detail">尊敬的 [13611919490] 会员您于 [2017-10-13 13:50:12]充值成功，充值金额是 [50000.00]元；</div>
			 </div>
		 </div>
		 <div class="goldTip">
			 
			 <div class="commonTab messageTab">
				 <div class="title"><p><span>充值成功</span>
				 				<span>2017-10-13</span></p></div>
				 <div class="detail">尊敬的 [13611919490] 会员您于 [2017-10-13 13:50:12]充值成功，充值金额是 [50000.00]元；</div>
			 </div>
		 </div>
		 <div class="goldTip">
			 
			 <div class="commonTab messageTab gray">
				 <div class="title"><p><span>充值成功</span>
				 				<span>2017-09-29</span></p></div>
				 <div class="detail">尊敬的 [13611919490] 会员您于 [2017-09-29 16:06:59]充值成功，充值金额是 [100.00]元；</div>
			 </div>
		 </div>
		 <div class="goldTip">
			 
			 <div class="commonTab messageTab gray">
				 <div class="title"><p><span>充值成功</span>
				 				<span>2017-09-29</span></p></div>
				 <div class="detail">尊敬的 [13611919490] 会员您于 [2017-09-29 16:06:59]充值成功，充值金额是 [100.00]元；</div>
			 </div>
		 </div>
		 <div class="goldTip">
			 
			 <div class="commonTab messageTab gray">
				 <div class="title"><p><span>充值成功</span>
				 				<span>2017-07-21</span></p></div>
				 <div class="detail">尊敬的 [13611919490] 会员您于 [2017-07-21 14:02:27]充值成功，充值金额是 [100.00]元；</div>
			 </div>
		 </div>
		 <div class="goldTip">
			 
			 <div class="commonTab messageTab gray">
				 <div class="title"><p><span>开户成功</span>
				 				<span>2017-07-14</span></p></div>
				 <div class="detail">尊敬的 [13611919490] 会员恭喜您于 [2017-07-14 09:46:21] 在钱趣多平台开户成功！</div>
			 </div>
		 </div>
		 <div class="goldTip">
			 
			 <div class="commonTab messageTab gray">
				 <div class="title"><p><span>恭喜你成为钱趣多会员</span>
				 				<span>2016-08-08</span></p></div>
				 <div class="detail">尊敬的 [13611919490] 用户恭喜你于 [2016-08-08 09:36:25] 成为钱趣多会员</div>
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
	     return {
	       datalist:[]
	     }
	  },
	  computed: {
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
             this.$store.commit('TITLE','消息中心');  
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