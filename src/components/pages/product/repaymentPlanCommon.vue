<template>
    <div>
	  <header-div message="项目详情" :path="'/investDetail?borrowId='+borrowId"></header-div>
	  <div class="TitleExperience tabParent">
	      <router-link :to="'/projectDetailsCommon?borrowId='+borrowId" class="sel tabChild box_S">项目详情</router-link>
		  <router-link :to="'/investmentRecordCommon?borrowId='+borrowId" class="sel tabChild box_S">投资记录</router-link>
		  <router-link :to="'/repaymentPlanCommon?borrowId='+borrowId" class="sel tabChild box_S cur">还款计划</router-link>
	  </div>
	  <div class="fixTop fixTopExperience  fixObjectBottom">
		  <ul class="investList" id="like-list">
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
          this.dataHad();
		    
	    },
        methods:{
          dataHad:function(){
             this.$nextTick(function(){
                 $(function(){
                   allOad($(".fixTop"),3);
                   $(".noCoupon").css({"paddingTop":"7.6em"})
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
