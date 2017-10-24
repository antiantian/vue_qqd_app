<template>
   <div>
      <header-div message="完善信息" path="/userAccount/accoutSet"></header-div>
      <div class="fixTop"> 
		  <div class="perfectCon">
	          <ul class="registerList">
	              <li>
	                  <span class="txt"><i class="iconfont blue">&#xe618;</i> 实名认证</span>
	                  <a class="selectRight adminhad">{{store_admin}}</a>
	              </li>
	              
	              <li>
	                  <span class="txt"><i class="iconfont pink">&#xe616;</i>手机认证</span>
	                  <router-link class="selectRight" to="/userAccount/unbundlingPhone">136****9490</router-link>
	              </li>
	              
	              <li>
	                  <span class="txt"><i class="iconfont green">&#xe615;</i>资金存管账户</span>
	                  <router-link class="selectRight" to="/shyh/escrowAccount">查看</router-link> 
	              </li>
	              <li>
	                  <span class="txt"><i class="iconfont pink">&#xe647;</i>兴趣爱好</span>
	                  <input type="hidden" id="ustomerHobbies" value="旅行,电影,音乐" />
	                  <router-link class="selectRight" id="hobbyLists" to="/userAccount/zHobby">
	                      <span v-for="item in store_hobby" class="radius3">{{item.text}}</span>
	                      <i>{{store_hobby?"修改":"请选择"}}</i>
	                  </router-link> 
	              </li>
	              <li style="display: none;">
	                  <span class="txt"><i class="iconfont yellow">&#xe638;</i>性别</span>
	                  <div class="selectRight noRigArrow" id="sexPerfect">
	                  	<input type="hidden" id="cardNumber" value="232321199110125626" />
	                    <label id="boy" for="pnan"><input type="radio" style="display:none;" checked="checked" name="sex" id="pnan" />男</label>
	                    <label id="girl" for="pnv"><input type="radio" name="sex" style="display:none;" id="pnv" />女</label>
	                  </div>
	              </li>
	              <li style="display: none;">
	                  <span class="txt"><i class="iconfont green">&#xe63a;</i>所在城市</span>
	                  <div class="selectRight noRigArrow" id="cityPerfect">
	                     <input type="text" />省<input type="text" />市
	                     <span class="button">保存</span>
	                  </div>
	              </li>
	          </ul>
		  </div>
	  </div>
   </div>
</template>

<script type="ecmascript-6">
   import headerDiv from '../../../common/HeaderDiv'
   import '../../../../assets/zwards'
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
		    store_admin:function(){
		       return this.$store.state.admin_id
		    },
		    DepositoryAccount:function(){
		       return this.$store.state.DepositoryAccount
		    },
		    store_hobby:function(){
		      return this.$store.state.hobby
		    }
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
             this.$store.commit('TITLE','完善信息');  
             this.$nextTick(function(){
                 $(function(){
                  $("body").addClass("f1bg")
                  // allOad($(".fixTop"),3);
                   //$(".noCoupon").css({"paddingTop":"7.6em"})
                 })
             })
          },            
      }
   }  
</script>

<style rel="stylesheet" scoped>
    .registerList .adminhad::after{
      display:none
    }
</style>