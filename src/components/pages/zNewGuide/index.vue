<template>
    <div>
	   <header-div message="新手指引" path="/"></header-div>
	   <div class="fixTop">
	     <div class="newGuide">
	         <div class="box">
	            <div class="title">第一关</div>
	             <p class="detail">注册即送<span>20积分</span></p>
	             <img class="img" src="/static/h5/common/images/zGuide1.jpg" />
	             <a class="commonBtn radiushalf" v-if="store_admin" style="background: #999999">已注册</a>
	             <router-link class="commonBtn radiushalf" v-else to="/register">立即注册</router-link>
	          </div>
	          <div class="box">
	            <div class="title">第二关</div>
	             <p class="detail">实名认证，开通存管户即送<span>20积分</span></p>
	             <img class="img" src="/static/h5/common/images/zGuide2.jpg" />
	              <a class="commonBtn radiushalf" v-if="store_admin&&DepositoryAccount" style="background: #999999">已开通</a>
	              <router-link class="commonBtn radiushalf" v-else-if="store_admin" to="/openDepository">开通存管账户</router-link>
	              <router-link class="commonBtn radiushalf" v-else to="/register">开通存管账户</router-link>
	          </div>
	          <div class="box">
	            <div class="title">第三关</div>
	             <p class="detail">立即充值，资金银行存管流向清晰</p>
	             <img class="img" src="/static/h5/common/images/zGuide3.jpg" />
	             <router-link class="commonBtn radiushalf" v-if="store_admin" to="/userAccount/queryCz">立即充值</router-link>
	             <router-link class="commonBtn radiushalf" v-else to="/login">立即充值</router-link>
	          </div>
	          <div class="box">
	            <div class="title">第四关</div>
	             <p class="detail">点击我要投资，选择合适项目，坐等收钱首次投资即可获得双倍积分</p>
	             <img class="img" src="/static/h5/common/images/zGuide4.jpg" />
	             <router-link class="commonBtn radiushalf" to="/investlist">我要投资</router-link>
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
	  computed: {
		    store_admin:function(){
		       return store.state.admin_id
		    },
		    DepositoryAccount:function(){
		       return store.state.DepositoryAccount
		    },
      },     
      mounted(){
         this.setTitle();
      },
      destroyed(){
      },
      methods:{
          setTitle:function(){
             store.commit('TITLE','新手指引');  
          },          
      }
   }
</script>

<style rel="stylesheet" scoped>
    
</style>