<template>
    <div>
		<header-div message="项目详情" :path="'/investDetail?borrowId='+borrowId"></header-div>
		<div class="TitleExperience tabParent">
		<router-link :to="'/projectDetailsCommon?borrowId='+borrowId" class="sel tabChild box_S">项目详情</router-link>
		<router-link :to="'/investmentRecordCommon?borrowId='+borrowId" class="sel tabChild box_S  cur">投资记录</router-link>
		<router-link :to="'/repaymentPlanCommon?borrowId='+borrowId" class="sel tabChild box_S">还款计划</router-link>
		</div>
		<div class="fixTop fixExinvestTop fixObjectBottom">
		    <div class="repayTitle  investRecordNew experienceInvest clearfix">
		    	 <p class="pTime w30 pl">投资用户</p>
		    	 <p class="pRatio w40 pc">购买金额／购买周期</p>
		    	 <p class="pResource w30 pr">预期收益</p>
		    </div>
			<table>
			  
			</table>
		  	<ul class="repayList investRecordNew investExperience">
			    <li class="clearfix">
		  			<p class="pTime pl">
		  				<i>186****3717</i>
		  				<!-- <i th:if="${#strings.isEmpty(list.customerAccount)}">位置</i> -->
						<span>2017-10-12 13:32:07</span>
		  			</p>
		  			<p class="pRatio pc">1000.00 / 56</p>
		  			<p class="pResource pr iphone pc"><span>10.43</span></p> 			
		  		</li>
		  		<li class="clearfix">
		  			<p class="pTime pl">
		  				<i>151****7810</i>
		  				<!-- <i th:if="${#strings.isEmpty(list.customerAccount)}">位置</i> -->
						<span>2017-10-10 15:57:07</span>
		  			</p>
		  			<p class="pRatio pc">2000.00 / 126</p>
		  			<p class="pResource pr tenderh5 pc"><span>62.48</span></p>			
		  		</li>
		  		<li class="clearfix">
  					<p class="pTime pl">
		  				<i>136****3698</i>
		  				<!-- <i th:if="${#strings.isEmpty(list.customerAccount)}">位置</i> -->
						<span>2017-10-11 04:45:44</span>
		  			</p>
		  			<p class="pRatio pc">50000.00 / 125</p>
		  			<p class="pResource pr computer pc"><span>1549.66</span></p>		
  		        </li>	
		  	</ul>
		  	
			 <!-- 状态有  还款中  已还款 已满标   -->
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
   
		    
	    },
        methods:{
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
