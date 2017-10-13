<template>
  <div>
    <header-div message="投资列表"></header-div>
    <div class="listTab">
    	<p :class="[init_name]" ref="init"  @click="order($event,'init')"><span>默认</span></p>
    	<p :class="[ratio_name]" ref="ratio"  @click="order($event,'ratio')"><span>预期收益率</span></p>
    	<p :class="[limit_name]" ref="limit"  @click="order($event,'limit')"><span>期限</span></p>
    </div>
    <div class="middleContent fixTop fixBottom fixInvesttop">

		      <ul class="voteList" id = "scroller-content">
		        <li  v-for="(value, key, index) in datalist">
                    <router-link :to="'/investDetail?borrowNo='+value.orderNo">
			           	<div class="title">
			              <p><i>{{value.name}}</i><sup v-if="value.new" class="radius3">新手</sup></p>
			           </div>
			           <div class="info clearfix">
			              <div class="eaYield">
			                 <span class="year"><i class="big">{{value.rate}}</i>%</span>
			                 <p>预期年化收益率</p>
			              </div>
			              <div class="deadLine">
			                 <span>{{value.date}}天</span>
			                 <p>期限</p>
			              </div>
			              <div class="availCount">
			                 <span>{{value.amount}}</span>
			                 <p>项目金额（元）</p>
			              </div>
			              <div class="iconR">
							  <div  v-if="value.type==2" class="fullMark"></div>
							  <div  v-else-if="value.type==3" class="fullMark repaying"></div>
							  <div  v-else-if="value.type==4" class="fullMark repayed"></div>
							  <div  v-else class="waveCircle">
								  <div class="txt">
									  <p>{{value.rate}}%</p>
									  <!--<div class="detail">预期年化收益率</div>-->
								  </div>
								  <div class="waveMove" :amout="value.amount" :nowData="value.amouting">
									  <div class="bg  bg1"></div>
									  <div class="bg bg2"></div>
									  <div class="bg3"></div>
								  </div>
							  </div>
			              </div>
			           </div>
		           </router-link>
		        </li>
	      </ul>
	      <div v-if="more" class="loadMore" @click="loadMore">加载更多</div>
	      <div v-else class="loadMore" >没有更多数据啦！</div>
    </div>  
  </div>
</template>
<script>
    import apis from '../../api'
    import store from '../../store'
    import headerDiv from '../common/HeaderDiv'


	export default {
	    components:{
	      headerDiv 
	    },
	    data(){
	      return{
	         tabs:['init','ratio','limit'],
	         init_name:'init',
	         ratio_name:'ratio',
	         limit_name:'limit',
	         order_value:'init',
	         order_by:null,
	         numPerPage:10,
	         pageNum:1,
	         datalist:[],
	         more:true,
	      }
	    },
	   computed: {
		    store_admin:function(){
		       return store.state.admin_id
		    },
       },
       mounted(){
          allOad($(".fixTop"),1)
          this.waves();
          this.investlist();
          console.log(1)
          console.log(this.datalist)
       },
	   methods:{
	      loadMore:function(){
	        if(this.more){
               this.pageNum+=1;
	        }        
	        this.investlist();

	      },
	      investlist: function(){
            var that=this;
            let params = {
                api: apis.investlist,
                param: {
                	order_value:this.order_value,
				    order_by:this.order_by,
				    pageNum:this.pageNum, 
				    numPerPage:this.numPerPage
                }
            };
            this.api.post(params)
			  .then(function (response) {
			    
			    if(response.data.code==='200'){

                   that.success(response.data.msg)
                   that.datalist=that.datalist.concat( response.data.data)
                   if(response.data.data.length<that.numPerPage){
                     that.more=false;
                   }else{
                     that.more=true;
                   }
                   that.waves();
			    }else if(response.data.code==='201'){
			       that.fail(response.data.msg);
			       that.more=false;
			    }else{
			       that.fail(response.data.msg);
			    }
			    console.log(response);
			    
			  })
			  .catch(function (error) {
			    that.message(error);
			  });
          },
	      order:function(e,names){
	        var el = e.target;  //触发事件的元素 span
            var parents = e.currentTarget //携带事件的元素 p
            //console.log(el)
	        //console.log($(el)[0].parentElement.className)  //$(el)是数组
	        //console.log(names)
	        //console.log(parents)
            var initname=names;
            var parname=$(el)[0].parentElement.className;
            this.order_value=names;//排序标准
            if(initname==='init'){
                this[initname+"_name"]=names+" cur";
                this.order_by=null; 
            }else{
               if(initname===parname){
                  this[initname+"_name"]=names+" cur up";
                  this.order_by='up';  //排序附加值（正序或倒序）
	            }
	            if(initname!==parname){
	               if(new RegExp('up').test(parname)){
	                  this[initname+"_name"]=names+" cur down";
	                  this.order_by='down';
	               }else{
	                  this[initname+"_name"]=names+" cur up";
	                  this.order_by='up';
	               }
	            }
            }
            for(let i=0;i<this.tabs.length;i++){
               if(this.tabs[i]!==initname){
                    this[this.tabs[i]+"_name"]=this.tabs[i];
               }
            }
            console.log(this.order_value+":"+this.order_by)
	      },
          waves:function(){
              this.$nextTick(function(){  
					$(function(){
					    //波浪
						setTimeout(function(){
							 $("body").find(".noCoupon").hide();
							},500)
						$(".waveMove").each(function(){
							var percent=$(this).attr("nowData")/$(this).attr("amout");
							var txt=(percent*100);
							txt=(txt==100)?100:txt.toFixed(2);
							percent=percent<0.12?0.12:percent;

							$(this).siblings(".txt").find("p").text(txt+"%");
							var allHeight=parseInt($(this).parent(".waveCircle").height());
							var newHeight=allHeight*percent;
							if(newHeight<12){
								newHeight=12;
							}
							$(this).css({"height":newHeight+"px"})
							/*$(this).find(".bg3").css({"height":newHeight+"px"})*/
						})
                        /**投资列表 tab**/
						$(".listTab .p").click(function(){
							  $(this).addClass("cur").siblings("p").removeClass("cur up down");
							  var index=$(this).index();
							  if(index!==0){
							  	  if( $(this).hasClass("up")){
									  	  $(this).addClass("down").removeClass("up");
									  }else{
									  	  $(this).addClass("up").removeClass("down");
									  }
							  }

						})
					})
              })
          } 
       } 
	}
</script>
<style scoped>

</style>