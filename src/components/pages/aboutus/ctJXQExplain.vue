<template>
    <div>
	   <header-div message="加息券说明" path="/cTariff" headPhone="true"></header-div>
	   <div class="fixTop">
      <div class="cpmid">
        <div class="cpTab commonTab open">
          <div class="title"><p>加息券规则说明：</p></div>
          <div class="detail">
          <p>1、加息券一次只能使用一张，不可以和多多金同时使用；</p>
                  <p>2、注册和升级赠送加息券的有效期为30天，抽奖所得和积分兑换所得的加息券有效期为180天；</p>
                  <p>3、加息券仅限在钱趣多平台上使用；</p> 
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
             store.commit('TITLE','加息券说明');
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