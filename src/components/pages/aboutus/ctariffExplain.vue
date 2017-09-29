<template>
    <div>
	   <header-div message="资费说明" path="/cTariff" headPhone="true"></header-div>
	   <div class="fixTop">
      <div class="cpmid">
        <div class="cpTab commonTab open">
          <div class="title"><p>钱趣多在线费用一览列表：</p></div>
          <div class="detail">
            <table border="" cellspacing="10" cellpadding="10" width="100%" style="text-align: center;">
              <tbody>
              <tr>
                <th colspan="2">
                  <span>类别</span>
                </th>
                <th>
                  <span>费用</span>
                </th>
                <th>
                  <span>说明</span>
                </th>
              </tr>
              <tr>
                <td rowspan="6" width="100" class="tzr" style="font-size:14px;text-align:center;background:#FBF2D3;color:#666666;">
                  <span>投资人</span>
                </td>
                <td width="120">
                  <span>注册</span>
                </td>
                <td width="160">
                  <span>免费</span>
                </td>
                <td width="200">
                  <span>所有网站访客均可免费注册成为钱趣多平台会员。</span>
                </td>
              </tr>
              <tr>
                <td>
                  <span>充值</span>
                </td>
                <td>
                  <span>免费</span>
                </td>
                <td>
                  <span>钱趣多平台最低充值金额为100元，充值手续费由上海银行收取，目前投资会员的充值手续费由钱趣多平台代为支付。</span>
                </td>
              </tr>
              <tr>
                <td>
                  <span>实名认证</span>
                </td>
                <td>
                  <span>免费</span>
                </td>
                <td>
                  <span>为了提高账户安全等级，保障资金的安全性和合同的有效性，客户需在首次充值前完成实名登记，钱趣多承诺会对所有客户资料严格保密。</span>
                </td>
              </tr>
              <tr>
                <td>
                  <span>起投金额</span>
                </td>
                <td>
                  <span>100元</span>
                </td>
                <td>
                  <span>在钱趣多平台理财100元起步。</span>
                </td>
              </tr>
              <tr>
                <td>
                  <span>提现</span>
                </td>
                <td>
                  <span>免费3次/月</span>
                </td>
                <td>
                  <span>投资会员投资后即可使用提现功能，每次提现上海银行收取2元/笔提现手续费，每月前3次提现手续费由钱趣多代为支付。超过三次提现的手续费可从提现金额中扣除，也可使用50积分抵扣提现手续费，目前新版的钱趣多不支持2元及以下金额的提现。</span>
                </td>
              </tr>
              <tr>
                <td>
                  <span>服务费</span>
                </td>
                <td>
                  <span>免费</span>
                </td>
                <td>
                  <span>钱趣多平台无任何服务费用。</span>
                </td>
              </tr>
              </tbody>
            </table>
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
             store.commit('TITLE','资费说明');
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