/**
 * @description 如何使用状态机来存储增删改查数据呢？
 *  1.在下面的state对象里面添加一个字段名(建议以vuex开头)，这个字段将用来作为操作的数据。
 *  2.通过this.vuex_'xxxx' 即可使用或者打印状态机的数据
 *  3.通过this.$tn.vuex('vuex_名字',param)
 *  @param {String,Object,Boolean...} param作为更新状态机数据的value值
 *  @see App.vue第29行代码即为存储示例.
 *  @see pages-mine-mine.vue中第243行代码即为如何取vuex的数据
 *  @author Coding by Akai,Dear user,if you think this a litte uncertain,please add my WeChat to contact me;
 *  @description WeChat Akaibiu (添加时请备注来意,谢谢~!!!)
 *  @version 1.0.0 
 */
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const store = new Vuex.Store({
	state: {
		// ！！！以下就是您需要存在状态机的字段
		vuex_frenidList: [], 
	},
	mutations: {
		$tStore(state, payload) {
			// 判断是否多层调用，state中为对象存在的情况，例如user.info.score = 1
			let nameArr = payload.name.split('.')
			let saveKey = ''
			let len = nameArr.length
			if (len >= 2) {
				let obj = state[nameArr[0]]
				for (let i = 1; i < len - 1; i++) {
					obj = obj[nameArr[i]]
				}
				obj[nameArr[len - 1]] = payload.value
				saveKey = nameArr[0]
			} else {
				// 单层级变量
				state[payload.name] = payload.value
				saveKey = payload.name
			}
		}
	},
	actions: {}
})
export default store