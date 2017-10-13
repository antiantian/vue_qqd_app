<template>
   <div>
	  <header-div message="开通账户" goback="true"></header-div>
	  <div class="fixTop">
		   <ul class="openAccount znewSend">
		       <li><em></em><input :class="{'red':indexVal==='name'}" type="text" @input="changeInput" name="name" placeholder="请输入真实姓名" v-model="name" id="name"/></li> 
		       <li><em></em><input type="text" :class="{'red':indexVal==='cardNumber'}" @input="changeInput" name="cardNumber" placeholder="请输入身份证号" v-model="cardNumber" id="cardNumber"/></li>
		       <li><em></em><input type="text" :class="{'red':indexVal==='bankCard'}" @input="changeInput" name="bankCard" placeholder="请输入银行卡号" v-model="bankCard" id="bankCard"/></li>
		       <li  @click="testOnclick">
		          <em></em>
                  <div id="bankName" :class="{'red':indexVal==='dataindex'}" v-if="dataname" style="color:#4a4a4a;">{{dataname}}</div>
                  <div id="bankName" :class="{'red':indexVal==='dataindex'}" v-else style="color: rgb(196, 196, 196);">请选择银行简称</div>
                  <a><img alt="" src="/static/h5/common/images/rightOne.png" /></a>
		       </li>
		       <li>
		       <em></em>
		        <select v-model="selected_province" id="province" @change='getCityList'>
		          <option value="" :selected='selected_province===""'>请选择省</option>
				  <option v-for="option in province_options" v-bind:value="option.provinceCode" :selected='selected_province===option.provinceCode'>
				    {{ option.provinceName }}
				  </option>
				</select>
				<select v-model="selected_city" style="float:right" id="city">
		          <option value="" :selected='selected_city===""'>请选择市</option>
				  <option  v-for="option in city_options" v-bind:value="option.cityCode" :selected='selected_city===option.cityCode'>
				    {{ option.cityName }}
				  </option>
				</select>
		       </li>
		       <li style="position:relative">
		        <em></em>
		        <p class="cludeWrap">
		          <input type="text" placeholder="请输入短信验证码" id="inputNumber" @input="changeInput" :class="{'red':indexVal==='validateCode'}" name="validateCode" v-model="validateCode">
		        </p>        
		        <input type="button" name="" value="发送" class="sendInfo" id="sendInfo">
		        <input type="hidden" id="customerPhone" value="13385815107">
		        <input type="hidden" id="smsSeq" value="">
		       </li>
		       
		   </ul>
		     <p class="alertContent"></p>
		   <div style="text-align: center;position:relative" class="accountSubmit">
		     <div class="errorTip bindTip" style="width:92%;padding-left:4%;text-align:left;">{{errorMessage}}</div>
		     <input type="button" value="提交" @click="userCenterCz"/>
		   </div>
	  </div>
	   <div class="fixTop divAccountBank" v-show="showbanks" style="width:100%;height:100%;    position:fixed;left:0px;top:0px;right:0px;    bottom:0px;background:#f1f1f1;z-index:200">
		<a @click="hideAccountBank" style="width:100%;background:#fa5527;position:" class="iconfont prePage">&#xe606;</a>
   		<ul class="accountBank" style="height: 93%; overflow-y: scroll; ">
   		   <li v-for="(item,index) in banklist" :dataindex="dataindex" @click="banksel(item)">
                 <img :src="'/static/images/accountBank/icon'+(index+1)+'.png'" />
                 <input type='text' :value="item.bankCode"/>
                 <span :class="{'on':dataindex==item.bankCode}">{{item.bankName}}</span>
   		   </li>
   		</ul>
	</div>
  </div>  
</template>

