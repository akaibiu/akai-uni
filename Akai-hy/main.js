import App from './App';
import Vue from 'vue';

// 引入store
import store from './store';

// 引入全局公共功能函数
import tool from '@/utils/common.js';
Vue.prototype.tool=tool;

// 引入全局的uView-Ui 
import uView from "uview-ui";
Vue.use(uView);

// 引入vuex工具
import vuexTool from 'vuex_tool'
Vue.use(vuexTool)

// 引入提供的vuex简写方法(@Copy By TuniaoUi)
let vuexStore = require('@/store/$tn.mixin.js')
Vue.mixin(vuexStore)

Vue.config.productionTip = false;
App.mpType = 'app';
const app = new Vue({
	store,
    ...App
})
app.$mount()
