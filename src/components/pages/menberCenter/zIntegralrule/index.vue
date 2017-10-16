<template>
   <div>
      <header-div message="积分规则" path="/menberCenter"></header-div>
      <input id="customerAppToken" type="hidden" value="" />
	  <input id="resource" type="hidden" value="" />
	  <div class="fixTop">
		  <div class="ruleCon">
	           <div class="radiushalf title">一、积分获取</div>
	           <p class="actionB">注：积分计算时间起始日为钱趣多3版上线日<span>(2017-01-25)</span>，凡在<span>2017-01-25</span>之前注册或投资不计入积分计算范围，在<span>2017-01-25</span>之后的注册或投资可按规则获得相应的积分。</p>
	           <div class="smallTitle"><span class="radius50">1</span><p>投资积分：</p></div>
	           <div class="detail">
	             <p><i>会员投资获得的积分=投资金额*预期收益率*天数／365*积分系数</i><span>（注：预期收益率不包括任何形式的加息，单标投资金额超过10万以10万计算投资金额）</span></p>
	           </div>
	           <div class="smallTitle"><span class="radius50">2</span><p>推荐积分：</p></div>
	           <div class="detail">
	             <p>会员推荐获得的积分=投资金额*预期收益率*天数／365*本人的积分系数</p>
	           </div>
	           <div class="smallTitle"><span class="radius50">3</span><p>推荐积分：</p></div>
	           <div class="detail">
	             <p>积分系数由会员等级决定，最低为1，最高为1.25</p>
	           </div>
	           <div class="smallTitle"><span class="radius50">4</span><p>任务获取：</p></div>
	           <table id="ruleScoreDetail" cellpadding="1" cellspacing="0" width="100%" border="">
	             <tr>
	               <th>任务描述</th>
	               <th>奖励积分</th>
	             </tr>
	             <tr>
	               <td>注册</td>
	               <td>20积分</td>
	             </tr>
	             <tr>
	               <td>开通存管账户</td>
	               <td>20积分</td>
	             </tr>
	             <tr>
	               <td>完善信息(爱好)</td>
	               <td>20积分</td>
	             </tr>
	             <tr>
	               <td>首次投资</td>
	               <td>双倍投资积分</td>
	             </tr>
	             <tr>
	               <td>活动任务积分</td>
	               <td>根据不同活动规则赠送相应积分</td>
	             </tr>
	           </table>
	           <div class="radiushalf title">二、积分使用</div>
	           <div class="smallTitle"><span class="radius50">1</span><p>积分抽奖：</p></div>
	           <div class="detail">
	             <p><i>每天第1次抽奖免费，之后每次抽奖消耗20积分</i><span>(不限次数)</span></p>
	           </div>
	           <div class="smallTitle"><span class="radius50">2</span><p>积分兑换：</p></div>
	           <div class="detail">
	             <p><!-- 虚拟物品： -->加息券、多多金等<!-- 、企业合作内容（电影票、爱奇艺会员等等） --><br /><!-- 实体物品：电子产品、日用产品、钱趣多周边、生日神秘礼物 --></p>
	           </div>
	           <div class="smallTitle"><span class="radius50">3</span><p>积分提现：</p></div>
	           <div class="detail">
	             <p>积分提现：每月三次免费提现次数使用完后，可以使用50积分免费提现，否则需支付2元手续费</p>
	             <span class="block">注： 积分解释权归钱趣多所有</span>
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
             store.commit('TITLE','积分规则');  
             this.$nextTick(function(){
                 

             })
          },          
      }
   }
</script>

<style rel="stylesheet" scoped>
    
</style>