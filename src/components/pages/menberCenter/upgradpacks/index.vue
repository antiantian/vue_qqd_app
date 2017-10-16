<template>
   <div>
      <header-div message="升级礼包" path="/menberCenter"></header-div>
      <input id="customerAppToken" type="hidden" value="" />
	  <input id="resource" type="hidden" value="" />
	  <div class="fixTop">
	      <div class="zdegree">
	        <div class="box box_S over"><!--over  -->
	            <img class="img" src="/static/images/zdegree_1.png" />
	            <div class="inner box_S radius7">
	               <p><em>累计年化投资金额：</em><span class="block">0≤累计年化投资金额＜10000</span></p>
	               <p><em>升级奖励：</em><span>新手礼包（新手注册时发放）</span></p>
	               <p><em>积分系数：</em><span>1</span></p>
	               <p><em>礼包内容：</em><span>20积分、0.8%加息券*1、888元现金红包*1</span></p>
	            </div>
	        </div>
	        <div class="box box_S">
	            <img class="img" src="/static/images/zdegree_2.png" />
	            <div class="inner box_S radius7">
	               <p><em>累计年化投资金额：</em><span class="block">10000≤累计年化投资金额＜30000</span></p>
	               <p><em>升级奖励：</em><span>Q2礼包</span></p>
	               <p><em>积分系数：</em><span>1.05</span></p>
	               <p><em>礼包内容：</em><span>200积分、0.8%加息券*2、60元现金红包*1</span><span class="gray">（投资2万，期限120天）</span></p>
	            </div>
	        </div>
	        <div class="box box_S">
	            <img class="img" src="/static/images/zdegree_3.png" />
	            <div class="inner box_S radius7">
	               <p><em>累计年化投资金额：</em><span class="block">30000≤累计年化投资金额＜80000</span></p>
	               <p><em>升级奖励：</em><span>Q3礼包</span></p>
	               <p><em>积分系数：</em><span>1.1</span></p>
	               <p><em>礼包内容：</em><span>500积分、0.8%加息券*3、120元现金红包*1</span><span class="gray">（投资4万，期限120天）</span></p>
	            </div>
	        </div>
	        <div class="box box_S">
	            <img class="img" src="/static/images/zdegree_4.png" />
	            <div class="inner box_S radius7">
	               <p><em>累计年化投资金额：</em><span class="block">80000≤累计年化投资金额＜150000</span></p>
	               <p><em>升级奖励：</em><span>Q4礼包</span></p>
	               <p><em>积分系数：</em><span>1.15</span></p>
	               <p><em>礼包内容：</em><span>1000积分、1%加息券*4、240元现金红包*1</span><span class="gray">（投资8万，期限120天）</span></p>
	            </div>
	        </div>
	        <div class="box box_S">
	            <img class="img" src="/static/images/zdegree_5.png" />
	            <div class="inner box_S radius7">
	               <p><em>累计年化投资金额：</em><span class="block">150000≤累计年化投资金额＜300000</span></p>
	               <p><em>升级奖励：</em><span>Q5礼包</span></p>
	               <p><em>积分系数：</em><span>1.2</span></p>
	               <p><em>礼包内容：</em><span>1500积分、1%加息券*5、360元现金红包*1</span><span class="gray">（投资12万，期限120天）</span></p>
	            </div>
	        </div>
	        <div class="box box_S">
	            <img class="img" src="/static/images/zdegree_6.png" />
	            <div class="inner box_S radius7">
	               <p><em>累计年化投资金额：</em><span class="block">累计年化投资金额≥300000</span></p>
	               <p><em>升级奖励：</em><span>Q6礼包</span></p>
	               <p><em>积分系数：</em><span>1.25</span></p>
	               <p><em>礼包内容：</em><span>2000积分、1%加息券*6、600元现金红包*1</span><span class="gray">（投资20万，期限120天）</span></p>
	            </div>
	        </div>
	      </div>
	      <div class="ruleCon nopaddinglr">
	         <div class="degreeCon">
	              <div class="radiushalf title">会员等级说明</div>
	              <p class="action">注：累计年化投资金额计算时间起始日为钱趣多 3 版上线日<span>(2017-01-25)</span>，凡在<span>2017-01-25</span>之前投资不计入累计年化投资金额范围。</p>
	               <div class="smallTitle">
	                   <span class="radius50">1</span>
	                   <p><span>钱趣多会员级别由累计年化投资金额决定，累计年化投资钱趣多会员级别由累计年化投资金额决定，累计年化投资金额=（单笔投资金额/365*投资天数）的叠加；</span></p>
	               </div>
	               <div class="smallTitle">
	                  <span class="radius50">2</span>
	                  <p><span>当会员的累计年化投资金额达到升级条件时，即可自动升级；</span></p>
	               </div>
	               <div class="smallTitle">
	                  <span class="radius50">3</span>
	                  <p><span>积分获得系数：用户在投资或推荐客户投资时获得的积分*积分获得系数=最终获得的积分数。</span></p>
	               </div>
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
             store.commit('TITLE','升级礼包');  
             this.$nextTick(function(){
                 

             })
          },          
      }
   }
</script>

<style rel="stylesheet" scoped>
    
</style>