<template>
<div>
  <header-div message="关于我们" path="/"></header-div>
  <div class="fixTop fixBottom">
	  <ul class="centerBlock commonQuest clearfix">
		  <li class="noBorderR fl box_S">
			  <router-link to="companyDynamics">
				  <span class="iconfont blue"></span>
				  <p>公司动态</p>
			  </router-link>
		  </li>
		  <li class="fl box_S">
			  <router-link to="zAboutUs">
				  <span class="iconfont pink"></span>
				  <p>关于我们</p>
			  </router-link>
		  </li>
		  <li class="fl box_S">
			  <router-link to="zAsecurity">
				  <span class="iconfont green"></span>
				  <p>安全保障</p>
			  </router-link>
		  </li>
		  <li class="noBorderR fl box_S">
			  <router-link to="helpCenter">
				  <span class="iconfont red"></span>
				  <p>帮助中心</p>
			  </router-link>
		  </li>
		  <li class="fl box_S">
			  <router-link to="cTariff">
				  <span class="iconfont yellow"></span>
				  <p>资费管理</p>
			  </router-link>
		  </li>
		  <li class="fl box_S">
			  <router-link to="customerService">
				  <span class="iconfont blueo"></span>
				  <p>客户服务</p>
			  </router-link>
		  </li>
	  </ul>
	   <div class="cpmid" style="display: none;">
		  <div class="questionTitle hotActivity"><i class="iconfont orangered"></i> 热门活动</div>
		  <ul class="activityList activeZlist">
			<!--   <li><router-link to="#"><img src="static/h5/common/images/zactive1.png"/> </router-link></li> -->

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
             store.commit('TITLE','关于我们');
             this.$nextTick(function(){
                       $(function(){
                           $("body").addClass("f1bg")
                       })
             })  
          },          
      }
   }
</script>
<style scoped>
		ul.centerExperience p{ font-size: 1em;}
		ul.centerExperience p.pTime{ width: 15%;padding: 0; line-height: 3.833333333333333;}
		ul.centerExperience p.pRatio{width: 40%;text-align: center; }
		ul.centerExperience p.pResource{width:45%; text-align: right;padding-right: 3%;}
		.centerExperienceTitle{ padding:0; width: 100%;}
		.centerExperienceTitle p.pTime{ width:30%; padding-left: 4%; text-align: left;}
		.centerExperienceTitle p.pRatio{ width:20%;}
		.centerExperienceTitle p.pResource{ width:42%; padding-right: 4%; text-align: center;}
	</style>