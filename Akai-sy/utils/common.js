// import Md5 from 'js-md5'; //  引入
//------------------------------------------------------注意：以下JS库为摘录+自己整合-谨慎使用
let tool = {
	/**
	 * 获取sign(业务接口请求工具函数)
	 * &&key.indexOf(' ')==-1
	 * @param Object oldData 需要处理的对象
	 */
	getPostData(oldData) {
		let newData = {};
		let signStr = '';
		const qunayi_appSign="测试用的appSign";
		Object.keys(oldData).sort().forEach(function(key) {
			newData[key] = oldData[key];
			if (key.toLowerCase() !== 'sign' && oldData[key] != null && oldData[key] != "" && oldData[
					key] != undefined) {
				signStr += '&' + key + '=' + oldData[key];
			}
		});
		signStr = signStr.slice(1, signStr.length)
		newData.sign = Md5(signStr + qunayi_appSign);
		return newData
	},
	/**
	 * 显示模态弹窗
	 * @param content 提示的标题
	 */
	showConfirm(content) {
		return new Promise((resolve, reject) => {
			uni.showModal({
				title: '提示',
				content: content,
				cancelText: '取消',
				confirmText: '确定',
				success: function(res) {
					resolve(res)
				}
			})
		})
	},
	/**
	 * 挂载页面loadingbox
	 * @param string title 标题
	 * @param Number time  持续时间
	 */
	loadingFn(title, time) {
		uni.showLoading({
			title: title,
		});
		setTimeout(function() {
			uni.hideLoading()
		}, time);
	},
	/**
	 * 确认取消订单弹窗
	 * @param function fn 	回调
	 * @param string   arg  形式参数
	 */
	// 确认取消订单弹窗
	confirmCancelBoxFn(fn, arg) {
		uni.showModal({
			title: '取消订单',
			content: '您确定取消该订单吗?取消后订单无法恢复!',
			cancelText: "取消",
			confirmText: "确认",
			showCancel: true,
			confirmColor: '#333',
			cancelColor: '#4c68b5',
			success: (res) => {
				if (res.confirm) {
					fn(arg);
				} else {
					console.log('取消');
					uni.showToast({
						title: '您已取消操作!',
						icon: 'none',
						duration: 1000
					})
				}
			}
		});
	},
	/**
	 * 确认删除订单弹窗
	 * @param function fn 	回调
	 * @param string   arg  形式参数
	 */
	confirmDeleteBoxFn(fn, arg) {
		uni.showModal({
			title: '删除订单',
			content: '您确定要删除该订单吗?删除后订单无法恢复!',
			cancelText: "取消",
			confirmText: "确认",
			showCancel: true,
			confirmColor: '#333',
			cancelColor: '#4c68b5',
			success: (res) => {
				if (res.confirm) {
					fn(arg);
				} else {
					console.log('取消删除');
					uni.showToast({
						title: '您已取消删除!',
						icon: 'none',
						duration: 1000
					})
				}
			}
		});
	},
	/**
	 *  确认删除订单弹窗
	 * @param function fn 	回调
	 * @param string   arg  形式参数
	 */
	authFailed(account) {
		uni.showModal({
			title: '温馨提示',
			content: '您的充值号码' + account + '，已订购过此权益或不满足充值条件，请尝试其他手机号。',
			confirmText: "换个账号",
			showCancel: false,
			confirmColor: '#007aff',
			cancelColor: '#333',
			success: (res) => {
				if (res.confirm) {
					// fn(arg);
				}
			}
		});
	},
	/**
	 *  次数达到上限
	 * @param function fn 	回调
	 * @param string   arg  形式参数
	 */
	maxClickCount(btnClickCount, fn) {
		uni.showModal({
			title: '温馨提示',
			content: '您好,今日获取验证码已达' + btnClickCount + '，次上限!,请明日再试!',
			confirmText: "换个账号",
			showCancel: false,
			confirmColor: '#007aff',
			cancelColor: '#333',
			success: (res) => {
				if (res.confirm) {
					fn();
				}
			}
		});
	},
	/**
	 *  鉴权网络错误,上游未返回鉴权响应
	 * @param function fn 	回调
	 * @param string   arg  形式参数
	 */
	noNetWorkModel() {
		uni.showModal({
			title: '温馨提示',
			content: '网络错误,请稍后重试!',
			confirmText: "重新验证",
			showCancel: false,
			confirmColor: '#007aff',
			cancelColor: '#333',
			success: (res) => {
				if (res.confirm) {

				}
			}
		});
	},
	/**
	 * 确认删除订单弹窗
	 * @param function fn 	回调
	 * @param string   arg  形式参数
	 */
	waittingForMessageModel(yes, no) {
		uni.showModal({
			title: '温馨提示',
			content: '收到的验证码短信可能有延迟,请问是否稍稍等待？',
			cancelText: "否",
			confirmText: "是",
			showCancel: true,
			confirmColor: '#666',
			cancelColor: '#007aff',
			success: (res) => {
				if (res.confirm) {
					yes();
				} else {
					no();
					console.log('不等了,等不到了');
					uni.showToast({
						title: '您已取消等待!',
						icon: 'none',
						duration: 1000
					})
				}
			}
		});
	},
	/**
	 * 一维数组转二维数组树形结构功能函数
	 * @param Array arr 需要处理的数组
	 * @description 需要传递一个数组 函数执行处理完毕后会返回一个数组
	 */
	tansformArrayToTree(arr) {
		const parent = [];
		const children = [];
		for (iterator of arr) {
			iterator?.Name?.includes("_") ?
				children.push(iterator) :
				parent.push(iterator);
		}
		for (let i = 0; i < children.length; i++) {
			let key = children[i].Name.substr(0, children[i].Name.indexOf("_"));
			for (let j = 0; j < parent.length; j++) {
				if (parent[j].Name === key) {
					parent[j].children ?
						parent[j].children.push(children[i]) :
						(parent[j].children = [children[i]]);
				}
			}
		}
		return parent;
	},

	/**
	 * 一维数组转二维数组树形结构功能函数
	 * @param Array arr 需要处理的数组
	 * @description 需要传递一个数组 函数执行处理完毕后会返回一个数组
	 */
	listTreeFn(arr) {
		let fn = arr.map((item) => ({
			id: item.Name,
			pid: item.Name.split("_").slice(0, item.Name.split("_").length - 1).join("_"),
			...item,
		}));

		function listTree(list) {
			list.forEach((child) => {
				const pid = child.pid;
				if (pid) {
					list.forEach((parent) => {
						if (parent.id === pid) {
							parent.children = parent.children || [];
							parent.children.push(child);
						}
					});
				}
			});
			return list.filter((n) => !n.pid);
		}
		return listTree(fn)
	},
	// 断网
	isHaveNetwork() {
		uni.getNetworkType({
			success: (res) => {
				if (res.networkType == 'none') {
					uni.showModal({
						title: '当前无网络连接!',
						content: '请您检查网络是否链接正常!请打开WIFI或者移动数据。',
						success: (res) => {
							if (res.confirm) {
								uni.navigateTo({
									url: '/pages/404/404.vue'
								})
							} else {
								uni.navigateTo({
									url: '/pages/404/404.vue'
								})
							}
						}
					});
				} else {
					console.log('网络已连接,可以正常访问!') //有网
				}
				setTimeout(function() {
					return res.networkType
				}, 500);
			}
		});
	},
	/**
	 * @function @param {Object}  
	 * @description 判断一年四季
	 **/
	getSeason() {
		const month = new Date().getMonth() + 1;
		let swiperList = [
			'https://cdn.nlark.com/yuque/0/2021/jpeg/280373/1634447398840-assets/web-upload/2a4ddf64-0964-4a00-b96a-1fd3ef40814c.jpeg',
			'https://cdn.nlark.com/yuque/0/2021/jpeg/280373/1634447401422-assets/web-upload/1db4ca34-4b6c-41f8-9cb4-93ebce19d66d.jpeg',
			'https://cdn.nlark.com/yuque/0/2021/jpeg/280373/1634447404689-assets/web-upload/7da8aaa2-738c-4457-bcca-e654d887e1d7.jpeg',
			'https://cdn.nlark.com/yuque/0/2021/jpeg/280373/1634447407344-assets/web-upload/96ebfb0d-7186-4fb9-8133-8d7f37fec56e.jpeg',
		];
		let swiperUrl = null;
		switch (month) {
			case 3 || 4 || 5:
				swiperUrl = swiperList[0];
				break;
			case 6 || 7 || 8:
				swiperUrl = swiperList[1];
				break;
			case 9 || 10 || 11:
				swiperUrl = swiperList[2];
				break;
			case 2 || 1 || 12:
				swiperUrl = swiperList[3];
				break;
			default:
				swiperUrl = swiperList[2];
				break;
		};
		return swiperUrl;
	},
	/**
	 * @description uniapp获取小程序的appId
	 * */
	getAppId() {
		return uni.getAccountInfoSync ? uni.getAccountInfoSync().miniProgram.appId : '';
	},
	/**
	 * @desc uni获取经纬度
	 */
	uniGetLocation({
		type = 'wgs84',
		...moreOptions
	} = {}) {
		return new Promise((resolve) => {
			uni.getLocation({
				type,
				success({
					longitude,
					latitude
				}) {
					console.log(`当前位置的经度：${longitude}`);
					console.log(`当前位置的纬度：${latitude}`);
					resolve({
						longitude,
						latitude,
					});
				},
				...moreOptions,
			});
		});
	},
	/**
	 * @description 调起内置地图选择位置
	 */
	uniChooseLocation({
		...moreOptions
	} = {}) {
		return new Promise((resolve) => {
			uni.chooseLocation({
				success(res) {
					console.log('uni.chooseLocation.res', res);
					const {
						address,
						latitude,
						longitude,
						name,
					} = res;
					resolve({
						status: true,
						address,
						latitude,
						longitude,
						name,
					});
				},
				fail(err) {
					console.log('uni.chooseLocation.err', err);
					resolve({
						status: false,
						address: '',
						latitude: 0,
						longitude: 0,
					});
				},
				...moreOptions,
			});
		});
	},
	/**
	 * @description uniapp获取经纬度
	 */
	uniOpenLocation({
		latitude = 39.909,
		longitude = 116.39742,
		...moreOptions
	} = {}) {
		return new Promise((resolve) => {
			uni.openLocation({
				latitude,
				longitude,
				success(res) {
					console.log('uni.uniOpenLocation.res', res);
					resolve({
						status: true
					});
				},
				fail(err) {
					console.log('uni.uniOpenLocation.err', err);
					resolve({
						status: false
					});
				},
				...moreOptions,
			});
		});
	},
	/**
	 * 参数处理
	 * @param params 参数
	 */
	tansParams(params) {
		let result = ''
		for (const propName of Object.keys(params)) {
			const value = params[propName]
			var part = encodeURIComponent(propName) + "="
			if (value !== null && value !== "" && typeof(value) !== "undefined") {
				if (typeof value === 'object') {
					for (const key of Object.keys(value)) {
						if (value[key] !== null && value[key] !== "" && typeof(value[key]) !== 'undefined') {
							let params = propName + '[' + key + ']'
							var subPart = encodeURIComponent(params) + "="
							result += subPart + encodeURIComponent(value[key]) + "&"
						}
					}
				} else {
					result += part + encodeURIComponent(value) + "&"
				}
			}
		}
		return result
	},
	/**
	 * 授权登录提示框
	 * @param string url  页面跳转地址
	 */
	pleaseLoginTipBox(url) {
		uni.showModal({
			title: '温馨提示',
			content: '您尚未完成微信授权或手机号授权,建议授权以便获得更好的体验!',
			cancelText: "取消",
			confirmText: "去授权",
			showCancel: true,
			confirmColor: '#4e6ef2',
			cancelColor: '#333',
			success: (res) => {
				if (res.confirm) {
					uni.navigateTo({
						url: url
					})
				} else {
					console.log('任然取消授权');
					uni.navigateBack({
						delta: 1
					})
				}
			}
		})
	},
	/**
	 * toast提示框
	 * @param string title 	提示文字
	 * @param string icon 	图标样式
	 * @param string time 	动画时长
	 */
	toastTip(title, icon, time) {
		uni.showToast({
			title: title || '网络连接超时,请稍后重试!',
			icon: icon || 'none',
			duration: time || 1500
		})
	},
	/**
	 * Loading加载提示框
	 * @param string title 	加载提示文本信息
	 */
	showLoading(title) {
		uni.showLoading({
			title: title
		})
	},
	/**
	 * 根据对象数组的某个属性值做排序
	 * @param @property {Boolean} lift  false 降序 true 升序
	 * @param @property {String} attr  attribute
	 * @example arr.sort(arrSortByObjectAttribute('index',true))
	 * @example arr.sort(arrSortByObjectAttribute('index',false))
	 * @author Mr.Qiu
	 */
	arrSortByObjectAttribute(attr, lift = false) {
		lift = lift ? 1 : -1
		return function(a, b) {
			a = a[attr];
			b = b[attr];
			if (a > b) {
				return lift * 1
			} else if (a < b) {
				return lift * -1
			}
			return 0
		}
	},
	/**
	 * 设置手机通知栏字体颜色
	 * @param bool   false 	黑色
	 * @param bool   true 	白色
	 */
	setBarColor(black = false) {
		if (black) {
			uni.setNavigationBarColor({
				frontColor: '#000000',
				backgroundColor: '#FAFAFA'
			});
		} else {
			uni.setNavigationBarColor({
				frontColor: '#ffffff',
				backgroundColor: '#FAFAFA'
			});
		}
	},
	/**
	 * 获取自定义时间(带转换格式)
	 */
	getTimeFnOne() {
		let year = new Date().getFullYear();
		let month = new Date().getMonth() + 1 < 10 ? "0" + (new Date().getMonth() + 1) : new Date().getMonth() + 1;
		let date = new Date().getDate() < 10 ? "0" + new Date().getDate() : new Date().getDate();
		let hh = new Date().getHours() < 10 ? "0" + new Date().getHours() : new Date().getHours();
		let mm = new Date().getMinutes() < 10 ? "0" + new Date().getMinutes() : new Date().getMinutes() + 1;
		let ss = new Date().getSeconds() < 10 ? "0" + new Date().getSeconds() : new Date().getSeconds();
		// this.nowDate = year + ":" + month + ":" + date + "";  // 年月日
		// this.nowTime = hh + ":" + mm ;  // 时分
		return year + ":" + month + ":" + date + "" + hh + ":" + mm;
	},
	/**
	 * 时间戳转换为年月日(XiaoZhou-1999-10-30)
	 * @param string timestamp 	传入时间戳信息
	 */
	getBirthday(timestamp) {
		let date = new Date(timestamp);
		let year = date.getFullYear();
		let month = date.getMonth() + 1;
		let day = date.getDate();
		month = month < 10 ? "0" + month : month;
		day = day < 10 ? "0" + day : day;
		return year + '-' + month + '-' + day;
	},
	/**
	 * 时获取字符串的真实长度（字节长度）
	 * @param string str 	传入字符串
	 */
	strLeng(str) {
		if (str) {
			let len = str.length,
				truelen = 0;
			for (let x = 0; x < len; x++) {
				if (str.charCodeAt(x) > 128) {
					truelen += 2;
				} else {
					truelen += 1;
				}
			}
			return truelen;
		} else {
			return 0;
		}
	},
	/**
	 * 生成随机颜色功能函数
	 *  @param string 返回str
	*/
	_getRandomColor() {
		const rgb = [];
		for (let i = 0; i < 3; ++i) {
			let color = Math.floor(Math.random() * 256).toString(16)
			color = color.length == 1 ? '0' + color : color
			rgb.push(color)
		}
		return '#' + rgb.join('');
	},
	// 获取最近一周的时间
	getWeekTime() {
		//现在的时间
		var arr = [];
		var dates = new Date();
		dates.setDate(dates.getDate() + 1);
		let year = dates.getFullYear();
		let mounth = (dates.getMonth() + 1).toString().padStart(2, '0');
		let day = dates.getDate().toString().padStart(2, '0');
		let hour = dates.getHours().toString().padStart(2, '0');
		let minutes = dates.getMinutes().toString().padStart(2, '0');
		arr[0] = year + '-' + mounth + '-' + day + ' ' + hour + ':' + minutes + ':' + '00';
		// 一周前的时间
		var time = (new Date()).getTime() - 7 * 24 * 60 * 60 * 1000;
		var tragetTime = new Date(time);
		let tyear = tragetTime.getFullYear();
		let tmounth = (tragetTime.getMonth() + 1).toString().padStart(2, '0');
		let tday = tragetTime.getDate().toString().padStart(2, '0');
		let thour = tragetTime.getHours().toString().padStart(2, '0');
		let tminutes = tragetTime.getMinutes().toString().padStart(2, '0');
		arr[1] = tyear + '-' + tmounth + '-' + tday + ' ' + thour + ':' + tminutes + ':' + '00';
		return arr
	},
	/**
	 * 计算页数
	 * @param string total 	总条数
	 * @param string row 	每页显示条数
	 */
	getPageNum(total, row) {
		let num = Number(total) / Number(row);
		//是否为整数
		if (num % 1 !== 0) {
			let b = num.toString(); //转字符串
			let a = parseInt(b.substring(0, b.indexOf('.'))); //取小数点前
			let s = b.replace(/\d+\.(\d*)/, '$1'); //取小数点后
			if (s > 0) {
				num = a + 1;
			}
		}
		return num;
	},
	/**
	 * 格式化时间
	 * @param string time 	传入的时间
	 */
	formatDate(time) {
		// 将xxxx-xx-xx的时间格式，转换为 xxxx/xx/xx的格式
		return time.replace(/\-/g, "/");
	},
	/**
	 * 遍历对象
	 * @param object 	obj 		传入的对象
	 * @param function  callback 	传入的回调
	 */
	objForEach(obj, callback) {
		Object.keys(obj).forEach((key) => {
			callback(obj[key], key)
		});
	},
	/**
	 * 是否在数组内
	 * @param string 	search 		传入的对象
	 * @param array  	array 		传入的数组
	 */
	// 是否在数组内
	inArray(search, array) {
		for (var i in array) {
			if (array[i] == search) return true
		}
		return false
	},
	/**
	 * 对Date的扩展，将 Date 转化为指定格式的String
	 * 月(Y)、月(m)、日(d)、小时(H)、分(M)、秒(S) 可以用 1-2 个占位符，
	 * 例子：
	 * dateFormat('YYYY-mm-dd HH:MM:SS', new Date()) ==> 2020-01-01 08:00:00
	 */
	dateFormat(fmt, date) {
		const opt = {
			"Y+": date.getFullYear().toString(), // 年
			"m+": (date.getMonth() + 1).toString(), // 月
			"d+": date.getDate().toString(), // 日
			"H+": date.getHours().toString(), // 时
			"M+": date.getMinutes().toString(), // 分
			"S+": date.getSeconds().toString() // 秒
			// 有其他格式化字符需求可以继续添加，必须转化成字符串
		};
		let ret
		for (let k in opt) {
			ret = new RegExp("(" + k + ")").exec(fmt)
			if (ret) {
				fmt = fmt.replace(ret[1], (ret[1].length == 1) ? (opt[k]) : (opt[k].padStart(ret[1].length, "0")))
			};
		};
		return fmt
	},
	/**
	 * 是否为空对象
	 * @param object object 传入一个对象
	 */
	isEmptyObject(object) {
		return Object.keys(object).length === 0
	},
	// 节流函数
	// 思路： 第一次先设定一个变量true，
	// 第二次执行这个函数时，会判断变量是否true，
	// 是则返回。当第一次的定时器执行完函数最后会设定变量为flase。
	// 那么下次判断变量时则为flase，函数会依次运行。
	// throttle(fn, delay = 100) {
	// 	// 首先设定一个变量，在没有执行我们的定时器时为null
	// 	var timer = null
	// 	return function() {
	// 		// 当我们发现这个定时器存在时，则表示定时器已经在运行中，需要返回
	// 		if (timer) return
	// 		timer = setTimeout(() => {
	// 			fn.apply(this, arguments)
	// 			timer = null
	// 		}, delay)
	// 	}
	// },
	// 防抖函数
	// 首次运行时把定时器赋值给一个变量， 第二次执行时，
	// 如果间隔没超过定时器设定的时间则会清除掉定时器，
	// 重新设定定时器， 依次反复， 当我们停止下来时，
	// 没有执行清除定时器， 超过一定时间后触发回调函数。
	// 参考文档：https://segmentfault.com/q/1010000021145192
	debounce(fn, delay) {
		let timer
		return function() {
			const that = this
			const _args = arguments // 存一下传入的参数
			if (timer) {
				clearTimeout(timer)
			}
			timer = setTimeout(function() {
				fn.apply(that, _args)
			}, delay)
		}
	},
	// 节流
	// 节流:触发函数事件后，短时间间隔内无法连续调用，只有上一次函数执行后，过了规定的时间间隔，才能进行下一次的函数调用。
	throttle(fn, gapTime) {
		if (gapTime == null || gapTime == undefined) {
			gapTime = 1500
		}
		let _lastTime = null
		// 返回新的函数
		return function() {
			let _nowTime = +new Date()
			if (_nowTime - _lastTime > gapTime || !_lastTime) {
				fn.apply(this, arguments) //将this和参数传给原函数
				_lastTime = _nowTime
			}
		}
	},
	akaiLog(v) {
		console.info("QQ：1494598731", "WX:Akaibiu", v);
	}
};

export default tool;
