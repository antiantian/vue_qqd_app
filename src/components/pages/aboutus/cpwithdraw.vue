<template>
    <div>
	   <header-div message="提现" path="/commonProblem" headPhone="true"></header-div>
	   <div class="fixTop">
		  <div class="cpmid">
			  <div class="cpTab commonTab">
				  <div class="title"><p>如何完成提现？</p></div>
				  <div class="detail">登录钱趣多平台，在【我的账户】-【提现】页面，输入提现金额，点击【确认提交】后，跳转至第三方存管账户的提现界面，输入交易密码完成提现。</div>
			  </div>
			  <div class="cpTab commonTab">
				  <div class="title"><p>提现多久到账？</p></div>
				  <div class="detail">
					  <div style="padding-bottom: 1em">投资会员申请提现后，到账时间如下：</div>
					  <table width="100%" border="1" cellspacing="" cellpadding="8">
						  <tbody>
							  <tr align="center">
								  <th>提现金额</th>
								  <th>提现时间</th>
								  <th>到账时间</th>
							  </tr>
							  <tr align="center">
								  <td>小于等于5万</td>
								  <td>周一至周日全天</td>
								  <td>T+1个工作日</td>
							  </tr>
							  <tr align="center">
								  <td>大于5万</td>
								  <td>工作日每天18点以前</td>
								  <td>T+1个工作日</td>
							  </tr>
							  <tr align="center">
								  <td>大于5万</td>
								  <td>工作日每天18点后周六、周日全天</td>
								  <td>T+2个工作日</td>
							  </tr>
						  </tbody>
					  </table>
					  <div style="padding-top: 1em"> 根据收款银行、地区以及日期(工作日、法定节假日)的不同，实际的提现到账时间会有所差异，具体时间以第三方支付机构和银行为准。</div>
				  </div>
			  </div>
			  <div class="cpTab commonTab">
				  <div class="title"><p>在钱趣多平台提现收取手续费吗？</p></div>
				  <div class="detail">投资会员每月享有3次免费提现机会，超过3次由第三方支付机构收取2元/笔提现手续费。提现申请后，账户余额不足2元时，提现手续费从提现金额中扣除。目前新版的钱趣多不支持2元及以下金额的提现。</div>
			  </div>
			  <div class="cpTab commonTab">
				  <div class="title"><p>提现失败，是什么原因？</p></div>
				  <div class="detail">
					  1)原因：可能是银行账户冻结或正在办理挂失或网络原因。</br>
					  2)提现失败后，资金将自动退回客户的第三方存管账户余额，投资会员无需担心资金安全。可以重新发起提现申请，如有疑问联系客服400-656-8877。
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
             store.commit('TITLE','帮助中心');
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