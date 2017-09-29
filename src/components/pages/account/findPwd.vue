<template>
 <div>
  <header-div message="找回密码" goback="true"></header-div>
  <div class="fixTop">
	  <div class="registerTable zregisterTable paddingTop">
		<ul class="registerList zregisterList">
		  <li class="radius3">
			  <i class="iconfont gray txt">&#xe616;</i>
			  <input @keyup="onlyNumber" @input="changeInput" name="phoneNumber" type="text" v-model="phoneNumber" class="textArea box_S"  placeholder="请输入手机号码"/> 
		  </li>
		  <li class="zcode box_S" id="imgCode">
             <div class="inner">
				  <i class="iconfont gray txt">&#xe61f;</i>
				  <input @input="changeInput" name="googleKey" type="text" v-model="googleKey" class="textArea box_S" placeholder="请输入图形验证码"/> 
		     </div>
			 <div class="code imgcode radius3 vertical">
			   <img class="img" src="/static/images/zTicket6.jpg" />
			   获取验证码
			 </div>		  
		  </li>
		</ul>
		<div class="sureBtn">
          <div class="errorTip bindTip">{{errorMessage}}</div>
		  <a href="findPwdNew.html" @click.stop.prevent='logins' class="commonBtn radiushalf">下一步</a>
		</div> 
	  </div>	
  </div>
 </div> 
</template>
<script>
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
	         phoneNumber:null,
             googleKey:null,
             errorMessage:'',
             indexVal:null,
             changeIndex:null,
             saveList:[
	             {
			      index:'phoneNumber',
			      mess:'手机号不能为空',
			      arr:this.phoneNumber,
			      type:'phone'
			    },{
			      index:'googleKey',
			      mess:'图形验证码不能为空',
			      arr:this.googleKey,
			    }
		    ]
	        }
	      )
	    },
        methods:{
          ...Query,
          logins: function(event){
            //alert(this.username+":"+this.password)
            if(!this.validates()){
               return
            }
            var that=this;
            this.$http.post('/web/login', {
			    googleKey:this.googleKey,
			    userName:this.username
			  })
			  .then(function (response) {
			    if(response.data.code==='200'){
                   that.success(response.data.msg)
                   store.commit("LOGIN",{
                      token:response.data.token,
                      admin_id:response.data.data.admin_id
                   })
                   console.log(that.$route)
                    //that.$router.push('/index')
                    that.$router.push({ path: '/index' })
			    }else{
			       that.fail(response.data.msg);
			    }
			    console.log(response);
			    
			  })
			  .catch(function (error) {
			    that.message(error);
			  });
          }
        }
	}
</script>
<style scoped>
    
</style>
