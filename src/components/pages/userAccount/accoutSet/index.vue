<template>
  <div>
    <header-div message="账户设置" path="/userAccount/accountCenter"></header-div>
    <div class="fixTop">
	  <div class="set_con">
          <ul class="registerList">
              <li>
                  <span class="txt"><i class="iconfont orange">&#xe6b2;</i> 完善信息</span>
                  <router-link class="selectRight" to="/userAccount/perfectinfo"></router-link>
              </li>
              <li>
                  <span class="txt"><i class="iconfont skyblue">&#xe631;</i>修改密码</span>
                  <router-link class="selectRight" to="/userAccount/changPwd">修改密码</router-link>
              </li>
          </ul>
           <div class="sureBtn">
              <a @click="removeCustomerSesson" class="commonBtn radiushalf">我要退出</a>
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
          //组件移除事件
          $("body").removeClass("f1bg")
      },
      methods:{
          dataHad:function(){
             this.$store.commit('TITLE','投资管理2');  
             this.$nextTick(function(){
                 $(function(){
                   $("body").addClass("f1bg")
                  // allOad($(".fixTop"),3);
                   //$(".noCoupon").css({"paddingTop":"7.6em"})
                 })
             })
          },
          //用户点击退出  及清空session
		 removeCustomerSesson:function(){
		    var self=this;
			$.DialogByZ.Confirm({Title: "系统提示", Content: "您是否确认退出当前系统",BtnL:"确定",BtnR:"取消",FunL:function(){
			       self.$store.commit("LOGOUT")
                   // self.$router.push({ path: '/login' })
				   location.href = "/";
				},FunR:function(){
					 $.DialogByZ.Close();
				}
			});
		}            
      }
   }  
</script>

<style rel="stylesheet" scoped>
    
</style>