<template>
   <div>
        <header-div message="积分任务" path="/menberCenter"></header-div>
        <input id="customerAppToken" type="hidden" value="" />
		<input id="resource" type="hidden" value="" />
		<div class="middleContent fixTop ">
		    <div class="zMemeberTop">
		       <div class="degree">
		         <img src="/static/images/zMember2.png" />
		         <p id="leveNumber"></p>
		       </div>
		       <div class="ZmemberName">
					<p id="customerName">赵春雨</p>
					<p id="currentMember">当前积分：3349</p>
					<p id="memberLeve">年化投资还差12602.74元就可以升级Q3，快去投资吧！</p>
			   </div>
		       <div class="zdegreeC clearfix">
		          <div class="zd1 box had">
		            <div class="img"></div>
		            <p>Q1</p>
		          </div>
		          <div class="zd2 box had">
		            <div class="img"></div>
		            <p>Q2</p>
		          </div>
		          <div class="zd3 box">
		            <div class="img"></div>
		            <p>Q3</p>
		          </div>
		          <div class="zd4 box">
		            <div class="img"></div>
		            <p>Q4</p>
		          </div>
		          <div class="zd5 box">
		            <div class="img"></div>
		            <p>Q5</p>
		          </div>
		          <div class="zd6 box">
		            <div class="img"></div>
		            <p>Q6</p>
		          </div>
		       </div>
		    </div>
		    <div class="zMemberbottom zItaskbottom">
		      <div class="inner">
		         <ul class="zMlist clearfix">
		           <li class="hadone">
		             <div class="box">
		                 <div class="img">
		                    <img src="/static/images/Ztask1.png" />
		                 </div>
		                 <div class="mess">
		                    <p class="title">完成新用户注册</p>
		                    <p class="info"><i>奖励</i><span class="orange">20</span> <em>积分</em></p>
		                 </div>
		                 <a class="radiushalf box_S immiteC">已完成</a>
		             </div>
		           </li>
		           
		           <li class="hadone">
		             <div class="box">
		                 <div class="img">
		                    <img src="/static/images/Ztask2.png" />
		                 </div>
		                 <div class="mess">
		                    <p class="title">开通存管账户</p>
		                    <p class="info"><i>奖励</i><span class="orange">20</span> <em>积分</em></p>
		                 </div>
		                 <a class="radiushalf box_S immiteC">已完成</a>
		             </div>
		           </li>
		           
		           <li class="hadone">
		             <div class="box">
		                 <div class="img">
		                    <img src="/static/images/Ztask3.png" />
		                 </div>
		                 <div class="mess">
		                    <p class="title">完善个人信息</p>
		                    <p class="info"><i>奖励</i><span class="orange">20</span> <em>积分</em></p>
		                 </div>
		                 <a class="radiushalf box_S immiteC">已完成</a>
		             </div>
		           </li>
		           
		           <li class="hadone">
		             <div class="box">
		                 <div class="img">
		                    <img src="/static/images/Ztask4.png" />
		                 </div>
		                 <div class="mess">
		                    <p class="title">首次投资</p>
		                    <p class="info"><i>奖励</i><span class="orange">双倍</span> <em>双倍投资积分</em></p>
		                 </div>
		                 <a class="radiushalf box_S immiteC">已完成</a>
		             </div>
		           </li>
		           
		           <li id="liId">
		             <div class="box">
		                 <div class="img">
		                    <img src="/static/images/Ztask6.png" />
		                 </div>
		                 <div class="mess">
		                    <p class="title" id="leveNumberLi">继续升级</p>
		                    <p class="info"><i>领取</i><span class="orange">加息券</span> <em>和</em><span class="orange">现金红包</span></p>
		                 </div>
		                 <a class="radiushalf box_S immiteC" href="/investlist">继续升级</a>
		             </div>
		           </li>
		           <li>
		             <div class="box">
		                 <div class="img">
		                    <img src="/static/images/Ztask7.png" />
		                 </div>
		                 <div class="mess">
		                    <p class="title">推荐好友</p>
		                    <p class="info"><em>赚取</em><span class="orange">积分</span></p>
		                 </div>
		                 <a class="radiushalf box_S immiteC" href="/userAccount/zScode">未完成</a>
		                 <p class="seeRULE   rulesBtn">查看规则》</p>
		             </div>
		           </li>
		         </ul>
		      </div>
		    </div>
		</div> 
		<!---体验金使用规则-->
		  <div class="rulesCon">
			    <div class="closeRules"></div>
			    <h3>规则</h3>
		        <p>推荐所得积分=被推荐用户投资的收益*本人的积分等级系数。</p>
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
	  data(){
	     return {
	       codePrize:null
	     }
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
          cashAPrizeBtn:function(){
             if(!this.codePrize){
               $.DialogByZ.Alert({Title: "提示", Content: "请输入兑换编码！",BtnL:"知道了"})
             }
             if(this.codePrize){
               $.DialogByZ.Alert({Title: "提示", Content: "奖品信息不存在！",BtnL:"知道了"})
             }
             
          },
          setTitle:function(){
             store.commit('TITLE','立即抽奖');  
             this.$nextTick(function() {
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