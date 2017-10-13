<template>
    <div>
	  <header-div :message="objectDetail.name" path="/investlist"></header-div>
	  <div class="fixTop fixObjectBottom">
			<div class="objectTop">
				<div class="ratio"><span><i>{{objectDetail.rate}}</i>%+<b>1</b>%</span><p>预期年化收益率</p></div>
				<canvas id="lines" :tip="objectDetail.amouting/objectDetail.amount"></canvas>
		        
			</div>
			<ul class="objtctMessage clearfix">
				<li class="one box_S shouyi">
					<p>{{objectDetail.date}}天<span @click="lawRulesopen" class="investsTip">?</span></p>
					<div class="title">投资周期</div>
				</li>
				<li class="two box_S">
					<p>{{objectDetail.amount}}元</p>
					<div class="title">项目金额</div>
				</li>
				<li class="three box_S">
					<p>{{(objectDetail.amount-objectDetail.amouting).toFixed(2)}}元</p>
					<div class="title">可投金额</div>
				</li>
			</ul>
			<div class="objectDetail">
				<p><i class="iconfont orange">&#xe621;</i>起 投 金 额：{{objectDetail.minMount}}元</p>
				<p><i class="iconfont yellow">&#xe622;</i>还 款 方  式：{{objectDetail.returntype}}</p>
				<p><i class="iconfont green">&#xe61e;</i>项目起息日：{{objectDetail.ratedate}}</p>
				<p><i class="iconfont pink">&#xe61d;</i>预期还款日：{{objectDetail.returndate}}<span @click="investDaysopen"  class="objectTip">?</span></p>
				<p><i class="iconfont blue">&#xe61f;</i>安 全 保 障：{{objectDetail.seicurity}}</p>
				<p><i class="iconfont yellow">&#xe612;</i>募 集 时 间：{{time}}</p>
			</div>
			<div class="objectLink">
				<router-link :to="'/projectDetailsCommon?borrowId='+borrowId"><p class="arrowP"><span class="arrowTop"></span><span class="arrowBot"></span>向上滑动查看详情</p></router-link>
			</div>
			<!-- 状态有  还款中  已还款 已满标   -->
			<div class="objectButton">
				<div class="commonBtn radiushalf objectBtn" v-if="objectDetail.type==0"  @click="investImmediately">立即购买</div>
			</div>
		</div>
		<!--弹出层-->
		<div class="fixbg" v-bind:class="{ active: isActive }"></div>
		<div :class="['lawRules','transitionM','radius3',{'on':lawRuleopen}]">
			<div @click="lawRulesClose" class="closeRules closeLaw"></div>
			<p>据央行《支付结算办法》，承兑银行应在汇票到期日或到期日后的见票当日支付票款。实操中由于承兑行审核因素以及银行间清算的时间差 ，托收资金会在预期还款日T+3工作日内到账。最终回款期限以托收的票据资金实际到账日为准。</p>
		</div>
		<div :class="['investDays','transitionM','radius3',{'on':investDayopen}]">
			<div @click="investDaysClose" class="closeRules closeInvests"></div>
			<p>实际投资天数与各产品起息规则有关</p>
		</div>
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
	         orderNo:this.$route.query.borrowNo,
	         objectDetail:{},
	         time:null,
	         timer:null,
	         lawRuleopen:false,
	         investDayopen:false,
	        }
	      )
	    },   
	    computed:{
            titlename:function(){
               return this.objectDetail?this.objectDetail.name:""
            },
            isActive:function(){

                return (this.investDayopen||this.lawRuleopen)
            },
            store_admin:function(){
		       return store.state.admin_id
		    },
		    borrowId:function(){
		       if(this.$route.query&&this.$route.query.borrowId){
		         return this.$route.query.borrowId
		       }else{
		         return this.objectDetail?this.objectDetail.borrowId:null
		       }  
		    }
	    },
	    mounted(){
   
	       this.investDetail();
	       var that=this;

	       this.timer=setInterval(function(){
				  that.limitime();
			},1000)
		   
	    },
        methods:{
          csmove:function(){
	            var c = 'lines';  
				var percent= this.objectDetail.amouting/this.objectDetail.amount;
				//绘制起点、控制点、终点
				cmove(c,percent)  //canvas id名称 以及总百分比
          },
          lawRulesopen:function(){
              this.lawRuleopen=true;
          }, 
          investDaysopen:function(){
              this.investDayopen=true;
          },
          lawRulesClose:function(){
              this.lawRuleopen=false;
          }, 
          investDaysClose:function(){
              this.investDayopen=false;
          },
          limitime:function(){
               var now=moment(new Date()).format('YYYY-MM-DD HH:mm:ss');
				var nowS=new Date().getTime();
				var limitS=new Date(this.objectDetail.returndate).getTime();
				var m1 = moment(now,'YYYY-MM-DD HH:mm:ss');
				var m2 = moment(this.objectDetail.returndate,'YYYY-MM-DD HH:mm:ss');
				
				var diff = moment.preciseDiff(m1, m2); // '1 month //2 days 3 hours 4 minutes 5 seconds'
				if(nowS>limitS){
			        clearInterval(this.timer)
			        this.time='期限已经到了';
				}else{
				   this.time=diff;
				}
				
				this.time=this.time;
          },
          investDetail: function(){
            var that=this;
            let params = {
                api: apis.investDetail,
                param: {
                	orderNo:this.orderNo,
                	borrowId:this.borrowId
                }
            };
            this.api.post(params)
			  .then(function (response) {
			    
			    if(response.data.code==='200'){

                   that.success(response.data.msg)
                   that.objectDetail=response.data.data
                   that.limitime();
                   that.csmove();	
			    }else{
			       that.fail(response.data.msg);
			    }
			    console.log(response);
			    
			  })
			  .catch(function (error) {
			    that.message(error);
			  });
          },
          investImmediately: function(){
              if(!this.store_admin){
                 this.$router.push({
                         path: '/login',
                         query:{
                            borrowId:this.borrowId,
                            type:'6F4DB650873E7942864FA8D3E99A0F1C',
                         }
                 })
              }else{
                 this.$router.push({
                         path: '/investImmediately',
                         query:{
                            borrowId:this.borrowId,
                            type:'6F4DB650873E7942864FA8D3E99A0F1C',
                         }
                 })
              }
          }  
        }
	}
</script>

<style rel="stylesheet" scoped>
      .active{
         display:block;
      }
</style>
