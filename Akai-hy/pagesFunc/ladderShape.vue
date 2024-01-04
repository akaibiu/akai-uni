<template>
	<view class="content">
		<view class="tab" @click="optionValue=!optionValue">
			<view class="item" :class="optionValue?'active':''">选项卡1</view>
			<view class="item" :class="!optionValue?'active':''">选项卡2</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				optionValue: false
			}
		},
		onLoad() {

		},
		methods: {

		}
	}
</script>

<style>
	.tab {
		display: flex;
		width: 300px;
		align-items: flex-end;
	}
	.tab .item {
		flex: 1;
		height: 40px;
		background: #eee;
		border-radius: 5px 5px 0 0;
		position: relative;
		list-style: none;
		text-align: center;
	}
	.tab .item.active {
		height: 45px;
		background: #66caff;
	}
	.tab .item:first-child:before {
		content: '';
		display: none;
		width: 10px;
		height: 100%;
		background: #66caff;
		position: absolute;
		right: -5px;
		top: 0;
		z-index: 10;
		border-radius: 0 5px 0 0;
		transform: skew(10deg);
	}
	.tab .item:first-child.active:before {
		display: block;
	}
	.tab .item:last-child:before {
		content: '';
		display: none;
		width: 10px;
		height: 100%;
		background: #66caff;
		position: absolute;
		left: -5px;
		top: 0;
		z-index: 10;
		border-radius: 5px 0 0 0;
		transform: skew(-10deg);
	}
	.tab .item:last-child.active:before {
		display: block;
	}
</style>
