<template>
   <div>
   	  <header-div message="投资管理" path="/userAccount/accountCenter"></header-div>
   	  <div class="investContent fixTop fixInvesttop">
		  <div class="invesTitle  clearfix">
	      	<router-link class="box_S" to="/userAccount/investManageBiding">投标中</router-link>
	      	<router-link class="box_S" to="/userAccount/investManageRepaymenting">还款中</router-link>
	      	<router-link class="box_S cur" to="/userAccount/investManageRepaymented">已还款</router-link>
		  </div> 
	      <ul class="investList" id="like-list">
	      	<li>
	      		<h3 class="title">
	      		<i>企票融-20171013-01</i>
	      		<a href="https://admin.qianquduo.com/files/dictionary/20171018/62ca24253ef24505a5e68b9e5ebd2966.pdf" class="protocol" target="_blank">查看协议</a></h3>
	      		<div class="investBlock clearfix">
	      			  <div class="investBox investCash">
			      			<span>￥200.00</span>
			      			<p>投资金额</p>
			      		</div>
			      		<div class="investBox investCash">
			      			<span>56天</span>
			      			<p>项目期限</p>
			      		</div>
			      		<div class="investBox investCash">
			      			<span>6.80%</span>
			      			<p>历史年化收益率</p>
			      		</div>
			      		<div class="investBox investCash">
			      			
			      			<span>￥1.90</span>
			      			<p>预期收益</p>
			      		</div>
			      		<div class="investBox investCash">
			      			<span>到期还本付息</span>
	      					
	      					
			      			<p>还款方式</p>
			      		</div>
			      		<div class="investBox investCash">
			      			<span>2017-12-09</span>
			      			<p>预期还款日</p>
			      		</div>
	      		</div>
	      	</li>
	      	<li>
	      		<h3 class="title">
	      		<i>企票融-20170930-04</i>
	      		<a href="https://admin.qianquduo.com/files/dictionary/20171013/ba8be284994d463a9bc2cd225830434b.pdf" class="protocol" target="_blank">查看协议</a></h3>
	      		<div class="investBlock clearfix">
	      			  <div class="investBox investCash">
			      			<span>￥50000.00</span>
			      			<p>投资金额</p>
			      		</div>
			      		<div class="investBox investCash">
			      			<span>140天</span>
			      			<p>项目期限</p>
			      		</div>
			      		<div class="investBox investCash">
			      			<span>9.05%</span>
			      			<p>历史年化收益率率</p>
			      		</div>
			      		<div class="investBox investCash">
			      			
			      			<span>￥1574.45</span>
			      			<p>预期收益</p>
			      		</div>
			      		<div class="investBox investCash">
			      			<span>到期还本付息</span>
	      					
	      					
			      			<p>还款方式</p>
			      		</div>
			      		<div class="investBox investCash">
			      			<span>2018-02-18</span>
			      			<p>预期还款日</p>
			      		</div>
	      		</div>
	      	</li>
	      </ul>
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
          setTitle:function(){
             store.commit('TITLE','投资管理');  
             this.$nextTick(function(){
                 
             })
          },          
      }
   } 
</script>

<style rel="stylesheet" scoped>
    
</style>