<template>
  <div>
    <header-div message="回款日历" path="/userAccount/accountCenter" rightToday="true"></header-div>
    <div class="fixTop">
	    <div class="zAccountPlanL">
	        <div id="div1"></div>

	    </div>
	    <div id="calenderCon" class="calenderCon calenderList">
	        <div class="box expectM"><span class="cash">800.00</span><p><i id="nowMexpect"></i>月预期还款本息总额（元）</p></div>
	        <div class="box hadM"><span class="cash">500.00</span><p><i id="nowMdone"></i>月已还款本息总额（元）</p></div>
	        <input type="hidden" value="" id="nowMexpectTxt">
	        <input type="hidden" value="" id="nowMdoneTxt">
	    </div>
	    <div class="nowday calenderList">
	        <div class="box nowDate"><i id="d523_y"></i>年<i id="d523_m"></i>月<i id="d523_d"></i>日</div>
	        <div class="box situateM">本日无还款项目</div>
	    </div>
	    <div class="calenderTip"> 注：查看更多投资详情<router-link to="investManageBiding">点击此处</router-link>跳转至投资管理</div>
	    <input type="hidden" id="index_clander"  >

	</div>
  </div>
</template>

<script type="ecmascript-6">
 import {load,todays,changeSize,hasdate,noDateArr,limitDaysArr} from './calender'
 import headerDiv from '../../../common/HeaderDiv'
  export default {
     components:{
	      headerDiv 
	  }, 
	  computed: {
		    store_admin:function(){
		       return this.$store.state.admin_id
		    },
		    DepositoryAccount:function(){
		       return this.$store.state.DepositoryAccount
		    },
      },
      data(){
        return({
            
        })
      },      
      mounted(){
         this.setTitle();
      },
      destroyed(){
      },
      methods:{
          setTitle:function(){
              this.$store.commit('TITLE','回款日历');
              this.$nextTick(function() {
                       $(function(){   
                                   var iframe;
                                   var d = new Date();
							        var str = d.getFullYear()+"-"+(d.getMonth()+1)+"-"+d.getDate();
							        WdatePicker({eCont:'div1',dateFmt:'yyyy-MM-dd',readOnly:true,isShowClear:false,isShowToday:true,isShowOK:true,qsEnabled:false,quickSel:null,
							        	skin:'whyGreen',onpicked:function(dp){
							            dp.$('index_clander').value=dp.cal.getNewDateStr();
							            var week=dp.cal.date.d;
							            var year=dp.cal.date.y;
							            var month=dp.cal.date.M;
							            var day=dp.cal.date.d;
							            var todayData=year+"-"+month+"-"+day;
							            var Month=month<10?"0"+month:month;
							            var Day=day<10?"0"+day:day;
							            dp.$('d523_y').innerText=year;
							            dp.$('d523_m').innerText=Month;
							            dp.$('d523_d').innerText=Day;
							            //月份切换 改变当月的预期还款本息总额和 已还款本息总额
							            dp.$("nowMexpect").innerText=month;
							            dp.$("nowMdone").innerText=month;
							            dp.$("nowMexpectTxt").value=month;
							            dp.$("nowMdoneTxt").value=month;
							            //查询是否存在还款日期  改变还款状态
							            var nodates=hasdate(noDateArr,todayData);
							            var limitdates=hasdate(limitDaysArr,todayData);
							            if(nodates!==''){
							                var tops=noDateArr[nodates].x;
							                var bots=noDateArr[nodates].y;
							                $(".situateM").text("已还款本息总额（元）："+bots)
							            }else if(limitdates!==''){
							                var tops=limitDaysArr[limitdates].x;
							                var bots=limitDaysArr[limitdates].y;

							                $(".situateM").text("预期还款本息总额（元）："+bots)
							            }else{
							                $(".situateM").text("本日无还款项目")
							            }


							            $(iframe).contents().find('.WdateDiv').find('td').each(function(){
							                var dates='';
							                if($(this).attr('onclick')){
							                    dates=($(this).attr('onclick').split('(')[1]).split(')')[0].split(',').join('-');
							                }
							                var nodates=hasdate(noDateArr,dates);
							                var limitdates=hasdate(limitDaysArr,dates);
							                if(nodates!==''){
							                    $(this).addClass('Wshover WspecialDay')
							                }else if(limitdates!==''){
							                    $(this).addClass('Wshover limitDays')
							                }else if(dates==str){
							                    $(this).addClass('today')
							                }
							            })

							        } }) 
							   $(".today").click(function(){
						            todays();
						            $(iframe).contents().find('#todayss').click();

						        })
						        todays();
						        let timer=setInterval(function(){
						          load(timer);
						        },10)
						        iframe=load(timer);
						        

						       $(window).resize(function(){
						            changeSize();
						        })
						})
               })                   
          },
		 updateBank:function(){
		    this.$router.push({
		       path:"/shyh/escrowAccountTwo?cardId="+this.bankData
		    })
			//location.href = "/shyh/escrowAccountTwo?cardId="+$(obj).attr("obj");
		 }
      }
   }
</script>

<style rel="stylesheet" scoped>
    
</style>