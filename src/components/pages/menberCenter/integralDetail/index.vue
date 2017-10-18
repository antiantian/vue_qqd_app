<template>
   <div>
      <header-div message="积分明细" path="/menberCenter"></header-div>
      <input id="customerAppToken" type="hidden" value="" />
	  <input id="resource" type="hidden" value="" />
	    <div class="investContent fixTop">
	      <div class="interTop">
	         <div class="inner clearfix">
	            <div class="all box">
	                <img src="/static/images/zScore2.png" />
	                <p>3389.00</p>
	                <span>积分总计</span>
	            </div>
	            <div class="had box">
	               <img src="/static/images/zScore1.png" />
	               <p>3349.00</p>
	               <span>可使用积分</span>
	            </div>
	         </div>
	      </div>
	      <div class="clearfix interCon">
	        <div class="integralTop halfBox box_S clearfix">
	         <div class="inner box_S">
	            <div class="search" @click.stop.prevent="dateShow2" >
	           	  <input type="text" readonly="readonly" class="txt detailSea box_S radius3" v-model="dateText" placeholder="全部" />
	            </div>
	             <div class="sp1"  :style="{display: dateShow?'block':'none'}" ></div>
	            <div class="listIocn righticon headicon">日期:</div>
	            <ul class="headlist joinList boxShadow radius3" tip="headInput1" :style="{display: dateShow?'block':'none'}"  >
	               <li v-for="value,index in datelist"   :class="{on:index==dateIndex}" @click.stop.prevent="changeDate(value,index)">{{value}}</li>
	             </ul>
	         </div>
	         <input type="hidden" id="headInput1" value="" /> 
	      </div>                
	      <div class="integralTop  halfBox  box_S clearfix">
	         <div class="inner box_S">
	            <div class="search" @click.stop.prevent="typeShow2">
	              <input type="text" readonly="readonly" class="txt detailSea box_S radius3" v-model="typeText"  placeholder="全部" /> 
	            </div>
	            <div class="sp1" :style="{display: typeShow?'block':'none'}"></div>
	            <div class="listIocn righticon headicon">方式:</div>
	            <ul class="headlist joinList boxShadow radius3" tip="headInput2" :style="{display: typeShow?'block':'none'}">
	                <li v-for="value,index in typelist"  :class="{on:index==typeIndex}" @click.stop.prevent="changeType(value,index)">{{value}}</li>
	             </ul>
	         </div>
	         <input type="hidden" id="headInput2" value="" /> 
	      </div>
	      </div>
	     <div class="mapContent">
		     <div class="map_container" id="mapContainer"></div>
		     <div id="wrapper" :show="warpper">
		     	<div id="scroller">
			     	<div id="pullDown" >
			             <span class="pullDownIcon"></span><span class="pullDownLabel">下拉刷新</span>
			       	</div>        
				     <ul class="investList intergraList" id="like-list">
                         <li v-for="(value,key,index) in  datalist">
                            <div class="indexs">{{value.key}}</div>
				            <div class="investBlock clearfix">
				                    <div class="investBox investCash">
				                        <span>{{value.date}}</span>
				                        <p>日期</p>
				                    </div>
				                    <div class="investBox investCash">
				                        <span>{{value.username}}</span>
				                        <p>用户名</p>
				                    </div>
				                    <div class="investBox investCash">
				                        <span>{{value.phone}}</span>
				                        <p>手机号码</p>
				                    </div>
				                    <div class="investBox investCash">
				                        <span>{{value.scores}}</span>
				                        <p>积分</p>
				                    </div>
				                    <div class="investBox investCash">
				                        <span>{{value.types}}</span>
				                        <p>方式</p>
				                    </div>
				                    <div class="investBox investCash">
				                        <span>{{value.amount}}</span>
				                        <p>投资金额</p>
				                    </div>
				            </div>
                         </li>
				     </ul>
				     <div id="pullUp" >
				         <span class="pullUpIcon"></span><span class="pullUpLabel">上拉加载更多...</span>
				     </div>
			    </div>
		      </div>
	    </div>
	</div>  
   </div>   
</template>

