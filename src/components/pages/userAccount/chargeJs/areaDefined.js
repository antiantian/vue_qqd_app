/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2017-09-29 15:07:15
 * @version $Id$
 */

//城市选择构造函数
import data from './data';
 function areaDefined(option){
  //二级联动
	var str="";
	var str2="";
	var initSelectP=option.initSelectP||'0031';
	var initSelectC=option.initSelectC||'3100';
	var province=option.province;
	var city=option.city;
	var initPname="";
	var initCname="";
	var initC=0;
   	
	this.initProvince=function(){
	    for(var i=0;i<data.length;i++){
			if(initSelectP==data[i].provinceCode){
			  initC=i;	
			  initPname=data[i].provinceName;
			  str+="<option selected='selected' value="+data[i].provinceCode+">"+data[i].provinceName+"</option>"
			}else{
			  str+="<option value="+data[i].provinceCode+">"+data[i].provinceName+"</option>"
			}
		  if(province){
			  province.html(str);
		  }
		 
		}
	}
	this.initCityChild=function(index){
			//str2="<option value=''>请选择市</option>";
			str2="";
			for(var j=0;j<data[index].citys.length;j++){
				if(initSelectC==data[index].citys[j].cityCode){
				  initCname=data[index].citys[j].cityName;
				  str2+="<option  selected='selected' value="+data[index].citys[j].cityCode+">"+data[index].citys[j].cityName+"</option>"
				}else{
				  str2+="<option value="+data[index].citys[j].cityCode+">"+data[index].citys[j].cityName+"</option>"
				}
				
			}
			if(city){
				city.html(str2);
			}
			
	}
	this.init=function(){
		this.initProvince();
	    this.initCityChild(initC);
	    if(province){
	    	this.onchange();
	    }	
	};
	this.onchange=function(){
		var self=this;
		province.on('change',function(){
			     var index = province.get(0).selectedIndex;
				 self.initCityChild(index)
	    }) 
	};
	this.getInitLocate=function(code){
		var initPname="";
		for(var i=0;i<data.length;i++){
			if(code==data[i].provinceCode){
				initPname=data[i].provinceName;
			}		 
		}
		return initPname
	}
	this.getlocation=function(){
	 var locate={};
     var provinceCode=province.find("option:selected").val();
	 var provinceText=province.find("option:selected").text();
	 var cityCode=city.find("option:selected").val();
	 var cityText=city.find("option:selected").text();
	 locate.provinceCode=provinceCode;
	 locate.provinceText=provinceText;
	 locate.cityCode=cityCode;
	 locate.cityText=cityText;
	 return locate;
	}
	this.init();
  }	
export default areaDefined;