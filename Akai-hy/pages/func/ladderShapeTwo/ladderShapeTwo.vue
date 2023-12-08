<template>
	<view class="content">

		<view class="tab" @click="tabCurrent=!tabCurrent">
			<view class="item" :class="tabCurrent?'active':''">小周</view>
			<view class="item" :class="!tabCurrent?'active':''">阿凯</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				tabCurrent: false
			}
		},
	}
</script>

<style>
	.tab {
		display: flex;
		width:100%;
		align-items: flex-end;
	}

	.tab .item {
		flex: 1;
		height: 40px;
		background: #eee;
		border-radius: 5px 5px 0 0;
		position: relative;
		list-style: none;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.tab .item.active {
		height: 45px;
		background: plum;
	}

	.tab .item:first-child:before {
		content: '';
		display: none;
		width: 10px;
		height: 100%;
		background: plum;
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
		background: plum;
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
