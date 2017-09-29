<template>
    <div>
	   <header-div message="多多金说明" path="/cTariff" headPhone="true"></header-div>
	   <div class="fixTop">
      <div class="cpmid">
        <div class="cpTab commonTab open">
          <div class="title"><p>“多多金”规则说明：</p></div>
          <div class="detail">
          <p>1、多多金为钱趣多平台现金红包，可在投标时使用。</p>
                  <p>2、多多金在项目到期回款之后自动返现至投资会员的银行存管账户。</p>
                  <p>3、注册和升级的赠送的多多金的有效期为30天，抽奖所得和积分兑换所得的多多金有效期为180天。</p>
                  <p>4、多多金不可以分拆使用，不能进行转让，不可叠加使用</p>
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
             store.commit('TITLE','多多金说明');
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