// JavaScript Document
  $(function(){
	    //tab切换
	  //点击切换

		  $(".tabParent .tabChild").click(function(){
			  $(this).addClass("cur").siblings().removeClass("cur")
		  })
	  //点击打开详情
		  $(".commonTab").click(function(){

			  if($(this).hasClass("open")){
				  $(this).removeClass("open");
			  }else{

				  $(this).addClass("open").siblings(".commonTab").removeClass("open");;
			  }
		  })
	  //拨打电话
	  $(".headPhone").click(function(){
		  //var number=$(".headPhone").attr('phone')
		  $.DialogByZ.Confirm({Title: "钱趣多客服热线", Content: "400-656-8877",BtnL:"不了",BtnR:"拨打",FunR:callSure});
		  $("body").find(".zbox-popup-button").css({"color":"#fa5527","pointer-events": "none;"})
		  $("body").find(".zbox-popup-button.R").html('<a href="tel:13385815107" style="color:#fa5527">拨打</a>')
		  function callSure(){
			  $.DialogByZ.Close();

	       }

	  })
	  //多多金加息券 使用状态切换 /centerDDJ.html##
		  $(".couponsTitle .tabChild").click(function(){
			  var indexs=$(this).index();
			  $(".couponContent").eq(indexs).show().siblings(".couponContent").hide();

		  })
	  })
	//圆环
   function cilrcle_slide(obj,count){
		      /*var span_tt=count;
	        var count=100/span_tt;
		   	  circle_t(span_tt,obj);*/
			   var precent_t=count;
				var pre=0;
				//circle_t(precent_t,obj);
				var t=setInterval(function(){

					circle_t(pre,obj);
					if(pre<precent_t){
						pre++;
						}
					else{
						pre==precent_t;
						clearTimeout(t);
						}

					},30)
		 }
   function circle_t(txt,obj){
				var num = txt*3.6;
				if (num<=180) {
					$(obj).find('.right').css('transform', "rotate(" + num + "deg)");
				} else {
					$(obj).find('.right').css('transform', "rotate(180deg)");
					$(obj).find('.left').css('transform', "rotate(" + (num - 180) + "deg)");
				};

				}
	$(function(){
		$(".circle").each(function(index, element) {
			  var tip=$(this).attr("tip");
			  cilrcle_slide($(this),tip)
		});
		})
  //首页图形收益



	/**注册页面验证码**/
	$(function(){
		 $("#getCode").click(function(){
	     var opt=$(this).attr('dataOption');
		 var T,count=60;
		 if(opt==1){
		 	  $("#getCode").addClass("blackBg");
		    $("#imgCode").show();
			$(this).attr('dataOption',2);
			$(this).html('剩余 '+count+'s');
			T=setInterval(function(){
			  count--;
			  if(count<0){
			    $("#imgCode").hide();
			    $("#getCode").attr('dataOption',1);
				$("#getCode").html('请输入验证码');
				$("#getCode").removeClass("blackBg")
			    clearInterval(T);
			  }else{
			    $("#getCode").html('剩余 '+count+'s');
			 }
			},1000)
		 }
	  })
		
	})

  //解绑手机号 验证码
