/**
 * 
 * @authors zcy 
 * @date    2016/10/10
 * @version $Id$
 */

  /*$(function(){
	    var nameArr=['canvasOne','canvasTwo','canvasThree'];
	    var Zindex=0;
	    var zidName=nameArr[Zindex];
		var count=0;
		$(".circleRun").each(function(){
			var obj=$(this)[0];
			var canvasW=parseInt($(this).parent().width())*0.76;
			obj.width = canvasW;
			obj.height = canvasW;
		})

		var windowH=document.body.clientHeight||document.documentElement.clientHeight;
		windowH=window.screen.height;
		var fixH=parseInt($("nav").height())+parseInt($("header").height());
		var OneH=windowH-fixH;
		var top=document.getElementById("surePassInner").offsetTop;
		//console.log(OneH+":"+top)
		var findCanvas=$("#"+zidName);
		var percents=findCanvas.attr('nowData')/findCanvas.attr('amout');
		if(OneH<top){
			$(window).scroll(function(){
				if(count==0){
					var scrTop=$(window).scrollTop();
					console.log(scrTop+":"+top)
					if(scrTop>$(".banner")[0].offsetTop+parseInt($("header").height())){
						runCircle(zidName,percents);
						count=1;
					}

				}

			})
		}else{
			runCircle(zidName,percents);
		}
	})*/
  // $(function(){
	 //  var count=0;
		// $(".circleRun").each(function(){
		// 	var obj=$(this)[0];
		// 	var canvasW=parseInt($(this).parent().width())*0.76;
		// 	obj.width = canvasW;
		// 	obj.height = canvasW;
		// })

		// var windowH=document.body.clientHeight||document.documentElement.clientHeight;
		// windowH=window.screen.height;
		// var fixH=parseInt($("nav").height())+parseInt($("header").height());
		// var OneH=windowH-fixH;
		// var top=$(".surePass")[0].offsetTop;
		// console.log(OneH+":"+top)
		// var findCanvas=$("#canvasOne");
		// var percents=findCanvas.attr('nowData')/findCanvas.attr('amout');
		// if(OneH<top){
		// 	$(window).scroll(function(){
		// 		if(count==0){
		// 			var scrTop=$(window).scrollTop();
		// 			console.log(scrTop+":"+top)
		// 			if(scrTop>$(".banner")[0].offsetTop+parseInt($("header").height())){
		// 				runCircle('canvasOne',percents);
		// 				count=1;
		// 			}

		// 		}

		// 	})
		// }else{
		// 	runCircle('canvasOne',percents);
		// }
	  
  // })
	function runCircle(obj,percent){
	    
	    if(obj==undefined){
	    	return
	    }
		var imgFire = $("#imgFire").attr("src");
		var preA=Math.PI/180;
		var imageAir=new Image();
		imageAir.onload=CanvasApp;
		imageAir.src=imgFire;
		var canvasC=document.getElementById(obj);
		/*鎺у埗杩愬姩*/
		$("#"+obj+"p").attr("dataOption","1");
		//console.log(1)
		var context=canvasC.getContext('2d');
		var windowW=parseInt($(canvasC).parent().width());
		var lineW1=18;
		var lineW0=5;
		var R,R0,R1;
		if(windowW>500){
			lineW1=36;
			lineW0=10;
		}
		var canvasW=windowW*0.76;
		R=parseInt(canvasW/2-2*lineW1-2*lineW0-10);
		R0=parseInt(canvasW/2-lineW0-4);
		R1=parseInt(canvasW/2-lineW1-lineW0-10);
		var ra=parseInt(canvasW/2-lineW0/2-5);
		var canvasH=canvasW;
		var rotateAngle=percent*360;
		var anotherA=0;
		if(percent>0,5){
			anotherA=(percent-0.5)*360*preA;
		}
		var rotataRadians=preA*rotateAngle;
		canvasC.width = canvasW;
		canvasC.height = canvasH;
        console.log(R1)
        console.log(-R1)
		var x=canvasC.width/2;
		var y=canvasC.height/2;
		var startAa=-Math.PI/2;
		var startA=0;
		var Timer;
		function CanvasApp(){
			function drawScreen(){
				if(startA<rotataRadians){
					startA+=0.1;
				}
				//

				context.fillStyle="#ffffff";
				context.fillRect(0,0,canvasC.width,canvasC.height);
				//
				context.save();
				context.setTransform(1,0,0,1,0,0);
				context.fillStyle="#ffffff";
				context.fillRect(0,0,canvasC.width,canvasC.height);
				context.translate(x,y);
				context.rotate(-Math.PI/2);
				//澶栫幆
				context.beginPath();
				//50,50,25,100,100,100
				var gradient1 = context.createLinearGradient(R1, 0,-R1,0);
				gradient1.addColorStop(0, '#fffaf7');
				gradient1.addColorStop(0.01, '#fff4ec');
				gradient1.addColorStop(1, '#ffd2b0');
				context.strokeStyle=gradient1;
				context.lineWidth=lineW0;
				context.arc(0,0,R0,0,startA,false);
				context.stroke();
				context.closePath();
				//涓幆
				context.beginPath();
				context.strokeStyle="#f2f2f2";
				context.lineWidth=lineW1;
				context.arc(0,0,R1,0,Math.PI*2,false);
				context.stroke();
				context.closePath();
				context.beginPath();
				// Linear gradients
				var gradient2 = context.createLinearGradient(R1, 0,-R1,0);
				gradient2.addColorStop(0, '#ffdd00');
				gradient2.addColorStop(1, '#fc7d37');
				context.lineCap="round";
				context.strokeStyle=gradient2;
				context.lineWidth=lineW1;
				context.arc(0,0,R1,0,startA,false);
				context.stroke();
				context.closePath();
				//鍐呯幆
				context.beginPath();
				context.strokeStyle="#f2f2f2";
				context.lineWidth=lineW0;
				context.arc(0,0,R,0,Math.PI*2,false);
				context.stroke();
				context.closePath();
				context.restore();

				//鐢诲浘
				if(startAa<rotataRadians-Math.PI/2){
					startAa+=0.1;
				}else{
					clearInterval(Timer)
					$("#"+obj+"p").attr("dataOption","0")
				}
				context.save();
				context.setTransform(1,0,0,1,0,0);
				var ax=ra*Math.cos(startAa) ;
				var ay=ra*Math.sin(startAa) ;
				context.translate(x+ax,y+ay);
				context.rotate(startAa);
				context.drawImage(imageAir,-imageAir.width/4-2,-imageAir.height/4,imageAir.width/2,imageAir.height/2)
				context.restore();

			}
			Timer=setInterval(drawScreen,20)
			//drawScreen()
		}
	}

function companyAnnouncement(obj){
	var id = $(obj).attr("objValule");
	location.href = "/frontColumnDetail?id="+id+"&column=notice";
}

function announcements(){
	location.href = "/announcements?id=96&code=notice";
}
export default runCircle;