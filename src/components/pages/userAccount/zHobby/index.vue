<template>
    <div>
        <header-div message="兴趣爱好" path="/userAccount/perfectinfo"></header-div>
        <div class="fixTop">
		     <div class="zHobbyCon">
		       <div class="top">
		         <div class="til">已选：</div>
		         <p class="con" id="hadHobby" v-show="hobbydata.length>0">
		         	<span v-for="item in hobbydata" :dataip="item.value">{{item.text}}</span>
		         </p>
		         
		       </div>
		       <input type="hidden" id="hobbyInput" value="0_1,0_2,0_3," />
		       <div class="hobbyInner">
		            <div class="box">
		                 <div class="block clearfix">
		                    <p v-for="item in hobbylist" :dataIp="item.value" :class="['box_S',{'cur':hasThis(item.value)}]" @click="chooseHobby(item)">{{item.text}}</p>                   
		                 </div>     
		             </div>
		           <div class="tip">*最多可以选择3个哦</div>
		        </div>
		        <a class="commonBtn radiushalf saveHobby" @click="saveHobby">保存</a>
		      </div>
		  </div>
    </div> 
</template>

<script type="ecmascript-6">
   import headerDiv from '../../../common/HeaderDiv'
   export default {
     components:{
	      headerDiv 
	  }, 
	  data(){
	     return {
	       hobbydata:this.$store.state.hobby||[],
	       hobbylist:[
             {
               value:'0_1',
               text:'旅行'
             },
             {
               value:'0_2',
               text:'电影'
             },
             {
               value:'0_3',
               text:'音乐'
             },
             {
               value:'0_4',
               text:'游戏'
             },
             {
               value:'0_5',
               text:'摄影'
             },
             {
               value:'0_6',
               text:'书籍'
             },
             {
               value:'0_7',
               text:'舞蹈'
             },
             {
               value:'0_8',
               text:'美妆'
             },
             {
               value:'0_9',
               text:'运动'
             },
             {
               value:'0_10',
               text:'艺术'
             },
             {
               value:'0_11',
               text:'文学'
             },
             {
               value:'0_12',
               text:'服饰'
             },
             {
               value:'0_13',
               text:'美食'
             }
	       ]
	     }
	  },
	  computed: {
		    store_admin:function(){
		       return this.$store.state.admin_id
		    },
		    DepositoryAccount:function(){
		       return this.$store.state.DepositoryAccount
		    },
      },     
      mounted(){
        this.dataHad(); 
      },
      destroyed(){
      },
      methods:{
          hasThis:function(values){
            var data=this.hobbydata;
            var has=false;
            if(data.length>0){
               for(let i=0;i<data.length;i++){
                  if(data[i].value==values){
                   has=true;
                   break;
                  }
               }
            } 
            return has
          },
          dataHad:function(){
             this.$store.commit('TITLE','兴趣爱好');  
             this.$nextTick(function(){
                 $(function(){
                  // allOad($(".fixTop"),3);
                   //$(".noCoupon").css({"paddingTop":"7.6em"})
                 })
             })
          },
          chooseHobby:function(item){
                var data=this.hobbydata;
                var has=false;
                if(data.length>0){
	               for(let i=0;i<data.length;i++){
	                  if(data[i].value==item.value){
	                   this.hobbydata.splice(i,1);
	                   has=true;
	                   break;
	                  }
	               }
		        }   
	            if(!has){
	               if(data.length==3){
	                  $.DialogByZ.Alert({Title: "提示", Content: "最多可以选择3个哦",BtnL:"确定"}) 
	               }else{
	                  this.hobbydata.push({
		                  value:item.value,
	                      text:item.text
		               })  
	               } 
	            }
          },
          saveHobby:function(){
             this.$store.commit('hobby',this.hobbydata);  
             //location.href = "/userAccount/perfectinfo";
             this.$router.push({
               path:'/userAccount/perfectinfo'
             })
          }           
      }
   }  
</script>

<style rel="stylesheet" scoped>
    
</style>