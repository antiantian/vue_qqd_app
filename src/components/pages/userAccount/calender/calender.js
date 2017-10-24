/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2017-10-24 16:01:11
 * @version $Id$
 */


        var noDateArr,limitDaysArr;
        //点击今天时间获取

        //日历插件配置
        //已还款日
          noDateArr = [
            {
                time: '2015-8-8',
                x:'还款项目：1笔',
                y:'200.00'
            },
            {
                time: '2016-8-12',
                x:'还款项目：1笔',
                y:'1000.00'
            },
            {
                time: '2016-8-20',
                x:'还款项目：1笔',
                y:'800.00'
            },
            {
                time: '2016-7-8',
                x:'还款项目：1笔',
                y:'200.00'
            }

        ];
        //预计还款日
         limitDaysArr=[
            {
                time: "2017-1-1",
                x:'还款项目：1笔',
                y:'100.00'
            },
            {
                time: "2016-9-15",
                x:'还款项目：1笔',
                y:'300.00'
            },
            {
                time: "2016-9-28",
                x:'还款项目：1笔',
                y:'500.00'
            },
             {
                 time: "2016-9-30",
                 x:'还款项目：1笔',
                 y:'200.00'
             },
            {
                time: "2016-10-23",
                x:'还款项目：1笔',
                y:'200.00'
            }
        ];
        //默认状态下  数据
        function todays(){
            var today=new Date();
            var y= today.getFullYear();//查询年份
            var monthNow=parseInt(today.getMonth())+1;
            var M=(monthNow<10)?'0'+monthNow:monthNow;
            var dayNow=today.getDate();//日期
            var D=(dayNow<10)?"0"+dayNow:dayNow;
            var todayInit=y+"-"+monthNow+"-"+dayNow;
            $("#d523_y").text(y);
            $("#d523_m").text(M);
            $("#d523_d").text(D);
            $("#nowMexpect").text(monthNow);
            $("#nowMdone").text(monthNow);
            $("#nowMexpectTxt").val(monthNow);
            $("#nowMdoneTxt").val(monthNow);
            //查询是否存在还款日期  改变还款状态
            var nodates=hasdate(noDateArr,todayInit);
            var limitdates=hasdate(limitDaysArr,todayInit);
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
        }

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
        //日历自适应大小

        function changeSize(){
            var ww=$("#div1").width()
            $('iframe').css({"width":ww+'px'})
            $(iframe).contents().find('.WdateDiv').css({"width":ww+'px'});
            $("#div1").css({"height":$('iframe').height()})
        }
       


        setTimeout(function(){

            dateOperate();
            var today=new Date();
            var y= today.getFullYear();//查询年份
            var monthNow=parseInt(today.getMonth())+1;
            var dayNow=today.getDate();//日期
            $(iframe).contents().find(".WdateDiv").append('<div id="todayss" onclick="day_Click('+y+','+monthNow+','+dayNow+');"></div>')
        },200)
        function hasdate(obj,d){
            var dates='';
            var len=obj.length;
            if(len>0){
                for(var i=0;i<len;i++){
                    var t=obj[i].time;
                    if(t==d){
                        dates=i;
                    }
                }
            }
            return dates
        }

        //alert(hasdate(noDateArr,'2016-8-8'))
        function dateOperate(){
            var len=$(iframe).contents().find('.WdayTable').find('td').length;
            initDate();
            $(iframe).contents().find('.WdateDiv').find('.navImg').click(function(){
                initDate();
            })
            $(iframe).contents().find('.WdateDiv').find('.yminput').blur(function(){
                initDate();
            })
        }
        function initDate(){

            $(iframe).contents().find('.WdateDiv').find('td').each(function(){
                var dates='';
                if($(this).attr('onclick')){
                    dates=($(this).attr('onclick').split('(')[1]).split(')')[0].split(',').join('-');
                }
                var nodates=hasdate(noDateArr,dates);
                var limitdates=hasdate(limitDaysArr,dates);
                if(nodates!==''){
                    $(this).attr('onmouseover','')
                    $(this).attr('onmouseout','')
                    $(this).addClass('Wshover WspecialDay')
                }else if(limitdates!==''){
                    $(this).attr('onmouseover','')
                    $(this).attr('onmouseout','')
                    $(this).addClass('Wshover limitDays')
                }else if(dates==str){
                    $(this).addClass('today')
                }
            })
        }
        var iframe;
       // var timer;
        function load(timer) {
             iframe = $("#div1").find('iframe')[0];
             if($("#div1").find('iframe').length==1){

                 console.log(2)
                 iframe = $("#div1").find('iframe')[0];
                 var ww=$("#div1").width();
                 $('iframe').css({"width":ww+'px'})
                 $(iframe).contents().find('.WdateDiv').css({"width":ww+'px'});
                 $("#div1").css({"height":$('iframe').height()})
                 setTimeout(function(){
                     changeSize();
                     initDate();
                     dateOperate();
                 },100)
                 clearInterval(timer);
             }else{
                 console.log(1)
             }
             return  iframe
        }

       
export{
 load,todays,changeSize,hasdate,noDateArr,limitDaysArr
};