$(function(){
	$(".messCode").click(function(){
		var obj=$(this);
		var opt=$(this).attr('dataOption');
		var T,count=60;
		if(opt==1){
			$(this).addClass("blackBg");
			$(this).html('剩余 '+count+'s');
			$(this).attr('dataOption',2);
			T=setInterval(function(){
				count--;
				if(count<0){
					obj.attr('dataOption',1);
					obj.html('获取短信验证码');
					obj.removeClass("blackBg")
					clearInterval(T);
				}else{
					obj.html('剩余 '+count+'s');
				}
			},1000)
		}
	})

})

		/**点击规则**/
		$(function(){
				$(".rulesBtn").click(function(){
					 $(".rulesCon").addClass('allCon');
				})
				$(".closeRules").click(function(){
					 $(".rulesCon").removeClass('allCon');
				})
				/**加载更多定位**/
				loadmore();
				AccountTip();
				$(window).resize(function(){
					 loadmore();
					 AccountTip()
				})
				/**账户首页 提示文字定位**/
		})
		/**账户首页 提示文字定位**/
		function AccountTip(){
			var h=$(window).height();
			var h1=parseInt($(".searchTip").outerHeight());
			var h2=parseInt($("#accountCon").outerHeight());
			if(h1+h2<h){
				 $(".searchTip").addClass('fixd');
				 $("#accountCon").addClass('fixAccountBottom');
			}else{
			   $(".searchTip").removeClass('fixd');
				 $("#accountCon").removeClass('fixAccountBottom');	
			}
		}
		//加载更多定位 
		function loadmore(){
			var h1=$("header").height();
			var h2=$(".invesTitle").height();
			var h3=$(".investList").outerHeight();
			var h4=$(".loadingMore").height();
			var h=$(window).height();
			if(h3<(h-h1-h2-h4)){
				$(".loadingMore").addClass('fixd');
				$(".investContent").addClass('fixLoad');
			}else{
				$(".loadingMore").removeClass('fixd');
				$(".investContent").removeClass('fixLoad');
			}
			
		}
  /***accountCenter.html**/
 $(function(){
	 	/*if($(".dialogBlock").length>0){
	 		  setTimeout(function(){ 
			 		 $(".dialogBlock").addClass("open");
					 if($(".dialogAccountTip").length>0){
						setTimeout(function(){
						 $(".dialogAccountTip").removeClass("open") 
					    },5000) 
					 } 
			 	},3000)
	 	}
	 	 $(".laterOn").click(function(){ 	  
	      $(".dialogBlock").removeClass("open") ;	
	 	 })*/
 })
/**objectName.html 投标法律弹出框**/
$(function(){
	   $(".objectTip").click(function(){
	  	 $(".fixbg").show();
	   	 $(".lawRules").addClass("on");
	   	 return false;
	   })
	   $(".closeLaw").click(function(){
	   	 $(".fixbg").hide();
	   	 $(".lawRules").removeClass("on");
	   	 return false;
	   })
	   $("body").click(function(){
	   	 $(".fixbg").hide();
	   	 $(".lawRules").removeClass("on");  
	   })
})
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
	 
})
/**投资列表 tab**/
$(function(){
	$(".listTab p").click(function(){
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
/*     allOad($(".fixTop"),0) //网络不给力页面
	   allOad($(".fixTop"),1)//加载页面
	   allOad($(".fixTop"),2)//登录可见
	   allOad($(".fixTop"),3) //暂无还款记录*/
function allOad(obj,type){
		var htmlCode='';
		  if(type==0){//网络不给力页面
			      htmlCode='<div class="noCoupon vertical box_S"><div class="divInner">\
					   <img src="images/zneet.png" style="width: 60%">\
					   <p>网络不给力，人家出不来啦～！</p>\
					  <a href="#" class="commonBtn radiushalf objectBtn" style="width: 43%;">点击重试</a>\
				  </div></div>'  
		  }else if(type==1){//加载页面
			     htmlCode='<div class="noCoupon vertical norunning box_S"><div class="vertical divInner">\
						 <div class="runningC">\
							 <img src="images/zrun.png" class="shape" style="width: 100%">\
							 <img src="images/zcloud1.png" class="cloud1">\
							 <img src="images/zcloud2.png" class="cloud2">\
							 <img src="images/zcloud2.png" class="cloud3">\
							 <p>玩命加载中～</p>\
						 </div>\
				  </div></div>'
		  }else if(type==2){//登录可见
			     htmlCode='<div class="noCoupon vertical box_S paddingCl"><div class="divInner">\
					  <img src="images/logsee.png">\
					  <p><a href="">登录</a>可见</p>\
				     </div>\
				  </div>'
				 
		  }else if(type==3){//暂无还款记录
			  
			     htmlCode='<div class="noCoupon vertical box_S paddingCl"><div class="divInner">\
						  <img src="images/noplan.png" class="noRecordImg">\
						  <p>暂无还款记录</p>\
				  </div></div>'
			  }
		   obj.append($(htmlCode))
	    }


//noMessage($(".con","暂无还款记录")
function noMessage(obj,mess){
	var htmlCode='';
	htmlCode='<div class="noMess vertical box_S paddingCl"><div class="divInner">\
						  <img src="images/noplan.png" class="noRecordImg">\
						  <p>'+mess+'</p>\
				  </div></div>';
	obj.append($(htmlCode))
}
	 
	 
	 
	 