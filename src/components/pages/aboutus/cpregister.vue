<template>
    <div>
	   <header-div message="注册认证" path="/commonProblem" headPhone="true"></header-div>
	   <div class="fixTop">
		  <div class="cpmid">
			  <div class="cpTab commonTab">
				  <div class="title"><p>注册验证码发送规则</p></div>
				  <div class="detail">验证码发送时间间隔为60秒，重复点击发送验证码需输入图片验证码，同一账号一小时内最多只能发送5条，超过5条会提示：该账号短信发送数量已达上限，请投资会员一小时后再试。</div>
			  </div>
			  <div class="cpTab commonTab">
				  <div class="title"><p>注册时手机收不到验证码短信怎么办？</p></div>
				  <div class="detail">
					  a)若手机安装了拦截软件有可能被拦截，投资会员可以查看一下拦截记录/垃圾短信，是否被拦截。</br>
					  b)由于短信运营商通道可能会出现阻塞情况，有时短信会出现延时或者失败的情况。</br>
					  c)若没有收到验证码短信，倒计时结束后，可以点击再次发送</br>
					  d)如有其它问题请联系客服。客服电话：400-656-8877
				  </div>
			  </div>
			  <div class="cpTab commonTab">
				  <div class="title"><p>忘记登录密码怎么办？</p></div>
				  <div class="detail">当投资会员忘记钱趣多平台的登录密码时，在钱趣多首页点击【登录】，在登录页面点击【忘记密码】，然后在【设置新密码】页面，设置新的登录密码。</div>
			  </div>
			  <div class="cpTab commonTab">
				  <div class="title"><p>如何修改登录密码？</p></div>
				  <div class="detail">登录钱趣多平台，打开【我的账户】页面，在【账户设置】-【密码设置】栏， 修改投资会员的登录密码。或在登录页面直接点击忘记密码进行修改。</div>
			  </div>
			  <div class="cpTab commonTab">
				  <div class="title"><p>我的手机号出现变更，该如何修改？</p></div>
				  <div class="detail">
					  钱趣多平台手机号码修改方式：</br>
					  登录钱趣多平台，打开【我的账户】页面，在【账户设置】-【基本信息】-【手机认证】栏，点击【修改】，修改投资会员的手机号码。</br>
					  第三方存管账户手机号码修改方式：</br>
					  登陆汇付天下官网：http://www.chinapnr.com/，在汇付首页右侧，点击“P2P账户查询”进入汇付账户登陆页面，根据提示进行修改。
				  </div>
			  </div>
			  <div class="cpTab commonTab">
				  <div class="title"><p>为什么要进行实名认证？</p></div>
				  <div class="detail">会员在钱趣多完成注册后，进入【我的账户】-【充值】页面，根据提示开通第三方存管账户并完成实名认证。</div>
			  </div>
			  <div class="cpTab commonTab">
				  <div class="title"><p>实名认证无法通过是什么原因？怎么解决？</p></div>
				  <div class="detail">
					  会员开通第三方存管账户时进行的实名认证与公安系统联网，如果信息不一致，就会导致无法通过。以下几种情况，将无法自行完成实名认证：</br>
					  1、曾经改过名字及做过户籍变动的情况下，需要去户籍所在地的公安系统进行信息更新后，方可在平台上正常实名认证。</br>
					  2、现役军人持有的身份证目前无法完成实名认证。</br>
					  详细情况可致电与钱趣多合作的第三方支付机构客服电话400-820-2819进行咨询。
				  </div>
			  </div>
			  <div class="cpTab commonTab">
				  <div class="title"><p>进行实名认证后，能解绑或重新认证吗？</p></div>
				  <div class="detail">会员实名认证后，不能解绑或重新认证。每位会员（同一身份证）仅可实名认证一个账号。为确保会员更好的管理自己的账户资产，建议投资会员谨慎填写投资会员的认证信息。</div>
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