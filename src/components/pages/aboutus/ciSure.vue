<template>
    <div>
	   <header-div message="保票通" path="/cInvestManage" headPhone="true"></header-div>
	   <div class="fixTop">
		  <div class="cpmid">
			  <div class="cpTab commonTab">
				  <div class="title"><p>什么是保票通？</p></div>
				  <div class="detail">
					  保票通是创新性的“商业保理+银行承兑汇票质押担保”金融产品，由上海钱橙互联网金融信息服务有限公司（钱橙金服）与保理公司合作共同推出，通过保理公司在商业保理领域的丰富资源和专业风控经验，为借款企业提供保理服务，
					  同时由借款企业提供足额银行承兑汇票质押，业务合法合规、项目信息真实透明、还款来源明确、流动性较高。</div>
			  </div>
			  <div class="cpTab commonTab">
				  <div class="title"><p>什么是商业保理？</p></div>
				  <div class="detail">保理业务是供应商将其现在或将来的基于其与采购商订立的货物销售/服务合同所产生的应收账款转让给保理商（商业银行和商业保理公司），由保理商向其提供资金融通、买方资信评估、销售账户管理、信用风险担保、账款催收等一系列服务的综合金融服务方式。它是商业贸易中以托收、赊账方式结算货款时，供应商为了强化应收账款管理、增强流动性而采用的一种委托第三者（保理商）管理应收账款的做法。</div>
			  </div>
			  <div class="cpTab commonTab">
				  <div class="title"><p>什么是银行承兑汇票？</p></div>
				  <div class="detail">
					  根据《中华人民共和国票据法》规定：票据，是指汇票、本票和支票。<br />
					  其中汇票的定义：汇票是出票人签发的，委托付款人在见票时或者在指定日期无条件支付确定的金额给收款人或者持票人的票据。汇票分为银行汇票和商业汇票。<br />
					  银行承兑汇票是由付款人委托银行开据的一种远期支付票据，票据到期银行具有见票即付的义务；
				  </div>
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
             store.commit('TITLE','保票通');
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