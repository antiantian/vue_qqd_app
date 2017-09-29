<template>
 <div>
  <header-div message="公司公告" goback="true"></header-div>
  <div class="fixTop">
	   <div class="mid_con filmAnnounce">
		  <p class="title">
		  	<span>汇付天下交易系统公告</span><br>
		    <span>2017-09-15</span>
		  </p>
		  <p>尊敬的钱趣多用户：</p><p>&nbsp;</p><p>为了更好的提升用户体验，扩大银行覆盖面，我司快捷充值业务将于今日起支持上海银行卡充值服务，限额信息可通过钱趣多</p><p><br></p><p>官网-帮助中心-充值-快捷充值限额 信息查询接口实时获取，感谢您对我司工作的理解和支持！</p><p><br></p><p>如有任何疑问请联系客服人员，或拨打400-656-8877服务热线，感谢您对钱趣多平台一如既往的关注与支持！</p><p><br></p><p>上海钱橙互联网金融信息服务有限公司<br></p><p>2017年9月15日</p>
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
