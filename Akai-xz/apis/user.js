
/**
 *  @description 此处代码为axios第二层封装(封装接口请求功能函数)
 *  @abstract 以下接口仅为示例代码,您在使用时一定要替换成自己的接口(包括url、method、data、isToken)
 *  @param request request 是导入的请求函数体
 *  @abstract request-s.js 是普通的request请求封装升级版(并且加持了 无感刷新 token 功能的)
 *  @abstract request.js   是普通的request请求封装
 *  @param upload upload 是上传文件的上传函数体
 *  @param param param 是请求或者上传时需要传递的参数
 *  @param isToken isToken 在请求时是否需要携带token
 *  @param isToken @abstract  如果为 false 不需要携带token 
 *  @param isToken @abstract  如果为 true 需要携带token 
 *  @author Coding by Akai,Dear user,if you think this a litte uncertain,please add my WeChat to contact me;
 *  @description WeChat Akaibiu (添加时请备注来意,谢谢~!!!)
 *  @version 1.0.0 
 */
// import request from '@/request/request-s.js'; 
import request from '@/request/request.js'; 
import upload from '@/upload/upload.js';	


/**
 * @description  刷新token
 */ 
export function refreshToken(param){
	return request({
		url: '/api/refresh-token/',
		headers: {
			isToken: false,
		},
		method: 'post',
		data: param
	})
}


/**
 * @description  知乎热榜测试接口(z-paging刷新) 
 */ 
export function zhiHuHotListApi(param){
	return request({
		url:'/api/v3/feed/topstory/hot-lists/total'+'?'+param,
		headers: {
			isToken: false,
		},
		method: 'get',
	})
}

 
/**
 * @description  修改用户信息
 */ 
export function modifyUserInfoApi(param) {
	return request({
		url: '/base_info_client_api/wxapp_user_edit',
		headers: {
			isToken: false,
		},
		method: 'PUT',
		data: param
	})
}

/**
 * @description  修改用户信息
 */ 
export function modifyUserInfoApiBypost(param) {
	return request({
		url: '/base_info_client_api/wxapp_user_edit',
		headers: {
			isToken: false,
		},
		method: 'post',
		data: param
	})
}


/**
 * @description  头像上传
 * @abstract upload 上传请求
 */ 
export function headerImageUploadApi(param) {
	return upload({
		url: '/base_info_client_api/uploadAvatar',
		headers: {
			isToken: false,
		},
		name :param.name ,
		filePath: param.avatarfile,
	})
}
