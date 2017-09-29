<template>
    <div>
	   <header-div message="投资" path="/cInvestManage" headPhone="true"></header-div>
	   <div class="fixTop">
        <div class="cpmid">
          <div class="cpTab commonTab">
            <div class="title"><p>投资金额有限制吗？</p></div>
            <div class="detail">钱趣多平台所有标的的起投金额为100元，投资金额不能超过标的剩余可投资金额。</div>
          </div>
          <div class="cpTab commonTab">
            <div class="title"><p>标的如何起息？</p></div>
            <div class="detail">标的募集成功后次日开始计息。</div>
          </div>
          <div class="cpTab commonTab">
            <div class="title"><p>投资后如何查看《债权转让与受让协议》？</p></div>
            <div class="detail">进入【我的账户】-【投资管理】页面，可在【待还款】列表中查看“正在还款”标的的《债权转让与受让协议》，也可在【已汇款】列表中查看“还款完成”标的的《债权转让与受让协议》。</div>
          </div>
          <div class="cpTab commonTab">
            <div class="title"><p>标的募集期结束后没有满额怎么办？</p></div>
            <div class="detail">标的募集期结束后没有满额，投标时的冻结资金将解冻并返回投资会员的账户余额，可直接对其他标的进行投标。</div>
          </div>
          <div class="cpTab commonTab">
            <div class="title"><p>标的到期后，资金会回到哪里？收到还款后能马上再投资吗？</p></div>
            <div class="detail">
              1.标的到期后，本金和收益将进入投资会员的上海银行存管账户中。<br />
              2.标的到期后收到的本金和收益可以再次进行投资。
            </div>
          </div>
          <div class="cpTab commonTab">
            <div class="title"><p>标的到期后如何还款？</p></div>
            <div class="detail">到期一次性还本付息。据央行《支付结算办法》，承兑银行应在汇票到期日或到期日后的见票当日支付票款。实操中由于承兑行审核因素以及银行间清算的时间差 ，托收资金会在T+3工作日内到账。最终回款期以托收的票据资金实际到账日为准。</div>
          </div>
          <div class="cpTab commonTab">
            <div class="title"><p>满标之前已投资资金是否计息？</p></div>
            <div class="detail">投资会员所投资的标的开始计算收益的日期,投标成功后次日起息（目前只针对企票融产品）</div>
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
             store.commit('TITLE','投资');
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