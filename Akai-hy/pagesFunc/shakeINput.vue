<template>
	<view class="content">
		<input type="text" :class="flag?'':'apply-shake'">
		<button @click="changeStatus">点我试试</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
flag:false,
			}
		},
		methods: {
	changeStatus(){
		this.flag=!this.flag;
	}
		}
	}
</script>

<style lang="less" scoped>
	.content {
		padding: 30rpx;
		box-sizing: border-box;
		input {
			border: 2rpx solid #00dd00;
			margin: 40rpx;
		}
	}
</style>
