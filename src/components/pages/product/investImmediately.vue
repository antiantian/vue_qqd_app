<template>
    <div>
	  <header-div message="立即投资" :path="'/investDetail?borrowNo='+orderNo"></header-div>
	  <div class="fixTop fixInvestBottom">                                   
	     <ul class="registerList investImlist border10">
				  <li>
					  <span class="txt">账户余额</span>
					  <input type="text" class="textArea box_S" v-model="balance"  id="balance" readonly >
				  </li>
				  <li>
					  <span class="txt">可投金额</span>
					  <input type="text" class="textArea box_S black" readonly v-model="canInvest" >
				  </li>
			</ul>
			<ul class="registerList investImlist buyCash">
				  <li>
					  <span class="txt">购买金额</span>
					  <input type="text" @input="changeMoney" name="InvestMoney" v-model="InvestMoney" class="textArea box_S" id="InvestMoney" placeholder="100.00元起投(投资金额为整数)" >
				  </li>
				  <li>
					  <span class="txt">优惠券</span><i class="tip" id="couponSel">{{ddj?'使用'+ddj+'元多多金':jxj?'使用'+jxj+'%加息券':'未使用优惠券'}}</i>
	                  <div @click="selTicket" class="selectRight couponSeltext">{{(jxj||ddj)?'修改':'选择'}}</div>
				  </li>
		    </ul>
		    <p class="returnTip">{{ddj?ddjTxt:jxj?jxjTxt:''}}</p>
		    <ul class="registerList investImlist interest">
				  <li>
					  <span class="txt">预期收益(元)</span>
					  <input type="text" class="textArea box_S" readonly v-model="Profit">
					  <input type="text" class="textArea box_S" id="jxjProfit" v-show="this.jxjfit?true:false" v-model="jxjProfit"> 
				  </li>
			</ul>
			
			<div class="investButtonFix">
				<div class="commonBtn  objectBtn radiushalf" @click="investNow">立即投资</div>
				<div class="investTip"><p>点击查看<a  @click="tocreditProtocol">《债权转让与受让协议》</a></p></div>
			</div>
	  </div>
	 <!-- 优惠券页面 开始-->
	  <div :class="['couponShadow',{'open':openTickets}]">
		  <div class="couponShadowInner fixTop box_S">
			  <div class="couponTitle">
				  <a href="####"   @click="closeTicket" class="iconfont prePage couponClose">&#xe606;</a>
				  <p>优惠券</p>
				  <i class="navRight navRT couponClear" @click="addTickets(null)">不使用</i>
			  </div>
			  <div class="couponBottom">
				  <a href="newTask.html" class="mid_con couponTip"><i class="iconfont">&#xe608;</i> 如何获取多多金、加息券？</a>
				  <ul class="couponList">
					  <li @click="addTickets('ddj',10)">
						  <div class="listTop clearfix couponC">
							  <div class="couponLeft fl">
								  <p>￥<i class="cash">10</i></p>
								  <span class="mess">多多金</span>
							  </div>
							  <div class="couponRight box_S fr">
								  <p><span>使用条件：</span>单笔投资满1000元，标的期限至少180天</p>
								  <p><span>奖品来源：</span>开通第三方资金存管账户</p>
								  <p><span>有效时间：</span>2016-07-12至2016-08-11</p>
							  </div>
						  </div>
					  </li>
					  <li @click="addTickets('jxj',1)">
						  <div class="listTop clearfix couponC">
							  <div class="couponLeft fl">
								  <p><i class="cash">1</i>%</p>
								  <span class="mess">加息券</span>
							  </div>
							  <div class="couponRight box_S fr">
								  <p><span>使用条件：</span>标的期限至少30天</p>
								  <p><span>奖品来源：</span>活动奖励</p>
								  <p><span>有效时间：</span>2016-07-12至2016-08-11</p>
							  </div>
						  </div>
					  </li>
					  <li>
						  <div class="listTop limitUse clearfix couponC">
							  <div class="couponLeft fl">
								  <p><i  class="cash">1</i>%</p>
								  <span class="mess">加息券</span>
							  </div>
							  <div class="couponRight box_S fr">
								  <p><span>使用条件：</span>标的期限至少30天</p>
								  <p><span>奖品来源：</span>活动奖励</p>
								  <p><span>有效时间：</span>2016-07-12至2016-08-11</p>
							  </div>
						  </div>
						  <div class="limitTip">
							  <div  class="title">不可用原因</div>
							  <div  class="detail">
								  <p>标的期限不满足使用该加息券条件</p>
							  </div>
						  </div>
					  </li>
					  <li>
						  <div class="listTop limitUse clearfix couponC">
							  <div class="couponLeft fl">
								  <p>￥<i class="cash">10</i></p>
								  <span class="mess">多多金</span>
							  </div>
							  <div class="couponRight box_S fr">
								  <p><span>使用条件：</span>单笔投资满1000元，标的期限至少180天</p>
								  <p><span>奖品来源：</span>开通第三方资金存管账户</p>
								  <p><span>有效时间：</span>2016-07-12至2016-08-11</p>
							  </div>
						  </div>
						  <div class="limitTip">
							  <div  class="title">不可用原因</div>
							  <div  class="detail">
								  <p>单笔购买金额≥1000元才能使用</p>
								  <p>标的期限不满足使用该多多金条件</p>
							  </div>
						  </div>
					  </li>
					  <li>
						  <div class="listTop limitUse clearfix couponC">
							  <div class="couponLeft fl">
								  <p>￥<i class="cash">60</i></p>
								  <span class="mess">多多金</span>
							  </div>
							  <div class="couponRight box_S fr">
								  <p><span>使用条件：</span>单笔投资满1000元，标的期限至少180天</p>
								  <p><span>奖品来源：</span>开通第三方资金存管账户</p>
								  <p><span>有效时间：</span>2016-07-12至2016-08-11</p>
							  </div>
						  </div>
						  <div class="limitTip">
							  <div  class="title">不可用原因</div>
							  <div  class="detail">
								  <p>单笔购买金额≥6000元才能使用</p>
								  <p>标的期限不满足使用该多多金条件</p>
							  </div>
						  </div>
					  </li>
				  </ul>
			  </div>
		  </div>
	  </div>
	 <!-- 优惠券页面 结束-->
	</div>   
