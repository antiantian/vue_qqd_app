<template>
    <div>
	   <header-div message="绑卡" path="/cInvestManage" headPhone="true"></header-div>
	   <div class="fixTop">
		  <div class="cpmid">
			  <div class="cpTab commonTab">
				  <div class="title"><p>如何完成快捷支付银行卡绑定？</p></div>
				  <div class="detail">会员注册钱趣多平台并开通上海银行存管账户后，在【我的账户】-【充值】页面，输入金额后点击【立即充值】，跳转至上海银行充值页面，
					  点击【快捷充值】并选择所属银行，根据提示完成快捷卡绑定。银行卡的开户名与实名认证的姓名必须一致。</div>
			  </div>
			  <div class="cpTab commonTab">
				  <div class="title"><p>投资会员可以绑定几张银行卡进行充值？几张银行卡进行提现？</p></div>
				  <div class="detail">投资会员可以绑定1张用于快捷支付的银行卡。快捷充值与提现操作默认在会员绑定的快捷支付卡上进行。</div>
			  </div>
			  <div class="cpTab commonTab">
				  <div class="title"><p>绑卡成功后是否可以修改？</p></div>
				  <div class="detail">
					 <!--  1.登陆汇付天下官网：http://www.chinapnr.com/，在汇付首页右侧，点击“P2P账户查询”进入汇付账户登陆页面。<br/>
					  2.汇付账户的登陆名为：qqd_您自行设置的用户名，汇付登录密码为您在认证汇付天下时，汇付天下短信发送给您的初始密码或您修改后的登陆密码。<br/> -->
					  1.成功登陆账户后，直接点击“我的银行卡——快捷银行卡——解绑快捷卡”自行解绑
				  </div>
			  </div>
			  <div class="cpTab commonTab">
				  <div class="title"><p>快捷支付绑卡支持哪些银行？</p></div>
				  <div class="detail">中国农业银行、建设银行、中国银行、光大银行、兴业银行、平安银行、邮储银行、浦发银行、工商银行、民生银行、交通银行、广发银行、恒丰银行、华夏银行、招商银行</div>
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