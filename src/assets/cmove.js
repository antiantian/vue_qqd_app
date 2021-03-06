/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2017-10-11 13:44:20
 * @version $Id$
 */

// JavaScript Document
// create by zcy 2016/10/12
//三次方贝塞尔曲线  

function cmove(id,perNum,shadowa){
	   var c = document.getElementById(id);
		var percent= perNum;
		var w=document.body.clientWidth||document.documentElement.clientWidth;
		var r=320/108;
		var h=$(".objectTop").height()*0.6;
               h=parseInt(w/r);
			   $(".ratio").css({"padding-bottom":h+"px"})
		var timer;
		var points=new Array();
		var ball={x:0,y:0,speed:0.01,t:0}
		c.width=w;
		c.height=h;
		var content = c.getContext('2d');
		var startX=0;
		var startY=h*0.725;

		var c1x=w*0.05;
		var c1y=h*0.725;
		var c2x=w*0.1;
		var c2y=h*0.55;

		var endX=w*0.2;
		var endY=h*0.6;

        var a1x=w*0.35;
		var a1y=h*0.6;
		var a2x=w*0.45;
		var a2y=h*0.35;

		var a3x=w*0.625;
		var a3y=h*0.4;

		var b1x=w*0.7625;
		var b1y=h*0.4;
		var b2x=w*0.85;
		var b2y=h*0.15;
		var b3x=w;
		var b3y=10;
		var p0={x:startX,y:startY};
		var p1={x:c1x,y:c1y};
		var p2={x:c2x,y:c2y};
		var p3={x:endX,y:endY};

		var a0={x:endX,y:endY};
		var a1={x:a1x,y:a1y};
		var a2={x:a2x,y:a2y};
		var a3={x:a3x,y:a3y};

		var b0={x:a3x,y:a3y};
		var b1={x:b1x,y:b1y};
		var b2={x:b2x,y:b2y};
		var b3={x:b3x,y:b3y};
		cauculate(p0,p1,p2,p3)
		cauculate(a0,a1,a2,a3)
		cauculate(b0,b1,b2,b3)
        function cauculate(p0,p1,p2,p3){

			var cx=3*(p1.x-p0.x);
			var bx=3*(p2.x-p1.x)-cx;
			var ax=p3.x-p0.x-bx-cx;
			var cy=3*(p1.y-p0.y);
			var by=3*(p2.y-p1.y)-cy;
			var ay=p3.y-p0.y-by-cy;
			for(var i=0;i<1;i+=0.01){
				var t=i;
				var xt=ax*(t*t*t)+bx*(t*t)+cx*t+p0.x;
				var yt=ay*(t*t*t)+by*(t*t)+cy*t+p0.y;
				points.push({x:xt,y:yt});
			}
		/*	ball.t+=ball.speed;
			if(ball.t>1){
				ball.t=1;
				//clearInterval(timer)
			}*/

		}

		var i=0;
		function drawScreen(){
           content.fillStyle= "#ffffff";
			content.fillRect(0,0,w,h);
			content.lineWidth=1;
			//三次方贝塞尔曲线
			
			content.beginPath();
			content.strokeStyle = '#ffcec0';
			 
			var gradient1 = content.createLinearGradient(w/2,0,w/2,h);
			gradient1.addColorStop(0, '#fdebe6');
			gradient1.addColorStop(1, '#FFFFFF');
	
			content.fillStyle=gradient1;
			content.moveTo(startX,startY);
			content.bezierCurveTo(c1x,c1y,c2x,c2y,endX,endY);
			content.lineTo(endX,endY);
			content.bezierCurveTo(a1x,a1y,a2x,a2y,a3x,a3y);
			content.lineTo(a3x,a3y);
			content.bezierCurveTo(b1x,b1y,b2x,b2y,b3x,b3y);
			content.stroke();
			content.lineTo(w,h);
			content.lineTo(0,h);
			content.lineTo(startX,startY);
			content.closePath();
			content.fill();
			
			/**画阴影*/
			content.globalCompositeOperation = 'source-over';
			content.beginPath();
			if(shadowa){
			  	content.shadowOffsetX =0; // 阴影Y轴偏移
				content.shadowOffsetY = 5; // 阴影X轴偏移
				content.shadowBlur =3; // 模糊尺寸
				content.shadowColor = 'rgba(250, 85, 39, 0.5)'; // 颜色
			}
			
			content.fillStyle=gradient1;
			content.moveTo(startX,startY);
			content.bezierCurveTo(c1x,c1y,c2x,c2y,endX,endY);
			content.lineTo(endX,endY);
			content.bezierCurveTo(a1x,a1y,a2x,a2y,a3x,a3y);
			content.lineTo(a3x,a3y);
			content.bezierCurveTo(b1x,b1y,b2x,b2y,b3x,b3y);
			content.stroke();
			content.closePath();
			/**画阴影*/
			//绘制运动的小球
			
			var length=parseInt((points.length-1)*percent);
			if(i>=length)
			{
				i=length;
			}
			var set=(percent*100*i/length);
			 var results=/^[0-9]*[1-9][0-9]*$/.test(set)?1:0;
			set=(results==1)?set:set.toFixed(2);
			var mess=set+"%";
            var xt=points[i].x;
			var yt=points[i].y;
            i+=1;
			//content.
			content.beginPath();
			content.shadowOffsetX =0; // 阴影Y轴偏移
			content.shadowOffsetY = 0; // 阴影X轴偏移
			content.shadowBlur =0; // 模糊尺寸
			content.shadowColor = 'rgba(0, 0, 0, 0.5)'; // 颜色
			content.fillStyle="#ffe1a4";
			content.arc(xt,yt,5,0,Math.PI*2,false);
			content.closePath()
			content.fill();
			content.beginPath();
			content.fillStyle="#ffaa00";
			content.arc(xt,yt,3,0,Math.PI*2,false);
			content.closePath()
			content.fill();
			content.fillStyle="#ffaa00";
            content.font="12px Arial";
			content.textAlign = 'center'; //设置文本的水平对对齐方式
			content.baseline="middle";
			var mx=xt;
			var my=yt+6;
            if(xt<20){
				content.moveTo(mx,my);
				content.lineTo(mx+4,my+4);
				content.lineTo(mx+4+40,my+4);
				content.lineTo(mx+4+40,my+4+16);
				content.lineTo(mx,my+4+16);
				content.lineTo(mx,my);
				content.fill();

				content.fillStyle="#ffffff";
				content.fillText(mess,mx+22,my+16)
			}else if(xt>(w-20)){
				content.moveTo(mx,my);
				content.lineTo(mx-4,my+4);
				content.lineTo(mx-4-40,my+4);
				content.lineTo(mx-4-40,my+4+16);
				content.lineTo(mx,my+4+16);
				content.lineTo(mx,my);
				content.fill();
				content.fillStyle="#ffffff";
				content.fillText(mess,mx-22,my+16)
			}else{
				content.moveTo(mx,my);
				content.lineTo(mx-4,my+4);
				content.lineTo(mx-4-20,my+4);
				content.lineTo(mx-4-20,my+4+16);
				content.lineTo(mx+4+20,my+4+16);
				content.lineTo(mx+4+20,my+4);
				content.lineTo(mx+4,my+4);
				content.lineTo(mx,my);
				content.fill();
				content.fillStyle="#ffffff";
				content.fillText(mess,mx,my+16)
			}



		}


		timer=setInterval(drawScreen,20)

}	
export default cmove;