<template>
  <header>
     <router-link :to="path"  v-if="path" class="iconfont prePage">&#xe606;</router-link>
     <a href='javascript:history.go(-1);' v-if="goback" class="iconfont prePage">&#xe606;</a>
     <p>{{message}}</p>
     <router-link to="/login" v-if="rightCon" class="iconfont navRight nologin">&#xe65a;</router-link>
     <i class="iconfont navRight headPhone nologin" v-if="headPhone">&#xe60c;</i>
     <i class="navRight navRT today" v-if="rightToday">今天</i>
     <span class="navRight navRT rulesBtn" v-if="rulesBtn">规则</span>
   </header>
</template>
<script>
import {DialogByZ} from '../../assets/dialog';
export default {
        name:'headerDiv',
	    components:{
        
	    },
		mounted () {
			 this.clicktoggle();
			// console.log(this.rightCon)
			 this.phone();
		},
	    methods: {
	       clicktoggle:function(){
	         //console.log(111)
	         //console.log(this.$root)
	       },
	       fetchDate:function(){
	         //console.log('change')
	         //console.log(this.$route)
	       },
	       phone:function(){
	         this.$nextTick(function(){
	            $(function(){
	               //拨打电话
					  $(".headPhone").click(function(){
						  //var number=$(".headPhone").attr('phone')
               
						  DialogByZ.Confirm({Title: "钱趣多客服热线", Content: "400-656-8877",BtnL:"不了",BtnR:"拨打",FunR:callSure});
						  $("body").find(".zbox-popup-button").css({"color":"#fa5527","pointer-events": "none;"})
						  $("body").find(".zbox-popup-button.R").html('<a href="tel:13385815107" style="color:#fa5527">拨打</a>')
						  function callSure(){
							  $.DialogByZ.Close();
					       }
					  })
	            })
	         })
	       }
	    },
	    created() {
	     // 组件创建完后获取数据，
	     // 此时 data 已经被 observed 了
	     this.fetchDate();
	    },
	    watch: {
	     // 如果路由有变化，会再次执行该方法
	     "$route": "fetchDate"
	    },
	    props:['message','path','rightCon','goback','headPhone','rulesBtn','rightToday']
}
</script>

<style>
</style>
