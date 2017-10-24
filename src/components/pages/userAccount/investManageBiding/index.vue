<template>
   <div>
   	  <header-div message="投资管理" path="/userAccount/accountCenter"></header-div>
   	  <div class="investContent fixTop fixInvesttop">
		  <div class="invesTitle  clearfix">
	      	<router-link class="box_S cur" to="/userAccount/investManageBiding">投标中</router-link>
	      	<router-link class="box_S" to="/userAccount/investManageRepaymenting">还款中</router-link>
	      	<router-link class="box_S" to="/userAccount/investManageRepaymented">已还款</router-link>
		  </div> 
	      <ul class="investList">
	      	<li>
	      		<h3 class="title"><i>保票通20160706</i></h3>
	      		<div class="investBlock clearfix">
	      			  <div class="investBox investCash">
			      			<span>￥0.00</span>
			      			<p>投资金额</p>
			      		</div>
			      		<div class="investBox investCash">
			      			<span>62天</span>
			      			<p>项目期限</p>
			      		</div>
			      		<div class="investBox investCash">
			      			<span>到期还本付息</span>
			      			<p>还款方式</p>
			      		</div>
			      		<div class="investBox investCash">
			      			<span>8%</span>
			      			<p>预期年化收益率</p>
			      		</div>
			      		<div class="investBox investCash">
			      			<span>2016-07-10</span>
			      			<p>投资日期</p>
			      		</div>
			      		<div class="investBox investCash">
			      			<span>2016-09-10</span>
			      			<p>预期还款日</p>
			      		</div>
	      		</div>
	      	</li>
	      	<li>
	      		<h3 class="title"><i>保票通20160706</i></h3>
	      		<div class="investBlock clearfix">
	      			  <div class="investBox investCash">
			      			<span>￥0.00</span>
			      			<p>投资金额</p>
			      		</div>
			      		<div class="investBox investCash">
			      			<span>62天</span>
			      			<p>项目期限</p>
			      		</div>
			      		<div class="investBox investCash">
			      			<span>到期还本付息</span>
			      			<p>还款方式</p>
			      		</div>
			      		<div class="investBox investCash">
			      			<span>8%</span>
			      			<p>预期年化收益率</p>
			      		</div>
			      		<div class="investBox investCash">
			      			<span>2016-07-10</span>
			      			<p>投资日期</p>
			      		</div>
			      		<div class="investBox investCash">
			      			<span>2016-09-10</span>
			      			<p>预期还款日</p>
			      		</div>
	      		</div>
	      	</li>
	      </ul>  
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
                   allOad($(".fixTop"),3);
                   $(".noCoupon").css({"paddingTop":"7.6em"})
                 })
             })
          },            
      }
   }  
</script>

<style rel="stylesheet" scoped>
    
</style>