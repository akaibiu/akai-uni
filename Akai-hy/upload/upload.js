// 此处代码为路由upload请求封装代码。如果有错误或者需要优化的地方，请联系作者。
// import store from '@/store'
import config from '@/config/config.js'
import { getToken } from '@/utils/auth'
import tool from '@/utils/common.js';
let timeout = 10000
const baseUrl = config.baseUrl

const upload = config => {
	const isToken =config.headers.isToken;// 如果isToken为true的时候需要token(一般会在登录的时候存储token和token_type)  为false不需要token
	config.header = config.header || {};
	if (getToken() && isToken) {
		config.header['Authorization'] = uni.getStorageSync('token_type')+ uni.getStorageSync('token'); 
		// config.header['Authorization'] = 'Bearer ' + uni.getStorageSync('token'); // token_type 一般情况下为'Bearer ' 切记有空格哦
	};
	// config.header['Content-Type'] = 'application/x-www-form-urlencoded'; // 常规请求头配置
	// get请求映射params参数
	if (config.params) {
		let url = config.url + '?' + tool.tansParams(config.params)
		url = url.slice(0, -1)
		config.url = url
	}
	return new Promise((resolve, reject) => {
		uni.uploadFile({
			timeout: config.timeout || timeout,
			url: baseUrl + config.url,
			filePath: config.filePath,
			name: config.name || 'file',
			header: config.header,
			formData: config.formData,
			success: (response) => {
				let result = JSON.parse(response.data)
				const code = result.code || 200
				const msg =result.msg
				if (code === 200) {
					resolve(result)
				} else if (code == 401) {
					tool.showConfirm('登录状态已过期，您可以继续留在该页面，或者重新登录?').then(res => {
					  if (res.confirm) {
					      uni.reLaunch({ url: '/pages/login' })
					    // })
					  }
					})
					reject('无效的会话，或者会话已过期，请重新登录。')
				} else if (code === 500) {
					tool.toastTip(msg, 'none', 1500)
					reject('500')
				} else if (code !== 200) {
					tool.toastTip(msg, 'none', 1500)
					reject(code)
				}
				resolve(response.data)
			},
			fail: (error) => {
				let {message} = error;
				if (message === 'Network Error') {
					message = '后端接口连接异常'
				} else if (message.includes('timeout')) {
					message = '系统接口请求超时'
				} else if (message.includes('Request failed with status code')) {
					message = '系统接口' + message.substr(message.length - 3) + '异常'
				}
				tool.toastTip(message, 'none', 1500)
				reject(error)
			}
		})
	})
}

export default upload