</template>
<script type="ecmascript-6">
    import apis from '../../../api'
    import store from '../../../store'
    import Query from '../../../assets/Query'
	import headerDiv from '../../common/HeaderDiv'
	import cmove from '../../../assets/cmove'
	var moment= require('moment');
	import '../../../assets/moment-precise-range';
	export default {
	    components:{
	      headerDiv 
	    },
	    data(){
	      return(
	        {
	         openTickets:false,
	         InvestMoney:null,
	         jxj:null,
	         ddj:null,
	         jxjTxt:'加息券收益在项目到期后返现至您账户余额',
	         ddjTxt:'多多金在项目到期后返现至您账户余额',
	         balance:'0.00',
	         borrowId:this.$route.query.borrowId,
	         objectDetail:null,
	         Profit:null,
	         fromPath:null,
	         jxjfit:null
	        }
	      )
	    },   
	    destroyed(){
          //组件移除事件
          $("body").removeClass("f1bg")
        },
	    computed:{
            rate:function(){
               return this.objectDetail?this.objectDetail.rate:null
            },
            orderNo:function(){
              return this.objectDetail?this.objectDetail.orderNo:null
            },
            date:function(){

                return this.objectDetail?this.objectDetail.date:null
            },
            store_admin:function(){
		       return store.state.admin_id
		    },
		    canInvest:function(){
		      return this.objectDetail?(this.objectDetail.amount-this.objectDetail.amouting).toFixed(2):null
		    },
		    InvestMess:function(){
		      return JSON.parse(store.state.InvestMess)
		    },
		    jxjProfit:function(){
		      return '+'+this.jxjfit+'加息劵收益'
		    }
	    },
	    mounted(){
            this.addBg();
            this.investDetail();
            console.log(this.fromPath)
	    },
        methods:{
          getStoreMess:function(){
                var messages=this.InvestMess;
	            if(messages&&(messages.borrowId==this.borrowId)){
	                this.jxj=messages.jxj;
		            this.ddj=messages.ddj;
		            this.InvestMoney=messages.InvestMoney
		            this.calculateProfit();//计算收益
	            }
          },
          investNow:function(){
             if(this.InvestMoney<=0){
                    $.DialogByZ.Alert({Title: "提示", Content: "请输入投资金额!",BtnL:"知道了"})
                    return false
              }
             if(this.InvestMoney<100){
                    $.DialogByZ.Alert({Title: "提示", Content: "最小投资金额不能少于100元!",BtnL:"知道了"})
                    return false
              }
             if(this.balance==='0.00'||this.InvestMoney>this.balance){
                  $.DialogByZ.Alert({Title: "提示", Content: "您的余额不足,请前往个人中心充值!",BtnL:"知道了"}) 
                  return false
             }
          },
          addBg:function(){
             this.$nextTick(function(){
                       $(function(){
							//背景颜色
							 $("body").addClass("f1bg")
					    })
			 })		    		 
          },
          changeMoney:function(e){
              var vals=e.target.value;
              var name=e.target.name;
              vals=vals.replace(/[^\d]/g,'');
              this[name]=vals;
              this.calculateProfit();//计算收益
          },
          calculateProfit:function(){
              //计算收益
              var rates=this.rate;
              var mores=0;
              if(this.ddj){
                 mores=this.ddj;
              }
              if(this.jxj){
                 this.jxjfit=((this.InvestMoney*this.jxj*this.date)/(36000)).toFixed(4);
              }else{
                 this.jxjfit=null
              }
              this.Profit=((this.InvestMoney*rates*this.date)/(36000)).toFixed(4);
          },
          addTickets:function(type,val){
            if(type&&type=='ddj'){
               this.ddj=val;
               this.jxj=null;
            }
            if(type&&type=='jxj'){
               this.jxj=val;
               this.ddj=null;
            }
            if(!type){
               this.jxj=null;
               this.ddj=null;
            }
            this.closeTicket();
            this.calculateProfit();//计算收益
          },
          selTicket:function(){
              if(!this.InvestMoney){
                $.DialogByZ.Alert({Title: "提示", Content: "请输入投资金额!",BtnL:"知道了"})
              }
              if(this.InvestMoney){
                 if(this.InvestMoney<100){
                    $.DialogByZ.Alert({Title: "提示", Content: "最小投资金额不能少于100元!",BtnL:"知道了"})
                 }else{
	                 this.openTickets=true
	             } 
              }
          },
          closeTicket:function(){
              this.openTickets=false
          },
          investDetail: function(){
            var that=this;
            let params = {
                api: apis.investDetail,
                param: {
                	borrowId:this.borrowId
                }
            };
            this.api.post(params)
			  .then(function (response) {
			    
			    if(response.data.code==='200'){

                   that.success(response.data.msg)
                   that.objectDetail=response.data.data   
                   that.getStoreMess();
			    }else{
			       that.fail(response.data.msg);
			    } 
			  })
			  .catch(function (error) {
			    that.message(error);
			  });
          },
          tocreditProtocol:function(){
             var obj={
                jxj:this.jxj,
                ddj:this.ddj,
                InvestMoney:this.InvestMoney,
                borrowId:this.borrowId 
             }
             store.commit("InvestMess",JSON.stringify(obj))
             this.$router.push({
               path:'/creditProtocol'
             })
          }
        }
	}
</script>

<style rel="stylesheet" scoped>
      .active{
         display:block;
      }
</style>