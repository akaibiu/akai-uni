<template>
	<view class="content">
		<z-paging ref="paging" v-model="dataList" @query="queryList">
			<view class="item" v-for="(item,index) in dataList" :default-page-no="1" :default-page-size="50" :refresher-complete-delay="500" :delay="300" :safe-area-inset-bottom="true" :use-custom-refresher="true">
				<view class="item-title">{{item.target.title}}</view>
			</view>
		</z-paging>
	</view>
</template>

<script>
	import {zhiHuHotListApi} from '@/apis/user.js';  // 引入封装的第二层获取知乎热榜接口的功能函数
	export default {
		data() {
			return {
				dataList: [],
				pageSize:50,
			};
		},
		methods: {
			queryList(pageNo, pageSize) {
				var param = {limit: this.pageSize,desktop: true};
				// --------------参数截取为此接口额外要求,如果有接口需要把参数暴露在地址栏(你先和后端切磋下)
				var paramArr = [];
				for (var key in param) {
					paramArr.push(key + "=" + param[key]);
				};
				let str = paramArr.join('&');
				//----------------------------------------一下请求未示例代码(后续自己请求需要上传pageSize和pageNum)
				zhiHuHotListApi(str).then(res => {
					const {data} = res;
					console.log(data,'结构的数据');
					//请勿在网络请求回调中给dataList赋值！！只需要调用complete就可以了
					this.$refs.paging.complete(data);
				}).catch(err => {
					console.log(err);
					//如果请求失败写this.$refs.paging.complete(false)，会自动展示错误页面
					//注意，每次都需要在catch中写这句话很麻烦，z-paging提供了方案可以全局统一处理
					//在底层的网络请求抛出异常时，写uni.$emit('z-paging-error-emit');即可
					this.$refs.paging.complete(false);
				})
			}
		},
	};
</script>

<style lang="less" scoped>
	// less 功能函数(后续会推出全局less)
	.deflex(){
		display: flex;
		justify-content: flex-start;
		align-items: center;
	}
	.dflexsb(){
		.deflex();
		justify-content: space-between;
	}
	.dflexsa(){
		.deflex();
		justify-content: space-around;
	}
	.item{
		padding: 20rpx;
		box-sizing: border-box;
		border: 2rpx solid #eee;
	}
</style>
