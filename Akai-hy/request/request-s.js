/**
 *  @description 此处请求封装适用于普通request请求需要携带token并且需要无痛刷新token的应用场景
 *  @param config config 是全局的配置文件对象(包含url/appid等一些其他你项目需要用到的配置信息)
 *  @param getToken getToken 是获取本地存储token的方法
 *  @param setToken setToken 是设置本地存储token的方法
 *  @param tool tool 是封装的一些公共API适用方法(toast/confirm...)
 *  @param timeout timeout 设置请求超时时间 
 *  @param waitRequestList waitRequestList  请求等待队列数组
 *  @param isRefreshingToken isRefreshingToken  是否需要刷新token(默认为false不需要刷新token)
 *  @param refreshToken refreshToken 刷新token的请求函数
 *  @author Coding by Akai,Dear user,if you think this a litte uncertain,please add my WeChat to contact me;
 *  @description WeChat Akaibiu (添加时请备注来意,谢谢~!!!)
 *  @version 1.0.0 
 */
import config from '@/config/config.js';
import {
	getToken,
	setToken
} from '@/utils/auth';
import tool from '@/utils/common.js';
import {
	refreshToken
} from '@/apis/user.js';
let timeout = 10000;
let waitRequestList = [];
let isRefreshingToken = false;
const baseUrl = config.baseUrl;
const request = config => {
	/**
	 * @description  如果isToken为true的时候需要token(一般会在登录的时候存储token和token_type)  为false不需要token
	 * @description  config.header['Authorization'] = 'Bearer ' + uni.getStorageSync('token'); // token_type 一般情况下为'Bearer ' 切记有空格哦
	 * @description  config.header['Content-Type'] = 'application/x-www-form-urlencoded'; // 常规请求头配置
	 */
	const isToken = config.headers.isToken;
	config.header = config.header || {};
	if (getToken() && isToken) {
		config.header['Authorization'] = uni.getStorageSync('token_type') + uni.getStorageSync('token');
	};
	/**
	 * @description  get请求映射params参数
	 */
	if (config.params) {
		let url = config.url + '?' + tool.tansParams(config.params)
		url = url.slice(0, -1)
		config.url = url
	}
	return new Promise((resolve, reject) => {
		uni.request({
			method: config.method || 'get',
			timeout: config.timeout || timeout,
			url: config.baseUrl || baseUrl + config.url,
			data: config.data,
			header: config.header,
			dataType: 'json',
			success(res) {
				switch (res.data.code) {
					case 401:
						/**
						 * @description 如果需要刷新token的时候,调用刷新token函数。此处!isRefreshingToken的值是true
						 */
						if (!isRefreshingToken) {
							/**
							 * @description 调用刷新token函数
							 */
							refreshTokenfn();
						}
						resolve(new Promise(reslove => {
							/**
							 * @description 将当前请求添加到请求队列中;等待刷新token函数执行后执行,实现无痛刷新。
							 */
							waitRequestList.push(() => {
								reslove(request(config))
							})
						}))
						break;
					case 500:
						tool.toastTip(res.data.msg, 'none', 1500);
						break;
					default:
						/* 默认执行操作 */
						break;
				}
				/**
				 * @description 请求成功返回的数据
				 */
				resolve(res.data)
			},
			fail: (error) => {
				let {
					errMsg
				} = error
				if (errMsg === 'Network Error') {
					errMsg = '后端接口连接异常'
				} else if (errMsg.includes('timeout')) {
					errMsg = '系统接口请求超时'
				} else if (errMsg.includes('Request failed with status code')) {
					errMsg = '系统接口' + errMsg.substr(errMsg.length - 3) + '异常'
				}
				tool.toastTip(errMsg, 'none', 1500)
				/**
				 * @description 请求失败返回的消息
				 */
				reject(error)
			},
			complete() {
				/**
				 * @description 请求完做的事
				 */
				uni.hideLoading()
			}
		})
	})
}

/**
 * @description 刷新token功能函数
 * @param 		无需请求参数
 * @author      Code By Akai,if you think this a litte uncertain,Please add my WeChat to contact me;
 */
function refreshTokenfn() {
	isRefreshingToken = true; // 需要刷新token标识为true
	refreshToken().then(res => {
		if (res.data.code === 401 || res.data.code === 400) {
			/**
			 * @description 未登录,跳转到登录页
			 */
			uni.reLaunch({
				url: '/pages/login/login'
			})
			return
		}
		/**
		 * @description 存储返回的token
		 * @description 是否需要刷新token为false
		 * @description 清空 waitRequestList请求等待队列
		 */
		setToken(res.data.token); // 
		isRefreshingToken = false; // 
		waitRequestList.map(ak => ak())
		waitRequestList = []
	})
}

/**
 *  @description 暴露出request请求供其他业务使用
 */

export default request