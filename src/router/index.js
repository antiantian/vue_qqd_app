const KEY = 'LOGIN_TOKEN';
const login_token = localStorage.getItem(KEY)
import Vue from 'vue'
import Router from 'vue-router'
import store from '../store'
Vue.use(Router)
const routes = [
  {
    path: '/',
    redirect:'/index'
  },
  {
     path: '/login',
     component: resolve => require(['../components/pages/account/login.vue'], resolve)
  },
  {
      path: '/register',//投资列表
      component: resolve => require(['../components/pages/account/register.vue'], resolve)
  },
  {
      path: '/findPassword',//找回密码
      component: resolve => require(['../components/pages/account/findPwd.vue'], resolve)
  },
  {
     path:'/frontColumnDetail',//通知公告
     component: resolve=> require(['../components/pages/messages/notice.vue'], resolve)
  },
  { 
    path:'/zBannerThird',//资金三方存管
     component: resolve=> require(['../components/pages/aboutus/zBannerThird.vue'], resolve)
  },
  {
    path:'/zBannerBank',//标的资产银行存管
    component: resolve=> require(['../components/pages/aboutus/zBannerBank.vue'], resolve)
  },
  { 
    path:'/find',//通知公告
     component: resolve=> require(['../components/pages/aboutus/find.vue'], resolve)
  },
  {
    path:'/zAboutUs',//关于我们
    component: resolve=> require(['../components/pages/aboutus/zAboutUs.vue'], resolve)
  },
  {
    path:'/zAsecurity',//安全保障
    component: resolve=> require(['../components/pages/aboutus/zAsecurity.vue'], resolve)
  },
  {
    path:'/helpCenter',//帮助中心
    component: resolve=> require(['../components/pages/aboutus/helpCenter.vue'], resolve)
  },
  {
    path:'/commonProblem',//常见问题
    component: resolve=> require(['../components/pages/aboutus/commonProblem.vue'], resolve)
  },
  {
    path:'/cpregister',//注册认证
    component: resolve=> require(['../components/pages/aboutus/cpregister.vue'], resolve)
  },
  {
    path:'/cprecharge',//充值
    component: resolve=> require(['../components/pages/aboutus/cprecharge.vue'], resolve)
  },
  {
    path:'/cpwithdraw',//提现
    component: resolve=> require(['../components/pages/aboutus/cpwithdraw.vue'], resolve)
  },
  { 
    path:'/cInvestManage',//投资管理 
    component: resolve=> require(['../components/pages/aboutus/cInvestManage.vue'], resolve)
  },
  { 
    path:'/ciOpenAccount',//开户 
    component: resolve=> require(['../components/pages/aboutus/ciOpenAccount.vue'], resolve)
  },
  { 
    path:'/ciTieCard',//绑卡 
    component: resolve=> require(['../components/pages/aboutus/ciTieCard.vue'], resolve)
  },
  { 
    path:'/ciInvest',//投资
    component: resolve=> require(['../components/pages/aboutus/ciInvest.vue'], resolve)
  },
  { 
    path:'/ciSure',//保票通 
    component: resolve=> require(['../components/pages/aboutus/ciSure.vue'], resolve)
  },
  { 
    path:'/ciNoun',//名称解释 
    component: resolve=> require(['../components/pages/aboutus/ciNoun.vue'], resolve)
  },
  {
    path:'/cTariff',//资费管理
    component: resolve=> require(['../components/pages/aboutus/cTariff.vue'], resolve)
  },
  {
    path:'/ctariffExplain',//资费说明
    component: resolve=> require(['../components/pages/aboutus/ctariffExplain.vue'], resolve)
  },
  {
    path:'/ctDDXExplain',//多多金说明
    component: resolve=> require(['../components/pages/aboutus/ctDDXExplain.vue'], resolve)
  },
  {
    path:'/ctJXQExplain',//加息券说明
    component: resolve=> require(['../components/pages/aboutus/ctJXQExplain.vue'], resolve)
  },
  {
    path:'/customerService',//客户服务
    component: resolve=> require(['../components/pages/aboutus/customerService.vue'], resolve)
  },
  {
    path:'/companyDynamics',//公司动态  动态的。。。。。。。。。。。。
    component: resolve=> require(['../components/pages/aboutus/companyDynamics.vue'], resolve)
  },
  {
    path:'/zNewGuide',//新手指引
    component: resolve=> require(['../components/pages/zNewGuide'], resolve)
  },
  {
    path:'/openDepository',//开通存管账户
    component: resolve=> require(['../components/pages/userAccount/openDepository'], resolve)
  },
  {
    path:'/shyh/openAccount',//开通存管账户
    component: resolve=> require(['../components/pages/userAccount/openAccount'], resolve)
  },
  {
        path: '/',
        component: resolve => require(['../components/common/Main.vue'], resolve),
        children:[
            {
               path: '/index',
                component: resolve => require(['../components/pages/index.vue'], resolve)
            },
            {
                path: '/investlist',//投资列表
                component: resolve => require(['../components/pages/investlist.vue'], resolve)
            },
            {
                path: '/menberCenter',//会员中心
                component: resolve => require(['../components/pages/menberCenter.vue'], resolve)
            },
            {
                path:'/userAccount',
                component:resolve => require(['../components/common/userAccount.vue'],resolve),
                children:[
                     {
                      path:'/userAccount/accountCenter',
                      component:resolve => require(['../components/pages/accountCenter.vue'],resolve),
                     }
                ]
            }
        ]
  },
  {
    path: '/investDetail',
    component: resolve => require(['../components/pages/product/investDetail.vue'], resolve)
  },
  {
    path: '/userAccount/queryCz',
    component: resolve => require(['../components/pages/userAccount/queryCz.vue'], resolve)
  },
  {
    path: '/userAccount/queryTx',
    component: resolve => require(['../components/pages/userAccount/withdrawals.vue'], resolve)
  },
  {
    path: '/investImmediately',  //立即投资
    component: resolve => require(['../components/pages/product/investImmediately.vue'], resolve)
  },
  {
    path:'/projectDetailsCommon', //项目详情
    name:'projectDetails',
    component: resolve => require(['../components/pages/product/projectDetailsCommon.vue'], resolve)
  },
  {
    path:'/investmentRecordCommon', //投资记录
    component: resolve => require(['../components/pages/product/investmentRecordCommon.vue'], resolve)
  },
  {
    path:'/repaymentPlanCommon', //还款计划
    component: resolve => require(['../components/pages/product/repaymentPlanCommon.vue'], resolve)
  },
  {
    path:'/creditProtocol',
    component: resolve => require(['../components/pages/Protocol/creditProtocol.vue'], resolve)
  },
  {
    path:'/zLuckdraw',//抽奖
    component: resolve => require(['../components/pages/menberCenter/zward'], resolve)
  },
  {
    path:'/cashAPrize',//兑换码
    component:resolve => require(['../components/pages/menberCenter/cashAPrize'], resolve)
  },
  {
    path:'/upgradepacks',//升级礼包
    component:resolve => require(['../components/pages/menberCenter/upgradpacks'], resolve)
  },
  {
    path:'/zIntegralrule',//积分规则
    component:resolve => require(['../components/pages/menberCenter/zIntegralrule'], resolve)
  },
  {
    path:'/integralTask',//积分任务
    component:resolve => require(['../components/pages/menberCenter/integralTask'], resolve)
  },
  {
    path:'/integralDetail',//积分明细
    component:resolve => require(['../components/pages/menberCenter/integralDetail'], resolve)
  }
]

// 页面刷新时，重新赋值token
if (login_token) {
    store.commit('LOGIN', JSON.parse(login_token))
}
const router = new Router({
    mode:'history',
    routes,
    scrollBehavior (to, from, savedPosition) {
      if (to.hash) {
        return {
          selector: to.hash
        }
      }
    }
})
router.beforeEach((to, from, next) => {
    if (to.matched.some(r => r.meta.requireAuth)) {
        if (store.state.token) {
            if(to.matched.some(r => r.meta.requireOaa)){
                next();
            }else{
                next();
            }
        }
        else {
            next({
                path: '/login',
                query: {redirect: to.fullPath}
            })
        }
    }
    else {
        next();
    }
})

export default router
