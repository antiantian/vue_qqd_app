<template>
    <div>
	   <header-div message="客户服务" path="/find"></header-div>
	   <div class="fixTop">
        <div class="customerTop">
          <p>客服热线：400-656-8877</p>
          <span>业务处理时间： 周一至周日全天</span>
          <div class="callbox radiushalf headPhone"><i class="iconfont">&#xe60d;</i> 拨打</div>
        </div>
        <table border="0" cellspacing="0" cellpadding="0" class="customerTable">
          <tr>
            <td><p>微信公众号</p></td>
            <td><p>qianquduo</p></td>
            <td><img class="codeImages" src="/static/images/zpic_hd.jpg" /> </td>
          </tr>
          <tr>
            <td><p>新浪微博</p></td>
            <td><p>钱趣多</p></td>
            <td><img class="codeImages" src="/static/images/z2pic_hd.jpg" /></td>
          </tr>
          <tr style="display: none;">
            <td><p>投资交流QQ群</p></td>
            <td><p>461771963</p></td>
            <td></td>
          </tr>
          <tr>
            <td><p>客服邮箱</p></td>
            <td><p>Service@qcfinancial.cn</p></td>
            <td></td>
          </tr>
          <tr>
            <td><p>微信客服号</p></td>
            <td><p>15221922364</p></td>
            <td></td>
          </tr>
        </table>
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
             store.commit('TITLE','客户服务');
             this.$nextTick(function(){
                       $(function(){
          							//背景颜色
          							 $("body").addClass("f1bg")

                       })

             })  
          },          
      }
   }
</script>

<style rel="stylesheet" scoped>
    
</style>