// 此处代码如果有错误或者需要优化的地方，请联系作者。(小伙伴们在使用的时候切记不要忘了暴露store,这个错很多小伙伴都犯过!切记)
import App from './App';
import Vue from 'vue';

// 引入全局公共功能函数
import tool from '@/utils/common.js';
Vue.prototype.tool=tool;

// 引入全局TuniaoUI
import TuniaoUI from 'tuniao-ui';
Vue.use(TuniaoUI);

// 引入全局的uView-Ui 
import uView from "uview-ui";
Vue.use(uView);

// 引入store
import store from './store';

// 引入TuniaoUI提供的vuex简写方法
let vuexStore = require('@/store/$tn.mixin.js')
Vue.mixin(vuexStore)

// 引入lodash,把lodash挂载在原型上面(由于此方法会偶尔报错'_ is not defined',小程序的全局对象跟browser的全局对象不同，所以lodash使用browser全局对象下的api会报错。)
// import _ from 'lodash';
// Vue.prototype.$_ = _ ; 

Vue.config.productionTip = false;
App.mpType = 'app';
const app = new Vue({
	store,
    ...App
})
app.$mount()
