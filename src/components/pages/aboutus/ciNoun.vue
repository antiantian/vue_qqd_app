<template>
    <div>
	   <header-div message="名词解释" path="/cInvestManage" headPhone="true"></header-div>
	   <div class="fixTop">
        <div class="cpmid">
          <div class="cpTab commonTab">
            <div class="title"><p>投资会员</p></div>
            <div class="detail">指已经或准备在钱趣多进行出借活动，并已完成相应的注册、实名认证、手机号码绑定和提现密码设置的会员。
              成为钱趣多投资会员的基本条件是：1)年满十八周岁、具有完全独立民事权利能力和民事行为能力的中国大陆合法公民；2)开通了网银功能，可通过网银进行上海银行充值。</div>
          </div>
          <div class="cpTab commonTab">
            <div class="title"><p>历史年化收益率</p></div>
            <div class="detail">历史年化收益率率是一种理论收益率，并不是真正的已取得的收益率。例如：历史年化收益率率12%，会员投标后所得的收益=投资本金*（预期2年化收益率12%/365）*投资期限（天数）</div>
          </div>
          <!-- <div class="cpTab commonTab">
            <div class="title"><p>历史年化收益率率</p></div>
            <div class="detail">历史年化收益率率是指投资期限为一年所获的收益率</div>
          </div> -->
          <div class="cpTab commonTab">
            <div class="title"><p>充值</p></div>
            <div class="detail">指投资会员通过与钱趣多合作的上海银行以及网上银行进行充值。为保障投资会员的资金安全，投资会员在充值前必须完成实名认证。</div>
          </div>
          <div class="cpTab commonTab">
            <div class="title"><p>投标</p></div>
            <div class="detail">指投资会员将其钱趣多账户内特定的资金投向特定借款标的的行为。</div>
          </div>
          <div class="cpTab commonTab">
            <div class="title"><p>满标</p></div>
            <div class="detail">借款标的在募集期限内筹齐借款资金即为满标。</div>
          </div>
          <div class="cpTab commonTab">
            <div class="title"><p>流标</p></div>
            <div class="detail">募集期届满但未满标的状态叫做流标。流标后会员冻结的投资金额将会解冻并返回账户余额，可用于其他标的投资。</div>
          </div>
          <div class="cpTab commonTab">
            <div class="title"><p>起息日</p></div>
            <div class="detail">投资会员所投资的标的开始计算收益的日期,投标成功后次日起息（目前只针对企票融产品）</div>
          </div>
          <div class="cpTab commonTab">
            <div class="title"><p>提现</p></div>
            <div class="detail">投资会员将账户金额中的资金提取到本人所绑定的银行卡。</div>
          </div>
          <div class="cpTab commonTab">
            <div class="title"><p>账户总资产</p></div>
            <div class="detail">账户总资产 = 账户金额 +冻结金额 + 待收本金 + 待收收益</div>
          </div>
          <div class="cpTab commonTab">
            <div class="title"><p>账户金额</p></div>
            <div class="detail">指账户内投资会员可自由支配（投资或提现）的资金金额。</div>
          </div>
          <div class="cpTab commonTab">
            <div class="title"><p>待收本金</p></div>
            <div class="detail">指投资会员已投资而尚未到期回款的本金之和。</div>
          </div>
          <div class="cpTab commonTab">
            <div class="title"><p>待收收益</p></div>
            <div class="detail">指投资会员已投资而尚未到期回款的利息之和。</div>
          </div>
          <div class="cpTab commonTab">
            <div class="title"><p>冻结金额</p></div>
            <div class="detail">
              1)投资会员正在投资中（未满标或满标未开始计息）的金额属于冻结金额。<br />
              2)会员申请提现当尚未通过的金额属于冻结金额。
            </div>
          </div>
          <div class="cpTab commonTab">
            <div class="title"><p>出票银行无条件承兑</p></div>
            <div class="detail">也称一次性还本付息，又称到期一次性还本付息；投资会员将在标的到期之后一次性收到本金和利息。</div>
          </div>
        </div>
      </div>
	</div>  
</template>

<script type="ecmascript-6">
   import store from '../../../store'
   import headerDiv from '../../common/HeaderDiv'
   export default {
     components:{
	      headerDiv 
	  },      
      mounted(){
         this.setTitle();
      },
      destroyed(){
          //组件移除事件
          $("body").removeClass("f1bg")
      },
      methods:{
          setTitle:function(){
             store.commit('TITLE','名词解释');
             this.$nextTick(function(){
                       $(function(){
							//背景颜色
							 $("body").addClass("f1bg")
							 //点击打开详情
							  $(".commonTab").click(function(){
								  if($(this).hasClass("open")){
									  $(this).removeClass("open");
								  }else{

									  $(this).addClass("open").siblings(".commonTab").removeClass("open");;
								  }
							  })

                       })

             })  
          },          
      }
   }
</script>

<style rel="stylesheet" scoped>
    
</style>