<template>
    <div>
	   <header-div message="充值" path="/commonProblem" headPhone="true"></header-div>
	   <div class="fixTop">
		  <div class="cpmid">
			  <div class="cpTab commonTab">
				  <div class="title"><p>如何给账户充值？</p></div>
				  <div class="detail">登录钱趣多平台，进入【我的账户】-【充值】页面，输入充值金额，点击【立即充值】。通过第三方支付平台按照提示进行充值，可选择【快捷充值】或者【网银充值】两种充值方式。</div>
			  </div>
			  <div class="cpTab commonTab">
				  <div class="title"><p>在钱趣多平台充值收取手续费吗？</p></div>
				  <div class="detail">钱趣多平台充值免手续费。会员充值手续费由第三方支付机构收取，目前投资会员的充值手续费由钱趣多平台代为支付。</div>
			  </div>
			  <div class="cpTab commonTab">
				  <div class="title"><p>什么是快捷支付?</p></div>
				  <div class="detail">快捷支付是一种安全便捷的支付方式，使用时需要校验银行卡和身份信息，校验成功后，之后再次使用时仅输入支付密码和短信验证码即可完成支付。</div>
			  </div>
			  <div class="cpTab commonTab">
				  <div class="title"><p>快捷支付限额</p></div>
				  <div class="detail">
					  <table border="1" cellspacing="0" cellpadding="1" style="text-align: center;">
						  <tbody><tr>
							  <th width="150">银行</th>
							  <th width="150">单笔限额</th>
							  <th width="150">单卡单日限额</th>
						  </tr>
						  <tr>
							  <td>农业银行</td>
							  <td>2千</td>
							  <td>1万</td>
						  </tr>
						  <tr>
							  <td>中国银行</td>
							  <td>5万</td>
							  <td>10万</td>
						  </tr>

						  <tr>
							  <td>建设银行</td>
							  <td>5万</td>
							  <td>10万</td>
						  </tr>
						  <tr>
							  <td>光大银行</td>
							  <td>5万</td>
							  <td>10万</td>
						  </tr>
						  <tr>
							  <td>兴业银行</td>
							  <td>5万</td>
							  <td>5万</td>
						  </tr>
						  <tr>
							  <td>中信银行</td>
							  <td>5万</td>
							  <td>10万</td>
						  </tr>

						  <tr>
							  <td>工商银行</td>
							  <td>5万</td>
							  <td>5万</td>
						  </tr>
						  <tr>
							  <td>上海银行</td>
							  <td>5千</td>
							  <td>5万</td>
						  </tr>
						  <tr>
							  <td>渤海银行</td>
							  <td>5万</td>
							  <td>10万</td>
						  </tr>
						  <tr>
							  <td>平安银行</td>
							  <td>5千</td>
							  <td>5千</td>
						  </tr>
						  <tr>
							  <td>邮政储蓄</td>
							  <td>5千</td>
							  <td>5千</td>
						  </tr>
						  <tr>
							  <td>浦发银行</td>
							  <td>5千</td>
							  <td>5万</td>
						  </tr>
						  </tbody></table>
				  </div>
			  </div>
			  <div class="cpTab commonTab">
				  <div class="title"><p>网银充值限额</p></div>
				  <div class="detail">交易限额是由银行设定的，投资会员可以联系银行更改限额。一般来说，使用有USB设备的专业版网银，限额比较高，应该能满足投资会员的投资需求。如果只是账户密码的网银方式，限额较低，很难满足投资会员的投资需求。</div>
			  </div>
			  <div class="cpTab commonTab">
				  <div class="title"><p>如何申请开通网上银行?</p></div>
				  <div class="detail">目前所有的商业银行都支持个人网银业务，投资会员只需要携带有效身份证件，到当地投资会员所持银行卡的发卡行任意营业网点，即可申请开通网上银行业务。</div>
			  </div>
			  <div class="cpTab commonTab">
				  <div class="title"><p>是否可以绑定信用卡进行充值或提现?</p></div>
				  <div class="detail">钱趣多平台不支持信用卡充值和提现，投资会员只能使用银行借记卡进行投资和提现。</div>
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