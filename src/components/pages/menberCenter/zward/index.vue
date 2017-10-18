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
   import {drawArd} from './zward'
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
                    var newArr=[
					            {title:"1%加息券",url:"zWardS3.png",type:"yes"},
					            {title:"30元多多金",url:"zWardS6.png",type:"yes"},
					            {title:"谢谢参与",url:"zWardS8.png",type:"no"},
					            {title:"50元多多金",url:"zWardS7.png",type:"yes"},
					            {title:"0.8%加息券",url:"zWardS2.png",type:"yes"},
					            {title:"20元多多金",url:"zWardS5.png",type:"yes"},
					            {title:"0.5%加息券",url:"zWardS1.png",type:"yes"},
					            {title:"10元多多金",url:"zWardS4.png",type:"yes"}   
					        ];
					$(function(){
					   var allW=(document.body.clientWidth|| document.documentElement.clientWidth);
					   var w=allW*0.96/3;
					   var padW=parseInt(0.03*w);
					   var innerW=w-padW*2;
					   console.log(w+":"+padW+":"+innerW)
					   console.log($("#zWardcontainer").length)
					   $("#zWardcontainer").luckDraw({
					        cwidth:w, //宽
					        cheight:w,
					        padc:padW,
					        Arrays:newArr,
					        times:5,   //次数  抽奖次数  积分/20
					        drawArd:drawArd,
					   })
					})
					$("body").find(".lotteryBtn").click(function(){
		                  $(this).parents(".lotteryDialogs").hide();
		                  $(".bgfix").hide();
		                  //恢复未选中状态
		                  $(".zwardList").find("li").removeClass("cur");
		                  if($("body").find("#timesWard").text()<=0){
		                     $.DialogByZ.Alert({Title: "提示", Content: "您当前积分不足，快去赚取积分吧！",BtnL:"知道了"}); 
		                  }else{
		                     $.DialogByZ.Alert({Title: "提示", Content: "再抽一次将消耗您20积分",BtnL:"知道了"});
		                  }
		                  
		                  return false;
		              })

		             $("body").on("click",".lotteryClose", function() {
		                  $(this).parents(".lotteryDialogs").hide();
		                  $(".bgfix").hide();
		             });
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
					   drawArd(newArr,datas) 
					})
				     drawArd(newArr,1,1) 
			   })

             })
          },          
      }
   }
</script>

<style rel="stylesheet" scoped>
 @import './zward.css'
</style>