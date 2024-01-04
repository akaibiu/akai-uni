<script>
	import config from '@/config/config.js';
	export default {
		onLaunch: function() {
			this.initConfig();
		},
		onShow() {
			// 1.以下为Tuniao-Ui的vuex使用方法，例如如下创建一个数组arr。使用this.$t.vuex('vuex_frenidList',arr);
			// 2.在store下的index.js里面的 state 对象里面定义你的要存储的数据字段，例如 vuex_frenidList 。建议 vuex_开头。
			// 3.获取vuex数据,直接使用 this.vuex_frenidList 即可获取到状态机的数据。
			var arr=[
				{name:'林允儿',age:22},
				{name:'刘亦菲',age:21},
			];
			this.$tn.vuex('vuex_frenidList',arr);
			console.log(`About Plugin     %cPluginsVersion%cv1.0.4`,'background-color: #5ffcef; padding: 7px; color: #fff;','background-color: #ea7ded; color: #fff; padding: 7px;');
			console.log(`About Akai       %c四川-成都%c回首往昔，光阴似箭。学识尚浅，阅历如初。若有疑问或遇知音。以下有我的联系方式`,'background-color: #5ffcef; padding: 7px; color: #fff;','background-color: #ea7ded; color: #fff; padding: 7px;');
			console.log(`My WeChat        %cWeChat%cAkaibiu`,'background-color: #ea7ded; padding: 7px; color: #fff;','background-color: #5ffcef; color: #fff; padding: 7px;');
			console.log(`My Personal Blog %chttps://salephine.asia`,'background-color: #5ffcef; color: #fff; padding: 7px;');
			console.log(`Dcloud Plugins   %chttps://ext.dcloud.net.cn/publisher?id=690316`,'background-color: #ea7ded; color: #fff; padding: 7px;');
			console.log(`Github Projects  %chttps://github.com/akaibiu`,'background-color: #5ffcef; color: #fff; padding: 7px;');
			console.log(`Gitee Projects   %chttps://gitee.com/AkaiBlog`,'background-color: #ea7ded; color: #fff; padding: 7px;');
			console.log(`Blessing User    %c希望各位开发者们在使用该模板的时候在评论区留下您的宝贵意见!%c若您认为该插件对您有帮助，感谢您帮我点个一键三连!`,'background-color: #ea7ded; padding: 7px; color: #fff;','background-color: #5ffcef; color: #fff; padding: 7px;');
		},
		methods: {
			// 挂载全局配置信息
			initConfig() {
				this.globalData.config = config;
			},
		}
	}
</script>
<style lang="scss">
	// 引入Tuniao-Ui的样式文件(如果还需引入uView或者其他框架，如下即可)
	@import './tuniao-ui/index.scss';
	@import "uview-ui/index.scss";
	@import './tuniao-ui/iconfont.css';
	// 在使用animate.css的时候注意一定要把animate.css文件中的 :root选择器改为 page (切记)。
	@import '@/static/animate/animate.css';
</style>
