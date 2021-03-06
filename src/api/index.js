/**
 * Created by qianqudao
 * 建议:所有接口名称全小写
 */
const baseURL='api'
export default {
	//用户模块接口
	login:          baseURL+'/index/login', 			// 登录接口
	loginout: 	    baseURL+'/user/signOut',			// 用户注销
	getuserinfo:    baseURL+'/user/getUserInfo',		// 获取用户信息
	getimgcode:     baseURL+'/common/jCaptcha',			//获到验证码和较验验证码
	sendsmscode:  	baseURL+'/common/sendSMSCode',		//发送短信验证码
	register:       baseURL+'/user/register',			//用户注册
	investlist:     baseURL+'/product/investlist',		//获取产品列表
	investDetail:   baseURL+'/product/investDetail',	//获取产品详情
	integralDetail: baseURL+'/memberCenter/integralDetail',  //积分详情
	gift:           baseURL+'/memberCenter/gift',       //我的奖品
}

