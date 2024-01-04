<template>
	<view class="wrap">
		<text class="animate__animated animate__pulse" @click="navigatorTo">一段测试animate.css的文字</text>
		<u-button type="primary" shape="circle" text="按钮形状" @click="navigatorTo"></u-button>
		<tn-button :plain="true" shape="round" @click="navigatorTo">镂空按钮</tn-button>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		methods: {
			navigatorTo(){
				uni.navigateTo({
					url:'/pagesIndex/index/index'
				})
			}
		}
	}
</script>

<style lang="less" scoped>
	.dflex() {
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.textColor() {
		background-image: linear-gradient(120deg, #e0c3fc 0%, #8ec5fc 100%);
		-webkit-background-clip: text;
		color: transparent;
	}
	.animate__pulse {
		animation-duration: 1500ms; //控制动画执行时间
		animation-iteration-count: infinite;
	}
	.wrap {
		width: 100%;
		height: 100%;
		.dflex();
		flex-direction: column;
		line-height: 300rpx;
		text{
			.textColor();
		}
	}
</style>