<script type="ecmascript-6">
   import store from '../../../../store'
   import apis from  '../../../../api'
   import headerDiv from '../../../common/HeaderDiv'
   import '../../../../assets/zwards'
   import {loaded_Intergal,myScroll_Intergal} from  './pull'
   export default {
     components:{
	      headerDiv 
	  }, 
	  data(){
	     return {
	       codePrize:null,
	       pageNum:1,
	       numPerPage:10,
	       order_date:'1',
	       order_type:'1',
           datalist:[],
           more:true,
           datelist:["全部","本月","最近3个月"],
           typelist:["全部","个人投资","邀请好友","个人注册","开通存管","完善信息"],
           typeIndex:0,
           dateIndex:0,
           dateText:'全部',
           typeText:'全部',
           typeShow:false,
           dateShow:false,
           warpper:true,
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
          typeShow2:function(){
             this.typeShow=true
             this.dateShow=false
          },
          dateShow2:function(){
            
             this.dateShow=true
             this.typeShow=false
         
          },
          changeType:function(value,index){
              var model=parseInt(index)+1;
              this.order_type=model;
              this.typeText=value;
              this.typeIndex=index;
              this.pageNum=1;
              this.getInter(true);
              this.typeShow=false;
          },
          changeDate:function(value,index){
              var model=parseInt(index)+1;
              this.order_date=model;
              this.dateText=value;
              this.dateIndex=index;
              this.pageNum=1;
              this.getInter(true);
              this.dateShow=false    
          },
          getInter:function(getall){  
            var that=this;
            let params = {
                api: apis.integralDetail,
                param: {
                	date:this.order_date,
				    type:this.order_type,
				    pageNum:this.pageNum, 
				    numPerPage:this.numPerPage,
				    getall:getall?true:false,// 不追加 是重新获取当前页码的值
                }
            };
            this.api.post(params)
			  .then(function (response) {
			    
			    if(response.data.code==='200'){

                   that.success(response.data.msg)
                   that.datalist=getall?response.data.data:that.datalist.concat( response.data.data); //追加或者替换
                   if(getall){
                       if(response.data.data.length<that.numPerPage*that.pageNum){
	                     that.more=false;
	                     
	                   }else{
	                     that.more=true;
	                   }
                   }else{
                       if(response.data.data.length<that.numPerPage){
	                     that.more=false; 
	                   }else{
	                     that.more=true;
	                   }
                   }
                   that.pageNum+=1;
                   that.$nextTick(function(){
                       myScroll_Intergal.refresh();
                   })
                   if(!that.more){
                       $('.pullUpLabel').text('已无可加载的数据');
                   }
                   //that.waves();
                   $(".noMess").remove();
			    }else if(response.data.code==='201'){

			       that.datalist=getall?response.data.data:that.datalist.concat( response.data.data); //追加或者替换
			       that.fail(response.data.msg);
			       that.more=false;
                   $('.pullUpLabel')[0].innerHTML = '已无可加载的数据';
			       if(getall){		           	
				      // allOad($(".fixTop"),3);
				       noMessage($("#wrapper"),"暂无积分记录");
	                  // $(".noMess").css({"paddingTop":"7.6em"})
			       }
			       that.$nextTick(function(){
                       myScroll_Intergal.refresh();
                   })
			        if(!that.more){
                       $('.pullUpLabel').text('已无可加载的数据');
                   }
			    }else{
			       that.fail(response.data.msg);
			    }
			   // console.log(response);
			    
			  })
			  .catch(function (error) {
			    that.message(error);
			  });
          },
          setTitle:function(){
             store.commit('TITLE','积分明细');  
             this.$nextTick(function() {
               var parThis=this; 
                // 绑定iScroll控件
                 loaded_Intergal(this.getInter);
		
                $(function(){ 
                       parThis.getInter();
                        $(".rulesBtn").click(function(){
							 $(".rulesCon").addClass('allCon');
						})
						$(".closeRules").click(function(){
							 $(".rulesCon").removeClass('allCon');
						}) 
						 $(document).click(function(){
						    parThis.dateShow=false; 
						    parThis.typeShow=false; 
						    return false
						 })
                })
               // 列表点击切换
			   $(function(){
				  var ws=$(".search").width();
				  $(".headlist").width(ws)
			  })
            })    
          },          
      }
   } 
</script>

<style rel="stylesheet" scoped>
   #wrapper {
	font-size: 1em;
	width: 100%;
	position: absolute;
	z-index: 1;
	top: 235px;
	left: 0;
	bottom: 0;
	overflow: auto;
	background: #ffffff;
}

#wrapper.nobottom {
	bottom: 0;
}

#scroller {
	position: relative;
	-webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}

#scroller ul {
	position: relative;
	padding-bottom: 0;
}
/* Pull down styles*/
#pullUp,#pullDown {
	width: 300px;
	margin: 0 auto;
	height: 40px;
	line-height: 40px;
	font-weight: bold;
	font-size: 24px;
	color: #888;
	z-index: -1;
	text-align: center;
	padding-bottom: 10px;
}

#pullUp .pullUpIcon,#pullDown .pullDownIcon {
	display: none;
	float: left;
	width: 40px;
	height: 40px;
	/* background: url(../../image/wechat/pull-icon@2x.png) 0 0 no-repeat; */
	-webkit-background-size: 40px 80px;
	background-size: 40px 80px;
	-webkit-transition-property: -webkit-transform;
	-webkit-transition-duration: 250ms;
}

#pullUp .pullUpIcon,#pullDown .pullDownIcon {
	-webkit-transform: rotate(-180deg) translateZ(0);
}

#pullUp.flip .pullUpIcon,#pullDown.flip .pullDownIcon {
	-webkit-transform: rotate(0deg) translateZ(0);
}

#pullUp.loading .pullUpIcon,#pullDown.loading .pullDownIcon {
	background-position: 0 100%;
	-webkit-transform: rotate(0deg) translateZ(0);
	-webkit-transition-duration: 0ms;
	-webkit-animation-name: loading;
	-webkit-animation-duration: 2s;
	-webkit-animation-iteration-count: infinite;
	-webkit-animation-timing-function: linear;
}

#pullUp.none .pullUpIcon,#pullDown.none .pullDownIcon {
	display: none;
}

.pullUpLabel,.pullDownLabel {
	padding-left: 3.125%;
	font-size:12px;
} 
</style>