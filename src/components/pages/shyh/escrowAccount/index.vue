<template>
 <div>
    <header-div message="存管账户" goback="true"></header-div>
    <div class="fixTop" v-if="DepositoryAccount===false">
	  <div class="mid_con">
		  <div class="noAccounttip">您还没有开通资金存管账户</div>
		  <router-link class="commonBtn immediateInvest radiushalf" to="/shyh/openAccount">立即开通</router-link>
	  </div>
    </div>
    <div class="fixTop" v-if="DepositoryAccount===true">
	   <ul class="escrowAccount">
	       <li class="big">
	         <h2>中国银行 借记卡</h2>
		     <div>
		       <p>217**** ****5657</p>
		         <div class="userMessages">
		             <span>户名：赵春雨 | </span>
		             <span class="sites" id="">
		                         省份：<i>0031</i></span>
		            <!--  <li>省份：上海</li> -->
		             <span> | 开户行：中国银行</span>
		             <!-- <span>支行名：中国银行</span> -->
		         </div>
		        <div class="moren">
		          <span><input type="checkbox" name="" checked="checked" disabled="disabled" />默认取现卡</span>
		          <span style="text-align: right;"><a  @click="updateBank">修改</a></span>
		        </div>
		     </div>
	       </li>
	   </ul>
    </div> 
</div>   
</template>
<script type="ecmascript-6">
   import headerDiv from '../../../common/HeaderDiv'
   import areaDefined from '../../userAccount/chargeJs/areaDefined'
   import accountBank from '../../userAccount/chargeJs/accountBank'
   import areadata from '../../userAccount/chargeJs/data'
   import Query from '../../../../assets/Query'
   export default {
     components:{
	      headerDiv 
	  }, 
	  computed: {
		    store_admin:function(){
		       return this.$store.state.admin_id
		    },
		    DepositoryAccount:function(){
		       return this.$store.state.DepositoryAccount
		    },
      },
      data(){
        return({
             bankData:"6217880800003955657"
        })
      },      
      mounted(){
         this.setTitle();
      },
      destroyed(){
      },
      methods:{
          setTitle:function(){
             this.$store.commit('TITLE','存管账户');
              this.$nextTick(function() {
                       $(function(){    
							  var getName=new areaDefined({});
							  $(".escrowAccount").find(".sites").each(function(){
								 var codes=$(this).find("i").text();
								 $(this).find("i").text(getName.getInitLocate(codes))
							  })

						})
               })                   
          },
		 updateBank:function(){
		    this.$router.push({
		       path:"/shyh/escrowAccountTwo?cardId="+this.bankData
		    })
			//location.href = "/shyh/escrowAccountTwo?cardId="+$(obj).attr("obj");
		 }
      }
   }
</script>

<style rel="stylesheet" scoped>  
     .accountBank li{
        background: #ffffff;
     }
     .accountBank li .on{
       color:#ff0000;
     }
</style>

