<template>
   <div>
   	  <header-div message="多多金" path="/userAccount/accountCenter" rulesBtn="true"></header-div>
   	  <div class="fixTop fixTopDynamic">
		  <div class="tabParent dymicTop couponsTitle">
			  <a class="tabChild box_S cur">未使用</a>
			  <a class="tabChild box_S">已使用</a>
			  <a class="tabChild box_S">已过期</a>
		  </div>
	      <div id="nouse" class="couponContent">
			  <div class="useNumber">
			  <a class="rig" href="/investlist">去使用</a> 可使用多多金：<span>110.00</span>元</div>
			  <ul class="couponList">
				  <li>
					  <div class="listTop clearfix">
						  <div class="couponLeft fl">
							  <p>￥<i>50.00</i></p>	
							  <span>多多金</span>
						  </div>
						  <div class="couponRight box_S fr">
							  <p><span>使用条件：</span>
							  <a>单笔投资满 15000.00元,标的期限至少0天</a>
							  </p>
							  
							  <p><span>奖品来源：</span>
							  	<a>抽奖所得</a>
							  	
							  </p>
							  <p><span>有效时间：</span><a>2017-07-29</a>
							  <a>至2018-01-25</a></p>
						  </div>
					  </div>
				  </li>
				  <li v-for="item in datalist">

				  </li>
				  <li v-for="value in datalist" >
				      <div class="listTop clearfix" v-if="value.use==0">
				        <div class="couponLeft fl" v-if="value.type==='ddj'">
				          <p>￥<i>{{value.mount}}</i></p>
				          <span>多多金</span>
				        </div>
				        <div class="couponLeft fl" v-if="value.type==='jxj'">
				          <p><i>{{value.mount}}</i>%</p>
				          <span>加息券</span>
				        </div>							        
				        <div class="couponRight box_S fr">
				          <div class="title" v-if="value.type==='ddj'">{{value.mount}}元多多金</div>
				          <div class="title" v-if="value.type==='jxj'">{{value.mount}}%加息券</div>
				          <p v-if="value.indition"><span>使用条件：</span>投资满{{value.indition}}元</p>
				          <p><span>兑换时间：</span>{{value.changeTime}}</p>
				          <p><span>有效时间：</span>{{value.changeTime}}至{{value.dateTime}}</p>
				         </div>
				      </div>
				  </li>
			  </ul>
			  <ul class="couponList">
				  <li>
					  <div class="listTop clearfix">
						  <div class="couponLeft fl">
							  <p>￥<i>60.00</i></p>	
							  <span>多多金</span>
						  </div>
						  <div class="couponRight box_S fr">
							  <p><span>使用条件：</span>
							  <a>单笔投资满 20000.00元,标的期限至少120天</a>
							  </p>
							  
							  <p><span>奖品来源：</span>
							  	<a>会员等级升级至[2]级赠送</a>
							  	
							  </p>
							  <p><span>有效时间：</span><a>2017-10-13</a>
							  <a>至2017-11-12</a></p>
						  </div>
					  </div>
				  </li>
			  </ul>
			  
	      </div>
		  <div id="limituse" class="couponContent" style="display: none;">
			  
			  <div class="couponList">
				    <div class="noMess vertical box_S paddingCl">
		              	<div class="divInner">
							  <img class="noRecordImg" src="/static/images/noplan.png" />
							  <p>暂无数据</p>
					  	</div>
		     		</div>
			  </div>
		  </div>
		  <div class="couponContent" id="haduse" style="display: none">
			  <ul class="couponList">
				  <li class="used">
					  <div class="listTop clearfix">
						  <div class="couponLeft fl">
							  <p>￥<i>20.00</i></p>	
							  <span>多多金</span>
						  </div>
						  <div class="couponRight box_S fr">
							  <p><span>使用条件：</span>单笔投资满<a>6000.00</a>元，标的期限至少
							  	<a>0</a>天</p>
							  <p><span>奖品来源：</span>
							  	<a>抽奖所得</a>
							  </p>
							  <p><span>有效时间：</span><a>2017-04-07</a>
							  <a>至2017-10-04</a></p>
						  </div>
					  </div>
				  </li>
			  </ul>
			  
		  </div>
	  </div>
	  <!---多多金使用规则-->
	  <div class="rulesCon">
		  <div class="closeRules"></div>
		  <h3>使用规则</h3>
	       <p>1、多多金为钱趣多平台现金红包，可在投标时使用。</p>
	       <p>2、多多金在项目到期回款之后自动返现至投资会员的上海银行存管账户。</p>
	       <p>3、注册和升级的赠送的多多金有效期为30天，抽奖所得和积分兑换所得的多多金有效期为180天。</p>
	       <p>4、多多金不可分拆使用，不可转让，不可叠加使用</p>
	  </div>
   </div> 
</template>

<script type="ecmascript-6">
   import headerDiv from '../../../common/HeaderDiv'
   import {loadData} from  './pull'
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
	     this.loadData=loadData;
	   },       
      mounted(){
          this.dataHad();
          this.$nextTick(function(){
              this.loadData();  //初始化
          })
      },
      destroyed(){

      },
      methods:{
          dataHad:function(){
             this.$store.commit('TITLE','多多金');  
             this.$nextTick(function(){
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