<script type="ecmascript-6">
	import store from '../../../store'
   import headerDiv from '../../common/HeaderDiv'
   import areaDefined from './chargeJs/areaDefined'
   import accountBank from './chargeJs/accountBank'
   import areadata from './chargeJs/data'
   import Query from '../../../assets/Query'
	export default {
		components:{
			headerDiv 
		},
		data(){
			return(
				{
				   errorMessage:'',
				   indexVal:'',
		           showbanks:false,
		           banklist:accountBank,
		           dataname:null,
		           dataindex:null,
		           province_options:areadata,
		           city_options:null,
		           selected_province:'0032',
		           selected_city:'3203',
		           name:null, 
		           cardNumber:null, 
		           bankCard:null,
		           validateCode:null,
				}
			)
		},  
       computed: {
	        saveList () {
	          return [
			             {
					      index:'name',
					      mess:'姓名不能为空',
					      arr:this.name,
					    },{
					      index:'cardNumber',
					      mess:'身份证号不能为空',
					      arr:this.cardNumber,
					      type:'idCard'
					    },{
					      index:'bankCard',
					      mess:'请输入银行卡号',
					      arr:this.bankCard,
					      type:'banknum'
					    },{
					      index:'dataindex',
					      mess:'请选择银行',
					      arr:this.dataindex,
					    },{
					      index:'selected_province',
					      mess:'请选择省',
					      arr:this.selected_province,
					    },{
					      index:'selected_city',
					      mess:'请选择市',
					      arr:this.selected_city,
					    },{
					      index:'validateCode',
					      mess:'请输入短信验证码',
					      arr:this.validateCode,
					    }
				     ]
		    }
      },		   
      mounted(){
         this.setTitle();
         this.getCityList();
      },
      destroyed(){
      },
      methods:{
          ...Query,
          getCityList:function(init){
              let parents=areadata;
              for(let i=0;i<parents.length;i++){
                 if(parents[i].provinceCode===this.selected_province){
                     //this.province_options=[parents[i]]
                     this.city_options=parents[i].citys;
                     if(init&&init.type==='change'){    //init 相当于event   change事件时 赋值第一个市的code              
                        this.selected_city=parents[i].citys[0].cityCode;
                     }
                     break;
                 }
              }
          },
          setTitle:function(){
             store.commit('TITLE','新手指引');
              this.$nextTick(function() {
                       $(function(){ 
                             //areaDefined()
                             $(".rulesBtn").click(function(){
							 $(".rulesCon").addClass('allCon');
						})
						$(".closeRules").click(function(){
							 $(".rulesCon").removeClass('allCon');
						}) 
                       })
               })                   
          },  
         testOnclick:function(){
           this.showbanks=true;
         },
         hideAccountBank:function(){
           this.showbanks=false;
         },
         banksel:function(items){
            this.showbanks=false;
            this.dataname=items.bankName;
            this.dataindex=items.bankCode
            this.selInput(items.bankCode,'dataindex')
         },
         userCenterCz:function(){
            if(!this.validates()){
               return
            }
            alert('成功')
         },
		insertCzMoney:function(){
			var insertCzMoney =this.money;
			var isActivate = this.isActivate;
			var changVal = this.picked;
			if(!insertCzMoney||insertCzMoney == ''){
				$.DialogByZ.Alert({Title: "提示", Content: "请输入充值金额!",BtnL:"知道了"})
				return false;
			}
			if(this.getFloatStr(Number(this.getFloatStr(insertCzMoney))) < 100){
				$.DialogByZ.Alert({Title: "提示", Content: "充值金额不能小于100!",BtnL:"知道了"})
				return false;
			}
			if(isActivate == null || isActivate == 2){
				$.DialogByZ.Confirm({Title: "提示", Content: "您的账号还未激活，是否激活！",BtnL:"是",BtnR:"否",FunL:function(){
					location.href = "/shyhApi/bosAcctActivate";
					},FunR:function(){
						location.href = "/userAccount/queryCz";
					}
				});
				return false;
			}
			if(changVal == 0){
                if(!this.dataindex){
                  $.DialogByZ.Alert({Title: "提示", Content: "请选择银行",BtnL:"知道了"})
                  return false;
                }
			}
			if(changVal == 1){
                if(!this.phonecode){
                  $.DialogByZ.Alert({Title: "提示", Content: "请输入验证码",BtnL:"知道了"})
                  return false;
                }
			}
			return true;
		},

      }

	}
</script>

<style rel="stylesheet" scoped>
     .accountBank li{
        background: #ffffff;
     }
     .accountBank li .on{
       color:#ff0000;
     }
</style>