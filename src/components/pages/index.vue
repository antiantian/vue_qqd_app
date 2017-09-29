<template>
  <div>
     <header-div message="钱趣多" :rightCon="showRight"></header-div>
     <div class="middleContent fixTop  fixBottom">
			<div class="banner">
				<!-- Swiper -->
				<div class="swiper-container" id="baberIndex">
					<div class="swiper-wrapper">
						<div class="swiper-slide"><a  href="zBannerTicket.html"><img src="/static/images/banner0.jpg"/></a></div>
						<div class="swiper-slide"><a href="zBannerInterest.html"><img src="/static/images/banner2.jpg"/></a></div>
		                <div class="swiper-slide"><a  href="zbannerTip.html"><img src="/static/images/banner3.jpg"/></a></div>
						<div class="swiper-slide"><a href="newTask.html"><img src="/static/images/banner4.jpg" /></a></div>
					</div>
					<!-- Add Pagination -->
					<div class="swiper-pagination"></div>
				</div>
			</div>
			<!-- Swiper JS -->
			<div class="mid_con noticeTip" style="width:92%; height:2.5em;">
	         <div class="swiper-container" id="noticeIndex">
				<div class="swiper-wrapper">
					<div class="swiper-slide" v-for="item in dataNotice">
		                  <div class="inner" >
			                   <p>
			                     <router-link :to="'/frontColumnDetail?id='+item.id+'&column=notice'">
			                        {{item.title}}
			                     </router-link>   
			                   </p>
		                  </div>
	                </div>
	            </div>
	         </div>
	     </div>
	     <div class="indexBottom">
				<table class="indexTitle mid_con" border="0" width="100%" cellpadding="0" cellspacing="0">
					<tr>
						<td width="33.6%">
							<router-link to="zBannerThird">
								<img src="/static/images/bthirdIcon.png">
								<span>第三方资金托管</span>
							</router-link>
						</td>
						<td width="34.8%">
							<router-link to="/zBannerBank">
								<img src="/static/images/bankIcon.png">
								<span>标的资产银行托管</span>
							</router-link>
						</td>
						<td>
							<router-link to="/find">
								<img src="/static/images/bInvstIcon.png">
								<span>关于我们</span>
							</router-link>
						</td>
					</tr>
				</table>
		 </div>
		 <div class="newUser">
			<router-link to="/register"><img src="/static/h5/common/images/new.png" />
				<img class="qiang" src="/static/h5/common/images/qiang.png" />
				<img class="coin" src="/static/h5/common/images/coin.png" />
			</router-link>
		</div>
		<div class="surePass">
		<router-link to="zNewGuide" class="newGuideIndex"><img src="/static/h5/common/images/znewGuideIcon.png" /></router-link>
		<div class="tabSelect tabTitle clearfix">
			<p class="tabIn cur" dataOption="0" id="canvasOnep">
				<span>企票融-20170921-01</span>
			</p>
		</div>
		<img style="display:none" id="imgFire" src="/static/h5/common/images/fire.png" />
		<div id="surePassInner">
			<div class="IndexInner">
				<div class="chart">
					<canvas class="circleRun" id="canvasOne" amout="486055.00" nowData="352596.00"></canvas>
						
					<div class="anyield">
						<p>
							<span>8.80</span>
							<span>%</span>
							
						</p>
						<p>历史年化收益率</p>
					</div>
				</div>
				<div class="dataLine clearfix">
					<p class="item deadLine">
					<span>119天</span>
					<i>项目期限</i></p>
					<p class="item availCount">
					<span>486055.00元</span>
					<i>项目金额</i></p>
				</div>
				
				<a href="/investDetail?borrowId=230" class="commonBtn immediateInvest radiushalf">立即投资</a>
				
				
				
			</div>
		</div>
	</div>
	     <p>用户名:{{admin_id}}{{admin}} {{store_admin2}}</p>
	     <button @click.stop.prevent='logout'>退出</button>
     </div>
  </div>
</template>

<script>
    import store from '../../store'
    import headerDiv from '../common/HeaderDiv'
    import runCircle from '../../assets/runCircle'
	export default {
	    components:{
	      headerDiv 
	    },
	    data(){
	      return(
	        {
	          admin:localStorage.getItem("LOGIN_TOKEN")&&JSON.parse(localStorage.getItem("LOGIN_TOKEN")).admin_id,
	          store_admin2:store.state.admin_id,
	          dataNotice:[
                  {
                    title:'关于钱趣多老系统延长续关于钱趣多老系统延长续投的公告投的公告',
                    id:'1'
                  },
                  {
                    title:'关于钱趣多老系统延长关于钱趣多老系统延长续投的公告关于钱趣多老系统延长续投的公告续投的公告',
                    id:'2'
                  },
                  {
                    title:'关于钱趣多老系统延关于钱趣多老系统延长续投的公告续投的公告',
                    id:'3'
                  },
                  {
                    title:'长关于钱趣多老系统延长续投的公告关于钱趣多老系统延关',
                    id:'4'
                  }
	          ]
	        }
	      )
	    },
	   computed: {
	        admin_id () {
	          return localStorage.getItem("LOGIN_TOKEN")&&JSON.parse(localStorage.getItem("LOGIN_TOKEN")).admin_id
	        },
		    store_admin:function(){
		       return store.state.admin_id
		    },
		    showRight:function(){
		      return this.admin?false:true
		    }
      },
       mounted(){
          this.bannerSlide();
       },
	   methods:{
          logout: function(event){
            store.commit("LOGOUT")
            this.$router.push({ path: '/login' })
          },
          bannerSlide:function(){
             this.$nextTick(function() {
                       $(function(){
							var r=750/320;
							var w=document.body.clientWidth||document.documentElement.clientWidth;
							var newW=w/r;
							//var banerH= $(".banner").find("img").height();
							$(".banner").css("height",newW+"px")
							var swiper = new Swiper('#baberIndex', {
								pagination: '.swiper-pagination',
								grabCursor: true,
								paginationClickable: true,
								autoplay : 3000,
								loop: true
							});

							var swiper = new Swiper('#noticeIndex', {
								mode : 'vertical',
								autoplay : 2000,
								loop: true
							});
						})
						$(function(){
							var findCanvas=$("#canvasOne");
							var percents=findCanvas.attr('nowData')/findCanvas.attr('amout');
						
							runCircle('canvasOne',percents);
							
						})
             })
          }
        } 
	}
</script>
<style scoped>
      #noticeIndex .swiper-slide{ 
        font-size:1em;
      }
	  #noticeIndex  .swiper-slide .inner p{ 
	    line-height:2.5em; 
	    overflow:hidden; 
	    height:2.5em;
	  }
	  #noticeIndex  .swiper-slide .inner{ 
	    width:100%; 
	    text-align:left;
	  }
</style>