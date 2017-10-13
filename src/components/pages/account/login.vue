<template>
 <div>
  <header-div message="登录" path="/"></header-div>
  <div class="fixTop">
	  <img class="zlrTop" src="/static/images/ZzLogin.png"/>
	  <div class="registerTable zregisterTable">
		<ul class="registerList zregisterList">
		  <li class="radius3">
			  <i class="iconfont gray txt">&#xe616;</i>
			  <input type="text" @input="changeInput" name="username" v-model="username" class="textArea box_S"  placeholder="请输入手机号码"/> 
		  </li>
		  <li class="radius3">
			  <i class="iconfont gray txt">&#xe685;</i>
			  <input type="text" @input="changeInput" name="password" v-model="password" class="textArea box_S" placeholder="请输入登录密码"/> 
		  </li>
		  <li class="radius3">
			  <i class="iconfont gray txt">&#xe685;</i>
			  <input type="text" @input="changeInput" name="googleKey" v-model="googleKey" class="textArea box_S" placeholder="请输入动态验证码"/> 
		  </li>
		</ul>
		<div class="sureBtn login_Button">
	       <router-link to="/findPassword" class="zforgetPwd">忘记密码</router-link>
		   <div class="errorTip bindTip">{{errorMessage}}</div>
		   <a  @click.stop.prevent='logins' class="commonBtn radiushalf">登录</a>
		</div>
		<p class="zloginR"><router-link to="/register">立即注册</router-link></p>
      </div>
  </div>
 </div> 
</template>

<script>
    import apis from '../../../api'
    import store from '../../../store'
    import Query from '../../../assets/Query'
	import headerDiv from '../../common/HeaderDiv'
	export default {
	    components:{
	      headerDiv 
	    },
	    data(){
	      return(
	        { 
	         fromPath:null, 
	         queryMess:null,
	         username:null,
             password:null, 
             googleKey:null,
             errorMessage:'',
             indexVal:null,
             changeIndex:null,
             saveList:[
	             {
			      index:'username',
			      mess:'手机号不能为空',
			      arr:this.username
			    },{
			      index:'password',
			      mess:'请输入登录密码',
			      arr:this.password,
			    },{
			      index:'googleKey',
			      mess:'请输入动态验证码',
			      arr:this.googleKey,
			    }
		     ]
	        }
	      )
	    },
	    mounted(){
	    // 组件创建完后获取数据，
		     // 此时 data 已经被 observed 了
		     this.fetchDate();
	       console.log(this.$route)
	    },
        methods:{
          ...Query,
          fetchDate:function(){
		         let path=this.$route.path;
		         console.log(this.$route)
		         this.currentPath=path
		       },
          logins: function(event){
            //alert(this.username+":"+this.password)
            if(!this.validates()){
               return
            }
            var that=this;
            let params = {
                api: apis.login,
                param: {
                	customerAccount:this.username,
				    customerPassword:this.password,  
				    clientId:this.googleKey
                }
            };
            this.api.post(params)
			  .then(function (response) {
			    if(response.data.code==='200'){
                   that.success(response.data.msg)
                   store.commit("LOGIN",{
                      token:response.data.token,
                      admin_id:"我是假的"
                   })
                   console.log(that.$route)
                    //that.$router.push('/index')
                    if(that.fromPath==='/investDetail'){
                       that.$router.push({ path: '/investDetail',query:that.queryMess})
                    }else{
                       that.$router.push({ path: '/index' })
                    }
			    }else{
			       that.fail(response.data.msg);
			    }
			    console.log(response);
			    
			  })
			  .catch(function (error) {
			    that.message(error);
			  });
          }
        },
        beforeRouteEnter (to, from, next) {
             console.log(this)
			 
			 next(vm => {
			    // 通过 `vm` 访问组件实例
			     vm.fromPath=from.path;
			     vm.queryMess=from.query;
			  });
		}
	}
</script>
<style scoped>
    
</style>