<template>
   <div>
   	  <header-div message="加息券" path="/userAccount/accountCenter" rulesBtn="true"></header-div>
   	  <div class="fixTop fixTopDynamic">
		  <div class="tabParent dymicTop couponsTitle">
			  <a class="tabChild box_S cur">未使用</a>
			  <a class="tabChild box_S">已使用</a>
			  <a class="tabChild box_S">已过期</a>
		  </div>
		  <div id="nouse" class="couponContent">
			  <div class="useNumber">
			  <a class="rig" href="/investlist">去使用</a> 可用加息券：
			  	<span>3</span>张</div>
			  <ul class="couponList">
				  <li>
					  <div class="listTop clearfix">
						  <div class="couponLeft fl">
							  <p><i>0.80</i>%</p>
							  <span>加息券</span>
						  </div>
						  <div class="couponRight box_S fr">
							  <p><span>使用条件：</span>标的期限至少<a>0</a>天</p>
							  <p><span>奖品来源：</span>
							  <a>抽奖所得</a></p>
							  <p><span>有效时间：</span>
							  <a>2017-07-29</a>
							  <a>至2018-01-25</a></p>
						  </div>
					  </div>
				  </li>
			  </ul>
			  <ul class="couponList">
				  <li>
					  <div class="listTop clearfix">
						  <div class="couponLeft fl">
							  <p><i>0.80</i>%</p>
							  <span>加息券</span>
						  </div>
						  <div class="couponRight box_S fr">
							  <p><span>使用条件：</span>标的期限至少<a>0</a>天</p>
							  <p><span>奖品来源：</span>
							  <a>会员等级升级至[2]级赠送</a></p>
							  <p><span>有效时间：</span>
							  <a>2017-10-13</a>
							  <a>至2017-11-12</a></p>
						  </div>
					  </div>
				  </li>
			  </ul>
			  <ul class="couponList">
				  <li>
					  <div class="listTop clearfix">
						  <div class="couponLeft fl">
							  <p><i>0.80</i>%</p>
							  <span>加息券</span>
						  </div>
						  <div class="couponRight box_S fr">
							  <p><span>使用条件：</span>标的期限至少<a>0</a>天</p>
							  <p><span>奖品来源：</span>
							  <a>抽奖所得</a></p>
							  <p><span>有效时间：</span>
							  <a>2017-10-16</a>
							  <a>至2018-04-14</a></p>
						  </div>
					  </div>
				  </li>
			  </ul>
			  
		  </div>
		  <div id="limituse" class="couponContent" style="display: none;">
			  <ul class="couponList">
				  <li class="limit">
					  <div class="listTop clearfix">
						  <div class="couponLeft fl">
							  <p><i>0.80</i>%</p>
							  <span>加息券</span>
						  </div>
						  <div class="couponRight box_S fr">
							  <p><span>使用条件：</span>标的期限至少<a>0</a>天</p>
							  <p><span>奖品来源：</span>
							  <a>会员等级升级至[2]级赠送</a></p>
							  <p><span>有效时间：</span>
							  <a>2017-10-13</a>
							  <a>至2017-11-12</a></p>
						  </div>
					  </div>
				  </li>
			  </ul>
			   
		  </div>
		  <div class="couponContent" id="haduse" style="display: none">
			  <ul class="couponList">
				  <li class="used">
					  <div class="listTop clearfix">
						  <div class="couponLeft fl">
							  <p><i>1.50</i>%</p>
							  <span>加息券</span>
						  </div>
						  <div class="couponRight box_S fr">
							  <p><span>使用条件：</span>标的期限至少<a>0</a>天</p>
							  <p><span>奖品来源：</span>
							  <a>老用户活动反馈</a></p>
							  <p><span>有效时间：</span>
							  <a>2016-10-28</a>
							  <a>至2017-01-31</a></p>
						  </div>
					  </div>
				  </li>
			  </ul>
			  <ul class="couponList">
				  <li class="used">
					  <div class="listTop clearfix">
						  <div class="couponLeft fl">
							  <p><i>1.00</i>%</p>
							  <span>加息券</span>
						  </div>
						  <div class="couponRight box_S fr">
							  <p><span>使用条件：</span>标的期限至少<a>0</a>天</p>
							  <p><span>奖品来源：</span>
							  <a>抽奖所得</a></p>
							  <p><span>有效时间：</span>
							  <a>2017-04-27</a>
							  <a>至2017-10-24</a></p>
						  </div>
					  </div>
				  </li>
			  </ul>
			  
		  </div>
	  </div>
	  <!---加息券使用规则-->
	  <div class="rulesCon">
		  <div class="closeRules"></div>
		  <h3>使用规则</h3>
		  <p>1、加息券一次只能使用一张，不可以和多多金同时使用；</p>
	      <p>2、注册和升级赠送加息券的有效期为30天，抽奖所得和积分兑换所得的加息券有效期为180天；</p>
	      <p>3、加息券仅限在钱趣多平台上使用；</p>
	  </div>
   </div> 
</template>

<script type="ecmascript-6">
   import headerDiv from '../../../common/HeaderDiv'
   import {loaded,loadData} from  './pull'
   export default {
     components:{
	      headerDiv 
	  }, 
	  data(){
	     return {
	       datalist:[]
	     }
	  },
	  computed: {
	        title_mess:function(){
	          return this.$store.state.title
	        },
		    store_admin:function(){
		       return this.$store.state.admin_id
		    },
		    DepositoryAccount:function(){
		       return this.$store.state.DepositoryAccount
		    },
      },     
      created(){
	     this.loaded=loaded;
	     this.loadData=loadData;
	   },       
      mounted(){
          this.dataHad();
          this.$nextTick(function(){
              this.loaded();  //初始化 scroll
          })
      },
      destroyed(){

      },
      methods:{
          dataHad:function(){
             this.$store.commit('TITLE','加息券');  
             this.$nextTick(function(){
                 var self=this;
                $(function(){
                    self.loadData(true); //执行事件
                })
                 $(function(){
                  // allOad($(".fixTop"),3);
                   //$(".noCoupon").css({"paddingTop":"7.6em"})
                 })
                 $(function(){ 
                       //areaDefined()
                        $(".rulesBtn").click(function(){
							 $(".rulesCon").addClass('allCon');
						})
						$(".closeRules").click(function(){
							 $(".rulesCon").removeClass('allCon');
						}) 
                 })  
             })
          },            
      }
   }  
</script>

<style rel="stylesheet" scoped>
    
</style>