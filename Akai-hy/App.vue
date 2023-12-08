<script>
	import config from '@/config/config.js';
	export default {
		onLaunch: function() {
			this.initConfig()
		},
		onShow() {
			console.log(`About Plugin     %cPluginsVersion%cv1.0.5`,
				'background-color: #5ffcef; padding: 7px; color: #fff;',
				'background-color: #ea7ded; color: #fff; padding: 7px;');
			console.log(`About Akai       %c四川-成都%c回首往昔，光阴似箭。学识尚浅，阅历如初。若有疑问或遇知音。以下有我的联系方式`,
				'background-color: #5ffcef; padding: 7px; color: #fff;',
				'background-color: #ea7ded; color: #fff; padding: 7px;');
			console.log(`My WeChat        %cWeChat%cAkaibiu`, 'background-color: #ea7ded; padding: 7px; color: #fff;',
				'background-color: #5ffcef; color: #fff; padding: 7px;');
			console.log(`My Personal Blog %chttps://salephine.asia`,
				'background-color: #5ffcef; color: #fff; padding: 7px;');
			console.log(`Dcloud Plugins   %chttps://ext.dcloud.net.cn/publisher?id=690316`,
				'background-color: #ea7ded; color: #fff; padding: 7px;');
			console.log(`Github Projects  %chttps://github.com/akaibiu`,
				'background-color: #5ffcef; color: #fff; padding: 7px;');
			console.log(`Gitee Projects   %chttps://gitee.com/AkaiBlog`,
				'background-color: #ea7ded; color: #fff; padding: 7px;');
			console.log(`Blessing User    %c希望各位开发者们在使用该模板的时候在评论区留下您的宝贵意见!%c若您认为该插件对您有帮助，感谢您帮我点个一键三连!`,
				'background-color: #ea7ded; padding: 7px; color: #fff;',
				'background-color: #5ffcef; color: #fff; padding: 7px;');
		},
		onLoad() {
			this.$tn.vuex('vuex_frenidList',[{name:'林允儿',age:22},{name:'刘亦菲',age:21},{name:'周淑怡',age:23}]);
		},
		methods: {
			// 挂载全局配置信息
			initConfig() {
				this.globalData.config = config;
			},
		}
	}
</script>
<style>
	page {
		margin: 0;
		padding: 0;
		height: 100%;
		width: 100%;
	}
	/* 抖动输入强提醒 */
	@keyframes shake {
		10%,
		90% {
			transform: translate3d(-1px, 0 0);
		}
		20%,
		80% {
			transform: translate3d(2px, 0, 0);
		}
		30%,
		50%,
		70% {
			transform: translate3d(-4px, 0, 0);
		}
		40%,
		60% {
			transform: translate3d(4px, 0, 0);
		}
	}
	.apply-shake {
		animation: shake 0.82s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
	}
</style>
<style lang="scss">
	@import "uview-ui/index.scss";
	// 在使用animate.css的时候注意一定要把animate.css文件中的 :root选择器改为 page (切记)。
	@import '@/static/animate/animate.css';
	// 去掉页面滚动条
	::-webkit-scrollbar {
		display: none !important;
		width: 0 !important;
		height: 0 !important;
		-webkit-appearance: none;
		background: transparent;
	}
</style>
