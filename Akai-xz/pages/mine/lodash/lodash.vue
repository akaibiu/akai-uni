<template>
	<view class="container">
		<button type="default" @click="throttleClick">测试节流</button>
		<button type="default" @click="debounceClick">测试防抖</button>
	</view>
</template>

<script>
	import _ from 'lodash';
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			debounceClick:_.throttle(function(){
				this.tool.toastTip("测试防抖函数输出")
			},2000),
			throttleClick:_.debounce(function(){
				this.tool.toastTip("测试节流函数输出")
			},2000)
		}
	}
</script>

<style lang="less" scoped>

</style>
