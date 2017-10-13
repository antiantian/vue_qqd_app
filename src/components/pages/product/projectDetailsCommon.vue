<template>
    <div>
	  <header-div message="项目详情" :path="'/investDetail?borrowId='+borrowId"></header-div>
	  <div class="TitleExperience tabParent">
	      <router-link :to="'/projectDetailsCommon?borrowId='+borrowId" class="sel tabChild box_S cur">项目详情</router-link>
		  <router-link :to="'/investmentRecordCommon?borrowId='+borrowId" class="sel tabChild box_S">投资记录</router-link>
		  <router-link :to="'/repaymentPlanCommon?borrowId='+borrowId" class="sel tabChild box_S">还款计划</router-link>
	  </div>
	<div class=" fixTopExperience fixObjectBottom" id="dowebok">                              
	    <div class="projectBox">
	    	<div class="projectTitle">借款描述</div>
	    	<p class="txt"><p>北京佳嘉乐房地产经纪有限公司成立于2016年，是一家主要从事房地产经纪业务的公司，作为本次基础交易债权方拟通过钱趣多平台进行借款，提供足额银行承兑汇票作为还款来源及担保。</p><p><br/></p></p>
	    </div>
	    <div class="projectBlock projectBox">
	    	<div class="projectTitle">信息披露报告</div>
	    	<div class="imgBox">
	    		<div class="imgInner">
	    			<div style="float:left;">
	    		        <img class="box_S" src="https://admin.qianquduo.com/files/image/20171010/1507605060324049566.jpg" />
	    			</div>
	    			<div style="float:left;">
	    		        <img class="box_S" src="https://admin.qianquduo.com/files/image/20171010/1507605060423082952.jpg" />
	    			</div>
	    			<div style="float:left;">
	    		        
	    			</div>
	    			<div style="float:left;">
	    		        
	    			</div>
	    			<div style="float:left;">
	    		        
	    			</div>
	    			<div style="float:left;">
	    		        
	    			</div>
	    		</div>
	    	</div>
	    </div>
	    
	    <div class="projectBlock projectBox">
	    	<div class="projectTitle">票据及银行存管确认清单</div>
	    	<div class="imgBox">
	    		<div class="imgInner">
	    			<div style="float:left;">
	    		        
	    			</div>
	    			<div style="float:left;">
	    		        
	    			</div>
	    			<div style="float:left;">
	    		        
	    			</div>
	    			<div style="float:left;">
	    		        <img class="box_S" src="https://admin.qianquduo.com/files/image/20171010/1507604656119066277.jpg" />
	    			</div>
	    			<div style="float:left;">
	    		        <img class="box_S" src="https://admin.qianquduo.com/files/image/20171010/1507604656210031245.jpg" />
	    			</div>
	    			<div style="float:left;">
	    		        
	    			</div>
	    		</div>
	    	</div>
	    </div>
	    
	    
	    <input type="hidden" id="inputQcBorrowId" value="239" />
	    <div class="objectButton">
			  <div class="commonBtn radiushalf objectBtn" @click="investImmediately">立即购买</div>
			  <!-- <div th:if="${#bools.isTrue(qcBorrow.borrowStatus == 4)}" class="commonBtn radiushalf objectBtn blackBg">已 满 标</div>
			  <div th:if="${#bools.isTrue(qcBorrow.borrowStatus == 5)}" class="commonBtn radiushalf objectBtn blackBg">还 款 中</div>
			  <div th:if="${#bools.isTrue(qcBorrow.borrowStatus == 6)}" class="commonBtn radiushalf objectBtn blackBg">已 还 清</div> -->
		  </div>
	  </div>
	</div>   
</template>
<script type="ecmascript-6">
    import apis from '../../../api'
    import store from '../../../store'
    import Query from '../../../assets/Query'
	import headerDiv from '../../common/HeaderDiv'

	import '../../../assets/moment-precise-range';
	export default {
	    components:{
	      headerDiv 
	    },
	    data(){
	      return(
	        {
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
   
		    this.controlImagesize();
	    },
        methods:{
          controlImagesize:function(){
	            this.$nextTick(function(){
	                    /**项目详情**/
						$(function(){
							var w=$(".projectBlock .imgBox").width();
							var imgW=parseInt(w*0.28);
							var padW=parseInt(w*0.08);
							var len=
							 $(".projectBlock .imgBox").find("img").css({"width":imgW+"px","margin-right":padW+"px"})
							 $(".projectBlock .imgBox").each(function(){
							 	  var len=$(this).find("img").length;
							 	  var preW=imgW+padW;
							 	  console.log(preW)
							 	  var mountW=Math.ceil(preW*len);
							 	  $(this).find(".imgInner").css({"width":mountW+"px"})
							 })
							//
							 //图片放大查看器
							  var viewer = new Viewer(document.getElementById('dowebok'), {
								  url:'data-original',
								  title:false,
								  navbar:false, //底部图片
								  keyboard:false
							  }); 
						})
	            })
          },
          investDetail: function(){
            var that=this;
            let params = {
                api: apis.investDetail,
                param: {
                	orderNo:this.orderNo
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
