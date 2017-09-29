<template>
<div>
  <header-div message="注册" path="/"></header-div>
  <div class="fixTop">
      <img class="zlrTop" src="/static/images/ZzRegister.png" />
	  <div class="registerTable zregisterTable">
		<ul class="registerList zregisterList">
		  <li>
			<i class="iconfont gray txt">&#xe616;</i>
			<input type="text" @input="changeInput" name="username" v-model="username" class="textArea box_S" placeholder="请输入手机号码"/>
		  </li>
		  <li class="zcode box_S" id="imgCode">
             <div class="inner">
                <i class="iconfont gray txt">&#xe61f;</i>
			    <input type="text" @input="changeInput" name="imgcode" v-model="imgcode" class="textArea box_S" placeholder="请输入图形验证码"/>
             </div>
			<div class="code imgcode radius3 vertical">
			  <img class="img" src="/static/images/zTicket6.jpg" />
			  获取验证码
			</div>
		  </li>
		  <li  class="zcode box_S">
             <div class="inner">
                <i class="iconfont gray txt">&#xe634;</i>
                <input type="text" @input="changeInput" name="messcode" v-model="messcode" class="textArea box_S" placeholder="请输入短信验证码"/>
             </div>
			<div id="getCode" dataOption="1" class="code radius3">发送</div>
		  </li>
		  <li>
			<i class="iconfont gray txt">&#xe685;</i>
			<input type="password" @input="changeInput" name="password" v-model="password" class="textArea box_S" id="pwdL" placeholder="请输入登录密码"/>
            <input type="text" class="textArea box_S" id="pwdSee"  style="display:none;"/>
            <div class="rightseePWD" Datashow="0">
                <i class="iconfont gray">&#xe6e3;</i>
            </div>
		  </li>
		  <li>
			<i class="iconfont gray txt">&#xe635;</i>
			<input type="text" @input="changeInput" name="selphone" v-model="selphone" class="textArea box_S" placeholder="推荐人手机号（选填）"/>
		  </li>
		</ul>
		<div class="sureBtn">
            <div class="orderTip">
               <p><input type="checkbox"/>我已阅读并同意<a href="###" class="AgreeBTN">《钱趣多注册协议》</a></p>
            </div>
            <div class="errorTip bindTip" style="margin-top: 20px;">{{errorMessage}}</div>
		    <a  @click.stop.prevent='logins' class="commonBtn radiushalf">免费注册</a>
		</div>
        
		<div class="rcon">
		  <p style="text-align:center;">已有帐号？<a href="/login" style="color:#fa5527;">立即登录</a></p>
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
	         username:null,
	         imgcode:null,
	         messcode:null,
	         password:null,
	         selphone:null,
             errorMessage:'',
             indexVal:null,
             changeIndex:null,
             saveList:[
	             {
			      index:'username',
			      mess:'手机号不能为空',
			      arr:this.username,
			      type:'phone'
			    },{
			      index:'imgcode',
			      mess:'请输入图形验证码',
			      arr:this.imgcode,
			    },{
			      index:'messcode',
			      mess:'请输入短信验证码',
			      arr:this.messcode,
			    },{
			      index:'password',
			      mess:'请输入登录密码',
			      arr:this.password,
			    }
		     ]
	        }
	      )
	    },
	    mounted () {
	       this.updateMessage();
	    },
        methods:{
          ...Query,
          logins: function(event){
               if(!this.validates()){
	               return
	           }
               alert(13)
          },
          updateMessage: function () {
              this.message = '更新完成'
              console.log(this.$el.textContent) // => '没有更新'
              this.$nextTick(function() {
                   console.log(this.$el.textContent) // => '更新完成'
					     $("#getCode").click(function(){
						     var opt=$(this).attr('dataOption');
							 var T,count=60;
							 if(opt==1){
							 	  $("#getCode").addClass("blackBg");
							    $("#imgCode").show();
								$(this).attr('dataOption',2);
								$(this).html('剩余 '+count+'s');
								T=setInterval(function(){
								  count--;
								  if(count<0){
								    $("#imgCode").hide();
								    $("#getCode").attr('dataOption',1);
									$("#getCode").html('请输入验证码');
									$("#getCode").removeClass("blackBg")
								    clearInterval(T);
								  }else{
								    $("#getCode").html('剩余 '+count+'s');
								 }
								},1000)
							 }
						  })
				})
            }
        }
	}
</script>
<style scoped>
  
</style>