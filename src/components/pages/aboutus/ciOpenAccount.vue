<template>
    <div>
	   <header-div message="开户" path="/cInvestManage" headPhone="true"></header-div>
	   <div class="fixTop">
        <div class="cpmid">
          <div class="cpTab commonTab">
            <div class="title"><p>如何开设存管账户？</p></div>
            <div class="detail">在注册钱趣多平台后，投资会员需要开通上海银行存管账户才能进行正常的充值、投资、提现等操作。登录钱趣多平台，在【我的账户】-【充值】页面，点击【立即开通】，跳转上海银行的账户开通页面，按照要求填写信息完成开通。</div>
          </div>
          <!-- <div class="cpTab commonTab">
            <div class="title"><p>忘记交易密码怎么办？如何修改交易密码？</p></div>
            <div class="detail">登陆汇付天下官网：http://www.chinapnr.com/，在汇付首页右侧，点击“P2P账户查询”进入汇付账户登陆页面，点击忘记密码，根据提示进行修改。</div>
          </div> -->
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
             store.commit('TITLE','开户');
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