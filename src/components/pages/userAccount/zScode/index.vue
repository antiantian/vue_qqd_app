<template>
  <div>
     <header-div message="我的邀请" path="/userAccount/accountCenter"></header-div>
     <div class="fixTop">
	  	<input type="hidden" id="inviteNum" value="0" />
	     <div class="zScode">
	        <img class="img" src="/static/images/zScode_02.png" />
	        <div class="Inner">
	           <input type="text" id="target" class="myCode radius13" readonly="readonly" value="https://m.qianquduo.com/scodeRegister?inviteCode=49A070A25D0BBB105CC9FACC0A424334F1ACEC7401B6DBF3C7C25A9F47EA1ACFDAD3EA7011E08AB92DD9790F4DF53777" />
	           <!--<input class="btns radiushalf"  id="copy_btn"type="button" value="复制链接" />-->
	           <div class="copyT radiushalf">复制粘贴可向好友发送您的链接</div>
	           <a class="btns radiushalf" href="/userAccount/myInvitation">我的邀请</a> 
	           <div class="txt">
	             <p>*好友投资后，您可获得好友每次投资的推荐积分</p>
	             <p>推荐积分=所推荐用户投资原始收益*本人的积分系数</p>
	           </div>
	         </div>
	     </div>
	  </div>
  </div>  
</template>

<script type="ecmascript-6">
   import headerDiv from '../../../common/HeaderDiv'
   export default {
     components:{
	      headerDiv 
	  }, 
	  data(){
	     return {
	       datalist:[]
	     }
	  },
	  computed: {
	        title_mess:function(){
	          return this.$store.state.title
	        },
		    store_admin:function(){
		       return this.$store.state.admin_id
		    },
		    DepositoryAccount:function(){
		       return this.$store.state.DepositoryAccount
		    },
      },     
      mounted(){
        this.dataHad(); 
      },
      destroyed(){
        $("body").removeClass("yellowBG")
      },
      methods:{
          dataHad:function(){
             this.$store.commit('TITLE','我的邀请');  
             this.$nextTick(function(){
                 $(function(){
                  $("body").addClass("yellowBG")
                  // allOad($(".fixTop"),3);
                   //$(".noCoupon").css({"paddingTop":"7.6em"})
                 })
             })
          },            
      }
   }  
</script>

<style rel="stylesheet">
    .yellowBG {
	    background:#fa5627;
	}    

</style>