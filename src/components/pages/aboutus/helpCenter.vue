<template>
<div>
  <header-div message="帮助中心" path="/find" headPhone="true"></header-div>
  <div class="fixTop">
	  <ul class="centerBlock commonQuest clearfix">
		  <li class="noBorderR fl box_S"  style="width:50%;">
			  <router-link to="/commonProblem">
				  <span class="iconfont blue">&#xe60f;</span>
				  <p>常见问题</p>
			  </router-link>
		  </li>
		  <li class="fl box_S"  style="width:50%;">
			  <router-link to="/cInvestManage">
				  <span class="iconfont orange">&#xe610;</span>
				  <p>投资管理</p>
			  </router-link>
		  </li>
	  </ul>
	  <div class="cpmid">
		  <div class="questionTitle">热门问题</div>
		  <div class="cpTab commonTab">
			  <div class="title"><p>旧版钱趣多用户可以直接登录新版钱趣多吗？</p></div>
			  <div class="detail">旧版钱趣多的注册用户可以直接使用原登录账号和密码登录新版钱趣多，但需要在新版钱趣多平台开通第三方存管账户方可进行充值、投资、提现等操作。</div>
		  </div>
		  <div class="cpTab commonTab">
			  <div class="title"><p>旧版钱趣多还可以续投吗？</p></div>
			  <div class="detail">旧版钱趣多的续投功能将持续开放至2016年10月10日（暂定），在此期间，投资人可以照常进行月月赚和季季发的续投，收益保持不变。之后旧版钱趣多将关闭续投功能用户正常获得收益直至投资期限到期。</div>
		  </div>
		  <div class="cpTab commonTab">
			  <div class="title"><p>在钱趣多平台投资是否受法律保护？</p></div>
			  <div class="detail">投资人在钱趣多的投资受到法律保护，法律依据有《合同法》、《关于人民法院审理借贷案件的若干意见》等，详见钱趣多平台《法律保障》相关法律条款。</div>
		  </div>
		  <div class="cpTab commonTab">
			  <div class="title"><p>钱趣多如何保障投资会员的资金安全？</p></div>
			  <div class="detail">
				  1、保理业务项下提供足额银行承兑汇票担保</br>
				  2、银行承兑汇票由钱橙金服指定合作银行进行票据托管</br>
				  3、银行承兑汇票到期由承兑银行无条件兑付
			  </div>
		  </div>
		  <div class="cpTab commonTab">
			  <div class="title"><p>什么是资金存管？</p></div>
			  <div class="detail">根据《关于促进互联网金融健康发展的指导意见》第十四条“客户资金第三方存管制度” :除另有规定外，从业机构应当选择符合条件的银行业金融机构作为资金存管机构，对客户资金进行管理和监督，实现客户资金与从业机构自身资金分账管理；
				  以及《网络借贷信息中介机构业务活动管理暂行办法（征求意见稿）》第二十八条“客户资金保护”：网络借贷信息中介机构应当实行自身资金与出借人和借款人资金的隔离管理，选择符合条件的银行业金融机构作为出借人与借款人的资金存管机构；第三十六“客户资金存管”：资金存管机构对出借人与借款人开立和使用资金账户进行管理和监督，并根据合同约定，依照出借人与借款人向网络借贷信息中介机构发出的指令，对出借人与借款人的资金进行存管、划付、核算和监督。资金存管机构承担实名开户和履行合同约定及借贷交易指令表面一致性的形式审核责任。
				  根据上述监管意见，资金存管是指网络借贷信息中介机构（网贷平台）与符合条件的银行签署资金存管协议，该银行作为出借人与借款人的资金存管机构。资金存管银行根据合同约定，依照出借人与借款人向网络借贷信息中介机构发出的指令，对出借人与借款人的资金进行存管、划付、核算和监督。</div>
		  </div>
		  <div class="cpTab commonTab">
			  <div class="title"><p>如何开通新版钱趣多第三方存管账户？</p></div>
			  <div class="detail">登录钱趣多平台，在【我的账户】-【充值】页面，点击【立即开通】，跳转第三方支付机构的账户开通页面，按照要求填写信息完成开通。</div>
		  </div>
		  <div class="cpTab commonTab">
			  <div class="title"><p>平台钱趣多是合法的运营网站吗？</p></div>
			  <div class="detail">
				  钱趣多（www.qianquduo.com）是上海钱橙互联网金融信息服务有限公司（简称钱橙金服）旗下互联网金融平台，致力于通过技术创新、产品创新、服务创新、管理创新，为广大投资会员提供稳健的投资选择和卓越的服务体验。</br>
				  工商企业信用信息查询：全国企业信用信息公示系统http://gsxt.saic.gov.cn，查询时请输入公司名称“上海钱橙互联网金融信息服务有限公司”
			  </div>
		  </div>
		  <div class="cpTab commonTab">
			  <div class="title"><p>钱趣多平台是否接入银行资金存管？</p></div>
			  <div class="detail">钱趣多即将开通银行存管，由银行对出借人与借款人的资金进行存管、划付、核算和监督。</div>
		  </div>
		  <div class="cpTab commonTab">
			  <div class="title"><p>什么是保票通？</p></div>
			  <div class="detail">
				  保票通是创新性的“商业保理+银行承兑汇票质押担保”金融产品，由上海钱橙互联网金融信息服务有限公司（钱橙金服）与保理公司合作共同推出，通过保理公司在商业保理领域的丰富资源和专业风控经验，为借款企业提供保理服务，同时由借款企业提供足额银行承兑汇票质押，业务合法合规、项目信息真实透明、还款来源明确、流动性较高。</div>
		  </div>
	  </div>
  </div>
</div>  
</template>
<script>
   import store from '../../../store'
   import headerDiv from '../../common/HeaderDiv'
   export default {
     components:{
	      headerDiv 
	  },
      computed: {
	        titles () {
	          return store.state.title
	        },
	  },      
      mounted(){
         this.setTitle();
      },
      destroyed(){
          //组件移除事件
          $("body").removeClass("f1bg")
      },
      methods:{
          setTitle:function(){
             store.commit('TITLE','帮助中心');
             this.$nextTick(function(){
                       $(function(){
							//点击切换
							
							 //点击打开详情
							  $(".commonTab").click(function(){
								  if($(this).hasClass("open")){
									  $(this).removeClass("open");
								  }else{

									  $(this).addClass("open").siblings(".commonTab").removeClass("open");;
								  }
							  })

                       })

             })  
          },          
      }
   }
</script>