<template>
<div>
  <header-div message="公司动态" path="/find"></header-div>
  <div class="fixTop fixTopDynamic">
	  <div class="tabParent dymicTop">
		<a href="CompanyDynamics.html" class="tabChild box_S cur">公司公告</a>
		<a href="CmediaCoverage.html" class="tabChild box_S">媒体报道</a>
		<a href="CplatformColumn.html" class="tabChild box_S">平台专栏</a>
	  </div>
	  <div class="dynamic">
          <ul class="announceList">
			 <li>
			    <a href="announcements.html">
					<p><span class="iconfont">&#xe60b;</span>关于钱趣多老系统延长续投的公告</p>
					<i>2016-8-25</i>
			    </a>
			 </li>
			  <li>
				  <a href="announcements.html">
					  <p><span class="iconfont">&#xe60b;</span>关于钱趣多老系统延长续投的公告</p>
					  <i>2016-8-25</i>
				  </a>
			  </li>
			  <li>
				  <a href="announcements.html">
					  <p><span class="iconfont">&#xe60b;</span>关于钱趣多老系统延长续投的公告</p>
					  <i>2016-8-25</i>
				  </a>
			  </li>
          </ul>
	  </div>
  </div>
</div>  
</template>
<script>
   import store from '../../../store'
   import headerDiv from '../../common/HeaderDiv'
   export default {
     components:{
	      headerDiv 
	  },
      computed: {
	        titles () {
	          return store.state.title
	        },
	  },      
      mounted(){
         this.setTitle();
      },
      destroyed(){
          //组件移除事件
          $("body").removeClass("f1bg")
      },
      methods:{
          setTitle:function(){
             store.commit('TITLE','公司动态');
             this.$nextTick(function(){
                       $(function(){
                           var mySwiper = new Swiper ('.swiper-container', {
								loop: false,
								slidesPerView:4,
								grabCursor: true
							})
							//点击切换
							$(".usTitle").find('.tabc').click(function(){
								$(this).addClass('on');
								$(this).parents(".swiper-slide").siblings('.swiper-slide').find('.tabc').removeClass('on');
								var idc=$(this).attr('tip');
								$("#"+idc).show().siblings('.aboutInner').hide();
							})
                       })
             })  
          },          
      }
   }
</script>