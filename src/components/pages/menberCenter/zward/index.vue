<template>
    <div>
	   <header-div message="立即抽奖" path="/menberCenter"></header-div>
	   <div class="fixTop">
	       <div class="zDbanner"><img src="static/images/zWARDSbanner.jpg"/></div>
	       <div class="zDcontent container bor15" id="zWardcontainer">
	          <div class="top bor15">
	            <ul class="zwardList">
	                <li></li>
	            </ul>
	          </div>
	         </div>
	        <div class="zDtips">注：每天第1次抽奖免费，之后每次抽奖消耗20积分（不限次数）</div>
		  </div>
		   <!--抽奖弹出层-->
		  <div class="bgfix"></div>
		  <div class="lotteryDialogs">
		     <div class="lotteryC  vertical">
		         <div class="cc">
		            <div class="lotteryDialogsInner">
		                <div class="lotteryDinner"></div>
		                <div class="lotterygGroup clearfix">
		                   <div class="lotteryClose radiushalf box_S">关闭</div>
		                   <div class="lotteryBtn radiushalf box_S">再来一次</div>
		                </div>
		            </div>
		         </div>
		      </div>
		  </div>
	</div>   
</template>

<script type="ecmascript-6">
   import store from '../../../../store'
   import headerDiv from '../../../common/HeaderDiv'
    import '../../../../assets/zwards'
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
             store.commit('TITLE','立即抽奖');  
             this.$nextTick(function(){
                 $(function(){
					$("body").on("click",".begin",function(){
						if($("#times").text()<=0){
						   $(this).attr("clicked","true");
						   return;	
					    }
					   var clicked=$(this).attr("clicked");
					   if(clicked=="true"){
						 return;
					   }
					   $(this).attr("clicked","true");//禁止再次点击
					  datas=Math.floor(Math.random()*5); 
					  $("body").drawArd(datas) 
					})
				  $("body").drawArd(1,1) 
			   })

             })
          },          
      }
   }
</script>

<style rel="stylesheet" scoped>
	.lotteryDialogs,.myWards{ display:none; position:fixed;left:0; top:0; bottom:0; right:0; width:100%; height:100%; z-index:105;}
	.lotteryDialogsInner{ width:88%; margin:0 auto; text-align:center; position:relative;}
	.lotteryDialogsInner img{ display:block; width:100%; margin:0 auto;}
	.lotteryC,.myWardsC{ height:100%;}
	.lotteryC .cc{ text-align:center; width:100%;}
	.lotteryBtn{  display:inline-block; line-height:2.5; color:#ffffff; background:#fa5527;  margin-top:1em; text-align:center; font-size:1.333333333333333em; font-weight:bold;width:8em; margin-left:-4em; position:absolute; left:50%; bottom:1.625em;}
	.wardSucess,.wardFail{ padding-top:12em;  background:url(/static/images/zAPP_S.png) no-repeat center center; background-size:auto 100%; padding-bottom:4.5em;}
	.wardFail{ background:url(/static/images/zAPP_F.png) no-repeat center center; background-size:auto 100%;}
	.wbox p{ color:#f50000; font-size:1.333333333333333em; font-weight:bold; padding:0.7em 10px 1.3em 10px; text-align:center; line-height:2; }
	.wardFail .happy,.wardFail p{ color:#270e65;}
	.wardSucess img{ width:19%; display:block; margin:0 auto;}
	.wardSucess img.card{ width:40%;}
	.wardSucess img.rain{ width:22%;}
	.myWards p{font-size:1.25em; line-height:1.5; padding:1em 0; border-top:1px solid #ffcba8; padding-left:3.2em; background-repeat:no-repeat; background-position:0.2em center; background-size:auto 2.5em; color:#f51748; width:90%; margin:0 auto;}
	.myWards .con{ width:86%; margin:0 auto; padding:0.3em;
	background:#fffae5; 
	background: -webkit-linear-gradient(45deg,#39fead, #49dbe8,#9d65fa,#ff4b19,#ffe235); /* Safari 5.1 - 6.0 */
	background: -o-linear-gradient(45deg,#39fead, #49dbe8,#9d65fa,#ff4b19,#ffe235); /* Opera 11.1 - 12.0 */
	background: -moz-linear-gradient(45deg,#39fead, #49dbe8,#9d65fa,#ff4b19,#ffe235); /* Firefox 3.6 - 15 */
	background: linear-gradient(45deg,#39fead, #49dbe8,#9d65fa,#ff4b19,#ffe235); /* 标准的语法 */}
	.myWards .con .list{background:#fffae5 url(/static/images/elenderbg2.png) no-repeat right bottom; background-size:30% auto; padding:6em 0 3em 0; }
	.imgTop{ padding-top:4.333333333333333em; position:relative; width:100%;}
	.imgTop .imgs{ position:absolute; height:10em; top:0; width:100%;}
	.imgTop .imgs img{ height:100%; width:auto; display:block; margin:0 auto;}
	.mywardsClose{ background:url(/static/images/elevenclose.png) no-repeat 0 0;background-size:100% 100%; width:2.5em; height:2.5em; position:absolute; right:1em; top:5em; z-index:105;}
	.myWards .con,.lotteryDialogsInner{ max-width:300px;}
	.mywardsClose{ background:url(/static/images/elevenclose.png) no-repeat 0 0;background-size:100% 100%; width:2.5em; height:2.5em; position:absolute; right:1em; top:5em; z-index:105;}
	.myWards .con,.lotteryDialogsInner{ max-width:328px;}
	.bgfix { opacity:0.8;-moz-opacity:0.8;}
	.innerTweBottom{ background:#3f057d; 
	background: -webkit-linear-gradient(to bottom,#3f057d,#350677,#2c0771); /* Safari 5.1 - 6.0 */
	background: -o-linear-gradient(to bottom,#3f057d,#350677,#2c0771); /* Opera 11.1 - 12.0 */
	background: -moz-linear-gradient(to bottom,#3f057d,#350677,#2c0771); /* Firefox 3.6 - 15 */
	background: linear-gradient(to bottom,#3f057d,#350677,#2c0771); /* 标准的语法 */}
	.lotteryTime{ line-height:1.875em; padding:0.8em 0.5em 1.4em 0.5em; font-size:1em; text-align:center; color:#ffffff; font-weight:bold; background: url(/static/images/zAPP_12.png) no-repeat center center; background-size:auto 100%;}
	.lotteryTime span{ color:#f9ff00;}
	.lotterygGroup{ width:14em; margin-left:-7em;font-size:1.333333333333333em;position:absolute; left:50%; bottom:1.625em;}
	.lotterygGroup .lotteryClose{ float:left;display:inline-block; line-height:2.5; color:#ffffff; background:#fa5527;  margin-top:0; text-align:center; font-size:1em; font-weight:bold;width:8em; margin-left:-4em; width:43%; margin:0 2% 0 5%; } 
	.lotterygGroup  .lotteryBtn{  display:inline-block; line-height:2.5; color:#ffffff; background:#fa5527;text-align:center; font-size:1em; font-weight:bold;width:43%; margin:0 5% 0 2%; position:static; }  
</style>